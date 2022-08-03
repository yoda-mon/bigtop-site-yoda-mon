Docusaurus https://docusaurus.io/
Superset https://github.com/apache/superset/tree/master/docs
ApiSix https://github.com/apache/apisix-website


```sh
# config files preparation
mkdir bigtop-site
docker run -it --rm --name bigtop-site  -u $(id -u $USER):$(id -g $USER) -v $(pwd)/bigtop-site:/bigtop-site node:16.16.0-buster bash

cd /tmp
npx create-docusaurus@latest bigtop-site classic

Need to install the following packages:
  create-docusaurus@latest
Ok to proceed? (y) y
...
[SUCCESS] Created bigtop-site.

cp -R bigtop-site/* /bigtop-site/

exit

rm -r bigtop-site/node_modules
rm bigtop-site/package-lock.json
```

```sh
# for edit
UID="$(id -u)" GID="$(id -g)" docker-compose up
```

```sh
# build
docker exec -i bigtop-site-yoda-mon_docusaurus_1 npm run build
docker cp bigtop-site-yoda-mon_docusaurus_1:/bigtop-site/build bigtop-site/build
```

## refs

https://www.apache.org/logos/

