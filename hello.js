/**
 * bawug-userscript-starter — hello.js
 *
 * Adds a "Hello" link to the Tools sidebar. Clicking it shows a
 * notification with the current page title, namespace, and your username.
 *
 * Install: paste into Special:MyPage/common.js on any Wikimedia wiki.
 */
( function () {
	'use strict';

	mw.loader.using( [ 'mediawiki.util', 'mediawiki.notify' ] ).then( function () {
		var link = mw.util.addPortletLink(
			'p-tb',                       // "Tools" portlet on most skins
			'#',                          // href (we handle the click ourselves)
			'Hello',                      // link label
			't-hello-starter',            // DOM id
			'Say hello from the starter user script'
		);

		if ( !link ) {
			return;
		}

		$( link ).on( 'click', function ( event ) {
			event.preventDefault();
			var config = mw.config.get( [
				'wgPageName',
				'wgCanonicalNamespace',
				'wgUserName'
			] );
			mw.notify(
				'Hello, ' + ( config.wgUserName || 'anonymous editor' ) + '! ' +
				'You are on "' + config.wgPageName + '" in the ' +
				( config.wgCanonicalNamespace || 'main' ) + ' namespace.',
				{ title: 'bawug-userscript-starter', type: 'info', autoHide: true }
			);
		} );
	} );
}() );
