import React from 'react';
import { Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default function DisplayTracks({ tracks }) {

  return (
    <Card mt={5} key='table_card'>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th isNumeric sx={{ paddingLeft: '0.85rem', paddingRight: '0.85rem' }}>#</Th>
              <Th>Track</Th>
              <Th>Album</Th>
              <Th>Artist</Th>
            </Tr>
          </Thead>
          <Tbody key={'table_body'}>
            {tracks.items.map((track_obj, index) => (
              track_obj.track.id && (
                <Tr key={track_obj.track.id}>
                  <Td isNumeric sx={{ paddingLeft: '0.85rem', paddingRight: '0.85rem' }}>{index + 1}</Td>
                  <Td fontWeight={'bold'}>{track_obj.track.name}</Td>
                  <Td>{track_obj.track.album.name}</Td>
                  <Td fontWeight={'black'}>{track_obj.track.artists[0].name}</Td>
                </Tr>
              )
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
