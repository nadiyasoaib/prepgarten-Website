const fruitData = {
    apple: {
        description: "Apples are sweet, edible fruits produced by an apple tree.",
        image: "images/apple.jpeg"
    },
    banana: {
        description: "Bananas are elongated, edible fruits produced by several kinds of large herbaceous flowering plants.",
        image: "images/banana.jpeg"
    },
    orange: {
        description: "Oranges are round, citrus fruits with a tough orange rind.",
        image: "images/orange.jpeg"
    },
    strawberry: {
        description: "Strawberries are bright red, juicy, and sweet fruits with tiny seeds on the outside.",
        image: "images/strawberry.jpeg"
    },
    mango: {
        description: "Mangoes are tropical stone fruits with juicy, sweet, and vibrant orange flesh.",
        image: "images/mango.jpeg"
    },
    pineapple: {
        description: "Pineapples are tropical fruits with a tough, spiky exterior and sweet, tangy yellow flesh inside.",
        image: "images/pineapple.jpeg"
    },
    grapes: {
        description: "Grapes are small, round, and juicy fruits that grow in clusters on vines.",
        image: "images/grapes.jpeg"
    },
    watermelon: {
        description: "Watermelons are large, green fruits with sweet, juicy red flesh and black seeds.",
        image: "images/watermelon.jpeg"
    },
    cherry: {
        description: "Cherries are small, round fruits with a pit in the center, typically red or black in color.",
        image: "images/cherry.jpeg"
    },
    kiwi: {
        description: "Kiwis are small, brown fruits with fuzzy skin and bright green flesh with tiny black seeds.",
        image: "images/kiwi.jpeg"
    },
    blueberry: {
        description: "Blueberries are small, round, and blue-purple fruits with a sweet and slightly tart flavor.",
        image: "images/blueberry.jpeg"
    },
    peach: {
        description: "Peaches are soft, fuzzy fruits with sweet, juicy yellow or white flesh and a pit in the center.",
        image: "images/peach.jpeg"
    }
};

function identifyFruit() {
    const fruitSelect = document.getElementById('fruitSelect').value.toLowerCase();
    const fruitInfo = document.getElementById('fruitInfo');

    if (fruitData[fruitSelect]) {
        fruitInfo.innerHTML = `
            <h2>${fruitSelect.charAt(0).toUpperCase() + fruitSelect.slice(1)}</h2>
            <p>${fruitData[fruitSelect].description}</p>
            <img src="${fruitData[fruitSelect].image}" alt="${fruitSelect}">
        `;
        fruitInfo.style.opacity = 0;  // Reset opacity
        fruitInfo.style.transform = "translateY(20px)";  // Reset position

        // Trigger reflow to restart animation
        void fruitInfo.offsetWidth;

        // Apply animation styles
        fruitInfo.style.opacity = 1;
        fruitInfo.style.transform = "translateY(0)";
        
    } else {
        fruitInfo.innerHTML = "<p>Fruit not found. Please try another name.</p>";
    }
}
