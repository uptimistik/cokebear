# Telegram Mini App (Telegram web app) with Stars Payment Implementation

This project implements Telegram mini-app payment functionality using `twa-dev` and the `node-telegram-web-api`. The client-side and server-side are both required for full functionality.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **pnpm** (package manager)

If you don't have pnpm installed, you can install it via npm:

```bash
npm install -g pnpm
```

You will also need to get a Telegram Bot Token via **BotFather** on Telegram.

## Setup Instructions

### Client-Side Setup

1. **Navigate to the client directory:**
   In your terminal, move to the client directory where `BaseUrl.jsx` is located.

2. **Change the base URL:**
   In `BaseUrl.jsx`, update the `baseUrl` to point to your server:

   ```js
   baseUrl: "YOUR_HOST";
   ```

3. **Install dependencies:**
   Run the following command to install all necessary dependencies:

   ```bash
   pnpm install
   ```

4. **Start the client:**
   After installing dependencies, start the client by running:
   ```bash
   pnpm start
   ```

### Server-Side Setup

1. **Create a `.env` file:**
   In the server directory, create a `.env` file and add your Telegram bot token:

   ```env
   TELEGRAM_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
   ```

2. **Install dependencies:**
   Navigate to the server directory and install the dependencies using:

   ```bash
   pnpm install
   ```

3. **Start the server:**
   After installation, start the server by running:
   ```bash
   pnpm start
   ```

### Bot Token

To obtain your **Telegram Bot Token**, you need to chat with **BotFather** on Telegram:

1. Open Telegram and search for **BotFather**.
2. Send the `/newbot` command and follow the prompts to create your bot.
3. Once your bot is created, **BotFather** will provide you with the **Bot Token**. Use this token in your `.env` file for the server.

## Features

- Integration with Telegram Web App to allow users to make star payments.
- Uses `node-telegram-web-api` to interact with Telegram Bot API.
- The server will handle the API requests from the client and process payments.

## Troubleshooting

- Ensure the server and client are running simultaneously for the payment flow to work.
- If you face any issues with the Telegram bot, ensure the **Bot Token** is correct in your `.env` file.

## License

This project is licensed under the MIT License.
