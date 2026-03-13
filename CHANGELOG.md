# 🍺 eTavern - Registro de Alterações (Changelog)

Todos os marcos importantes e mudanças técnicas deste projeto são documentados aqui.

![Version](https://img.shields.io/badge/version-0.2.0-magenta?style=for-the-badge)
![Status](https://img.shields.io/badge/status-em_desenvolvimento-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

## 🚀 [0.2.0] - 2026-03-13

### 🏗️ Backend (Branch: `feature/backend-setup`)

- **Boilerplate:** Configuração inicial de ambiente com Node.js, TypeScript e Sequelize.
- **CRUD Completo:** Implementação das operações básicas para `Styles`, `Breweries` e `Labels`.
- **Integridade Relacional:** Configuração de Chaves Estrangeiras vinculando Rótulos a Estilos e Cervejarias.
- **Consultas Avançadas:** Implementação de `Eager Loading` para retornar JSONs aninhados com informações completas de rótulo, estilo e cervejaria.
- **Ajustes Técnicos:** - Configuração de `timestamps` automáticos para compatibilidade com MySQL Workbench.
  - Implementação de trava lógica para evitar duplicidade de rótulos (Status 409).

---

## 🎨 [0.1.1] - 2026-03-11

### 🖥️ Frontend (Next.js)

- **Setup Inicial:** Inicialização do projeto utilizando **Next.js**.
- **Design System:** Definição da paleta de cores oficial do eTavern.
- **Componentização:** Desenvolvimento das versões iniciais do `Header` e `Footer`.
- **Nota:** Estruturas marcadas para refatoração futura conforme evolução da integração.

---

## 🚀 [0.1.0] - 2026-03-05

### 📐 Planejamento & Documentação

- **Modelagem:** Criação dos diagramas de banco de dados (DER) e fluxos em **PlantUML** (`.puml`) na pasta `/docs`.
- **Project Base:** Elaboração do `README.md` com a visão geral do ecossistema eTavern.

---
