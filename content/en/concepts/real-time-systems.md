---
title: Real-time Systems and Behaviors
description: ''
position: 301
category: 'Concepts'

---

Real-time systems are systems that maintain an ongoing interaction with their external environment in a timely manner.  Most real-time systems compute a stream of output values by reading a stream of input vectors in real-time. Hence they significantly differ from classical software systems, which compute a single output value for given input values. For this reason, tools and techniques to test, verify, and validate real-time systems differ greatly from classical software testing, especially at the system level. 

One of the first issues we encounter for real-time system verification and validation is how to represent behavior of these systems. Since real-time systems are designed to work in external environments, it is impossible to isolate them completely instead we have to assess how they behave in such external environments. The behavior of real-time systems and their representation is therefore of critical importance. 

## Behaviors of real-time systems

A behavior of a real-time system is a time-ordered sequence of observations over temporal variable of the system. A temporal behavior does not need to be complete in sense that it contains information about each and every possible temporal variable of the system. Therefore a behavior can be formed by any subset of temporal variables. Given the fact that we cannot observe every possible variable regarding a real-time system, a temporal behavior usually contains limited information about system execution.

We are also limited by the ability to observe the system in time. From this point we have two primary models of time for temporal behaviors such that

* [Discrete time behaviors]() 
* [Dense time behaviors]()

The main distinction between two models for the user is how time progresses between two observations. For discrete time behaviors, time value increases exactly 1 time unit between two observations. For dense time behaviors, however, time can increase at arbitrary amounts including fractional values. In that case, an explicit timing information such as a timestamp must be added to the observation data.

In the following we use multiline JSON files to represent temporal behaviors to give examples and explain some important concepts. 

## Discrete Time Behaviors

The multiline JSON document below represents a discrete time behavior where each JSON object containing three variables regarding a system. For discrete time behaviors the progression of time is implicit as time value increases one by one for each line starting from zero.

```json
{"lights_on": false, "speed": 21.23, "mode": "Start"} // time: 0 
{"lights_on": true,  "speed": 20.01, "mode": "Start"} // time: 1
{"lights_on": true,  "speed": 19.12, "mode": "Start"} // time: 2 
{"lights_on": false, "speed": 19.18, "mode": "Sport"} // time: 3
{"lights_on": false, "speed": 19.18, "mode": "Sport"} // time: 4
...
```
Normally each temporal variable of the system is recorded in such JSON objects (or other equivalent representation) for each time point. Usually temporal variables do not change their value for every time point. Indeed they can have the same value for long time periods. This brings the concept of persistence for temporal behaviors.

Persistence means that we interpret the value of temporal variables from the last time when they are set in the behavior. In other words, once a temporal variable set in the behavior, its value persists until it is set again. For example, the discrete time behavior above can be equivalently represented under persistence interpretation as below. 

```json
{"lights_on": false, "speed": 21.23, "mode": "Start"} // time: 0
{"lights_on": true,  "speed": 20.01                 } // time: 1
{                    "speed": 19.12                 } // time: 2
{"lights_on": false, "speed": 19.18, "mode": "Sport"} // time: 3
{}                                                    // time: 4
...
```

Finally notice that discrete time behaviors would contain sequences of empty JSON objects if no value changed from the previous time point (again a common case in real time systems). Monitors will be updated at each time point for the same values for a long time period, which is not very efficient. Here it is better to switch dense time model as we need to process many time points having the same value at once. 

## Dense Time Behaviors

Dense time behaviors contain extra timing information next to the observation data.  Dense time behaviors are naturally persistent, meaning that temporal variables retain their values for skipped times as in the discrete case. For example, suppose we have a dense time behavior as below:

```json
{"time": 0,  "lights_on": false, "speed": 21.23} 
{"time": 11, "lights_on": true,  "speed": 20.01}
{"time": 32,                     "speed": 19.12} 
{"time": 65, "lights_on": false, "speed": 19.18} 
{"time": 100} 
...
```

Finally, since we no longer need to progress one-by-one, we can also progress smaller steps or fractional steps. Below is a dense time behavior using floating point numbers for time field.

```json
{"time": 0.0,   "lights_on": false, "speed": 21.23} 
{"time": 11.3,  "lights_on": true,  "speed": 20.01}
{"time": 32.1,                      "speed": 19.12} 
{"time": 65.13, "lights_on": false, "speed": 19.18} 
{"time": 100.0} 
...
```