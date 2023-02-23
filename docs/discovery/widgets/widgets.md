---
id: widgets
title: Widgets
---

`Widgets` are the smallest unit of a frontend in Discovery. Similar to React components, they are written using a limited version of [JSX](https://reactjs.org/docs/introducing-jsx.html).

The code is executed in custom Virtual Machine to create a secure sandbox, thus ensuring the widgets can't access local storage or cookies.

---

## Creating a Widget

To create a `widget` you simply need to write valid JSX code, i.e. a mixture of HTML and JS.

As with React Components, `widget` can take properties through their `props` value.

```ts
let greeting = "Have a great day";

return (
  <>
    <div class="container border border-info p-3 text-center">
      <h1>Hello {props.name}</h1>

      <p> {greeting} </p>

      <button class="btn btn-primary"> Bootstrap Button </button>
    </div>
  </>
);
```

<hr class="subsection"/>

#### Resulting Widget
![img](@site/static/docs/widget-basic.png)

:::tip
By default, the `widgets` have access to the [`Bootstrap`](https://getbootstrap.com/docs/4.1/getting-started/introduction/) library, to simplify your frontend development.
:::

---

## Composing a Widget

You can compose multiple `widgets`. This will allow you to create complex applications. 

To import `widget`, you only need to know who created it (their NEAR username), and the name of the widget. Then, simply use the `Widget` component


```ts
const user = "gagdiez.near";
const props = { name: "Anna" };

return (
  <>
    <h3> Composing Widgets </h3>
    <p> Widgets can be composed </p>
    <hr />

    <Widget src={`${user}/widget/Greetings`} props={props} />
  </>
);
```

<hr class="subsection"/>

#### Resulting Widget
![img](@site/static/docs/widget-composed.png)

---

## Searching for Widgets

To save time when searching for a `widget` to import, you can use the [search tool provided by `near.social`](https://near.social/#/mob.near/widget/Applications).

<div align="center">
  <img src="https://i.imgur.com/oaM1cvp.png" width="400" />
</div>

Search for component you want, then select the `embed` option. This will will copy the `Widget` component with the src info to your `clipboard`

<div align="center">
  <img src="https://i.imgur.com/Wnr3Xx9.png" width="400" />
</div>

Then simply paste it into your code.

<div align="center">
  <img src="https://i.imgur.com/wJhcuqp.png" width="400" />
</div>

---

## Open Source With Version Control
The source code of every widget is openly stored in [SocialDB](../../social/home.md). The owner of the widget can update the widget's code, and since SocialDB is stored on a blockchain, all the previous versions of the widget will remain available.