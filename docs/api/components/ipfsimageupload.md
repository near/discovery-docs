---
id: ipfs
title: IPFS Image Upload
sidebar_label: IpfsImageUpload
---

`IpfsImageUpload` is a built-in special component of the Near Social VM, which enables users to create a `button` that will allow users to directly upload an image to ipfs and return a `CID` identifier (a special string used to identify some information stored in `IPFS`). Here is an example found in `near.social` by `mob.near` ( https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/IpfsImageUploadDemo)

```javascript
initState({
  img: null,
});

return (
  <div className='container row'>
    <div>
      Image upload: <br />
      <IpfsImageUpload image={state.img} />
    </div>
    <div>
      Raw State:
      <pre>{JSON.stringify(state)}</pre>
    </div>
    <div className='mt-2'>
      {state.img.cid && (
        <img
          src={`https://ipfs.near.social/ipfs/${state.img.cid}`}
          alt='uploaded'
        />
      )}
    </div>
  </div>
);
```

If you follow the link above and render this component you will see the button provided by the widget and an example of how to retrieve and display the image that you have uploaded.
