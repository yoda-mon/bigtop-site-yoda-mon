"use strict";(self.webpackChunkbigtop_site=self.webpackChunkbigtop_site||[]).push([[970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,license:'Licensed to the Apache Software Foundation (ASF) under one or more\ncontributor license agreements.  See the NOTICE file distributed with\nthis work for additional information regarding copyright ownership.\nThe ASF licenses this file to You under the Apache License, Version 2.0\n(the "License"); you may not use this file except in compliance with\nthe License.  You may obtain a copy of the License at\n\n   http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n'},i="Quickstart Guide",s={unversionedId:"getting-started/quickstart-guide",id:"getting-started/quickstart-guide",title:"Quickstart Guide",description:"The new Bigtop integration test framework aims to provide a one stop seamlessly integrated Hadoop ecosystem build and test solution to maximize the user experience . With Integration Test Framework 2.0, everything is under your control at a single entry of Gradle command.",source:"@site/docs/getting-started/quickstart-guide.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-guide",permalink:"/bigtop-site-yoda-mon/docs/getting-started/quickstart-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/quickstart-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,license:'Licensed to the Apache Software Foundation (ASF) under one or more\ncontributor license agreements.  See the NOTICE file distributed with\nthis work for additional information regarding copyright ownership.\nThe ASF licenses this file to You under the Apache License, Version 2.0\n(the "License"); you may not use this file except in compliance with\nthe License.  You may obtain a copy of the License at\n\n   http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n'},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/bigtop-site-yoda-mon/docs/category/getting-started"},next:{title:"General",permalink:"/bigtop-site-yoda-mon/docs/category/general"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preamble",id:"preamble",level:2},{value:"Build",id:"build",level:2},{value:"Deploy and Test",id:"deploy-and-test",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,r.kt)("p",null,"The new Bigtop integration test framework aims to provide a one stop seamlessly integrated Hadoop ecosystem build and test solution to maximize the user experience . With Integration Test Framework 2.0, everything is under your control at a single entry of Gradle command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build\n./gradlew hadoop-pkg-ind\n\n# Deploy\n./gradlew docker-provisioner\n")),(0,r.kt)("p",null,"Experience it by trying with following examples!"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have docker suits up. Go to docker website(",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"https://docs.docker.com/"),") to install docker on your environment. "),(0,r.kt)("li",{parentName:"ul"},"You need to have a minimum of Java 8 installed."),(0,r.kt)("li",{parentName:"ul"},"You cannot use root to complete the build.  It will fail without a cryptic error message.  You have been warned."),(0,r.kt)("li",{parentName:"ul"},'You may want to have git installed instead of download the source folder in that case you need git installed. (See "Build from branch and commit hash" at the end of this page and how this can be done automagically for you.  (If you installed git.)  I suggest reading the rest of this page first as its informative on what gradlew can do.)'),(0,r.kt)("li",{parentName:"ul"},"You have to have ~20 Gb free space to build. I'd suggest provisioning more. (Most people this won't be an issue but if you are using a Cloud VM it could be important)"),(0,r.kt)("li",{parentName:"ul"},"Download apache bigtop latest release at ",(0,r.kt)("a",{parentName:"li",href:"http://bigtop.apache.org/download.html"},"http://bigtop.apache.org/download.html"),". Untar and get into the directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shel"},"tar zxvf bigtop-X.Y.Z-project.tar.gz\ncd bigtop-X.Y.Z\n")),(0,r.kt)("h2",{id:"preamble"},"Preamble"),(0,r.kt)("p",null,"We will be using docker to complete the building of the image.  This is incredible important as this takes care of all the work of downloading the dependencies you need to build Bigtop. (This is what docker was made for after all.)  If you choose not to use docker you will consume a lot of time finding dependencies.--\x3e(Don't do it.)  Gradlew on Docker can build packages for various OS's/version.  You can specify which one to build via command line argument. (Examples shown below.)"),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"To build Hadoop ecosystem packages, just do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew [component]-pkg-ind\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew hadoop-pkg-ind (default to build on CentOS 7 Docker image)\n./gradlew spark-pkg-ind -POS=ubuntu-18.04\n./gradlew kafka-pkg-ind -POS=fedor-33\n")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-POS=[centos-7|fedora-33|debian-9|ubuntu-18.04|opensuse-42.3]\n-Pprefix=[trunk|1.2.1|1.2.0|1.1.0|...]\n-Pnexus\n")),(0,r.kt)("p",null,"If you'd like to create a repository(yum or apt) at local, just do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew repo-ind\n")),(0,r.kt)("p",null,"Note that the build system does not know which system(yum or apt) you'd like to build. But you can hint it with -POS property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew repo-ind (default to build on CentOS 7 Docker image)\n./gradlew repo-ind -POS=ubuntu-18.04\n./gradlew repo-ind -POS=fedor-33\n")),(0,r.kt)("p",null,"Typically we'll just do it together along with the build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew hadoop-pkg-ind repo-ind -POS=fedora-33\n")),(0,r.kt)("h2",{id:"deploy-and-test"},"Deploy and Test"),(0,r.kt)("p",null,"To deploy a Bigtop stack inside docker containers using Bigtop Docker Provisioner, just do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew docker-provisioner\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a 3 node cluster:\n./gradlew docker-provisioner -Pnum_instances=3\n# Run smoke tests on 3 node cluster:\n./gradlew docker-provisioner -Pnum_instances=3 -Prun_smoke_tests\n# Specify custom configuration file:\n./gradlew docker-provisioner -Pconfig=config_debian-9.yaml\n")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Pconfig=[CONFIG_FILE] (located under provisioner/docker/)\n-Penable_local_repo\n-Pimage=[DOCKER_IMAGE] (overwrites -POS and -Pprefix)\n-Pnum_instances=[NUM_INSTANCES]\n-Pnexus=[NEXUS_URL] (NEXUS_URL is optional)\n-POS=[centos-7|fedora-33|debian-9|ubuntu-18.04|opensuse-42.3]\n-Pprefix=[trunk|1.2.1|1.2.0|1.1.0|...]\n-Prun_smoke_tests (run test components defined in config file)\n-Psmoke_tests=[COMPONENTS]\n-Pstack=[COMPONENTS]\n")),(0,r.kt)("p",null,"For detailed explanation, please refer to the helper message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"provisioner/docker/docker-hadoop.sh --help\n")),(0,r.kt)("p",null,"Typically what we want to do with provisioner is to deploy a cluster and then run smoke tests. The following example deploys Spark on Hadoop and runs Spark smoke test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./gradlew docker-provisioner -Pconfig=config_ubuntu-18.04.yaml -Pstack="hdfs,yarn,spark" -Psmoke_tests="spark"\n')),(0,r.kt)("p",null,"To be noticed that, anything not specified is default to what specified in the config file. If no config file specified, default to config_centos-7.yaml"),(0,r.kt)("p",null,"Another typical case is the Build \u2192 Deploy \u2192 Test lifecycle. You can do it in one command like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./gradlew spark-pkg-ind repo-ind docker-provisioner -POS=fedora-33 -Pnum_instances=3 -Penable_local_repo -Pstack="hdfs,yarn,spark" -Psmoke_tests="spark"\n')),(0,r.kt)("p",null,"Build from branch and commit hash\nAnother developer friendly feature added is to build packages from a git branch, or even a commit hash. To do so, refer to the document here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/bigtop#for-developers-building-a-component-from-git-repository"},"https://github.com/apache/bigtop#for-developers-building-a-component-from-git-repository")))}c.isMDXComponent=!0}}]);