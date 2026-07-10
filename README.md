# Rewards Tracking Application

A React-based Rewards Dashboard application that calculates customer reward points based on transaction amounts and displays monthly and total reward summaries.

## 🚀 Application Overview

This application implements a customer rewards program.

Reward calculation rules:

- 2 points for every dollar spent over $100
- 1 point for every dollar spent between $50 and $100
- No rewards for purchases below $50

Example:

Transaction Amount: $120

Calculation:

- $20 above $100 → 20 × 2 = 40 points
- $50 between $50-$100 → 50 × 1 = 50 points

Total Reward Points = **90**

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- Vite
- PropTypes
- Jest
- React Testing Library
- ESLint
- Prettier
- Husky
- GitHub Actions
- GitHub Pages

---

## 📁 Project Structure

```text
src/

├── components
│
│   ├── TransactionsTable
│   │       └── TransactionsTable.jsx
│   │
│   ├── MonthlyRewardsTable
│   │       └── MonthlyRewardsTable.jsx
│   │
│   ├── TotalRewardsTable
│   │       └── TotalRewardsTable.jsx
│   │
│   ├── LoadingIndicator
│   │       └── LoadingIndicator.jsx
│   │
│   └── ErrorBoundary
│           └── ErrorBoundary.jsx
│
├── data
│       └── transactions.js
│
├── utils
│       ├── rewardCalculator.js
│       ├── rewardAggregator.js
│       └── totalRewards.js
│
└── tests
        ├── rewardCalculator.test.js
        ├── monthlyRewards.test.js
        ├── LoadingIndicator.test.jsx
        ├── TransactionsTable.test.jsx
        ├── MonthlyRewardsTable.test.jsx
        └── TotalRewardsTable.test.jsx
```

---

## ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/uipowerranger-sys/rewards-tracking-app.git
```

Go to project:

```bash
cd rewards-tracking-app
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Application Locally

Start development server:

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

## 🧮 Features

### Transactions Dashboard

Displays:

- Customer name
- Transaction date
- Product details
- Amount spent

---

### Monthly Rewards

Calculates customer reward points grouped by:

- Customer
- Month
- Year

---

### Total Rewards

Shows accumulated reward points for every customer.

---

### Loading Handling

Displays loading indicator while rewards data is loading.

---

### Error Handling

Implemented React Error Boundary to gracefully handle runtime UI failures.

---

## 🧪 Testing

Testing framework:

- Jest
- React Testing Library

Run tests:

```bash
npm test
```

Implemented tests:

✔ Reward calculation unit tests

✔ Monthly aggregation tests

✔ Loading component tests

✔ Error handling tests

✔ Snapshot tests

<<<<<<< HEAD
=======

>>>>>>> 5c1e90746ca209e2b8017fbdd2076fec1b71bba4
Generate coverage:

```bash
npm run test:coverage
```

---

## 📸 Snapshot Testing

Snapshot coverage added for:

- TransactionsTable
- MonthlyRewardsTable
- TotalRewardsTable

Snapshots are stored in:

```text
src/tests/__snapshots__
```

---

## 🔍 Linting

Run ESLint:

```bash
npm run lint
```

---

## 🎨 Formatting

Run Prettier:

```bash
npm run format
```

---

## 🏗 Production Build

Create optimized build:

```bash
npm run build
```

Build output:

```text
dist/
```

---

## 🔄 CI/CD Pipeline

GitHub Actions workflow:

```text
.github/workflows/ci.yml
```

Pipeline executes:

1. Checkout code

2. Install dependencies

3. Run ESLint

4. Execute Jest tests

5. Generate coverage

6. Build application

7. Deploy to GitHub Pages

<<<<<<< HEAD
=======

>>>>>>> 5c1e90746ca209e2b8017fbdd2076fec1b71bba4
Pipeline runs on:

- Push
- Pull Request

Branches:

- main
- feature/rewards-app-implementation

---

## 🚀 Deployment

Application is deployed using:

GitHub Pages

Deployment branch:

```text
gh-pages
```

Public URL:

```text
https://uipowerranger-sys.github.io/rewards-tracking-app/
```

---

## 🌿 Git Workflow

Feature branch:

```text
feature/rewards-app-implementation
```

Workflow:

```text
feature branch

      ↓

Pull Request

      ↓

CI Validation

      ↓

Merge to main

      ↓

Automatic Deployment
```

---

## ✅ Completed Requirements

- React project structure
- setup.bat folder generation
- Reward calculation logic
- Monthly rewards aggregation
- Total rewards calculation
- PropTypes validation
- Loading state
- Error boundary
- Unit tests
- Snapshot tests
- ESLint
- Prettier
- Husky
- GitHub Actions CI/CD
- GitHub Pages deployment

---

## Author

Rewards Tracking Application Implementation
