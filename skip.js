let clicked=document.getElementById("click");
let eliminate=setInterval(() => {

    // Skip [5,4,3,2,1]
clicked.innerHTML=`Skip add in ${x}`;

// Skip 
    if(x===0){
        clicked.innerHTML="Skip";

        // skip Interval Eliminate
        clearInterval(eliminate)
        clicked.addEventListener("click",()=>{

            // Video Play
            let movie = document.getElementsByTagName("video");
                movie[0].style.display = "block"; 
                clicked.style.display="none"
        })
    }
    x--; 
}, 1000,x=5);