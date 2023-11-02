## Validation data layer

### Context

Implementing data layer.

### Decision

In the Data layer, I created a utils files with some more complex logic. I wanted to create an implementation to show some understanding of React.
Normally, I would argue that this code is quite complex and using a library is preferred.

The Data Layer is sepperated because it makes it easier to migrate it to different location.
You have a set of functions that connect the implementation.
For example when an GraphQL is implemented you can write new implementation in the datalayer without affecting the program itself.

Domain constant or variables can be multiple. It is good practice to avoid magic strings.
It is good to sepperate Service between domains and endpoints.

### Consequences
