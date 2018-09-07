@echo off

docker stop site
docker rm site

docker build . -t brauner-jekyll 
docker run -d -it -p 4000:4000 --name=site brauner-jekyll

docker ps
@echo on 