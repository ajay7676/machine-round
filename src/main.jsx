import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
// import store from './components/store/store.jsx';
// import store from './app/store.js'
import sagastore from './app/sagastore.js';

createRoot(document.getElementById('root')).render(
  // <Provider  store={store}>
  // Sage Store 
  <Provider  store={sagastore}>
     <StrictMode>
      <App />
    </StrictMode>
  </Provider>
 
)
