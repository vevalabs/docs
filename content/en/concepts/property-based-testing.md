---
title: Property based Testing
description: ''
position: 302
category: 'Concepts'
property-classes: 
  - Functional requirements about the driving system
  - Operational design domain (ODD) conditions 
  - Simulation scenario validity criteria 
---

<alert type="warning">
This page is under construction!
</alert>

Formally specified properties and property based testing lies at the very core of VevaLabs framework. It is important to understand what we mean by properties and property based testing. This section gives necessary definitions, explanations and comparisons. 

## What is a property?

A functional property of a system specifies a certain relation or rule between the input and output of the system. For a given input, the system produces an output, we say that the property holds on that particular execution if this input-output pair satisfies the property. Further we say the system _has_ the property if it holds for all executions. 

Properties could be any kind of assumptions, assertions, or behavioral patterns over system variables. For example, in the context of driving systems, we can formally specify

<list :items="property-classes"></list>

as properties and then test them in the simulation or on the road.

## What is property based testing?

Property based testing is a style of testing often put in contrast to example based testing. Traditional, or example-based, testing specifies the behavior of your system by writing concrete input-output pairs aka examples. Properties are well-defined rules over the behaviors hence specifying a set of input-output pairs in an abstrast way. 

Once properties are written in executable specification languages, we can test properties directly over simulated or real system executions. Therefore an executable specification language is the first ingredient of property based testing. Although properties can be written using any programming language, a domain specific specification language could ease writing properties and provide support for common situations. 

The other component of property-based testing is a generator of inputs. While the generator could be generate inputs randomly, it could be constrained or guided for some goal. Therefore, property based testing is often the first step for targeted test exploration.

## Why property based testing?

There is a single reason that you use property based is the complexity of the system under test. If you do not have a complex system, then it is better to write a few test cases to common and corner cases. Since the system is not complex, the modes of failure are known and you protect yourself against potential regressions. This is the idea of unit testing, perfected in the 2000s till today.

The challenge is that a single execution of a complex is not as informative as the non-complex case. The nature of complex system, dense interaction between components and environment, second-order-effects, mode changes, etc. make them incredibly difficult to predict. Therefore, we require huge numbers of diverse tests to assess the quality of the system. Property based testing helps here as providing a means to write general rules to be tested on-the-fly. No one is able to write 10.000 test cases to check a single functionality but you can write a single property and generate 10.000 random executions of the system.


## Property based testing elsewhere

Using properties or rule-based approaches is definitely not a new idea in testing. 

A comprensive list of property based testing frameworks for software verification can be found [here](https://github.com/jmid/pbt-frameworks). Notably tools [QuickCheck](https://github.com/nick8325/quickcheck) for Haskell, [Hypothesis](https://github.com/HypothesisWorks/hypothesis) for Python, and [RapidCheck](https://github.com/emil-e/rapidcheck/) for C++ programs come with a number of different features. 

Besides property-based testing for digital electronics has been in use for decades. Early in 2000s the industry developed PSL (Property Specification Language) and SVA (SystemVerilog Assertions) as an important component of electronic design tools.

VevaLabs framework has been differentiated from these tools by its first-class support for real-time systems and properties designed and developed with a modern twist after years of research in the field. 


