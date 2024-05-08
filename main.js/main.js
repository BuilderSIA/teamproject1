const list = document.getElementById('list')

fetch('https://fakestoreapi.com/products/category/women\'s clothing')
    .then(res=>res.json())
    .then((data)=>{

        let displayItems = data.concat (data)

        let testCards = displayItems.map((item)=>{
            return (`
            <div data-id="${item.id}" class="list-item">
                 <div class="cont">
                 <img src="${item.image}" alt="" class="img">
                 <h3 class="price">
                    ${item.price}₽
                 </h3>
                 <div class="rating">
                    <h5 class="rate">
                        ${item.rating.rate}
                        <i class='bx bxs-star'></i>
                    </h5>
                    <h5 class="count">
                        ${item.rating.count} отзывов
                    </h5>
                    </div>
                <h2 class="title">
                    ${item.title}
                </h2>
                <button onclick="" class="btn">
                    В КОРЗИНУ
                </button>
            </div>
            
         </div>
            `)
        })

        list.innerHTML = testCards.join(' ')
})

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))

list.style.zoom = innerWidth / 1500;