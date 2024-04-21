---
title: Command
description: Executing commands on multiple machines via SSH
keywords: [ssh, command, execute]
authors: [leo220yuyaodog]
---

## Overview

Casvisor provides a command feature that allows you to execute commands on multiple machines via SSH. This feature is
useful for managing multiple machines at the same time. You can execute commands on multiple machines at the same time,
and the results will be displayed in the web UI. Casvisor also exposes API for executing commands.

![command](/img/command/command.png)

## Usage

1. Click the `add` button in the command list page to add a new command.
2. Input the command in the command input box, if you want to execute multiple commands, you can input commands in multiple lines.
3. Select the assets of SSH protocol that you want to execute the command on.
4. Click the `Run All` button to execute the command on all selected assets. Or click the `Run` button to execute the command on a single asset.

## API

Casvisor provides an API for executing commands. The API is as follows:

```shell
Get /api/get-exec-output
Params:
- id: The id ( owner/name ) of the command
```

Response:

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "<asset name1>": "output",
        "<asset name2>": "output"
    }
}
```
