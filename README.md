# Mai Bpen

A test bench for NestJS projects.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Building

```bash
docker build -t maibpen:1.0 .
docker run -p80:3000 maibpen:1.0
# app available on port 80 of host machine
```

## License

Mai Bpen is [MIT licensed](LICENSE).
