import { Center, Heading, Text, VStack, Box } from "@chakra-ui/react";

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
            <Box>
                <Box>
                    <Image
                        src="/yurielle.avif"
                        alt="Yurielle Celestine"
                        width={640}
                        height={360}
                    />
                    Customer : Yurielle Celestine <br />
                    https://www.youtube.com/@Yurielle
                </Box>
                <Box>
                    <Image
                        src="/infosrk.avif"
                        alt="infosrk.club"
                        width={640}
                        height={360}
                    />
                    Customer : URJA <br />
                    infosrk.club
                </Box>
                <Box>
                    <Image
                        src="/nilamas.avif"
                        alt="nilamas.com"
                        width={640}
                        height={360}
                    />
                    Customer : nilamas.com
                </Box>
                <Box>
                    <Image
                        src="/order-infosrk.avif"
                        alt="order.infosrk.club"
                        width={640}
                        height={360}
                    />
                    Customer : Urja <br />
                    order.infosrk.club
                </Box>

                <Box>
                    <Image
                        src="/ramabordirsidoarjo.avif"
                        alt="ramabordirsidoarjo.com"
                        width={640}
                        height={360}
                    />
                    Customer : CV RAMA Production Sidoarjo <br />
                    ramabordirsidoarjo.com
                </Box>

                <Box>
                    <Image
                        src="/serbaonline.avif"
                        alt="serbaonline.web.id"
                        width={640}
                        height={360}
                    />
                    Customer : serbaonline.web.id
                </Box>
            </Box>
        </Center>
    );
}
