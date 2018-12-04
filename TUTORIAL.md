## Slides
https://slides.com/nigelmaynard/rxjs

## [Observer Pattern](0-observer_pattern.js)
- designed to share state changes amongst many objects
- an **Observable** notifies **observers** of changes to state

## [Push vs Pull](1-push_pull.js)
- iterables are **pull**-based
- the **consumer** is responsible for pulling the next value from the source when it is ready
- a dependency just for iteration?
  - I don't think so...

## [Filling the async gap]()
- in synchronous programming, getting a single value is trivial and iterables get multiple items
- in asynchronous programming, we get single values with promises
- Observables fill the async gap with asyncronous sequences

## More than the observer pattern
- Observables also notify their consumers of...
  - completion via the onComplete method of the observer
  - error via the onError method of the observer
- reactive extensions!
  - a library of operators to transform and control the flow of data
- schedulers offer 

## Cold vs Hot
- cold
  - simply invokes the factory with the subscriber as the parameter
  - every subscriber receives the same sequence of events
  - // TODO what is this good for?
    - database query, file retrieval, or web request

- hot
  - starts firing events on publish
  - subscribers see only events fired while they are subscribed

## [Operators - transforming](http://reactivex.io/documentation/operators.html#transforming)
- map and scan are like map and reduce


## Voice Recorder demo



RxJs

- reactive programming

- many implementations

- write your own observable

- [marble diagrams](https://medium.com/@jshvarts/read-marble-diagrams-like-a-pro-3d72934d3ef5)
  - how to read them
  - [rxMarbles.com](http://rxmarbles.com)

- code execution quizzes

- pipeable operators

- voice recorder demo

- subjects

- error handling

- debugging

- 

# Restart
Reactive Programming

- used to manage data streams
  - user inputs
    - mouse 
    - clicks
  - http requests to a server

- imperative programming might calculate c = a + b
  - when a or b later change, c remains the same
- reactive programming is a pattern that enables c to change as a reaction to changes in a or b
  - when a or b later changes, c is updated
- when working with events, we are regularly expecting "reactions"
  - when the user clicks, something changes
  - we can create this behaviour with imperative programming but reactive programming makes it more declarative

- avoid calling it functional reactive programming
  - there is a naming collision here
  - FRP is a different animal altogether... //TODO quote
  - reactive programming does have functional elements and it is reactive though...

# [ReactiveX](http://reactivex.io/intro.html)

- this site is like the spec for reactiveX
  - it has been implemented in [many languages](http://reactivex.io/languages.html)
  - each implementation has it's own differences
    - per example, if we look for the docs on the [flatmap operator](http://reactivex.io/documentation/operators/flatmap.html) we see that each language has it's own set of operators that do the job in different ways
    - so not exactly a spec
- the site is a good starting point for generalized info about the pattern
  - the introduction and the docs are good places to read up on ReactiveX "theory"

# Backers
- Microsoft
- Angular
- Spring

# Where it fits in your toolbox
- fixes spaghetti async
- push oriented sequence
- like a promise that can produce many values

# So it's like a Promise?
- it can be used like a promise
  - lets see how

- similarities
  - both execute asynchronously and then execute a callback
  - both have error catching functionality
    - in observer or in finally()

- differences
  - promises always async
    - observables can be synchronous
    - demo
      - talk about schedulers briefly
  - then returns a promise for chaining
    - subscribe returns a subscription for tracking the relationship
      - closed?
  - when a promise is created, it is executed
    - can you then the same promise multiple times?
    - when an observable is subscribed to it is executed (every time)
      - cold observables in particular
      - maybe talk about hot and cold?
      - sharing and subjects?
  - check error unhandled behaviour?
    - does observable die on error?
  - promises are fire and forget, observables/observers have a relationship that needs to be managed
    - observables that complete are self-contained
    - observables that do not complete must be unsubscribed from

# Lets build a service
- first just like a promise
- then a one time request whose data can be subscribed to many times later (share)
  - what if we initialize multiple times?
    - lose references and have memory leaks!
- then a long-lived subject 
  - never reassigned
  - self healing on error
  - flatmapping
    - rxMarbles
  - got to get into subjects vs observables here
    - more like an event emitter

# Error Handling

# Subject is like an event emitter

# Piping and writing your own operators
- 


https://blogs.msdn.microsoft.com/interoperability/2012/11/06/ms-open-tech-open-sources-rx-reactive-extensions-a-cure-for-asynchronous-data-streams-in-cloud-programming/

https://www.hanselman.com/blog/ReactiveExtensionsRxIsNowOpenSource.aspx