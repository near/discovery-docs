# VM APIs Reference

Near Social VM provides a set of custom APIs that can be used by the widgets.

Custom objects:
- `Social` - the SocialDB API.
- `State` - the state updates API.
- `Near` - the NEAR API.
- `clipboard` - the clipboard API. (similar to `navigator.clipboard`)

Standard objects:
- `JSON` - the JSON API.
- `Object` - the Object API.
- `Date`
- `console` - the console API.
- `Math` 
- `Array`
- `Number`
- `Buffer`
- `Audio`
- `Image`
- `File`
- `Blob`
- `FileReader`
- `URL`
- `Uint8Array`
- `Map`
- `Set`

Imported objects:
- `Big` - the big number API from the `big.js` library.
- `BN` - the big number API from the `bn.js` library.

Near Social VM provides the list of custom React components:
- `Widget` - the widget embedding component.
- `CommitButton` - the commit button component.
- `IpfsImageUpload` - the IPFS image upload component.
- `Markdown` - the component to render Markdown based on npm package `react-markdown`.
- `InfiniteScroll` - the component to render infinite scroll based on npm package `react-infinite-scroller`.
- `Typeahead` - the component for text auto-complete and typeahead based on npm package `react-bootstrap-typeahead`.
- `Files` - the component to input files with drag and drop support based on npm package `react-files`.
- `OverlayTrigger` - the component to render Bootstrap's OverlayTrigger based on npm package `react-bootstrap`.
- `Tooltip` - the component to render Bootstrap's tooltip based on npm package `react-bootstrap`.
- `styled` - React's styled components

## Social APIs

VM provides a convenient API to get data from the SocialDB contract. There are four methods:
- `Social.get`
- `Social.getr`
- `Social.keys`
- `Social.index`

#### Social.get

`Social.get` takes up to 3 arguments:
- (required) the path pattern(s)
- (optional) the block height or finality
- (optional) the options object
  - (optional) `subscribe` - if true, the data will be refreshed every 5 seconds.
  - (optional) `return_deleted` - whether to return deleted values (as `null`). Default is `false`.

It fetches the data from the SocialDB contract by calling `get` and returns the data.
While the data is fetching the returned value equals to `null`.
If the path pattern is a single key, it will try to unwrap the object until the first wildcard.
For example, if the path pattern is `mob.near/widget/*`, the SocialDB contract will return the following object:

```json
{
  "mob.near": {
    "widget": {
      "HelloWorld": "return <div>Hello, World!</div>;",
      "HelloUsername": "return <div>Hello, {props.username}!</div>;"
    }
  }
}
```

But the `Social.get` will unwrap the object and return the following:

```json
{
  "HelloWorld": "return <div>Hello, World!</div>;",
  "HelloUsername": "return <div>Hello, {props.username}!</div>;"
}
```

Or if the path pattern is `mob.near/widget/HelloWorld`, the SocialDB contract will return the following object:

```json
{
  "mob.near": {
    "widget": {
      "HelloWorld": "return <div>Hello, World!</div>;"
    }
  }
}
```

But the `Social.get` will unwrap the object and return the actual value:

```json
"return <div>Hello, World!</div>;"
```

It's helpful that you don't have to manually unwrap object.

The block height or finality can be used to get the data at a specific block height or finality.
If the block height or finality is not specified, the data will be fetched at the `optimistic` finality (the latest block height).

For block height and finality `final`, instead of calling the NEAR RPC directly, the VM uses the Social API Server to fetch the data.
Social API server indexes the data for SocialDB and allows to fetch the data at any block height with additional options.
It also allows returning more data than an RPC call because it's not restricted by the gas limit.
In general, the API server also serves data faster than the NEAR RPC, because it doesn't execute the contract code in a virtual machine.

`Social.get` options are similar to the SocialDB's `get` API.

#### Social.getr

`Social.getr` is just a wrapper helper for `Social.get`, it appends `**` to each of the path pattern.
For example, if the path pattern is `mob.near/profile`, `Social.getr` will call `Social.get` with the path pattern `mob.near/profile/**`.

#### Social.keys

`Social.keys` takes up to 3 arguments:
- (required) the path pattern(s)
- the block height or finality
- (optional) the options object
  - (optional) `subscribe` - if true, the data will be refreshed every 5 seconds.
  - (optional) `return_type` - either `"History"`, `"True"`, or `"BlockHeight"`. If not specified, it will return the `"True"`.
  - (optional) `return_deleted` - whether to return deleted values (as `null`). Default is `false`.
  - (optional) `values_only` - whether to return only values (don't include objects). Default is `false`.

It calls the SocialDB's `keys` API and returns the data. While the data is fetching the returned value equals to `null`.
The keys contract doesn't unwrap the object, so the returned data is the same as the SocialDB's `keys` API.

Note, the Social API server supports custom options `return_type: "History"`. For each matching key, it will return an array containing all the block heights when the value was changed in ascending order.
It can be used for building a feed, where the values are overwritten. For example:
```js
const data = Social.keys(`${accountId}/post/meme`, "final", {
  return_type: "History",
});
```

#### Social.index

`Social.index` arguments:
- `action` is the `index_type` from the standard, e.g. in the path `index/like` the action is `like`.
- `key` is the inner indexed value from the standard.
- (optional) `options` an object:
  - (optional) `accountId`. If given, it should either be a string or an array of account IDs to filter values by them. Otherwise, not filters by account Id.
  - (optional) `order`. Either `asc` or `desc`. Defaults to `asc`.
  - (optional) `limit`. Defaults to `100`. The number of values to return. Index may return more than index values, if the last elements have the same block height.
  - (optional) `from`. Defaults to `0` or `Max` depending on order.

Returns the array of matched indexed values. Ordered by `blockHeight`. E.g.
```json
[
    {
        "accountId": "mob.near",
        "blockHeight": 78672789,
        "value": "test-value-1"
    },
    {
        "accountId": "mob.near",
        "blockHeight": 78672797,
        "value": "test-value-1"
    },
    {
        "accountId": "mob.near",
        "blockHeight": 78672974,
        "value": "test-value-3"
    }
]
```

Examples:
```jsx
return Social.index("test", "test-key-2");
```

```jsx
return Social.index("test", "test-key-2", {
  accountId: "mob.near"
});
```

```jsx
return Social.index("test", "test-key-2", {
  accountId: ["mob.near", "root.near"]
});
```

## State APIs

VM provides a convenient API to update the state of the widget. There are two methods:
- `State.init`
- `State.update`

#### State.init

`State.init` takes an object as an argument and initializes the state of the widget with this object. It'll be no-op if the state is already initialized.

#### State.update

The `State.update` will trigger the state update, and the component will be re-rendered.
It also has an optional argument, the object that will be added to the `state` object using `Object.assign`.
The state will be initialized with the given object if it's not initialized yet.


## Near APIs

VM provides a convenient API to interact with the NEAR blockchain. There are three methods:
- `Near.view`
- `Near.block`
- `Near.call`

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



# WIP TBD

