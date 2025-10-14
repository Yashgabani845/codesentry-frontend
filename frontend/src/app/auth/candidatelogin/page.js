'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../../../Components/Homepage/Navbar';
import Footer from '../../../../Components/Footer/Footer';
import Login from '../../../../Components/Auth/UserAuth/Login';
import Signup from '../../../../Components/Auth/UserAuth/Signup';
import { onAuthStateChanged, firebaseSignOut, auth } from '../../../config/firebaseAuth';

export default function AuthPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Save user info from localStorage if already there
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { success, error } = await firebaseSignOut();
    if (success) {
      localStorage.removeItem('user'); // remove stored user info
      console.log('Signed out successfully');
      setUser(null);
      setShowLogin(true);
    } else {
      console.error('Sign out error:', error);
    }
  };

  // Store user info after login/signup
  const handleUserLogin = (userData) => {
    const { id, name, email, role } = userData;
    const userToStore = { id, name, email, role };
    localStorage.setItem('user', JSON.stringify(userToStore));
    setUser(userToStore);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
              <p className="text-gray-600">
                You are logged in as: <span className="font-medium">{user.email}</span>
              </p>
              <p className="text-gray-600 mt-2">
                Name: <span className="font-medium">{user.name}</span>
              </p>
              <p className="text-gray-600 mt-2">
                Role: <span className="font-medium">{user.role}</span>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {showLogin ? (
          <Login
            onSwitchToSignup={() => setShowLogin(false)}
            onLoginSuccess={handleUserLogin} // pass user info after login
          />
        ) : (
          <Signup
            onSwitchToLogin={() => setShowLogin(true)}
            onSignupSuccess={handleUserLogin} // pass user info after signup
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
