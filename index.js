document.getElementById('search').addEventListener('click' , function(){
    const searchInput=document.getElementById('input');
    const searchText=searchInput.value;
    searchInput.value='';
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then(data =>displaybook(data.docs))

});
const displaybook= books =>{
    console.log(books);
    const bookDiv=document.getElementById('books')
    bookDiv.innerHTML='';
    books.forEach(book =>{
    const div=document.createElement('div')
    // div.classList.add('country')
    div.classList.add('col-md-3')
    div.innerHTML=`
       <div class="card" >
            
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
}; 

