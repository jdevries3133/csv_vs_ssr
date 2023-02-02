This is server-side rendering.

Notice that there is no more static html!

## Pros

Less client-server communication. Notice we only need one request to load the
page instead of two!

Less code. About half as much in this place.

Fewer pieces of "state." Before, we had state on the server _and_ the client.
Now, we only have server-side state.

Faster & simpler for the client -- the server does the work!

Better for SEO. Feeding content to the hungry hungry content hippo (Google).

We can send dynamic content in response to the initial request.

Easier for a small website.

## Cons

Client and server are tightly coupled. In large software systems, tight
coupling = ☠️  😵 🪦

## Why is Tight Coupling Akin to Death

This gets into complicated stuff. We are entering the territory of things that
senior engineers at major tech companies think about.

Communication creates a drag on productivity.

Tech projects are very complicated.

Parallelizing very complicated projects requires a lot of communication.

- building bridges
- building skyscrapers
- building google
