import {
  ModalFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
} from '@chakra-ui/modal'
import { Module } from './Card'
import { Badge } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
export default function StackReport({
  isOpen,
  onClose,
  selectedModules,
}: {
  isOpen: boolean
  onClose: () => void
  selectedModules: Module[]
}): JSX.Element {
  const reducer = (previousValue, currentValue) =>
    previousValue.concat(currentValue)
  const stackList: string[] = Array.from(
    new Set(selectedModules.map((mod) => mod.stack).reduce(reducer, []))
  )
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My Stack Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              {stackList.map((tech) => (
                <Badge
                  variant="outline"
                  colorScheme="green"
                  key={tech}
                  className="m-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Share Report</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
