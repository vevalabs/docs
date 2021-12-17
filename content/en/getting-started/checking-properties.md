---
title: Checking Properties
description: ''
position: 103
category: 'Getting started'
---

In the previous post, we populated a Rytest context with properties. In this post we show how to check these properties of the behavior of real-time system.

## Rytest Runtimes

First, we build a Rytest runtime from the context as follows:

<code-group>
<code-block label="Python" active>

```python
rtx = rytest.runtime.from_context(ctx)
```

</code-block>
</code-group>

Runtime objects are dedicated to a single execution/simulation of the system under test. As the system executes, runtime objects monitor and check the system outputs against the properties declared in the context. System behaviors can be fed into runtime as the system executes in real-time or can be read from logfiles for post-mortem analyses.

Currently Rytest runtimes expect system behaviors received as Python dictionaries (called messages) and return a message whether properties declared in the context violated or not. The main loop of execution is formed as follows:

<code-group>
<code-block label="Python" active>

```python
x0 = system_under_test.tick()    # x0 is a Python.dict
y0 = rtx.init_update(x0)         # y0 is a Python.dict
while(...): # main loop
	x = system_under_test.tick() # x is a Python.dict
	y = rtx.update(x)            # y is a Python.dict
	if not y.empty():
		raise Assertion Error

run_report = rtx.get_report()
```

</code-block>
</code-group>

Normally 


## Runtime Components

Rytest runtime components are modules to enhance the core real-time monitoring functionality. Please refer to  the [reference](/reference/components) for currently available components. Rytest component can be configured via `vevalabs.config.json`.

## Runtime Reports
Rytest reports contain basic statistics (activation/pass/fail) about the execution of properties as well as additional information (i.e. logging) produced by Rytest components.
