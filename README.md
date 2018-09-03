
Start app: `yarn && yarn start`
> *Don't forget to run the API*

Run test: `yarn test`

Run storybook: `yarn storybook`
then open url http://localhost:9001/
> *Also don't forget to run the API*


Run testcafe (visual mode): `yarn testcafe-debug`

Run testcafe (headless mode): `yarn testcafe`
> *Don't forget to start the app first. The setting are for chrome but it can also work with other browsers like chromium, firefox...*

I would have like to have:

- eslint
- flow



Update:

In components/city/autocomplete.js instead of switching between AutocompleteContainer and input, I should better switch between connected AutocompleteContainer and not connected AutocompleteContainer.

Another options would have been to have one store by AutocompleteContainer but I think is a bit heavy. There might be other possibilties, maybe some libraries...
