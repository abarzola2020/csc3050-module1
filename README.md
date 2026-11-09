
## What the application does:
  Currently the application is designed to add or remove assignments. Users are able to add their assignment name and the due date onto
  the appropriate fields when pressed enter, the application will make add the assigment object to array server side http://localhost:3000/api/assignments
  or assignmentController.js
  
  Furthur more, you can remove an assignment if you hover over it with your curser. (which MIGHT not be mobile friendly).

  there is a details button whiich shows the details of the assignent & an edit button with it

  There is a search box thatll make assignments that dont fit the query disapear, and a status box to let users know the status when pressing add assignment or remove.



##  known bugs, shortcuts, and unfinished pieces.
  no known bugs
  http://localhost:3000/api/assignments for assignments serverside
  css and visual effects definately need some work but core functionallity is done. GL :3

## Initializing the npm:
  (Client)
  open cmd or open folder with Some IDE.
  go to client folder I.e [cd csc3050-module1\client]
  run **npm install** (default options if there are selectable options) **have to run for both files sepreately**
  then run **npm ls react-router-dom**
  then run ***npm run dev**

  (Server)
  open cmd or open folder with Some IDE.
  go to server folder I.e [cd csc3050-module1\server]
  **run npm install express** (default options if there are selectable options) **have to run for both files sepreately**
  then run **npm run dev**


  Yes you will have to do this **EVERY TIME** you pull the file...

## vitest
  cd server
  npm install -D vitest supertest

## What is npm?
  Node Package maneger
  It's a tool that comes with Node.js and helps you manage JavaScript packages.
