'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../../../Components/Homepage/Navbar';
import Footer from '../../../../Components/Footer/Footer';
import CompanyLogin from '../../../../Components/Auth/CompanyAuth/Login';
import CompanySignup from '../../../../Components/Auth/CompanyAuth/Signup';

export default function CompanyAuthPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  // Load stored company user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('companyUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('companyUser');
    setUser(null);
    setShowLogin(true);
  };

  // Store company user info after login/signup
  const handleUserLogin = (userData) => {
    const { id, name, email, role, companyName, companyWebsite, companyDescription } = userData;
    const userToStore = { id, name, email, role, companyName, companyWebsite, companyDescription };
    localStorage.setItem('companyUser', JSON.stringify(userToStore));
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
              <h1 className="text-2xl font-bold text-gray-900">Company Dashboard</h1>
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
              <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
              <p className="text-gray-600">
                Email: <span className="font-medium">{user.email}</span>
              </p>
              <p className="text-gray-600 mt-2">
                Role: <span className="font-medium">{user.role}</span>
              </p>
              <p className="text-gray-600 mt-2">
                Company Name: <span className="font-medium">{user.companyName}</span>
              </p>
              {user.companyWebsite && (
                <p className="text-gray-600 mt-2">
                  Website: <span className="font-medium">{user.companyWebsite}</span>
                </p>
              )}
              {user.companyDescription && (
                <p className="text-gray-600 mt-2">
                  Description: <span className="font-medium">{user.companyDescription}</span>
                </p>
              )}
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
          <CompanyLogin
            onSwitchToSignup={() => setShowLogin(false)}
            onLoginSuccess={handleUserLogin}
          />
        ) : (
          <CompanySignup
            onSwitchToLogin={() => setShowLogin(true)}
            onSignupSuccess={handleUserLogin}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
