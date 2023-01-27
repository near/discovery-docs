## [Image](https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/Image)

### Input
```js
  image: Image
  where Image = {url: Optional<String>, ipfs_cid: Optional<String>}
```

### Returns
A rendered image

---

## [ProfileImage](https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/ProfileImage)

### Input
```js
{
  accountId: AccountId,
  className: str = "profile-image d-inline-block",
  style: Obj = { width: "3em", height: "3em" },
  imageStyle: Obj = { objectFit: "cover" },
  imageClassName: str = "rounded w-100 h-100",
  thumbnail: str = "thumbnail";
}
```

### Returns
A rendered profile image. Uses the [Image widget](https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/Image) to be able to retrieve NFT images.

![](/img/profile-image.png)

---

## [LikeButton](https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/LikeButton)

### Input
```js
Item{
  type: string // "social",
  path: Route // "gagdiez.near/post/main",
  blockHeight: int // 83328928
}
```

### Return
A like button that also shows who liked the resource so far
![](/img/like.png)

---

## [Comment Button](https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/CommentButton)

### Input
```js
{
  onClick: function
}
```

### Returns
A button with the shape of a conversation