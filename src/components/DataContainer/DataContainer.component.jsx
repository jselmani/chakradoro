import { Box } from '@chakra-ui/react';

const DataContainer = ({ children }) => {
    return (
        <Box 
          minW="30%"
          minH="50%"
          p="2.5em"
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