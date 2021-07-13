import React, { useEffect, useState } from 'react';
import { Route } from './utils/models'
import api  from './utils/api'
import logo from './logo.svg';
import './App.css';

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect( () => {
    api.get('routes')
      .then((res) => {
        console.log(res);
        setRoutes(res.data);
      });
      console.log(routes);
      
  }
  ,[]);

  return (
    <div className="App">
      <header className="App-header">

        <table>
          <thead>
            <tr>
              <th>Rota</th>
              <th>Início (Lat/Long)</th>
              <th>Fim (Lat/Long)</th>
            </tr>
          </thead>
          <tbody>
            {routes?.map(r =>
              <tr>
                <td>{r.title}</td>
                <td>{r.startPosition.lat} / {r.startPosition.lat}</td>
                <td>{r.endPosition.lng} / {r.endPosition.lng}</td>
              </tr>
            )}
          </tbody>
        </table>

      </header>
    </div>
  );
}

export default App;
