"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Card,
  CardBody,
  UnorderedList,
  ListItem,
  Flex,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/banner/logo.png";

const navLinks = [
  { label: "Terms Of Use", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
];

interface PolicySectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  isHighlighted?: boolean;
  id?: string;
}

function PolicySection({
  number,
  title,
  children,
  isHighlighted = false,
  id,
}: PolicySectionProps) {
  const cardBg = useColorModeValue("cream.50", "cocoa.800");
  const highlightBg = useColorModeValue("cream.100", "cocoa.700");
  const borderColor = useColorModeValue("cream.300", "cocoa.600");
  const numberBg = useColorModeValue("brand.500", "brand.400");

  return (
    <Card
      id={id}
      bg={isHighlighted ? highlightBg : cardBg}
      borderRadius="vintage"
      shadow="vintage"
      borderWidth="1px"
      borderColor={borderColor}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
    >
      <CardBody p={{ base: 4, md: 6 }}>
        <HStack align="flex-start" spacing={4} mb={4}>
          <Flex
            align="center"
            justify="center"
            bg={numberBg}
            color="white"
            fontWeight="bold"
            fontSize="sm"
            minW="32px"
            h="32px"
            borderRadius="full"
            flexShrink={0}
          >
            {number}
          </Flex>
          <Heading
            size="md"
            color="cocoa.800"
            lineHeight="1.4"
            _dark={{ color: "cream.100" }}
          >
            {title}
          </Heading>
        </HStack>
        <Box pl={{ base: 0, md: 12 }}>{children}</Box>
      </CardBody>
    </Card>
  );
}

function ShortText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      fontSize="sm"
      fontWeight="semibold"
      color="brand.600"
      mb={2}
      _dark={{ color: "brand.300" }}
    >
      {children}
    </Text>
  );
}

export default function PolicyPage() {
  const router = useRouter();
  const headerBg = useColorModeValue("cocoa.800", "cocoa.900");
  const footerBg = useColorModeValue("cream.100", "cocoa.800");
  const mutedColor = useColorModeValue("cocoa.600", "cream.400");
  const linkColor = useColorModeValue("brand.600", "brand.300");

  return (
    <Box minH="100vh">
      {/* Header */}
      <Box as="header" bg={headerBg} py={4}>
        <Container maxW="4xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={4}
          >
            <HStack
              spacing={3}
              cursor="pointer"
              onClick={() => router.push("/")}
            >
              <Box position="relative" w="40px" h="40px">
                <Image src={logo} alt="Retro Mart logo" fill sizes="40px" />
              </Box>
              <Heading size="md" color="cream.100">
                Retro Mart
              </Heading>
            </HStack>
            <HStack
              as="nav"
              spacing={{ base: 4, md: 6 }}
              wrap="wrap"
              justify="center"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="cream.300"
                  fontWeight="600"
                  fontSize="sm"
                  _hover={{ color: "brand.400", textDecoration: "none" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="sm"
                colorScheme="yellow"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                borderRadius="vintage"
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="4xl" py={{ base: 8, md: 12 }}>
        {/* Page Title */}
        <VStack spacing={4} mb={10} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, brand.600, cocoa.600)"
            bgClip="text"
          >
            Privacy Policy
          </Heading>
          <Text color={mutedColor} maxW="2xl" fontSize="lg">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our Services.
          </Text>
        </VStack>

        {/* Policy Sections */}
        <VStack spacing={6} align="stretch" id="privacy">
          <PolicySection number="1" title="WHAT INFORMATION DO WE COLLECT?">
            <VStack align="stretch" spacing={4}>
              <Box>
                <Heading size="sm" color="cocoa.700" mb={2} _dark={{ color: "cream.200" }}>
                  Personal information you disclose to us
                </Heading>
                <ShortText>In short: We collect personal information that you provide to us.</ShortText>
                <Text color={mutedColor} mb={3}>
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, participate in activities on the Services, or
                  otherwise contact us.
                </Text>
                <Text color={mutedColor} mb={3}>
                  <Text as="span" fontWeight="bold">
                    Sensitive Information:
                  </Text>{" "}
                  We do not process sensitive information.
                </Text>
                <Text color={mutedColor}>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </Text>
              </Box>

              <Box>
                <Heading size="sm" color="cocoa.700" mb={2} _dark={{ color: "cream.200" }}>
                  Information automatically collected
                </Heading>
                <ShortText>
                  In short: Some information — such as your Internet Protocol
                  (IP) address and/or browser and device characteristics — is
                  collected automatically when you visit our Services.
                </ShortText>
                <Text color={mutedColor}>
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical information. Like many
                  businesses, we also collect information through cookies and
                  similar technologies.
                </Text>
              </Box>
            </VStack>
          </PolicySection>

          <PolicySection
            number="2"
            title="HOW DO WE PROCESS YOUR INFORMATION?"
          >
            <ShortText>
              In short: We process your information to provide, improve, and
              administer our Services; communicate with you; ensure security and
              fraud prevention; and comply with law. We may also process your
              information for other purposes with your consent.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="3"
            title="WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
          >
            <ShortText>
              In short: We may share information in specific situations
              described in this section and/or with the following third parties.
            </ShortText>
            <UnorderedList spacing={3} color={mutedColor} mt={4}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Business Transfers:
                </Text>{" "}
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Affiliates:
                </Text>{" "}
                We may share your information with our affiliates, in which case
                we will require those affiliates to honor this Privacy Notice.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Business Partners:
                </Text>{" "}
                We may share your information with our business partners to
                offer you certain products, services, or promotions.
              </ListItem>
            </UnorderedList>
          </PolicySection>

          <PolicySection
            number="4"
            title="DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"
          >
            <ShortText>
              In short: We may use cookies and other tracking technologies to
              collect and store your information.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="5"
            title="HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
          >
            <ShortText>
              In short: If you choose to register or log in to our Services
              using a social media account, we may have access to certain
              information about you.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="6"
            title="IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?"
          >
            <ShortText>
              In short: We may transfer, store, and process your information in
              countries other than your own.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="7"
            title="HOW LONG DO WE KEEP YOUR INFORMATION?"
          >
            <ShortText>
              In short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Notice unless
              otherwise required by law.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="8"
            title="DO WE COLLECT INFORMATION FROM MINORS?"
          >
            <ShortText>
              In short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </ShortText>
          </PolicySection>

          <PolicySection number="9" title="WHAT ARE YOUR PRIVACY RIGHTS?">
            <ShortText>
              In short: You may review, change, or terminate your account at any
              time, depending on your country, province, or state of residence.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="10"
            title="CONTROLS FOR DO-NOT-TRACK FEATURES"
          >
            <ShortText>
              In short: We do not currently respond to DNT browser signals or
              any other mechanism that automatically communicates your choice
              not to be tracked online.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="11"
            title="DO WE MAKE UPDATES TO THIS NOTICE?"
          >
            <ShortText>
              In short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </ShortText>
          </PolicySection>

          <PolicySection
            number="12"
            title="HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
            isHighlighted
            id="contact"
          >
            <Text color={mutedColor} mb={4}>
              If you have questions or comments about this notice, you may
              contact us at:
            </Text>
            <Link
              href="mailto:sonlvs1507@gmail.com"
              color={linkColor}
              fontWeight="bold"
              fontSize="lg"
              _hover={{ textDecoration: "underline" }}
            >
              sonlvs1507@gmail.com
            </Link>
          </PolicySection>

          <PolicySection
            number="13"
            title="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
          >
            <Text color={mutedColor}>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, details about how we have processed it, correct
              inaccuracies, or delete your personal information. These rights
              may be limited in some circumstances by applicable law. To request
              to review, update, or delete your personal information, please
              send a request to:{" "}
              <Link
                href="mailto:sonlvs1507@gmail.com"
                color={linkColor}
                fontWeight="bold"
              >
                sonlvs1507@gmail.com
              </Link>
              .
            </Text>
          </PolicySection>
        </VStack>

        {/* Address Card */}
        <Card
          mt={10}
          bg={footerBg}
          borderRadius="vintage"
          shadow="vintage"
          borderWidth="1px"
          borderColor="cream.300"
        >
          <CardBody>
            <VStack spacing={2} align="flex-start">
              <Heading size="sm" color="cocoa.800" _dark={{ color: "cream.100" }}>
                Contact Address
              </Heading>
              <Text color={mutedColor}>sonlvs1507</Text>
              <Text color={mutedColor}>Da Nang, Vietnam</Text>
            </VStack>
          </CardBody>
        </Card>
      </Container>

      {/* Footer */}
      <Box as="footer" bg={footerBg} mt={12} py={6} borderTopWidth="1px" borderColor="cream.300">
        <Container maxW="4xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={4}
          >
            <HStack spacing={3}>
              <Box position="relative" w="32px" h="32px">
                <Image src={logo} alt="Retro Mart logo" fill sizes="32px" />
              </Box>
              <Text color="cocoa.700" fontWeight="semibold" _dark={{ color: "cream.200" }}>
                Retro Mart
              </Text>
            </HStack>
            <Text color={mutedColor} fontSize="sm">
              © 2025 All Rights Reserved
            </Text>
            <HStack spacing={4}>
              <Link
                href="https://www.facebook.com/profile.php?id=61584641044907"
                color={linkColor}
                fontSize="sm"
                isExternal
              >
                Facebook
              </Link>
              <Link
                href="https://youtu.be/j5dcfCfqaak"
                color={linkColor}
                fontSize="sm"
                isExternal
              >
                YouTube
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
