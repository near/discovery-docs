# Gathering Knowledge of NEAR Social

---

### Table of Content
1. [Introduction (see below)](#introduction)
2. [Atomic Widgets](./social-atoms.md)
3. [Composed Widgets](./widgets.md)
4. [Widgets sort by Topics](./topics.md)

---

### Introduction
NEAR social is both a social network and a developer platform. This is not clear to see right now, since the UI ain't great, but the main components are there.

### Users
Users will basically post, like, and consume apps... where apps will basically be "embedded web3 apps within the social network". Remember facebook apps? Playing pet society, city vile, and taking quizzes? Literally that, plus some DEXes I guess.

If you remove some of the boilerplate, you see the social component in near.social immediately:
![](/img/social.png)

## Developers
Developers will create web3 apps directly in NEAR Social. This is not the best UX if you ask me, but I am not knowledgeable of making IDEs, so I'll just go with it for now.

Developers will have 3 options to develop apps:
1. Use low level APIs to make calls to smart contracts and JS libraries.
2. Compose widgets (which are small rendered apps)
3. The most likely: Use a mixture of 1&2.

Even the main page of near.social is a composition of widgets, here I have manually delineated the widgets being used, with their respective names. Please notice that widgets are also composed by widgets.

![](/img/widgets.png)

At some point you reach the low level, in which API calls are made. For example, this is how the `LikeButton` knows who liked a specific post:

```js
const item = {
    type: "social",
    path: "gagdiez.near/post/main",
    blockHeight: 83328928
}
const likes = Social.index("like", item);
```

`Social.index` is asking the NEAR Social indexer to bring all the people that liked the post that `gagdiez.near` made on block `833...`.