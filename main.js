const list = document.getElementById('list')



fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then((data)=>{

        console.log(data);

        let displayItems = data.concat(data.concat(data))

        let testCards = displayItems.map((item)=>{
            return(`
            <div class="list-item">
                <div class="cont">
                    <img src="${item.image}" />
                    <h2>
                        ${item.title}
                    </h2>
                    <h3>
                        ${item.price}
                    </h3>
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
            `)
        })

        list.innerHTML = testCards.join('')
})

