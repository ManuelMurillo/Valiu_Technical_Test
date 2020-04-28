# Valiu Technical Test

Aplicacion creada para solicitar el cargo de desarrollador de la Oficina Asesora de Sistemas de la Universidad Distrital

## Requisitos

Docker
docker-compose
portainer (si se desea visualizar los contenedores)

## Descripcion

El aplicactivo se corre a travez del archivo docker-compose.yml una vez clonado el repositorio de forma local.

El aplicativo genera 3 contenedores desde el docker-compose.yml: 

1) Frontend (Vue/CLI)
2) Backend (ExpressJS)
3) Database (MongoDB)

# Instalacion

clonar el repositorio
```
git clone 
```
entrar en la carpeta generada
```
cd 
```
generar contenedores
```
docker-compose up
```

# AVISO

En caso de presentarse un error en el despliegue del aplicativo usar los siguientes comandos de forma consecutiva:
```
docker-compose build --no-cache
```
```
docker-compose up
```

En caso de no instalar docker y docker-compose, se puede descargar el repositorio, instalar y ejecutar cada carpeta por aparte
