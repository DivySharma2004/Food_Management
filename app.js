window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start").addEventListener("click", function() {
        document.getElementsByClassName("signin")[0].style.marginTop = "20px"; 
    });
});

function getName() {
    const name = document.getElementById("nameInput").value;
    console.log(name);
    return name;
}

function getEmail() {
    const email = document.getElementById("emailInput").value;
    console.log(email);
    return email;
}

function getPass() {
    const pass = document.getElementById("passInput").value;
    console.log(pass);
    return pass;
}

function getAddress() {
    const address = document.getElementById("addressInput").value;
    console.log(address);
    return address;
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        const name = getName();
        const email = getEmail();
        const pass = getPass();
        const address = getAddress();
    
        document.getElementById("start").textContent = `${name}`;
        document.getElementsByClassName("signin")[0].style.marginTop = "-300px";
        document.querySelector(".n").textContent = `Name: ${name}`;
        document.querySelector(".ad").textContent = `Address: ${address}`;
        document.querySelector(".em").textContent = `Email: ${email}`;
        document.querySelector(".mad").textContent = `${address}`;

        updateCartList();
    });
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("close").addEventListener("click", function() {
        document.getElementsByClassName("signin")[0].style.marginTop = "-300px"; 
    });
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wish").addEventListener("click", function() {
        document.getElementsByClassName("favorites")[0].style.marginTop = "20px"; 
    });
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("favclose").addEventListener("click", function() {
        document.getElementsByClassName("favorites")[0].style.marginTop = "-500px"; 
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");

    favoriteIcons.forEach(function (icon) {
        icon.addEventListener("click", function (event) {
            const selectedCard = this.closest("#card");

            const cardTitle = selectedCard.querySelector("h3").textContent;

            console.log("Selected card:", cardTitle);

        });
    });
});




const favorites = [];

        window.addEventListener("DOMContentLoaded", function () {
            const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");

            favoriteIcons.forEach(function (icon) {
                icon.addEventListener("click", function (event) {
                    const selectedCard = this.closest("#card");

                    const cardTitle = selectedCard.querySelector("h3").textContent;

                    if (!favorites.includes(cardTitle)) {
                        favorites.push(cardTitle);
                        updateFavoritesList();
                    }
                });
            });
        });

        window.addEventListener("DOMContentLoaded", function () {
            const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");
        
            favoriteIcons.forEach(function (icon) {
                icon.addEventListener("click", function (event) {
                    const selectedCard = this.closest("#icard");
        
                    const cardTitle = selectedCard.querySelector("h3").textContent;
        
                    console.log("Selected card:", cardTitle);
        
                });
            });
        });
        
        
        
        

        
                window.addEventListener("DOMContentLoaded", function () {
                    const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");
        
                    favoriteIcons.forEach(function (icon) {
                        icon.addEventListener("click", function (event) {
                            const selectedCard = this.closest("#icard");
        
                            const cardTitle = selectedCard.querySelector("h3").textContent;
        
                            if (!favorites.includes(cardTitle)) {
                                favorites.push(cardTitle);
                                updateFavoritesList();
                            }
                        });
                    });
                });        

                window.addEventListener("DOMContentLoaded", function () {
                    const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");
                
                    favoriteIcons.forEach(function (icon) {
                        icon.addEventListener("click", function (event) {
                            const selectedCard = this.closest("#ecard");
                
                            const cardTitle = selectedCard.querySelector("h3").textContent;
                
                            console.log("Selected card:", cardTitle);
                
                        });
                    });
                });
                
                
                
                
        
                
                        window.addEventListener("DOMContentLoaded", function () {
                            const favoriteIcons = document.querySelectorAll(".material-symbols-outlined");
                
                            favoriteIcons.forEach(function (icon) {
                                icon.addEventListener("click", function (event) {
                                    const selectedCard = this.closest("#ecard");
                
                                    const cardTitle = selectedCard.querySelector("h3").textContent;
                
                                    if (!favorites.includes(cardTitle)) {
                                        favorites.push(cardTitle);
                                        updateFavoritesList();
                                    }
                                });
                            });
                        }); 
                
        function updateFavoritesList() {
            const favoritesList = document.getElementById("favoritesList");
            favoritesList.innerHTML = ""; 

            favorites.forEach(function (favorite) {
                const listItem = document.createElement("li");
                listItem.textContent = favorite;
                favoritesList.appendChild(listItem); 
            });
        }

 
        


const cart = [];

function updateCartList() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; 

    cart.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(listItem);
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#card"); 

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;
                
                const priceText = selectedCard.querySelector("p").innerText;
                const price = parseInt(priceText.match(/\d+/)[0]);

                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                } else {
                    alert(cardTitle + " is already in the cart.");
                }
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#icard"); 

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;
                
                const priceText = selectedCard.querySelector("p").innerText;
                const price = parseInt(priceText.match(/\d+/)[0]);

                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                } else {
                    alert(cardTitle + " is already in the cart.");
                }
            }
        });
    });
});


window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#ecard");

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;

                const priceText = selectedCard.querySelector("p")?.innerText || "₹0"; 
                const price = parseInt(priceText.match(/\d+/)[0]); 

                
                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                } else {
                    alert(cardTitle + " is already in the cart.");
                }
            }
        });
    });
});


function updateCartList() {
    const cartList = document.getElementById("cartList");
    const orderButton = document.querySelector(".obtn");
    cartList.innerHTML = ""; 

    let totalPrice = 0;

    cart.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(listItem);
        
        totalPrice += item.price;
    });

    orderButton.innerHTML = `Order Now (₹${totalPrice})`;
    document.querySelector(".tot").innerHTML = `Total price: ₹<span id="totalPrice">${totalPrice}</span>`;
}

window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#card"); 

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;
                
                const priceText = selectedCard.querySelector("p").innerText;
                const price = parseInt(priceText.match(/\d+/)[0]);

                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                }
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#icard"); 

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;
                
                const priceText = selectedCard.querySelector("p").innerText;
                const price = parseInt(priceText.match(/\d+/)[0]);

                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                } 
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const addIcons = document.querySelectorAll(".fa-plus");

    addIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            const selectedCard = this.closest("#ecard"); 

            if (selectedCard) {
                const cardTitle = selectedCard.querySelector("h3").textContent;
                
                const priceText = selectedCard.querySelector("p").innerText;
                const price = parseInt(priceText.match(/\d+/)[0]);

                if (!cart.some(item => item.name === cardTitle)) {
                    cart.push({ name: cardTitle, price: price });
                    updateCartList();
                }
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.querySelector('.obtn');

    orderButton.addEventListener('click', function() {
        this.style.backgroundColor = 'green';
        this.innerText = 'Order Placed';
    });
});


