# 🍺 e-Tavern

[![Inglês](https://img.shields.io/badge/Language-Inglês-darkred?style=for-the-badge)](README.md)

> ### A sua adega digital de bolso.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![UML](https://img.shields.io/badge/UML-Documentation-333333?style=for-the-badge&logo=uml&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-0.4.0--alpha-magenta?style=for-the-badge)

O **e-Tavern** é um catálogo digital especializado em bebidas, focado em oferecer uma experiência rica em informações para entusiastas. Mais do que um simples banco de dados, a plataforma reúne curiosidades, histórias de cervejarias e detalhes técnicos (como ABV e IBU), servindo como um guia definitivo para quem deseja explorar o universo das bebidas com profundidade.

---

## 🎯 Objetivo

Transformar a busca por bebidas em uma jornada de descoberta, conectando o usuário final às histórias e características técnicas de cada rótulo de forma simples, intuitiva e moderna.

## ✨ Funcionalidades

- **Catálogo Inteligente:** Explore bebidas por estilos, famílias e cervejarias.
- **Ficha Técnica Detalhada:** Informações de amargor (IBU), teor alcoólico (ABV) e notas de sabor.
- **Curadoria e Histórias:** Conteúdo rico sobre a origem de cada rótulo e curiosidades do mestre-cervejeiro.
- **Filtros Avançados:** Busca otimizada para encontrar a bebida ideal para cada momento.

## 🏗️ Arquitetura do Sistema

O projeto utiliza uma arquitetura distribuída e escalável, preparada para o ambiente de nuvem:

- **Frontend:** Next.js (Interface reativa e otimizada para SEO).
- **Backend:** Node.js com Express (API REST segura e eficiente).
- **Banco de Dados:** MySQL hospedado no Google Cloud SQL.
- **Infraestrutura:** Docker & Cloud Run (Preparado para escala global).

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Google Cloud Platform](https://cloud.google.com/)
- [PlantUML](https://plantuml.com/) (Documentação de Arquitetura)

## 🛣️ Roadmap de Desenvolvimento

Aqui estão as etapas de evolução do **e-Tavern**.

![Fase 1](https://img.shields.io/badge/Fase_1-Planejamento_&_Arquitetura-blue?style=flat-square)

- [x] Definição da Identidade e Nome (`e-Tavern`).
- [x] Modelagem do Banco de Dados (MySQL).
- [x] Criação dos Diagramas de Sequência (PlantUML).
- [x] Estruturação do README e Repositório.

![Fase 2](https://img.shields.io/badge/Fase_2-Desenvolvimento_Backend-orange?style=flat-square)

- [x] Configuração do servidor Express e conexão Cloud SQL.
- [x] Criação das rotas da API (CRUD de rótulos).
- [x] Implementação de variáveis de ambiente (`.env`).
- [x] Testes de requisição (`Postman`).

![Fase 3](https://img.shields.io/badge/Fase_3-Interface_&_UX-yellow?style=flat-square)

- [ ] Setup do projeto Next.js.
- [ ] Desenvolvimento da página de busca e filtros.
- [ ] Consumo da API no Frontend.
- [ ] Design responsivo (Mobile First).

![Fase 4](https://img.shields.io/badge/Fase_4-Deploy_&_Cloud-green?style=flat-square)

- [ ] Dockerização das aplicações (Dockerfiles).
- [ ] Deploy no Google Cloud Run.
- [ ] Configuração de domínio e SSL.
- [ ] Lançamento da versão Beta.
