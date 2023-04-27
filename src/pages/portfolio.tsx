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
    Button,
    // Block,
    // theme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import siteConfig from "site-config";

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Jasa() {
    return (
        <Center>
            <NextSeo
                title="Portfolio Jasa – SEKAI.ID"
                description="Jasa Pembuatan Website, Ilustrasi Anime, Foto & Video"
                openGraph={{
                    type: "website",
                    locale: siteConfig.locale,
                    title: "Portfolio Jasa – SEKAI.ID",
                    images: [
                        {
                            url: `${siteConfig.url}/social.avif`,
                            width: 640,
                            height: 360,
                            alt: siteConfig.title,
                        },
                    ],
                    url: siteConfig.url,
                    site_name: siteConfig.title,
                }}
                twitter={{
                    cardType: "summary_large_image",
                    handle: "@" + siteConfig.twitterUsername,
                    site: "@" + siteConfig.twitterUsername,
                }}
            />

            <VStack>
                <Text fontSize="6xl" as="b">
                    Portfolio Jasa Kami
                </Text>
                <Box>
                    <Text fontSize="4xl">
                        Jasa pembuatan website <br />
                    </Text>
                    <Text fontSize="4xl">
                        Jasa Foto & Video <br />
                    </Text>
                    <Text fontSize="4xl">
                        Jasa Ilustrasi Anime <br />
                    </Text>
                </Box>
                <br />
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <a
                        href="https://s.sekai.id/whatsapp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            colorScheme="whatsapp"
                            size="lg"
                            leftIcon={<FaWhatsapp />}
                        >
                            {" "}
                            Hubungi kami via WhatsApp
                        </Button>
                    </a>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <a
                        href="mailto:hi@sekai.id"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            colorScheme="red"
                            size="lg"
                            leftIcon={<FaEnvelope />}
                        >
                            {" "}
                            Email : hi@sekai.id
                        </Button>
                    </a>
                </motion.button>

                <br />
                <br />
                <Box display="block">
                    {/* grid 1 */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={10}
                    >
                        {/* Yurielle Celestine Wallpaper */}
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
                                        https://www.youtube.com/@Yurielle <br />
                                        <br />
                                        Wallpaper reward Trakteer
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
                                        grandoindonesia.co.id <br />
                                        <br />
                                        Redesign & optimalisasi kecepatan
                                        website
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                        {/* Website Rama Bordir*/}
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
                                        src="/profile-rama.avif"
                                        alt="ramabordirsidoarjo.com"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : CV RAMA Production Sidoarjo{" "}
                                        <br />
                                        ramabordirsidoarjo.com
                                        <br />
                                        <br />
                                        Video company profile bordir
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                        {/* Company Profile Rama Bordir */}
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
                                        <br />
                                        <br />
                                        Website company profile bordir
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                        {/* Company Profile Rama Bordir */}
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
                                        src="/pariago.avif"
                                        alt="pariago"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : SEKAI.ID <br />
                                        sekai.id
                                        <br />
                                        <br />
                                        desain karakter untuk staff
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                        {/* Company Profile Rama Bordir */}
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
                                        src="/mashiro.avif"
                                        alt="mashiro"
                                        width={360}
                                        height={360}
                                    />
                                    <Text pl="5" pt="1">
                                        Customer : SEKAI.ID <br />
                                        sekai.id
                                        <br />
                                        <br />
                                        desain karakter untuk staff
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
                                        <br />
                                        <br />
                                        E-commerce sim card Jepang
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
                                        <br />
                                        <br />
                                        Website berita Bollywood
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
                                        <br />
                                        <br />
                                        Website company profile frozen food
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
                                        <br />
                                        <br />
                                        website produk AFC
                                    </Text>
                                </Box>
                            </motion.button>
                        </GridItem>
                    </Grid>
                    {/*batas grid 1 */}
                </Box>
                <Heading>Ketentuan</Heading>
                <Box>
                    <Text fontSize="2xl">
                        DP 25% - 50% &#40; tergantung kesepakatan dengan
                        marketing kami &#41;
                        <br />
                        <br />
                        Uang DP tidak dapat di refund <br />
                        <br />
                        Pengerjaan dimulai setelah uang DP diterima <br />
                        <br />
                        Untuk pengerjaan website kami{" "}
                        <b>
                            tidak akan memberikan akses ke server sebelum serah
                            terima &#40; lunas 100% &#41;
                        </b>{" "}
                        <br />
                        <br />
                        Untuk pengerjaan Ilustrasi kami{" "}
                        <b>
                            tidak akan mengirimkan gambar dengan resolusi penuh
                            sebelum serah terima &#40; lunas 100% &#41;
                        </b>{" "}
                        <br />
                        <br />
                        Konsumen jasa kami berhak menggunkan karya yang sudah di
                        serah terima untuk kepentingan komersial apapun,
                        <br /> tetapi tidak boleh mengklaim hasil karya sebagai
                        ciptaan sendiri
                        <br />
                        <br />
                    </Text>
                </Box>
                <Heading>Harga</Heading>
                <Box>
                    <Text fontSize="2xl">
                        Development Website WordPress & Elementor : &#40;
                        Hubungi Marketing Kami &#41;
                        <br />
                        <br />
                        Ilustrasi Chibi : Rp 100.000
                        <br /> karakter tambahan &#40; dalam 1 gambar &#41; : Rp
                        50.000
                        <br />
                        <br />
                        Ilustrasi Half Body : Rp 200.000
                        <br /> karakter tambahan &#40; dalam 1 gambar &#41; : Rp
                        100.000
                        <br />
                        <br />
                        Ilustrasi Full Body : Rp 300.000
                        <br /> karakter tambahan &#40; dalam 1 gambar &#41; : Rp
                        150.000
                        <br />
                        <br />
                    </Text>
                </Box>
                <Heading>Pembayaran</Heading>
                <Box>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a href="qris.avif" target="_blank" rel="noreferrer">
                            <Button colorScheme="red" size="lg">
                                <b>QRIS &#40; tanpa tambahan biaya &#41;</b>
                            </Button>
                        </a>
                    </motion.button>
                    <br />
                    <br />
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a
                            href="https://saweria.co/sekaidotid"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button colorScheme="orange" size="lg">
                                Saweria &#40; tambahan biaya 10% &#41;
                            </Button>
                        </a>
                    </motion.button>
                    <br />
                    <br />
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a
                            href="https://trakteer.id/sekaidotid"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button colorScheme="orange" size="lg">
                                Trakteer &#40; tambahan biaya 10% &#41;
                            </Button>
                        </a>
                    </motion.button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Box>
                <Box>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Text fontSize="xs">
                        Background image by{" "}
                        <a
                            href="https://www.freepik.com/free-vector/gradient-japanese-temple-with-lake_9925870.htm"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <b>pikisuperstar on Freepik</b>
                        </a>
                    </Text>
                </Box>
            </VStack>
        </Center>
    );
}
