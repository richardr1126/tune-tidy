import React, { useState, useEffect } from "react";
import {
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Progress,
  Spinner
} from "@chakra-ui/react";

export default function LoadingModal({ isOpen, tracks }) {
  const estimatedTime = (tracks.length * 0.69 / 60) + 1;
  let minutes = Math.round(estimatedTime * 2) / 2;
  if (minutes % 1 === 0.5) {
    minutes = minutes + 0.5;
  }
  const estimatedSeconds = (estimatedTime * 60) + 60; //give an extra minute

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100
            ? prevProgress + 100 / estimatedSeconds
            : 100
        );
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isOpen, estimatedSeconds]);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent m={10}>
        <ModalHeader>Sorting your playlist...</ModalHeader>
        <ModalBody mb={10}>
          <Text>
            This may take a while depending on the size of your playlist.
            <br></br>
            <br></br>
            Since our app is still in beta,
            we are limited by Spotify, in terms of how fast we can sort your playlist. Once the app is out of beta, it will speed up.
            <br></br>
            <br></br>
            Estimated wait time: {minutes} minute(s).
            <br></br>
            <br></br>
            Please don't close or refresh the page, or else the sorting may not be accurate.
          </Text>
          <Center mt={10}>
            {progress !== 100 && (<Progress value={progress} size="md" w="90%" borderRadius={3} />)}
            {progress === 100 && (<Spinner></Spinner>)}
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
