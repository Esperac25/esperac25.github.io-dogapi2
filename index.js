'use strict';

function getDogImage(value) {
  fetch(`https://dog.ceo/api/breed/hound/images/random/${value}`)
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
    let dogsByBreed = document.getElementById("dogs-by-breed").value;
    getDogImage(dogsByBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});