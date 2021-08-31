---
title: Real-time Systems and Behaviors
description: ''
position: 301
category: 'Concepts'

---

<alert type="warning">
This page is under construction!
</alert>

Real-time systems are systems that maintain an ongoing interaction with their external environment in a timely manner.  Most real-time systems compute a stream of output values by reading a stream of input vectors in real-time. Hence they significantly differ from classical software systems, which compute a single output value for given input values. For this reason, tools and techniques to test, verify, and validate real-time systems differ greatly from classical software testing, especially at the system level. 

One of the first issues we encounter for real-time system verification and validation is how to represent behavior of these systems. Since real-time systems are designed to work in external environments, it is impossible to isolate them completely instead we have to assess how they behave in such external environments. The behavior of real-time systems and their representation is therefore of critical importance. 

## Behaviors of real-time systems

A behavior of a real-time system is a time-ordered sequence of observations over temporal variable of the system. A temporal behavior does not need to be complete in sense that it contains information about each and every possible temporal variable of the system. Therefore a behavior can be formed by any subset of temporal variables. Given the fact that we cannot observe every possible variable regarding a real-time system, a temporal behavior usually contains limited information about system execution.

We are also limited by the ability to observe the system in time. Regar

* [Discrete time behaviors]() 
* [Dense time behaviors]()

The main distinction between two models for the user is how time progresses between two observations. For discrete time behaviors, time value increases exactly 1 time unit between two observations. For dense time behaviors, however, time can increase at arbitrary amounts including fractional values. In that case, an explicit timing information such as a timestamp is added to the observation data.

