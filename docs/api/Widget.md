---
id: Widget
title: Widget Component
sidebar_label: Widget
---

`Widget` is a powerful feature of the Near Social VM, which enables users to import another widget into their own. It's similar to importing a `component` into a React application from `npm`, except that you're importing a widget created on `near.social` and incorporating it into your own `near.social` application.

To use this component, you can use the following code as an example:

```javascript
let variable="value";

Return(
    <div>
    <Markdown src={"user/widget/widget-name"} props={{
        variable
    }}>
    <div>
)
```

In this code, `"user/widget/widget-name"` is the `URL` of the `widget` that you want to import. The props object contains data that you want to pass into the imported widget, just like you would in a standard React component.

To save time when searching for a `widget` to import, you can use the search tool provided on the `near.social` platform. First, search for the component you want, then select the embed option. This will copy the `Widget` component with the src information to your `clipboard`. Then, simply paste it into your code, and you're ready to use the imported widget in your application.

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
