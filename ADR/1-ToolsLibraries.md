## Tool and libraries used.

### Context

Scaffolding the project.

### Decision

npm
Using Material UI for styling part of the applicaiton.
Using @Emotion/styled for some custom components.
Node express for api and backend.
SPA react frontend.
MSW, vitest for testing.
React + React router.
No library for state management and caching/fetching.
Feature slide Architecture.

### Consequences

npm is most known to developers but lacks caching and speed of installing compared to yarn or pnpm.
Two different ways of styling only for assignment purpose.
Stack stack required two enviroments in monolith structure.
For showing skils set in both backend frontend.
Sharing entitie folder to mimick some relation between front-end back-end. Normally tRPC, GraphQL or Swagger with api fe generation is prefered.
Splitting up in different repo's or having monorepo structure is normally prefered.
Litle more work to setup but makes project more future prove and gives oppertunity / space to think more about architectual desicions.
