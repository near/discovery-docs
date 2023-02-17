---
id: storage
title: Storage API
sidebar_label: Storage
hide_table_of_contents: true
---

## Storage

`Storage` object to store data for widgets that is persistent across refreshes. Simulates localStorage access. It has 4 methods:

- `Storage.set(key, value)` - sets the public value for a given key under the current widget. The value will be public, so other widgets can read it.
- `Storage.get(key, widgetSrc?)` - returns the public value for a given key under the given widgetSrc or the current widget (if `widgetSrc` is omitted). Can only read public values.
- `Storage.privateSet(key, value)` - sets the private value for a given key under the current widget. The value is private, only the current widget can read it. Private and public values can share the same key and don't conflict.
- `Storage.privateGet(key)` - returns the private value for a given key under the current widget.

## Cache

The VM implements caching layer for most network requests. You can leverage it manually by using `useCache` hook.

#### useCache

The method acts like a hook that takes a promise through a generator function, fetches the data and caches it. The cache is global for the VM, but it's identified by for given widget (by src) for a given `dataKey`.
It can be used to easily use and cache data from async data sources.

**Arguments:**
- `promiseGenerator` - a function that returns a promise, which generates data. Note, you don't return the promise directly, because it should only be fired once.
- `dataKey` - the unique name (within the current widget) to identify the data.
- `options` - optional argument:
  - `subscribe` - if `true` - the data refreshes periodically by invalidating cache.

**Returns** `null` if the cache is cold and data is fetching, or the previous cached value while the data is being fetched an d, or the new data if the new promise data is different from the old data.

Note: the data is being cached and compared as JSON serialized objects.

```jsx
const status = useCache(
  () =>
    asyncFetch("https://rpc.mainnet.near.org/status").then((res) => res.body),
  "mainnetRpcStatus",
  { subscribe: true }
);

return status;
```

## Fetch

`fetch` is a global function that allows to fetch data from the URL. It acts like a hook. It's a wrapper around the `fetch` function from the browser behind the caching layer. It's useful for fetching data from the external APIs.
It has the similar API as the browser's `fetch` function, but instead of a promise returns a value. If the data is not cached, it returns `null` and fetches the data in the background. If the data is cached, it returns the cached value and then revalidates it.

To access promise version, there is a method `asyncFetch` that returns a promise.