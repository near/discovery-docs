---
id: markdown
title: Markdown Viewer
sidebar_label: Markdown
---

`Markdown` is a built-in component that enables to render Markdown. To use this feature, simply use the `Markdown` component:

```ts
const text = `
  #### Markdown Section
  Example of **markdown** *code* with an [url](example.com)
`;

return (
  <>
    <h3> Adding Markdown </h3>
    <p> Widgets can have markdown code </p>
    <hr />
    <div class="container border border-info pt-3">
      <Markdown text={text} />
    </div>
  </>
);
```

<hr class="subsection" />

#### Resulting Widget
![img](@site/static/docs/widget-markdown.png)


---

## Markdown Editor
<!-- TODO: Create a widget -->
The user can input static text, as demonstrated above. However, for a more robust experience, checkout this component that also contains a Markdown Editor (accessible at https://near.social/#/mob.near/widget/MarkdownEditorIframeExample). Hit the `View Source` Button to see how this editor was created.

![](https://i.imgur.com/XJO8tEz.png)
