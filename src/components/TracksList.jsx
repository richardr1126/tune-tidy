import React from 'react';
import { Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default function DisplayTracks({ tracks }) {
  // Create a CSS-in-JS object for the data cell styles
  const dataCellStyle = {
    paddingLeft: '0.85rem',
    paddingRight: '0.85rem',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '30rem',
  };

  return (
    <Card mt={5} key='table_card'>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th isNumeric sx={dataCellStyle}>#</Th>
              <Th>Track</Th>
              <Th>Album</Th>
              <Th>Artist</Th>
            </Tr>
          </Thead>
          <Tbody key={'table_body'}>
            {tracks.items.map((track_obj, index) => (
              track_obj.track.id && (
                <Tr key={track_obj.track.id}>
                  <Td isNumeric sx={dataCellStyle}>{index + 1}</Td>
                  <Td fontWeight={'bold'} sx={dataCellStyle}>{track_obj.track.name}</Td>
                  <Td sx={dataCellStyle}>{track_obj.track.album.name}</Td>
                  <Td fontWeight={'black'} sx={dataCellStyle}>{track_obj.track.artists[0].name}</Td>
                </Tr>
              )
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
