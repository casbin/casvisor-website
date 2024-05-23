---
title: (Optional) Try with Docker
description: Try Casvisor with Docker
keywords: [Casvisor, Docker, install, docker-compose]
authors: [leo220yuyaodog]
---

## Requirements

### Hardware

If you want to build the Docker image yourself, please ensure that your machine has at least **2GB** of memory. Casvisor's frontend is an NPM project of React. Building the frontend requires at least **2GB** of memory. Having less than **2GB** of memory may result in a frontend build failure.

If you only need to run the pre-built image, please ensure that your machine has at least **100MB** of memory.

### OS

All operating systems (Linux, Windows, and macOS) are supported.

### Docker

You can use **Docker (docker-engine version >= 17.05)** in Linux or **Docker Desktop** in Windows and macOS.

* [Docker](https://docs.docker.com/get-docker/)

Regardless of the operating system, users must ensure that they have **docker-engine version >= 17.05**. This is because we utilize the multi-stage build feature in the docker-compose.yml, which is supported in versions 17.05 and above. For more information, see <https://docs.docker.com/develop/develop-images/multistage-build/>.

If you are also using docker-compose, please ensure that you have **docker-compose version >= 2.2**. For Linux users, you also need to make sure that docker-compose is installed, as it is separate from docker-engine.

## Get the image

We have provided two DockerHub images:

| Name                                                                       | Description                                                  | Suggestion                                                                  |
|----------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------|
| [casvisor-all-in-one](https://hub.docker.com/r/casbin/casvisor-all-in-one) | Casvisor, MySQL database and guacamole-server are included in the image | This image already includes a toy database and is only for testing purposes |
| [casvisor](https://hub.docker.com/r/casbin/casvisor)                       | Only Casvisor is included in the image                       | This image can be connected to your own database and used in production     |

1. casbin/casvisor-all-in-one: This image includes the casvisor binary, a MySQL database and guacamole-server, and all
the necessary configurations. It is designed for new users who want to try Casvisor quickly. With this image, you can
start Casvisor immediately with just one or two commands, without any complex configuration. However, please note that
we **do not recommend** using this image in a production environment.

Casvisor uses Casdoor as the authentication and authorization system. The default configuration of Casvisor is to use
the office Casdoor server. If you want to use your own Casdoor server, you need to modify the configuration file `conf/app.conf`.

### **Option-1**: Use the toy database

Run the container with port `19000` exposed to the host. The image will be automatically pulled if it doesn't exist on the local host.

```shell
docker run -p 19000:19000 casbin/casvisor-all-in-one
```

Visit [**http://localhost:19000**](http://localhost:19000) in your browser.

### **Option-2**: Try with docker-compose

You can use [docker-compose.yml](https://github.com/casvisor/casvisor/blob/master/docker-compose.yml) in the official repository. Create a `conf/app.conf` directory in the same directory level as the `docker-compose.yml` file. Then, copy [app.conf](https://github.com/casvisor/casvisor/blob/master/conf/app.conf) from Casvisor. For more details about `app.conf`, you can see [configuration](/docs/basic/installation#configuration).

```bash
docker-compose up
```

That's it! :small_airplane:

Visit [**http://localhost:19000**](http://localhost:19000) in your browser.

*Note: If you dig deeper into the docker-compose.yml file, you may be puzzled by the environment variable we created called "RUNNING_IN_DOCKER". When the database 'db' is created via docker-compose, it is available on your PC's localhost but not the localhost of the Casvisor container. To prevent you from running into troubles caused by modifying app.conf, which can be quite difficult for a new user, we provided this environment variable and pre-assigned it in the docker-compose.yml. When this environment variable is set to true, localhost will be replaced with host.docker.internal so that Casvisor can access the database.*

### **Option-3**: Try directly with the standard image

#### MySQL

Mysql is required for Casvisor. If you don't have a MySQL database, you can run it with the following command:

```shell
docker run  \
       -p 3306:3306 \
       -e MYSQL_ROOT_PASSWORD=123456 \
       -v /usr/local/docker/mysql:/var/lib/mysql \
       mysql:8.0.25
```

#### Run Casvisor

Create `conf/app.conf`. You can copy it from [conf/app.conf](https://github.com/casvisor/casvisor/blob/master/conf/app.conf) in Casvisor. For more details about `app.conf`, you can see [configuration](/docs/basic/installation#configuration).

Then run

```bash
docker run  -p 19000:19000 -v /folder/of/app.conf:/home/casvisor/conf casbin/casvisor:latest
```

Anyway, just **mount the folder of app.conf to /home/casvisor/conf** and start the container.

:::tip

If it is not convenient to mount the configuration file to a container, using environment variables is also a possible solution.

```bash title="example"

docker run \
  -e driverName=mysql \
  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \
  -e casdoorEndpoint=https://door.casdoor.com \
  -e clientId=b108dacba027db36ec26 \
  -e clientSecret=124140638b4f9de7e78e79ba22d451c17bfa9688 \
  -e casdoorOrganization=casbin \
  -e casdoorApplication=app-casvisor \
  -p 19000:19000 \
  casbin/casvisor:latest

```

:::

#### Run guacd

Casvisor uses guacamole-server to provide remote desktop access. If you want to use this feature, you need to run guacd. You can run guacd with the following command:

```shell
docker run -d --name guacd -p 4822:4822 guacamole/guacd
```

Visit [**http://localhost:19000**](http://localhost:19000) in your browser.
