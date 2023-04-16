import {
    Center,
    Heading,
    Text,
    VStack,
    Box,
    Grid,
    GridItem,
    Flex,
    AbsoluteCenter,
    useBreakpointValue,
    Stack,
    // Block,
    // theme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Jasa() {
    return (
        <Center>
            <NextSeo
                title="Jasa – SEKAI.ID"
                canonical="https://sekai.id/jasa"
                openGraph={{
                    url: "https://sekai.id/jasa",
                    title: "Jasa – SEKAI.ID",
                }}
            />

            <Stack>
                    <Heading>Portfolio Kami</Heading>
                <Box display="block">
                    {/* grid 1 */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={10}
                    >
                        {/* konten 1 */}

                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Center>
                                        <Image
                                            src="/yurielle.avif"
                                            alt="Yurielle Celestine"
                                            width={360}
                                            height={360}
                                        />
                                    </Center>

                                    <Text pl="5" pt="1">
                                        Customer : Yurielle Celestine <br />
                                        https://www.youtube.com/@Yurielle
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>

                        {/* konten 2 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/infosrk.avif"
                                        alt="infosrk.club"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : URJA <br />
                                        infosrk.club
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>

                        {/* konten 3 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/nilamas.avif"
                                        alt="nilamas.com"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : Nilamas Food <br />
                                        nilamas.com
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>

                        {/* konten 4 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/order-infosrk.avif"
                                        alt="order.infosrk.club"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : URJA <br />
                                        order.infosrk.club
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>

                        {/* konten 5 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/ramabordirsidoarjo.avif"
                                        alt="ramabordirsidoarjo.com"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : CV RAMA Production Sidoarjo{" "}
                                        <br />
                                        ramabordirsidoarjo.com
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>

                        {/* konten 6 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/serbaonline.avif"
                                        alt="serbaonline.web.id"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : AFC Lifescience <br />
                                        serbaonline.web.id
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                        {/* konten 7 */}
                        <GridItem colSpan={1}>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Box
                                    boxShadow={"lg"}
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="5px"
                                    pb="10"
                                >
                                    <Image
                                        src="/grando.avif"
                                        alt="grandoindonesia.co.id"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : PT Magha Sukses Mandiri{" "}
                                        <br />
                                        grandoindonesia.co.id
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                    </Grid>
                    {/*batas grid 1 */}
                </Box>
            </Stack>
        </Center>
    );
}
