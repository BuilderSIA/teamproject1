const electronics = document.getElementById('electronics');

fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then((data) => {
<<<<<<< HEAD
<<<<<<< HEAD

        let further_data = data.concat(data.concat())

        let cards = further_data.map((item) => {
=======
        let cards = data.map((item) => {
>>>>>>> bc362b8 (big changes have been made)
=======
        let cards = data.map((item) => {
>>>>>>> 120b4a76bfc063c56488defd27868f17460075cf
            return (`
            <li class="card">
                <div class="face main">
                    <div class="item-img">
                        <img src="${item.image}" alt="...">
                    </div>
                    <p class="card-price">${item.price} $</p>
                    <h5 class="card-title">${item.title}</h5>
                </div>

                 <div class="face extra">
                    <b>
                        <span>
                            <p class="card-weight">${item.rating.rate}</p>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_111_9745)">
                                    <path d="M12.8933 4.76934L9.45256 4.27012L7.9147 1.167C7.63916 0.613871 6.84079 0.60684 6.56289 1.167L5.02503 4.27012L1.58427 4.76934C0.967237 4.8584 0.719954 5.61543 1.16742 6.04903L3.65673 8.46309L3.06796 11.8732C2.96198 12.4897 3.61434 12.9514 4.16072 12.6631L7.2388 11.0529L10.3169 12.6631C10.8633 12.949 11.5156 12.4897 11.4096 11.8732L10.8209 8.46309L13.3102 6.04903C13.7576 5.61543 13.5104 4.8584 12.8933 4.76934ZM9.608 8.06934L10.1662 11.3131L7.2388 9.78262L4.31144 11.3131L4.86959 8.06934L2.50039 5.77247L5.77394 5.29903L7.2388 2.3459L8.70365 5.29903L11.9772 5.77247L9.608 8.06934Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                    <path d="M7.2273 2.8916L5.94286 5.4749L3.07092 5.89342L5.16354 7.94275L4.64399 10.7714L7.2273 9.44366L9.8106 10.7714L9.34878 7.94275L11.4125 5.89342L8.52616 5.4749L7.2273 2.8916Z" fill="url(#paint0_linear_111_9745)" style=""/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_111_9745" x1="-1.5691" y1="-2.58047" x2="12.9712" y2="-0.751639" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F64D4D" style="stop-color:#F64D4D;stop-color:color(display-p3 0.9647 0.3020 0.3020);stop-opacity:1;"/>
                                        <stop offset="1" stop-color="#4D5EF6" style="stop-color:#4D5EF6;stop-color:color(display-p3 0.3020 0.3682 0.9647);stop-opacity:1;"/>
                                    </linearGradient>
                                    <clipPath id="clip0_111_9745">
                                        <rect width="13.5652" height="12" fill="white" style="fill:white;fill-opacity:1;" transform="translate(0.456055 0.75)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <p class="card-weight">${item.rating.count}</p>
                    </b>
                    <!--<p class="card-description">${item.description}</p>-->
                    <button class="btn-cart">
                        Add to cart
                    </button>
                </div>
            </li>
            `)
        })
        electronics.innerHTML = cards.join('')
    })

<<<<<<< HEAD
<<<<<<< HEAD
fetch('./electronics.json')
    .then(res => res.json())
    .then(json => console.log(json))


    



/*                                                              */
// const jewelery = document.getElementById('jewelery');

// fetch('https://fakestoreapi.com/products/category/jewelery')
//     .then(res => res.json())
//     .then((data) => {
//         let cards = data.map((item) => {
//             return (`
//             <li class="card">
//                 <div class="face main">
//                     <div class="item-img">
//                         <img src="${item.image}" alt="...">
//                     </div>
//                     <p class="card-price">${item.price} $</p>
//                     <h5 class="card-title">${item.title}</h5>
//                 </div>

//                  <div class="face extra">
//                     <b>
//                         <span>
//                             <p class="card-weight">${item.rating.rate}</p>
//                             <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <g clip-path="url(#clip0_111_9745)">
//                                     <path d="M12.8933 4.76934L9.45256 4.27012L7.9147 1.167C7.63916 0.613871 6.84079 0.60684 6.56289 1.167L5.02503 4.27012L1.58427 4.76934C0.967237 4.8584 0.719954 5.61543 1.16742 6.04903L3.65673 8.46309L3.06796 11.8732C2.96198 12.4897 3.61434 12.9514 4.16072 12.6631L7.2388 11.0529L10.3169 12.6631C10.8633 12.949 11.5156 12.4897 11.4096 11.8732L10.8209 8.46309L13.3102 6.04903C13.7576 5.61543 13.5104 4.8584 12.8933 4.76934ZM9.608 8.06934L10.1662 11.3131L7.2388 9.78262L4.31144 11.3131L4.86959 8.06934L2.50039 5.77247L5.77394 5.29903L7.2388 2.3459L8.70365 5.29903L11.9772 5.77247L9.608 8.06934Z" fill="black" style="fill:black;fill-opacity:1;"/>
//                                     <path d="M7.2273 2.8916L5.94286 5.4749L3.07092 5.89342L5.16354 7.94275L4.64399 10.7714L7.2273 9.44366L9.8106 10.7714L9.34878 7.94275L11.4125 5.89342L8.52616 5.4749L7.2273 2.8916Z" fill="url(#paint0_linear_111_9745)" style=""/>
//                                 </g>
//                                 <defs>
//                                     <linearGradient id="paint0_linear_111_9745" x1="-1.5691" y1="-2.58047" x2="12.9712" y2="-0.751639" gradientUnits="userSpaceOnUse">
//                                         <stop stop-color="#F64D4D" style="stop-color:#F64D4D;stop-color:color(display-p3 0.9647 0.3020 0.3020);stop-opacity:1;"/>
//                                         <stop offset="1" stop-color="#4D5EF6" style="stop-color:#4D5EF6;stop-color:color(display-p3 0.3020 0.3682 0.9647);stop-opacity:1;"/>
//                                     </linearGradient>
//                                     <clipPath id="clip0_111_9745">
//                                         <rect width="13.5652" height="12" fill="white" style="fill:white;fill-opacity:1;" transform="translate(0.456055 0.75)"/>
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                         </span>
//                         <p class="card-weight">${item.rating.count}</p>
//                     </b>
//                     <!--<p class="card-description">${item.description}</p>-->
//                     <button class="btn-cart">
//                         Add to cart
//                     </button>
//                 </div>
//             </li>
//             `)
//         })
//         jewelery.innerHTML = cards.join('')
//     })

// fetch('./jewelery.json')
//     .then(res => res.json())
//     .then(json => console.log(json))
=======
fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(json => console.log(json))
>>>>>>> bc362b8 (big changes have been made)
=======
fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(json => console.log(json))
>>>>>>> 120b4a76bfc063c56488defd27868f17460075cf
