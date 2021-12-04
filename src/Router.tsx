import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Root from './container/root';
import FourToFour from './container/404';
import Info from './container/info';
import Resume from './container/resume';
import SourceComponent from './container/SourceComponent';
import { ROUTE } from './routers'

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTE.root} element={<Root />} />
        <Route path={ROUTE.info} element={<Info />} />
        <Route path={ROUTE.resume} element={<Resume />} />
        <Route path={ROUTE.source} element={<SourceComponent />} />
        <Route path="*" element={<FourToFour />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
