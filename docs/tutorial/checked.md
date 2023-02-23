---
id: checked
title: Checked Hello, AccountId
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We can add an if statement to check whether user is logged in, and if not exit early.

Another change is to add `context.loading` to check whether the wallet selector has loaded successfully to prevent displaying the sign in message for accounts that are logged in, but the page hasn't successfully loaded yet.

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

return `Hello, ${accountId}!`;
```

</TabItem>
<TabItem value="response" label="Result">

[![CheckedHelloAccountId widget](https://ipfs.near.social/ipfs/bafkreieja446q24i5wmspmboswgvnsxbuy7qa7jm4d4tm6l5lk4thwjfmm)](https://near.social/#/mob.near/widget/CheckedHelloAccountId)

</TabItem>
</Tabs>

:::tip Fork widget

[https://near.social/#/edit/mob.near/widget/CheckedHelloAccountId](https://near.social/#/edit/mob.near/widget/CheckedHelloAccountId)

:::
