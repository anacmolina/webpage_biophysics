"use strict";

var url_string = window.location.href
var url = new URL(url_string);
var doi = url.searchParams.get("doi");

const output = document.querySelector(".output");

const localJsonFile = "data/filtered.json";
const APIurl = "http://127.0.0.1:8000?doi="+doi;

fetch(APIurl)//`http://127.0.0.1:8000?doi=${doi}`)
  .then((response) => JSON.parse(response))
  .catch((error) => console.log(error))


window.addEventListener("DOMContentLoaded", () => {
  output.textContent = "Loading....";
  setTimeout(() => {
    fetch(localJsonFile)
    .then((response) => 
    {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    }) 
    .then((data) => {
      output.innerHTML = ""; 
      data.forEach((el) => {
        jsonList(el);
      });
    });
  }, "1000");
});

function jsonList(item) {
  const div = document.createElement("div");
  div.innerHTML = `
  <p> <b> TITLE: </b> ${item.title} </p> 
  <p> <b> FIRST AUTHOR: </b> ${item.authorships[0].author.display_name} </p>  
  <p> <b> YEAR: </b> ${item.publication_year} </p>`;
  output.append(div);
  div.classList.add("active");
}
