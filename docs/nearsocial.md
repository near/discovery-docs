# Past, Present, and Future

This is a reflection on the past, the present and the future of Near Social.  
Published by Eugene The Dream (mob.near) on Oct 30, 2022.

## The Past

Near Social started with a centralized (federated) social network based on mastodon.social.
Using near accounts names as credentials for the mastodon instance.
E.g. `alice.near` were getting `alice@near.social` account.

It had a lot of advantages:
- A working social network with web and mobiles apps.
- Profiles, graph, feed, notifications, mobile.
- Don't need an email, just sign up with a wallet.
- Data can be publicly exported and served from the API.

The goal was to bootstrap **the social data**, not getting people to post there.  
Web2 mastodon network translates one-to-one to the Web3 network of NEAR, because the credentials are NEAR accounts:
- If `alice@near.social` was following `bob@near.social`, it means `alice.near` follows `bob.near`.
- If `alice@near.social` wants to be called `Mike Purvis Intern`, then it means `alice.near` wants that.

And don't forget the free notifications when someone tags you.
So `thewiki@near.social` https://thewiki.near.page was making a post tagging you, which was sending a notification when someone edited your article

Overall it was great, but had issues:
- Not so federated. near.social was still a single instance. Users couldn't replicate that. It was centralized.
- Centralization leads to censorship. No matter my good intents of running it, the government has a way to ask nicely.
- Implemented in a stack not designed for NEAR needs. Ruby is hard to learn from scratch, but would be also difficult to maintain a fork.
- Data collection and privacy concerns. A centralized instance is point of failure.
- And finally, no on-chain data. You couldn't check that someone is following you on-chain. You can't post on-chain without a web2 integration.

Most people I talked to didn't realize that the goal was not the feed, but the profiles and connections.
So I've decided to stop pursuing this direction and look into a fully on-chain option.

## The Present

![Social in Web2](https://ipfs.near.social/ipfs/bafkreieneewmh7kq3ogerd3quu7hiwvpnyztde6nbex3pn7ztakigfkzie "Social in Web2")

![Social in Web3](https://ipfs.near.social/ipfs/bafkreicz6vmexgotcr6hqf6lpkxjwdj2225h5zkccb2hggzlyxp4xzj25y "Social in Web3")

NEAR always had an idea to create a user-centric Open Web.
Where the users are in control of their data. The data is not siloed in a single instance.
The developers don't have to rely on someone else's API permission to integrate with the services.
Where the applications themselves are open and can be improved and modified towards one's needs.

Blockchains deliver this idea with smart contracts. An always on services that can be used by anyone.
But front-end applications are stuck at web2. They are centralized and controlled by a single entity.
And smart contracts were mostly designed for financial applications.
This was mostly a technical and monetary limitation of legacy networks. The operations were too expensive to be used
for anything else than commercial transactions. Each transaction had to have a monetary value to be worth submitted.

But with creation of NEAR, this limitation was removed.
The scalability allowed creating new types of applications. Where the value of a transaction is not a monetary value, but a social value.

### SocialDB

I started with [~~Social07~~](https://youtu.be/Y4yz5gZYvm0) [~~Social08~~](https://www.youtube.com/watch?v=Khn7zX7ZtqI&t=4700s) SocialDB smart-contract.

The data storage contract that is centered around the users, not the apps.
Data is open to read for everyone (because it's on a blockchain).
But users control who can write into their data.
The users also cover the storage cost of their data, so the contract remains self-sustainable forever.
And this contract doesn't need a governance to survive.

Making the public data accessible to all applications and all developers creates a strong network effect.
Developers can build new applications faster by leveraging the existing data and bootstrap the network.
Better algorithms can be built on top of the data, because it's open and accessible.
New applications add new data, which makes the network stronger.
While users maintain control over their data, because they can choose who can write it.
And if they don't like the data, they can edit it or delete it.

The format for the data storage is a JSON object with a key-value structure.
The where the root object keys are account IDs, and the values are objects with the data stored by that account.
To be useful, the data should be structured in a way that can be easily queried, but the contract doesn't enforce any structure.
This allows users to store any data they want, not limited by the restrictions put by the contract's government.
The contract stays immutable, while the structures should be defined by a set of standards outside the contract.

### Standards

The [Standards repository](https://github.com/NearSocial/standards) contains a set of standards for the data stored in the SocialDB contract.
The standards define common structures for the data.
For example, the Profile standard defines how the users should store the profile information, which fields should be present and what type they represent.

The standards are not enforced by the SocialDB contract, but they are recommended to be used by the applications.
A new application that wants to integrate with the SocialDB contract should reference the standards and use the same structures.
If an application wants to store data that is not covered by the standards, they should experiment with the data structure and see what works best for them.
Then they should propose a new standard for the data structure, so that other applications can use it as well.

If the process of defining Standards becomes slow and the consensus can't be reached, then an alternative repository can be created and a new set of standards might be adopted by the community.

### Near Social (near.social)

While working on the SocialDB contract, I've realized that having the contract is not enough. It's just a database.
There should be a way to browse your data and populate it. For example, a simple application that only creates your profile.

I've started thinking how to create a framework that would allow developers easily build new simple applications on top of the SocialDB contract.
And to create applications quickly, without having to write a lot of boilerplate code, compiling it, deploying it, and then integrating it with the SocialDB contract.
Ideally, you would drag and drop a few components and create a form to edit your profile.
And then you would have a profile page that would show your profile data.

So my thinking was the following. The applications/components consist of a few parts:
- A data fetching part
- A processing part
- A rendering part
- And a commit button to save changes to the contract.

At start, I explored the idea of some JSON-based schema that would define a component.
But I realized that it's not flexible enough.
The data processing part would need a custom logic and the schema complexity would grow exponentially.
Instead, I thought, it would be great to have the logic part in JavaScript, and a rendering part in some schema.
But the final iteration was even better - the logic part is in JavaScript, and the rendering part is in React (JSX).
This way, developers can use the familiar language and tools to build components.

This was not a trivial problem, because I didn't want to execute plain JS code on the client side. This would be a security risk.
The hacker could inject malicious code into the component and steal the user's keys and compromise the account.
I've decided to run the code in a Virtual Machine (VM). There was a helpful library called `acorn` to parse javascript and JSX code.
Now, the framework only needed to interpret the JS code and render the React components in a secure way.

In the last couple of months, the VM had quite a bit of iterations and is already quite powerful. The components that you are building called widgets.

### Widgets

Widgets are the building blocks of the Near Social framework. They are reusable open-source components that can be used to build applications on top of the SocialDB contract.
A widget can be a small component, like a button, or a large component, like a profile page, or even a whole application like a social network.

The source code of the widgets is stored in SocialDB contract as well. So widgets are accessible to everyone.
This includes all versions of the widgets ever committed.
It allows to have a version-control system for the widgets, and to see the history of changes for each widget.
But because the source code is open, you can fork an existing widget, modify it and commit a new edited version of the widget to your account.

The benefit of executing the widgets from source is that you don't need to recompile the dependent widgets.
When you improve the widget, you can just commit the new version to the contract and all the dependent widgets will automatically use the new version (unless they are locked to a specific version).

The most interesting part about widgets is integrating widgets created by other accounts.

For example, one user implements an `Image` widget for rendering an `Image` object from Standards.
Another user implements a `Profile` widget that uses the first user's widget to render the profile picture.
The second user doesn't have to worry about the implementation details of the `Image` widget, as long as the interface stays the same.
If an `Image` standard changes, the first user can update the `Image` widget, and the second user will automatically get the new version that follows the new standard.

_Recently, the `Image` widget started supporting NFT images, and the `Profile` widget got the NFT support for free._

### The Experience

If you go to https://near.social website, the page you see is a widget. It's a `Homepage` widget.
This widget checks if you have a custom homepage widget selected in your account's settings and renders it, otherwise renders the default `Welcome` widget.

To render a widget as an application, you can specify the SocialDB's path to the widget in the URL.
E.g. you can see the full list of widgets at https://near.social/#/mob.near/widget/AllWidgets

The top menu has three buttons: "New Widget", "Fork Widget" and "View Source". They are designed for the developers.
It's an early view of the Open Web dream, where you could tinker with the code of any application you are using.
Every application is a widget, and every widget is a piece of code that you can fork and modify.
Once you fork the widget and save it under your account, it immediately becomes available to everyone.
You can send a link to your widget to your friends, and they can use it as well.

The most common use case for visiting near.social is to create your profile.
Once you save it to NEAR, the profile becomes available for everyone to see.
Not only on near.social, but also in any other NEAR application that integrates with SocialDB.

Another interesting widget is an experiment on a social feed. Create, share and discover Memes.  
https://near.social/#/mob.near/widget/Memes

To make it work, I had to start an indexer for SocialDB contract, build a custom API server, and connect it to Near Social framework.
The magic of a social feed is that the data is not stored in the latest state of the SocialDB contract.
Only the last post is stored in the latest state, and all the previous posts are deleted.
This is done to save storage and make it cheaper for the users.
The indexer keeps track of all the posts and stores them in a database.
And the custom API server provides an RPC to query the history of the posts.

Another problem that was needed to be solved is image uploads.
The images are stored on IPFS, and the IPFS hash is stored in the SocialDB contract.
Near Social runs a self-hosted IPFS node, and the images are uploaded to it, so the images are available faster and free for the users.
There is also a thumbnail service that generates thumbnails for the images, so the images are not loaded in full size for previews.

Another interesting widget is NEAR Mainnet Status widget. https://near.social/#/mob.near/widget/MainnetStatus  
It's a simple widget that shows the status of the NEAR Mainnet RPC. This widget doesn't use the SocialDB contract at all.
Instead, it uses `fetch` method to get the status info from the RPC endpoint and to display it in a table.
The interesting part is the widget is not a social application. **It doesn't  interact with SocialDB at all.** But deploying it on Near Social Framework is one of the easiest way to get this type of application hosted and running.
All you need is to create a new widget, write the code and save it to NEAR.
It's immediately deployed worldwide and available for everyone to use. No need to host it yourself.
The code is stored in the SocialDB contract on NEAR Protocol, replicated and decentralized, so it's also censorship resistant.

After discovering the power of widgets, I've started thinking about the future.

## The Future

Before we go into the future, let me explain why I started the project in the first place.
The vision of the project is to build the Open Web. And there are certain goals on the way.

Probably, the main goal is to build a unified social identity for NEAR ecosystem. I want accounts to be people, not just wallets.
I want people to feel attached to their accounts, for them to belong to the NEAR community.

Some people have their account for a long time, and they used it for a lot of apps and experiments in the past.
They have collected a lot of NFTs and can be recognized by their account name across the ecosystem.
With a social identity they would be able to express themselves publicly.
With badges and achievements tied to their account, they would be able to prove their skills, knowledge and status.
With the social graph, they would be connected to other people (not just accounts).
The network and the community would be more human and less cryptographic.
At the same time people own their identities, while identities are still available to every existing and future application on NEAR.
There is a lot of potential if the accounts are not just 64 hex characters or simple usernames, but they are real people with their friends, achievements, and reputation.
This is the future I want to see for NEAR.

But while building Near Social Framework, I've realized how powerful the widgets are.
They are not only the building blocks of the social identity, but they can be the building blocks of the Open Web.
The widgets can be used for non-social applications. They can be used to build any kind of application.
With the proper APIs in the VM, you can rebuild almost any frontend application on NEAR:
- Ref Finance? It's just an app that reads data from a few places and present user a UI to create transactions.
- Paras? It's an app to create and trade NFTs. The data is available on-chain, so the UI can be built on top of it.
- The Wiki? Doable and might be a better experience than the current one, considering the social features.

But the applications don't even have to interact with NEAR blockchain.
They can fetch data from one internet source and store it in another.
Composability aspect of the widgets makes creation of the new decentralized applications much faster and more efficient.

So let's speculate what the future can be.

### NEAR Social Network

Most technical pieces are there. The social identity is built, the social graph is ready to be implemented, the social feed is already working.
There are a few technical challenges that need to be solved (e.g. likes and comments), but there is a proposed solution for them.
It's a matter of time and resources to create the unified NEAR social network.

Here are a few things that are on my mind:

#### Badges and achievements

Every account or contract will be able to create new badges and award them to users.
Think of the badges as soul-bound tokens.
They can be awards that you've received, a membership of a group, a status you've achieved, or a skill that you proved.

Applications will be using them to reward their users.
And users will be able to show them off on their profile.
While contracts can use badges to guard access to their features or give extra benefits to the users.

#### Global Reputation

By using badges and achievements, we can build a global reputation system.
We can create a list of badges with coefficient score associated with each badge.
Multiple coefficient by each badge you hold, sum them up, and you get your global reputation score.
Order users by their reputation score, and you get a list of the most active and trusted users.

The list of the badges with their coefficients will be public, so everyone can see how the reputation is calculated.
People will be able to find badges that they don't have, read the description and try to get them.
This is a way for the applications to attract new users and reward existing ones.

You will be able to see your position in the global reputation list, and compare it to your friends.
This may be one of the strongest motivators for users to get more badges and achievements.

#### Rating and reviews

Since only users are earning badges and getting reputation score, we need a way to rate and review applications, widgets and contracts.
The best option is to build a rating system, where users could leave reviews with ratings.
The reputation of the users may affect the order in which reviews are displayed.
And some reviews can be marked as helpful by other users, so they will be displayed higher in the list.
Again, using the weighed reputation score.

The reviews and ratings can be processed and used to create a list of the best applications, widgets and contracts.
They can be used to create order for almost any rated entity, including reviews for the projects and people.

If for some reason the global reputation system got biased, you may change it, by switching to a different reputation algorithm.
For example, by building a different list of badges and their scores. 
This way your experience will be personalized to your preferences.

And the social graph can make it local to you.

#### Social Graph

Social Graph is one of the easiest features to implement (technically).

But it might be faster for people to use, if they don't have to search for the connections manually. Instead, there should be recommendations.
And there are a lot of data to build recommendations, because we use blockchain and all data there is public by default. For example:
- accounts that you sent or received tokens before (native, FT or NFT)
- accounts that belongs to the same DAO as you
- the legacy mastodon near.social data
- friends of your friends

So it would be nice to build a recommendation system that will help people find their friends or accounts to follow.

#### Customizable social feed

The interesting possibility for the Social Feed on Near Social framework is enabled by the ability to compose widgets.
Each post of the feed can be a different widget.
The application creating a post can specify the widget to use.
And later all posts can be combined and rendered in a single feed. Users will be able to filter the feed by a widget type, or select widgets to display.

Examples of the widgets that can be used in the feed:
- an NFT 
- a badge or an achievement
- a review
- a blog post
- a widget that you've created
- a trade result
- a meme
- a song you've liked on one of the music apps

The possibilities are endless.

### Widgets registry

While working on the social network, it became clear to me that widgets can be used even without social features.
They can be used to build any kind of application on NEAR or without NEAR.

But it's hard for developers to monetize the work they put into making these widgets.
The widgets code is open sourced, so anyone can access any widget.
So the Near Social framework can't realistically charge for the access to the widgets.
Instead, we can try to focus on a Donation model.

The challenge with simple donations is that the top applications may get them, but the creators of the building blocks might not receive them.
That's why, I have an idea of the voluntary revenue sharing.
For example, a widget for a ProfilePage can decide to donate 20% of the revenue to the creator of the ProfilePicture widget.
And the profile picture widget can donate 20% to the creator of the Image widget.
The Image widget may be so common, that even the small 3rd degree revenue is enough to support the creator.
If a widget is forked, the author may decide to donate some revenue to the original widget.

In order for developers to efficiently build new widgets and for users to discover applications, we need a registry.
It will be a place where developers can present their widgets and applications.
They may also suggest a single-time or a recurrent donation amount.
The registry will use reviews, ratings and developers reputation to help users find the best widgets and applications.
And the algorithms can also be customizable.

If the donation model works, the developers can finally start earning money for their open-source work.

### Conclusion

I'm excited about the future of NEAR. And I'm excited about NEAR enabling the Open Web.
The work on Near Social and SocialDB started as an experiment. Near Social still doesn't have an official entity or a proper organization behind it.
In a year, it may change completely, be called something else and have a different goal. But I hope the vision for the Open Web will stay the same.

Let's build the Open Web together!

