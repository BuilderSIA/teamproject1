let list = document.getElementById('list');


fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then((data)=>{


        let displayItem = data.concat(data.concat(data))

        let testCards = displayItem.map((item)=>{
            return(`
            <h2 class="list-title">
                ${item.title}
                </h2>

            `)

        })
        list.innerHTML = testCards.join('')

    })

            // fetch('https://fakestoreapi.com/products/')
            // .then(res=>res.json())
            // .then((data))=>{



            // }