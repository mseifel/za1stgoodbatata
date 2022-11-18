document.addEventListener('DOMContentLoaded', function() {
    renderbooks();
 });

function openMenu(){
    document.body.classList += "menu--open"
}
function closeMenu(){
    document.body.classList.remove('menu--open')
}

async function renderbooks(filter) {
    
    const booksWrapper = document.querySelector('.books'); 
    booksWrapper.classList += ' books__loading';
    const books = await getbooks();
    booksWrapper.classList.remove('books__loading');
    if(filter ==='HIGHTOLOW'){
    books.sort((a, b) =>
        (b.newPrice||b.originalPrice)-(a.newPrice||a.originalPrice));
    }else if(filter ==='LOWTOHIGH'){
    books.sort((a, b)=>
    (a.newPrice||a.originalPrice)-(b.newPrice||b.originalPrice));
       
    }else if(filter ==='RATING'){
        books.sort((a, b) => b.rating-a.rating);
    }

    const booksHTML = books.map((book)=>{
        return `<div class="book">
    
                            <figure class="bookimg__wrapper">
                                <img class="bookimg" src="${book.url}" alt="">
                            </figure>
                            <div class="booktitle">
                                <h4>${book.title}</h4>
                            </div>
                            <div class="bookrating">
                                ${ratingHTML(book.rating)} 
                            </div>
                            <div class="bookprice">
                                ${priceHTML(book.originalPrice,book.newPrice)}
                            </div>
        
                        </div>`; }).join("")
booksWrapper.innerHTML=booksHTML;                        
    
}
function ratingHTML(rating){
    let ratingHTML = "";
    for(let i=0;i<Math.floor(rating);++i){
        ratingHTML += '<i class="fa-solid fa-star"></i>';
    }
    if(!Number.isInteger(rating)){
        ratingHTML += '<i class="fa-solid fa-star-half-alt"></i>';
    }
    return ratingHTML;
}


function fillterBooks(event){
    renderbooks(event.target.value);
}

function priceHTML(originalPrice,newPrice){
    if(!newPrice){
        return `${originalPrice.toFixed(2)}`

    }
    else {
       return `<span class="theoldprice">$${originalPrice.toFixed(2)}</span>$${newPrice.toFixed(2)}`
    }
}


setTimeout(() => {
    renderbooks(); 
} ,100);
function getbooks(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve([ 
                {
                    id: 1,
                    title: "Virity",
                    url:"./assests/content3.png",
                    originalPrice:21,
                    newPrice: "",
                    rating: 4.5,
        
        
        
                    
                },
                {
                    id: 2,
                    title: "Ane Eyre",
                    url:"./assests/content8.png",
                    originalPrice:18,
                    newPrice: 12,
                    rating: 4.5,
        
        
        
                    
                },
                {
                    id: 3,
                    title: "Wimpy kid",
                    url:"./assests/content4.png",
                    originalPrice:30,
                    newPrice: 15,
                    rating: 5,
        
        
        
                    
                },
                {
                    id: 5,
                    title: "Surrender",
                    url:"./assests/content5.png",
                    originalPrice:50,
                    newPrice: null,
                    rating: 4,
        
        
        
                    
                },
                {
                    id: 6,
                    title: "Dessert Star",
                    url:"./assests/content12.jpg",
                    originalPrice:40,
                    newPrice: 20,
                    rating: 1,
        
        
        
                    
                },
                {
                    id: 7,
                    title: "Quentin Tarantino",
                    url:"./assests/content21.jpg",
                    originalPrice:50,
                    newPrice: null,
                    rating: 2,
        
        
        
                    
                },
                {
                    id: 8,
                    title: "The passenger",
                    url:"./assests/content23.jpg",
                    originalPrice:34,
                    newPrice: null,
                    rating: 3,
        
        
        
                    
                },
                {
                    id: 9,
                    title: "Now is the time to panic",
                    url:"./assests/content14.jpg",
                    originalPrice:40,
                    newPrice: 20,
                    rating: 4,
        
        
        
                    
                },
                {
                    id: 10,
                    title: "Tripple cross",
                    url:"./assests/content20.jpg",
                    originalPrice:27,
                    newPrice: 13,
                    rating: 5,
        
        
        
                    
                },
                {
                    id: 11,
                    title: "The songs of cells",
                    url:"./assests/content22.jpg",
                    originalPrice:52,
                    newPrice: 34,
                    rating: 3.5,
        
        
        
                    
                },
                {
                    id: 12,
                    title: "Going rouge",
                    url:"./assests/content17.jpg",
                    originalPrice:27,
                    newPrice: 14,
                    rating: 4,
        
        
        
                    
                },
               
                
            ]);
            
        }, 1000);
    });
 }