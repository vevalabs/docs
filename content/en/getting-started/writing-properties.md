---
title: Writing Properties
description: ''
position: 102
category: 'Getting started'
---

Properties are basic elements of any verification and validation (V&V) workflow. In a nutsheel, a property corresponds to a single functional item --let it be a requirement, measurement, invariant, or KPI-- in your V&V plan. For the best results, you must follow system engineering best-practices and encourage your whole team to contribute the safety of your system. No one else, other than your team, knows your system better so let them encode their domain expertise as properties. Then we use [property based testing](/concepts/property-based-testing), a powerful concept to test and verify complex designs.

## Introducing Rytest

We develop [Rytest]() to enable property based testing for [complex real-time systems](/concepts/real-time-systems). Rytest helps your team to write complex properties of your real-time system and provides the state-of-the-art real-time monitoring technology to actually verify them at runtime or over logs. In the following, we will use `rytest` module to declare our properties and then check them in the next post.

First, import `rytest` module from `vevalabs` package as follows.

<code-group>
<code-block label="Python" active>

```python
import vevalabs.rytest as rytest
from vevalabs.rytest.ctx import ctx
```

</code-block>
</code-group>

The second line also imports the global `rytest.context` object `ctx` for convenience. Context objects store multiple properties and eliminate redundancy among properties that share common elements. This is important to have more efficient execution later. You can also define more context objects later as needed. 

## Writing Properties with Rytest

We define properties using `rytest.property` class. Each `rytest.property` must be associated with a `rytest.context` object and a name unique to the context. Now let's construct our first property and decompose its elements:

<code-group>
<code-block label="Python" active>

```python
with rytest.property(ctx, "SYS-REQ-1B") as p:
    p.title("No early lane departure warning shall be issued.")
    p.description("The ego vehicle shall be outside the lane for at least 5 seconds when the warning is issued.")
    p.given(r'{ldw_issued: true}')
    p.require(r'always[:5s]{ego_in_the_lane: false}')
```

</code-block>

<code-block label="Python (alternative)">

```python
rytest.property(ctx, "SYS-REQ-1B")
	.title("No early lane departure warning shall be issued.")
	.description("The ego vehicle shall be outside the lane for at least 5 seconds when the warning is issued.")
	.given(r'{ldw_issued: true}')
	.require(r'always[:5s]{ego_in_the_lane: false}')
	.finish()
```

</code-block>
</code-group>

In this property declaration:
*  We use our global `ctx` context and give the name "SYS-REQ-1B" to our property. Perhaps the name comes from our lane departure warning (LDW) system requirements. This string uniquely defines the property in the context given.
* We can fill `title` and `description` fields of the property to communicate its intent better. Although these fields are purely for self-documentation, we highly encourage to fill them. This property would implement a functional requirement regarding our lane departure warning system for example. From the description, we understand this is actually a hard real-time requirement, abundant in such real-time systems.
* Rytest properties use a keyword-based system to declare its functionality. 
	*  The keyword `require` is used for requirements and declares what condition needs to be true for this property holds. If this is a property that needs to be true all the time, then we do not need anything else and the property declaration is finished.
	* The keyword `given` defines preconditions for the property. A property will be evaluated at a time instant only when all its preconditions are true for that time instant. Otherwise we say the property is not activated.
	* Check the cheatsheet for Rytest for more details on keywords and properties [here](/reference/properties).

* Each keyword declaration accepts a single Rytest expression. Rytest expressions support a large number of operators including temporal operators and timing constraints.  For example, the expression  `always[:5s]{ego_in_the_lane: false}` means that the ego car is outside of the car at least for 5 seconds. This condition will be checked only for time instants where the expression `{ldw_issued: true}` holds, that is the LDW issued. 

* Rytest properties and expressions are defined in formal logic. Therefore; we can guarantee that they carry the same unambiguous meaning across current and future implementations. Check the cheatsheet or more details on Rytest expressions [here](/reference/expressions). This reference also includes other advanced operators such as property references and user-defined predicates that can be used in expressions.

Finally you can declare as many properties as you can in a context and we explain how to check them over your system behaviors in the next post.

<code-group>
<code-block label="Python" active>

```python
with rytest.property(ctx, "SYS-REQ-1A") as p:
	...
	...
with rytest.property(ctx, "SYS-REQ-1B") as p:
	...
	...
with rytest.property(ctx, "SYS-REQ-1C") as p:
	...
	...
with rytest.property(ctx, "SYS-REQ-2") as p:
	...
	...
```

</code-block>
</code-group>
