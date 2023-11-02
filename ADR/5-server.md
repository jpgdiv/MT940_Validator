## Server

### Context

Server for validation of the validation of customer statement records.

### Decision

To keep it simple I choose to implement a express node server running from the same repository.

For handling the File I did choose multer with memoryStorage. For large files this can be a problem and it is better to write to disk before processing.

For implementing the xml processor there was not enough time.
The idea is to have for the same implementation for different file types in each their own process.
The idea behind process is that it can run on a different (micro) server, the file is stored on arrive.

Normally I would to like to add some more testing, but because I dont have enough time this is not possible.
I tried to throw errors which can be usefull for the user.

### Consequences
