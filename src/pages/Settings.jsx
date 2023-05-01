import { Component } from 'react';
import {
  Box,
  Center,
  Button,
  VStack,
} from '@chakra-ui/react';
import React from 'react';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullUserData: this.props.fullUserData,
    };
  }

  componentDidMount() {
    document.title = `settings | TuneTidy`;
  }

  render() {
    let Support = 'https://support.spotify.com/us/'
    let Account = 'https://www.spotify.com/us/account/overview/'
    return (
      <Center>
        <Box // Larger box settings
          rounded={'sm'}
          my={3}
          mx={[0, 3]}
          p={'15rem'} // padding controls size of box
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={'6px 6px 0 black'}>

          <VStack spacing={10}>
            <Button href={Account} as={'a'} target="_blank">
              Spotify Account
            </Button>
            <Button href={Support} as={'a'} target="_blank">
              Spotify Support
            </Button>
          </VStack>
        </Box>
      </Center>

    );


  }





}

export default Settings;