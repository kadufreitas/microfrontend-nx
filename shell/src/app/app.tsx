import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('home/Module'));
const Call = React.lazy(() => import('call/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/call">Call</Link>
        </li>
      </ul> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Call />
            </div>
          }
        />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/call" element={<Call />} /> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;
