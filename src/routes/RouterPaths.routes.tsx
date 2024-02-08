import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorPage, HomePage } from '../pages';

const RouterPaths: FC = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author">
          <Route path=":author" element={<AuthorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

export default RouterPaths;
