## Validation planning

### Context

Implementing feature `1` for validation.

### Decision

I decided to create this feature in two steps.

1. ui.
1. data.

UI will deal with visual aspect only.
data will deal with data handling.

I decided not to test all components because of time reasons. Normally, I would go for higher test coverage.
Normally, when working with Material UI I tend to create all neede components with Material UI.
For showing some proficiency I used @emotion/styled to create some elements withouth material ui.

### Consequences

Easier to review the changes before going to the main branch.
The work done is not representative for how I would normally create components and do testing.
