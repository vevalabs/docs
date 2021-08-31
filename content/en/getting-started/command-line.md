---
title: Command Line Interface
description: ''
position: 110
category: 'Getting started'
---

The `ryctl` command line tool lets you control VevaLabs framework and perform various verification and validation tasks using the console. This saves you to write new programs in the host language. However, it cannot be as flexible as the programmatic interface. This is the tradeoff between the command line and programatic interfaces.

This overview covers `ryctl` syntax, describes the command operations, and provides common examples. For details about each command, including all the supported flags and subcommands, see the `ryctl` reference documentation. 

## Usage

Use the following syntax to run `ryctl` commands from your terminal:

```bash
ryctl [command] [ARGS] [FLAGS]
```
where `command`, `ARGS`, and `FLAGS` are:

* `command`: specifies the operation that you want to perform on one or more arguments, for example `test`, `configure`.
* `ARGS`: specifies required arguments for the command,
* `FLAGS`: specifies optional flags. Alternatively use `--cfg vevalabs.config.json` flag. Note that any flag set using the CLI would override the field in the configuration file.

If you need help, run `ryctl --help` from the terminal window.

## Commands

This section includes short descriptions and the general syntax for all of the `ryctl` commands:

### `ryctl test`

Use the following syntax to run `ryctl test` command from your terminal:
```
ryctl test <LOGFILE> [<PROPERTYFILE>]+ [FLAGS]
```
where `LOGFILE`, `PROPERTYFILE`, and `FLAGS` are:

* `LOGFILE`: specifies a temporal behavior represented in multiline JSON format.
* `PROPERTYFILE`: specifies a Rytest property file in Python flavor.
* `FLAGS`: specifies optional flags. 

### `ryctl configure`

Use the following syntax to run ryctl commands from your terminal:
```
ryctl configure [FLAGS]
```

### `ryctl license`

```
ryctl license [FLAGS]
```