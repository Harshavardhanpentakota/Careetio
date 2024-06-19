import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Type assertion to ensure TypeScript knows 'root' is not null
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App isSignedin={false} />
    </Router>
  </React.StrictMode>,
  rootElement
);
