import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

import { FriendProvider } from './context/FriendContext';

function App() {
  return (
    <FriendProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/friend/:id"
                element={<FriendDetails />}
              />

              <Route
                path="/timeline"
                element={<Timeline />}
              />

              <Route
                path="/stats"
                element={<Stats />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
          }}
        />
      </BrowserRouter>
    </FriendProvider>
  );
}

export default App;
