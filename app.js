//CART
const cartBtn=document.querySelector(".fa-shopping-cart");
const cartPopup=document.querySelector(".cart-section");


cartBtn.addEventListener("click",()=>{
    cartPopup.classList.toggle("hide");
});


//GALLERY
const gallery_images=document.querySelectorAll(".hero-gallery img");
const main_image=document.querySelector(".p1");


gallery_images.forEach(image=>{
    image.addEventListener("click",()=>{
        const image_src=image.attributes.src;
        const image_name=image_src.nodeValue;
        let a = image_name.replace('-thumbnail','');
        remove_all_selected();
        image.classList.add("selected");
        main_image.src=a;
    })
});

function remove_all_selected(){
    gallery_images.forEach(image=>{
        image.classList.remove("selected");
    });
}

//PRODUCT IN THE CART
const quantity=document.querySelector(".counter h4");
const plus_btn=document.querySelector(".fa-plus");
const minus_btn=document.querySelector(".fa-minus");
const cart_point=document.querySelector(".cart-point");
const cart_counter=document.querySelector(".cart-point h3");
const add_btn=document.querySelector(".add-cart");
const cart_quantity=document.querySelector(".cart-section-desc span");
const cart_total=document.querySelector(".total");
const trash_btn=document.querySelector(".fa-trash");
const cart_section_container=document.querySelectorAll(".cart-section-");
const cart_div=document.querySelector(".cart-section-container");
const empty=document.querySelector(".empty");


let quantity_value=0;
let counter=0;


minus_btn.addEventListener("click",()=>{
    if(counter>0){
        counter--;
        quantity.innerText=counter;
    }
});

plus_btn.addEventListener("click",()=>{
    if(counter<10){
        counter++;
        quantity.innerText=counter;
    }
});

add_btn.addEventListener("click",()=>{
    if(counter===0) alert("None selected");
    if((quantity_value+counter)<=10){
        quantity_value+=counter;
        cart_quantity.innerText=quantity_value;
        let p=quantity_value*125;
        let str="$"+p;
        cart_total.innerText=str;
        check();
        cart_div.classList.remove("hide");
        empty.classList.add("hide");
        quantity.innerHTML="0";
        counter=0;
    }
    else{
        alert("Max items 10");
    }
});

trash_btn.addEventListener("click",()=>{
    quantity_value=0;
    cart_div.classList.add("hide");
    empty.classList.remove("hide");
    check();
});

function check(){
    if(quantity_value===0){
        cart_point.classList.add("hide");
    }
    else{
        cart_point.classList.remove("hide");
        cart_counter.innerText=quantity_value;
    }
};


//MOBILE IMAGE
const left_arrow=document.querySelector(".fa-chevron-circle-left");
const right_arrow=document.querySelector(".fa-chevron-circle-right");

let image_counter=1;

left_arrow.addEventListener("click",()=>{
    if(image_counter>1){
        image_counter--;
        check_image();
    }
});
right_arrow.addEventListener("click",()=>{
    if(image_counter<4){
        image_counter++;
        check_image();
    }
});
function check_image(){
    main_image.src="./img/image-product-"+image_counter+".jpg";
}


//BURGER
const burger_btn=document.querySelector(".burger");
const links=document.querySelector(".links");
const close_btn=document.querySelector(".close");

burger_btn.addEventListener("click",()=>{
    links.classList.add("move");
    links.classList.remove("close-class");
});

close_btn.addEventListener("click",()=>{
    links.classList.add("close-class");
    links.classList.remove("move");
});