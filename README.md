# 🚀 RazzZ Panel - Modern Hosting Management Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A comprehensive **SaaS alternative to WHMCS** for managing game servers, bot hosting, and web hosting services. Built with modern technologies and designed for scalability.

## ✨ Features

### 🔐 Authentication & User Management
- **Multi-factor Authentication**
  - Google OAuth + Email/Password login
  - Role-based access control (Admin, Customer)
- **User Profiles**
  - Secure storage of personal details
  - Activity logging and session management

### 🎮 Server Hosting
- **Game Servers**
  - SAMP, OMP, Fivem, MTA support
  - Real-time monitoring and statistics
- **Bot Hosting**
  - Discord.js, Python, and more
  - Easy deployment and management
- **Web Hosting**
  - Node.js, Python, PHP support
  - One-click application deployment

### ⚙️ Server Management
- **Powerful Control Panel**
  - Start/Stop/Restart servers
  - File manager with code editor
  - Real-time console access
- **Resource Monitoring**
  - CPU, RAM, Disk, and Network usage
  - Historical performance metrics
  - Automated resource scaling

### 💰 Billing & Payments
- **Payment Gateways**
  - Razorpay / Cashfree / Stripe integration
  - Secure payment processing
- **Flexible Billing**
  - Subscription & one-time payments
  - Automated invoicing
  - Discount and coupon system

## 🛠️ Tech Stack

- **Frontend**: Next.js (React + TypeScript + Tailwind CSS)
- **Backend**: NestJS (Clean Architecture + Modular Monolith)
- **Database**: MongoDB (with Mongoose)
- **Hosting Panel**: Pterodactyl Panel (API + WebSocket)
- **Queue Jobs**: Redis + BullMQ (for provisioning, webhooks)
- **Payments**: Razorpay / Cashfree / Stripe
- **Deployment**: Docker + VPS/Dedicated Servers

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 6.0+
- Docker (optional)
- Pterodactyl Panel (for server management)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eDenxGt/razzz-panel.git
   cd razzz-panel
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd client && npm install

   # Install backend dependencies
   cd ../api && npm install
   ```

3. Configure environment variables:
   ```bash
   # Copy example .env files
   cp .env.example .env
   ```
   
   Edit the `.env` file with your configuration:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/razzz_panel
   
   # JWT
   JWT_SECRET=your_secure_jwt_secret
   
   # Payments
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   
   # Pterodactyl
   PTERODACTYL_URL=your_panel_url
   PTERODACTYL_APPLICATION_API_KEY=your_application_api_key
   PTERODACTYL_CLIENT_API_KEY=your_client_api_key
   ```

4. Start development servers:
   ```bash
   # Start backend
   cd api && npm run start:dev
   
   # Start frontend (in a new terminal)
   cd ../client && npm run dev
   ```

## 📂 Project Structure

```
razzz-panel/
├── api/                    # Backend (NestJS)
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── common/        # Shared modules, guards, pipes
│   │   ├── database/      # Database schemas and models
│   │   ├── modules/       # Feature modules
│   │   └── main.ts        # Application entry point
│   └── test/              # Backend tests
│
└── client/                # Frontend (Next.js)
    ├── public/            # Static files
    └── src/               # Source files
        ├── app/           # Next.js app router
        ├── components/    # Reusable components
        ├── lib/           # Utility functions
        └── styles/        # Global styles
```

## 📌 Roadmap

- [ ] Support Ticket System
- [ ] Notifications & Email Alerts
- [ ] Transaction Logs for Gateways
- [ ] Multi-language Support
- [ ] Enhanced Security Features
- [ ] Mobile Application

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

- **Eden** - [GitHub](https://github.com/eDenxGt)

## 📧 Contact

For support or inquiries, please contact support@razzzpanel.com

care@thesleepcompany.in