const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GoInstaller {
  constructor() {
    this.goVersion = '1.21.5'; // 可以调整版本
    this.platform = this.getPlatform();
    this.arch = this.getArch();
    this.installDir = path.join(process.cwd(), 'tools');
    this.binDir = path.join(process.cwd(), 'bin');
  }

  getPlatform() {
    const platformMap = {
      'darwin': 'darwin',
      'linux': 'linux',
      'win32': 'windows'
    };
    return platformMap[process.platform] || 'linux';
  }

  getArch() {
    const archMap = {
      'x64': 'amd64',
      'arm64': 'arm64',
      'ia32': '386'
    };
    return archMap[process.arch] || 'amd64';
  }

  getFileName() {
    const ext = this.platform === 'windows' ? '.zip' : '.tar.gz';
    return `go${this.goVersion}.${this.platform}-${this.arch}${ext}`;
  }

  getDownloadUrl() {
    return `https://dl.google.com/go/${this.getFileName()}`;
  }

  async downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);

      const request = https.get(url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          // 处理重定向
          file.close();
          fs.unlinkSync(dest);
          return this.downloadFile(response.headers.location, dest)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        }

        response.pipe(file);
      });

      request.on('error', (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });

      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
    });
  }

  extractArchive(archivePath) {
    console.log('Extracting Go SDK...');

    try {
      if (this.platform === 'windows') {
        // Windows ZIP 解压
        execSync(`powershell -command "Expand-Archive -Path '${archivePath}' -DestinationPath '${this.installDir}' -Force"`, { stdio: 'inherit' });
      } else {
        // Unix tar 解压
        execSync(`tar -xzf "${archivePath}" -C "${this.installDir}"`, { stdio: 'inherit' });
      }

      // 删除压缩包
      fs.unlinkSync(archivePath);
      console.log('Extraction completed!');

    } catch (error) {
      throw new Error(`Failed to extract archive: ${error.message}`);
    }
  }

  setupBinaries() {
    console.log('Setting up Go binaries...');

    // 创建 bin 目录
    if (!fs.existsSync(this.binDir)) {
      fs.mkdirSync(this.binDir, { recursive: true });
    }

    // Go SDK 安装路径
    const goRoot = path.join(this.installDir, 'go');
    const goBinDir = path.join(goRoot, 'bin');

    // 复制或链接主要的 go 二进制文件
    const binaries = ['go', 'gofmt'];

    binaries.forEach(binary => {
      const ext = this.platform === 'windows' ? '.exe' : '';
      const sourcePath = path.join(goBinDir, binary + ext);
      const targetPath = path.join(this.binDir, binary + ext);

      if (fs.existsSync(sourcePath)) {
        // 复制文件而不是创建符号链接（更兼容）
        fs.copyFileSync(sourcePath, targetPath);

        // 在非 Windows 系统上添加执行权限
        if (this.platform !== 'windows') {
          fs.chmodSync(targetPath, '755');
        }

        console.log(`✓ ${binary} installed`);
      }
    });

    // 创建环境变量设置脚本
    this.createEnvScript(goRoot);
  }

  createEnvScript(goRoot) {
    const envScript = this.platform === 'windows' ? 'setup-go-env.bat' : 'setup-go-env.sh';
    const scriptPath = path.join(this.binDir, envScript);

    let content;
    if (this.platform === 'windows') {
      content = `@echo off
set GOROOT=${goRoot}
set PATH=%GOROOT%\\bin;%PATH%
echo Go environment configured
go version
`;
    } else {
      content = `#!/bin/bash
export GOROOT="${goRoot}"
export PATH="$GOROOT/bin:$PATH"
echo "Go environment configured"
go version
`;
    }

    fs.writeFileSync(scriptPath, content);
    if (this.platform !== 'windows') {
      fs.chmodSync(scriptPath, '755');
    }

    console.log(`✓ Environment setup script created: ${scriptPath}`);
  }

  async install() {
    try {
      console.log(`Installing Go ${this.goVersion} for ${this.platform}-${this.arch}...`);

      // 创建必要的目录
      [this.installDir, this.binDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      });

      // 检查是否已经安装
      const goRoot = path.join(this.installDir, 'go');
      if (fs.existsSync(goRoot)) {
        console.log('Go SDK already installed, skipping download...');
        this.setupBinaries();
        return;
      }

      // 下载
      const fileName = this.getFileName();
      const downloadPath = path.join(this.installDir, fileName);
      const downloadUrl = this.getDownloadUrl();

      console.log(`Downloading from: ${downloadUrl}`);
      await this.downloadFile(downloadUrl, downloadPath);
      console.log('Download completed!');

      // 解压
      this.extractArchive(downloadPath);

      // 设置二进制文件
      this.setupBinaries();

      console.log('\n✅ Go SDK installation completed!');
      console.log('\nTo use Go in your scripts, add the following to your PATH:');
      console.log(`  ${this.binDir}`);
      console.log('\nOr source the environment script:');
      console.log(`  ${path.join(this.binDir, this.platform === 'windows' ? 'setup-go-env.bat' : 'source setup-go-env.sh')}`);

    } catch (error) {
      console.error('❌ Go SDK installation failed:', error.message);
      process.exit(1);
    }
  }
}

// 运行安装器
const installer = new GoInstaller();
installer.install();
