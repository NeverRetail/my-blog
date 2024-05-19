---
title: My Adventures with Arch Linux on Proxmox
date: "2015-05-01T22:12:03.284Z"
description: "My Adventures with Arch Linux"
draft: true
---
Memes aside, configuring Arch linux on my proxmox server was a fun way to spend a saturday afternoon. I spent about three hours configuring everything, figured out some DNS issues and even installed a GUI! 

Step 1. Downloading the ISO.
    Installing the ISO is pretty straightforward. Select your choice of torrenting software and get the ISO from: [here](https://archlinux.org/download/)

There are of course other avenues such as Docker images, Netboot, Vagrant images and HTTP.

Step 2. Once you have your ISO downloaded and saved somewhere, Connect to your Proxmox instance and "Create VM". The only options I changed from the default were the BIOS settings under the "system" tab. I changed my settings from the Default(SeaBIOS) to OVMF (UEFI) and selected my EFI Storage. 
![Biossettings](./Screenshot1.png)

Step 3. Once you start your VM, You will want to press "esc" quickly to load into the Device Manager. And make sure "Attempt Secure Boot" is unchecked and shutdown the VM.
![SecureBoot](./Screenshot2.png)

Step 4. ITS ALIVE! Well not quite but we are getting there. With any luck you should be staring at this screen.
![terminal](./Screenshot3.png)
s