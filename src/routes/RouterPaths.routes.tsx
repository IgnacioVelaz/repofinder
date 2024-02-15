import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReposPage, HomePage } from '../pages';

const RouterPaths: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user">
        <Route path=":user" element={<ReposPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterPaths;
