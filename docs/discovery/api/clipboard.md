---
id: clipboard
title: Clipboard API
sidebar_label: Clipboard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The VM implements caching layer for most network requests. You can leverage it manually by using `useCache` hook.


But also for extra safety, the VM now has `isTrusted` as part of the stack. This allows, to verify if the action was part of the stack originating from the `isTrusted` user's event.


## writeText

Introduce `clipboard.writeText` to copy given text to the clipboard.


:::note
The event requires for the page to be in transient state (explicit user's click).
:::

 | param      |  required     | type               | description                                                           |
 |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
 | `text`      |  **required** | string   | data to be copied to the clipboard.  |

### Examples

<Tabs>
<TabItem value="request" label="Request" default>

```jsx
return (
  <div>
    <div>
      <button
        onClick={() => {
          clipboard.writeText("HelloWorld!");
        }}
      >
        Copy "HelloWorld!" to clipboard
      </button>
    </div>
    <textarea className="form-control mt-2" placeholder="Test pasting here" />
  </div>
);
```

</TabItem>
<TabItem value="response" label="Response">

```json
// Copy "HelloWorld!" to clipboard
```

</TabItem>
</Tabs>
