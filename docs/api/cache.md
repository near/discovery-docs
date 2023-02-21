---
id: cache
title: Cache API
sidebar_label: Cache
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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