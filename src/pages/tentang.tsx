import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import VoxelEarthLoader from "@/components/gltf-loader";
import dynamic from "next/dynamic";

const LazyVoxelEarth = dynamic(() => import("@/components/gltf"), {
    ssr: false,
    loading: () => <VoxelEarthLoader />,
});

export default function Tentang() {
    return (
        <Center>
            <NextSeo
                title="Tentang Kami – SEKAI.ID"
                canonical="https://sekai.id/tentang"
                openGraph={{
                    url: "https://sekai.id/tentang",
                    title: "Tentang Kami – SEKAI.ID",
                }}
            />
            <VStack>
                <Container maxW="container.md" pt={14}>
                    <LazyVoxelEarth />
                </Container>
            </VStack>
        </Center>
    );
}
