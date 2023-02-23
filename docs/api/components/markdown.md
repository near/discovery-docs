---
id: markdown
title: Markdown
sidebar_label: Markdown
---

`Markdown` is a built-in component of the Near Social VM, which enables users to render Markdown directly within their widget without requiring any imports. To use this feature, simply enter the following code:

```javascript
Return(
    <div>
    <Markdown text={"#Subject \n This is an example"}>
    <div>
)
```

The user can input static text, as demonstrated above. However, for a more robust experience, checkout this widget that also contains a Markdown Editor (accessible at https://near.social/#/mob.near/widget/MarkdownEditorIframeExample). Hit the `View Source` Button to see how this editor was created.

![](https://i.imgur.com/XJO8tEz.png)
