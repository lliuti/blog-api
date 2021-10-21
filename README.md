# blog-api

API built with NodeJS + Typescript + Express + Prisma + Postgres

## Description

Personal blog with the purpose of storing notes/articles that might help me in the future.

## Setup

To run this app locally, you only have to install:

- Node.JS
- Docker

After that, clone the repository:

```
git clone https://github.com/lliuti/lliuti-blog-api.git
```

Inside the cloned repository, install the dependencies with:

```
npm install
```

## Database

To create a Postgres database container, run this command:

```
docker run -d --name postgres-container -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres
```

Replace _mysecretpassword_ with your own password.

## Environment variables

This project uses dotenv to **not** expose sensitive information. So, rename the _.env.example_ file to only _.env_ and fill the missing information.

Inside **DATABASE_URL** you have a connection string. Replace these three parameters inside the string:

> **POSTGRES_USERNAME** = If you didnt specify a username when creating the container, the default is: **postgres**

> **POSTGRES_PASSWORD** = The password you set while creating the database container.

> **DATABASE_NAME** = The name you want the database to have

**JWT_SECRET** = A hash to encrypt the jsonwebtoken

## Run the project

After all the configuration steps, you can run this project.
First, execute the Prisma migration to create all the database tables:

```
npx prisma migrate dev
```

Then, start the project with

```
npm run dev
```
