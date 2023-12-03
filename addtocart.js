const product = [
    {
        id: 0,
        image: 'Merch1.avif',
        title: 'WaveToEarth - Flaws and All Album Fan Doodle Unisex',
        price: 23,
    },
    {
        id: 1,
        image: 'Merch2.avif',
        title: 'WaveToEarth Inspired Sweatshirt',
        price: 70,
    },
    {
        id: 2,
        image: 'Merch3.avif',
        title: 'WaveToEarth Hoodie',
        price: 84,
    },
    {
        id: 3,
        image: 'Merch4.avif',
        title: 'WaveToEarth Vintage Retro Sweatshirt',
        price: 98,
    },
    {
        id: 4,
        image: 'Merch5.avif',
        title: 'WaveToEarth - Summer Flows 0.02 Inspired Tote Bag',
        price: 33,
    },
    {
        id: 5,
        image: 'Merch6.avif',
        title: 'WaveToEarth - ChiBi Members T-Shirt',
        price: 38,
    },
    {
        id: 6,
        image: 'Merch7.avif',
        title: 'WaveToEarth - North America Tour Vintage Sweatshirt',
        price: 98,
    },
    {
        id: 7,
        image: 'Merch8.avif',
        title: 'WaveToEarth - 2023 North America Tour T-Shirt',
        price: 26,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}