import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// eager loaded views
import LoadingScreen from './Components/Common/LoadingScreen';

// lazy loaded screens
const Home = lazy(() => import('./Views/Home'));
const Login = lazy(() => import('./Views/Login'));

// component entry point
export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}