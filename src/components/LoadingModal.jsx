import { useState, useEffect } from 'react';
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

export default function LoadingModal({ isOpen, tracks, progress }) {
  const [startTime, setStartTime] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      if (!startTime) {
        setStartTime(new Date());
      } else {
        const currentTime = new Date();
        const timeElapsed = (currentTime - startTime) / 1000;
        const avgTimePerPercent = timeElapsed / progress;
        const remainingPercent = 100 - progress;
        const remainingSeconds = remainingPercent * avgTimePerPercent;
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = Math.round(remainingSeconds % 60);

        setEstimatedTime({ minutes, seconds });
      }
    }
  }, [progress, startTime]);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent m={10}>
        <ModalHeader>Sorting your playlist...</ModalHeader>
        <ModalBody mb={5}>
          <Text>
            This may take a while depending on the size of your playlist. Please don't close or refresh the page, or else the sorting may not be accurate.
            <br></br>
            <br></br>
            Estimated wait time: {estimatedTime.minutes > 0 ? `${estimatedTime.minutes} minute(s)` : ""} {`${estimatedTime.seconds} second(s)`}.
          </Text>
          <Center mt={5}>
            {progress !== 100 && (<Progress value={progress} size="md" w="100%" borderRadius={3} />)}
            {progress === 100 && (<Spinner></Spinner>)}
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
