import {
  Box,
  chakra,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react';
//import github icon chakra ui
import { FaGithub } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target='_blank'
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// Functional Footer component
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={10}
          direction={'column'}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <VStack spacing={5} align={'center'}>
            <Text>Copyright © {year} TuneTidy</Text>
            {/* provicy policy link */}
            <Link href='/privacy.html' isExternal>
              <Text>Privacy Policy</Text>
            </Link>
            <HStack>
              <Text>Data provided by</Text>
              <Link href='https://developer.spotify.com/' isExternal>
                <Image h={6} src='/Spotify_Logo_CMYK_Black.png' alt='Spotify' />
              </Link>
            </HStack>
          </VStack>


          <HStack>
            <Text>View source code</Text>
            <SocialButton label={'Github'} href={'https://github.com/richardr1126/tune-tidy'}>
              <FaGithub />
            </SocialButton>
          </HStack>


        </Container>
      </Box>
    </Box>
  );
}