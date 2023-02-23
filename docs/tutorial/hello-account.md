---
id: hello-account
title: Hello, AccountId
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Widget has access to the `context`. The context contains `accountId` if a user signed in to near.social website.
So we can create a widget that uses user's account ID from the context.

We'll also declare a local variable to save the account ID from the context.

### Example

<Tabs>
<TabItem value="request" label="Source code" default>

```jsx
const accountId = context.accountId;

return `Hello, ${accountId}!`;
```

</TabItem>
<TabItem value="response" label="Result">

[![HelloAccountId widget](https://ipfs.near.social/ipfs/bafkreiekaqk6fpjxzsqogkupcjfeot5mprb2ch2glpd67rkb2gxv5eqjg4)](https://near.social/#/mob.near/widget/HelloAccountId)

</TabItem>
</Tabs>

:::tip Fork widget

[https://near.social/#/edit/mob.near/widget/HelloAccountId](https://near.social/#/edit/mob.near/widget/HelloAccountId)

:::

---

But what if you are not signed in? In this case the widget looks broken.

![Broken HelloAccountId widget](https://ipfs.near.social/ipfs/bafkreic6tphsux6nmq7chrjjvapilakvbpavgqumh4ql7vatofrvv6cp34)
