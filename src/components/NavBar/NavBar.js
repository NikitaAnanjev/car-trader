import { Box ,Flex,Button} from "@chakra-ui/react"
import {NavBarLogo} from './styles'
import Link from 'next/link'

const MenuItems = ({ children ,href}) => (
    <Box mt={{ base: 4, md: 0 }} mr={6}>
        <Link  display="block" href={href ? href : '#'}>
            {children}
        </Link>
    </Box>
);

export const NavBar = () => {

    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);


    return (

            <Flex bg="black" w="100%" p={4} color="white"  justifyContent="space-between">
                <Flex mr={5}>
                    <NavBarLogo>
                        <Link href="/">


                            <img src="/piralux-logo.png" alt="piralux-auto-aalborg-bilcenter" width="100%"  />
                        </Link>
                    </NavBarLogo>
                </Flex>
                <Box display={{ base: "flex", md: "none" }} onClick={handleToggle}>
                    <svg
                        fill="white"
                        width="30px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Box>
                <Flex direction="row" w='full'  position={{ sm:  "absolute" ,md: "relative" }}  mt={{sm: show && '100px',md: "0"}} >
                    <Box

                        display={{ sm: show ? "block" : "none", md: "flex" }}
                        width={{ sm: "full", md: "auto" }}
                        alignItems="center"
                        flexGrow={1}
                    >

                        <MenuItems>Examples</MenuItems>
                        <MenuItems href="/equipment">UDSTYR</MenuItems>
                        <MenuItems href="/faq">FAQ</MenuItems>
                    </Box>

                    <Flex
                        position={{ sm: show ? "absolute" : "" }}
                        display={{ sm: show ? "block" : "none", md: "flex" }}
                        mt={{ base: 4, md: 0 }}
                    >
                        <Button bg="transparent" border="1px">
                            Kontakt
                        </Button>
                    </Flex>

                </Flex>

            </Flex>

    );
};

