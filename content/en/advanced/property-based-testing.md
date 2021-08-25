---
title: Property Based Testing
description: ''
position: 301
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

Properties could be any assumption, assertion, or behavioral pattern over system variables. For example, in the context of driving systems, we can formally specify

<list :items="property-classes"></list>

as properties and then test them in the simulation or on the road.

## What is property based testing?

Property based testing is the act of 

Once properties are written in executable specification languages, we can test properties directly over simulated or real system behaviors. This process is called property based testing. Compared to example based testing, property based testing has several advantages that become apparent as the complexity of system under test grows.

is in contrast to example based testing, which uses singular test cases or examples.

Properties define a set of in an abstract way. 


It is not too wrong to say that properties are rule to create examples at runtime.

Property based testing has several advantages over example based testing. 

A property, on the other hand, corresponds to many test cases in an abstract manner and 

Yet these advantages never mean that we must abandon example based testing as both styles of testing address different abstraction levels hence must co-exist in an end-to-end testing workflow.

## Property based testing elsewhere

Using properties or rule-based approaches is definitely not a new idea in testing. 

A comprensive list of property based testing frameworks for software verification can be found [here](https://github.com/jmid/pbt-frameworks). Notably tools [QuickCheck](https://github.com/nick8325/quickcheck) for Haskell, [Hypothesis](https://github.com/HypothesisWorks/hypothesis) for Python, and [RapidCheck](https://github.com/emil-e/rapidcheck/) for C++ programs come with a number of different features. 

The support for real-time system verification, on the other hand, is unique to VevaLabs framework and we explain property based testing for real-time system in the next article.


