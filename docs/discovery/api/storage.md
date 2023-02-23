---
id: storage
title: Storage API
sidebar_label: Storage
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Storage

`Storage` object to store data for widgets that is persistent across refreshes. Simulates `localStorage` access. It has 4 methods:

- [`Storage.get`](#storageget)
- [`Storage.set`](#storageset)
- [`Storage.privateGet`](#storageprivateget)
- [`Storage.privateSet`](#storageprivateset)

## Storage.get

`Storage.get(key, widgetSrc?)` - returns the public value for a given key under the given widgetSrc or the current widget (if `widgetSrc` is omitted). Can only read public values.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `key`      |  **required** | object   | a user-defined key  |
 | `widgetSrc`  |  _optional_ | object   | a user-defined widget  |

---

## Storage.set

`Storage.set(key, value)` - sets the public value for a given key under the current widget. The value will be public, so other widgets can read it.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `key`      |  **required** | object   | a user-defined key  |
 | `value`    |  **required** | object   | a user-defined value  |

---

## Storage.privateGet

`Storage.privateGet(key)` - returns the private value for a given key under the current widget.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `key`      |  **required** | object   | a user-defined key under the current widget  |

---

## Storage.privateSet

`Storage.privateSet(key, value)` - sets the private value for a given key under the current widget. The value is private, only the current widget can read it. Private and public values can share the same key and don't conflict.

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `key`      |  **required** | object   | a user-defined key under the current widget |
 | `value`    |  **required** | object   | a user-defined value  |
