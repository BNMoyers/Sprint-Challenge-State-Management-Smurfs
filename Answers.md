1. What problem does the context API help solve?

 Context allows us to pass data to many components across the tree, without having to explicitly pass props down through components that don't use them. This helps us avoid confusion and keep our state code cleaner.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, the store hold our state. It is the 'single source of truth' because it's an immutable container that holds ALL of our state. Actions are triggers which tell our reducer to act in some way, while reducers define what those actions do and then send a new, updated copy of our state to the store. 
 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

 Application state is data used/needed by multiple components across our application. It's most useful when we have a big tree with lots of moving parts to manage. Component state is held at the component level, and is best for data needed only in the component in which it's held. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 redux-thunk is a kind of middleware which interrupts the normal redux workflow. It intercepts our actions, does something, and then (usually) passes the action on to our reducers. This allows us to write asyncronous code in Redux (ie API calls)

1. What is your favorite state management system you've learned and this sprint? Please explain why!

 Context API was much simpler to learn, and felt cleaner. However, Redux seems more robust and useful once we get past the learning curve. 