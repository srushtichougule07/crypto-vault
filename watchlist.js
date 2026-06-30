// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

const watchlistTable =
    document.getElementById("watchlistTable");

window.addEventListener(
    "DOMContentLoaded",
    displayWatchlist
);

function displayWatchlist() {

    watchlistTable.innerHTML = "";

    let coins =
        JSON.parse(localStorage.getItem("watchlist")) || [];

    if (coins.length === 0) {

        watchlistTable.innerHTML = `
            <tr>
                <td colspan="2">
                    No coins in watchlist.
                </td>
            </tr>
        `;

        return;
    }

    coins.forEach(coin => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${coin}</td>

           
            <td>
    <button class="remove-btn"
            onclick="removeCoin('${coin}')">
        <i class="fa-solid fa-trash"></i> Remove
    </button>
</td>
        `;

        watchlistTable.appendChild(row);
    });
}

function removeCoin(coinName) {

    let coins =
        JSON.parse(localStorage.getItem("watchlist")) || [];

    coins = coins.filter(
        coin => coin !== coinName
    );

    localStorage.setItem(
        "watchlist",
        JSON.stringify(coins)
    );

    displayWatchlist();
}