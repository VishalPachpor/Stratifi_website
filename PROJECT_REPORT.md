# Project Report: Stratifi

## 1. Project Overview

Stratifi is a modern, AI-powered application designed to interact with on-chain data and execute transactions. It leverages the Coinbase AgentKit to create AI agents that can perform tasks on the blockchain, such as managing investment portfolios, conducting research, and executing trading strategies. The application is built on the Next.js framework, providing a fast and responsive user experience.

Authentication is handled by Privy, allowing users to securely connect their wallets and interact with the application. The database is managed by Prisma, ensuring reliable and efficient data storage. The application's core functionality revolves around its AI agents, which can be customized to perform a wide range of on-chain activities.

## 2. Technical Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Privy](https://www.privy.io/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **AI Agent Framework**: [Coinbase AgentKit](https://github.com/coinbase/agentkit)
- **Web3 Libraries**: [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/), [viem](https://viem.sh/), [wagmi](https://wagmi.sh/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/)

## 3. Project Structure

The project follows a standard Next.js `app` directory structure. Here are the key directories and their purposes:

- **`/app`**: Contains the core application logic, including pages, layouts, and API routes.
  - **`/app/agent`**: Handles the AI agent's configuration and interaction logic.
  - **`/app/api`**: Defines the API endpoints for the application, including the agent's backend.
  - **`/app/portfolio`**: Contains the UI and logic for displaying and managing user portfolios.
  - **`/app/research`**: Provides tools and interfaces for conducting on-chain research.
  - **`/app/strategy`**: Allows users to create and manage investment strategies.
- **`/components`**: Contains reusable React components used throughout the application.
- **`/hooks`**: Contains custom React hooks for managing state and side effects.
- **`/lib`**: Contains utility functions and helper scripts.
- **`/prisma`**: Contains the Prisma schema and migration files for the database.
- **`/public`**: Contains static assets like images and fonts.

## 4. Core Features

Based on the project structure, Stratifi offers the following core features:

- **AI-Powered Agents**: The application's main feature is its ability to create and deploy AI agents that can interact with the blockchain. These agents can be configured to perform a variety of tasks, such as automated trading, portfolio rebalancing, and data analysis.
- **Portfolio Management**: Users can connect their wallets to view and manage their on-chain assets. The application provides a dashboard for tracking portfolio performance and making investment decisions.
- **On-Chain Research**: The research section provides tools for analyzing on-chain data, such as token prices, transaction volumes, and smart contract activity. This allows users to make informed decisions about their investments.
- **Strategy Creation**: Users can create and backtest investment strategies using the application's strategy builder. This feature allows users to define rules and conditions for their AI agents to follow.
- **Secure Authentication**: Privy integration ensures that users can securely connect their wallets and interact with the application without compromising their private keys.

## 5. Getting Started

To run the project locally, follow these steps:

1.  **Install Dependencies**:

    ```sh
    bun install
    ```

2.  **Configure Environment Variables**:

    Rename the `.env.example` file to `.env` and fill in the required API keys and configuration settings.

3.  **Run the Development Server**:

    ```sh
    bun run dev
    ```

4.  **Open in Browser**:

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.


This report provides a comprehensive overview of the Stratifi application. For more detailed information, please refer to the source code and the documentation for the technologies used.
