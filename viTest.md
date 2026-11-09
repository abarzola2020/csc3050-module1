## Vite test results
 npm test
> server@1.0.0 test
> vitest run


 RUN  v5.1.0 C:/Users/neoke/OneDrive/Documents/GitHub/csc3050-module1/server

 ✓ assignments.test.js (1 test) 50ms
 ✓ tests/assignments.test.js (4 tests) 42ms

 Test Files  2 passed (2)
      Tests  5 passed (5)
   Start at  22:09:46
   Duration  349ms (import 59%, tests 31%, transform 7%, worker 3%)

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