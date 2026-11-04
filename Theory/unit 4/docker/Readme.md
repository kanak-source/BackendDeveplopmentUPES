# Unit 4 - Docker

This unit covers the fundamentals of Docker and containerization, including Docker images, containers, networking, volumes, port mapping, Dockerfiles, Docker Compose, and container management.

---

## Topics Covered

- Docker installation and environment verification
- Docker images and containers
- Pulling and removing Docker images
- Running and managing containers
- Interactive and detached containers
- Port mapping
- Docker networking
- Docker volumes
- Bind mounts
- Container logs and monitoring
- Docker inspection
- Creating custom Docker images
- Dockerfile
- Docker image save and load
- Container export and import
- Docker Compose
- Docker cleanup commands

---

## Practical Implementations

### 1. Java Application Using Dockerfile

A simple Java application was containerized using Ubuntu 22.04 and OpenJDK 17.

[View Java Dockerfile Practical](./java-dockerfile/)

#### Files

- [Dockerfile](./java-dockerfile/Dockerfile)
- [Hello.java](./java-dockerfile/Hello.java)

#### Build the Image

```bash
docker build -t java-app:2.0 .
```

#### Run the Container

```bash
docker run java-app:2.0
```

Expected output:

```text
Hello from Docker container!
```

---

### 2. Docker Compose

Docker Compose is used to define and manage container services using a YAML configuration file.

[View Docker Compose Practical](./compose-demo/)

#### File

- [compose.yaml](./compose-demo/compose.yaml)

Basic commands:

```bash
docker compose up
docker compose up -d
docker compose ps
docker compose down
```

---

# Docker Basic Commands

## Docker Version

```bash
docker version
```

Displays Docker Client and Server version information.

## Docker System Information

```bash
docker info
```

Displays detailed information about the Docker environment, including containers, images, storage, CPU, and memory.

---

# Docker Images

List locally available Docker images:

```bash
docker images
```

List all images:

```bash
docker images -a
```

Display only image IDs:

```bash
docker images -q
```

Pull the latest Ubuntu image:

```bash
docker pull ubuntu
```

Pull a specific Ubuntu version:

```bash
docker pull ubuntu:22.04
```

The value after `:` represents the image tag.

Remove an image:

```bash
docker rmi image_name
```

Force removal:

```bash
docker rmi -f image_name
```

---

# Docker Containers

Run a container:

```bash
docker run ubuntu
```

Run an interactive container:

```bash
docker run -it ubuntu bash
```

Run a container with a custom name:

```bash
docker run -it --name test ubuntu bash
```

Run a container in detached mode:

```bash
docker run -d nginx
```

Automatically remove a container after it exits:

```bash
docker run --rm ubuntu
```

---

## List Containers

Display running containers:

```bash
docker ps
```

Display all containers:

```bash
docker ps -a
```

Display only container IDs:

```bash
docker ps -q
```

Display IDs of all containers:

```bash
docker ps -aq
```

---

## Start, Stop and Restart Containers

```bash
docker start container_name
docker stop container_name
docker restart container_name
```

---

## Remove Containers

Remove a stopped container:

```bash
docker rm container_name
```

Force-remove a container:

```bash
docker rm -f container_name
```

---

# Accessing Containers

Attach to the main process of a running container:

```bash
docker attach container_name
```

Execute a new Bash shell inside a running container:

```bash
docker exec -it container_name bash
```

`docker exec` creates a new process inside the running container, whereas `docker attach` connects to the container's existing main process.

---

# Port Mapping

Run Nginx with port mapping:

```bash
docker run -d --name web -p 8080:80 nginx
```

Here:

```text
Host Port 8080 -> Container Port 80
```

General syntax:

```bash
docker run -p host_port:container_port image_name
```

The Nginx application can then be accessed at:

```text
http://localhost:8080
```

Automatically publish exposed ports:

```bash
docker run -d -P nginx
```

---

# Docker Networking

List Docker networks:

```bash
docker network ls
```

Create a custom network:

```bash
docker network create mynet
```

Run a container using the custom network:

```bash
docker run -d --name network_web --network=mynet nginx
```

---

# Docker Volumes

Create a Docker volume:

```bash
docker volume create mydata
```

List volumes:

```bash
docker volume ls
```

Mount a volume:

```bash
docker run -v mydata:/data ubuntu
```

Mount a volume in read-only mode:

```bash
docker run -v mydata:/data:ro ubuntu
```

Docker volumes provide persistent storage independent of the lifecycle of a container.

---

# Bind Mounts

General syntax:

```bash
docker run -v /host/path:/container/path ubuntu
```

A bind mount maps a specific directory from the host machine directly into the container.

Example:

```bash
docker run --rm -v ~/docker-bind-demo:/data ubuntu:22.04 cat /data/test.txt
```

---

# Environment Variables

Environment variables can be passed to containers using `-e`.

```bash
docker run --rm -e MY_NAME=Kanak ubuntu:22.04 printenv MY_NAME
```

---

# Restart Policy

A restart policy can automatically restart a container when required.

```bash
docker run -d --name restart_demo --restart=always nginx
```

---

# Container Logs

Display container logs:

```bash
docker logs container_name
```

Follow logs continuously:

```bash
docker logs -f container_name
```

Display the last 50 lines:

```bash
docker logs --tail 50 container_name
```

Display logs generated during the last 10 minutes:

```bash
docker logs --since 10m container_name
```

---

# Docker Statistics

Display live resource usage of running containers:

```bash
docker stats
```

It provides information such as:

- CPU usage
- Memory usage
- Network I/O
- Block I/O
- Number of processes

---

# Docker Inspect

Display detailed information about a container:

```bash
docker inspect container_name
```

It provides information about container configuration, networking, ports, environment variables, mounts, state, and other metadata.

---

# Java Application Inside a Docker Container

Create an interactive Ubuntu container:

```bash
docker run -it --name java_lab ubuntu:22.04 bash
```

Update packages:

```bash
apt update
```

Install OpenJDK 17:

```bash
apt install -y openjdk-17-jdk
```

Verify Java installation:

```bash
javac --version
```

Create the application directory:

```bash
mkdir -p /home/app
cd /home/app
```

Create `Hello.java`:

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello from Docker container!");
    }
}
```

Compile the program:

```bash
javac Hello.java
```

Run the program:

```bash
java Hello
```

Expected output:

```text
Hello from Docker container!
```

---

# Creating an Image Using Docker Commit

Create an image from the configured container:

```bash
docker commit java_lab myrepo/java-app:1.0
```

Verify the image:

```bash
docker images
```

Run a new container using the image:

```bash
docker run -it myrepo/java-app:1.0 bash
```

Then:

```bash
cd /home/app
java Hello
```

---

# Docker Save and Load

Save a Docker image to a TAR archive:

```bash
docker save -o java-app.tar myrepo/java-app:1.0
```

Load the image:

```bash
docker load -i java-app.tar
```

Verify:

```bash
docker images
```

---

# Docker Export and Import

Export a container filesystem:

```bash
docker export java_lab > container.tar
```

Docker images can also be saved using:

```bash
docker save -o image.tar myrepo/java-app:1.0
```

## Difference

| Command | Purpose |
|---|---|
| `docker commit` | Creates an image from a container |
| `docker save` | Saves a Docker image as an archive |
| `docker load` | Loads an image from a saved archive |
| `docker export` | Exports a container filesystem |
| `docker import` | Creates an image from an exported filesystem |
| `docker push` | Uploads an image to a registry |
| `docker pull` | Downloads an image from a registry |

---

# Dockerfile

The Java application can be containerized automatically using a Dockerfile.

[View Dockerfile](./java-dockerfile/Dockerfile)

```dockerfile
FROM ubuntu:22.04

RUN apt update && apt install -y openjdk-17-jdk

WORKDIR /home/app

COPY Hello.java .

RUN javac Hello.java

CMD ["java", "Hello"]
```

Build the image:

```bash
docker build -t java-app:2.0 .
```

Run the image:

```bash
docker run java-app:2.0
```

Build without using cached layers:

```bash
docker build --no-cache -t java-app:2.1 .
```

Use a differently named Dockerfile:

```bash
docker build -f Dockerfile.dev -t myapp .
```

---

# Docker Compose

Docker Compose allows multiple container services to be defined in a single YAML file.

[View Compose Configuration](./compose-demo/compose.yaml)

Start services:

```bash
docker compose up
```

Start in detached mode:

```bash
docker compose up -d
```

Build before starting:

```bash
docker compose up --build
```

Stop and remove Compose services:

```bash
docker compose down
```

---

# Common Docker Run Options

| Option | Description |
|---|---|
| `-it` | Interactive terminal |
| `-d` | Detached mode |
| `--rm` | Automatically remove the container after exit |
| `--name` | Assign a name to the container |
| `-p` | Map host and container ports |
| `-P` | Automatically publish exposed ports |
| `-v` | Mount a volume or bind mount |
| `-e` | Set environment variables |
| `--network` | Connect the container to a network |
| `--restart=always` | Automatically restart the container |

---

# Docker Cleanup

Remove stopped containers:

```bash
docker container prune
```

Remove unused images:

```bash
docker image prune
```

Remove unused Docker resources:

```bash
docker system prune
```

Remove all unused images:

```bash
docker system prune -a
```

Include unused volumes:

```bash
docker system prune --volumes
```

These commands should be used carefully because removed Docker resources may not be recoverable.

---

# Key Learning Outcomes

After completing this unit, I gained practical understanding of:

- Docker images and containers
- Image tags and image management
- Container lifecycle management
- Interactive and detached containers
- Port mapping
- Docker networking
- Docker volumes and bind mounts
- Environment variables
- Container logs and resource monitoring
- Docker inspection
- Creating custom images using `docker commit`
- Building reproducible images using Dockerfiles
- Saving and loading Docker images
- Exporting container filesystems
- Running Java applications inside Docker containers
- Basic Docker Compose workflow
- Docker cleanup and resource management

---

# Repository Navigation

- [Java Dockerfile Practical](./java-dockerfile/)
- [Java Source Code](./java-dockerfile/Hello.java)
- [Dockerfile](./java-dockerfile/Dockerfile)
- [Docker Compose Practical](./compose-demo/)
- [Compose Configuration](./compose-demo/compose.yaml)

---

[Back to Backend Development Theory](../../README.md)