//USE Chrome browser
//Add To Cart function
var cflAddToCart = (productId, quantity, callback) => {
    //On product-detail use AddToCart form based on productId
    var pSelected = document.getElementById("productSelect");
    var option = document.createElement("option");
    option.value = productId;
    option.selected = true;
    //Add new option as part of form
    pSelected.add(option);
    
    //Modify hidden quantity
    var pQuantity = document.getElementById("Quantity");
    pQuantity.value = quantity
    //Add to cart action
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