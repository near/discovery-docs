---
id: add-html
title: Adding Some HTML
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We can add some HTML on top of the plain text we return. ReactJS has a lot of built-in HTML elements.
For example, we can wrap our greetings into a header.

Note that, in JSX/ReactJS the text between the tags is not a JavaScript expression, it's plain text.
So `<div>accountId</div>`, will be rendered as `accountId`, instead of `mob.near`.
To execute a JavaScript expression we need to wrap it into a curly brackets `<div>{accountId}</div>`.

### Example 

<Tabs>
<TabItem value="request" label="Source code" default>

```jsx
const accountId = context.accountId;

if (context.loading) {
  return "Loading";
}

if (!accountId) {
  return "Please sign in with NEAR wallet to use this widget";
}

return <h1>{`Hello, ${accountId}!`}</h1>;
```

</TabItem>
<TabItem value="response" label="Result">

[![HelloAccountIdHeader widget](https://ipfs.near.social/ipfs/bafkreigqpnywkrgotxlhm74yh7qxpfdrvqgsacudgjsufwy76qzhoqdera)](https://near.social/#/mob.near/widget/HelloAccountIdHeader)

</TabItem>
</Tabs>

:::tip Fork widget

[https://near.social/#/edit/mob.near/widget/HelloAccountIdHeader](https://near.social/#/edit/mob.near/widget/HelloAccountIdHeader)

:::
