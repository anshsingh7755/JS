const myNums = [1,2,3]

//reduce
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// }, 0)


const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0 )


console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "da course",
        price: 3999
    },
    {
        itemName: "app course",
        price: 4599
    },
    {
        itemName: "cs course",
        price: 6999
    },
    {
        itemName: "da course",
        price: 8899
    },
    {
        itemName: "seo course",
        price: 10999
    },
    {
        itemName: "dsa course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)


console.log(priceToPay);






