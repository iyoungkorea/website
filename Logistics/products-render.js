document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-list");
  
    window.productList.forEach(group => {
      group.items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
  
        card.innerHTML = `
        <h4>${product.name}</h4>
        <img src="${product.image}" alt="${product.name}">
        <div class="card-bottom">
          <p>${product.description}</p>
          ${
            product.pdf
              ? `<a href="${product.pdf}" download><button>PDF</button></a>`
              : `<button disabled>No Info</button>`
          }
        </div>
      `;
  
        container.appendChild(card);
      });
    });
  });