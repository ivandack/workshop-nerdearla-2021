# Docker a lo MacGyver (Workshop Nerdear.la 2021)

Código de ejemplo para el workshop "Docker a lo MacGyver" en Nerdear.la 2021.

## Imágenes de Docker usadas

Cada carpeta carpeta contiene ejemplos de una forma particular de usar Docker, y cada ejemplo puede usar uno o más imágenes de Docker. Para descargar las imágenes de antemano podés ejecutar:

### Todos los ejemplos juntos

```sh
docker image pull golang:1.17.2-alpine python:3.9.7-alpine nginx:1.21.3-alpine node:14.18.1-alpine mongo:4.4.9-focal cypress/included:8.6.0
```

### Ejemplo 1

```sh
docker image pull golang:1.17.2-alpine python:3.9.7-alpine 
```

### Ejemplo 2

```sh
docker image pull python:3.9.7-alpine nginx:1.21.3-alpine
```

### Ejemplo 3

```sh
docker image pull node:14.18.1-alpine nginx:1.21.3-alpine mongo:4.4.9-focal
```

### Ejemplo 4

```sh
docker image pull node:14.18.1-alpine nginx:1.21.3-alpine mongo:4.4.9-focal cypress/included:8.6.0
```

### Ejemplo 5

```sh
docker image pull node:14.18.1-alpine nginx:1.21.3-alpine
```
