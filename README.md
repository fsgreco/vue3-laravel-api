# Laravel Breeze - Vue 3 Edition 🏝️

This repository is an implementation of the Laravel Breeze application / authentication starter kit frontend in **Vue.js v3** (*vite* powered + *pinia* + *vue-router*). All of the authentication boilerplate is already written for you - thanks to Laravel Sanctum, it allows you to quickly begin pairing an amazing Vue 3 frontend app with a powerful Laravel backend.

This repo has:
- Persistent state logic using localStorage API automatically (this is done within `pinia` stores). 
- Two middlewares:
	- One for `axios`: to deal with 401 permission denied case.
	- One for `vue-router`: to manage innacessibile routes if user is not logged in and viceversa.
- Regarding CSS concerns this is less opinionated possible solution I found (only the minimum vanilla CSS but no third part libraries), so you can start from here and apply your favorite css framework/library if you like.

![vue3-laravel-api-img](https://user-images.githubusercontent.com/22715417/161379302-780a3224-e121-4644-a017-8faf3b45d950.png)

PS: It is still working progress but following the MVP philosophy it works fine as a good starting kit (I still need to test the `/forgot-password` feature but the rest it's fine).

## Installation

### Laravel API endpoint

This frontend app *needs an API service with Laravel 9* already in place in order to comunicate with the backend aspects. 
To make up for this lack I prepared some dockerfiles to launch the API environment in case you don't have it, this are for development only!

If you want to use them simply go to the dockerfiles directory
```bash
cd api_dockerfiles
```
And launch 
```bash
docker-compose up --build
```

Give it some time! - it will build the image, then launch a mysql container and only after mysql pass the healthcheck it will launch the actual Laravel container. 

You can tell that it's done by visiting `localhost:8000`, you should see the version of the Laravel app running.  

### Frontend App

Clone this repository and copy the .env.example:
```bash
cp .env.example .env`
```
Install the dependencies: 
```bash
npm install
```
Run the application with:
```
npm run dev
```

You should see the application at `localhost:3000`.

## Documentation: 

### Axios Hook

The auth store of this app contains a custom `useApi` hook designed to deal with the 2 different endpoints for the Laravel app, the one that points to the actual `/api` path, and the one that points to the login routes (e.g. `/login`, `/logout` etc...). By using this hook you don't have to worry to much about it:

```javascript 
import { useApi } from '@/api/useAPI.js'

/**
 * You first create an instance using the hook function 
 * if you need to use the `/api` endpoint you call the hook without params. Otherwise pass the 'web' argument
*/

const api = useApi() 
await api.post('/user') // will call `hostname/api/user` 

const web = useApi('web') 
await web.post('/login', { user, email }) // will call `hostname/login`
```



--- 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
