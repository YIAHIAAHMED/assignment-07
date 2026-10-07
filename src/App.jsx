import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FriendDetails from './pages/FriendDetails';
import { FriendProvider } from './context/FriendContext';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <FriendProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
          
          <Navbar />

          <main className="flex-grow">
            <Routes>

              {/* Home Page */}
              <Route
                path="/"
                element={
                  <div className="text-center py-20 font-bold text-2xl">
                    KeenKeeper Home Page
                  </div>
                }
              />

              {/* Friend Details */}
              <Route
                path="/friend/:id"
                element={<FriendDetails />}
              />

            </Routes>
          </main>

          <Footer />

        </div>
      </Router>

      {/* Toast Message */}
      <Toaster position="top-right" />

    </FriendProvider>
  );
}

export default App;