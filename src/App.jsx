import React, { useState } from 'react';
import { IncidentProvider } from './context/IncidentContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ReportIncident from './components/ReportIncident';
import { LayoutDashboard, PlusCircle, LogOut, Shield } from 'lucide-react';

const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) {
    return <Login onLogin={(u) => setUser(u)} />;
  }

  return (
    <IncidentProvider>
      <div className="mobile-container">
        {/* Main Content Area */}
        <main style={{ flex: 1, overflowY: 'auto', background: '#f8f9fa' }}>
          {activeTab === 'dashboard' ? (
            <Dashboard />
          ) : (
            <ReportIncident onSuccess={() => setActiveTab('dashboard')} />
          )}
        </main>

        {/* Bottom Navigation */}
        <nav className="glass-card" style={{
          margin: '12px',
          marginBottom: '20px',
          padding: '8px 4px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: '16px',
          position: 'sticky',
          bottom: '12px',
          zIndex: 100
        }}>
          <button
            onClick={() => setActiveTab('dashboard')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              color: activeTab === 'dashboard' ? 'var(--primary)' : '#999',
              fontSize: '10px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <LayoutDashboard size={20} />
            DASHBOARD
          </button>

          <button
            onClick={() => setActiveTab('report')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '28px',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              marginTop: '-30px',
              boxShadow: '0 8px 16px rgba(239, 108, 0, 0.3)',
              cursor: 'pointer'
            }}
          >
            <PlusCircle size={28} />
          </button>

          <button
            onClick={() => setUser(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              color: '#999',
              fontSize: '10px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <LogOut size={20} />
            LOGOUT
          </button>
        </nav>
      </div>
    </IncidentProvider>
  );
};

export default App;
