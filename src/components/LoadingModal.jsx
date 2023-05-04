import { Center, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react";

export default function LoadingModal({isOpen}) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent m={10}>
        <ModalHeader>
          Sorting your playlist...
        </ModalHeader>
        <ModalBody mb={10}>
          <Text>
            This may take a minute or so depending on the size of your playlist.
            <br></br>
            <br></br>
            Please wait, or else the sorting may not be accurate.
          </Text>
          <Center mt={10}>
            <Spinner />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}