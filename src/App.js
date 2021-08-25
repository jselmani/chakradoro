import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
} from '@chakra-ui/react';

import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher.component';
import DataContainer from './components/DataContainer/DataContainer.component';
import Timer from './components/Timer/Timer.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="row" justifyContent="flex-end">
        <ColorModeSwitcher justifySelf="end" />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" minH="80vh">
        <DataContainer>
          <Timer />
        </DataContainer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
