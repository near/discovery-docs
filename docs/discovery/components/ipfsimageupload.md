---
id: ipfs
title: Image Uploader
---

The `IpfsImageUpload` is a built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS). Here is an example found in `near.social` by `mob.near` ( https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/IpfsImageUploadDemo)

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

If you follow the link above and render this component you will see the button provided by the component and an example of how to retrieve and display the image that you have uploaded.
