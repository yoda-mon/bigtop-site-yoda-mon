---
sidebar_position: 1
license: |
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
---

# Quickstart Guide

<!-- Copy from https://cwiki.apache.org/confluence/display/BIGTOP/Quickstart+Guide%3A+Bigtop+Integration+Test+Framework+2.0 /-->

The new Bigtop integration test framework aims to provide a one stop seamlessly integrated Hadoop ecosystem build and test solution to maximize the user experience . With Integration Test Framework 2.0, everything is under your control at a single entry of Gradle command.

```shell
# Build
./gradlew hadoop-pkg-ind

# Deploy
./gradlew docker-provisioner
```

Experience it by trying with following examples!

## Prerequisites
- Make sure you have docker suits up. Go to docker website(https://docs.docker.com/) to install docker on your environment. 
- You need to have a minimum of Java 8 installed.
- You cannot use root to complete the build.  It will fail without a cryptic error message.  You have been warned.
- You may want to have git installed instead of download the source folder in that case you need git installed. (See "Build from branch and commit hash" at the end of this page and how this can be done automagically for you.  (If you installed git.)  I suggest reading the rest of this page first as its informative on what gradlew can do.)
- You have to have ~20 Gb free space to build. I'd suggest provisioning more. (Most people this won't be an issue but if you are using a Cloud VM it could be important)
- Download apache bigtop latest release at http://bigtop.apache.org/download.html. Untar and get into the directory:

```shel
tar zxvf bigtop-X.Y.Z-project.tar.gz
cd bigtop-X.Y.Z
```

## Preamble
We will be using docker to complete the building of the image.  This is incredible important as this takes care of all the work of downloading the dependencies you need to build Bigtop. (This is what docker was made for after all.)  If you choose not to use docker you will consume a lot of time finding dependencies.-->(Don't do it.)  Gradlew on Docker can build packages for various OS's/version.  You can specify which one to build via command line argument. (Examples shown below.)

## Build
To build Hadoop ecosystem packages, just do:

```shell
./gradlew [component]-pkg-ind
```

Example:

```shell
./gradlew hadoop-pkg-ind (default to build on CentOS 7 Docker image)
./gradlew spark-pkg-ind -POS=ubuntu-18.04
./gradlew kafka-pkg-ind -POS=fedor-33
```

Properties:
```shell
-POS=[centos-7|fedora-33|debian-9|ubuntu-18.04|opensuse-42.3]
-Pprefix=[trunk|1.2.1|1.2.0|1.1.0|...]
-Pnexus
```

If you'd like to create a repository(yum or apt) at local, just do:

```shell
./gradlew repo-ind
```

Note that the build system does not know which system(yum or apt) you'd like to build. But you can hint it with -POS property.

```shell
./gradlew repo-ind (default to build on CentOS 7 Docker image)
./gradlew repo-ind -POS=ubuntu-18.04
./gradlew repo-ind -POS=fedor-33
```

Typically we'll just do it together along with the build:

```shell
./gradlew hadoop-pkg-ind repo-ind -POS=fedora-33
```

## Deploy and Test
To deploy a Bigtop stack inside docker containers using Bigtop Docker Provisioner, just do:

```shell
./gradlew docker-provisioner
```

Example:

```shell
# Create a 3 node cluster:
./gradlew docker-provisioner -Pnum_instances=3
# Run smoke tests on 3 node cluster:
./gradlew docker-provisioner -Pnum_instances=3 -Prun_smoke_tests
# Specify custom configuration file:
./gradlew docker-provisioner -Pconfig=config_debian-9.yaml
```

Properties:

```shell
-Pconfig=[CONFIG_FILE] (located under provisioner/docker/)
-Penable_local_repo
-Pimage=[DOCKER_IMAGE] (overwrites -POS and -Pprefix)
-Pnum_instances=[NUM_INSTANCES]
-Pnexus=[NEXUS_URL] (NEXUS_URL is optional)
-POS=[centos-7|fedora-33|debian-9|ubuntu-18.04|opensuse-42.3]
-Pprefix=[trunk|1.2.1|1.2.0|1.1.0|...]
-Prun_smoke_tests (run test components defined in config file)
-Psmoke_tests=[COMPONENTS]
-Pstack=[COMPONENTS]
```

For detailed explanation, please refer to the helper message:

```shell
provisioner/docker/docker-hadoop.sh --help
```

Typically what we want to do with provisioner is to deploy a cluster and then run smoke tests. The following example deploys Spark on Hadoop and runs Spark smoke test:

```shell
./gradlew docker-provisioner -Pconfig=config_ubuntu-18.04.yaml -Pstack="hdfs,yarn,spark" -Psmoke_tests="spark"
```

To be noticed that, anything not specified is default to what specified in the config file. If no config file specified, default to config_centos-7.yaml

Another typical case is the Build → Deploy → Test lifecycle. You can do it in one command like this:

```shell
./gradlew spark-pkg-ind repo-ind docker-provisioner -POS=fedora-33 -Pnum_instances=3 -Penable_local_repo -Pstack="hdfs,yarn,spark" -Psmoke_tests="spark"
```

Build from branch and commit hash
Another developer friendly feature added is to build packages from a git branch, or even a commit hash. To do so, refer to the document here:

https://github.com/apache/bigtop#for-developers-building-a-component-from-git-repository

