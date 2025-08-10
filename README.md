# Raiqa Health Assignment

A simple **Next.js** application built as part of the Raiqa Health coding assignment.  
The app allows users to increment/decrement a counter, add values to a list, sort the list, and reset it — with bonus features implemented for a better user experience.

---

## 🚀 Live Demo
[Vercel Deployment](https://raiqa-health-assignment-ebon.vercel.app)

## 📂 GitHub Repository
[View on GitHub](https://github.com/nikithamannam/raiqa_health_assignment)

---

## ✨ Features

### Counter
- Increment (`+`) and decrement (`-`) buttons  
- Counter never goes below zero  
- **Add to List** button:
  - Adds the current counter value (only if > 0)
  - Resets counter to 0 after adding

### List View
- Displays all added numbers
- Optional duplicate prevention
- Sort toggle:
  - Switch between ascending / descending order
- Highlights:
  - **Highest value** in green background
  - **Lowest value** in yellow background

### Additional Features
- Reset button to clear the list
- Data persistence using `localStorage`
- Responsive and clean UI design

---

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Custom CSS
- **State Management:** React `useState`
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚙️ Getting Started

# 1️⃣ Clone the repository
git clone https://github.com/nikithamannam/raiqa_health_assignment.git
cd raiqa_health_assignment

# 2️⃣ Install dependencies
yarn install
or
npm install

# 3️⃣ Run the development server
yarn dev
App will be available at http://localhost:3000

# 4️⃣ Build for production
yarn build

