import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
} from '@chakra-ui/react';

import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher.component';
import TimerContainer from './components/TimerContainer/TimerContainer.component';
import Title from './components/Title/Title.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="row" justifyContent="flex-end">
        <ColorModeSwitcher justifySelf="end" />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <TimerContainer>
          <Title size="lg" text="Chakradoro Timer" />
        </TimerContainer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
