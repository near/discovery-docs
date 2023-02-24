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

---

## State.init

`State.init` takes an object as an argument and initializes the state of the widget with this object. It'll be no-op if the state is already initialized.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `state`      |  **required** | object   | an initial state object for the widget  |

### `State.init()` Example

```js
const variable = "Hello World!";
State.init({
  count: 0,
  variable
});
```

### `State.init()` Implementation Details

The state object is both stored in the `state` property of the widget virtual machine and in the `state` property of the react component. The state is initialized with the given object.

```js reference title="VM.js"
https://github.com/NearSocial/VM/blob/5b68433497272c23bf7d06a992c3209f3c97a2b5/src/lib/vm/vm.js#L754-L773
```

## State.update

The `State.update` will trigger the state update, and the component will be re-rendered.
It also has an optional argument, the object that will be added to the `state` object using `Object.assign`.
The state will be initialized with the given object if it's not initialized yet.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `state`      |  **required** | object   | the state  |
 | `init`      |  _optional_ | object   | an optional initial state object  |

### `State.update()` Example

```js
const variable = "Hello World!";
State.update({
  count: 1,
  variable
});
```

### `State.update()` Implementation Details

The state is stored in the `state` property of the widget. The state is initialized with an empty object `{}`. `Object.assign` is used to update the state.

```js reference title="VM.js"
https://github.com/NearSocial/VM/blob/5b68433497272c23bf7d06a992c3209f3c97a2b5/src/lib/vm/vm.js#L774-L786
```
