// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

const newsContainer = document.getElementById("newsContainer");

// Crypto News Data
const cryptoNews = [
    {
        title: "Bitcoin Surges Past Major Resistance",
        description: "Bitcoin has broken through a major resistance level, showing strong bullish momentum in the crypto market.",
        link: "https://www.coindesk.com/"
    },

    {
        title: "Ethereum ETF Gains Popularity",
        description: "Institutional investors are increasingly investing in Ethereum ETFs, boosting market confidence.",
        link: "https://cointelegraph.com/"
    },

    {
        title: "Solana Ecosystem Expands Rapidly",
        description: "New DeFi and NFT projects are launching on the Solana blockchain, increasing ecosystem growth.",
        link: "https://decrypt.co/"
    },

    {
        title: "Crypto Market Shows Strong Recovery",
        description: "Major cryptocurrencies are recovering after recent market corrections, attracting new investors.",
        link: "https://www.coindesk.com/"
    }
];

// Load News
function loadNews() {

    newsContainer.innerHTML = "";

    cryptoNews.forEach(news => {

        const card = document.createElement("div");

        card.classList.add("news-card");

        card.innerHTML = `
            <h3>${news.title}</h3>

            <p>${news.description}</p>

            <a href="${news.link}"
               target="_blank"
               class="read-more-btn">
               Read More
            </a>
        `;

        newsContainer.appendChild(card);
    });
}

loadNews();