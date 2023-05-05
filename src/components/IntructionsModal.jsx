import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

export default function InstructionsModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={10}>
        <ModalCloseButton />
        <ModalHeader>
          Playlist Editor
        </ModalHeader>
        <ModalBody mb={10}>
          <List spacing={3}>
            <ListItem>
              Welcome to the Playlist Editor!
            </ListItem>
            <ListItem>
              Here you can sort your playlist by many different criteria. And save them as new playlists or overwrite the original.
            </ListItem>
            <ListItem>
              <ListIcon as={AddIcon} color='black' />
              Creat Copy: creates a copy of the sorted playlist and adds it to your Spotify account. Refresh the page after copying to view the new playlist.
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} color='red' />
              Override Plalist: overwrites the original playlist with the sorted version.
              You will lose any manually set custom order you have set for the playlist, however you can always revert back to the Date Added as your sort order.
            </ListItem>
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}