import { 
    Box,
    useColorModeValue 
} from '@chakra-ui/react';

const DataContainer = ({ children }) => {
    
    const bg = useColorModeValue('gray.300', 'gray.800');

    return (
        <Box 
          px="2em"
          py="1.5em"
          mx="2em"
          align="center"
          borderRadius="50px"
          bg={bg}
          boxShadow="2xl"
        >
            { children }
        </Box>
    );
}

export default DataContainer;