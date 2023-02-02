This is a client-side single page application.

The page _never_ reloads. The page loads once, and then it's all javascript and
APIs.

This way of creating web apps is pretty new! It started around 2010 when
Angular became popular inside Google, and later React was released by Facebook.

## Pros

The benefit of doing this this way is that it allows client-side and
server-side developers to work separately.

## Cons

The drawback is that it's more complex, uses less of what the browser can do
for you for free, and has some dangerous pitfalls for user experience:

- poor accessibility (this app has horrible accessibility)
- slow initial page load
- poor SEO performance, because we send an empty HTML page with code, instead
  of an html page enriched with content

**Weighing the benefits and drawbacks, this IS/IS NOT the way most companies
build websites and web applications.**
