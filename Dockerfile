FROM jekyll/jekyll:3.8

ADD . /srv/jekyll/

EXPOSE 4000

WORKDIR /srv/jekyll

ENTRYPOINT ["jekyll", "serve"]