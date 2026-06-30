// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

const portfolioTable = document.getElementById("portfolioTable");
const addPortfolioBtn = document.getElementById("addPortfolioBtn");
const exportBtn = document.getElementById("exportBtn");

// Load portfolio when page opens
window.addEventListener("DOMContentLoaded", displayPortfolio);

// Add Asset
addPortfolioBtn.addEventListener("click", () => {

    const coin = document.getElementById("coinName").value.trim();
    const amount = document.getElementById("coinAmount").value;

    if (!coin || !amount) {
        alert("Please enter all fields.");
        return;
    }

    let portfolio =
        JSON.parse(localStorage.getItem("portfolio")) || [];

    portfolio.push({
        coin: coin,
        amount: amount
    });

    localStorage.setItem(
        "portfolio",
        JSON.stringify(portfolio)
    );

    document.getElementById("coinName").value = "";
    document.getElementById("coinAmount").value = "";

    displayPortfolio();
});

// Display Portfolio
function displayPortfolio() {

    portfolioTable.innerHTML = "";

    let portfolio =
        JSON.parse(localStorage.getItem("portfolio")) || [];

    if (portfolio.length === 0) {

        portfolioTable.innerHTML = `
            <tr>
                <td colspan="3">
                    No assets in portfolio.
                </td>
            </tr>
        `;

        return;
    }

    portfolio.forEach((asset, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${asset.coin}</td>

            <td>${asset.amount}</td>

            <td>
                <button class="remove-btn"
                        onclick="deleteAsset(${index})">
                    <i class="fa-solid fa-trash"></i> Remove
                </button>
            </td>
        `;

        portfolioTable.appendChild(row);
    });
}

// Delete Asset
function deleteAsset(index) {

    let portfolio =
        JSON.parse(localStorage.getItem("portfolio")) || [];

    portfolio.splice(index, 1);

    localStorage.setItem(
        "portfolio",
        JSON.stringify(portfolio)
    );

    displayPortfolio();
}

// Export Portfolio
exportBtn.addEventListener("click", () => {

    let portfolio =
        JSON.parse(localStorage.getItem("portfolio")) || [];

    if (portfolio.length === 0) {
        alert("Portfolio is empty!");
        return;
    }

    let csv = "Coin,Amount\n";

    portfolio.forEach(asset => {
        csv += `${asset.coin},${asset.amount}\n`;
    });

    const blob = new Blob([csv], {
        type: "text/csv"
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "CryptoVault_Portfolio.csv";

    a.click();

    window.URL.revokeObjectURL(url);
});