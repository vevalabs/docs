---
title: Rytest Properties
description: ''
position: 301
category: 'Reference'
---

<alert type="warning">
This page is under construction!
</alert>

Rytest uses a set of special keywords to give structure and meaning to properties. Each keyword has a well-defined meaning

## Declarations

### `rytest.property`

Within a Rytest context given, constructs a Rytest property with a name.

### `rytest.property.given`

Given keyword specifies a precondition of the property. You can have as many `given` declarations as you like. The overall precondition of the property would be equivalent to the conjunction of all `given` declarations.


### `rytest.property.require`

Require keyword specifies a postcondition of the property. You can have as many `require` declarations as you like. The overall postcondition of the property would be equivalent to the conjunction of all `require` declarations.

## Helper constructs

### `rytest.property.title`

Title keyword specifies a title of the property, which is used for self-documentation purposes. You can have only one `title` declaration per property. 


### `rytest.property.description`

Title keyword specifies a description of the property, which is used for self-documentation purposes. You can have only one `description` declaration per property. 
