---
id: state
title: State API
sidebar_label: State
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## State APIs

VM provides a convenient API to update the state of the widget. There are two methods:
- [`State.init`](#stateinit)
- [`State.update`](#stateupdate)

## State.init

`State.init` takes an object as an argument and initializes the state of the widget with this object. It'll be no-op if the state is already initialized.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `state`      |  **required** | object   | an initial state object for the widget  |

---

## State.update

The `State.update` will trigger the state update, and the component will be re-rendered.
It also has an optional argument, the object that will be added to the `state` object using `Object.assign`.
The state will be initialized with the given object if it's not initialized yet.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `state`      |  **required** | object   | the state  |
 | `init`      |  _optional_ | object   | an optional initial state object  |
