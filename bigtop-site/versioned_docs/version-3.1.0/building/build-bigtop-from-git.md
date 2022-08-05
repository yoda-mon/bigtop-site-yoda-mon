---
sidebar_position: 1
---

# Building the entire distribution from scratch

<!-- Copy from https://github.com/apache/bigtop#for-developers-building-a-component-from-git-repository /-->

Packages have been built for CentOS, Fedora, OpenSUSE, Ubuntu, and Debian. They can probably be built for other platforms as well. Some of the binary artifacts might be compatible with other closely related distributions.

**On all systems, Building Apache Bigtop requires certain set of tools**

To bootstrap the development environment from scratch execute

```sh
./gradlew toolchain
```

This build task expected Puppet to be installed; user has to have sudo permissions. The task will pull down and install
all development dependencies, frameworks and SDKs, required to build the stack on your platform.

Before executing the above command, user can use the following script to install Puppet:

```sh
sudo bigtop_toolchain/bin/puppetize.sh
```

Note for CentOS (and RHEL, which is not supported officially but on a best effort basis) 8 users: on these distros,
puppetize.sh installs the puppet command into /opt/puppetlabs/bin, which is not included usually in secure_path defined in /etc/sudoers.
So users may have to add that path to secure_path manually.
Also, RHEL 8 users may have to enable their subscriptions themselves for using EPEL.
cf. https://fedoraproject.org/wiki/EPEL#How_can_I_use_these_extra_packages.3F

To immediately set environment after running toolchain, run

```sh
. /etc/profile.d/bigtop.sh
```

- **Building packages**: `gradle [component-name]-pkg`  
  If `-Dbuildwithdeps=true` is set, the Gradle will follow the order of the build specified in the "dependencies" section of bigtop.bom file. Otherwise just a single component will get build (original behavior). To use an alternative definition of a stack composition (aka BOM), specify its name with `-Dbomfile=<filename>` system property in the build time. You can visualize all tasks dependencies by running `gradle tasks --all`
- **Building local YUM/APT repositories**: `gradle [yum|apt]`  
- **Recommended build environments**
  Bigtop provides "development in the can" environments, using Docker containers. These have the build tools set by the toolchain, as well as the user and build environment configured and cached. All currently supported OSes could be pulled from official Bigtop repository at https://hub.docker.com/r/bigtop/slaves/tags/ To build a component (bigtop-groovy) for a particular OS (ubuntu-16.04) you can run the following from a clone of Bigtop workspace (assuming your system has Docker engine setup and working)
  ```
  docker run --rm -u jenkins:jenkins -v `pwd`:/ws --workdir /ws bigtop/slaves:trunk-ubuntu-16.04
  bash -l -c './gradlew allclean ; ./gradlew bigtop-groovy-pkg'
  ```
