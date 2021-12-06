import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import DesignList from './DesignList';
import DesignEdit from './DesignEdit';

const Dashboard = (props) => {
  const match = useMatch();

  return (
    <Routes>
      <Route path={match.path} element={<DesignList />} exact={true} />
      <Route path={`${match.path}/new`} element={<DesignEdit />} exact={true} />
      <Route path={`${match.path}/edit/:designId`} element={<DesignEdit />} exact={true} />
    </Routes>
  );
};

export default Dashboard;
