# Webpage that filters Papers of the Max Planck Tandem Biophysics of Tropical Diseases Research Group by DOI

## Backend

# Fast API
Run in the main folder
```
$ uvicorn main:app --reload 
```
and copy and paste the url in your browser, e.g:

http://127.0.0.1:8000/

You can now filter with the JSON keys into the url, e.g:

http://127.0.0.1:8000/?doi=1001735333



## Frontend
```
$ python3 -m http.server 8001
```

See:
* https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
* https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
* https://stackoverflow.com/a/22790025/2268280
