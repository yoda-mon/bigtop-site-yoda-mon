a fanmade of Apache Bigtop site. please check the ML and JIRA about discussions.

## Work
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

# Add a required library here
npm install tsparticles
npm install react-particles

exit

rm -r bigtop-site/node_modules
rm bigtop-site/package-lock.json
```

```sh
# for edit
UID="$(id -u)" GID="$(id -g)" docker-compose up
```

```sh
# after installing JS libraries 
docker cp bigtop-site-yoda-mon-docusaurus-1:/bigtop-site/package.json .
```

```sh
# build
docker exec -i bigtop-site-yoda-mon-docusaurus-1 npm run build
docker cp bigtop-site-yoda-mon-docusaurus-1:/bigtop-site/build/. docs
```

## refs
### Generator
- Docusaurus https://docusaurus.io/
- Superset https://github.com/apache/superset/tree/master/docs
- ApiSix https://github.com/apache/apisix-website

### Logo
- https://www.apache.org/logos/

### Animation
- https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md
- https://codepen.io/matteobruni/pen/mdmqMKr
- https://web-den.com/particles