import { Component } from 'react';
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

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
      <Card mt={this.isMobile() ? 2 : 8} ml={this.isMobile() ? 2 : 8} mr={this.isMobile() ? 2 : 8} mb={8} bgColor={'#edf2f7'}>
        <CardHeader>
          <Heading size='md'>{this.title}</Heading>
        </CardHeader>
        <CardBody pt={0}>
          {this.renderContent()}
        </CardBody>
      </Card>
    );
  }
}

export default Widget;