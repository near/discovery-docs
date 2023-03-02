---
id: styled
title: Styled Components
sidebar_label: Styled
---

## Overview

[Styled Components](https://styled-components.com/) is a popular library for styling React components using CSS-in-JS.
This tool was imported into `near.social` infrastructure for your use. You do not have to install or import anything, it is ready to use right away.

## Example

Here is an example from the `styled-components` website used within `near.social`

```jsx
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
`;

return (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

:::tip
You can try out the `StyledComponentButton` example on [this link](https://near.social/#/dorgon108.near/widget/StyledComponentButtonExample).
:::