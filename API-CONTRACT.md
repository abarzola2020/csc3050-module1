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
| `GET /api/assigmnets/:id` | none | 200 OK, returns the requested assignment | `404 NOT_FOUND` | **search function get**
| `POST /api/assigmnets` | `{ "name": "Homework", "dueDate": "2026-11-15" }` | 201 Created, returns the new assignment with its generated id | `400 VALIDATION_FAILED`, `400 BAD_JSON` |
| `PUT /api/assigmnets/:id` | `{ "name": "Updated Homework", "dueDate": "2026-11-16" }` | 200 OK, returns the updated assignment | 400 Bad Request for invalid data or malformed JSON; 404 Not Found if the assignment does not exist
 |
| `DELETE /api/assigmnets/:id` | none | `204` and no body | `404 NOT_FOUND` | **delete button**