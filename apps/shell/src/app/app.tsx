import * as React from 'react';

const Vehicle = React.lazy(() => import('vehicle/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div style={{ backgroundColor: 'red', textAlign: 'center' }}>
        <h1>Shell</h1>
        <Vehicle />
      </div>
    </React.Suspense>
  );
}

export default App;
