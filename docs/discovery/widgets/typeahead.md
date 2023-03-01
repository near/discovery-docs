# TypeAhead Component

## Description

The `TypeAhead` component provides a type-ahead input field for selecting an option from a list of choices. This component is imported from the `react-bootstrap-typeahead` package; more information about the component can be found [here](https://github.com/ericgio/react-bootstrap-typeahead).

## Example

The code example below demonstrates how to use the `TypeAhead` component to create an input field for selecting a fruit from a list of options.

```jsx
const options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

return (
  <div>
    <Typeahead
      labelKey='name'
      options={options}
      placeholder='Choose a fruit...'
    />
  </div>
);
```

:::tip
See this code in action by following [this link](https://near.social/#/dorgon108.near/widget/TypeAheadExample) to the `near.social` example.
:::
