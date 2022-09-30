












 








 



 



#!/usr/bin/envsh

# abortar en caso de errores
set -e

# compilado
npm run build

# navega al directorio de salida de compilación
dist cd

# si estás desplegando en un dominio personalizado
# echo 'www.ejemplo.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# si estás desplegando en https://<NOMBRE DE USUARIO>.github.io
# git push -f git@github.com:<NOMBRE DE USUARIO>/<NOMBRE DE USUARIO>.github.io.git main

# si estás desplegando en https://<NOMBRE DE USUARIO>.github.io/<REPO>
# git push -f git@github.com:santiagoweb212/Toodo-app.git main:gh-pages

cd -
