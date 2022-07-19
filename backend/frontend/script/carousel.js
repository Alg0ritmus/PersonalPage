var carousel_items = document.getElementsByClassName('carousel-item');
var carousel = document.getElementsByClassName('carousel-wrapper')[0];
var left_arrow_carousel = document.getElementsByClassName('carousel-arrow')[0];
var right_arrow_carousel = document.getElementsByClassName('carousel-arrow')[1];

// start position
position_from_left=0;
//create slider
touched_stared_X=0;
touched_ended_X=0;

//create grid of carousel
for (let index = 0; index < carousel_items.length; index++) {
    carousel_items[index].style.left=position_from_left+"px";
    position_from_left+=carousel_items[0].offsetWidth;   
}


slide_carousel_item=()=>{
    var rotate =0;
    rotate+=((touched_stared_X-touched_ended_X));
    //check valid rotation to left
    if  (parseInt(carousel_items[0].style.left)-rotate>0){
        rotate=parseInt(carousel_items[0].style.left);
    }
    //check valid rotation to right
    if  (parseInt(carousel_items[carousel_items.length-1].style.left,10)+carousel_items[0].offsetWidth-rotate<carousel.offsetWidth){
        rotate=parseInt(carousel_items[carousel_items.length-1].style.left,10)+carousel_items[0].offsetWidth-carousel.offsetWidth;
    }  
    // rotate items based on movement
        for (let index = 0; index < carousel_items.length; index++) {
            var temp_position_of_item=carousel_items[index].style.left;
            carousel_items[index].style.left=(parseInt(temp_position_of_item,10)-rotate)+"px";
        }
    
}

// START SWIPING
carousel.addEventListener("touchstart",(e)=>{
    touched_stared_X=e.changedTouches[0].screenX;
});

//STOP SWIPING
carousel.addEventListener("touchend",(e)=>{
    touched_ended_X=e.changedTouches[0].screenX;
    //DO smth on swipe
    slide_carousel_item();
});


left_arrow_carousel.addEventListener("click",()=>{
    touched_stared_X=0;
    touched_ended_X=carousel_items[0].offsetWidth;
    //rotate carousel
    slide_carousel_item();
})

right_arrow_carousel.addEventListener("click",()=>{
    touched_stared_X=0;
    touched_ended_X=-carousel_items[0].offsetWidth;
    //rotate carousel
    slide_carousel_item();
})

