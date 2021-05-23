# Game Collections service

This is a server application for games collection service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```bash
git clone {repository URL}
```

## Installing NPM modules

```bash
npm install
```

## Running application

```bash
npm start
```

After starting the app on port (4000 as default) you can open in your browser OpenAPI or there are curl commands below

## Commands examples

### Create user

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{
    "user": {
        "full_name": "test1",
        "username": "test2",
        "password": "test3",
        "email": "test@test.com"
        }
    }' \
  http://localhost:4000/api/auth/signup
```

### Sign in user

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{
    "user": {
        "username": "test2",
        "password": "test3"
        }
    }' \
  http://localhost:4000/api/auth/signin
```

### Create game

```bash
curl --header "Content-Type: application/json" \
  -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNzI2OTI2LCJleHAiOjE2MjE4MTMzMjZ9.7M5IVT8GId-E5AjrhfFEQbGDjLSaMS1lpVU3gUZ1g4k" \
  --request POST \
  --data '{
        "user": {
            "id": "1"
        },
        "game": {
            "title": "title1",
            "studio": "studio1",
            "esrb_rating": "rate",
            "user_rating": 1,
            "have_played": true
        }
    }' \
  http://localhost:4000/api/game/create
```

### Get all games

```bash
curl --header "Content-Type: application/json" \
  -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNzE5NjI0LCJleHAiOjE2MjE4MDYwMjR9._mLXKyrAp0LPyjZxrimW8z-rTq4UUGGRxU9SkVAmUls" \
  --request GET \
  --data '{
        "user": {
            "id": 1
        }
    }' \
  http://localhost:4000/api/game/all
```

### Get game by id

```bash
curl --header "Content-Type: application/json" \
  -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNzE5NjI0LCJleHAiOjE2MjE4MDYwMjR9._mLXKyrAp0LPyjZxrimW8z-rTq4UUGGRxU9SkVAmUls" \
  --request GET \
  --data '{
        "user": {
            "id": 1
        }
    }' \
  http://localhost:4000/api/game/3
```

### Update the game

```bash
curl --header "Content-Type: application/json" \
  -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNzE5NjI0LCJleHAiOjE2MjE4MDYwMjR9._mLXKyrAp0LPyjZxrimW8z-rTq4UUGGRxU9SkVAmUls" \
  --request PUT \
  --data '{
        "user": {
            "id": 1
        },
        "game": {
            "title": "title123",
            "studio": "studio123",
            "esrb_rating": 123,
            "user_rating": 3,
            "have_played": false
        }
    }' \
  http://localhost:4000/api/game/update/1
```

### Remove the game

```bash
curl --header "Content-Type: application/json" \
  -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNzE5NjI0LCJleHAiOjE2MjE4MDYwMjR9._mLXKyrAp0LPyjZxrimW8z-rTq4UUGGRxU9SkVAmUls" \
  --request DELETE \
  --data '{
        "user": {
            "id": 1
        }
    }' \
  http://localhost:4000/api/game/remove/1
```
