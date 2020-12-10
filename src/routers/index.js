import React from 'react';
// importando componentes de rota
import { Switch } from 'react-router-dom';
import MyRoute from './myRoute';

// recebendo as páginas
import Consultas from '../pages/Consultas';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Consultas} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
