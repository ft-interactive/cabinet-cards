export default () => ({ // eslint-disable-line

  // link file UUID
  id: '520c6834-adba-11e6-9cb3-bb8207902122',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/trump-cabinet/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-01-12T17:55:22Z'),

  headline: 'Donald Trump’s cabinet and administration',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The FT guide to the president’s incoming team',

  topic: {
    name: 'Donald Trump',
    url: 'https://www.ft.com/topics/people/Donald_Trump',
  },

  relatedArticle: {
    text: '',
    url: '',
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
    { name: 'Barney Jopson', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDc5MA==-QXV0aG9ycw==' },
    { name: 'Ændrew Rininsland', url: 'https://www.ft.com/topics/authors/%C3%86ndrew_Rininsland' },
    { name: 'Caroline Nevitt', url: 'https://www.ft.com/topics/authors/Caroline_Nevitt' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/stream/authorsId/Q0ItTVM1NDMyMQ==-QXV0aG9ycw==' },
    { name: 'Lauren Leatherby', url: 'https://www.ft.com/lauren-leatherby' },
  ],

  // Appears in the HTML <title>
  title: 'Donald Trump’s cabinet picks',

  // meta data
  description: 'The FT guide to the incoming US administration',

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
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F867b4c1e-b627-11e6-961e-a1acd97f622d?source=ig&fit=scale-down&width=1200',
  // socialHeadline: '',
 // socialSummary:  'A guide to Donald Trump’s cabinet picks',

  // TWITTER
  // twitterImage: '',
  //twitterCreator: '@ft',
  tweetText: 'The @ft guide to Donald Trump’s cabinet picks',
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
