import React from 'react';
import ReactDOM from 'react-dom/client';
import '98.css';
import '@styles/main.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/auth';
import { Chat } from './pages/chat';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
