import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import OrganicChemistry from './pages/OrganicChemistry';
import InorganicChemistry from './pages/InorganicChemistry';
import PeriodicTable from './pages/PeriodicTable';
import Experiments from './pages/Experiments';
import Profile from './pages/Profile';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Layout>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/organic" element={<OrganicChemistry />} />
              <Route path="/inorganic" element={<InorganicChemistry />} />
              <Route path="/periodic" element={<PeriodicTable />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </motion.div>
        </Layout>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#ffffff',
              color: '#1f2937',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;