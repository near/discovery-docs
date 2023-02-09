# Widgets

Widgets are reusable composable components for Near Social.

You can view and create widgets at [near.social](https://near.social/).

For example, a [data explorer widget](https://near.social/#/mob.near/widget/Explorer) allows you to explore raw data from SocialDB.

[![Data Explorer widget](https://ipfs.near.social/ipfs/bafkreibgwg4bkzswnaa45uufxvdu5zrzdrr2xsdaepnuv2xf7svq3rth5m)](https://near.social/#/mob.near/widget/Explorer)

#### Open source with version control

The source code of every widget is openly stored in SocialDB.
The owner of the widget has ability to upgrade the widget, by updating the source code.
But because SocialDB is stored on a blockchain, all the previous versions of the widget are also available.
This enables automatic version control for every widget.

#### Forking

If you are familiar with GitHub, you know that you can fork any public repository to create your local version.
Similarly, you can fork any widget straight from the near.social UI.

![Fork widget button](https://ipfs.near.social/ipfs/bafkreign2gcetaragbzalvxsk6f6hjxzazybaxpngbhmc7uh6hbbfvek5y)

Forking creates a copy of the widget source code, but under your account. It allows everyone to modify the existing widgets.
Once you save the new widget, it becomes immediately available. And everyone can now view and fork your version of the widget.

It's mostly the question of a UI to create a pull requests, so people can merge changes from other forks. Currently, it has to be done manually.

#### Programming language

The widgets are implemented in a limited version of JSX (a JavaScript with ReactJS).
The code is executed in custom Virtual Machine to create a secure sandbox.
This ensures the widgets can't access local storage or cookies.

