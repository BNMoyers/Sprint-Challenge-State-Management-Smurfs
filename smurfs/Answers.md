1. What problem does the context API help solve?

    Context API helps us avoid prop drilling by allowing us to pass props directly where they're needed, instead of having to go through every single branch of the tree. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - actions are objects with a type property (and sometimes a 'payload' property, though payloads are optional). the type of the property tells the reducer what logic to apply to it, and the  payload provides data the reducer needs to complete that logic. 

reducers - reducers are functions which take in two arguments(currentState, action) and return a new copy of state based on the changes your action makes to the current state.  

store - The store is an object which holds our state in Redux. The store is a 'single source of truth' because it keeps us from modifying our original state; when working with the store, we use 'pure' functions. Instead of changing the orginal, we clone our state, modify it, and then replace the original as our working state. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held at the top level and can be connected or passed to anything via a number of different state management methods (ie the store). Component state, however, is more specific; it exists inside of a component and is harder to pass around. 

Initial state and/or state that has a LOT of data in it, especially if it's needed across lots of components, is best managed as Application state. Component state is good for small amounts of data that are either needed only at the component level or in its direct descendants. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is middleWare; it acts like a 'bouncer' for our action-creators; it checks what we pass through them, does something based on what it finds, and can then pass the data on if needed. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context, I think; while more limited, it's also a lot simpler than Redux. I had an easier time wrapping my head around it. 
