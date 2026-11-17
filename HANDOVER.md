## 1. What this app does
Mainly for students, Main resource is Assignments and it's details of what the user puts in.
  Currently the application is designed to add or remove assignments. Users are able to add their assignment name and the due date onto
  the appropriate fields when pressed enter, the application will make add the assigment object to array server side http://localhost:3000/api/assignments
  or assignmentController.js
  
  Furthur more, you can remove an assignment if you hover over it with your curser. (which MIGHT not be mobile friendly).

  there is a details button whiich shows the details of the assignent & an edit button with it

  There is a search box thatll make assignments that dont fit the query disapear, and a status box to let users know the status when pressing add assignment or remove.

## 2. How to run it
 (Server)
  open cmd or open folder with Some IDE.
  go to server folder I.e [cd csc3050-module1\server]
  **run npm install express** (default options if there are selectable options) **have to run for both files sepreately**
  then run **npm run dev**

  (Client)
  open cmd or open folder with Some IDE.
  go to client folder I.e [cd csc3050-module1\client]
  run **npm install** (default options if there are selectable options) **have to run for both files sepreately**
  then run **npm ls react-router-dom**
  then run ***npm run dev**

  Yes you will have to do this **EVERY TIME** you pull the file on a new device...

## 3. Current state
- Everything is complete and functionable. 
- More things could be added like description box which would make it more useful. 
- Remove button is currently not mobile friendly but that's an easy fix with needing to hover over it to show it. 
- We didn't touch the CSS since module 1 so that needs some attention. 
- Further implementation is quite simple since everything is organized.

- The application allows users to add, view, edit, and delete assignments.
- Users can search for assignments by name.
- The server uses Express and the client uses React.
- The application has API routes for managing assignments.
- Some API tests have been created using Vitest and Supertest.


## 4. Important decisions
Everything in assignment details like the edit button is in Assignment detail comonent so make it all in one place.

Assignment Controller controls the operations serveride for just the assignment portions which allows more functionality to the app serverside if further implemented.

- In-memory storage: Assignments are stored in an array, so they disappear when the server restarts.
- React and Express: React is used for the frontend and Express for the backend.
- Separate folders: The client and server have their own folders to keep the project organized.
- Unique IDs: Each assignment has its own ID.

## 5. Known problems and unfinished work
- Remove button is not mobile friendly since user needs to hover over the assignment card for it to show, but no other known bugs.
- Assignment data is not saved permanently.
- css could be improved, especially for mobile devices.
- Search only works by assignment name.

## 6. Handover checks (receiving pod)
Version received: commit ______
The four checks: did each pass as received? After the handoff fixes?

## 7. Where things live
Where the data is kept now (in memory or a JSON file), the API contract
file, and the main front-end components and back-end route files.

- Data is stored in an array inside assignmentController.js. accecced via  http://localhost:3000/api/assignments 
- The API contract is in API-CONTRACT.md
- The backend routes are in server/routes/assignments.js.
- The main frontend components are in client/src/components/, and the main application is in client/src/App.jsx.

## 8. Suggested first steps for Milestone 3 (authors)
Add description box. Also make remove button mobile friendly and make it possible for mulitple users to use the app... CSS needs some love too.
- Add more tests. 
- Improve the css and mobile behavior.
- Add permanent storage for assignments so assignments survive restarts.

GL :3

## 9. Takeover Notes (receiving pod): one sentence for each
- Do we understand what the app does and how the code is organized?
- Can we run it from a fresh clone?
- Do we know what is complete and what isn't?
- Do we know the important decisions and the known problems?
- Do we know what we would do first for Milestone 3?