# 1. Create new Gatsby project with `gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default`

# 2. Create empty pages.
- services/
    - add-ons.js
    - facials.js
    - waxing.js
- about.js
- contact.js
- products.js

# 3. [Bulma](https://www.gatsbyjs.com/docs/bulma/)

## [Bulma Examples](https://bulma.io/expo/)
- [Pentos](https://pentos.co/)

## [Sass Variables](https://bulma.io/documentation/customize/variables/)

1. Run `npm install bulma node-sass gatsby-plugin-sass`
2. Add `gatsby-plugin-sass` to `gatsby-config.js`
```
plugins: [`gatsby-plugin-sass`],
```
3. Create `src/styles/sass` directory and create `mystyles.scss` inside.
```
@charset "utf-8";

// If need, change your variables before importing Bulma
$title-color: #ff0000;

@import "~bulma/bulma.sass";
```
4. Import `mystyles.scss` where it is used (`layout.js`)

## [Bulma Navbar](https://bulma.io/documentation/components/navbar)

5. Build out `navbar.js` and `nav_segment.js` components.
    - Build `Navbar` links out of `NavSegment` components.
        - `NavSegment` component uses Gatsby `Link` component for routes.
        - Pass `classes`, `path`, and `label` props to `NavSegment`.
    - Use `navbar-end` class to push links to the right of the screen.

# 4. [Using Google Fonts in Gatsby Project](https://medium.com/@matt.readout/using-google-fonts-in-your-gatsby-js-projects-b59a3abfba15)

1. ~~`npm install --save gatsby-plugin-prefetch-google-fonts`~~
2. ~~In `gatsby-config.js`, include plugin with webfonts as options:~~
```
module.exports = {
 plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    }
  ]
}
```
3. The font we want not working with the prefetch plugin.
    - `npm uninstall gatsby-plugin-prefetch-google-fonts`
    - Disable plugin in `gatsby-config.js`
4. In `layout.css`: 
    - At top, `@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap") ;`
    - Use `font-family: "playfair display", serif` for `body` tag.
5. Disable font settings for `h1` tag so it inherits from body.

# 5. Build out home page

1. Use Bulma `columns` and `column` classes to create two divs side by side.

# 6. Build out facials page

1. Using Wix as a template, Facials page should have a brown color. Created new CSS rule *below* the `body` selector: 
```
body.brown {
  background-color: #7f6343 ;
}
```
2. Use `react-helmet` to dynamically set the `body` class:
```
<Helmet>
  <body class="brown" />
</Helmet>
```
3. Create a single card for custom facials based on the Bulma `card` class.
    - Use `card-image` class.
    - Use `card-content` class.
4. Convert this card into component `facial_card.js`
5. Create an array of card data in `facials.js`
6. Map the array data to the `FacialCard` component.

# 7. [Images](https://www.youtube.com/watch?v=XiG8gYJ7DiI)

1. **Watch video above in greater detail.**

# 8. Instagram

## ~~[Displaying an Instagram feed with Gatsby, part 1](https://desiraebeberniss.com/posts/displaying-an-instagram-feed-with-gatsby/)~~
    - The methodology used in this article has been deprecated.
## [Facebook Developer Docs](https://developers.facebook.com/docs/instagram)
1. Get instagram account.
2. Add some pictures

## [Getting Started with the Instagram Basic Display API](https://levelup.gitconnected.com/getting-started-with-the-instagram-basic-display-api-5124c92c4935) 
1. Create Facebook account.
2. Confirm account. Phone number wasn't working so confirmed by adding a payment method.
3. Create an app on Facebook Developer

## [EmbedSocial](https://embedsocial.com/admin/home/)
1. Roll-your-own Instagram integration was a pain in the ass. Using third-party service EmbedSocial to create a Instagram feed widget.
2. In link above, copy code.
3. Add `<div>` tag to component. 
4. Use `useEffect` React hook to run the script from EmbedSocial so that page will have access to browser `document`.

# 9. Build out Waxing page

1. Create component `waxing_service.js`
2. In `waxing.js`, create array of waxing services and prices and map to `WaxingService` component.