<h1 align="center" style="color: #ea2328">
  Personal Portfolio 👹
</h1>
<h2 align="center" style="color: #919191">
  THIS PROJECT IS A WORK IN PROGRESS
</h2>
<h3 align="center" style="color: #919191">
  Some of the details listed here are not yet implemented are are planned to be at a later date (such as testing, redux and an accessability audit.)
</h3>

<p align="center" style="font-size: 1.2rem;">
  This is the git repo for the frontend of my personal portfolio, if you have any questions, queries or feedback, please email me at contact@cameronthornton.dev.
</p>

<hr />

This project was designed as a way for me to display my personal work as a colletion of projects, as well as host a place for me to leave my thoughts in the form of blogs. The projects and blogs are hosted on an external API I built, this API can also be found on [**my GitHub page**][API] and is required until I get around to hosting it.

[API]: https://github.com/Shubwub/portfolio-API
[at]: https://atomicdesign.bradfrost.com/chapter-2/
[r]: https://redux.js.org/
[c]: https://www.cypress.io/
[aa]: https://www.w3.org/WAI/WCAG2AAA-Conformance.html
[m]: https://mochajs.org/
[sc]: https://styled-components.com/

- ## 📋 Requirements

  The requirements for running this application locally are the same as any standard `create-react-app` react application, of course with additional dependancies provided by npm. The currently supported browsers are Firefox and Chrome.

- ## 🎉 Installation and setup

  Once this repository is cloned, dependencies must be met through:

  ```bash
    npm i
  ```

  A local development server can then be spun up through

  ```bash
    npm start
  ```

  **WARNING**
  This project is currently a Work In Progress. It is not in a finished state and for now will also require the use of [**my API**][API] to be ran in the background. Instructions for this can be found in the `README` of that project.

- ## 📖 Documentation

  - ### 🚧 Structure

    Functional components are used where possible due to their reduced compile size and the phasing out of class-components by the react development team.
    The project also tries to follow an [**atomic**][at] component structure. The basic idea being to split components into organisms, molecules and atoms. organisms being made of many molecules, and molecules being made of many atoms.

  - ### ⚙️ Redux

    App-wide state management **will be** done through [**Redux**][r]. The structure of which is as follows:

    ```JSON
      "items": {
        "projects": "Project[]",
        "blogs": "Blog[]"
      }
    ```

    These items are what should be returned from the API and what will be rendered to the webpage.

  - ### 🏷️ Typescript

    This project uses TypeScript. A collection of interfaces used can be found in `interfaces.ts`. Though the complexity of this project is rather shallow, all objects and functions should ideally follow basic Typescript principles.

  - ### ♿ Accessibility

    Accessibility for this project should be kept to at least a [**AA standard**][aa] (In compliance with the W3C Web Content Accessibility Guidelines) as best as posssible. aXe-react will be been installed as a means of complying with these standards.

  - ### 🐶 Husky
    Husky pre-commit hooks will be used to ensure breaking or poor-quality code is not commited to the git repo. The pre-commit hook script will be found in `.husky/_/pre-commit`. This script will run the cypress tests as well as linting all js files.

  - ### 💄 Styling
    The styling of this project is done through the use of [**styled-components**][sc]. This is a third-party library with the aim of blurring the line between react components and SCSS styling. This was done simply as a way of learning a new framework, the file management of these styles within the project needs some work however.
- ## 🧪 Testing

  This project will use [**Cypress**][c] for it's testing. Cypress was chosen as it's what's most familiar and better reflects a user journey through an application.

  Tests will be found in `/cypress/integration`. Elements should be selected using data-name attributes. This is the apporach recommended by Cypress as it's least intrusive to the DOM.

  To run the test suite enter:

  ```bash
    npm test
  ```
