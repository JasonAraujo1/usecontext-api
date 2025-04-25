# useContext API Example

Este projeto demonstra o uso da API `useContext` do React para gerenciar estado global em uma aplicação. A API `useContext` permite compartilhar dados entre componentes sem a necessidade de passar props manualmente por cada nível da árvore de componentes.

## Funcionalidades

- Gerenciamento de estado global utilizando `useContext`.
- Compartilhamento de dados entre componentes de forma eficiente.
- Exemplo prático de como evitar o "prop drilling".

## Estrutura do Projeto

```
/src
    /components
        - ComponentA.js
        - ComponentB.js
        - ComponentC.js
    /context
        - AppContext.js
    - App.js
    - index.js
```

### Principais Arquivos

- **AppContext.js**: Define o contexto e o provedor para encapsular os componentes que precisam acessar o estado global.
- **ComponentA, ComponentB, ComponentC**: Exemplos de componentes que consomem o contexto.
- **App.js**: Configura o provedor do contexto e organiza os componentes.

## Como Executar

1. Clone o repositório:
     ```bash
     git clone <url-do-repositorio>
     ```
2. Instale as dependências:
     ```bash
     npm install
     ```
3. Inicie o servidor de desenvolvimento:
     ```bash
     npm start
     ```

## Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- CSS (opcional)

## Como Funciona

1. O contexto é criado em `AppContext.js` utilizando `React.createContext`.
2. O provedor do contexto encapsula os componentes no arquivo `App.js`.
3. Os componentes consomem os dados do contexto utilizando o hook `useContext`.

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
