document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");
    const selectedBtn = document.getElementById("selected-lang");
    const optionsContainer = document.getElementById("language-options");
    const optionButtons = optionsContainer.querySelectorAll("button");
  
    const savedLang = localStorage.getItem("language") || "EN";
    selectedBtn.innerHTML = getFlag(savedLang);
    selectedBtn.dataset.lang = savedLang;
    setLanguage(savedLang);
  
    selectedBtn.addEventListener("click", () => {
      languageSwitcher.classList.toggle("show");
    });
  
    optionButtons.forEach(button => {
      button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        selectedBtn.innerHTML = getFlag(lang);
        selectedBtn.dataset.lang = lang;
        localStorage.setItem("language", lang);
        setLanguage(lang);
        languageSwitcher.classList.remove("show");
      });
    });
  
    document.addEventListener("click", (e) => {
      if (!languageSwitcher.contains(e.target)) {
        languageSwitcher.classList.remove("show");
      }
    });
  });

  function getFlag(lang) {
    switch (lang) {
      case "KR": return `<img src="images/flag/KR.svg" alt="KR" class="flag-icon">`;
      case "JP": return `<img src="images/flag/JP.svg" alt="JP" class="flag-icon">`;
      case "CN": return `<img src="images/flag/CN.svg" alt="CN" class="flag-icon">`;
      default:   return `<img src="images/flag/EN.svg" alt="EN" class="flag-icon">`;
    }
  }
function setLanguage(lang) {
    
    //NavBar
    document.getElementById("nav-home").innerText = translations[lang].navHome;
    document.getElementById("nav-about").innerText = translations[lang].navAbout;
    document.getElementById("nav-products").innerText = translations[lang].navProducts;
    document.getElementById("nav-partnership").innerText = translations[lang].navPartnership;
    document.getElementById("nav-contact").innerText = translations[lang].navContact;
    document.getElementById("nav-responsibility").innerText = translations[lang].navResponsibility;

    

    //HOME
    if (document.getElementById("welcome-title")) {
        document.getElementById("welcome-title").innerText = translations[lang].welcomeTitle;
    }
    if (document.getElementById("welcome-text")) {
        document.getElementById("welcome-text").innerText = translations[lang].welcomeText;
    }
    if (document.getElementById("welcome2-title")) {
        document.getElementById("welcome2-title").innerText = translations[lang].welcome2Title;
    }
    if (document.getElementById("welcome2-text")) {
        document.getElementById("welcome2-text").innerText = translations[lang].welcome2Text;
    }
    if (document.getElementById("welcome3-title")) {
        document.getElementById("welcome3-title").innerText = translations[lang].welcome3Title;
    }

    if (document.getElementById("welcome3-text")) {
        document.getElementById("welcome3-text").innerText = translations[lang].welcome3Text;
    }
    document.getElementById("Partnership-link").innerText = translations[lang].partnershiplink;


    //ABOUT
    ["nav-overview", "nav-history", "nav-ourfield"].forEach(id => {
        const el = document.getElementById(id);
        if (el && translations[lang][id.replace("-", "")]) {
            el.innerText = translations[lang][id.replace("-", "")];
        }
    });

    if (document.getElementById("about-title")) {
        document.getElementById("about-title").innerText = translations[lang].aboutTitle;
    }
    if (document.getElementById("about-title2")) {
        document.getElementById("about-title2").innerText = translations[lang].aboutTitle2;
    }    
    if (document.getElementById("about-text")) {
        document.getElementById("about-text").innerText = translations[lang].aboutText;
    }
        
    if (document.getElementById("about-text2")) {
        document.getElementById("about-text2").innerText = translations[lang].aboutText2;
    }
    if (document.getElementById("about-text3")) {
        document.getElementById("about-text3").innerText = translations[lang].aboutText3;
    }



    //PRODUCTS
    if (document.getElementById("products-title")) {
        document.getElementById("products-title").innerText = translations[lang].productsTitle;
    }
    if (document.getElementById("products-text")) {
        document.getElementById("products-text").innerText = translations[lang].productsText;
    }
    if (document.getElementById("partnership-title")) {
        document.getElementById("partnership-title").innerText = translations[lang].partnershipTitle;
    }
    
    
    
    //PARTNERSHIP
    if (document.getElementById("partnership-text")) {
        document.getElementById("partnership-text").innerText = translations[lang].partnershipText;
    }
    if (document.getElementById("partnership-title2")) {
        document.getElementById("partnership-title2").innerText = translations[lang].partnershipTitle2;
    }
    if (document.getElementById("Ot1")) {
        document.getElementById("Ot1").innerText = translations[lang].Ot1;
    }
    if (document.getElementById("Ot11")) {
        document.getElementById("Ot11").innerText = translations[lang].Ot11;
    }
    if (document.getElementById("Ot2")) {
        document.getElementById("Ot2").innerText = translations[lang].Ot2;
    }
    if (document.getElementById("Ot21")) {
        document.getElementById("Ot21").innerText = translations[lang].Ot21;
    }
    if (document.getElementById("partnership-text3")) {
        document.getElementById("partnetship-text3").innerText = translations[lang].partnershipText3;
    }
    if (document.getElementById("partnership-text4")) {
        document.getElementById("partnetship-text4").innerText = translations[lang].partnershipText4;
    }

    
    
    
    if (document.getElementById("partnership-text2")) {
        document.getElementById("partnership-text2").innerText = translations[lang].partnershipText2;
    }
    
    
    //CONTACT
    if (document.getElementById("contact-title")) {
        document.getElementById("contact-title").innerText = translations[lang].contactTitle;
    }
    if (document.getElementById("contact-location")) {
        document.getElementById("contact-location").innerText = translations[lang].contactLocation;
    }
    if (document.getElementById("contact-text")) {
        document.getElementById("contact-text").innerText = translations[lang].contactText;
    }
    if (document.getElementById("address")) {
        document.getElementById("address").innerHTML = translations[lang].contactAddress;
    }
    
    
    //RESPONSIBILITY
    if (document.getElementById("R-title")) {
        document.getElementById("R-title").innerHTML = translations[lang].contactRtitle;
    }
    if (document.getElementById("R-text")) {
        document.getElementById("R-text").innerHTML = translations[lang].contactRtext;
    }
    
}

function setActiveButton(lang) {
    const buttons = document.querySelectorAll("#language-switcher button");
    buttons.forEach(button => {
        button.classList.remove("active");
        if (button.dataset.lang === lang) {
            button.classList.add("active");
        }
    });
}
