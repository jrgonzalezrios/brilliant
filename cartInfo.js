//USE Chrome browser
//We want the cart info with the next structure

var form = document.createElement("form");
form.method = "get";
form.action = "/cart?fromMe=1";
form.id = "getCart";
//Finaly add form to document
document.body.appendChild(form);


var formData = new FormData(document.getElementById("getCart"));
//Send submit to get cart
var xhr = new XMLHttpRequest();
xhr.open("GET", "/cart");
xhr.send(formData);
xhr.onload = function (event) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(event.target.response, 'text/html');
    var pList = htmlDoc.querySelectorAll(".cart__row:not(.medium-down--hide)");
    var products = [];
    for(var i = 1; i < pList.length; i++){
        var item = pList[i];
        //Getting product name and subname if present
        var product = {};
        var mainName = item.getElementsByTagName('h5');
        var secundaryName = item.getElementsByTagName('small');
        if(mainName[0]){
            product.name = mainName[0].innerHTML
        }
        if (secundaryName[0] && secundaryName[0].innerHTML != "Remove") {
            product.name += ' - ' + secundaryName[0].innerHTML
        }
        //Getting product id
        var id = item.getElementsByClassName("cart__remove text-link");
        if (id[0]) {
            product.id = id[0].dataset.id
        }
        products.push(product);
    }
    console.log(products)
}; 
    
    
var example = {
    items: [
        {
            id: 24957709577,
            name: 'Thousand Helmet - Navy / Large',
            price: 100,
            originalPrice: 120,
            quantity: 1
        },
        {
            id: 1565673733,
            name: 'Biddle',
            price: 50,
            originalPrice: 50,
            quantity: 2
        }],
    currency: "USD"
}

