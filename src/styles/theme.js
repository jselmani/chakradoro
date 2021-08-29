import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

export const ChakradoroTheme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('red.500', 'gray.700')(props),
            }
        })
    },
});
