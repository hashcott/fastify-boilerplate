# Fastify-Typescript
Typescript based rest-API boilerplate with prisma and fastify framework.

## How to use

### 1. Clone this repo & install dependencies

Install Node dependencies:

`yarn install`

### 2. Set up the database

This uses [Postgres database](https://www.postgresql.org/).

To set up your database, run:

```sh
yarn migrate
```

for production

```sh
yarn migrate:prod
```

### 3. Generate Prisma Client (type-safe database client)

Run the following command to generate [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client):

```sh
yarn db:gen
```

### 4. Start the Fastify server

Launch your Fastify server with this command:

```sh
yarn dev
```

## For Build Generation

Build server with command: 

```sh
yarn build
```

## Prisma documentation
- Check out the [Prisma docs](https://www.prisma.io/docs/)
- Check out the [Fastify docs](https://www.fastify.io/docs/latest/)
