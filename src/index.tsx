import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { StyleProvider } from '@ant-design/cssinjs';
import ReactDOM from 'react-dom/client';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StyleProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/sign-in' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StyleProvider>
);
