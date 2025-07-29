# 🌦️ Clima Agora - Aplicação Web com React e OpenWeatherMap

Este projeto é uma aplicação web desenvolvida com **React.js** que consome a **API pública do OpenWeatherMap** para exibir informações meteorológicas atualizadas. O usuário pode pesquisar por qualquer cidade do mundo e obter:

- A **previsão atual** do tempo (temperatura, descrição, ícone do clima);
- A **previsão para os próximos 5 dias**, com dados resumidos diários baseados na API de previsão de 3 em 3 horas.

Disponível em: https://clima-agora-psi.vercel.app/

## 🛠️ Tecnologias Utilizadas

- **React.js** — Criação da interface com componentes reutilizáveis e estado reativo;
- **Axios** — Requisições HTTP às APIs REST da OpenWeatherMap;
- **OpenWeatherMap API**:
  - `/weather` para o clima atual;
  - `/forecast` para a previsão dos próximos 5 dias;
- **CSS Modules** — Estilização modular e isolada por componente.

## 📌 Funcionalidades

- Campo de busca com input controlado via `useRef`;
- Validação de resposta da API e tratamento de erros com `try...catch`;
- Exibição condicional de componentes para evitar renderizações com dados incompletos;
- Conversão de timestamps da API para datas legíveis (ex: `new Date(dt * 1000)`);
- Renderização de ícones dinâmicos com base no código de clima retornado pela API.

## 🚀 Objetivo do Projeto

Este projeto tem como objetivo praticar o consumo de APIs REST com React e a manipulação de dados assíncronos. Ele também demonstra boas práticas de:

- **Componentização**;
- **Interação com o usuário**;
- **Tratamento e exibição de dados externos**.

É um exemplo de aplicação real e funcional, ideal para projetos de portfólio com foco em desenvolvimento front-end moderno.
