function Order(){
    const newWindow = window.open('order.html');
}

function Back(){
    const newWindow = window.open('shop.html');
}
function processForm() {
    // Get a reference to the form and the table on the new page
    var form = document.getElementById("myForm");
    var table = window.open("new.html").document.getElementById("myTable");
  
    // Loop through all the checkboxes
    for (var i = 0; i < form.elements.length; i++) {
      var element = form.elements[i];
  
      // Check if the element is a checkbox and is checked
      if (element.type === "checkbox" && element.checked) {
        var name = element.name;
        var qty = form.elements[name + "qty"].value;
        var price = Number(element.nextElementSibling.textContent.slice(1));
  
        // Create a new row in the table and add the data
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var qtyCell = row.insertCell(1);
        var priceCell = row.insertCell(2);
        var totalCell = row.insertCell(3);
        nameCell.textContent = name;
        qtyCell.textContent = qty;
        priceCell.textContent = "$" + price.toFixed(2);
        totalCell.textContent = "$" + (qty * price).toFixed(2);
      }
    }
  }
  