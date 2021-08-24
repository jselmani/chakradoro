import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer, { initialState } from './reducer/reducer';
import { StateProvider } from './contexts/stateProvider';

ReactDOM.render(
  <StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ColorModeScript />
      <App />
    </StateProvider>
  </StrictMode>,
  document.getElementById('root')
);
