## Validation UI

### Context

Implementing UI

### Decision

I decided to split up in components and views.

Component folder.
In the root folder is also a components folder.
In this folder I only want components that are really generic.
For this I preffer to keep components feature itself.
This allow to be more domain spefic, when I think a component is usefull in other features aswel I move it to the root component folder.
When building a feature it is sometimes difficult to make components generic enough. It helps to be aware of domain specific usecases. It makes it a consious decision to move it to the root.

Views folder.
It should contain for the mind still good understandable size of code, its about composition of components and also some logic based on state.
It should be dump and not directly connected to data layer. Making it easier to test and make changes to.

Page folder is where I start to connect the data layer. At this level you don't have to think about visual detials.
Routing, fetching and ability to deal with errors etc.

I stopped writing tomany test. Only for most important parst. To keep enough time.

### Consequences

Clean and more easie to maintable code.
