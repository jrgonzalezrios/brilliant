//USE Chrome browser
//Add To Cart function
var cflAddToCart = (productId, quantity, callback) => {
    //Create form
    var form = document.createElement("form");
    form.method = "post";
    form.action = "/cart/add";
    form.id = "AddToCartForm";
    form.enctype = "multipart/form-data"
    //create input of product
    var pInput = document.createElement("input");
    pInput.name = "id";
    pInput.value =productId;   

    form.appendChild(pInput);
    //Add quantity input to form
    var qInput = document.createElement("input");
    qInput.type = "number";
    qInput.id = "Quantity";
    qInput.name = "quantity";
    qInput.value = quantity;
    form.appendChild(qInput);
    //Finaly add form to document
    document.body.appendChild(form);
    //Send submit to add to cart
    document.getElementById("AddToCartForm").submit();    
}


//Some cases
cflAddToCart(24957709257, 10, (err, response) => {
     console.log('24957709257', err, response); 
});
cflAddToCart(4815156229, 2, (err, response) => { 
    console.log('4815156229', err, response); 
});
cflAddToCart(24957709577, 1, (err, response) => { 
    console.log('24957709577', err, response); 
});