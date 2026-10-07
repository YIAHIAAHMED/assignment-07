import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import SignIn from './pages/SignIn';

import { FriendProvider } from './context/FriendContext';

function App() {
  return (
    <FriendProvider>
      <BrowserRouter>

        <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1F2937]">

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

              <Route
                path="/signin"
                element={<SignIn />}
              />

            </Routes>
          </main>

          <Footer />

        </div>

        <Toaster position="top-right" />

      </BrowserRouter>
    </FriendProvider>
  );
}

export default App;