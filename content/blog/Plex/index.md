---
title: Setting up a plex server on Ubuntu
date: "2024-06-04T22:12:03.284Z"
description: "Setting up a plex server on Ubuntu."
# draft: true
# comment
---

### After failing to configure a plex lxc container, I decided to go the old fashioned way and just start a fresh Ubuntu 22.04 VM and go from there. Now this post won't get into security and the various things you should do to a fresh install, but we will assume you have an install ready to go.

1. The first command you run will be:

   ```sh
   sudo wget -c downloads.plex.tv/plex-media-server-new/1.40.2.8395-c67dce28e/debian/plexmediaserver_1.40.2.8395-c67dce28e_amd64.deb
   ```

   This is the current version of plex, however this can and will change. so you can click [here](https://www.plex.tv/media-server-downloads/?cat=computer&plat=linux). Remove the HTTPS:// from the link and copy/paste into Ubuntu with `sudo wget -c` prefixed.

2. Then you will run
   ```sh
   sudo wget -c downloads.plex.tv/plex-media-server-new/1.40.2.8395-c67dce28e/debian/plexmediaserver_1.40.2.8395-c67dce28e_amd64.deb
   ```
   Again you may need to append to the most updated version.
   This will install plex.

**_Optional:_**
You can delete the plex downloaded files after the install if you would like with this command.

```sh
sudo rm plexmediaserver_1.40.2.8395-c67dce28e_amd64.deb
```

Now you're plex server is fully installed but we must start the service

```sh
sudo service plexmediaserver start
```

open your browser and go to:

```sh
http://<your-server-IP>:32400/web
```

Now you're in the portal and can setup your libraries. Next post will be on how we can setup a NFS server so you can have your plex media seperate from your server.

## If you have any questions please feel free to reach out!
