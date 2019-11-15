let flipped = false


button.onclick = function(){
    if (flipped == false){
        flipped = true
        document.getElementById("card").src="http://img.geocaching.com/cache/bf4e6430-8665-4dd5-8a51-2be39b1d5977.jpg"
    }else{
        flipped = false
        document.getElementById("card").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWrrceZa6TST0J8UBLKuNpq2OHQZW6NXi1rAe7wFeuA6YpSlI&s"
    }
    console.log(flipped)
}

