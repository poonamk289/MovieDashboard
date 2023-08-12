// const api_key="1c002131";
// const api_key="1c0021311";

const api_key = document.getElementById("apikey").value;
console.log(api_key);

console.log("connected");
const searchinput=document.getElementById("search")
    console.log(searchinput);


    const loader=document.getElementsByClassName("loader")[0];
    console.log(loader);


    const maincontent=document.getElementsByClassName("main-content")[0];
    console.log(maincontent);

    searchinput.addEventListener("keydown",function(event){
        if(event.keyCode===13||event.key==='Enter'){
            event.preventDefault();
const api_key = document.getElementById("apikey").value;

            loader.classList.remove("close");
            loader.classList.add("show");
            console.log('Enter key was pressd');
            console.log(searchinput.value)
            const SEARCH_TERM= searchinput.value;

             getmovie(SEARCH_TERM,api_key).then().catch(error=>{
          console.log(error);
          const ErrorDiv=document.createElement("div");
             ErrorDiv.innerHTML=`${error}`;
                maincontent.innerHTML="";
                maincontent.style.fontSize = "22px";
                maincontent.style.color = "white";
             maincontent.appendChild(ErrorDiv);
             })
            
        }

    });







async function getmovie(SEARCH_TERM,api_key){
    try{

    
    // const SEARCH_TERM="gadar";
    const url=`https://www.omdbapi.com/?s=${SEARCH_TERM}&apikey=${api_key}`;
    const response = await fetch(url);
    if(!response.ok){
        const result=await response.json();
        console.log(result);
        throw new Error(`${result.Error}` );
    }
    const result=await response.json();
    loader.classList.remove("show");
    loader.classList.add("close");
    console.log(result.Search);
    const movieArr= result.Search;
         maincontent.innerHTML="";
    movieArr.forEach((value)=>{
        console.log(value);
    

    console.log(result);
    const card = document.createElement("div");
    card.innerHTML=`
    
    <div class="poster">
         <img src="${value.Poster}"alt="hello">
    </div>
          <div class="discription">
                
                 <div class=" movie-title">${value.Title}</div>
                  <div class="type">${value.Type}</div>
     
                  <div class="rating">imdb:${value.imdbID}</div>
     
                  <div class="year">Release:${value.Year}</div>
         </div>

  `;
  card.className="grid-item";
  maincontent.appendChild(card);
});
    }catch(error){
     throw new Error(error);       
    }
}
