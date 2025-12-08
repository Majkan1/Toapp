import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/*import App from './App.jsx'*/}
import TodoApp from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoApp/>
  </StrictMode>
)
