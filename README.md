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

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-prettier
$ sfdx-prettier COMMAND
running command...
$ sfdx-prettier (-v|--version|version)
sfdx-prettier/0.0.0-development win32-x64 node-v8.9.4
$ sfdx-prettier --help [COMMAND]
USAGE
  $ sfdx-prettier COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx-prettier prettier:format`](#sfdx-prettier-prettierformat)

## `sfdx-prettier prettier:format`

make your Apex and Lightning code prettier

```
USAGE
  $ sfdx-prettier prettier:format

OPTIONS
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  logging level for this command invocation

EXAMPLE
  $ sfdx prettier:format
```

_See code: [src\commands\prettier\format.ts](https://github.com/dangmai/sfdx-prettier/blob/v0.0.0-development/src\commands\prettier\format.ts)_
<!-- commandsstop -->
