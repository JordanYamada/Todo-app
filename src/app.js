import React from 'react';
import LoginProvider from './auth/context.js';
import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings.js';

export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </LoginProvider>
    );
  }
}
