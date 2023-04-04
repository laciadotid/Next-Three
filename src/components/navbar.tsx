import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

import Image from "next/image";

import { ReactNode } from "react";

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                bg={useColorModeValue("gray.100", "gray.900")}
                p={6}
                m={4}
                rounded={"xl"}
                boxShadow={"2xl"}
            >
                <Flex
                    h={110}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Link href="/">
                        <Box>
                            <Image
                                src={"/logo-sekaidotid.avif"}
                                alt={"Logo SEKAI.ID"}
                                width={350}
                                height={100}
                            />
                        </Box>
                    </Link>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <FaMoon /> : <FaSun />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <FaBars />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <MenuItem>
                                        <Link href="tentang">Tentang Kami</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="tentang">Jasa Website</Link></MenuItem>
                                    <MenuItem>
                                        <Link href="kontak">Kontak</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
