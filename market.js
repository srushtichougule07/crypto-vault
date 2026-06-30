// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

const coinTable = document.getElementById("coinTable");

async function fetchCoins() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );

        const data = await response.json();

        coinTable.innerHTML = "";

        data.forEach(coin => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>
                    <img src="${coin.image}" width="25">
                    ${coin.name}
                </td>

                <td>${coin.symbol.toUpperCase()}</td>

                <td>$${coin.current_price.toLocaleString()}</td>

                <td style="color:${coin.price_change_percentage_24h >= 0 ? 'lime' : 'red'}">
                    ${coin.price_change_percentage_24h.toFixed(2)}%
                </td>

                <td>$${coin.market_cap.toLocaleString()}</td>

                <td>
                    <button onclick="addToWatchlist('${coin.name}')">
                        ⭐
                    </button>
                </td>
            `;

            coinTable.appendChild(row);
        });

    } catch (error) {

        console.log("Error fetching market data:", error);

        coinTable.innerHTML = `
            <tr>
                <td colspan="6">
                    Unable to load market data.
                </td>
            </tr>
        `;
    }
}

function addToWatchlist(coinName) {

    let watchlist =
        JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!watchlist.includes(coinName)) {

        watchlist.push(coinName);

        localStorage.setItem(
            "watchlist",
            JSON.stringify(watchlist)
        );

        alert(`${coinName} added to Watchlist`);
    }
}

fetchCoins();
setInterval(fetchCoins, 60000);