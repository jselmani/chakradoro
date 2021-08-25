import { Box } from '@chakra-ui/react';

const DataContainer = ({ children }) => {
    return (
        <Box 
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