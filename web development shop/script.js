
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
  var x = document.getElementById("contact");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}



function displayCheckedItems() {
  
  const checkboxes = document.querySelectorAll('#items input[type="checkbox"]');

  const checkedItems = [];

  
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
     
      const label = checkbox.parentElement.querySelector('label');
      const price = checkbox.parentElement.querySelector('.price');
      const quantity = checkbox.parentElement.querySelector('.quantity');
      const itemPrice = parseFloat(price.textContent.replace('$', '')) * parseInt(quantity.value);
      checkedItems.push({
        name: label.textContent,
        quantity: quantity.value,
        price: itemPrice.toFixed(2)
      });
    }
  });

  
  if (checkedItems.length === 0) {
    alert('No items were checked.');
    return;
  }


  const totalPrice = checkedItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.price);
  }, 0).toFixed(2);


  const newWindow = window.open('', '_blank');

  newWindow.document.write('<html><head>');
  newWindow.document.write('<link rel="stylesheet" type="text/css" href="style.css">');
  newWindow.document.write('</head><body class="bodyNew">');

  
  newWindow.document.write('<h1>Checked Items:</h1>');
  newWindow.document.write('<table>');
  newWindow.document.write('<tr><th>Name</th><th>Quantity</th><th>Price</th></tr>');
  checkedItems.forEach((item) => {
    newWindow.document.write(`<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price}</td></tr>`);
  });
  newWindow.document.write(`<tr><td colspan="2"><strong>Total:</strong></td><td>$${totalPrice}</td></tr>`);
  newWindow.document.write('</table>');
  newWindow.document.write('<button id="back" onclick="window.location.href=\'shop.html\'">Clear your Order</button>');
  newWindow.document.write('<button id="next" onclick="window.location.href=\'order.html\'">Place your Order</button>');

  newWindow.document.write('</body></html>');
  
}
function cancel(){
  window.open("shop.html");
  
}
function success(){
  window.open("new.html");
}

//Payemnt //
 function saveData1(){

  var newAddress1 = document.getElementById("address1").value;
  var newAddress2 = document.getElementById("address2").value;
  var newAddress3 = document.getElementById("address3").value;
  var newCity = document.getElementById("city").value;
  var newZip = document.getElementById("zipcode").value;
  newCountry = document.getElementById("country").value;
       //  select = newCountry.value;

  const newAddress=document.querySelector("#current-address");
  newAddress.innerHTML=newAddress1," ",newAddress2, " ",newAddress3," ",newCity," ",newZip," ",newCountry ;  ;
  //," ",newAddress2, " ",newAddress3," ",newCity," ",newZip," ",newCountry ;



 }
 function cancelData1(){


 }
 function saveData2(){
  
  var email = document.getElementById("email").value;

  const contact = document.querySelector("#current-email");
  contact.innerHTML= email;


 }

 function Continue(){
  window.open("shop.html");

 }

 let slideIndex = 0;
 showSlides();

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
  setTimeout(showSlides, 2000); // Change image every 2 seconds

 }



