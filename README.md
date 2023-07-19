## CONSENSUS

## Description
Un foro para el consenso por contraposicion a los foros de discusion, una herramienta para educarnos en el consenso y aprender a trabajar hacia el

## Authors and Acknowledgment
https://github.com/xaviuzz

## Running the application for the first time (building the docker image)

You only need to run the following command in the project folder's root:
1. BUILD: `make build`
2. START: `make start`

## Stopping the application for the first time

You have to stopping the application in a second terminal:
1. STOP: `make stop`

## Tests

We use Vitest for testing.

Official documentation:  
- https://vitest.dev/

### Running all tests

To run **unit test** of **app and api** you don't need to start the application, just execute the following command:
`make test`

### Running unit tests

If you only want to run the unitary component tests don't need to start the application, only execute:

- To run the **app-test**:
`make test-app`
- To run the **api-test**:
`make test-api`
-To run only the tests of an specific file:
`make test-xxx file=filename`
-To run funtional test
`make e2e`

## Gitmoji agreement

- Bug: `:bug:` 🐛
- Refactor: `:revolving_hearts:` 💞
- Complete Feature: `:tada:` 🎉
- Documentation: `:memo:` 📝
- WIP: `:building_construction:` 🏗️
- UX: `:art:` 🎨
- Fix: `:adhesive_bandage:` 🩹
- Development scripts/tools: `:hammer:` 🔨
- Accesibility `:wheelchair:` ♿️
- E2E: `:technologist:` 🧑‍💻
