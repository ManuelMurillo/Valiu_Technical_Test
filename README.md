# Valiu Technical Test

Aplicacion creada para como prueba tecnica por parte de Valiu

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
cd Valiu_Technical_Test/
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

En caso de no instalar docker y docker-compose, se puede descargar el repositorio, instalar y ejecutar cada API por aparte:

## Frontend

ir a la carpeta frontend
```
cd frontend/
```
y ejecutar
```
npm install
npm run serve
```

A traves de la url localhost:8080 se podra consumir el servicio


## Backend

ir a la carpeta frontend
```
cd backend/
```
y ejecutar
```
npm install
npm start
```

A traves de la url localhost:3000 el frontend podra consumir el servicio

## Nota

Para poder consumir el backend es necesario el motor de base de datos MongoDB, el archivo docker-compose.yml ya lo incluye, pero en caso de no instalarlo, es necesario instalarlo
