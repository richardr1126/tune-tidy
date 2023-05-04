import { Center, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react";

export default function LoadingModal({isOpen}) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Sorting your playlist...
        </ModalHeader>
        <ModalBody mb={10}>
          <Text>
            This may take a few minutes depending on the size of your playlist.
          </Text>
          <Center mt={4}>
            <Spinner />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}