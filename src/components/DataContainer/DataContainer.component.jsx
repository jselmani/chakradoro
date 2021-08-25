import { Box } from '@chakra-ui/react';

const DataContainer = ({ children }) => {
    return (
        <Box 
          px="2em"
          py="1.5em"
          mx="2em"
          align="center"
          borderRadius="30px"
          border="2px"
          borderColor="gray.50"
          boxShadow="base"
        >
            { children }
        </Box>
    );
}

export default DataContainer;