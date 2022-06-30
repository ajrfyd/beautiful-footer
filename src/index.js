import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.querySelector('#root');
const dom = ReactDom.createRoot(root)

dom.render(
  <App />
);