const path = require('path');
const fs = require('fs');

const isWindows = process.platform === 'win32';
const projectRoot = process.cwd();
const binDir = path.join(projectRoot, 'bin');
const goRoot = path.join(projectRoot, 'tools', 'go');

// 设置环境变量
process.env.GOROOT = goRoot;
process.env.PATH = `${binDir}${path.delimiter}${path.join(goRoot, 'bin')}${path.delimiter}${process.env.PATH}`;

console.log('Environment configured:');
console.log(`GOROOT: ${process.env.GOROOT}`);
console.log(`Go binary: ${path.join(binDir, 'go' + (isWindows ? '.exe' : ''))}`);

// 验证 Go 是否可用
try {
  const { execSync } = require('child_process');
  const goVersion = execSync('go version', { encoding: 'utf8', env: process.env });
  console.log(`✓ ${goVersion.trim()}`);
} catch (error) {
  console.error('❌ Go not found in PATH');
  process.exit(1);
}
