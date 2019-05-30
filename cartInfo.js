//USE Chrome browser
//We want the cart info with the next structure
var cflGetCart = (callback) =>{
    var form = document.createElement("form");
    form.method = "get";
    form.action = "/cart?fromMe=1";
    form.id = "getCart";
    //Finaly add form to document
    document.body.appendChild(form);


    var formData = new FormData(document.getElementById("getCart"));
    //Send submit to get cart
    var pList = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/cart");
    xhr.send(formData);
    xhr.onload = function (event) {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(event.target.response, 'text/html');
        pList = htmlDoc.querySelectorAll(".cart__row:not(.medium-down--hide)");
        var products = [];
        for (var i = 0; i < pList.length - 1; i++) {
            var item = pList[i];
            //Getting product name and subname if present
            var product = {};
            var mainName = item.getElementsByTagName('h5');
            var secundaryName = item.getElementsByTagName('small');
            if (mainName[0]) {
                product.name = mainName[0].innerHTML
            }
            if (secundaryName[0] && secundaryName[0].innerHTML != "Remove") {
                product.name += ' - ' + secundaryName[0].innerHTML
            }
            //Getting product id
            var id = item.getElementsByClassName("cart__remove text-link");
            if (id[0] && id[0].dataset) {
                product.id = id[0].dataset.id
            }
            //Getting product quantity
            var pQuantity = item.getElementsByTagName("input")
            if (pQuantity[0]) {
                product.quantity = pQuantity[0].value
            }
            //Getting product price
            var pPrice = item.getElementsByClassName("h3")
            if (pPrice[0]) {
                product.price = pPrice[0].innerHTML
            }
            products.push(product);
        }
        callback(null, products);
    }; 
}

//Some tests
cflGetCart((err, cart) => { console.log(err, cart); });

