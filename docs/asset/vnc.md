---
title: VNC
description: Casvisor Assets VNC
keywords: [assets vnc]
authors: [leoil]
---

## VCN Connect

VCN connection is similar to RDP connections.

1. Start Guacamole Server

    ```bash
    docker run --name guacd -d -p 4822:4822 guacamole/guacd
    ```

2. Add a new asset, set protocol to `vnc`
    ![add list](/img/asset/asset_list.png)

3. Connect to your asset by clicking the `connect` button

    ![connect asset](/img/asset/vnc.gif)
