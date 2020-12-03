// const express = require('express')
//  require('dotenv').config()
 
const APP_KEY = "19273817-9a8405bf09b823926d71d4d3d";

//console.log(process.env);

const picture = async ()=> {
const url = `https://pixabay.com/api/?key=${APP_KEY}&q=cars`;

  const response = await fetch(url);

  if (response.status != 200){
      throw new Error('Cannot fetch data,');
  }
  const data = await response.json();
  return data;
  
  }
  
 picture()
 .then(data=> {
   
 console.log( 'resolved', data.hits) 

 for (let i = 0; i < `{data.hits}`.length; i++) {
 let html = document.createElement("div")
 html.className ="inCode"
 
const img = document.createElement('img');

    img.src = `${data.hits[i].largeImageURL}`;


    const likes = document.createElement('p');
    likes.innerText = `Likes: ${data.hits[i].likes}`;
    const downloads = document.createElement('p');
    downloads.innerText = `Downloads: ${data.hits[i].downloads}`;
    const tags = document.createElement('h3');
    tags.innerText = `Tags: ${data.hits[i].tags}`;
html.appendChild(img)
html.appendChild(likes)
html.appendChild(downloads)
html.appendChild(tags)
app.appendChild(html) 
  
 } 
  }) 
  
  .catch( err => console.log('rejected:', err.message));

  
    
 