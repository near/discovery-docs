---
id: home
title: Discovery API
sidebar_label: Home
---

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