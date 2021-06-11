

## Description
A simple nest  js blog, for trufla assessment

## Table of Contents
- [Getting Started](#getting-started)
- [What is made](#what-is-made)
- [DB Design](#DB-Design)
- [Folder Structure](#folder-structure)
- [Installation](#install)

## Getting Started
This is a simple blog made using nestJS <br>
Use docker or follow installation steps to use the app
## What is made
### APIs
>- Create Article
>- get all articles
>- get single article
>- full search article by any property, partial/full value

>- add comment

>- add thumb

>- create user
>- get user
>- get all users

### Others
>- Docker config
>- Full/partial search
>- typescript
>- sort by articles thumbs

### notes
>- no authentication
>- user id is sent is body (for simplicity)
>- except deploy in herku, all bonuses are done
## DB Design

- Article
    - title (string)
    - body (text)
    - author (fk)
    - thumbs_count (number)
    
- User
    - name (string)
    - Job title (string)
- Thumb
    - user_id (fk)
    - article_id (fk)
    - both act as primary key (composite key)
- Comment
    - body
    - article (fk)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

