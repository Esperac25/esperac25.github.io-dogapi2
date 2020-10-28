'use strict';

function getDogImage(value) {
  fetch(`https://dog.ceo/api/breeds/image/random/${value}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').html(responseJson.message.map(
    function (url){
      return `<img class="img" src="${url}" class="results-img">`
    }
  )
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numberOfDogs = document.getElementById("number-of-dogs").value;
    getDogImage(numberOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});