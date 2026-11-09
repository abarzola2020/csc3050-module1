# HTTP Network Analysis

## Request 1: HTML Document
* **Request Method:** GET
* **Request URL:** https://github.com/abarzola2020/csc3050-module1/pull/1
* **Response Status Code:** 200 OK
* **Response Headers:**
  * Cache-Control: Tells the browser not to cache the file so it always fetches the latest version.
  * Content-Encoding: Indicates that the file was compressed using gzip to speed up the network transfer.

## Request 2: CSS File
* **Request Method:** GET
* **Request URL:** https://github.githubassets.com/assets/light-99f877e9ddfc0e51.css
* **Response Status Code:** 200 OK (from disk cache)
* **Response Headers:** 
  * Content-Type: Tells the browser that the file is a stylesheet (text/css).
  * Date: Shows the exact date and time the server generated the response.

## Request 3: Image or Script
* **Request Method:** GET
* **Request URL:** https://github.githubassets.com/assets/react-e27d1b3e03961e68.js
* **Response Status Code:** 200 OK (from disk cache)
* **Response Headers:**
  * Content-Length: Tells the browser the exact size of the file being transferred in bytes, which in this case is 3797.
  * Server`: Identifies the underlying software or operating system running on the server that answered the request (Windows-Azure-Web/1.0).


    **coppied from recipies 2, subject to change**
## The resource: Assignment

| Field | Type | Rules |
|---|---|---|
| `id` | integer | assigned by the server |
| `name` | string | required, not blank |
| `DueDate` | string | required, YYYY,MM,DD

## Endpoints
  **FROM SERVER**
| Method and path | Request body | Success | Errors |
|---|---|---|---|
| `GET /api/assigmnets` | none | `200` and an array of assigmnets | none | **Get assignment**
| `GET /api/assigmnets/:id` | none | `200` and the recipe | `404 NOT_FOUND` | **search function get**
| `POST /api/assigmnets` | `{ name, category, minutes }` | `201` and the created recipe, with its `id` | `400 VALIDATION_FAILED`, `400 BAD_JSON` | **add assignment once click button**
| `DELETE /api/assigmnets/:id` | none | `204` and no body | `404 NOT_FOUND` | **delete button**

| `PUT /api/assigmnets/:id` | `{ name, category, minutes }` | `200` and the updated recipe | `400 VALIDATION_FAILED`, `400 BAD_JSON`, `404 NOT_FOUND` |

## Analysis

For Part 4, we checked the Network panel in my browser when loading the "Assignment Tracker". 

The moment the page opens, React uses useEffect to send a fetch request to our -> /api/assignments URL.

In the Request Headers, we saw that the method is GET, which means we are asking for data. The accept header is */*, meaning the browser can take any kind of format. 

The Host shows as localhost:5173, but our vite proxy correctly sends this to our Express server on port 3000.

The Response Status code was 200 OK, which means the server got our message and sent the right data back without any errors. Also, the Response Headers included Content-Type: 

application/json, which proves the data is in JSON format.

Then, we looked at the Payload. The server returned a JSON array filled with our assignment objects, such as
[{"id": 1, "name": "Milestone 1"}, {"id": 2, "name": "Lab Exercise"}].

Finally, getting this data caused a state change in our React app. The setAssignments function saved the new data into our state. Additionally, setStatus("success") told the app to hide the "Loading.." text and show the actual list of assignments on the screen.