[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# @pirxpilot/nanoraf

Fork of [nanohref]. Tiny href click handler library.

## Usage
```js
var nanohref = require('@pirxpilot/nanohref')

// Handler automatically attached to window.document
nanohref(function (location) {
  console.log('new location is', location.pathname)
})

// Create DOM node
var el = document.createElement('a')
el.setAttribute('href', '/my-link')
el.innerText = 'Click me'
document.body.appendChild(el)

// Trigger click
el.click()
// => "new location is /my-link"
```

## Ignoring links
By default all href links are handled. The event is not handled under the
following conditions:
- the click event had `.preventDefault()` called on it
- the link has a `data-nanohref-ignore` attribute
- the link has a `target="_blank"` attribute with `rel="noopener noreferrer"`
- a modifier key is enabled (e.g. `ctrl`, `alt`, `shift` or `meta`)
- the link's href starts with protocol handler such as `mailto:` or `dat:`
- the link points to a different host
- the link has a `download` attribute

:warning: Note that we only handle `target=_blank` if they also have
`rel="noopener noreferrer"` on them. This is needed to [properly sandbox web
pages](https://mathiasbynens.github.io/rel-noopener/). Once `noopener` [becomes
more widespread](http://caniuse.com/#feat=rel-noopener), we can drop
`noreferrer` too (currently just 60% of browsers in use support it).

## API
### `nanohref(handler(location), [rootNode])`
Create a new anchor click handler. The second argument is for the root node,
which defaults to `window.document`.

## See Also
- [MDN/link-types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
- [caniuse/rel=noopener](http://caniuse.com/#feat=rel-noopener)
- [mapbox/link-hijacker](https://github.com/mapbox/link-hijacker)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[nanohref]: https://npmjs.org/package/nanohref

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/nanohref
[npm-url]: https://npmjs.org/package/@pirxpilot/nanohref

[build-url]: https://github.com/pirxpilot/nanohref/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/pirxpilot/nanohref/check

[deps-image]: https://img.shields.io/librariesio/release/npm/@pirxpilot/nanohref
[deps-url]: https://libraries.io/npm/@pirxpilot%2Fnanohref
