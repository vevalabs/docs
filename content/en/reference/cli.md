---
title: VevaLabs CLI
description: ''
position: 304
category: 'Reference'
---

<alert type="warning">
This page is under construction!
</alert>

The `ryctl` command line tool lets you control VevaLabs framework and perform various verification and validation tasks. For configuration, `ryctl` looks for a file named `vevalabs.config.json` in the `$HOME/.vevalabs` directory. You can specify other overriding configuration files by setting `--config CFG`.

The configuration hierarchy from the top to bottom is as follows:

1. CLI-defined configuration
2. Home-defined configuration
3. Default configuration

## Usage

Use the following syntax to run `ryctl` commands from your terminal:

```bash
ryctl [command] [ARGS] [flags]

```
where ``command`, `ARGS`, and `flags` are:

* `command`: specifies the operation that you want to perform on one or more arguments, for example `test`, `render`, `configure`.
* `flags`: specifies optional flags.