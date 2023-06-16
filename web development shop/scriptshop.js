

let slideIndex = 0;
showSlides();                             //A custom function for automatic slides                          

function showSlides(){
 let i;                               
 let slides = document.getElementsByClassName("mySlides-fade");
 let dots = document.getElementsByClassName("dot");
 for(i=0; i<slides.length;i++){
   slides[i].style.display ="none";                        
 }
 slideIndex++;
 if(slideIndex>slides.length){slideIndex =1}
 for(i=0;i<dots.length;i++){
   dots[i].className=dots[i].className.replace("active","");

 }
 slides[slideIndex-1].style.display="block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 2000);            // Change image every 2 seconds

}

function cricket() {
  var x = document.getElementById("dropdown-container1");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function basketball() {
  var x = document.getElementById("dropdown-container2");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function rugby() {
  var x = document.getElementById("dropdown-container3");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

function Address() {
  var x = document.getElementById("address");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

function Contact() {
  
    var contactDiv = document.getElementById("contact");
    if (contactDiv.style.display === "none") {
      contactDiv.style.display = "block";
    } else {
      contactDiv.style.display = "none";
    }
  }


function displayCheckedItems(){
  window.open("cart.html");
}

//Payemnt //

function cancelData2(){
  
  document.getElementById("pNumber").value = "";
  document.getElementById("emailAddrs").value = "";
      
}



 
 function saveData2(){
  
  var nemail = document.getElementById("emailAddrs").value;

  const contact = document.querySelector("#current-email");
  contact.innerHTML= nemail;


 }

 function Main(){
  window.open("shop.html");

 }
 
 function success(){
 
    var form = document.getElementById('myForm');
    if (form.checkValidity()) {
      window.open("invoice.html");
    } else {
      // Form is invalid, show error message
      alert('Please fill out all required fields.');
    }
    
  }
 
function login(){
  window.open("customerLogin.html");
}
function closeLog(){
  window.open("shop.html");
  
}
function sublog(){
 
  var form = document.getElementById('mylog');
  if (form.checkValidity()) {
    window.open("shop.html");
  } else {
    // Form is invalid, show error message
    alert('Please fill out all required fields.');
  }
  
}

function subAdmin(){
 
  var form = document.getElementById('mylog');
  if (form.checkValidity()) {
    window.open("adminPanel.html");
  } else {
    // Form is invalid, show error message
    alert('Please fill out all required fields.');
  }
  
}
function register(){
  window.open("customerRegister.html");
}
function change_image(image){

  var container = document.getElementById("main-image");

 container.src = image.src;
}


document.addEventListener("DOMContentLoaded", function(event) {


});
function back(){
  window.open("shop.html");
}
function cart(){
  window.open("cart.html");
}
function phone(){
  window.open("singleProduct.html");
}
function tab(){
  window.open("singleProductnew.html");
}
function add(){
  alert('1 new item(s) have been added to your cart');
}
function add2(){
  alert('1 new item(s) have been added to your cart');
}
function Continue(){
  window.open("shop.html");

 }
 function bnow2(){
  window.open("payment.html");
 }
 function bnow(){
  window.open("payment.html");
 }
