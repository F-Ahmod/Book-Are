// toggleSpinner 
const toggleLoding= spinnerstyle =>{
    document.getElementById('loadingSpinner').style.display=spinnerstyle;
  }
const toggleSearch= spinnerstyle =>{
    document.getElementById('books').style.display=spinnerstyle;
  }

  
// search and input sectin 
document.getElementById('search').addEventListener('click' , function(){
    const searchInput=document.getElementById('input');
    toggleLoding('block');
    toggleSearch('none')
    const searchText=searchInput.value;
    searchInput.value='';
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then(data =>displaybook(data.docs))

});

// show totall of 
const input = () =>{

    const inputValue = document.getElementById('search');
    const text = inputValue.value ;
    inputValue.value = '';
    const url = `https://openlibrary.org/search.json?q=${text}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.numFound)
    )
}

const displayData = books =>{
    const total = document.getElementById('countSearch');
    const h3 = document.createElement("h3");
    h3.innerHTML = `<h3 class="text-warning"><span class="text-black">Result Found :</span> ${books} </h3>`;
    resultFound.appendChild(h3);
}
// search display
const displaybook= books =>{
    console.log(books);
    const bookDiv=document.getElementById('books')
    bookDiv.innerHTML='';
    books.forEach(book =>{
    const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
       <div class="card " >
            
            <div class="card-body">
            <img  src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top " alt="...">
                <h5 class="card-title">${book.author_name}</h5>
                <h5 class="card-title">${book.title}</h5>
               <p class="card-text">${book.first_publish_year}</p>
            </div>
        </div>
        
     
    `;
    bookDiv.appendChild(div); 
});
toggleLoding('none');
toggleSearch('block')

}; 

