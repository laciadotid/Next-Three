import * as React from "react";

import {
    Box,
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Post } from "@/types";
import { client } from "@/components/cms";
import siteConfig from "site-config";

interface HomePageProps {
    posts: Post[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const data = await client.request(/* GraphQL */ `
        {
            postCollection(order: date_DESC) {
                items {
                    title
                    slug
                    metaDescription
                    featuredImage {
                        url
                    }
                    date
                    category {
                        title
                    }
                    author {
                        name
                    }
                }
            }
        }
    `);

    return {
        props: {
            posts: data.postCollection.items,
        },
        // revalidate: 60,
    };
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
    return (
        <div>
            <NextSeo
                title={siteConfig.title}
                description={siteConfig.description}
                openGraph={{
                    type: "website",
                    locale: siteConfig.locale,
                    title: siteConfig.title,
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
            {posts.map((post, i) => (
                <div key={i}>
                    <Link href={post.slug}>
                        <Center>
                            <Box
                                w={"full"}
                                bg={useColorModeValue("gray.100", "gray.900")}
                                boxShadow={"xl"}
                                rounded={"xl"}
                                p={4}
                                m={2}
                                overflow={"hidden"}
                            >
                                <Center>
                                    <Image
                                        src={
                                            post.featuredImage.url +
                                            "?fit=fill&fm=avif&w=480&h=270&q=30"
                                        }
                                        alt={post.title}
                                        width={480}
                                        height={270}
                                    />
                                </Center>

                                <Stack>
                                    <Text
                                        color={"red.500"}
                                        textTransform={"uppercase"}
                                        fontWeight={800}
                                        fontSize={"sm"}
                                        letterSpacing={1.1}
                                    >
                                        {post.category.title}
                                    </Text>
                                    <Heading
                                        color={useColorModeValue(
                                            "black",
                                            "white",
                                        )}
                                        fontSize={"2xl"}
                                        fontFamily={"body"}
                                    >
                                        {post.title}
                                    </Heading>
                                    <Text
                                        color={useColorModeValue(
                                            "black",
                                            "white",
                                        )}
                                    >
                                        {post.metaDescription}
                                    </Text>
                                </Stack>
                                <Stack
                                    mt={6}
                                    direction={"row"}
                                    spacing={4}
                                    align={"center"}
                                >
                                    <Stack
                                        direction={"column"}
                                        spacing={0}
                                        fontSize={"sm"}
                                    >
                                        <Text
                                            fontWeight={600}
                                            color={useColorModeValue(
                                                "black",
                                                "white",
                                            )}
                                        >
                                            {post.author.name}
                                        </Text>
                                        <Text
                                            color={useColorModeValue(
                                                "black",
                                                "white",
                                            )}
                                        >
                                            {post.date}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Center>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
