# Webpage that filters Papers of the Max Planck Tandem Biophysics of Tropical Diseases Research Group by DOI

## Backend

## Fast API
Run in the main folder
```
$ uvicorn main:app --reload 
```
and copy and paste the url in your browser, e.g:

http://127.0.0.1:8000/


## Frontend
```
$ python3 -m http.server 8001
```

You can now filter with the JSON keys into the url, e.g:

http://127.0.0.1:8000/?doi=https://doi.org/10.3389/fmolb.2021.636562

### All DOI available are:

- https://doi.org/10.1038/s41598-021-92621-1
- https://doi.org/10.3389/fmolb.2021.636562
- https://doi.org/10.1016/j.cpc.2020.107716
- https://doi.org/10.1007/s10822-020-00329-7
- https://doi.org/10.1016/j.sbi.2018.03.004