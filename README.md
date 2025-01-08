# Federalist + U.S. Web Design System + Jekyll

This starter kit is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers an Eleventy reference implementation to quickly start Federalist websites.

## NOTE THIS IS VERY MUCH A WORK IN PROGRESS AND IS NOT READY FOR PRIMETIME. PROCEED ACCORDINGLY (and submit pull requests)!

This code uses the [Eleventy](https://www.11ty.dev/) site engine and is built with Node. Note that throughout the docs "Eleventy" and "11ty" may be used interchangably.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.


## To-Do: Document key functionality

## To-Do: Document integrations (DAP, Search, etc)

## To-Do: Document how to edit

## Getting Started

#### TO-DO: Ensure this works properly with Federalist
#### From Federalist
This will create a copy of this repo in a Github repository of your choice and add it to your Federalist dashboard.

- From [Federalist](https://federalistapp.18f.gov/sites) click the "+ Add Site" button.
- Click the "Use this template" button for the appropriate template
- Follow the instructions

#### From Github
This will create a copy of this repo in a Github repository of your choice but you will need to add it your [Federalist dashboard](https://federalistapp.18f.gov/sites/new).

- Click the "Use this template" button above or [here](https://github.com/18F/federalist-uswds-11ty/generate).
- Follow the instructions
- Return to [Federalist](https://federalistapp.18f.gov/sites/new) and add the repository.

### Installation for local development
    $ git clone https://github.com/18F/federalist-uswds-11ty
    $ cd federalist-uswds-11ty

Eleventy requires Node 8 or newer. Use `node --version` on the command line to find your local Node version, if you're not sure what it is.

To install 11ty itself, run:
    $ npm install -g @11ty/eleventy

Then consider getting a glass of water. It may take a minute, and it's always good to drink more water.

## Running the application locally

Once node has done its thing and installed all the modules, you should be able to fire up 11ty's built-in server. If you have Eleventy installed globally that should be:
    $ eleventy --serve
If not, try:
    $ npx @11ty/eleventy --serve

Either should start the server and give you a list of local URLs you can access the site with. Most times, `http://localhost:8080` will be the one you want.

For more on running eleventy, locally, take a look at [Getting started with Eleventy](https://www.11ty.dev/docs/getting-started/).

## What's in the tin

Here's what you'll find as you're developing:

* `/_site`: When your site is built, this is where the output files go. You probably won't need to touch this.
* `/_src`: The source files. For your site. This is where you'll work.
* `/_src/includes`: Various partials and includes, including some sample USWDS components you can copy about as you see fit.
* `/_src/layouts`: Base layouts for different types of pages.
* `/css`: Any non-USWDS CSS you have can go here.
* `/css`: Any non-USWDS CSS you have can go here.
* `/uswds-2.10.1`: The USWDS source files. We don't recommend editing them directly.
* `index.njk`: A sample index page.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.