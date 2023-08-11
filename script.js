
  
 

//   function find(e)
//   {

//     e.preventDefault();
      
//        let word = document.getElementById('word');
//     description(word.value);

//   }


// Add an event listener to the form
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let wordInput = document.getElementById('word').value;
    description(wordInput);
});

// Rest of your code...








  async function description(word)
{

    let des = document.getElementsByClassName('description')[0];
      try{
   
      des.innerHTML = "fetching the data ...";
     const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await res.json();
      console.log(data);
    
      const definition = data[0].meanings[0].definitions[0].definition;

      

      des.innerHTML = `<h2>Word:</h2> <p>${word}</p>`
    
      des.innerHTML += `<strong>Definition:</strong> <p> ${definition} </p>`;



     

     
      if(data[0].meanings[0].partOfSpeech)
      {
     
     des.innerHTML+=`<p>${data[0].meanings[0].partOfSpeech} </p>`;
     }
     
      
     des.innerHTML+=`<strong>Example:</strong>` 
     if(definition.example)
     {
    
    des.innerHTML+=`<p>${definition.example} </p>`;
    }
    else
    {
     des.innerHTML+=`<p>Not Found</p>`;
    }

       
       des.innerHTML+=`<strong>Synonyms:</strong>` 
        if(definition.synonyms)
        {
       
       des.innerHTML+=`<p>${definition.synonyms} </p>`;
       }
       else
       {
        des.innerHTML+=`<p>Not Found</p>`;
       }

       

       
            des.innerHTML+=`<a href="${data[0].sourceUrls}" >Read more</a>`;
      

  
      }

      catch(error)
      {

        des.innerHTML = "An Error Occurred!";
      }

}