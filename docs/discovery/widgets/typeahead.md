# TypeAhead Component

## Description

The `TypeAhead` component provides a typeahead input field for selecting an option from a list of choices. This component is imported from the `react-bootstrap-typeahead` package and more information about the component can be found [here](https://github.com/ericgio/react-bootstrap-typeahead).

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

See this code in action by following a this link to the `near.social` example.

https://near.social/#/dorgon108.near/widget/TypeAheadExample
