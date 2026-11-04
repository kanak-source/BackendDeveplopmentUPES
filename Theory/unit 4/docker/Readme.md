# 🐳 Unit 4 — Docker

This unit covers the fundamentals of **Docker and containerization**, including Docker images, containers, networking, volumes, port mapping, Dockerfiles, Docker Compose, and image/container management.

---

## 📚 Topics Covered

- Docker installation and environment verification
- Docker images and containers
- Pulling and removing images
- Running and managing containers
- Interactive and detached containers
- Port mapping
- Docker networking
- Docker volumes and bind mounts
- Container logs and statistics
- Docker inspection
- Creating custom images
- Dockerfile
- Docker image save/load
- Container export
- Docker Compose
- Docker cleanup commands

---

## 📂 Practical Implementations

### ☕ 1. Java Application using Dockerfile

A simple Java application was containerized using **Ubuntu 22.04 and OpenJDK 17**.

📁 **[View Java Dockerfile Practical](./java-dockerfile/)**

The practical demonstrates:

- Creating a Java program
- Using Ubuntu as the base image
- Installing OpenJDK 17
- Setting a working directory
- Copying source code into an image
- Compiling Java during image creation
- Building a custom Docker image
- Running the application inside a Docker container

### Files

- [`Dockerfile`](./java-dockerfile/Dockerfile)
- [`Hello.java`](./java-dockerfile/Hello.java)

### Build Image

```bash
docker build -t java-app:2.0 .
```

### Run Container

```bash
docker run java-app:2.0
```

Expected output:

```text
Hello from Docker container!
```

---

### 🐳 2. Docker Compose

Docker Compose was explored for defining and managing container services through a YAML configuration file.

📁 **[View Docker Compose Practical](./compose-demo/)**

### File

- [`compose.yaml`](./compose-demo/compose.yaml)

Example commands:

```bash
docker compose up -d
docker compose ps
docker compose down
```

---

## 🖥️ Docker Environment Commands

### Check Docker Version

```bash
docker version
```

Displays Docker Client and Server version information.

### Docker System Information

```bash
docker info
```

Displays detailed information about the Docker environment.

---

## 🖼️ Docker Images

List images:

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

Pull an image:

```bash
docker pull ubuntu
```

Pull a specific version:

```bash
docker pull ubuntu:22.04
```

Remove an image:

```bash
docker rmi image_name
```

---

## 📦 Docker Containers

Run a container:

```bash
docker run ubuntu
```

Run an interactive container:

```bash
docker run -it ubuntu bash
```

Run with a custom name:

```bash
docker run -it --name test ubuntu bash
```

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

Start, stop, and restart a container:

```bash
docker start container_name
docker stop container_name
docker restart container_name
```

Remove a container:

```bash
docker rm container_name
```

Force remove:

```bash
docker rm -f container_name
```

---

## 💻 Accessing a Running Container

Execute a new Bash shell inside a running container:

```bash
docker exec -it container_name bash
```

Attach to the container's main process:

```bash
docker attach container_name
```

---

## 🌐 Port Mapping

Example:

```bash
docker run -d --name web -p 8080:80 nginx
```

Here:

```text
Host Port 8080 → Container Port 80
```

The Nginx server can then be accessed using:

```text
http://localhost:8080
```

General syntax:

```bash
docker run -p host_port:container_port image_name
```

---

## 🔗 Docker Networking

List Docker networks:

```bash
docker network ls
```

Create a custom network:

```bash
docker network create mynet
```

Run a container on the network:

```bash
docker run -d --name network_web --network=mynet nginx
```

---

## 💾 Docker Volumes

Create a volume:

```bash
docker volume create mydata
```

List volumes:

```bash
docker volume ls
```

Mount the volume:

```bash
docker run -v mydata:/data ubuntu
```

Read-only volume:

```bash
docker run -v mydata:/data:ro ubuntu
```

### Bind Mount

General syntax:

```bash
docker run -v /host/path:/container/path ubuntu
```

A bind mount maps a directory from the host machine directly into a container.

---

## 📋 Logs and Monitoring

View container logs:

```bash
docker logs container_name
```

Follow live logs:

```bash
docker logs -f container_name
```

View the last 50 lines:

```bash
docker logs --tail 50 container_name
```

View logs from the last 10 minutes:

```bash
docker logs --since 10m container_name
```

View live resource usage:

```bash
docker stats
```

Inspect detailed container information:

```bash
docker inspect container_name
```

---

## ☕ Java Container Practical

An Ubuntu container was created and configured manually with Java:

```bash
docker run -it --name java_lab ubuntu:22.04 bash
```

OpenJDK 17 was installed:

```bash
apt update
apt install -y openjdk-17-jdk
```

Java installation was verified using:

```bash
javac --version
```

Application directory:

```bash
mkdir -p /home/app
cd /home/app
```

The Java program was compiled and executed using:

```bash
javac Hello.java
java Hello
```

---

## 🏗️ Creating an Image from a Container

A custom image was created from the configured Java container:

```bash
docker commit java_lab myrepo/java-app:1.0
```

The image can be executed using:

```bash
docker run -it myrepo/java-app:1.0 bash
```

---

## 📤 Save and Load Docker Images

Save an image:

```bash
docker save -o java-app.tar myrepo/java-app:1.0
```

Load the saved image:

```bash
docker load -i java-app.tar
```

---

## 📦 Exporting a Container

Export a container filesystem:

```bash
docker export java_lab > container.tar
```

### Save vs Export

| Command | Purpose |
|---|---|
| `docker save` | Saves a Docker image |
| `docker load` | Loads a saved Docker image |
| `docker export` | Exports a container filesystem |
| `docker import` | Creates an image from an exported filesystem |

---

## 🐳 Dockerfile

The Java application was also containerized using a Dockerfile:

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

Build without cache:

```bash
docker build --no-cache -t java-app:2.1 .
```

---

## ⚙️ Common Docker Run Options

| Option | Purpose |
|---|---|
| `-it` | Interactive terminal |
| `-d` | Detached/background mode |
| `--rm` | Automatically remove container after exit |
| `--name` | Assign a custom container name |
| `-p` | Map host and container ports |
| `-P` | Automatically publish exposed ports |
| `-v` | Mount a volume or bind mount |
| `-e` | Set environment variables |
| `--network` | Connect to a Docker network |
| `--restart=always` | Automatically restart the container |

---

## 🧹 Docker Cleanup

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

More extensive cleanup:

```bash
docker system prune -a
```

Include unused volumes:

```bash
docker system prune --volumes
```

> **Note:** Cleanup commands should be used carefully because they may permanently remove Docker resources.

---

## 🎯 Key Learning Outcomes

After completing this unit, I gained practical understanding of:

- The difference between Docker images and containers
- Creating and managing containers
- Working with Docker images and tags
- Port mapping and container networking
- Persistent storage using volumes
- Bind mounts
- Container logs and resource monitoring
- Building custom images using Dockerfiles
- Creating images using `docker commit`
- Saving, loading, and exporting Docker resources
- Running Java applications inside containers
- Basic Docker Compose workflow

---

## 📁 Repository Navigation

- ☕ [Java Dockerfile Practical](./java-dockerfile/)
- 🐳 [Docker Compose Practical](./compose-demo/)
- 📄 [Java Source Code](./java-dockerfile/Hello.java)
- 🐳 [Dockerfile](./java-dockerfile/Dockerfile)
- ⚙️ [Compose Configuration](./compose-demo/compose.yaml)

---

### 🔙 Navigation

[⬅️ Back to Backend Development Theory](../README.md)