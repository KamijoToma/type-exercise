---
title: My journey with a fresh installed Fedora 42
---

This is a record of the setting up process of my Fedora OS. It may contains some useful informations that has benifit to you.

<!--more-->

> [!NOTE]
> Many practices are based on the advices by Gemini 2.5 Pro. However AI often leds to wrong way, thus I write this article.

I am new to Fedora, so mistakes may occur. Feel free to tell me mistakes and best practices in Issues.

## Install system

Download iso from Fedora website and put it in a USB stick with Ventoy. Follow the installation instructions of Fedora Installer, and you will get a fresh installed system.

I got a problem that GRUB cannot find the newly installed system, so when I reboot system fron livecd, the GRUB only show a Windows Boot Manager option. I managed to use the command line of GRUB to manually boot into Fedora(thanks to its BTRFS support and Gemini 2.5), and then run `grub2-mkconfig` to re-generate the GRUB config. This time it successfully detected Fedora. (Tips: run `os-prober` to get the list of OS that can be detected.)

## Configure System

### Hardware Security Key

I have a Canokey (like YubiKey, a hardware security key) and use it to sign my commits and do SSH authorizations. To use it, some configurations should be done.

#### GNUPG

Make sure `pcsc_scan` can detect your key. Then add a new file to `~/.gnupg/scdaemon.conf`

```
pcsc-driver /usr/lib64/libpcsclite.so.1 # Make sure the library exists
disable-ccid
```

Run `gnupg-conf --kill all` to restart gnupg process, and you got it! Now run `gpg --card-status`, your card should be shown.

In some weird situations, GNUPG cannot detect the key after re-plug it in (but `pcsc_scan` can). You may run `systemctl restart pcscd.socket` to restart the PCSC daemon. It cannot be reproduce stablly. [Related Issue](https://github.com/LudovicRousseau/PCSC/issues/99)

#### SSH Authorization

[Related Link](https://discussion.fedoraproject.org/t/using-yubikey-for-ssh-always-asking-for-password-gnome/75038/4)

I use smart card to provide private keys. By default ssh use its own `ssh-agent` to save the decrypted private key in `~/.ssh/`. GPG have a `gpg-agent` to provide keys from smart cards or keyboxes. So we will replace `ssh-agent` or other type of agent with `gpg-agent`. Here are the steps.

1. Add `enable-ssh-support` to `~/.gnupg/gpg-agent.conf` to enable this function
2. Set `SSH_AUTH_SOCK=$XDG_RUNTIME_DIR/gnupg/S.gpg-agent.ssh` in `~/.config/environment.d/10-ssh-auth-sock.conf` to export the ssh agent to environment
3. `Hidden=true` in `~/.config/autostart/gnome-keyring-ssh.desktop` which is a copy of `/etc/xdg/autostart/gnome-keyring-ssh.desktop`, this disable the existing ssh agent of GNOME Keyring.
4. Restart computer and it works.

#### Git commit signing

After configured the gpg, we can enforce every commit to be signed. 

First, we need to get the key ID to be use.

Run `gpg --list-secret-keys --keyid-format LONG` and find the the line of [signing keys], which has a capital alphabet [S] means signing. For example `ssb>  ed25519/EB759CEA46F653AA 2025-02-19 [S] [expires: 2027-02-19]`. The short ID is what we need, in this case it is `EB759CEA46F653AA`.

Then, run the following two command to configure Git, enforcing commit signing and the key used to sign.

```bash
git config --global user.signingkey KEY_SHORT_ID # Set key ID
git config --global commit.gpgSign true # Enforce signing
```

Ensure the smart card/keybox are available every time you make a commit, otherwise it will fail to commit.

### Setting up Chinese IME

I use Wusong Pinyin to type Chinese. It is a preset input algorithm of the Rime input engine, which is a intelligent candidate for inputing Traditional Chinese and Simplified Chinese.

Use the one-click script to install it, and it is out-of-the-box.

#### Customizing the ibus theme

Install the Customize IBus GNOME Extension developed by openSUSE developers, and you got many functions including the IME Indicator and IBus Theme customizing.

