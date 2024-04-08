---
title: Intranet
description: Connect assets in intranet
keywords: [Casvisor, intranet, nat-traversal]
authors: [leo220yuyaodog]
---

The section will tell you how to config an intranet asset and connect to your intranet asset. Casvisor uses NAT traversal
technology to connect to your intranet asset. You need to deploy a Casvisor agent in your intranet machine. After the
agent is connected to the Casvisor server, you can both connect to the intranet RDP asset by Casvisor web UI and other tools like mstsc.

## Config Casvisor server

If you want start the NAT traversal service, you need to add `gatewayEndpoint` in `conf/app.conf`.

- The host is your Casvisor server public IP or domain.
- The port is the port that listens to the Casvisor agent connection request.

```ini
gatewayEndpoint = "<host>:<port>"
```

## Config intranet asset

Fill in the required fields that connect to your intranet asset.

- Name: The **hostname** of the intranet machine.
- Category: The category of the asset, select `Machine`.
- Protocol: The protocol of the asset, select `RDP`.
- Gateway port: The port in the Casvisor server that listens to the user's connection request.

For example, fill in Gateway port with `7000`. Then the user can connect to the intranet machine by:

```shell
ssh <Username>@<Casvisor server public IP> -p 7000
```

- Endpoint: The host or IP of the intranet machine.
- Port: The port of the application in the intranet machine.
- Username: The username of the application.
- Password: The password of the application.

![config](/img/asset/intranet/asset_intranet_config.png)

## Deploy Casvisor agent

Casvisor agent is the same as Casvisor server, just deploy Casvisor in your intranet machine and start it with the same `conf/app.conf` as the server.
