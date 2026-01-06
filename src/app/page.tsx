"use client";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  useColorModeValue,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";
import homeVN from "../assets/banner/bgimage.png";
import logo from "../assets/banner/logo.png";
import Carousel from "./components/Carousel";
import { useT, useLang } from "../i18n";

function AndroidDownloadButton() {
  const t = useT();
  return (
    <Button
      as="a"
      href="https://play.google.com/store/apps/details?id=com.vintagevendor"
      target="_blank"
      rel="noopener noreferrer"
      size={{ base: "sm", md: "lg" }}
      colorScheme="yellow"
      bg="brand.500"
      _hover={{ bg: "brand.600" }}
      shadow="vintage"
      borderRadius="vintage"
    >
      {t("androidDownload")}
    </Button>
  );
}

function IOSSoonButton() {
  const t = useT();
  return (
    <Button
      size={{ base: "sm", md: "lg" }}
      variant="outline"
      colorScheme="yellow"
      borderRadius="vintage"
      isDisabled
      display={{ base: "none", md: "inline-flex" }}
    >
      {t("iosSoon")}
    </Button>
  );
}

export default function Home() {
  const t = useT();
  const { lang, setLang } = useLang();
  const cardBg = useColorModeValue("cream.100", "cocoa.700");
  const featuredBg = useColorModeValue("cream.200", "cocoa.600");

  return (
    <Container maxW="6xl" py={{ base: 6, md: 10 }}>
      {/* Header */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        bg="cream.100"
        p={4}
        borderRadius="vintage"
        shadow="vintage"
        mb={{ base: 6, md: 10 }}
      >
        <HStack spacing={3}>
          <Box position="relative" w="48px" h="48px">
            <Image src={logo} alt="Retro Mart logo" fill sizes="48px" />
          </Box>
          <Heading size="md" color="brand.700">
            {t("brandName")}
          </Heading>
        </HStack>
        <HStack spacing={3}>
          <Link href="/policy" color="brand.700" fontWeight="bold" mr={2}>
            {t("privacyPolicy")}
          </Link>
          <AndroidDownloadButton />
          <IOSSoonButton />
          <Button
            size="sm"
            variant="outline"
            colorScheme="yellow"
            borderRadius="vintage"
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
          >
            {t("langToggle")}
          </Button>
        </HStack>
      </Flex>

      {/* Hero */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        align="center"
        mb={{ base: 10, md: 16 }}
      >
        <Stack flex="1" spacing={5}>
          <Heading
            size={{ base: "xl", md: "2xl" }}
            bgGradient="linear(to-r, brand.700, cocoa.500)"
            bgClip="text"
            textAlign={{ base: "center", md: "left" }}
          >
            {t("heroTitle")}
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="cocoa.700"
            textAlign={{ base: "center", md: "left" }}
          >
            {t("heroDescription")}
          </Text>
          <HStack spacing={3} justify={{ base: "center", md: "flex-start" }}>
            <AndroidDownloadButton />
            <IOSSoonButton />
          </HStack>
        </Stack>
        <Box
          flex="1"
          w="100%"
          bg={cardBg}
          borderRadius="vintage"
          shadow="vintage"
          p={4}
        >
          <Carousel />
        </Box>
      </Stack>

      {/* Features */}
      <Box as="section" mb={{ base: 10, md: 16 }}>
        <Heading size="lg" mb={6} color="brand.700">
          {t("featuresTitle")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[
            {
              title: t("feature_easy_title"),
              text: t("feature_easy_text"),
            },
            {
              title: t("feature_vintage_title"),
              text: t("feature_vintage_text"),
            },
            {
              title: t("feature_updates_title"),
              text: t("feature_updates_text"),
            },
          ].map((f, i) => (
            <Card
              key={i}
              bg={cardBg}
              borderRadius="vintage"
              shadow="vintage"
              borderWidth="1px"
              borderColor="cream.300"
            >
              <CardBody>
                <Heading size="md" mb={2} color="cocoa.800">
                  {f.title}
                </Heading>
                <Text color="cocoa.700">{f.text}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* Testimonials */}
      <Box as="section" mb={{ base: 10, md: 16 }}>
        <Heading size="lg" mb={6} color="brand.700">
          {t("testimonialsTitle")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[
            {
              author: t("testimonial_1_author"),
              text: t("testimonial_1_text"),
              featured: true,
            },
            {
              author: t("testimonial_2_author"),
              text: t("testimonial_2_text"),
              featured: true,
            },
            {
              author: t("testimonial_3_author"),
              text: t("testimonial_3_text"),
              featured: false,
            },
          ].map((tItem, i) => (
            <Card
              key={i}
              bg={tItem.featured ? featuredBg : cardBg}
              borderRadius="vintage"
              shadow="vintage"
              position="relative"
              borderWidth="1px"
              borderColor="cream.300"
            >
              {tItem.featured && (
                <Badge
                  position="absolute"
                  top={3}
                  right={3}
                  colorScheme="yellow"
                  variant="solid"
                >
                  {t("testimonial_badge_recent")}
                </Badge>
              )}
              <CardBody>
                <Text fontWeight="bold" color="cocoa.900" mb={2}>
                  {tItem.author}
                </Text>
                <Text color="cocoa.700">{tItem.text}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* FAQ */}
      <Box as="section" mb={{ base: 10, md: 16 }}>
        <Heading size="lg" mb={6} color="brand.700">
          {t("faqTitle")}
        </Heading>
        <Accordion
          allowMultiple
          bg={cardBg}
          borderRadius="vintage"
          shadow="vintage"
          borderWidth="1px"
          borderColor="cream.300"
        >
          {[
            {
              q: t("faq_1_q"),
              a: t("faq_1_a"),
            },
            {
              q: t("faq_2_q"),
              a: t("faq_2_a"),
            },
            {
              q: t("faq_3_q"),
              a: t("faq_3_a"),
            },
          ].map((item, i) => (
            <AccordionItem key={i}>
              <h3>
                <AccordionButton _expanded={{ bg: "cream.200" }}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                    color="cocoa.900"
                  >
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4} color="cocoa.700">
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="cream.100"
        borderRadius="vintage"
        shadow="vintage"
        p={6}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={4}
        >
          <Stack spacing={2}>
            <HStack spacing={3}>
              <Box position="relative" w="32px" h="32px">
                <Image src={logo} alt="Retro Mart logo" fill sizes="32px" />
              </Box>
              <Heading size="sm" color="brand.700">
                {t("brandName")}
              </Heading>
            </HStack>
            <Text color="cocoa.700">{t("footerCopyright")}</Text>
            <HStack spacing={4}>
              <Link
                href="https://www.facebook.com/profile.php?id=61584641044907"
                aria-label="Facebook"
                color="brand.700"
                isExternal
              >
                {t("facebook")}
              </Link>
              <Link
                href="https://youtu.be/j5dcfCfqaak"
                aria-label="YouTube"
                color="brand.700"
                isExternal
              >
                {t("youtube")}
              </Link>
              <Link href="#" aria-label="TikTok" color="brand.700">
                {t("tiktok")}
              </Link>
              <Link
                href="/policy"
                aria-label="Privacy Policy"
                color="brand.700"
              >
                {t("privacyPolicy")}
              </Link>
            </HStack>
          </Stack>
          <HStack spacing={3}>
            <AndroidDownloadButton />
            <IOSSoonButton />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
}
