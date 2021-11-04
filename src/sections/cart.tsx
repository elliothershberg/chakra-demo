import {
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={6} align="flex-start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack
        spacing={{ base: 3, md: 6 }}
        alignItems={{ base: "flex-start", md: "center" }}
        w="full"
      >
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="Skateboard" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign={{ base: "start", md: "end" }}>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
