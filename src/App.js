import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppHeader from './Components/AppHeader';
import PageTitle from './Components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppContent from './Components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper} />
        <AppHeader />
        <AppContent />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
