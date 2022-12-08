import React from 'react';
import AuthProvider from './auth/Auth.js';
import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings.js';

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </AuthProvider>
    );
  }
}
