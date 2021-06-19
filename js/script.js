const api = "https://official-joke-api.appspot.com/random_joke" ;

const heading = document.querySelector("h2");
const title = document.querySelector("title");


async function getJokes() {

    try{
        const response = await fetch(api) ;
        //console.log(response);
    const result = await response.json();
   // console.log(result);
 
  
   heading.innerHTML += `${result.type} joke`;
   title.innerHTML += `${result.setup} `;
 
 }
 catch(error){
     console.log("there is error");
 }
    
  }

getJokes();