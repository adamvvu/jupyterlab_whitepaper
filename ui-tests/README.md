# Integration Tests

## Run tests

0. Install test dependencies (one-time):

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
cd ..
```

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

> Check the extension is installed in JupyterLab.

1. Execute the [Playwright](https://playwright.dev/docs/intro) tests:

```sh
cd ./ui-tests
jlpm playwright test
```

Test results will be shown in the terminal and/or browser.
