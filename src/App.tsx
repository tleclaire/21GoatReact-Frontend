import React from "react";
import { Route } from "react-router";
import {Layout} from "./components/layout";
import { FC } from 'react';
import { Home } from "./components/home";
import { Game } from "./components/game";

const App: FC = () => {
  return (
      <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
      </Layout>
  );
};
export default App;
