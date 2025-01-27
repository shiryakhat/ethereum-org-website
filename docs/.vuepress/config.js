const { translate } = require('./theme/utils/translations');

module.exports = {
  title: 'Ethereum',
  themeConfig: {
    nav: [
      { text: translate('page-home'), link: '/' },
      { text: translate('page-beginners'), link: '/beginners/' },
      { text: translate('page-use'), link: '/use/' },
      { text: translate('page-learn'), link: '/learn/' },
      { text: translate('page-developers'), link: '/developers/' }
    ]
  },
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'
      }
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'ethereum.org' }],
    ['meta', { property: 'og:url', content: 'https://ethereum.org' }],
    [
      'meta',
      { property: 'og:image', content: 'https://ethereum.org/og-image.png' }
    ],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: '@ethereum' }],
    ['meta', { property: 'twitter:creator', content: '@ethereum' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://ethereum.org/og-image-twitter.png'
      }
    ],
    // Matomo tracking
    // see https://github.com/vuejs/vuepress/issues/790
    [
      'script',
      {},
      `
        var _paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['setCookieDomain', '*.ethereum.org']);
        _paq.push(['setDomains', ['*.ethereum.org']]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u='//matomo.ethereum.org/piwik/';
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '4']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        `
    ],
    [
      'noscript',
      {},
      `<p><img src="//matomo.ethereum.org/piwik/matomo.php?idsite=4&amp;rec=1" style="border:0;" alt="" /></p>`
    ]
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      label: translate('language'),
      title: translate('ethereum'),
      nav: [
        { text: translate('page-home'), link: '/' },
        { text: translate('page-beginners'), link: '/beginners/' },
        { text: translate('page-use'), link: '/use/' },
        { text: translate('page-learn'), link: '/learn/' },
        { text: translate('page-developers'), link: '/developers/' }
      ]
    },
    '/fr/': {
      lang: 'fr-FR',
      label: translate('language', 'fr-FR'),
      title: translate('ethereum', 'fr-FR'),
      nav: [
        { text: translate('page-home', 'fr-FR'), link: '/fr/' },
        { text: translate('page-beginners', 'fr-FR'), link: '/fr/beginners/' },
        { text: translate('page-use', 'fr-FR'), link: '/fr/use/' },
        { text: translate('page-learn', 'fr-FR'), link: '/fr/learn/' },
        { text: translate('page-developers', 'fr-FR'), link: '/fr/developers/' }
      ]
    },
    '/ja/': {
      lang: 'ja-JP',
      label: translate('language', 'ja-JP'),
      title: translate('ethereum', 'ja-JP'),
      nav: [
        { text: translate('page-home', 'ja-JP'), link: '/ja/' },
        { text: translate('page-beginners', 'ja-JP'), link: '/ja/beginners/' },
        { text: translate('page-use', 'ja-JP'), link: '/ja/use/' },
        { text: translate('page-learn', 'ja-JP'), link: '/ja/learn/' },
        { text: translate('page-developers', 'ja-JP'), link: '/ja/developers/' }
      ]
    },
    '/ko/': {
      lang: 'ko-KR',
      label: translate('language', 'ko-KR'),
      title: translate('ethereum', 'ko-KR'),
      nav: [
        { text: translate('page-home', 'ko-KR'), link: '/ko/' },
        { text: translate('page-beginners', 'ko-KR'), link: '/ko/beginners/' },
        { text: translate('page-use', 'ko-KR'), link: '/ko/use/' },
        { text: translate('page-learn', 'ko-KR'), link: '/ko/learn/' },
        { text: translate('page-developers', 'ko-KR'), link: '/ko/developers/' }
      ]
    },
    '/zh/': {
      lang: 'zh-CN',
      label: translate('language', 'zh-CN'),
      title: translate('ethereum', 'zh-CN'),
      nav: [
        { text: translate('page-home', 'zh-CN'), link: '/zh/' },
        { text: translate('page-beginners', 'zh-CN'), link: '/zh/beginners/' },
        { text: translate('page-use', 'zh-CN'), link: '/zh/use/' },
        { text: translate('page-learn', 'zh-CN'), link: '/zh/learn/' },
        { text: translate('page-developers', 'zh-CN'), link: '/zh/developers/' }
      ]
    },
    '/fa/': {
      lang: 'fa-IR',
      label: translate('language', 'fa-IR'),
      title: translate('ethereum', 'fa-IR'),
      // description: '' // TODO
      nav: [
        { text: translate('page-home', 'fa-IR'), link: '/fa/' },
        { text: translate('page-beginners', 'fa-IR'), link: '/fa/beginners/' },
        { text: translate('page-use', 'fa-IR'), link: '/fa/use/' },
        { text: translate('page-learn', 'fa-IR'), link: '/fa/learn/' },
        { text: translate('page-developers', 'fa-IR'), link: '/fa/developers/' }
      ]
    }
  },
  
  plugins: {
    // TODO remove once we set up Netlify redirects
    redirect: {
      alias: {
        '/foundation/': '/',
        '/pdfs/*': '/',
        '/brand/': '/',
        '/donate/': '/',
        '/ether/': '/use/',
        '/token/': '/developers/',
        '/token/': '/developers/',
        '/build/': '/developers/',
        '/crowdsale/': '/developers/',
        '/dao/': '/developers/',
        '/cli/': '/developers/',
        '/greeter/': '/developers/'
      }
    }
  }
};
