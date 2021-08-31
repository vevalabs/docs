---
title: VevaLabs Configuration
description: ''
position: 105
category: 'Getting started'
---

VevaLabs framework encourages you to configure your workflow from a single configuration file, called `vevalabs.config.json`. This file helps you use the same set of options when running your tests across various platforms.

## What goes into `vevalabs.config.json`?

<alert type="warning">
VevaLabs framework is currently under active development. The configuration items and options below can change without notice.
</alert>



## The default configuration

VevaLabs framework comes with a sensible set of default options to make the configuration easier. You can override any of these options using `vevalabs.config.json`. 

<code-group>
<code-block label="Python" active>

```python

default_options = vevalabs.default_options()
```

</code-block>
<code-block label="CLI">

```bash
ryctl configure --default
```

</code-block>
</code-group>

Finally the reference for the default options can be found [here](/reference/options).