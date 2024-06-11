---
title: Setting Up a Proxmox VE Cluster
date: "2024-06-11T22:12:03.284Z"
description: "Setting Up a Proxmox VE Cluster"
# draft: true
# comment
---

## Introduction:

Proxmox Virtual Environment (VE) is a powerful, open-source platform for managing virtual machines (VMs) and containers. It provides an easy-to-use web interface and supports high availability (HA) clustering, making it ideal for both home labs and enterprise environments. In this post, we will walk through the steps to set up a Proxmox VE cluster.

## Prerequisites:

<ins>Before starting, ensure you have the following:

- At least two physical servers or VMs for the cluster nodes.
- Proxmox VE installed on each node. You can download it from the [official website](https://www.proxmox.com/en/downloads).
- Network connectivity between the nodes.
- Basic knowledge of Linux commands and networking.

## Step 1: Prepare Your Nodes

1. **Update Your Nodes**: Ensure that each node is up-to-date with the latest packages.

```bash
sudo apt update && apt full-upgrade -y
```

Set Hostnames: Set a unique hostname for each node.

```bash
hostnamectl set-hostname proxmox-node1
```

Replace proxmox-node1 with the appropriate hostname for each node.

Configure Host Files: Edit the /etc/hosts file on each node to include the IP addresses and hostnames of all nodes in the cluster.

```bash
192.168.1.101 proxmox-node1
192.168.1.102 proxmox-node2
```

Adjust the IP addresses and hostnames as necessary.

## Step 2: **Create the Cluster**

Initialize the Cluster on the First Node:

```bash
pvecm create my-cluster
```

Replace my-cluster with your desired cluster name.

Join Additional Nodes to the Cluster:
On each additional node, run the following command:

```bash
pvecm add 192.168.1.101
```

Replace 192.168.1.101 with the IP address of the first node.

## Step 3: **Verify the Cluster**

Check the Cluster Status: On any node, run:

```bash
pvecm status
```

You should see a list of all nodes in the cluster and their statuses.

### Test VM Migration: Create a test VM on one node and try migrating it to another node to ensure the cluster is functioning correctly.

## Step 4: **Configure High Availability (Optional)**

Install the HA Manager:

```bash
apt install proxmox-ve-ha-manager
```

Create an HA Group:

```bash
pvesh create /cluster/ha/groups -group MyGroup
```

Replace "MyGroup" with your desired group name.

Assign Resources to the HA Group: Assign VMs or containers to the HA group via the web interface or using the pvesh command.

### Conclusion:

Congratulations! You have successfully set up a Proxmox VE cluster. This setup allows you to manage VMs and containers across multiple nodes with ease and provides high availability for your critical workloads. Explore Proxmox's extensive features to further optimize and secure your virtual environment.
