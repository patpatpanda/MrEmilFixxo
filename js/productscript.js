async function getProducts(target, tag) {
  const element = document.querySelector(target)

  const res = await fetch(`https://kyh-net22.azurewebsites.net/api/products/${tag}`)
  const data = await res.json()

  for(let item of data) {
      element.innerHTML += 
      `
          <div class="product-card">
              <div class="product-card-img">
                  <img src="${item.imageUrl}" alt="${item.name}">
                  <div class="product-card-menu">
                  <nav class="menu-icons">
                      <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
                      <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
                      <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
                  </nav>
                  <a href="#" class="btn-theme">QUICK VIEW</a>
                  </div>
              <div class="product-card-body">
                  <p class="product-card-category">${item.category}</p>
                  <p class="product-card-title">${item.name}</p>
                  <div class="product-card-ranking">
                      <i class="fa-solid fa-sharp fa-star"></i>
                      <i class="fa-solid fa-sharp fa-star"></i>
                      <i class="fa-solid fa-sharp fa-star"></i>
                      <i class="fa-solid fa-sharp fa-star"></i>
                      <i class="fa-regular fa-sharp fa-star"></i>
                  </div>
                  <p class="product-card-price">${item.originalPrice} ${item.currency}</p>
              </div>
          </div>
      </div>
      `
  }


  
}