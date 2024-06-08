import React from 'react'
import ReactDOM from 'react-dom/client'; 
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Records from './Records';
import RecordDetailPage from './RecordDetailPage';
import './index.css'
import Layout from './Layout';
import Home from './Home';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
           <Route path="records" element={<Records/>}/>
            <Route path="records/:master_id" element={<RecordDetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)