'''
$ sudo pip3 install fastapi
$ pip3 install uvicorn[standard]
$ uvicorn main:app --reload
'''
from typing import Optional

from fastapi import FastAPI

import requests

import json

app = FastAPI()

file='https://raw.githubusercontent.com/anacmolina/webpage_biophysics/main/data/biophysics_papers.json'


@app.get("/")
def read_item(doi: str = ""):
    '''
    You can write the API documentation here:
        
    USAGE: http://127.0.0.1:8000/?doi=
    '''
    #Real time JSON file
    r=requests.get(file)
    db=r.json()
    new_db=[ d for d in db if d.get('doi')==doi  ]
    f=open('data/filtered.json','w')
    json.dump(new_db,f)
    f.close()
    
    #with open(file) as json_file:
    #   db=json.load(json_file)

    if not doi:
        return db
    else:
    	return new_db