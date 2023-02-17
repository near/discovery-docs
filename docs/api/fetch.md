---
id: fetch
title: Fetch API
sidebar_label: Fetch
hide_table_of_contents: true
---

`fetch` is a global function that allows to fetch data from the URL. It acts like a hook. It's a wrapper around the `fetch` function from the browser behind the caching layer. It's useful for fetching data from the external APIs.
It has the similar API as the browser's `fetch` function, but instead of a promise returns a value. If the data is not cached, it returns `null` and fetches the data in the background. If the data is cached, it returns the cached value and then revalidates it.

To access promise version, there is a method `asyncFetch` that returns a promise.