---
title: Setting up a NFS File share on Ubuntu.
date: "2024-06-08T22:12:03.284Z"
description: "Setting up a NFS File share on Ubuntu."
# draft: true
#comment
---

Last time we talked about setting up a plex server, but where should we put all the media? Of course you can store your media on the same server that plex is running, but where's the fun in that?


## Here's a step-by-step guide to set up an NFS server on Ubuntu 24.04 and connect to the NFS share from another server:

### Setting Up NFS Server on Ubuntu 24.04

1. **Update and Install NFS Server:**

   ```bash
   sudo apt update
   sudo apt install nfs-kernel-server
   ```

2. **Create the Directory to Share:**

   Create the directory you want to share and set the appropriate permissions.

   ```bash
   sudo mkdir -p /home/fsuser/share
   sudo chown -R nobody:nogroup /home/fsuser/share
   sudo chmod 777 /home/fsuser/share
   ```

3. **Configure NFS Exports:**

   Edit the `/etc/exports` file to add the directory you want to share.

   ```bash
   sudo nano /etc/exports
   ```

   Add the following line to share the directory with a specific subnet (e.g., `192.168.1.0/24`):

   ```plaintext
   /home/fsuser/share 192.168.1.0/24(rw,sync,no_subtree_check)
   ```

   - `rw`: Read/write access.
   - `sync`: Synchronous write operations.
   - `no_subtree_check`: Prevents subtree checking.

4. **Apply the Export Configuration:**

   ```bash
   sudo exportfs -a
   ```

5. **Restart NFS Server:**

   ```bash
   sudo systemctl restart nfs-kernel-server
   ```

6. **Adjust Firewall (if necessary):**

   If you have a firewall running, ensure that NFS traffic is allowed.

   ```bash
   sudo ufw allow from 192.168.1.0/24 to any port nfs
   sudo ufw reload
   ```

### Connecting to NFS Share from Another Server

1. **Install NFS Client:**

   On the client server, install the NFS client package.

   ```bash
   sudo apt update
   sudo apt install nfs-common
   ```

2. **Create a Mount Point:**

   Create a directory where you want to mount the NFS share.

   ```bash
   sudo mkdir -p /mnt/share
   ```

3. **Mount the NFS Share:**

   Manually mount the NFS share to test the connection.

   ```bash
   sudo mount 192.168.1.169:/home/fsuser/share /mnt/share
   ```

   Replace `192.168.1.169` with the IP address of your NFS server.

4. **Verify the Mount:**

   Check if the NFS share is mounted.

   ```bash
   df -h /mnt/share
   ```

5. **Automate the Mount at Boot:**

   To make the NFS share mount automatically at boot, add an entry to `/etc/fstab`.

   ```bash
   sudo nano /etc/fstab
   ```

   Add the following line:

   ```plaintext
   192.168.1.169:/home/fsuser/share /mnt/share nfs defaults 0 0
   ```

   Save the file and exit the editor.

6. **Test the Configuration:**

   Unmount and remount to test the `/etc/fstab` configuration.

   ```bash
   sudo umount /mnt/share
   sudo mount -a
   ```

By following these steps, you should be able to set up an NFS server on Ubuntu 24.04 and connect to the NFS share from another server. 
### If you encounter any issues, please provide more details, and I'll be happy to assist further.
