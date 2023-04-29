import { Component } from 'react';
import {
  Box,
  Center,
  Button,
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

render(){
let Support = 'https://support.spotify.com/us/'
let Account = 'https://www.spotify.com/us/account/overview/'
let Settings = 'https://open.spotify.com/preferences'
return(
        <Center>
          <Box // Larger box settings
            rounded={'sm'}
            my={3}
            mx={[0, 3]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            boxShadow={'6px 6px 0 black'}>
            <Box borderBottom={'1px'} borderColor="black" >

            </Box>
            <Box p={60}>

                <Button display ="block" onClick={() => { window.location.href = Account; }}>
                Manage Account
                </Button>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                <Button display ="block" onClick={() => { window.location.href = Support; }}>
                                Spotify Support
                                </Button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Button display ="block" onClick={() => { window.location.href = Settings; }}>
                                Spotify Settings
                                </Button>


            </Box>
          </Box>
        </Center>

);


}





}

export default Settings;