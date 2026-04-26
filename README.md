# bawug-userscript-starter

A minimal **Wikipedia user script**: client-side JavaScript that runs in your browser when you visit a wiki page, loaded from your personal `common.js`.

## What is a user script?

User scripts are JavaScript snippets that the wiki software loads for *just you* when you're logged in. They can re-arrange the UI, add buttons and shortcuts, augment the editor, or fetch data from the API and display it inline. Nothing about them changes for other readers.

User scripts are the easiest way to start writing Wikipedia code:

- No server, no deploy pipeline.
- Reload the page and your changes are live.
- Full access to [`mw.*` MediaWiki APIs](https://doc.wikimedia.org/mediawiki-core/master/js/), [jQuery](https://api.jquery.com/), and [OOUI](https://doc.wikimedia.org/oojs-ui/master/js/).

The Wikipedia gadget system (see [`bawug-gadget-starter`](https://github.com/bawug/bawug-gadget-starter/)) runs in the same browser runtime — gadgets are user scripts an interface admin has registered as a ResourceLoader module so anyone can opt in from Preferences.

## What this script does

Adds a **"Hello"** link to the page tools sidebar (the "Tools" portlet). Clicking it pops up a [`mw.notify`](https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.notify) banner with the page title, namespace, and your username.

## Install

1. Log in to the wiki you want to use it on (start with [test.wikipedia.org](https://test.wikipedia.org)).
2. Open `Special:MyPage/common.js` (e.g. <https://test.wikipedia.org/wiki/Special:MyPage/common.js>).
3. Paste the entire contents of [`hello.js`](./hello.js) into the page and save.
4. Hard-reload any wiki page (Ctrl/Cmd-Shift-R) — a "Hello" link should appear in the sidebar **Tools** menu.

To temporarily disable, just comment out or remove the code in `common.js`.

### Loading from another wiki page

Instead of pasting the source, you can load the script from a wiki page:

```js
mw.loader.load('//meta.wikimedia.org/w/index.php?title=User:YOUR_NAME/hello.js&action=raw&ctype=text/javascript');
```

This is how most published user scripts are distributed.

## Going further

- See the [User scripts directory](https://en.wikipedia.org/wiki/Wikipedia:User_scripts) for hundreds of real examples.
- Use [`mw.Api`](https://doc.wikimedia.org/mediawiki-core/master/js/mw.Api.html) to read or edit pages from the script.
- Use [`mw.hook`](https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html) to react to events like `wikipage.content`.
- Use [OOUI](https://doc.wikimedia.org/oojs-ui/master/demos/) for native-looking dialogs and form controls.
