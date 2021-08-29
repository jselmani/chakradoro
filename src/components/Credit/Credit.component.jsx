import { Box, Link, Text } from "@chakra-ui/react";
import { useStateValue } from "../../contexts/stateProvider";

const Credit = () => {

    const [{ githubUsername, githubUrl }] = useStateValue();
    
    return (
        <Box pt="1em">
            <Text fontSize="lg" fontWeight="semibold">
                Developed with ❤️ by{' '}
                <Link href={githubUrl} isExternal>
                    {githubUsername}
                </Link>
            </Text>
        </Box>
    );
};

export default Credit;