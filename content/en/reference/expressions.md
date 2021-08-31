---
title: Rytest Expressions
description: ''
position: 302
category: 'Reference'
menuTitle: 'Rytest Expressions'
---
## Introduction

Rytest expressions are written in plain text and describe certain temporal behaviors of real-time systems. Rytest expressions must follow some basic syntax rules. These syntactic constructs are currently divided into four categories:

* Atomic expressions
* Boolean logic expressions
* Temporal logic expressions
* Time constrained expressions

### Atomic Expressions

Atomic expressions are the basic building blocks of Rytest expressions. They check certain conditions over the input message `msg` received at each time instant. Rytest atomic expressions use the curly-bracket syntax `{...}`. 

Rytest expressions currently support the following set of atomic expressions:

| Expression  | Meaning  |  
|---|---|
| `{fieldname: null}`  | The value of `fieldname` is null at the present time  |  
| `{fieldname: true}`  | The value of `fieldname` is true at the present time  |   
| `{fieldname: false}` | The value of `fieldname` is false at the present time   |   
| `{fieldname: STR}`<br>`{fieldname: 'STR'}`<br>`{fieldname: "STR"}`   | The value of `fieldname` is equal to the word `STR` at the present time |   
| `{fieldname: NUM}`<br>`{fieldname == NUM}` | The value of `fieldname` is equal to the number `NUM` at the present time  |   
| `{fieldname != NUM}` | The value of `fieldname` is not equal to the number `NUM`<br> at the present time  |   
| `{fieldname > NUM}`  | The value of `fieldname` is greater than the number `NUM`<br> at the present time  |   
| `{fieldname < NUM}`  | The value of `fieldname` is less than the number `NUM` <br>at the present time  |   
| `{fieldname >= NUM}` | The value of `fieldname` is greater than or equal to the number `NUM`<br> at the present time  |   
| `{fieldname <= NUM}` | The value of `fieldname` is less than or equal to the number `NUM`<br> at the present time |   
| `{$custom_func}`     | The user function `custom_func(msg)` evaluates to true at the present time |   
| `{#property_name}`   | The property named `property_name` evaluates to true at the present time |   

Atoms can be grouped in the same block by seperating them by commas such as:

`{fieldname1 < 11, fieldname2: "Hello", #some_other_property}`

A group of atoms is equivalent to the conjunction of its individual atoms. 

### Boolean Expressions

Combine Rytest expressions using Boolean operators:

| Expression  | Meaning  |  
|---|---|
| `!<E>`<br>`not <E>`                   | Logical Negation<br>Expression `E` is not true at the present time  |  
| `<E1> \|\| <E2>`<br>`<E1> or <E2>`    | Logical Disjunction<br>Expression `E1` or `E2` is true at the present time |  
| `<E1> && <E2>`<br>`<E1> and <E2>`     | Logical Conjunction<br>Expression `E1` and `E2` is true at the present time |  
| `<E1> -> <E2>`<br>`<E1> implies <E2>` | Logical Implication<br>Expression `E1` is false or `E2` is true at the present time  |  

### Temporal Expressions

Combine Rytest expressions using past temporal logic operators:

| Expression  | Meaning  |  
|---|---|
| `previously<E>`<br>`pre <E>`<br>`Y<E>` | Previously Operator<br>Expression `E` is true at the previous time point |  
| `once<E>`<br>`P<E>` | Sometime in the Past, Once Operator<br>Expression `E` is true sometime in the past |  
| `always<E>`<br>`historically<E>`<br>`H<E>` | Always in the Past, Historically Operator<br>Expression `E` is always true in the past |  
| `<E1> since <E2>`<br>`<E1> S <E2>` | Since Operator<br>Expression `E1` is always true since the last time `E2` is true |  

### Time Constrained Expressions

You can constrain the range of temporal operators by predefined time intervals as follows:

| Expression  | Meaning  |  
|---|---|
| `once[a:]<E>`<br>`once[:b]<E>`<br>`once[a:b]<E>` | Expression `E` is true sometime in the past<br>`[a:]`: More than `a` time units ago<br>`[:b]`: Less than `b` time units ago<br>`[a:b]`: Between `a`  and `b` time units ago |  
| `always[a:]<E>`<br>`always[:b]<E>`<br>`always[a:b]<E>` | Expression `E` is always true in the past<br>`[a:]`: More than `a` time units ago<br>`[:b]`: Less than `b` time units ago<br>`[a:b]`: Between `a`  and `b` time units ago |  
| `<E1> since[a:] <E2>`<br>`<E1> since[:b] <E2>`<br>`<E1> since[:b] <E2>` | Expression `E1` is always true since the last time `E2` is true <br>`[a:]`: More than `a` time units ago<br>`[:b]`: Less than `b` time units ago<br>`[a:b]`: Between `a`  and `b` time units ago|  

