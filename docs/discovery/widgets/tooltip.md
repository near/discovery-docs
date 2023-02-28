# ToolTip Component

## Description

This special component displays a message once the mouse hovers over a particular DOM item. This component was imported into NEAR Social from `React-Bootstrap` and more info can be found [here](https://react-bootstrap.netlify.app/components/overlays/#tooltips)

## Example

The code has been adopted and modified from the `react-bootstrap` documentation website. Below demonstrates how to implement the message over a button and how to reposition it.

```jsx=
return (
  <>
    {["top", "right", "bottom", "left"].map((placement) => (
      <div style={{ padding: "10px" }}>
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <button variant="secondary">Tooltip on {placement}</button>
        </OverlayTrigger>
      </div>
    ))}
  </>
);

```

You can run and try out this code directly in `near.social` by following the link to this example!

https://near.social/#/dorgon108.near/widget/ToolTipExample
