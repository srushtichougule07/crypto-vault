# CryptoVault

CryptoVault is a static cryptocurrency dashboard mini project built with HTML, CSS, and JavaScript only.

## How to run

Open `index.html` directly in any modern browser. No backend, build command, package install, API key, or server is required.

## Features

- CryptoVault home page and responsive navigation
- Login and signup UI backed by `localStorage`
- Dashboard with total portfolio value, coin cards, price changes, and a canvas chart
- Markets page with popular crypto data and live search/filter
- Portfolio page to add and remove holdings with automatic value calculation
- History page showing locally stored transactions
- Mock crypto market data that works offline

## Demo account behavior

Create any account from the signup form. Each account gets its own portfolio and transaction history in browser localStorage. Logging out returns the app to guest/demo mode.

## Project structure

```text
CryptoVault/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── cryptoAPI.js
│   ├── dashboard.js
│   ├── markets.js
│   ├── portfolio.js
│   ├── history.js
│   ├── ui.js
│   └── staticPage.js
├── assets/
│   └── logo.svg
└── README.md
```
