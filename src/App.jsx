import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';

import routes from './routes.js';
import HomePage from './pages/Home.jsx';

function App() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setTheme('material');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setTheme('ios');
    } else {
      setTheme('material');
    }
  }, []);

  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const setColorTheme = (color) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    setCurrentColorTheme(color);
  };

  const inIFrame = window.parent !== window;

  useLayoutEffect(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  }, [theme]);

  if (!theme) return null;

  return (
    <KonstaApp theme={theme} safeAreas={!inIFrame}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                colorTheme={currentColorTheme}
                setColorTheme={setColorTheme}
              />
            }
          />
        </Routes>
      </Router>
    </KonstaApp>
  );
}

export default App;
