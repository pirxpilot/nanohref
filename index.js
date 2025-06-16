import assert from 'assert';

const safeExternalLink = /noopener/;
const protocolLink = /^[\w-_]+:/;

export default function href(cb) {
  assert(typeof cb === 'function', 'nanohref: cb should be type function');

  window.addEventListener('click', e => {
    if ((e.button && e.button !== 0) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented) return;

    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    if (
      window.location.protocol !== anchor.protocol ||
      window.location.hostname !== anchor.hostname ||
      window.location.port !== anchor.port ||
      anchor.hasAttribute('data-nanohref-ignore') ||
      anchor.hasAttribute('download') ||
      (anchor.getAttribute('target') === '_blank' && safeExternalLink.test(anchor.getAttribute('rel'))) ||
      protocolLink.test(anchor.getAttribute('href'))
    )
      return;

    e.preventDefault();
    cb(anchor);
  });
}
