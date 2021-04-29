import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Lanche McDonald's",
          value: 35.00,
          category: "Comida",
          type: "withdraw",
          createdAt: new Date('2021-04-29 12:30:00')
        },
        {
          id: 2,
          title: "Notebook",
          value: 1500.00,
          category: "Vendas",
          type: "deposit",
          createdAt: new Date('2021-02-15 15:00:00')
        },
        {
          id: 3,
          title: "Desenvolvimento de Site",
          value: 5000.00,
          category: "Freelance",
          type: "deposit",
          createdAt: new Date('2021-02-19 19:10:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);