import fetch from "node-fetch";

const apiURL = "https://swapi.dev/api";

fetch(apiURL + "/people/1")
    .then((promiseFetch) => promiseFetch.json())
    .then((response) => {
        console.log(response);
    });

