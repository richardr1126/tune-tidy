import { Component } from 'react';
import { Card, CardBody, CardHeader, HStack, Heading, Image } from '@chakra-ui/react';

class Widget extends Component {
  constructor(props) {
    super(props);
    if (new.target === Widget) {
      throw new TypeError('Cannot construct Widget instances directly');
    }
  }

  renderContent() {
    throw new Error('renderContent must be implemented');
  }

  render() {
    return (
      <Card key={this.title} mt={2} ml={2} mr={2} mb={4} bgColor={'#edf2f7'} boxShadow={'md'}>
        <CardHeader>
          <HStack>
            <Image h={7} src='/Spotify_Logo_CMYK_Black.png' alt='Spotify'/> {/* Spotify logo */}
            <Heading m={'0.25ch !important'} size='md' pb={0.75}>{this.title}</Heading>
          </HStack>
        </CardHeader>
        <CardBody pt={0}>
          {this.renderContent()}
        </CardBody>
      </Card>
    );
  }
}

export default Widget;