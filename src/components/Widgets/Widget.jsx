import { Component } from 'react';
import { Card, CardBody, CardHeader, HStack, Heading, Image } from '@chakra-ui/react';

class Widget extends Component {
  constructor(props) {
    super(props);
    if (new.target === Widget) {
      throw new TypeError('Cannot construct Widget instances directly');
    }
    this.isMobile = this.isMobile.bind(this);
  }

  renderContent() {
    throw new Error('Method "renderContent" must be implemented');
  }

  //check if mobile
  isMobile() {
    return window.innerWidth <= 768;
  }



  render() {
    return (
      <Card key={this.title} mt={this.isMobile() ? 2 : 8} ml={this.isMobile() ? 2 : 8} mr={this.isMobile() ? 2 : 8} mb={8} bgColor={'#edf2f7'}>
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