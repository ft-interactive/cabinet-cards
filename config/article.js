export default () => ({ // eslint-disable-line

  // link file UUID
  id: '520c6834-adba-11e6-9cb3-bb8207902122',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/trump-cabinet/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2016-11-18T17:11:22Z'),

  headline: 'Trump’s picks: how the new administration is taking shape',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'FT guide to the main players in the transition team and future cabinet',

  topic: {
    name: 'Donald Trump',
    url: 'https://www.ft.com/topics/people/Donald_Trump',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Claire Manibog', url: 'https://www.ft.com/stream/authorsId/ZGVhNjk2NmEtN2ZkNy00NDllLTkyODAtYjE2NWNmNjg0NTcx-QXV0aG9ycw==' },
    { name: 'Ændrew Rininsland', url: 'https://www.ft.com/topics/authors/%C3%86ndrew_Rininsland' },
  ],

  // Appears in the HTML <title>
  title: 'Trump’s picks: how the new administration is taking shape',

  // meta data
  description: 'FT guide to the main players in the transition team and future cabinet',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
