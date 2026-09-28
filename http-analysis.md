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

## Analysis

Out of the requests made, the HTML document was the slowest one by a huge difference compared to the others. It took 657 ms to load. This happened because the browser might had to go to the internet and download it directly from the server, getting a normal "200 OK" status code.

On the other hand, the other two files were much faster. The CSS file took 15 ms and the JavaScript file took only 3 ms. Both of their status codes were "200 OK (from disk cache)". This means my computer already had them saved in memory, so it didn't have to download them again from the internet.

The response headers give the browser specific instructions such as "Content-Length" header, which tells the browser that the file is exactly 3797 bytes. This helps the browser know how big the file is and when the download is finished.

One thing that really surprised me was the "Server" header on the JavaScript file. It said "Windows-Azure-Web/1.0". Since I was testing a GitHub page, I thought GitHub used only its own private servers for everything. It was interesting to see that they actually use Microsoft Azure to help deliver some of their files behind the scenes.
