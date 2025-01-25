🚨The only thing is that the backend is deployed on a free "Render" resource, and if you do not use the server for 15 minutes, it will turn off, and then the first launch will be a little longer, about 1 - 1.5 minutes🚨

## Create .env file in the root folder, paste this code and fill information:
```env
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

MONGODB_URI=...
MONGODB_USER_PERSONAL_PASSWORD=...

FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

## How to run the application:

 - Run this command `git clone https://github.com/Connection-Chat/connection-backend.git`;
 - `cd connection-backend`;
 - `npm i`;
 - To start the server, run this command `npm start`;

## Technologies and libs that were used

* Express.js;
* socket.io;
* Cloudinary;
* bcryptjs;
* MongoDB;
* mongoose;
* and other...;
