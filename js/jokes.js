const apiUrl = "https://official-joke-api.appspot.com/random_ten";

const Container= document.querySelector(".joke-detail");
const meta = document.querySelector("title");
const head= document.querySelector("h1");


async function randomJokes() {
   
       try{
        const random = await fetch(apiUrl);
        //console.log(random);
        const randomResult = await random.json();
        //console.log(randomResult);
       
       Container.innerHTML = "";


        for( i = 0; i < randomResult.length; i++) {
            console.log(randomResult[i].type, randomResult[i].setup, randomResult[i].punchline);

            if(i === 5){
                break;
            }

            Container.innerHTML += `  <h4 class="type">${randomResult[i].type}</h4>
                                          <div class="setup">${randomResult[i].setup}</div> 
                                          <div class="punchline">${randomResult[i].punchline}</div>`;
           
           
            meta.innerHTML += `${randomResult[3].setup}` ;
       } 

    }
       catch(error){
            console.log("An error occured");
            head.innerHTML = "An error occurred"
       }
            
           
}

randomJokes();