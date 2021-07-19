<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">VIP Management System</h3>

  <p align="center">
    Backend and frontend app to manage the arrival of VIP members
   
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

![VIP Management System Screen Shot](docs/images/project-show.jpg)

This project was made to submit software engineer internship technical assessment by [nodeflux](https://www.nodeflux.io/). This app intended to answer questions number 1 and 2.

### Built With

- [Node.js](https://nodejs.org/en/)
- Next.js

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Have node.js installed
- npm
  ```sh
  npm install npm@latest -g
  ```
- Clone the repo
  ```sh
  https://github.com/gregoriusjimmy/nodeflux-vip-management-system.git
  ```

### Server side

#### Configuration

1. Create a database using [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
2. Set your database configurations like database's name, username, and password in `src > config > constants.ts`

#### Installation

2. Install NPM packages for the server side
   ```sh
   npm install
   ```

#### Running on local machine

1. ```sh
   npm run dev
   ```
2. Or you can build by doing
   ```sh
   npm run build
   npm run start
   ```

### Client side

#### Installation

1. In new window terminal

   ```sh
   cd client
   npm install
   ```

#### Running on local machine

1. ```sh
   npm run dev
   ```
2. Or you can build by doing
   ```sh
   npm run build
   npm run start
   ```
   It will be available in http://localhost:3000/
   <!-- USAGE EXAMPLES -->

> if you have installed both server and client side and want to run both in same terminal you could do `npm run dev-both`

## Usage

### Accessing the api

Your can initialize dummy data as a start automatically in `src > utilities > initializeDummyData.ts`. Don't forget to re-run the server again after changes.

**Get**  
http://localhost:5000/api/vips/?username=staffusername&password=stafftoken

http://localhost:5000/api/vips/[id]?username=staffusername&password=stafftoken

**Post**  
Key input in body request :

| key               | type     |
| ----------------- | -------- |
| name              | string   |
| country_of_origin | string   |
| eta               | datetime |
| arrived           | boolean  |

example of eta : 2021-07-15T11:25:27.194Z

http://localhost:5000/api/vips/?username=staffusername&password=stafftoken

**Put**  
Key input in body request same as Post method  
http://localhost:5000/api/vips/[id]?username=staffusername&password=stafftoken

**Patch**  
Key input in body request :

| key     | type    |
| ------- | ------- |
| arrived | boolean |

http://localhost:5000/api/vips/[id]/arrived?username=staffusername&password=stafftoken

_you can change username and password in constant.ts file_

### Using the client side

1. Go to http://localhost:3000/
2. login, the default username and password are staffusername and staffpassword
3. Explore!

<br/>

---

<br/>

#### Potential issues

- User feedback for failed to login, failed to fetch data in client side have not been implemented yet. This could cause an error page to occur

- Logout system has not been implemented yet. Client side uses a cookie to access the APIs. So even though the user has close the browser. The user still can go through vips pages without login, this would still happen until the cookie expires.

#### Future ideation

- User should able to find vips member by searching their name.
- Filter by arrived and not arrived combined with the closest eta in current time.
