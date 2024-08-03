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

For example:

```ini
gatewayEndpoint = door.casvisor.com:19100
```

## Config intranet asset

Fill in the required fields that connect to your intranet asset.

- Name: The **hostname** of the intranet machine. When the casvisor starts, it connects to the database to check whether
  the current hostname is the name of an asset, and if so, it starts in agent mode. So, make sure to fill in the correct hostname.
- Category: The category of the asset, select `Machine`.
- Protocol: The protocol of the asset, select `RDP`.
- Gateway port: The port in the Casvisor server that listens to the user's connection request.

For example, fill in Gateway port with `7000`. Then the user can connect to the intranet machine by:

```shell
ssh <Username>@<Casvisor server public IP> -p 7000
```

- Endpoint: Unlike public assets, the endpoint needs to be filled in with the application address of the private network.
  If you want to use SSH or RDP to connect to the host, enter 127.0.0.1
- Port: The port of the application in the intranet machine. Port 3389 is used by RDP and 22 by SSH by default. If you
  have a custom port, fill in your custom port.
- Username: The username of the application.
- Password: The password of the application.

![config](/img/asset/intranet/asset_intranet_config.png)

## Deploy Casvisor agent

You need to deploy a Casvisor on the host to which you are connected in the intranet. As mentioned in the previous chapter,
when the casvisor starts, it connects to the database to check whether the current hostname is the name of an asset, and
if so, it starts in agent mode. So the must configurations in the agent Casvisor `conf/app.conf` are below:

```ini
httpport = 19000
driverName = 
dataSourceName = 
dbName = 
gatewayEndpoint = door.casvisor.com:19100
```

It is **recommended** that you can copy the same configuration file `conf/app.conf` in the server Casvisor directly.
