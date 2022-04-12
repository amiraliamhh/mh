This app was tested on node versions `16.13.1` and `14.17.4`. It's preferable to use one of these two if you have them installed, if you don't, it should still be fine.

## Installation

After cloning the project,

using NPM:

`npm i`

using Yarn:

`yarn`

and then to run the project in `dev` mode:

`npm run dev`

or

`yarn dev`

Then navigate to [http://localhost:3000/mh/](http://localhost:3000/mh/).

## Third party libraries used in this project

Other than 3rd party libs that are dependencies of `nuxt.js`, TailwindCSS and @nuxtjs/svg have been added to the project.

### TailwindCSS

**some** of the TailwindCSS pros and cons:

Pros:

1. TailwindCSS offers many utilities that make it easier to develop a responsive app (pre-made screen breakpoints, media query utils, etc).
2. Utility classes make it faster to develop a web app vs. manually writing CSS for every element.

Cons:

1. It makes the HTML hard-to-read and maintain. Sometimes managing all of the class names given to an element becomes an issue.

Given that in my opinion, the main trade-off is between _maintainability_ vs. _fast development_, and this is a test project, I decided to go with fast development.

### @nuxtjs/svg

Only for importing SVGs as inline imports.
