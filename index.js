async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        for (const product of data.products) {
            if (product.rating > 4.5) {
                console.log(product.title);
            }
        }
    }
    catch (error){
        console.error("Too many HTTP requests");
    }
}
getProducts();