document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-list");
    console.log("product-list found:", !!container);
    console.log("productList available:", !!window.productList);

    if (!container || !window.productList) {
      console.warn("product-list container or productList is missing");
      return;
    }
  
    window.productList.forEach(group => {
      const section = document.createElement("section");
      section.innerHTML = `<h3 class="gt4">${group.category}</h3>`;
  
      const groupContainer = document.createElement("div");
      groupContainer.className = "product-container";
  
      group.items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
  
        const specTable = product.specs ? `
          <div class="spec-overlay">
            <table>
              ${product.specs.map(([k, v]) => {
                const val = Array.isArray(v) ? v.join("<br>") : v;
                return `<tr><td>${k}</td><td>${val}</td></tr>`;
              }).join('')}
            </table>
          </div>
        ` : "";
  
        card.innerHTML = `
        <div class="image-container">
          <img src="${product.image}" alt="${product.name}">
          ${specTable}
        </div>
        <p><strong>${product.name}</strong></p>  
        `;
  
        groupContainer.appendChild(card);
      });
  
      section.appendChild(groupContainer);
      container.appendChild(section);
    });
  });