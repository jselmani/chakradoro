import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';

import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher.component';
import DataContainer from './components/DataContainer/DataContainer.component';
import Timer from './components/Timer/Timer.component';
import Credit from './components/Credit/Credit.component';
import { ChakradoroTheme } from './styles/theme';

const App = () => {
  return (
    <ChakraProvider theme={ChakradoroTheme}>
      <Flex flexDirection="row" justifyContent="flex-end">
        <ColorModeSwitcher justifySelf="end" />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" minH="80vh">
        <DataContainer>
          <Timer />
          <Credit />
        </DataContainer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
