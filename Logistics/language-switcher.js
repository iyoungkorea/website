document.addEventListener("DOMContentLoaded", () => {
    
    const languageSwitcher = document.getElementById("language-switcher");
    const buttons = languageSwitcher.querySelectorAll("button");
    const defaultLang = localStorage.getItem("language") || "EN"; // Default to English
    setLanguage(defaultLang);

    // Update active button
    setActiveButton(defaultLang);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.dataset.lang; // Get language from button data attribute
            localStorage.setItem("language", selectedLang); // Save preference
            setLanguage(selectedLang);
            setActiveButton(selectedLang);
        });
    });
});

function setLanguage(lang) {
    // Update text content dynamically
    
    document.getElementById("nav-home").innerText = translations[lang].navHome;
    document.getElementById("nav-about").innerText = translations[lang].navAbout;
    document.getElementById("nav-products").innerText = translations[lang].navProducts;
    document.getElementById("nav-partnership").innerText = translations[lang].navPartnership;
    document.getElementById("nav-contact").innerText = translations[lang].navContact;
    document.getElementById("nav-responsibility").innerText = translations[lang].navResponsibility;

    

    // Page-specific updates
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
    ["nav-welcome", "nav-history", "nav-our-field"].forEach(id => {
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

    if (document.getElementById("products-title")) {
        document.getElementById("products-title").innerText = translations[lang].productsTitle;
    }
    if (document.getElementById("products-text")) {
        document.getElementById("products-text").innerText = translations[lang].productsText;
    }
    if (document.getElementById("partnership-title")) {
        document.getElementById("partnership-title").innerText = translations[lang].partnershipTitle;
    }
    if (document.getElementById("partnership-text")) {
        document.getElementById("partnership-text").innerText = translations[lang].partnershipText;
    }
    if (document.getElementById("partnership-text2")) {
        document.getElementById("partnership-text2").innerText = translations[lang].partnershipText2;
    }
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
