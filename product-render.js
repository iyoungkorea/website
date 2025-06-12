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
  
        const pdfButton = product.pdf
          ? `<button class="pdf-btn" data-pdf="${product.pdf}" title="Download PDF">
                <img src="pdfs/pdf-icon.png" alt="Download PDF">
            </button>`
          : `<button class="pdf-btn no-file" title="No file available">
                <img src="pdfs/pdf-icon-disabled.png" alt="No PDF">
            </button>`;



        card.innerHTML = `
        <div class="image-container">
          ${pdfButton}
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

  document.addEventListener("click", (e) => {
    if (e.target.closest(".pdf-btn")) {
      const btn = e.target.closest(".pdf-btn");
      const pdf = btn.getAttribute("data-pdf");
  
      if (btn.classList.contains("no-file") || !pdf) {
        alert("The file is not currently available.");
        return;
      }
  
      const confirmView = confirm("Do you want to open this PDF file in a new tab?");
if (confirmView) {
  window.open(pdf, "_blank");
}
    }
  });