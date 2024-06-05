After failing to configure a plex lxc container, I decided to go the old fashioned way and just start a fresh Ubuntu 22.04 VM and go from there. Now this post won't get into security and the various things you should do to a fresh install, but we will assume you have an install ready to go. 

1. The first command you run will be **sudo wget -c downloads.plex.tv/plex-media-server-new/1.40.2.8395-c67dce28e/debian/plexmediaserver_1.40.2.8395-c67dce28e_amd64.deb**
This is the current version, however this can and will change. so you can go https://www.plex.tv/media-server-downloads/?cat=computer&plat=linux and just swap out the italicized part of the previous link(make link look nice).

2. Then you will run **sudo wget -c downloads.plex.tv/plex-media-server-new/1.40.2.8395-c67dce28e/debian/plexmediaserver_1.40.2.8395-c67dce28e_amd64.deb** 
`This will install plex. 

***Optional*** 
You can delete the files after if you would like with this command.
**sudo rm plexmediaserver_1.29.2.6364-6d72b0cf6_amd64.deb** (Change this to the right version)

Now you're plex server is fully installed 

**sudo service plexmediaserver start**

open your browser and go to http://<server-I.P>:32400/web

Now you're in the portal and can setup your libraries. Next post will be on How we can setup a NFS server so you can have your plex media seperate from your server. 


