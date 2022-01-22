# Docker a lo MacGyver (Workshop Nerdear.la 2021)

Código de ejemplo para el workshop "Docker a lo MacGyver" en Nerdear.la 2021 ([link al video](https://www.youtube.com/watch?v=xt1g0RW4Xjk)).

## Imágenes de Docker usadas

Cada carpeta carpeta contiene ejemplos de una forma particular de usar Docker, y cada ejemplo puede usar uno o más imágenes de Docker. Para descargar las imágenes de antemano podés ejecutar:

### Todos los ejemplos juntos

```sh
echo golang:1.17.2-alpine python:3.9.7-alpine nginx:1.21.3-alpine node:14.18.1-alpine mongo:4.4.9-focal cypress/included:8.6.0 | xargs -n1 docker image pull
```

### Ejemplo 1

```sh
echo golang:1.17.2-alpine python:3.9.7-alpine | xargs -n1 docker image pull
```

### Ejemplo 2

```sh
echo python:3.9.7-alpine nginx:1.21.3-alpine | xargs -n1 docker image pull
```

### Ejemplo 3

```sh
echo node:14.18.1-alpine nginx:1.21.3-alpine mongo:4.4.9-focal | xargs -n1 docker image pull
```

### Ejemplo 4

```sh
echo node:14.18.1-alpine nginx:1.21.3-alpine mongo:4.4.9-focal cypress/included:8.6.0 | xargs -n1 docker image pull
```

### Ejemplo 5

```sh
echo node:14.18.1-alpine nginx:1.21.3-alpine | xargs -n1 docker image pull
```
