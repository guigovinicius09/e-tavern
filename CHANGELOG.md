# 🍺 eTavern - Changelog

All the important milestones and technical changes of this project are documented here.

![Version](https://img.shields.io/badge/version-0.3.0-magenta?style=for-the-badge)
![Status](https://img.shields.io/badge/status-in_development-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

# Changelog

## [0.3.0] - 2026-03-25

### Added

- Integrated new social media links in Footer (GitHub, LinkedIn, Instagram).
- Implemented "Quick Links" section in Footer for enhanced navigation.

### Changed

- Refactored Header and Footer layout for better brand visual consistency.

---

## [0.2.0] - 2026-03-13

### 🏗️ Backend (Branch: `feature/backend-setup`)

- **Boilerplate:** Initial setup of the development environment with Node.js, TypeScript, and Sequelize.
- **CRUD:** Implementation of basic operations for `Styles`, `Breweries`, and `Labels`.
- **Relational Integrity:** Configuring Foreign Keys by Linking Labels to Styles and Breweries.
- **Advanced Queries:** Implementation of `Eager Loading` to return nested JSONs with complete label, style, and brewery information.
- **Technical Adjustments:** - Automatic timestamp configuration for compatibility with MySQL Workbench.
  - Implementation of a logical lock to prevent duplicate labels (Status 409).

---

## 🎨 [0.1.1] - 2026-03-11

### 🖥️ Frontend (Next.js)

- **Initial Setup:** Initializing the project using **Next.js**.
- **Design System:** Definition of the official eTavern color palette.
- **Componentization:** Development of the initial versions of `Header` and `Footer`.
  `Structures marked for future refactoring as integration progresses.`

---

## 🚀 [0.1.0] - 2026-03-05

### 📐 Planejamento & Documentação

- **Modeling:** Creation of database diagrams (ERD) and flows in **PlantUML** (`.puml`) in the `/docs` folder.
- **Project Base:** Creating a `README.md` file with an overview of the eTavern ecosystem.

---
