import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoList from './TodoList1';
import CoinTracker from './CoinTracker';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <TodoList />
    // <CoinTracker />
    <Movie />
);
