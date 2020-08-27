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

5. Build out `navbar.js` and `nav_segment.js` components.
    - Build `Navbar` links out of `NavSegment` components.
        - `NavSegment` component uses Gatsby `Link` component for routes.
        - Pass `classes`, `path`, and `label` props to `NavSegment`.
    - Use `navbar-end` class to push links to the right of the screen.

## [Bulma Examples](https://bulma.io/expo/)
- [Pentos](https://pentos.co/)

## [Sass Variables](https://bulma.io/documentation/customize/variables/)

# 4. [Bulma Navbar](https://bulma.io/documentation/components/navbar)