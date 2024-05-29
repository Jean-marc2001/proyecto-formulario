[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/4b1xKRoY)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15116765)
# Proyecto Dockerizado

Este proyecto utiliza Docker para gestionar y ejecutar una aplicación. A continuación se detallan las instrucciones para configurar y ejecutar el proyecto.

## Prerrequisitos

- Docker: Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo e instalarlo desde [Docker Hub](https://www.docker.com/products/docker-desktop).

## Estructura del Proyecto

- `Dockerfile`: Contiene las instrucciones para construir la imagen de Docker de la aplicación.
- `docker-compose.yaml`: Define los servicios, volúmenes y puertos necesarios para ejecutar la aplicación en un contenedor Docker.

## Configuración

### Dockerfile

El archivo `Dockerfile` se utiliza para crear la imagen de Docker de la aplicación. Aquí hay un ejemplo básico de un `Dockerfile`:

```Dockerfile
# Usar una imagen base oficial de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
```

### docker-compose.yaml

El archivo `docker-compose.yaml` define los servicios necesarios para ejecutar la aplicación. En este caso, tenemos un servicio llamado `app`.

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
```

## Uso

### Construir y Ejecutar

Para construir y ejecutar los contenedores, utiliza el siguiente comando:

```sh
docker-compose up --build
```

Este comando construirá la imagen de Docker definida en el `Dockerfile` y luego ejecutará los servicios definidos en el `docker-compose.yaml`.

### Detener

Para detener los contenedores, utiliza el siguiente comando:

```sh
docker-compose down
```

Este comando detendrá y eliminará los contenedores creados por `docker-compose`.

## Acceso a la Aplicación

Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación en tu navegador web en la dirección:

```
http://localhost:3000
```

## Notas Adicionales

- Asegúrate de que los puertos definidos en el `docker-compose.yaml` no estén siendo utilizados por otros servicios en tu máquina.
- Si haces cambios en el código de la aplicación, simplemente reinicia los contenedores para que los cambios se reflejen.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Añadir nueva característica'`).
4. Empuja tu rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

