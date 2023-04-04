import { Center, Heading, Text, VStack } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function NotFound() {
    return (
        <Center>
            <NextSeo
                title="Kontak – SEKAI.ID"
                canonical="https://sekai.id/kontak"
                openGraph={{
                    url: "https://sekai.id/kontak",
                    title: "Kontak – SEKAI.ID",
                }}
            />
            <VStack>
                <a href="mailto:hi@sekai.id">
                        Email
                </a>
                <a href="https://s.sekai.id/whatsapp">
                        Whatsapp
                </a>
            </VStack>
        </Center>
    );
}
