Goal: have a live notification for the client.

Typical solutions:

1. http boring polling: most simple
2. http long polling: most pragmatic
3. web sockets: too complicated

This commit implements the second solution.

HTTP long polling means that the server intentionally keeps the request open
until the last second. As soon as the server becomes aware of an update, it
immediately responds to the request in progress.

The pro of this is that polling only happens as frequently as updates occur.
Every request gets exactly one update.

The downside is that it's a bit of an abuse of the HTTP request / response
system. We normally expect requests to be resolved quickly. With long
polling, the client might need to wait a long time for an HTTP response,
which is unusual. This also means that the server has to maintain many
concurrent open connections, which consumes operating system resources. Web
servers sometimes need to be specially configured to ensure that these
long-running requests don't time-out.
