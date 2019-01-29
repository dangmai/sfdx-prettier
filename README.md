sfdx-prettier
=============

Prettify your Apex/Lightning code on the Salesforce platform.

[![Version](https://img.shields.io/npm/v/sfdx-prettier.svg)](https://npmjs.org/package/sfdx-prettier)
[![CircleCI](https://circleci.com/gh/dangmai/sfdx-prettier/tree/master.svg?style=shield)](https://circleci.com/gh/dangmai/sfdx-prettier/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/dangmai/sfdx-prettier?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-prettier/branch/master)
[![Codecov](https://codecov.io/gh/dangmai/sfdx-prettier/branch/master/graph/badge.svg)](https://codecov.io/gh/dangmai/sfdx-prettier)
[![Greenkeeper](https://badges.greenkeeper.io/dangmai/sfdx-prettier.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dangmai/sfdx-prettier/badge.svg)](https://snyk.io/test/github/dangmai/sfdx-prettier)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-prettier.svg)](https://npmjs.org/package/sfdx-prettier)
[![License](https://img.shields.io/npm/l/sfdx-prettier.svg)](https://github.com/dangmai/sfdx-prettier/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-prettier
$ sfdx-prettier COMMAND
running command...
$ sfdx-prettier (-v|--version|version)
sfdx-prettier/0.0.0-development win32-x64 node-v10.14.1
$ sfdx-prettier --help [COMMAND]
USAGE
  $ sfdx-prettier COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx-prettier hello:org [FILE]`](#sfdx-prettier-helloorg-file)

## `sfdx-prettier hello:org [FILE]`

print a greeting and your org IDs

```
USAGE
  $ sfdx-prettier hello:org [FILE]

OPTIONS
  -f, --force                                      example boolean flag
  -n, --name=name                                  name to print
  -u, --targetusername=targetusername              username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --apiversion=apiversion                          override the api version used for api requests made by this command
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx hello:org --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
     Hello world! This is org: MyOrg and I will be around until Tue Mar 20 2018!
     My hub org id is: 00Dxx000000001234
  
  $ sfdx hello:org --name myname --targetusername myOrg@example.com
     Hello myname! This is org: MyOrg and I will be around until Tue Mar 20 2018!
```

<!-- commandsstop -->
