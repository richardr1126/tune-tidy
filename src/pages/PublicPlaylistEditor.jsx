import {
  Box, Image, Center, Heading, IconButton, Card, Avatar, WrapItem, Wrap, Spinner, List, ListItem, ListIcon, Button, Text, ButtonGroup, Spacer, useMediaQuery, Container,
} from '@chakra-ui/react';
import { InfoIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
import TracksList from '../components/TracksList';

// Preset playlist


function PublicPlaylistEditor() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI =
    process.env.REACT_APP_NODE_ENV === "dev"
      ? "http://localhost:3000/"
      : window.location.origin + "/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = [
    "user-read-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-top-read",
  ].join("%20");

  const [isMobile] = useMediaQuery("(max-width: 425px)");

  const presetPlaylist = {
    "collaborative": false,
    "description": "",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/03G490cADfPLhsoiJhL9ZH"
    },
    "href": "https://api.spotify.com/v1/playlists/03G490cADfPLhsoiJhL9ZH",
    "id": "03G490cADfPLhsoiJhL9ZH",
    "images": [
      {
        "height": 640,
        "url": "https://mosaic.scdn.co/640/ab67616d0000b27320ee3e86e17f17239bef1f76ab67616d0000b2734121faee8df82c526cbab2beab67616d0000b2734637341b9f507521afa9a778ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://mosaic.scdn.co/300/ab67616d0000b27320ee3e86e17f17239bef1f76ab67616d0000b2734121faee8df82c526cbab2beab67616d0000b2734637341b9f507521afa9a778ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
        "width": 300
      },
      {
        "height": 60,
        "url": "https://mosaic.scdn.co/60/ab67616d0000b27320ee3e86e17f17239bef1f76ab67616d0000b2734121faee8df82c526cbab2beab67616d0000b2734637341b9f507521afa9a778ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
        "width": 60
      }
    ],
    "name": "Greatest Songs of All Time",
    "owner": {
      "display_name": "Richard Roberson",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/uk009zt4gyyjy3web0uz1mvzt"
      },
      "href": "https://api.spotify.com/v1/users/uk009zt4gyyjy3web0uz1mvzt",
      "id": "uk009zt4gyyjy3web0uz1mvzt",
      "type": "user",
      "uri": "spotify:user:uk009zt4gyyjy3web0uz1mvzt"
    },
    "primary_color": null,
    "public": true,
    "snapshot_id": "NCwxNzA1YTk1N2IyZTA1ODYyZDlmMTYzMmU4YThlZTZjM2ZiNGE1YjJj",
    "type": "playlist",
    "uri": "spotify:playlist:03G490cADfPLhsoiJhL9ZH",
    "tracks": [
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
          },
          "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
          "id": "0C3t1htEDTFKcg7F2rNbek",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27320ee3e86e17f17239bef1f76",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0220ee3e86e17f17239bef1f76",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485120ee3e86e17f17239bef1f76",
              "width": 64
            }
          ],
          "name": "Elvis' Golden Records",
          "release_date": "1958-03-21",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "duration_ms": 146480,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC15705223"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE"
        },
        "href": "https://api.spotify.com/v1/tracks/4gphxUgq0JSFv2BCLhNDiE",
        "id": "4gphxUgq0JSFv2BCLhNDiE",
        "is_local": false,
        "name": "Jailhouse Rock",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/dfdeb40e04e26bff50cf5a89cb68cdc4228fcea4?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:4gphxUgq0JSFv2BCLhNDiE",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.647,
        "energy": 0.582,
        "key": 10,
        "loudness": -9.538,
        "mode": 0,
        "speechiness": 0.0755,
        "acousticness": 0.41,
        "instrumentalness": 0.00000193,
        "liveness": 0.0715,
        "valence": 0.915,
        "tempo": 167.396,
        "track_href": "https://api.spotify.com/v1/tracks/4gphxUgq0JSFv2BCLhNDiE",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4gphxUgq0JSFv2BCLhNDiE",
        "time_signature": 4,
        "original_position": 1
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2widuo17g5CEC66IbzveRu"
          },
          "href": "https://api.spotify.com/v1/albums/2widuo17g5CEC66IbzveRu",
          "id": "2widuo17g5CEC66IbzveRu",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024637341b9f507521afa9a778",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514637341b9f507521afa9a778",
              "width": 64
            }
          ],
          "name": "Hotel California (2013 Remaster)",
          "release_date": "1976-12-08",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2widuo17g5CEC66IbzveRu"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0ECwFtbIWEVNwjlrfc6xoL"
            },
            "href": "https://api.spotify.com/v1/artists/0ECwFtbIWEVNwjlrfc6xoL",
            "id": "0ECwFtbIWEVNwjlrfc6xoL",
            "name": "Eagles",
            "type": "artist",
            "uri": "spotify:artist:0ECwFtbIWEVNwjlrfc6xoL"
          }
        ],
        "duration_ms": 391376,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEE11300353"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
        },
        "href": "https://api.spotify.com/v1/tracks/40riOy7x9W7GXjyGp4pjAv",
        "id": "40riOy7x9W7GXjyGp4pjAv",
        "is_local": false,
        "name": "Hotel California - 2013 Remaster",
        "popularity": 85,
        "preview_url": "https://p.scdn.co/mp3-preview/6fedc11d0f55bef176cc1c5725ac1c57f9a2534a?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:40riOy7x9W7GXjyGp4pjAv",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.579,
        "energy": 0.508,
        "key": 2,
        "loudness": -9.484,
        "mode": 1,
        "speechiness": 0.027,
        "acousticness": 0.00574,
        "instrumentalness": 0.000494,
        "liveness": 0.0575,
        "valence": 0.609,
        "tempo": 147.125,
        "track_href": "https://api.spotify.com/v1/tracks/40riOy7x9W7GXjyGp4pjAv",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/40riOy7x9W7GXjyGp4pjAv",
        "time_signature": 4,
        "original_position": 2
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1C2h7mLntPSeVYciMRTF4a"
          },
          "href": "https://api.spotify.com/v1/albums/1C2h7mLntPSeVYciMRTF4a",
          "id": "1C2h7mLntPSeVYciMRTF4a",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be",
              "width": 64
            }
          ],
          "name": "Thriller 25 Super Deluxe Edition",
          "release_date": "2008-02-08",
          "release_date_precision": "day",
          "total_tracks": 30,
          "type": "album",
          "uri": "spotify:album:1C2h7mLntPSeVYciMRTF4a"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
            },
            "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
            "id": "3fMbdgg4jU18AjLCKBhRSm",
            "name": "Michael Jackson",
            "type": "artist",
            "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
          }
        ],
        "duration_ms": 293827,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19902991"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5"
        },
        "href": "https://api.spotify.com/v1/tracks/5ChkMS8OtdzJeqyybCc9R5",
        "id": "5ChkMS8OtdzJeqyybCc9R5",
        "is_local": false,
        "name": "Billie Jean",
        "popularity": 82,
        "preview_url": "https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:5ChkMS8OtdzJeqyybCc9R5",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.92,
        "energy": 0.654,
        "key": 11,
        "loudness": -3.051,
        "mode": 0,
        "speechiness": 0.0401,
        "acousticness": 0.0236,
        "instrumentalness": 0.0153,
        "liveness": 0.036,
        "valence": 0.847,
        "tempo": 117.046,
        "track_href": "https://api.spotify.com/v1/tracks/5ChkMS8OtdzJeqyybCc9R5",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5ChkMS8OtdzJeqyybCc9R5",
        "time_signature": 4,
        "original_position": 3
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1GbtB4zTqAsyfZEsm1RZfx"
          },
          "href": "https://api.spotify.com/v1/albums/1GbtB4zTqAsyfZEsm1RZfx",
          "id": "1GbtB4zTqAsyfZEsm1RZfx",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e319baafd16e84f0408af2a0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e319baafd16e84f0408af2a0",
              "width": 64
            }
          ],
          "name": "A Night At The Opera (2011 Remaster)",
          "release_date": "1975-11-21",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:1GbtB4zTqAsyfZEsm1RZfx"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            },
            "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
            "id": "1dfeR4HaWDbWqFHLkxsg1d",
            "name": "Queen",
            "type": "artist",
            "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
          }
        ],
        "duration_ms": 354320,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71029604"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv"
        },
        "href": "https://api.spotify.com/v1/tracks/4u7EnebtmKWzUH433cf5Qv",
        "id": "4u7EnebtmKWzUH433cf5Qv",
        "is_local": false,
        "name": "Bohemian Rhapsody - Remastered 2011",
        "popularity": 82,
        "preview_url": "https://p.scdn.co/mp3-preview/203630ddba9eb2e11af0e4ce60b8464613d7044e?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 11,
        "type": "audio_features",
        "uri": "spotify:track:4u7EnebtmKWzUH433cf5Qv",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.414,
        "energy": 0.404,
        "key": 0,
        "loudness": -9.928,
        "mode": 0,
        "speechiness": 0.0499,
        "acousticness": 0.271,
        "instrumentalness": 0,
        "liveness": 0.3,
        "valence": 0.224,
        "tempo": 71.105,
        "track_href": "https://api.spotify.com/v1/tracks/4u7EnebtmKWzUH433cf5Qv",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4u7EnebtmKWzUH433cf5Qv",
        "time_signature": 4,
        "original_position": 4
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5"
          },
          "href": "https://api.spotify.com/v1/albums/0jTGHV5xqHPvEcwL8f6YU5",
          "id": "0jTGHV5xqHPvEcwL8f6YU5",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0284243a01af3c77b56fe01ab1",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485184243a01af3c77b56fe01ab1",
              "width": 64
            }
          ],
          "name": "Let It Be (Remastered)",
          "release_date": "1970-05-08",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:0jTGHV5xqHPvEcwL8f6YU5"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            },
            "href": "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
            "id": "3WrFJ7ztbogyGnTHbHJFl2",
            "name": "The Beatles",
            "type": "artist",
            "uri": "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
          }
        ],
        "duration_ms": 243027,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE0601713"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48"
        },
        "href": "https://api.spotify.com/v1/tracks/7iN1s7xHE4ifF5povM6A48",
        "id": "7iN1s7xHE4ifF5povM6A48",
        "is_local": false,
        "name": "Let It Be - Remastered 2009",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:7iN1s7xHE4ifF5povM6A48",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.443,
        "energy": 0.403,
        "key": 0,
        "loudness": -8.339,
        "mode": 1,
        "speechiness": 0.0322,
        "acousticness": 0.631,
        "instrumentalness": 0,
        "liveness": 0.111,
        "valence": 0.41,
        "tempo": 143.462,
        "track_href": "https://api.spotify.com/v1/tracks/7iN1s7xHE4ifF5povM6A48",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7iN1s7xHE4ifF5povM6A48",
        "time_signature": 4,
        "original_position": 5
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2Q5MwpTmtjscaS34mJFXQQ"
          },
          "href": "https://api.spotify.com/v1/albums/2Q5MwpTmtjscaS34mJFXQQ",
          "id": "2Q5MwpTmtjscaS34mJFXQQ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0205c5be85b64eaff732f7cb0b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485105c5be85b64eaff732f7cb0b",
              "width": 64
            }
          ],
          "name": "Out Of Our Heads",
          "release_date": "1965-07-30",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2Q5MwpTmtjscaS34mJFXQQ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe"
            },
            "href": "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe",
            "id": "22bE4uQ6baNwSHPVcDxLCe",
            "name": "The Rolling Stones",
            "type": "artist",
            "uri": "spotify:artist:22bE4uQ6baNwSHPVcDxLCe"
          }
        ],
        "duration_ms": 222813,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA176510160"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2PzU4IB8Dr6mxV3lHuaG34"
        },
        "href": "https://api.spotify.com/v1/tracks/2PzU4IB8Dr6mxV3lHuaG34",
        "id": "2PzU4IB8Dr6mxV3lHuaG34",
        "is_local": false,
        "name": "(I Can't Get No) Satisfaction - Mono Version",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/22782e4be2eb4daa12edd8882a894ffda3601b43?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:2PzU4IB8Dr6mxV3lHuaG34",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.723,
        "energy": 0.863,
        "key": 2,
        "loudness": -7.89,
        "mode": 1,
        "speechiness": 0.0338,
        "acousticness": 0.0383,
        "instrumentalness": 0.0317,
        "liveness": 0.128,
        "valence": 0.931,
        "tempo": 136.302,
        "track_href": "https://api.spotify.com/v1/tracks/2PzU4IB8Dr6mxV3lHuaG34",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2PzU4IB8Dr6mxV3lHuaG34",
        "time_signature": 4,
        "original_position": 6
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/62U7xIHcID94o20Of5ea4D"
          },
          "href": "https://api.spotify.com/v1/albums/62U7xIHcID94o20Of5ea4D",
          "id": "62U7xIHcID94o20Of5ea4D",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734a052b99c042dc15f933145b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024a052b99c042dc15f933145b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514a052b99c042dc15f933145b",
              "width": 64
            }
          ],
          "name": "Toto IV",
          "release_date": "1982-04-08",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:62U7xIHcID94o20Of5ea4D"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0PFtn5NtBbbUNbU9EAmIWF"
            },
            "href": "https://api.spotify.com/v1/artists/0PFtn5NtBbbUNbU9EAmIWF",
            "id": "0PFtn5NtBbbUNbU9EAmIWF",
            "name": "TOTO",
            "type": "artist",
            "uri": "spotify:artist:0PFtn5NtBbbUNbU9EAmIWF"
          }
        ],
        "duration_ms": 295893,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19801941"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX"
        },
        "href": "https://api.spotify.com/v1/tracks/2374M0fQpWi3dLnB54qaLX",
        "id": "2374M0fQpWi3dLnB54qaLX",
        "is_local": false,
        "name": "Africa",
        "popularity": 85,
        "preview_url": "https://p.scdn.co/mp3-preview/86d951a680c33cca769822e0ef854c1b20301b32?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 10,
        "type": "audio_features",
        "uri": "spotify:track:2374M0fQpWi3dLnB54qaLX",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.671,
        "energy": 0.373,
        "key": 9,
        "loudness": -18.064,
        "mode": 1,
        "speechiness": 0.0323,
        "acousticness": 0.257,
        "instrumentalness": 0.0000801,
        "liveness": 0.0481,
        "valence": 0.732,
        "tempo": 92.718,
        "track_href": "https://api.spotify.com/v1/tracks/2374M0fQpWi3dLnB54qaLX",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2374M0fQpWi3dLnB54qaLX",
        "time_signature": 4,
        "original_position": 7
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2QLp07RO6anZHmtcKTEvSC"
          },
          "href": "https://api.spotify.com/v1/albums/2QLp07RO6anZHmtcKTEvSC",
          "id": "2QLp07RO6anZHmtcKTEvSC",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27390ef9760e57fafd8f966d17a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0290ef9760e57fafd8f966d17a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485190ef9760e57fafd8f966d17a",
              "width": 64
            }
          ],
          "name": "Boston",
          "release_date": "1976",
          "release_date_precision": "year",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:2QLp07RO6anZHmtcKTEvSC"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/29kkCKKGXheHuoO829FxWK"
            },
            "href": "https://api.spotify.com/v1/artists/29kkCKKGXheHuoO829FxWK",
            "id": "29kkCKKGXheHuoO829FxWK",
            "name": "Boston",
            "type": "artist",
            "uri": "spotify:artist:29kkCKKGXheHuoO829FxWK"
          }
        ],
        "duration_ms": 285133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM17600941"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1QEEqeFIZktqIpPI4jSVSF"
        },
        "href": "https://api.spotify.com/v1/tracks/1QEEqeFIZktqIpPI4jSVSF",
        "id": "1QEEqeFIZktqIpPI4jSVSF",
        "is_local": false,
        "name": "More Than a Feeling",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/4e8704349932ecb754e3c03cdf3b1563309627a0?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1QEEqeFIZktqIpPI4jSVSF",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.377,
        "energy": 0.681,
        "key": 7,
        "loudness": -8.039,
        "mode": 1,
        "speechiness": 0.0298,
        "acousticness": 0.00088,
        "instrumentalness": 0.0023,
        "liveness": 0.0504,
        "valence": 0.285,
        "tempo": 108.789,
        "track_href": "https://api.spotify.com/v1/tracks/1QEEqeFIZktqIpPI4jSVSF",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1QEEqeFIZktqIpPI4jSVSF",
        "time_signature": 4,
        "original_position": 8
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5YHZaCxCuuK81h4Fimb9rT"
          },
          "href": "https://api.spotify.com/v1/albums/5YHZaCxCuuK81h4Fimb9rT",
          "id": "5YHZaCxCuuK81h4Fimb9rT",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27352038992fc6d7868f31d23b7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0252038992fc6d7868f31d23b7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485152038992fc6d7868f31d23b7",
              "width": 64
            }
          ],
          "name": "Greatest",
          "release_date": "1979-01-01",
          "release_date_precision": "day",
          "total_tracks": 27,
          "type": "album",
          "uri": "spotify:album:5YHZaCxCuuK81h4Fimb9rT"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1LZEQNv7sE11VDY3SdxQeN"
            },
            "href": "https://api.spotify.com/v1/artists/1LZEQNv7sE11VDY3SdxQeN",
            "id": "1LZEQNv7sE11VDY3SdxQeN",
            "name": "Bee Gees",
            "type": "artist",
            "uri": "spotify:artist:1LZEQNv7sE11VDY3SdxQeN"
          }
        ],
        "duration_ms": 285373,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLF057790034"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3mRM4NM8iO7UBqrSigCQFH"
        },
        "href": "https://api.spotify.com/v1/tracks/3mRM4NM8iO7UBqrSigCQFH",
        "id": "3mRM4NM8iO7UBqrSigCQFH",
        "is_local": false,
        "name": "Stayin' Alive",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/63edee39f6b42e3fd5af24232ae58d7b47baadf6?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:3mRM4NM8iO7UBqrSigCQFH",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.703,
        "energy": 0.826,
        "key": 10,
        "loudness": -7.179,
        "mode": 0,
        "speechiness": 0.0341,
        "acousticness": 0.0322,
        "instrumentalness": 0.00629,
        "liveness": 0.179,
        "valence": 0.945,
        "tempo": 103.564,
        "track_href": "https://api.spotify.com/v1/tracks/3mRM4NM8iO7UBqrSigCQFH",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3mRM4NM8iO7UBqrSigCQFH",
        "time_signature": 4,
        "original_position": 9
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2uEf3r9i2bnxwJQsxQ0xQ7"
          },
          "href": "https://api.spotify.com/v1/albums/2uEf3r9i2bnxwJQsxQ0xQ7",
          "id": "2uEf3r9i2bnxwJQsxQ0xQ7",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27328a90d00a2819504364880e4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485128a90d00a2819504364880e4",
              "width": 64
            }
          ],
          "name": "Nevermind (Deluxe Edition)",
          "release_date": "1991-09-26",
          "release_date_precision": "day",
          "total_tracks": 40,
          "type": "album",
          "uri": "spotify:album:2uEf3r9i2bnxwJQsxQ0xQ7"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh"
            },
            "href": "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh",
            "id": "6olE6TJLqED3rqDCT0FyPh",
            "name": "Nirvana",
            "type": "artist",
            "uri": "spotify:artist:6olE6TJLqED3rqDCT0FyPh"
          }
        ],
        "duration_ms": 301920,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USGF19942501"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1f3yAtsJtY87CTmM8RLnxf"
        },
        "href": "https://api.spotify.com/v1/tracks/1f3yAtsJtY87CTmM8RLnxf",
        "id": "1f3yAtsJtY87CTmM8RLnxf",
        "is_local": false,
        "name": "Smells Like Teen Spirit",
        "popularity": 7,
        "preview_url": null,
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1f3yAtsJtY87CTmM8RLnxf",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.502,
        "energy": 0.912,
        "key": 1,
        "loudness": -4.556,
        "mode": 1,
        "speechiness": 0.0564,
        "acousticness": 0.0000255,
        "instrumentalness": 0.000173,
        "liveness": 0.106,
        "valence": 0.72,
        "tempo": 116.761,
        "track_href": "https://api.spotify.com/v1/tracks/1f3yAtsJtY87CTmM8RLnxf",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1f3yAtsJtY87CTmM8RLnxf",
        "time_signature": 4,
        "original_position": 10
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5W9OT0a5iZlBr83a9WMKFY"
          },
          "href": "https://api.spotify.com/v1/albums/5W9OT0a5iZlBr83a9WMKFY",
          "id": "5W9OT0a5iZlBr83a9WMKFY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c8e97cafeb2acb85b21a777e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c8e97cafeb2acb85b21a777e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c8e97cafeb2acb85b21a777e",
              "width": 64
            }
          ],
          "name": "Synchronicity (Remastered 2003)",
          "release_date": "1983-06-17",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:5W9OT0a5iZlBr83a9WMKFY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5NGO30tJxFlKixkPSgXcFE"
            },
            "href": "https://api.spotify.com/v1/artists/5NGO30tJxFlKixkPSgXcFE",
            "id": "5NGO30tJxFlKixkPSgXcFE",
            "name": "The Police",
            "type": "artist",
            "uri": "spotify:artist:5NGO30tJxFlKixkPSgXcFE"
          }
        ],
        "duration_ms": 253920,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAM0201110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1JSTJqkT5qHq8MDJnJbRE1"
        },
        "href": "https://api.spotify.com/v1/tracks/1JSTJqkT5qHq8MDJnJbRE1",
        "id": "1JSTJqkT5qHq8MDJnJbRE1",
        "is_local": false,
        "name": "Every Breath You Take",
        "popularity": 87,
        "preview_url": "https://p.scdn.co/mp3-preview/92d7997134bb18b99eb5fdc65926e4ef613f9781?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:1JSTJqkT5qHq8MDJnJbRE1",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.82,
        "energy": 0.452,
        "key": 1,
        "loudness": -9.796,
        "mode": 1,
        "speechiness": 0.0348,
        "acousticness": 0.543,
        "instrumentalness": 0.00294,
        "liveness": 0.0714,
        "valence": 0.74,
        "tempo": 117.401,
        "track_href": "https://api.spotify.com/v1/tracks/1JSTJqkT5qHq8MDJnJbRE1",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1JSTJqkT5qHq8MDJnJbRE1",
        "time_signature": 4,
        "original_position": 11
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/18Fj7coTfyMi7mEPXIweN7"
          },
          "href": "https://api.spotify.com/v1/albums/18Fj7coTfyMi7mEPXIweN7",
          "id": "18Fj7coTfyMi7mEPXIweN7",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731813ea8f590a0aab2820f922",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021813ea8f590a0aab2820f922",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511813ea8f590a0aab2820f922",
              "width": 64
            }
          ],
          "name": "Don't Play That Song (Mono)",
          "release_date": "1962-08-20",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:18Fj7coTfyMi7mEPXIweN7"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3plJVWt88EqjvtuB4ZDRV3"
            },
            "href": "https://api.spotify.com/v1/artists/3plJVWt88EqjvtuB4ZDRV3",
            "id": "3plJVWt88EqjvtuB4ZDRV3",
            "name": "Ben E. King",
            "type": "artist",
            "uri": "spotify:artist:3plJVWt88EqjvtuB4ZDRV3"
          }
        ],
        "duration_ms": 180056,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21402270"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
        },
        "href": "https://api.spotify.com/v1/tracks/3SdTKo2uVsxFblQjpScoHy",
        "id": "3SdTKo2uVsxFblQjpScoHy",
        "is_local": false,
        "name": "Stand by Me",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/88493701fe90b75e7e559ee5eefd9d7d0c272467?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:3SdTKo2uVsxFblQjpScoHy",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.65,
        "energy": 0.306,
        "key": 9,
        "loudness": -9.443,
        "mode": 1,
        "speechiness": 0.0393,
        "acousticness": 0.57,
        "instrumentalness": 0.00000707,
        "liveness": 0.0707,
        "valence": 0.605,
        "tempo": 118.068,
        "track_href": "https://api.spotify.com/v1/tracks/3SdTKo2uVsxFblQjpScoHy",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3SdTKo2uVsxFblQjpScoHy",
        "time_signature": 4,
        "original_position": 12
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/34hQFIwGTLf03BZQmGL0iy"
          },
          "href": "https://api.spotify.com/v1/albums/34hQFIwGTLf03BZQmGL0iy",
          "id": "34hQFIwGTLf03BZQmGL0iy",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736f6536c2e326fb2b42db90f8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026f6536c2e326fb2b42db90f8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516f6536c2e326fb2b42db90f8",
              "width": 64
            }
          ],
          "name": "I Do Not Want What I Haven't Got",
          "release_date": "1990-07-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:34hQFIwGTLf03BZQmGL0iy"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4sD9znwiVFx9cgRPZ42aQ1"
            },
            "href": "https://api.spotify.com/v1/artists/4sD9znwiVFx9cgRPZ42aQ1",
            "id": "4sD9znwiVFx9cgRPZ42aQ1",
            "name": "Sinéad O'Connor",
            "type": "artist",
            "uri": "spotify:artist:4sD9znwiVFx9cgRPZ42aQ1"
          }
        ],
        "duration_ms": 280040,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYK9000017"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3nvuPQTw2zuFAVuLsC9IYQ"
        },
        "href": "https://api.spotify.com/v1/tracks/3nvuPQTw2zuFAVuLsC9IYQ",
        "id": "3nvuPQTw2zuFAVuLsC9IYQ",
        "is_local": false,
        "name": "Nothing Compares 2 U",
        "popularity": 4,
        "preview_url": null,
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:3nvuPQTw2zuFAVuLsC9IYQ",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.511,
        "energy": 0.574,
        "key": 5,
        "loudness": -7.016,
        "mode": 1,
        "speechiness": 0.0273,
        "acousticness": 0.0425,
        "instrumentalness": 0.0000233,
        "liveness": 0.105,
        "valence": 0.161,
        "tempo": 119.917,
        "track_href": "https://api.spotify.com/v1/tracks/3nvuPQTw2zuFAVuLsC9IYQ",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3nvuPQTw2zuFAVuLsC9IYQ",
        "time_signature": 4,
        "original_position": 13
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/43wpzak9OmQfrjyksuGwp0"
          },
          "href": "https://api.spotify.com/v1/albums/43wpzak9OmQfrjyksuGwp0",
          "id": "43wpzak9OmQfrjyksuGwp0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c5653f9038e42efad2f8a266",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c5653f9038e42efad2f8a266",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c5653f9038e42efad2f8a266",
              "width": 64
            }
          ],
          "name": "Escape (Bonus Track Version)",
          "release_date": "1981",
          "release_date_precision": "year",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:43wpzak9OmQfrjyksuGwp0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0rvjqX7ttXeg3mTy8Xscbt"
            },
            "href": "https://api.spotify.com/v1/artists/0rvjqX7ttXeg3mTy8Xscbt",
            "id": "0rvjqX7ttXeg3mTy8Xscbt",
            "name": "Journey",
            "type": "artist",
            "uri": "spotify:artist:0rvjqX7ttXeg3mTy8Xscbt"
          }
        ],
        "duration_ms": 250987,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM18100116"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4bHsxqR3GMrXTxEPLuK5ue"
        },
        "href": "https://api.spotify.com/v1/tracks/4bHsxqR3GMrXTxEPLuK5ue",
        "id": "4bHsxqR3GMrXTxEPLuK5ue",
        "is_local": false,
        "name": "Don't Stop Believin'",
        "popularity": 84,
        "preview_url": "https://p.scdn.co/mp3-preview/f7b88f49127f9d414e8f4c0cbbe190648cf3cf9b?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:4bHsxqR3GMrXTxEPLuK5ue",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.5,
        "energy": 0.748,
        "key": 4,
        "loudness": -9.072,
        "mode": 1,
        "speechiness": 0.0363,
        "acousticness": 0.127,
        "instrumentalness": 0,
        "liveness": 0.447,
        "valence": 0.514,
        "tempo": 118.852,
        "track_href": "https://api.spotify.com/v1/tracks/4bHsxqR3GMrXTxEPLuK5ue",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4bHsxqR3GMrXTxEPLuK5ue",
        "time_signature": 4,
        "original_position": 14
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6XrulH3xpy0VbxC9UC8igg"
          },
          "href": "https://api.spotify.com/v1/albums/6XrulH3xpy0VbxC9UC8igg",
          "id": "6XrulH3xpy0VbxC9UC8igg",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273846af87b262891e9000c5120",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02846af87b262891e9000c5120",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851846af87b262891e9000c5120",
              "width": 64
            }
          ],
          "name": "Looking For Faces",
          "release_date": "2021-03-12",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6XrulH3xpy0VbxC9UC8igg"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6TSjJlhB2taxea58rCkMkj"
            },
            "href": "https://api.spotify.com/v1/artists/6TSjJlhB2taxea58rCkMkj",
            "id": "6TSjJlhB2taxea58rCkMkj",
            "name": "The Vices",
            "type": "artist",
            "uri": "spotify:artist:6TSjJlhB2taxea58rCkMkj"
          }
        ],
        "duration_ms": 217167,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLW3Q2000013"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0Qhp2Sd0JuxbFiWoATAcBV"
        },
        "href": "https://api.spotify.com/v1/tracks/0Qhp2Sd0JuxbFiWoATAcBV",
        "id": "0Qhp2Sd0JuxbFiWoATAcBV",
        "is_local": false,
        "name": "Before Your Birth",
        "popularity": 43,
        "preview_url": "https://p.scdn.co/mp3-preview/d32ec66b67ef668dcbe7b9c58e1220aef8b1e138?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:0Qhp2Sd0JuxbFiWoATAcBV",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.438,
        "energy": 0.805,
        "key": 5,
        "loudness": -5.62,
        "mode": 0,
        "speechiness": 0.0366,
        "acousticness": 0.00161,
        "instrumentalness": 0.0000431,
        "liveness": 0.238,
        "valence": 0.541,
        "tempo": 138.664,
        "track_href": "https://api.spotify.com/v1/tracks/0Qhp2Sd0JuxbFiWoATAcBV",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0Qhp2Sd0JuxbFiWoATAcBV",
        "time_signature": 4,
        "original_position": 15
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0xzaemKucrJpYhyl7TltAk"
          },
          "href": "https://api.spotify.com/v1/albums/0xzaemKucrJpYhyl7TltAk",
          "id": "0xzaemKucrJpYhyl7TltAk",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0299581550ef9746ca582bb3cc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485199581550ef9746ca582bb3cc",
              "width": 64
            }
          ],
          "name": "Imagine",
          "release_date": "1971-09-09",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0xzaemKucrJpYhyl7TltAk"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4x1nvY2FN8jxqAFA0DA02H"
            },
            "href": "https://api.spotify.com/v1/artists/4x1nvY2FN8jxqAFA0DA02H",
            "id": "4x1nvY2FN8jxqAFA0DA02H",
            "name": "John Lennon",
            "type": "artist",
            "uri": "spotify:artist:4x1nvY2FN8jxqAFA0DA02H"
          }
        ],
        "duration_ms": 187867,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1000769"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9"
        },
        "href": "https://api.spotify.com/v1/tracks/7pKfPomDEeI4TPT6EOYjn9",
        "id": "7pKfPomDEeI4TPT6EOYjn9",
        "is_local": false,
        "name": "Imagine - Remastered 2010",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/051f8a21cb606b65a4e1b475cff6733a2297fe9f?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7pKfPomDEeI4TPT6EOYjn9",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.547,
        "energy": 0.257,
        "key": 0,
        "loudness": -12.358,
        "mode": 1,
        "speechiness": 0.0252,
        "acousticness": 0.907,
        "instrumentalness": 0.183,
        "liveness": 0.0935,
        "valence": 0.169,
        "tempo": 75.752,
        "track_href": "https://api.spotify.com/v1/tracks/7pKfPomDEeI4TPT6EOYjn9",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7pKfPomDEeI4TPT6EOYjn9",
        "time_signature": 4,
        "original_position": 16
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4FA68GsblSfvKZZRfM1tI1"
          },
          "href": "https://api.spotify.com/v1/albums/4FA68GsblSfvKZZRfM1tI1",
          "id": "4FA68GsblSfvKZZRfM1tI1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734384b6976cadaec272114022",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024384b6976cadaec272114022",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514384b6976cadaec272114022",
              "width": 64
            }
          ],
          "name": "Dynasty",
          "release_date": "1979-03-23",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:4FA68GsblSfvKZZRfM1tI1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/07XSN3sPlIlB2L2XNcTwJw"
            },
            "href": "https://api.spotify.com/v1/artists/07XSN3sPlIlB2L2XNcTwJw",
            "id": "07XSN3sPlIlB2L2XNcTwJw",
            "name": "KISS",
            "type": "artist",
            "uri": "spotify:artist:07XSN3sPlIlB2L2XNcTwJw"
          }
        ],
        "duration_ms": 271240,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USPR39330175"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/07q0QVgO56EorrSGHC48y3"
        },
        "href": "https://api.spotify.com/v1/tracks/07q0QVgO56EorrSGHC48y3",
        "id": "07q0QVgO56EorrSGHC48y3",
        "is_local": false,
        "name": "I Was Made For Lovin' You",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/b1b157ab314c7b457e21318a7035c6a44555f1b7?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:07q0QVgO56EorrSGHC48y3",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.768,
        "energy": 0.852,
        "key": 4,
        "loudness": -6.215,
        "mode": 1,
        "speechiness": 0.038,
        "acousticness": 0.214,
        "instrumentalness": 0.0000736,
        "liveness": 0.0723,
        "valence": 0.867,
        "tempo": 128.373,
        "track_href": "https://api.spotify.com/v1/tracks/07q0QVgO56EorrSGHC48y3",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/07q0QVgO56EorrSGHC48y3",
        "time_signature": 4,
        "original_position": 17
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1C2h7mLntPSeVYciMRTF4a"
          },
          "href": "https://api.spotify.com/v1/albums/1C2h7mLntPSeVYciMRTF4a",
          "id": "1C2h7mLntPSeVYciMRTF4a",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be",
              "width": 64
            }
          ],
          "name": "Thriller 25 Super Deluxe Edition",
          "release_date": "2008-02-08",
          "release_date_precision": "day",
          "total_tracks": 30,
          "type": "album",
          "uri": "spotify:album:1C2h7mLntPSeVYciMRTF4a"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
            },
            "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
            "id": "3fMbdgg4jU18AjLCKBhRSm",
            "name": "Michael Jackson",
            "type": "artist",
            "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
          }
        ],
        "duration_ms": 258040,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19902990"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1OOtq8tRnDM8kG2gqUPjAj"
        },
        "href": "https://api.spotify.com/v1/tracks/1OOtq8tRnDM8kG2gqUPjAj",
        "id": "1OOtq8tRnDM8kG2gqUPjAj",
        "is_local": false,
        "name": "Beat It",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/174b7bd06c6ddb87d25acec6afc731c6edc9db62?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:1OOtq8tRnDM8kG2gqUPjAj",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.776,
        "energy": 0.867,
        "key": 3,
        "loudness": -3.704,
        "mode": 0,
        "speechiness": 0.0479,
        "acousticness": 0.0495,
        "instrumentalness": 0.00000792,
        "liveness": 0.197,
        "valence": 0.918,
        "tempo": 138.827,
        "track_href": "https://api.spotify.com/v1/tracks/1OOtq8tRnDM8kG2gqUPjAj",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1OOtq8tRnDM8kG2gqUPjAj",
        "time_signature": 4,
        "original_position": 18
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/70lQYZtypdCALtFVlQAcvx"
          },
          "href": "https://api.spotify.com/v1/albums/70lQYZtypdCALtFVlQAcvx",
          "id": "70lQYZtypdCALtFVlQAcvx",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fc4f17340773c6c3579fea0d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fc4f17340773c6c3579fea0d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fc4f17340773c6c3579fea0d",
              "width": 64
            }
          ],
          "name": "Led Zeppelin II (1994 Remaster)",
          "release_date": "1969-10-22",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:70lQYZtypdCALtFVlQAcvx"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp"
            },
            "href": "https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp",
            "id": "36QJpDe2go2KgaRleHCDTp",
            "name": "Led Zeppelin",
            "type": "artist",
            "uri": "spotify:artist:36QJpDe2go2KgaRleHCDTp"
          }
        ],
        "duration_ms": 333893,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT29900471"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0hCB0YR03f6AmQaHbwWDe8"
        },
        "href": "https://api.spotify.com/v1/tracks/0hCB0YR03f6AmQaHbwWDe8",
        "id": "0hCB0YR03f6AmQaHbwWDe8",
        "is_local": false,
        "name": "Whole Lotta Love - 1990 Remaster",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/89f3dc45265602fa874c23d638538af0f2c6b56a?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:0hCB0YR03f6AmQaHbwWDe8",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.412,
        "energy": 0.902,
        "key": 9,
        "loudness": -11.6,
        "mode": 1,
        "speechiness": 0.405,
        "acousticness": 0.0484,
        "instrumentalness": 0.131,
        "liveness": 0.405,
        "valence": 0.422,
        "tempo": 89.74,
        "track_href": "https://api.spotify.com/v1/tracks/0hCB0YR03f6AmQaHbwWDe8",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0hCB0YR03f6AmQaHbwWDe8",
        "time_signature": 4,
        "original_position": 19
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1ER3B6zev5JEAaqhnyyfbf"
          },
          "href": "https://api.spotify.com/v1/albums/1ER3B6zev5JEAaqhnyyfbf",
          "id": "1ER3B6zev5JEAaqhnyyfbf",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e8dd4db47e7177c63b0b7d53",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e8dd4db47e7177c63b0b7d53",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e8dd4db47e7177c63b0b7d53",
              "width": 64
            }
          ],
          "name": "Hunting High and Low",
          "release_date": "1985-06-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1ER3B6zev5JEAaqhnyyfbf"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2jzc5TC5TVFLXQlBNiIUzE"
            },
            "href": "https://api.spotify.com/v1/artists/2jzc5TC5TVFLXQlBNiIUzE",
            "id": "2jzc5TC5TVFLXQlBNiIUzE",
            "name": "a-ha",
            "type": "artist",
            "uri": "spotify:artist:2jzc5TC5TVFLXQlBNiIUzE"
          }
        ],
        "duration_ms": 225280,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB19901214"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L"
        },
        "href": "https://api.spotify.com/v1/tracks/2WfaOiMkCvy7F5fcp2zZ8L",
        "id": "2WfaOiMkCvy7F5fcp2zZ8L",
        "is_local": false,
        "name": "Take on Me",
        "popularity": 88,
        "preview_url": "https://p.scdn.co/mp3-preview/ed66a8c444c35b2f5029c04ae8e18f69d952c2bb?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2WfaOiMkCvy7F5fcp2zZ8L",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.573,
        "energy": 0.902,
        "key": 6,
        "loudness": -7.638,
        "mode": 0,
        "speechiness": 0.054,
        "acousticness": 0.018,
        "instrumentalness": 0.00125,
        "liveness": 0.0928,
        "valence": 0.876,
        "tempo": 84.412,
        "track_href": "https://api.spotify.com/v1/tracks/2WfaOiMkCvy7F5fcp2zZ8L",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2WfaOiMkCvy7F5fcp2zZ8L",
        "time_signature": 4,
        "original_position": 20
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/30Perjew8HyGkdSmqguYyg"
          },
          "href": "https://api.spotify.com/v1/albums/30Perjew8HyGkdSmqguYyg",
          "id": "30Perjew8HyGkdSmqguYyg",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273153d79816d853f2694b2cc70",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02153d79816d853f2694b2cc70",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851153d79816d853f2694b2cc70",
              "width": 64
            }
          ],
          "name": "Blood Sugar Sex Magik (Deluxe Edition)",
          "release_date": "1991-09-24",
          "release_date_precision": "day",
          "total_tracks": 19,
          "type": "album",
          "uri": "spotify:album:30Perjew8HyGkdSmqguYyg"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
            },
            "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
            "id": "0L8ExT028jH3ddEcZwqJJ5",
            "name": "Red Hot Chili Peppers",
            "type": "artist",
            "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
          }
        ],
        "duration_ms": 264307,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB19901576"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3d9DChrdc6BOeFsbrZ3Is0"
        },
        "href": "https://api.spotify.com/v1/tracks/3d9DChrdc6BOeFsbrZ3Is0",
        "id": "3d9DChrdc6BOeFsbrZ3Is0",
        "is_local": false,
        "name": "Under the Bridge",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/46b0229c06712c5b5e143724c0617e51a9b6e432?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 11,
        "type": "audio_features",
        "uri": "spotify:track:3d9DChrdc6BOeFsbrZ3Is0",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.559,
        "energy": 0.345,
        "key": 4,
        "loudness": -13.496,
        "mode": 1,
        "speechiness": 0.0459,
        "acousticness": 0.0576,
        "instrumentalness": 0.000105,
        "liveness": 0.141,
        "valence": 0.458,
        "tempo": 84.581,
        "track_href": "https://api.spotify.com/v1/tracks/3d9DChrdc6BOeFsbrZ3Is0",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3d9DChrdc6BOeFsbrZ3Is0",
        "time_signature": 4,
        "original_position": 21
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0fYctMs4EvoEqzDh8Kmg5g"
          },
          "href": "https://api.spotify.com/v1/albums/0fYctMs4EvoEqzDh8Kmg5g",
          "id": "0fYctMs4EvoEqzDh8Kmg5g",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737632fe25cd368dc205927f0c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027632fe25cd368dc205927f0c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517632fe25cd368dc205927f0c",
              "width": 64
            }
          ],
          "name": "Gangsta's Paradise",
          "release_date": "1995-11-07",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:0fYctMs4EvoEqzDh8Kmg5g"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3y24n3XhZ96wgwRXjvS17T"
            },
            "href": "https://api.spotify.com/v1/artists/3y24n3XhZ96wgwRXjvS17T",
            "id": "3y24n3XhZ96wgwRXjvS17T",
            "name": "Coolio",
            "type": "artist",
            "uri": "spotify:artist:3y24n3XhZ96wgwRXjvS17T"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2LhsePRtgCo4THVKULQBL7"
            },
            "href": "https://api.spotify.com/v1/artists/2LhsePRtgCo4THVKULQBL7",
            "id": "2LhsePRtgCo4THVKULQBL7",
            "name": "L.V.",
            "type": "artist",
            "uri": "spotify:artist:2LhsePRtgCo4THVKULQBL7"
          }
        ],
        "duration_ms": 240693,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USTB10400128"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7lQWRAjyhTpCWFC0jmclT4"
        },
        "href": "https://api.spotify.com/v1/tracks/7lQWRAjyhTpCWFC0jmclT4",
        "id": "7lQWRAjyhTpCWFC0jmclT4",
        "is_local": false,
        "name": "Gangsta's Paradise",
        "popularity": 7,
        "preview_url": null,
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:7lQWRAjyhTpCWFC0jmclT4",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.647,
        "energy": 0.514,
        "key": 8,
        "loudness": -10.05,
        "mode": 1,
        "speechiness": 0.0593,
        "acousticness": 0.0655,
        "instrumentalness": 0,
        "liveness": 0.398,
        "valence": 0.387,
        "tempo": 79.974,
        "track_href": "https://api.spotify.com/v1/tracks/7lQWRAjyhTpCWFC0jmclT4",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7lQWRAjyhTpCWFC0jmclT4",
        "time_signature": 4,
        "original_position": 22
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5"
          },
          "href": "https://api.spotify.com/v1/albums/3I9Z1nDCL4E0cP62flcbI5",
          "id": "3I9Z1nDCL4E0cP62flcbI5",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0268384dd85fd5e95831252f60",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485168384dd85fd5e95831252f60",
              "width": 64
            }
          ],
          "name": "Appetite For Destruction",
          "release_date": "1987-07-21",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:3I9Z1nDCL4E0cP62flcbI5"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
            },
            "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
            "id": "3qm84nBOXUEQ2vnTfUTTFC",
            "name": "Guns N' Roses",
            "type": "artist",
            "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
          }
        ],
        "duration_ms": 354520,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USGF18714809"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51"
        },
        "href": "https://api.spotify.com/v1/tracks/7o2CTH4ctstm8TNelqjb51",
        "id": "7o2CTH4ctstm8TNelqjb51",
        "is_local": false,
        "name": "Sweet Child O' Mine",
        "popularity": 61,
        "preview_url": null,
        "track": true,
        "track_number": 9,
        "type": "audio_features",
        "uri": "spotify:track:7o2CTH4ctstm8TNelqjb51",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.454,
        "energy": 0.91,
        "key": 6,
        "loudness": -7.766,
        "mode": 1,
        "speechiness": 0.0448,
        "acousticness": 0.0866,
        "instrumentalness": 0.0996,
        "liveness": 0.116,
        "valence": 0.629,
        "tempo": 125.116,
        "track_href": "https://api.spotify.com/v1/tracks/7o2CTH4ctstm8TNelqjb51",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7o2CTH4ctstm8TNelqjb51",
        "time_signature": 4,
        "original_position": 23
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7JVJlkNNobS0GSoy4tCS96"
          },
          "href": "https://api.spotify.com/v1/albums/7JVJlkNNobS0GSoy4tCS96",
          "id": "7JVJlkNNobS0GSoy4tCS96",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273456c0b5d0316a80dc600802e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02456c0b5d0316a80dc600802e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851456c0b5d0316a80dc600802e",
              "width": 64
            }
          ],
          "name": "The Bodyguard - Original Soundtrack Album",
          "release_date": "1992-11-17",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:7JVJlkNNobS0GSoy4tCS96"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6XpaIBNiVzIetEPCWDvAFP"
            },
            "href": "https://api.spotify.com/v1/artists/6XpaIBNiVzIetEPCWDvAFP",
            "id": "6XpaIBNiVzIetEPCWDvAFP",
            "name": "Whitney Houston",
            "type": "artist",
            "uri": "spotify:artist:6XpaIBNiVzIetEPCWDvAFP"
          }
        ],
        "duration_ms": 271093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAR19200110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4eHbdreAnSOrDDsFfc4Fpm"
        },
        "href": "https://api.spotify.com/v1/tracks/4eHbdreAnSOrDDsFfc4Fpm",
        "id": "4eHbdreAnSOrDDsFfc4Fpm",
        "is_local": false,
        "name": "I Will Always Love You",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/db431eff82899d9af76c9156d66d29aa951c21d8?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:4eHbdreAnSOrDDsFfc4Fpm",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.332,
        "energy": 0.214,
        "key": 4,
        "loudness": -12.518,
        "mode": 1,
        "speechiness": 0.0349,
        "acousticness": 0.845,
        "instrumentalness": 0.00000562,
        "liveness": 0.0839,
        "valence": 0.11,
        "tempo": 67.531,
        "track_href": "https://api.spotify.com/v1/tracks/4eHbdreAnSOrDDsFfc4Fpm",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4eHbdreAnSOrDDsFfc4Fpm",
        "time_signature": 4,
        "original_position": 24
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6hmmX5UP4rIvOpGSaPerV8"
          },
          "href": "https://api.spotify.com/v1/albums/6hmmX5UP4rIvOpGSaPerV8",
          "id": "6hmmX5UP4rIvOpGSaPerV8",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737602becfedf6e25752cb54ff",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027602becfedf6e25752cb54ff",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517602becfedf6e25752cb54ff",
              "width": 64
            }
          ],
          "name": "Tracy Chapman",
          "release_date": "1988-04-05",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6hmmX5UP4rIvOpGSaPerV8"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7oPgCQqMMXEXrNau5vxYZP"
            },
            "href": "https://api.spotify.com/v1/artists/7oPgCQqMMXEXrNau5vxYZP",
            "id": "7oPgCQqMMXEXrNau5vxYZP",
            "name": "Tracy Chapman",
            "type": "artist",
            "uri": "spotify:artist:7oPgCQqMMXEXrNau5vxYZP"
          }
        ],
        "duration_ms": 296800,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEE10180719"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2M9ro2krNb7nr7HSprkEgo"
        },
        "href": "https://api.spotify.com/v1/tracks/2M9ro2krNb7nr7HSprkEgo",
        "id": "2M9ro2krNb7nr7HSprkEgo",
        "is_local": false,
        "name": "Fast Car",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/ce0d4429f7d48e488e464ecf03a690ada14da02c?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:2M9ro2krNb7nr7HSprkEgo",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.711,
        "energy": 0.292,
        "key": 4,
        "loudness": -15.523,
        "mode": 0,
        "speechiness": 0.037,
        "acousticness": 0.313,
        "instrumentalness": 0,
        "liveness": 0.131,
        "valence": 0.194,
        "tempo": 103.951,
        "track_href": "https://api.spotify.com/v1/tracks/2M9ro2krNb7nr7HSprkEgo",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2M9ro2krNb7nr7HSprkEgo",
        "time_signature": 4,
        "original_position": 25
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3Seie4YIVLWtPw2hQrouNY"
          },
          "href": "https://api.spotify.com/v1/albums/3Seie4YIVLWtPw2hQrouNY",
          "id": "3Seie4YIVLWtPw2hQrouNY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cdea00c6905f588e1f72ccad",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cdea00c6905f588e1f72ccad",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cdea00c6905f588e1f72ccad",
              "width": 64
            }
          ],
          "name": "The Man Who Invented Soul",
          "release_date": "2000-09-26",
          "release_date_precision": "day",
          "total_tracks": 96,
          "type": "album",
          "uri": "spotify:album:3Seie4YIVLWtPw2hQrouNY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6hnWRPzGGKiapVX1UCdEAC"
            },
            "href": "https://api.spotify.com/v1/artists/6hnWRPzGGKiapVX1UCdEAC",
            "id": "6hnWRPzGGKiapVX1UCdEAC",
            "name": "Sam Cooke",
            "type": "artist",
            "uri": "spotify:artist:6hnWRPzGGKiapVX1UCdEAC"
          }
        ],
        "duration_ms": 125440,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC10000389"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2g2GkH3vZHk4lWzBjgQ6nY"
        },
        "href": "https://api.spotify.com/v1/tracks/2g2GkH3vZHk4lWzBjgQ6nY",
        "id": "2g2GkH3vZHk4lWzBjgQ6nY",
        "is_local": false,
        "name": "(What A) Wonderful World",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/e31b83cabf540ec00af15181e56b44609d8a30e7?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 21,
        "type": "audio_features",
        "uri": "spotify:track:2g2GkH3vZHk4lWzBjgQ6nY",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.691,
        "energy": 0.507,
        "key": 11,
        "loudness": -10.23,
        "mode": 1,
        "speechiness": 0.0343,
        "acousticness": 0.627,
        "instrumentalness": 0,
        "liveness": 0.457,
        "valence": 0.885,
        "tempo": 128.518,
        "track_href": "https://api.spotify.com/v1/tracks/2g2GkH3vZHk4lWzBjgQ6nY",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2g2GkH3vZHk4lWzBjgQ6nY",
        "time_signature": 4,
        "original_position": 26
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc"
          },
          "href": "https://api.spotify.com/v1/albums/7nXJ5k4XgRj5OLg9m8V3zc",
          "id": "7nXJ5k4XgRj5OLg9m8V3zc",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d52bfb90ee8dfeda8378b99b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d52bfb90ee8dfeda8378b99b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d52bfb90ee8dfeda8378b99b",
              "width": 64
            }
          ],
          "name": "Purple Rain",
          "release_date": "1984-06-25",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:7nXJ5k4XgRj5OLg9m8V3zc"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5a2EaR3hamoenG9rDuVn8j"
            },
            "href": "https://api.spotify.com/v1/artists/5a2EaR3hamoenG9rDuVn8j",
            "id": "5a2EaR3hamoenG9rDuVn8j",
            "name": "Prince",
            "type": "artist",
            "uri": "spotify:artist:5a2EaR3hamoenG9rDuVn8j"
          }
        ],
        "duration_ms": 520787,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB10001880"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz"
        },
        "href": "https://api.spotify.com/v1/tracks/54X78diSLoUDI3joC2bjMz",
        "id": "54X78diSLoUDI3joC2bjMz",
        "is_local": false,
        "name": "Purple Rain",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/0f35470724b760a0d96d34e7be3fe8ddb6dcd6f4?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 9,
        "type": "audio_features",
        "uri": "spotify:track:54X78diSLoUDI3joC2bjMz",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.367,
        "energy": 0.452,
        "key": 10,
        "loudness": -10.422,
        "mode": 1,
        "speechiness": 0.0307,
        "acousticness": 0.0353,
        "instrumentalness": 0.00228,
        "liveness": 0.689,
        "valence": 0.189,
        "tempo": 113.066,
        "track_href": "https://api.spotify.com/v1/tracks/54X78diSLoUDI3joC2bjMz",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/54X78diSLoUDI3joC2bjMz",
        "time_signature": 4,
        "original_position": 27
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
          },
          "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
          "id": "0C3t1htEDTFKcg7F2rNbek",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27320ee3e86e17f17239bef1f76",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0220ee3e86e17f17239bef1f76",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485120ee3e86e17f17239bef1f76",
              "width": 64
            }
          ],
          "name": "Elvis' Golden Records",
          "release_date": "1958-03-21",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "duration_ms": 136027,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC15602857"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/64Ny7djQ6rNJspquof2KoX"
        },
        "href": "https://api.spotify.com/v1/tracks/64Ny7djQ6rNJspquof2KoX",
        "id": "64Ny7djQ6rNJspquof2KoX",
        "is_local": false,
        "name": "Hound Dog",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/5565c6d80f853affdfccb9f71f2ec170c95861ef?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:64Ny7djQ6rNJspquof2KoX",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.494,
        "energy": 0.756,
        "key": 0,
        "loudness": -8.492,
        "mode": 1,
        "speechiness": 0.0499,
        "acousticness": 0.733,
        "instrumentalness": 0.00505,
        "liveness": 0.76,
        "valence": 0.949,
        "tempo": 86.895,
        "track_href": "https://api.spotify.com/v1/tracks/64Ny7djQ6rNJspquof2KoX",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/64Ny7djQ6rNJspquof2KoX",
        "time_signature": 4,
        "original_position": 28
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1FvdZ1oizXwF9bxogujoF0"
          },
          "href": "https://api.spotify.com/v1/albums/1FvdZ1oizXwF9bxogujoF0",
          "id": "1FvdZ1oizXwF9bxogujoF0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27352f532df7ba3269b0242fed9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0252f532df7ba3269b0242fed9",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485152f532df7ba3269b0242fed9",
              "width": 64
            }
          ],
          "name": "She's So Unusual",
          "release_date": "1983-10-14",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1FvdZ1oizXwF9bxogujoF0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
            },
            "href": "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
            "id": "2BTZIqw0ntH9MvilQ3ewNY",
            "name": "Cyndi Lauper",
            "type": "artist",
            "uri": "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
          }
        ],
        "duration_ms": 238267,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM18300548"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4y1LsJpmMti1PfRQV9AWWe"
        },
        "href": "https://api.spotify.com/v1/tracks/4y1LsJpmMti1PfRQV9AWWe",
        "id": "4y1LsJpmMti1PfRQV9AWWe",
        "is_local": false,
        "name": "Girls Just Want to Have Fun",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/d8dc4f720786902e4b84fe1130c35bb74398edfa?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:4y1LsJpmMti1PfRQV9AWWe",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.71,
        "energy": 0.799,
        "key": 6,
        "loudness": -4.897,
        "mode": 1,
        "speechiness": 0.0328,
        "acousticness": 0.22,
        "instrumentalness": 0.000602,
        "liveness": 0.349,
        "valence": 0.725,
        "tempo": 120.372,
        "track_href": "https://api.spotify.com/v1/tracks/4y1LsJpmMti1PfRQV9AWWe",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4y1LsJpmMti1PfRQV9AWWe",
        "time_signature": 4,
        "original_position": 29
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh"
          },
          "href": "https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh",
          "id": "7vEJAtP3KgKSpOHVgwm3Eh",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02582d56ce20fe0146ffa0e5cf",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851582d56ce20fe0146ffa0e5cf",
              "width": 64
            }
          ],
          "name": "1 (Remastered)",
          "release_date": "2000-11-13",
          "release_date_precision": "day",
          "total_tracks": 27,
          "type": "album",
          "uri": "spotify:album:7vEJAtP3KgKSpOHVgwm3Eh"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            },
            "href": "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
            "id": "3WrFJ7ztbogyGnTHbHJFl2",
            "name": "The Beatles",
            "type": "artist",
            "uri": "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
          }
        ],
        "duration_ms": 425653,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71505902"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0aym2LBJBk9DAYuHHutrIl"
        },
        "href": "https://api.spotify.com/v1/tracks/0aym2LBJBk9DAYuHHutrIl",
        "id": "0aym2LBJBk9DAYuHHutrIl",
        "is_local": false,
        "name": "Hey Jude - Remastered 2015",
        "popularity": 75,
        "preview_url": "https://p.scdn.co/mp3-preview/406c5ddd5f4dc479ce64824b750ad90b2e36e24d?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 21,
        "type": "audio_features",
        "uri": "spotify:track:0aym2LBJBk9DAYuHHutrIl",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.386,
        "energy": 0.607,
        "key": 10,
        "loudness": -7.7,
        "mode": 1,
        "speechiness": 0.0261,
        "acousticness": 0.0112,
        "instrumentalness": 0.0000138,
        "liveness": 0.088,
        "valence": 0.532,
        "tempo": 147.207,
        "track_href": "https://api.spotify.com/v1/tracks/0aym2LBJBk9DAYuHHutrIl",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0aym2LBJBk9DAYuHHutrIl",
        "time_signature": 4,
        "original_position": 30
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6RfgcwsOUlWkGNAd6zjjYd"
          },
          "href": "https://api.spotify.com/v1/albums/6RfgcwsOUlWkGNAd6zjjYd",
          "id": "6RfgcwsOUlWkGNAd6zjjYd",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734d1a7a3e5043173883653ffc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024d1a7a3e5043173883653ffc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514d1a7a3e5043173883653ffc",
              "width": 64
            }
          ],
          "name": "Sweet Caroline",
          "release_date": "1969-06-06",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:6RfgcwsOUlWkGNAd6zjjYd"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7mEIug7XUlQHikrFxjTWes"
            },
            "href": "https://api.spotify.com/v1/artists/7mEIug7XUlQHikrFxjTWes",
            "id": "7mEIug7XUlQHikrFxjTWes",
            "name": "Neil Diamond",
            "type": "artist",
            "uri": "spotify:artist:7mEIug7XUlQHikrFxjTWes"
          }
        ],
        "duration_ms": 203573,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC16991138"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/62AuGbAkt8Ox2IrFFb8GKV"
        },
        "href": "https://api.spotify.com/v1/tracks/62AuGbAkt8Ox2IrFFb8GKV",
        "id": "62AuGbAkt8Ox2IrFFb8GKV",
        "is_local": false,
        "name": "Sweet Caroline",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/02b08ccf7ade7793f7165c3b00f8a3bb6469666c?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 13,
        "type": "audio_features",
        "uri": "spotify:track:62AuGbAkt8Ox2IrFFb8GKV",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.529,
        "energy": 0.127,
        "key": 11,
        "loudness": -16.066,
        "mode": 1,
        "speechiness": 0.0274,
        "acousticness": 0.611,
        "instrumentalness": 0.000109,
        "liveness": 0.237,
        "valence": 0.578,
        "tempo": 63.05,
        "track_href": "https://api.spotify.com/v1/tracks/62AuGbAkt8Ox2IrFFb8GKV",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/62AuGbAkt8Ox2IrFFb8GKV",
        "time_signature": 4,
        "original_position": 31
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5LqviduT0g0J0ypFrFSwCE"
          },
          "href": "https://api.spotify.com/v1/albums/5LqviduT0g0J0ypFrFSwCE",
          "id": "5LqviduT0g0J0ypFrFSwCE",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739173e50e99bdea2400222f02",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029173e50e99bdea2400222f02",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519173e50e99bdea2400222f02",
              "width": 64
            }
          ],
          "name": "United",
          "release_date": "1967-08-29",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:5LqviduT0g0J0ypFrFSwCE"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3koiLjNrgRTNbOwViDipeA"
            },
            "href": "https://api.spotify.com/v1/artists/3koiLjNrgRTNbOwViDipeA",
            "id": "3koiLjNrgRTNbOwViDipeA",
            "name": "Marvin Gaye",
            "type": "artist",
            "uri": "spotify:artist:3koiLjNrgRTNbOwViDipeA"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/75jNCko3SnEMI5gwGqrbb8"
            },
            "href": "https://api.spotify.com/v1/artists/75jNCko3SnEMI5gwGqrbb8",
            "id": "75jNCko3SnEMI5gwGqrbb8",
            "name": "Tammi Terrell",
            "type": "artist",
            "uri": "spotify:artist:75jNCko3SnEMI5gwGqrbb8"
          }
        ],
        "duration_ms": 151667,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMO16700534"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7tqhbajSfrz2F7E1Z75ASX"
        },
        "href": "https://api.spotify.com/v1/tracks/7tqhbajSfrz2F7E1Z75ASX",
        "id": "7tqhbajSfrz2F7E1Z75ASX",
        "is_local": false,
        "name": "Ain't No Mountain High Enough",
        "popularity": 85,
        "preview_url": "https://p.scdn.co/mp3-preview/7301aee11d8646c25071e0825b0794aa609092db?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7tqhbajSfrz2F7E1Z75ASX",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.663,
        "energy": 0.6,
        "key": 7,
        "loudness": -10.87,
        "mode": 1,
        "speechiness": 0.032,
        "acousticness": 0.43,
        "instrumentalness": 0,
        "liveness": 0.184,
        "valence": 0.8,
        "tempo": 129.991,
        "track_href": "https://api.spotify.com/v1/tracks/7tqhbajSfrz2F7E1Z75ASX",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7tqhbajSfrz2F7E1Z75ASX",
        "time_signature": 4,
        "original_position": 32
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6yEuIwTQpciH1qtj7mP5GK"
          },
          "href": "https://api.spotify.com/v1/albums/6yEuIwTQpciH1qtj7mP5GK",
          "id": "6yEuIwTQpciH1qtj7mP5GK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e2dd4e821bcc3f70dc0c8ffd",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e2dd4e821bcc3f70dc0c8ffd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e2dd4e821bcc3f70dc0c8ffd",
              "width": 64
            }
          ],
          "name": "Out Of Time (25th Anniversary Edition)",
          "release_date": "1991-03-12",
          "release_date_precision": "day",
          "total_tracks": 30,
          "type": "album",
          "uri": "spotify:album:6yEuIwTQpciH1qtj7mP5GK"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4KWTAlx2RvbpseOGMEmROg"
            },
            "href": "https://api.spotify.com/v1/artists/4KWTAlx2RvbpseOGMEmROg",
            "id": "4KWTAlx2RvbpseOGMEmROg",
            "name": "R.E.M.",
            "type": "artist",
            "uri": "spotify:artist:4KWTAlx2RvbpseOGMEmROg"
          }
        ],
        "duration_ms": 268427,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USC4R1605373"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/31AOj9sFz2gM0O3hMARRBx"
        },
        "href": "https://api.spotify.com/v1/tracks/31AOj9sFz2gM0O3hMARRBx",
        "id": "31AOj9sFz2gM0O3hMARRBx",
        "is_local": false,
        "name": "Losing My Religion",
        "popularity": 85,
        "preview_url": "https://p.scdn.co/mp3-preview/184d86f6c2b531830190011f00c5780fa7a2e1f2?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:31AOj9sFz2gM0O3hMARRBx",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.666,
        "energy": 0.855,
        "key": 9,
        "loudness": -5.051,
        "mode": 0,
        "speechiness": 0.0295,
        "acousticness": 0.179,
        "instrumentalness": 0.0000012,
        "liveness": 0.0987,
        "valence": 0.803,
        "tempo": 125.639,
        "track_href": "https://api.spotify.com/v1/tracks/31AOj9sFz2gM0O3hMARRBx",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/31AOj9sFz2gM0O3hMARRBx",
        "time_signature": 4,
        "original_position": 33
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5WndWfzGwCkHzAbQXVkg2V"
          },
          "href": "https://api.spotify.com/v1/albums/5WndWfzGwCkHzAbQXVkg2V",
          "id": "5WndWfzGwCkHzAbQXVkg2V",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026aa9314b7ddfbd8f036ba3ac",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516aa9314b7ddfbd8f036ba3ac",
              "width": 64
            }
          ],
          "name": "I Never Loved a Man the Way I Love You",
          "release_date": "1967-03-10",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:5WndWfzGwCkHzAbQXVkg2V"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok"
            },
            "href": "https://api.spotify.com/v1/artists/7nwUJBm0HE4ZxD3f5cy5ok",
            "id": "7nwUJBm0HE4ZxD3f5cy5ok",
            "name": "Aretha Franklin",
            "type": "artist",
            "uri": "spotify:artist:7nwUJBm0HE4ZxD3f5cy5ok"
          }
        ],
        "duration_ms": 147600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT20801240"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7s25THrKz86DM225dOYwnr"
        },
        "href": "https://api.spotify.com/v1/tracks/7s25THrKz86DM225dOYwnr",
        "id": "7s25THrKz86DM225dOYwnr",
        "is_local": false,
        "name": "Respect",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/7768dd513193e30ab1ad19deeff2dcc63d2c7555?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7s25THrKz86DM225dOYwnr",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.805,
        "energy": 0.558,
        "key": 0,
        "loudness": -5.226,
        "mode": 1,
        "speechiness": 0.041,
        "acousticness": 0.164,
        "instrumentalness": 0.000022,
        "liveness": 0.0546,
        "valence": 0.965,
        "tempo": 114.95,
        "track_href": "https://api.spotify.com/v1/tracks/7s25THrKz86DM225dOYwnr",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7s25THrKz86DM225dOYwnr",
        "time_signature": 4,
        "original_position": 34
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4jNQS0Zqffh49WilWfMVvp"
          },
          "href": "https://api.spotify.com/v1/albums/4jNQS0Zqffh49WilWfMVvp",
          "id": "4jNQS0Zqffh49WilWfMVvp",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fcecbb69c63a6020ac253c43",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fcecbb69c63a6020ac253c43",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fcecbb69c63a6020ac253c43",
              "width": 64
            }
          ],
          "name": "Equanimity",
          "release_date": "2023-01-22",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4jNQS0Zqffh49WilWfMVvp"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2MV4hVN8Z7DiG2PZIYCFJN"
            },
            "href": "https://api.spotify.com/v1/artists/2MV4hVN8Z7DiG2PZIYCFJN",
            "id": "2MV4hVN8Z7DiG2PZIYCFJN",
            "name": "EVOj.",
            "type": "artist",
            "uri": "spotify:artist:2MV4hVN8Z7DiG2PZIYCFJN"
          }
        ],
        "duration_ms": 180413,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "TCAGT2304768"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5xE57VXZLjtm89s3ejJAQ3"
        },
        "href": "https://api.spotify.com/v1/tracks/5xE57VXZLjtm89s3ejJAQ3",
        "id": "5xE57VXZLjtm89s3ejJAQ3",
        "is_local": false,
        "name": "6:15",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/9eb43c75d1c16d663eee4d497f1ccf976bacde56?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:5xE57VXZLjtm89s3ejJAQ3",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.671,
        "energy": 0.43,
        "key": 5,
        "loudness": -11.784,
        "mode": 0,
        "speechiness": 0.0782,
        "acousticness": 0.44,
        "instrumentalness": 0,
        "liveness": 0.142,
        "valence": 0.698,
        "tempo": 152.019,
        "track_href": "https://api.spotify.com/v1/tracks/5xE57VXZLjtm89s3ejJAQ3",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5xE57VXZLjtm89s3ejJAQ3",
        "time_signature": 4,
        "original_position": 35
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
          },
          "href": "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
          "id": "0ETFjACtuP2ADo6LFhL6HN",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851dc30583ba717007b00cceb25",
              "width": 64
            }
          ],
          "name": "Abbey Road (Remastered)",
          "release_date": "1969-09-26",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            },
            "href": "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
            "id": "3WrFJ7ztbogyGnTHbHJFl2",
            "name": "The Beatles",
            "type": "artist",
            "uri": "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
          }
        ],
        "duration_ms": 185733,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE0601696"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2"
        },
        "href": "https://api.spotify.com/v1/tracks/6dGnYIeXmHdcikdzNNDMm2",
        "id": "6dGnYIeXmHdcikdzNNDMm2",
        "is_local": false,
        "name": "Here Comes The Sun - Remastered 2009",
        "popularity": 84,
        "preview_url": "https://p.scdn.co/mp3-preview/433dd3e00a82d231b060e2c7ab10f29249bf7942?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:6dGnYIeXmHdcikdzNNDMm2",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.557,
        "energy": 0.54,
        "key": 9,
        "loudness": -10.484,
        "mode": 1,
        "speechiness": 0.0347,
        "acousticness": 0.0339,
        "instrumentalness": 0.00248,
        "liveness": 0.179,
        "valence": 0.394,
        "tempo": 129.171,
        "track_href": "https://api.spotify.com/v1/tracks/6dGnYIeXmHdcikdzNNDMm2",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/6dGnYIeXmHdcikdzNNDMm2",
        "time_signature": 4,
        "original_position": 36
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4MgtwNYjD89Oj2km6eFRYd"
          },
          "href": "https://api.spotify.com/v1/albums/4MgtwNYjD89Oj2km6eFRYd",
          "id": "4MgtwNYjD89Oj2km6eFRYd",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736e5689a9d09ac1fc2cba2ab0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026e5689a9d09ac1fc2cba2ab0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516e5689a9d09ac1fc2cba2ab0",
              "width": 64
            }
          ],
          "name": "September",
          "release_date": "2018-04-17",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:4MgtwNYjD89Oj2km6eFRYd"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4QQgXkCYTt3BlENzhyNETg"
            },
            "href": "https://api.spotify.com/v1/artists/4QQgXkCYTt3BlENzhyNETg",
            "id": "4QQgXkCYTt3BlENzhyNETg",
            "name": "Earth, Wind & Fire",
            "type": "artist",
            "uri": "spotify:artist:4QQgXkCYTt3BlENzhyNETg"
          }
        ],
        "duration_ms": 215080,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM17800845"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7Cuk8jsPPoNYQWXK9XRFvG"
        },
        "href": "https://api.spotify.com/v1/tracks/7Cuk8jsPPoNYQWXK9XRFvG",
        "id": "7Cuk8jsPPoNYQWXK9XRFvG",
        "is_local": false,
        "name": "September",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/4a80cc8373c7b4b4663d330b30e97b24abc808e9?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7Cuk8jsPPoNYQWXK9XRFvG",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.694,
        "energy": 0.831,
        "key": 9,
        "loudness": -7.288,
        "mode": 1,
        "speechiness": 0.0301,
        "acousticness": 0.165,
        "instrumentalness": 0.000892,
        "liveness": 0.25,
        "valence": 0.98,
        "tempo": 125.901,
        "track_href": "https://api.spotify.com/v1/tracks/7Cuk8jsPPoNYQWXK9XRFvG",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7Cuk8jsPPoNYQWXK9XRFvG",
        "time_signature": 4,
        "original_position": 37
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/44Ig8dzqOkvkGDzaUof9lK"
          },
          "href": "https://api.spotify.com/v1/albums/44Ig8dzqOkvkGDzaUof9lK",
          "id": "44Ig8dzqOkvkGDzaUof9lK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c8a11e48c91a982d086afc69",
              "width": 64
            }
          ],
          "name": "Led Zeppelin IV (Deluxe Edition)",
          "release_date": "1971-11-08",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:44Ig8dzqOkvkGDzaUof9lK"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp"
            },
            "href": "https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp",
            "id": "36QJpDe2go2KgaRleHCDTp",
            "name": "Led Zeppelin",
            "type": "artist",
            "uri": "spotify:artist:36QJpDe2go2KgaRleHCDTp"
          }
        ],
        "duration_ms": 482830,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21300959"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc"
        },
        "href": "https://api.spotify.com/v1/tracks/5CQ30WqJwcep0pYcV4AMNc",
        "id": "5CQ30WqJwcep0pYcV4AMNc",
        "is_local": false,
        "name": "Stairway to Heaven - Remaster",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/337c8d45ac66899bc2db9ef3ed9438fe1d035ab1?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 4,
        "type": "audio_features",
        "uri": "spotify:track:5CQ30WqJwcep0pYcV4AMNc",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.338,
        "energy": 0.34,
        "key": 9,
        "loudness": -12.049,
        "mode": 0,
        "speechiness": 0.0339,
        "acousticness": 0.58,
        "instrumentalness": 0.0032,
        "liveness": 0.116,
        "valence": 0.197,
        "tempo": 82.433,
        "track_href": "https://api.spotify.com/v1/tracks/5CQ30WqJwcep0pYcV4AMNc",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5CQ30WqJwcep0pYcV4AMNc",
        "time_signature": 4,
        "original_position": 38
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5qbfJCo6OjXgT1Llrpo5N2"
          },
          "href": "https://api.spotify.com/v1/albums/5qbfJCo6OjXgT1Llrpo5N2",
          "id": "5qbfJCo6OjXgT1Llrpo5N2",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273409fb7d05c8315d64faddb9e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02409fb7d05c8315d64faddb9e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851409fb7d05c8315d64faddb9e",
              "width": 64
            }
          ],
          "name": "Strange Again",
          "release_date": "2022-01-04",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5qbfJCo6OjXgT1Llrpo5N2"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6TSjJlhB2taxea58rCkMkj"
            },
            "href": "https://api.spotify.com/v1/artists/6TSjJlhB2taxea58rCkMkj",
            "id": "6TSjJlhB2taxea58rCkMkj",
            "name": "The Vices",
            "type": "artist",
            "uri": "spotify:artist:6TSjJlhB2taxea58rCkMkj"
          }
        ],
        "duration_ms": 175293,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLW3Q2200001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5R5BwWJepZnwEmRBJIZcm5"
        },
        "href": "https://api.spotify.com/v1/tracks/5R5BwWJepZnwEmRBJIZcm5",
        "id": "5R5BwWJepZnwEmRBJIZcm5",
        "is_local": false,
        "name": "Strange Again",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/f70059653e4b7e34ab273e34fcac295058d98729?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:5R5BwWJepZnwEmRBJIZcm5",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.437,
        "energy": 0.882,
        "key": 11,
        "loudness": -5.374,
        "mode": 0,
        "speechiness": 0.048,
        "acousticness": 0.0000982,
        "instrumentalness": 0.0387,
        "liveness": 0.366,
        "valence": 0.721,
        "tempo": 154.995,
        "track_href": "https://api.spotify.com/v1/tracks/5R5BwWJepZnwEmRBJIZcm5",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5R5BwWJepZnwEmRBJIZcm5",
        "time_signature": 4,
        "original_position": 39
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2rCS6Xwx32V27pvgFzLzlT"
          },
          "href": "https://api.spotify.com/v1/albums/2rCS6Xwx32V27pvgFzLzlT",
          "id": "2rCS6Xwx32V27pvgFzLzlT",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739dfee5404d5e0763998c958e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029dfee5404d5e0763998c958e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519dfee5404d5e0763998c958e",
              "width": 64
            }
          ],
          "name": "Dire Straits",
          "release_date": "1978-10-07",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2rCS6Xwx32V27pvgFzLzlT"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0WwSkZ7LtFUFjGjMZBMt6T"
            },
            "href": "https://api.spotify.com/v1/artists/0WwSkZ7LtFUFjGjMZBMt6T",
            "id": "0WwSkZ7LtFUFjGjMZBMt6T",
            "name": "Dire Straits",
            "type": "artist",
            "uri": "spotify:artist:0WwSkZ7LtFUFjGjMZBMt6T"
          }
        ],
        "duration_ms": 348624,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBF089601041"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/37Tmv4NnfQeb0ZgUC4fOJj"
        },
        "href": "https://api.spotify.com/v1/tracks/37Tmv4NnfQeb0ZgUC4fOJj",
        "id": "37Tmv4NnfQeb0ZgUC4fOJj",
        "is_local": false,
        "name": "Sultans Of Swing",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/8390857597d4428105d7ef933c3b5f3a3e6afc6d?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:37Tmv4NnfQeb0ZgUC4fOJj",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.733,
        "energy": 0.794,
        "key": 5,
        "loudness": -10.023,
        "mode": 1,
        "speechiness": 0.0307,
        "acousticness": 0.0614,
        "instrumentalness": 0.0367,
        "liveness": 0.33,
        "valence": 0.931,
        "tempo": 148.174,
        "track_href": "https://api.spotify.com/v1/tracks/37Tmv4NnfQeb0ZgUC4fOJj",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/37Tmv4NnfQeb0ZgUC4fOJj",
        "time_signature": 4,
        "original_position": 40
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3t3BbpFJiGcXl4jI5CRLLA"
          },
          "href": "https://api.spotify.com/v1/albums/3t3BbpFJiGcXl4jI5CRLLA",
          "id": "3t3BbpFJiGcXl4jI5CRLLA",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f4a2ccbe20d6d52f16816812",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f4a2ccbe20d6d52f16816812",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f4a2ccbe20d6d52f16816812",
              "width": 64
            }
          ],
          "name": "Rocky IV",
          "release_date": "1985",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3t3BbpFJiGcXl4jI5CRLLA"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/26bcq2nyj5GB7uRr558iQg"
            },
            "href": "https://api.spotify.com/v1/artists/26bcq2nyj5GB7uRr558iQg",
            "id": "26bcq2nyj5GB7uRr558iQg",
            "name": "Survivor",
            "type": "artist",
            "uri": "spotify:artist:26bcq2nyj5GB7uRr558iQg"
          }
        ],
        "duration_ms": 245640,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USVR19600010"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2"
        },
        "href": "https://api.spotify.com/v1/tracks/2KH16WveTQWT6KOG9Rg6e2",
        "id": "2KH16WveTQWT6KOG9Rg6e2",
        "is_local": false,
        "name": "Eye of the Tiger",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/ae5fdf6639eeb270ed9732750b65a3656b807154?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 4,
        "type": "audio_features",
        "uri": "spotify:track:2KH16WveTQWT6KOG9Rg6e2",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.817,
        "energy": 0.599,
        "key": 0,
        "loudness": -9.249,
        "mode": 0,
        "speechiness": 0.0328,
        "acousticness": 0.132,
        "instrumentalness": 0.000311,
        "liveness": 0.0873,
        "valence": 0.548,
        "tempo": 108.873,
        "track_href": "https://api.spotify.com/v1/tracks/2KH16WveTQWT6KOG9Rg6e2",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2KH16WveTQWT6KOG9Rg6e2",
        "time_signature": 4,
        "original_position": 41
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2IU9ftOgyRL2caQGWK1jjX"
          },
          "href": "https://api.spotify.com/v1/albums/2IU9ftOgyRL2caQGWK1jjX",
          "id": "2IU9ftOgyRL2caQGWK1jjX",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736b18e58a06aac7763abe319a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026b18e58a06aac7763abe319a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516b18e58a06aac7763abe319a",
              "width": 64
            }
          ],
          "name": "Like a Virgin",
          "release_date": "1984-11-12",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2IU9ftOgyRL2caQGWK1jjX"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW"
            },
            "href": "https://api.spotify.com/v1/artists/6tbjWDEIzxoDsBA1FuhfPW",
            "id": "6tbjWDEIzxoDsBA1FuhfPW",
            "name": "Madonna",
            "type": "artist",
            "uri": "spotify:artist:6tbjWDEIzxoDsBA1FuhfPW"
          }
        ],
        "duration_ms": 218627,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB10002748"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1ZPlNanZsJSPK5h9YZZFbZ"
        },
        "href": "https://api.spotify.com/v1/tracks/1ZPlNanZsJSPK5h9YZZFbZ",
        "id": "1ZPlNanZsJSPK5h9YZZFbZ",
        "is_local": false,
        "name": "Like a Virgin",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/432313c4732bd242c04b5eafee08bdc93f616251?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:1ZPlNanZsJSPK5h9YZZFbZ",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.771,
        "energy": 0.655,
        "key": 3,
        "loudness": -10.842,
        "mode": 0,
        "speechiness": 0.0372,
        "acousticness": 0.152,
        "instrumentalness": 0.00197,
        "liveness": 0.0685,
        "valence": 0.97,
        "tempo": 119.747,
        "track_href": "https://api.spotify.com/v1/tracks/1ZPlNanZsJSPK5h9YZZFbZ",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1ZPlNanZsJSPK5h9YZZFbZ",
        "time_signature": 4,
        "original_position": 42
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1cM3r0WQZWNkCpEbmFjLln"
          },
          "href": "https://api.spotify.com/v1/albums/1cM3r0WQZWNkCpEbmFjLln",
          "id": "1cM3r0WQZWNkCpEbmFjLln",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f6954c1f074f66907a8c5483",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f6954c1f074f66907a8c5483",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f6954c1f074f66907a8c5483",
              "width": 64
            }
          ],
          "name": "Face Value (Deluxe Editon)",
          "release_date": "1981-01-01",
          "release_date_precision": "day",
          "total_tracks": 24,
          "type": "album",
          "uri": "spotify:album:1cM3r0WQZWNkCpEbmFjLln"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4lxfqrEsLX6N1N4OCSkILp"
            },
            "href": "https://api.spotify.com/v1/artists/4lxfqrEsLX6N1N4OCSkILp",
            "id": "4lxfqrEsLX6N1N4OCSkILp",
            "name": "Phil Collins",
            "type": "artist",
            "uri": "spotify:artist:4lxfqrEsLX6N1N4OCSkILp"
          }
        ],
        "duration_ms": 336453,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21502120"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/18AXbzPzBS8Y3AkgSxzJPb"
        },
        "href": "https://api.spotify.com/v1/tracks/18AXbzPzBS8Y3AkgSxzJPb",
        "id": "18AXbzPzBS8Y3AkgSxzJPb",
        "is_local": false,
        "name": "In The Air Tonight - 2015 Remastered",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/31c39a7bd82cc18f28c48ead9b95a0fa03147c3e?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:18AXbzPzBS8Y3AkgSxzJPb",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.446,
        "energy": 0.239,
        "key": 0,
        "loudness": -13.945,
        "mode": 1,
        "speechiness": 0.0316,
        "acousticness": 0.551,
        "instrumentalness": 0.0000041,
        "liveness": 0.0697,
        "valence": 0.298,
        "tempo": 189.507,
        "track_href": "https://api.spotify.com/v1/tracks/18AXbzPzBS8Y3AkgSxzJPb",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/18AXbzPzBS8Y3AkgSxzJPb",
        "time_signature": 4,
        "original_position": 43
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4E1itnJOhTMRSATNaxh0Sq"
          },
          "href": "https://api.spotify.com/v1/albums/4E1itnJOhTMRSATNaxh0Sq",
          "id": "4E1itnJOhTMRSATNaxh0Sq",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739e447b59bd3e2cbefaa31d91",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029e447b59bd3e2cbefaa31d91",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519e447b59bd3e2cbefaa31d91",
              "width": 64
            }
          ],
          "name": "The Definitive Collection",
          "release_date": "2002-10-29",
          "release_date_precision": "day",
          "total_tracks": 21,
          "type": "album",
          "uri": "spotify:album:4E1itnJOhTMRSATNaxh0Sq"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7guDJrEfX3qb6FEbdPA5qi"
            },
            "href": "https://api.spotify.com/v1/artists/7guDJrEfX3qb6FEbdPA5qi",
            "id": "7guDJrEfX3qb6FEbdPA5qi",
            "name": "Stevie Wonder",
            "type": "artist",
            "uri": "spotify:artist:7guDJrEfX3qb6FEbdPA5qi"
          }
        ],
        "duration_ms": 245493,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMO10000310"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1h2xVEoJORqrg71HocgqXd"
        },
        "href": "https://api.spotify.com/v1/tracks/1h2xVEoJORqrg71HocgqXd",
        "id": "1h2xVEoJORqrg71HocgqXd",
        "is_local": false,
        "name": "Superstition - Single Version",
        "popularity": 77,
        "preview_url": "https://p.scdn.co/mp3-preview/b7b70cda4f3c1bff01624cca71f6defb8cebcc37?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 9,
        "type": "audio_features",
        "uri": "spotify:track:1h2xVEoJORqrg71HocgqXd",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.633,
        "energy": 0.634,
        "key": 8,
        "loudness": -12.115,
        "mode": 1,
        "speechiness": 0.0725,
        "acousticness": 0.038,
        "instrumentalness": 0.0064,
        "liveness": 0.0385,
        "valence": 0.872,
        "tempo": 100.499,
        "track_href": "https://api.spotify.com/v1/tracks/1h2xVEoJORqrg71HocgqXd",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1h2xVEoJORqrg71HocgqXd",
        "time_signature": 4,
        "original_position": 44
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1uF0z2Aht8KP5hQ1j27oAy"
          },
          "href": "https://api.spotify.com/v1/albums/1uF0z2Aht8KP5hQ1j27oAy",
          "id": "1uF0z2Aht8KP5hQ1j27oAy",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732569fd0c7718cfbb872e4eec",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022569fd0c7718cfbb872e4eec",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512569fd0c7718cfbb872e4eec",
              "width": 64
            }
          ],
          "name": "Forged In Love",
          "release_date": "2023-05-05",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1uF0z2Aht8KP5hQ1j27oAy"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0QMSXK3Vv4FVzO1KjguMbE"
            },
            "href": "https://api.spotify.com/v1/artists/0QMSXK3Vv4FVzO1KjguMbE",
            "id": "0QMSXK3Vv4FVzO1KjguMbE",
            "name": "Cyrill Reiser",
            "type": "artist",
            "uri": "spotify:artist:0QMSXK3Vv4FVzO1KjguMbE"
          }
        ],
        "duration_ms": 250379,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "UK6822208663"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0tCbaFCDURikEeebS8C3CL"
        },
        "href": "https://api.spotify.com/v1/tracks/0tCbaFCDURikEeebS8C3CL",
        "id": "0tCbaFCDURikEeebS8C3CL",
        "is_local": false,
        "name": "Forged In Love",
        "popularity": 30,
        "preview_url": "https://p.scdn.co/mp3-preview/a7dc7454237fd8e1a73ec20af73feb58f16d43f3?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:0tCbaFCDURikEeebS8C3CL",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.504,
        "energy": 0.6,
        "key": 5,
        "loudness": -7.532,
        "mode": 0,
        "speechiness": 0.039,
        "acousticness": 0.0325,
        "instrumentalness": 0,
        "liveness": 0.116,
        "valence": 0.477,
        "tempo": 77.516,
        "track_href": "https://api.spotify.com/v1/tracks/0tCbaFCDURikEeebS8C3CL",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0tCbaFCDURikEeebS8C3CL",
        "time_signature": 4,
        "original_position": 45
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/46JQVqJpOg8opDLUl1qHT1"
          },
          "href": "https://api.spotify.com/v1/albums/46JQVqJpOg8opDLUl1qHT1",
          "id": "46JQVqJpOg8opDLUl1qHT1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734ad6e5838f15401ff7d62856",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024ad6e5838f15401ff7d62856",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514ad6e5838f15401ff7d62856",
              "width": 64
            }
          ],
          "name": "Bad Boy's 10th Anniversary- The Hits",
          "release_date": "2004-03-09",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:46JQVqJpOg8opDLUl1qHT1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/59wfkuBoNyhDMQGCljbUbA"
            },
            "href": "https://api.spotify.com/v1/artists/59wfkuBoNyhDMQGCljbUbA",
            "id": "59wfkuBoNyhDMQGCljbUbA",
            "name": "Diddy",
            "type": "artist",
            "uri": "spotify:artist:59wfkuBoNyhDMQGCljbUbA"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5NDMothbpdpq2xHqSjrrWn"
            },
            "href": "https://api.spotify.com/v1/artists/5NDMothbpdpq2xHqSjrrWn",
            "id": "5NDMothbpdpq2xHqSjrrWn",
            "name": "Faith Evans",
            "type": "artist",
            "uri": "spotify:artist:5NDMothbpdpq2xHqSjrrWn"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7urq0VfqxEYEEiZUkebXT4"
            },
            "href": "https://api.spotify.com/v1/artists/7urq0VfqxEYEEiZUkebXT4",
            "id": "7urq0VfqxEYEEiZUkebXT4",
            "name": "112",
            "type": "artist",
            "uri": "spotify:artist:7urq0VfqxEYEEiZUkebXT4"
          }
        ],
        "duration_ms": 301520,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USBB40581044"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3QHONiXGMGU3z68mQInncF"
        },
        "href": "https://api.spotify.com/v1/tracks/3QHONiXGMGU3z68mQInncF",
        "id": "3QHONiXGMGU3z68mQInncF",
        "is_local": false,
        "name": "I'll Be Missing You (feat. 112)",
        "popularity": 73,
        "preview_url": "https://p.scdn.co/mp3-preview/7a927e05125e0dad4b1786354f44b6b5cd878bf5?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 13,
        "type": "audio_features",
        "uri": "spotify:track:3QHONiXGMGU3z68mQInncF",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.862,
        "energy": 0.479,
        "key": 7,
        "loudness": -9.199,
        "mode": 1,
        "speechiness": 0.0645,
        "acousticness": 0.0523,
        "instrumentalness": 0.00126,
        "liveness": 0.589,
        "valence": 0.924,
        "tempo": 109.877,
        "track_href": "https://api.spotify.com/v1/tracks/3QHONiXGMGU3z68mQInncF",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3QHONiXGMGU3z68mQInncF",
        "time_signature": 4,
        "original_position": 46
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0kBfgEilUFCMIQY5IOjG4t"
          },
          "href": "https://api.spotify.com/v1/albums/0kBfgEilUFCMIQY5IOjG4t",
          "id": "0kBfgEilUFCMIQY5IOjG4t",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731336b31b6a1799f0de5807ac",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021336b31b6a1799f0de5807ac",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511336b31b6a1799f0de5807ac",
              "width": 64
            }
          ],
          "name": "Slippery When Wet",
          "release_date": "1986-08-16",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0kBfgEilUFCMIQY5IOjG4t"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
            },
            "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
            "id": "58lV9VcRSjABbAbfWS6skp",
            "name": "Bon Jovi",
            "type": "artist",
            "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
          }
        ],
        "duration_ms": 249293,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USPR38619998"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/37ZJ0p5Jm13JPevGcx4SkF"
        },
        "href": "https://api.spotify.com/v1/tracks/37ZJ0p5Jm13JPevGcx4SkF",
        "id": "37ZJ0p5Jm13JPevGcx4SkF",
        "is_local": false,
        "name": "Livin' On A Prayer",
        "popularity": 86,
        "preview_url": "https://p.scdn.co/mp3-preview/2a84c209d6bfe17da820bbc28d1e610a5d304a53?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:37ZJ0p5Jm13JPevGcx4SkF",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.532,
        "energy": 0.887,
        "key": 0,
        "loudness": -3.757,
        "mode": 1,
        "speechiness": 0.0335,
        "acousticness": 0.0778,
        "instrumentalness": 0.000214,
        "liveness": 0.294,
        "valence": 0.795,
        "tempo": 122.511,
        "track_href": "https://api.spotify.com/v1/tracks/37ZJ0p5Jm13JPevGcx4SkF",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/37ZJ0p5Jm13JPevGcx4SkF",
        "time_signature": 4,
        "original_position": 47
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ZytN2cY4Zjrr9ukb2rqTP"
          },
          "href": "https://api.spotify.com/v1/albums/2ZytN2cY4Zjrr9ukb2rqTP",
          "id": "2ZytN2cY4Zjrr9ukb2rqTP",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027027294551db4fda68b5ddac",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517027294551db4fda68b5ddac",
              "width": 64
            }
          ],
          "name": "Off the Wall",
          "release_date": "1979-08-10",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2ZytN2cY4Zjrr9ukb2rqTP"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
            },
            "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
            "id": "3fMbdgg4jU18AjLCKBhRSm",
            "name": "Michael Jackson",
            "type": "artist",
            "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
          }
        ],
        "duration_ms": 365467,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM17900816"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/46eu3SBuFCXWsPT39Yg3tJ"
        },
        "href": "https://api.spotify.com/v1/tracks/46eu3SBuFCXWsPT39Yg3tJ",
        "id": "46eu3SBuFCXWsPT39Yg3tJ",
        "is_local": false,
        "name": "Don't Stop 'Til You Get Enough",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/266818d14bb3fd8ef1cd8f67115f60034a786e22?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:46eu3SBuFCXWsPT39Yg3tJ",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.878,
        "energy": 0.821,
        "key": 11,
        "loudness": -9.875,
        "mode": 1,
        "speechiness": 0.089,
        "acousticness": 0.126,
        "instrumentalness": 0.0461,
        "liveness": 0.183,
        "valence": 0.947,
        "tempo": 118.881,
        "track_href": "https://api.spotify.com/v1/tracks/46eu3SBuFCXWsPT39Yg3tJ",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/46eu3SBuFCXWsPT39Yg3tJ",
        "time_signature": 4,
        "original_position": 48
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/10v912xgTZbjAtYfyKWJCS"
          },
          "href": "https://api.spotify.com/v1/albums/10v912xgTZbjAtYfyKWJCS",
          "id": "10v912xgTZbjAtYfyKWJCS",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27351c02a77d09dfcd53c8676d0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0251c02a77d09dfcd53c8676d0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485151c02a77d09dfcd53c8676d0",
              "width": 64
            }
          ],
          "name": "Highway to Hell",
          "release_date": "1979-07-27",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:10v912xgTZbjAtYfyKWJCS"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un"
            },
            "href": "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
            "id": "711MCceyCBcFnzjGY4Q7Un",
            "name": "AC/DC",
            "type": "artist",
            "uri": "spotify:artist:711MCceyCBcFnzjGY4Q7Un"
          }
        ],
        "duration_ms": 208400,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUAP07900028"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s"
        },
        "href": "https://api.spotify.com/v1/tracks/2zYzyRzz6pRmhPzyfMEC8s",
        "id": "2zYzyRzz6pRmhPzyfMEC8s",
        "is_local": false,
        "name": "Highway to Hell",
        "popularity": 86,
        "preview_url": "https://p.scdn.co/mp3-preview/e5dde93998c6b622d0ac236ceeaabd49481da078?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2zYzyRzz6pRmhPzyfMEC8s",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.574,
        "energy": 0.913,
        "key": 6,
        "loudness": -4.793,
        "mode": 0,
        "speechiness": 0.133,
        "acousticness": 0.061,
        "instrumentalness": 0.00158,
        "liveness": 0.156,
        "valence": 0.423,
        "tempo": 115.728,
        "track_href": "https://api.spotify.com/v1/tracks/2zYzyRzz6pRmhPzyfMEC8s",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2zYzyRzz6pRmhPzyfMEC8s",
        "time_signature": 4,
        "original_position": 49
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2o2G49EPi4lua5zgxUKhLL"
          },
          "href": "https://api.spotify.com/v1/albums/2o2G49EPi4lua5zgxUKhLL",
          "id": "2o2G49EPi4lua5zgxUKhLL",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cf1fee2a55e98e22bf358512",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cf1fee2a55e98e22bf358512",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cf1fee2a55e98e22bf358512",
              "width": 64
            }
          ],
          "name": "Reckless (30th Anniversary / Deluxe Edition)",
          "release_date": "1984-11-05",
          "release_date_precision": "day",
          "total_tracks": 32,
          "type": "album",
          "uri": "spotify:album:2o2G49EPi4lua5zgxUKhLL"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Z02hBLubJxuFJfhacLSDc"
            },
            "href": "https://api.spotify.com/v1/artists/3Z02hBLubJxuFJfhacLSDc",
            "id": "3Z02hBLubJxuFJfhacLSDc",
            "name": "Bryan Adams",
            "type": "artist",
            "uri": "spotify:artist:3Z02hBLubJxuFJfhacLSDc"
          }
        ],
        "duration_ms": 216053,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAM18490006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0GONea6G2XdnHWjNZd6zt3"
        },
        "href": "https://api.spotify.com/v1/tracks/0GONea6G2XdnHWjNZd6zt3",
        "id": "0GONea6G2XdnHWjNZd6zt3",
        "is_local": false,
        "name": "Summer Of '69",
        "popularity": 84,
        "preview_url": "https://p.scdn.co/mp3-preview/ab1adc7f4318917f3dd0362d0d855a64514b9fa8?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:0GONea6G2XdnHWjNZd6zt3",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.508,
        "energy": 0.834,
        "key": 2,
        "loudness": -6.205,
        "mode": 1,
        "speechiness": 0.0386,
        "acousticness": 0.0183,
        "instrumentalness": 0,
        "liveness": 0.0732,
        "valence": 0.774,
        "tempo": 139.131,
        "track_href": "https://api.spotify.com/v1/tracks/0GONea6G2XdnHWjNZd6zt3",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0GONea6G2XdnHWjNZd6zt3",
        "time_signature": 4,
        "original_position": 50
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7qVkGVpcHzaXBT3JENXOq8"
          },
          "href": "https://api.spotify.com/v1/albums/7qVkGVpcHzaXBT3JENXOq8",
          "id": "7qVkGVpcHzaXBT3JENXOq8",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ad39a2444e634d8fdabca6be",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ad39a2444e634d8fdabca6be",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ad39a2444e634d8fdabca6be",
              "width": 64
            }
          ],
          "name": "One More Kiss",
          "release_date": "2023-04-07",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:7qVkGVpcHzaXBT3JENXOq8"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2acqLrAZ1lspWmbpQzdiGE"
            },
            "href": "https://api.spotify.com/v1/artists/2acqLrAZ1lspWmbpQzdiGE",
            "id": "2acqLrAZ1lspWmbpQzdiGE",
            "name": "The Hourglass Effect",
            "type": "artist",
            "uri": "spotify:artist:2acqLrAZ1lspWmbpQzdiGE"
          }
        ],
        "duration_ms": 220750,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "UK6822207247"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/44LxZrjUpbpmVouVe70NF9"
        },
        "href": "https://api.spotify.com/v1/tracks/44LxZrjUpbpmVouVe70NF9",
        "id": "44LxZrjUpbpmVouVe70NF9",
        "is_local": false,
        "name": "One More Kiss",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/aa77b76c20ebdddaa66cece4c139a7c2df4e0738?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:44LxZrjUpbpmVouVe70NF9",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.634,
        "energy": 0.589,
        "key": 9,
        "loudness": -8.12,
        "mode": 0,
        "speechiness": 0.0277,
        "acousticness": 0.0833,
        "instrumentalness": 0.000119,
        "liveness": 0.194,
        "valence": 0.494,
        "tempo": 117.952,
        "track_href": "https://api.spotify.com/v1/tracks/44LxZrjUpbpmVouVe70NF9",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/44LxZrjUpbpmVouVe70NF9",
        "time_signature": 4,
        "original_position": 51
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh"
          },
          "href": "https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh",
          "id": "7vEJAtP3KgKSpOHVgwm3Eh",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02582d56ce20fe0146ffa0e5cf",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851582d56ce20fe0146ffa0e5cf",
              "width": 64
            }
          ],
          "name": "1 (Remastered)",
          "release_date": "2000-11-13",
          "release_date_precision": "day",
          "total_tracks": 27,
          "type": "album",
          "uri": "spotify:album:7vEJAtP3KgKSpOHVgwm3Eh"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            },
            "href": "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
            "id": "3WrFJ7ztbogyGnTHbHJFl2",
            "name": "The Beatles",
            "type": "artist",
            "uri": "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
          }
        ],
        "duration_ms": 145747,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71505904"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4pbG9SUmWIvsROVLF0zF9s"
        },
        "href": "https://api.spotify.com/v1/tracks/4pbG9SUmWIvsROVLF0zF9s",
        "id": "4pbG9SUmWIvsROVLF0zF9s",
        "is_local": false,
        "name": "I Want To Hold Your Hand - Remastered 2015",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/63a3a4d731e44e8a03a10e11afa33db665573f5d?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 4,
        "type": "audio_features",
        "uri": "spotify:track:4pbG9SUmWIvsROVLF0zF9s",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.49,
        "energy": 0.715,
        "key": 7,
        "loudness": -5.549,
        "mode": 1,
        "speechiness": 0.0476,
        "acousticness": 0.386,
        "instrumentalness": 0,
        "liveness": 0.311,
        "valence": 0.866,
        "tempo": 130.726,
        "track_href": "https://api.spotify.com/v1/tracks/4pbG9SUmWIvsROVLF0zF9s",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4pbG9SUmWIvsROVLF0zF9s",
        "time_signature": 4,
        "original_position": 52
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4fKEheMhcigQBenkttp5CU"
          },
          "href": "https://api.spotify.com/v1/albums/4fKEheMhcigQBenkttp5CU",
          "id": "4fKEheMhcigQBenkttp5CU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739d713ba3dce10df2b943dc6a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029d713ba3dce10df2b943dc6a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519d713ba3dce10df2b943dc6a",
              "width": 64
            }
          ],
          "name": "Hits'n'Flips",
          "release_date": "2019-05-03",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4fKEheMhcigQBenkttp5CU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0GbqW5TJr7n4is453VOY4C"
            },
            "href": "https://api.spotify.com/v1/artists/0GbqW5TJr7n4is453VOY4C",
            "id": "0GbqW5TJr7n4is453VOY4C",
            "name": "Procol Harum",
            "type": "artist",
            "uri": "spotify:artist:0GbqW5TJr7n4is453VOY4C"
          }
        ],
        "duration_ms": 248947,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBWX0701000"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/78ZqE2tjAxbqEGGlvGnQfT"
        },
        "href": "https://api.spotify.com/v1/tracks/78ZqE2tjAxbqEGGlvGnQfT",
        "id": "78ZqE2tjAxbqEGGlvGnQfT",
        "is_local": false,
        "name": "A Whiter Shade of Pale - Original Single Version",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/e7ba30c6cdfb2aa41c1927830bbf5b83695321be?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:78ZqE2tjAxbqEGGlvGnQfT",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.249,
        "energy": 0.66,
        "key": 0,
        "loudness": -6.905,
        "mode": 1,
        "speechiness": 0.0342,
        "acousticness": 0.504,
        "instrumentalness": 0.0026,
        "liveness": 0.0891,
        "valence": 0.435,
        "tempo": 149.813,
        "track_href": "https://api.spotify.com/v1/tracks/78ZqE2tjAxbqEGGlvGnQfT",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/78ZqE2tjAxbqEGGlvGnQfT",
        "time_signature": 4,
        "original_position": 53
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4oQhDQDKMeI6IMlwpXt3j8"
          },
          "href": "https://api.spotify.com/v1/albums/4oQhDQDKMeI6IMlwpXt3j8",
          "id": "4oQhDQDKMeI6IMlwpXt3j8",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733e030a7e606959674643d274",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023e030a7e606959674643d274",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513e030a7e606959674643d274",
              "width": 64
            }
          ],
          "name": "Agent Provocateur",
          "release_date": "1984-12-12",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4oQhDQDKMeI6IMlwpXt3j8"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6IRouO5mvvfcyxtPDKMYFN"
            },
            "href": "https://api.spotify.com/v1/artists/6IRouO5mvvfcyxtPDKMYFN",
            "id": "6IRouO5mvvfcyxtPDKMYFN",
            "name": "Foreigner",
            "type": "artist",
            "uri": "spotify:artist:6IRouO5mvvfcyxtPDKMYFN"
          }
        ],
        "duration_ms": 304787,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT29900662"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1JLn8RhQzHz3qDqsChcmBl"
        },
        "href": "https://api.spotify.com/v1/tracks/1JLn8RhQzHz3qDqsChcmBl",
        "id": "1JLn8RhQzHz3qDqsChcmBl",
        "is_local": false,
        "name": "I Want to Know What Love Is - 1999 Remaster",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/23f9b7ad0a9008aca1017cce9b5ba375b322ac8b?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:1JLn8RhQzHz3qDqsChcmBl",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.477,
        "energy": 0.471,
        "key": 6,
        "loudness": -10.036,
        "mode": 1,
        "speechiness": 0.0277,
        "acousticness": 0.193,
        "instrumentalness": 0.00000176,
        "liveness": 0.131,
        "valence": 0.423,
        "tempo": 81.204,
        "track_href": "https://api.spotify.com/v1/tracks/1JLn8RhQzHz3qDqsChcmBl",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1JLn8RhQzHz3qDqsChcmBl",
        "time_signature": 4,
        "original_position": 54
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/54zcgY3o34crjFfG1V4MuG"
          },
          "href": "https://api.spotify.com/v1/albums/54zcgY3o34crjFfG1V4MuG",
          "id": "54zcgY3o34crjFfG1V4MuG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27357093fcad552311d1ae71cfb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0257093fcad552311d1ae71cfb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485157093fcad552311d1ae71cfb",
              "width": 64
            }
          ],
          "name": "Hits Of The 70's",
          "release_date": "1993-01-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:54zcgY3o34crjFfG1V4MuG"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6V6WCgi7waF55bJmylC4H5"
            },
            "href": "https://api.spotify.com/v1/artists/6V6WCgi7waF55bJmylC4H5",
            "id": "6V6WCgi7waF55bJmylC4H5",
            "name": "Gloria Gaynor",
            "type": "artist",
            "uri": "spotify:artist:6V6WCgi7waF55bJmylC4H5"
          }
        ],
        "duration_ms": 198600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USPR37800083"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0rwmxAht1fk7QuSiCmIhGV"
        },
        "href": "https://api.spotify.com/v1/tracks/0rwmxAht1fk7QuSiCmIhGV",
        "id": "0rwmxAht1fk7QuSiCmIhGV",
        "is_local": false,
        "name": "I Will Survive - Single Version",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/c4a8e3e5b2113010d1b322ebff60c2609a18a3a6?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:0rwmxAht1fk7QuSiCmIhGV",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.801,
        "energy": 0.623,
        "key": 9,
        "loudness": -13.445,
        "mode": 0,
        "speechiness": 0.0508,
        "acousticness": 0.0173,
        "instrumentalness": 0.00811,
        "liveness": 0.323,
        "valence": 0.641,
        "tempo": 116.426,
        "track_href": "https://api.spotify.com/v1/tracks/0rwmxAht1fk7QuSiCmIhGV",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0rwmxAht1fk7QuSiCmIhGV",
        "time_signature": 4,
        "original_position": 55
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6N8uPmDqbgXD3ztkCCfxoo"
          },
          "href": "https://api.spotify.com/v1/albums/6N8uPmDqbgXD3ztkCCfxoo",
          "id": "6N8uPmDqbgXD3ztkCCfxoo",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e19e047ce",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e1e350d06ffebd2e19e047ce",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e1e350d06ffebd2e19e047ce",
              "width": 64
            }
          ],
          "name": "Just As I Am",
          "release_date": "1971-05-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:6N8uPmDqbgXD3ztkCCfxoo"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ThoqLcyIYvZn7iWbj8fsj"
            },
            "href": "https://api.spotify.com/v1/artists/1ThoqLcyIYvZn7iWbj8fsj",
            "id": "1ThoqLcyIYvZn7iWbj8fsj",
            "name": "Bill Withers",
            "type": "artist",
            "uri": "spotify:artist:1ThoqLcyIYvZn7iWbj8fsj"
          }
        ],
        "duration_ms": 125093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM10000372"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1k1Bqnv2R0uJXQN4u6LKYt"
        },
        "href": "https://api.spotify.com/v1/tracks/1k1Bqnv2R0uJXQN4u6LKYt",
        "id": "1k1Bqnv2R0uJXQN4u6LKYt",
        "is_local": false,
        "name": "Ain't No Sunshine",
        "popularity": 82,
        "preview_url": "https://p.scdn.co/mp3-preview/4894057a7cdc4be59cd335cfc369ba2d3a3b2ad8?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:1k1Bqnv2R0uJXQN4u6LKYt",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.527,
        "energy": 0.415,
        "key": 4,
        "loudness": -11.451,
        "mode": 0,
        "speechiness": 0.122,
        "acousticness": 0.457,
        "instrumentalness": 0.0000172,
        "liveness": 0.117,
        "valence": 0.515,
        "tempo": 78.169,
        "track_href": "https://api.spotify.com/v1/tracks/1k1Bqnv2R0uJXQN4u6LKYt",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1k1Bqnv2R0uJXQN4u6LKYt",
        "time_signature": 4,
        "original_position": 56
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3coLNlyStg9h7f8CZ103Rl"
          },
          "href": "https://api.spotify.com/v1/albums/3coLNlyStg9h7f8CZ103Rl",
          "id": "3coLNlyStg9h7f8CZ103Rl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27364c19b24ce947ffa363f8f96",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0264c19b24ce947ffa363f8f96",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485164c19b24ce947ffa363f8f96",
              "width": 64
            }
          ],
          "name": "Ladies And Gentlemen... The Best Of George Michael",
          "release_date": "1998-11-09",
          "release_date_precision": "day",
          "total_tracks": 29,
          "type": "album",
          "uri": "spotify:album:3coLNlyStg9h7f8CZ103Rl"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/19ra5tSw0tWufvUp8GotLo"
            },
            "href": "https://api.spotify.com/v1/artists/19ra5tSw0tWufvUp8GotLo",
            "id": "19ra5tSw0tWufvUp8GotLo",
            "name": "George Michael",
            "type": "artist",
            "uri": "spotify:artist:19ra5tSw0tWufvUp8GotLo"
          }
        ],
        "duration_ms": 300107,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBBM8402006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4jDmJ51x1o9NZB5Nxxc7gY"
        },
        "href": "https://api.spotify.com/v1/tracks/4jDmJ51x1o9NZB5Nxxc7gY",
        "id": "4jDmJ51x1o9NZB5Nxxc7gY",
        "is_local": false,
        "name": "Careless Whisper",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/426887696731457a0929786ea5c69ed154d6aea8?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:4jDmJ51x1o9NZB5Nxxc7gY",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.574,
        "energy": 0.628,
        "key": 2,
        "loudness": -8.815,
        "mode": 0,
        "speechiness": 0.036,
        "acousticness": 0.13,
        "instrumentalness": 0,
        "liveness": 0.271,
        "valence": 0.803,
        "tempo": 153.119,
        "track_href": "https://api.spotify.com/v1/tracks/4jDmJ51x1o9NZB5Nxxc7gY",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4jDmJ51x1o9NZB5Nxxc7gY",
        "time_signature": 4,
        "original_position": 57
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/58eMx3QrTkiRmGGbSz2XL0"
          },
          "href": "https://api.spotify.com/v1/albums/58eMx3QrTkiRmGGbSz2XL0",
          "id": "58eMx3QrTkiRmGGbSz2XL0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a1fc113a6858d0824d9aaf38",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a1fc113a6858d0824d9aaf38",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a1fc113a6858d0824d9aaf38",
              "width": 64
            }
          ],
          "name": "Let's Stay Together",
          "release_date": "1972",
          "release_date_precision": "year",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:58eMx3QrTkiRmGGbSz2XL0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3dkbV4qihUeMsqN4vBGg93"
            },
            "href": "https://api.spotify.com/v1/artists/3dkbV4qihUeMsqN4vBGg93",
            "id": "3dkbV4qihUeMsqN4vBGg93",
            "name": "Al Green",
            "type": "artist",
            "uri": "spotify:artist:3dkbV4qihUeMsqN4vBGg93"
          }
        ],
        "duration_ms": 199396,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "US2HK0913701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/63xdwScd1Ai1GigAwQxE8y"
        },
        "href": "https://api.spotify.com/v1/tracks/63xdwScd1Ai1GigAwQxE8y",
        "id": "63xdwScd1Ai1GigAwQxE8y",
        "is_local": false,
        "name": "Let's Stay Together",
        "popularity": 77,
        "preview_url": "https://p.scdn.co/mp3-preview/027817c11eaff28a45d96046a1c5da43d8a1e155?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:63xdwScd1Ai1GigAwQxE8y",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.756,
        "energy": 0.401,
        "key": 7,
        "loudness": -10.702,
        "mode": 0,
        "speechiness": 0.0526,
        "acousticness": 0.582,
        "instrumentalness": 0.011,
        "liveness": 0.0541,
        "valence": 0.514,
        "tempo": 101.954,
        "track_href": "https://api.spotify.com/v1/tracks/63xdwScd1Ai1GigAwQxE8y",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/63xdwScd1Ai1GigAwQxE8y",
        "time_signature": 4,
        "original_position": 58
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6BqIQm8zRhUNzaGEOUcUMv"
          },
          "href": "https://api.spotify.com/v1/albums/6BqIQm8zRhUNzaGEOUcUMv",
          "id": "6BqIQm8zRhUNzaGEOUcUMv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738790c6f849977f5990b584d6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028790c6f849977f5990b584d6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518790c6f849977f5990b584d6",
              "width": 64
            }
          ],
          "name": "Draw In Me",
          "release_date": "2023-04-20",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:6BqIQm8zRhUNzaGEOUcUMv"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/05HLnLfwBkWdZEOb5HAMTu"
            },
            "href": "https://api.spotify.com/v1/artists/05HLnLfwBkWdZEOb5HAMTu",
            "id": "05HLnLfwBkWdZEOb5HAMTu",
            "name": "MJ Young",
            "type": "artist",
            "uri": "spotify:artist:05HLnLfwBkWdZEOb5HAMTu"
          }
        ],
        "duration_ms": 190809,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZHN62307157"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2QBTPDjBBOAaT8S8AmOoYX"
        },
        "href": "https://api.spotify.com/v1/tracks/2QBTPDjBBOAaT8S8AmOoYX",
        "id": "2QBTPDjBBOAaT8S8AmOoYX",
        "is_local": false,
        "name": "Draw In Me",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/357a0cc1f4f8ae3da697caab21cb83c7a4523c51?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2QBTPDjBBOAaT8S8AmOoYX",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.62,
        "energy": 0.594,
        "key": 6,
        "loudness": -7.986,
        "mode": 0,
        "speechiness": 0.0246,
        "acousticness": 0.523,
        "instrumentalness": 0,
        "liveness": 0.0846,
        "valence": 0.718,
        "tempo": 97.068,
        "track_href": "https://api.spotify.com/v1/tracks/2QBTPDjBBOAaT8S8AmOoYX",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2QBTPDjBBOAaT8S8AmOoYX",
        "time_signature": 4,
        "original_position": 59
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/72qrnM4yUNMDDlWiqKc8iY"
          },
          "href": "https://api.spotify.com/v1/albums/72qrnM4yUNMDDlWiqKc8iY",
          "id": "72qrnM4yUNMDDlWiqKc8iY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273bad7062c3fd2f2d037989694",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02bad7062c3fd2f2d037989694",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851bad7062c3fd2f2d037989694",
              "width": 64
            }
          ],
          "name": "Aftermath",
          "release_date": "1966-04-15",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:72qrnM4yUNMDDlWiqKc8iY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe"
            },
            "href": "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe",
            "id": "22bE4uQ6baNwSHPVcDxLCe",
            "name": "The Rolling Stones",
            "type": "artist",
            "uri": "spotify:artist:22bE4uQ6baNwSHPVcDxLCe"
          }
        ],
        "duration_ms": 202267,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USA176610020"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/63T7DJ1AFDD6Bn8VzG6JE8"
        },
        "href": "https://api.spotify.com/v1/tracks/63T7DJ1AFDD6Bn8VzG6JE8",
        "id": "63T7DJ1AFDD6Bn8VzG6JE8",
        "is_local": false,
        "name": "Paint It, Black",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/1db9cec19ec2902b6071214ba3d8f5519f8593c6?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:63T7DJ1AFDD6Bn8VzG6JE8",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.464,
        "energy": 0.795,
        "key": 1,
        "loudness": -9.267,
        "mode": 1,
        "speechiness": 0.0926,
        "acousticness": 0.0493,
        "instrumentalness": 0.00244,
        "liveness": 0.399,
        "valence": 0.612,
        "tempo": 158.691,
        "track_href": "https://api.spotify.com/v1/tracks/63T7DJ1AFDD6Bn8VzG6JE8",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/63T7DJ1AFDD6Bn8VzG6JE8",
        "time_signature": 4,
        "original_position": 60
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0JwHz5SSvpYWuuCNbtYZoV"
          },
          "href": "https://api.spotify.com/v1/albums/0JwHz5SSvpYWuuCNbtYZoV",
          "id": "0JwHz5SSvpYWuuCNbtYZoV",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ba7fe7dd76cd4307e57dd75f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ba7fe7dd76cd4307e57dd75f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ba7fe7dd76cd4307e57dd75f",
              "width": 64
            }
          ],
          "name": "Bridge Over Troubled Water",
          "release_date": "1970-01-26",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:0JwHz5SSvpYWuuCNbtYZoV"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/70cRZdQywnSFp9pnc2WTCE"
            },
            "href": "https://api.spotify.com/v1/artists/70cRZdQywnSFp9pnc2WTCE",
            "id": "70cRZdQywnSFp9pnc2WTCE",
            "name": "Simon & Garfunkel",
            "type": "artist",
            "uri": "spotify:artist:70cRZdQywnSFp9pnc2WTCE"
          }
        ],
        "duration_ms": 293120,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM16900808"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6l8EbYRtQMgKOyc1gcDHF9"
        },
        "href": "https://api.spotify.com/v1/tracks/6l8EbYRtQMgKOyc1gcDHF9",
        "id": "6l8EbYRtQMgKOyc1gcDHF9",
        "is_local": false,
        "name": "Bridge Over Troubled Water",
        "popularity": 72,
        "preview_url": "https://p.scdn.co/mp3-preview/e80a149b25c33d4e44579f7096b509fe379b0bc7?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:6l8EbYRtQMgKOyc1gcDHF9",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.149,
        "energy": 0.206,
        "key": 3,
        "loudness": -13.888,
        "mode": 1,
        "speechiness": 0.0323,
        "acousticness": 0.822,
        "instrumentalness": 0.000649,
        "liveness": 0.115,
        "valence": 0.264,
        "tempo": 79.764,
        "track_href": "https://api.spotify.com/v1/tracks/6l8EbYRtQMgKOyc1gcDHF9",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/6l8EbYRtQMgKOyc1gcDHF9",
        "time_signature": 4,
        "original_position": 61
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/22MtHr01EzeL6jmc5uwpHC"
          },
          "href": "https://api.spotify.com/v1/albums/22MtHr01EzeL6jmc5uwpHC",
          "id": "22MtHr01EzeL6jmc5uwpHC",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ada8d00d23273a097e6df364",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ada8d00d23273a097e6df364",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ada8d00d23273a097e6df364",
              "width": 64
            }
          ],
          "name": "Tragic Kingdom",
          "release_date": "1995-10-10",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:22MtHr01EzeL6jmc5uwpHC"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0cQbJU1aAzvbEmTuljWLlF"
            },
            "href": "https://api.spotify.com/v1/artists/0cQbJU1aAzvbEmTuljWLlF",
            "id": "0cQbJU1aAzvbEmTuljWLlF",
            "name": "No Doubt",
            "type": "artist",
            "uri": "spotify:artist:0cQbJU1aAzvbEmTuljWLlF"
          }
        ],
        "duration_ms": 263000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USIR19500279"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7H8zey5My6uNdD2TxeCb9F"
        },
        "href": "https://api.spotify.com/v1/tracks/7H8zey5My6uNdD2TxeCb9F",
        "id": "7H8zey5My6uNdD2TxeCb9F",
        "is_local": false,
        "name": "Don't Speak",
        "popularity": 3,
        "preview_url": null,
        "track": true,
        "track_number": 10,
        "type": "audio_features",
        "uri": "spotify:track:7H8zey5My6uNdD2TxeCb9F",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.522,
        "energy": 0.707,
        "key": 5,
        "loudness": -7.113,
        "mode": 0,
        "speechiness": 0.0354,
        "acousticness": 0.24,
        "instrumentalness": 0.0000204,
        "liveness": 0.156,
        "valence": 0.572,
        "tempo": 76.05,
        "track_href": "https://api.spotify.com/v1/tracks/7H8zey5My6uNdD2TxeCb9F",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7H8zey5My6uNdD2TxeCb9F",
        "time_signature": 4,
        "original_position": 62
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/18XFe4CPBgVezXkxZP6rTb"
          },
          "href": "https://api.spotify.com/v1/albums/18XFe4CPBgVezXkxZP6rTb",
          "id": "18XFe4CPBgVezXkxZP6rTb",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735b7865be7f7fcc05faec6137",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025b7865be7f7fcc05faec6137",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515b7865be7f7fcc05faec6137",
              "width": 64
            }
          ],
          "name": "The Score (Expanded Edition)",
          "release_date": "1996-02-13",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:18XFe4CPBgVezXkxZP6rTb"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2WKdxPFRD7IqZvlIAvhMgY"
            },
            "href": "https://api.spotify.com/v1/artists/2WKdxPFRD7IqZvlIAvhMgY",
            "id": "2WKdxPFRD7IqZvlIAvhMgY",
            "name": "Fugees",
            "type": "artist",
            "uri": "spotify:artist:2WKdxPFRD7IqZvlIAvhMgY"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl"
            },
            "href": "https://api.spotify.com/v1/artists/2Mu5NfyYm8n5iTomuKAEHl",
            "id": "2Mu5NfyYm8n5iTomuKAEHl",
            "name": "Ms. Lauryn Hill",
            "type": "artist",
            "uri": "spotify:artist:2Mu5NfyYm8n5iTomuKAEHl"
          }
        ],
        "duration_ms": 298773,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USSM19600055"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0Q0IVlqMV64kNLlwjPj0Hl"
        },
        "href": "https://api.spotify.com/v1/tracks/0Q0IVlqMV64kNLlwjPj0Hl",
        "id": "0Q0IVlqMV64kNLlwjPj0Hl",
        "is_local": false,
        "name": "Killing Me Softly With His Song",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/63ba38c018c61519e68715aa003f4c72374d65b5?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 8,
        "type": "audio_features",
        "uri": "spotify:track:0Q0IVlqMV64kNLlwjPj0Hl",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.765,
        "energy": 0.29,
        "key": 4,
        "loudness": -17.117,
        "mode": 0,
        "speechiness": 0.139,
        "acousticness": 0.0279,
        "instrumentalness": 0,
        "liveness": 0.571,
        "valence": 0.506,
        "tempo": 92.409,
        "track_href": "https://api.spotify.com/v1/tracks/0Q0IVlqMV64kNLlwjPj0Hl",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0Q0IVlqMV64kNLlwjPj0Hl",
        "time_signature": 4,
        "original_position": 63
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/69CB5uvN0w4bogEx1DKnJG"
          },
          "href": "https://api.spotify.com/v1/albums/69CB5uvN0w4bogEx1DKnJG",
          "id": "69CB5uvN0w4bogEx1DKnJG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732b284b0670097ee59ca9414d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022b284b0670097ee59ca9414d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512b284b0670097ee59ca9414d",
              "width": 64
            }
          ],
          "name": "Girl You Got Me",
          "release_date": "2023-04-17",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:69CB5uvN0w4bogEx1DKnJG"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Cd7IpKrJhEJOJnLG7VsIU"
            },
            "href": "https://api.spotify.com/v1/artists/6Cd7IpKrJhEJOJnLG7VsIU",
            "id": "6Cd7IpKrJhEJOJnLG7VsIU",
            "name": "The Now",
            "type": "artist",
            "uri": "spotify:artist:6Cd7IpKrJhEJOJnLG7VsIU"
          }
        ],
        "duration_ms": 210285,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GX8ZQ2200004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1x3JyihoEl1bXnE6wlgeI6"
        },
        "href": "https://api.spotify.com/v1/tracks/1x3JyihoEl1bXnE6wlgeI6",
        "id": "1x3JyihoEl1bXnE6wlgeI6",
        "is_local": false,
        "name": "Girl You Got Me",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/7d771785dfe2d033520035297331d0ceabf78514?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1x3JyihoEl1bXnE6wlgeI6",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.402,
        "energy": 0.777,
        "key": 6,
        "loudness": -5.089,
        "mode": 0,
        "speechiness": 0.0401,
        "acousticness": 0.000282,
        "instrumentalness": 0.0122,
        "liveness": 0.111,
        "valence": 0.236,
        "tempo": 77.656,
        "track_href": "https://api.spotify.com/v1/tracks/1x3JyihoEl1bXnE6wlgeI6",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1x3JyihoEl1bXnE6wlgeI6",
        "time_signature": 4,
        "original_position": 64
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6eedtCtCjibu80yOhylSGL"
          },
          "href": "https://api.spotify.com/v1/albums/6eedtCtCjibu80yOhylSGL",
          "id": "6eedtCtCjibu80yOhylSGL",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a496dc8c33ca6d10668b3157",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a496dc8c33ca6d10668b3157",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a496dc8c33ca6d10668b3157",
              "width": 64
            }
          ],
          "name": "Berry Is On Top",
          "release_date": "1959-07-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:6eedtCtCjibu80yOhylSGL"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/293zczrfYafIItmnmM3coR"
            },
            "href": "https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR",
            "id": "293zczrfYafIItmnmM3coR",
            "name": "Chuck Berry",
            "type": "artist",
            "uri": "spotify:artist:293zczrfYafIItmnmM3coR"
          }
        ],
        "duration_ms": 161560,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC15719963"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2QfiRTz5Yc8DdShCxG1tB2"
        },
        "href": "https://api.spotify.com/v1/tracks/2QfiRTz5Yc8DdShCxG1tB2",
        "id": "2QfiRTz5Yc8DdShCxG1tB2",
        "is_local": false,
        "name": "Johnny B. Goode",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/214ca11106cbcdfe07ccd2d839c67c9b8949a5e2?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:2QfiRTz5Yc8DdShCxG1tB2",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.534,
        "energy": 0.803,
        "key": 10,
        "loudness": -9.129,
        "mode": 1,
        "speechiness": 0.0743,
        "acousticness": 0.741,
        "instrumentalness": 0.0000607,
        "liveness": 0.307,
        "valence": 0.969,
        "tempo": 167.983,
        "track_href": "https://api.spotify.com/v1/tracks/2QfiRTz5Yc8DdShCxG1tB2",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2QfiRTz5Yc8DdShCxG1tB2",
        "time_signature": 4,
        "original_position": 65
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/372cMadhAGlNuDnc8TssqF"
          },
          "href": "https://api.spotify.com/v1/albums/372cMadhAGlNuDnc8TssqF",
          "id": "372cMadhAGlNuDnc8TssqF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27351f311c2fb06ad2789e3ff91",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0251f311c2fb06ad2789e3ff91",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485151f311c2fb06ad2789e3ff91",
              "width": 64
            }
          ],
          "name": "Pendulum (Expanded Edition)",
          "release_date": "1970-12-07",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:372cMadhAGlNuDnc8TssqF"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd"
            },
            "href": "https://api.spotify.com/v1/artists/3IYUhFvPQItj6xySrBmZkd",
            "id": "3IYUhFvPQItj6xySrBmZkd",
            "name": "Creedence Clearwater Revival",
            "type": "artist",
            "uri": "spotify:artist:3IYUhFvPQItj6xySrBmZkd"
          }
        ],
        "duration_ms": 160133,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USC4R0817643"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2LawezPeJhN4AWuSB0GtAU"
        },
        "href": "https://api.spotify.com/v1/tracks/2LawezPeJhN4AWuSB0GtAU",
        "id": "2LawezPeJhN4AWuSB0GtAU",
        "is_local": false,
        "name": "Have You Ever Seen The Rain",
        "popularity": 86,
        "preview_url": "https://p.scdn.co/mp3-preview/9b5348b8d7c6bb14b63998903a46348657f70c2e?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 4,
        "type": "audio_features",
        "uri": "spotify:track:2LawezPeJhN4AWuSB0GtAU",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.741,
        "energy": 0.697,
        "key": 0,
        "loudness": -7.028,
        "mode": 1,
        "speechiness": 0.0277,
        "acousticness": 0.0664,
        "instrumentalness": 0.0000228,
        "liveness": 0.133,
        "valence": 0.774,
        "tempo": 116.109,
        "track_href": "https://api.spotify.com/v1/tracks/2LawezPeJhN4AWuSB0GtAU",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2LawezPeJhN4AWuSB0GtAU",
        "time_signature": 4,
        "original_position": 66
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/03HMOcANauhLD0WNrMkmLU"
          },
          "href": "https://api.spotify.com/v1/albums/03HMOcANauhLD0WNrMkmLU",
          "id": "03HMOcANauhLD0WNrMkmLU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27313a5da9563c438059afa7ad4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0213a5da9563c438059afa7ad4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485113a5da9563c438059afa7ad4",
              "width": 64
            }
          ],
          "name": "The Dock of the Bay (Mono)",
          "release_date": "1968",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:03HMOcANauhLD0WNrMkmLU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/60df5JBRRPcnSpsIMxxwQm"
            },
            "href": "https://api.spotify.com/v1/artists/60df5JBRRPcnSpsIMxxwQm",
            "id": "60df5JBRRPcnSpsIMxxwQm",
            "name": "Otis Redding",
            "type": "artist",
            "uri": "spotify:artist:60df5JBRRPcnSpsIMxxwQm"
          }
        ],
        "duration_ms": 163756,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT21403443"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3zBhihYUHBmGd2bcQIobrF"
        },
        "href": "https://api.spotify.com/v1/tracks/3zBhihYUHBmGd2bcQIobrF",
        "id": "3zBhihYUHBmGd2bcQIobrF",
        "is_local": false,
        "name": "(Sittin' On) the Dock of the Bay",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/404976a4a56d8c1cd4abfe11198bae2118594cab?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:3zBhihYUHBmGd2bcQIobrF",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.769,
        "energy": 0.367,
        "key": 2,
        "loudness": -11.226,
        "mode": 1,
        "speechiness": 0.0312,
        "acousticness": 0.684,
        "instrumentalness": 0.0000162,
        "liveness": 0.081,
        "valence": 0.535,
        "tempo": 103.621,
        "track_href": "https://api.spotify.com/v1/tracks/3zBhihYUHBmGd2bcQIobrF",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3zBhihYUHBmGd2bcQIobrF",
        "time_signature": 4,
        "original_position": 67
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5X1wUxFLiomGBIwi0fLJrb"
          },
          "href": "https://api.spotify.com/v1/albums/5X1wUxFLiomGBIwi0fLJrb",
          "id": "5X1wUxFLiomGBIwi0fLJrb",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733991254e8efea7d4ed55abcb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023991254e8efea7d4ed55abcb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513991254e8efea7d4ed55abcb",
              "width": 64
            }
          ],
          "name": "(What's the Story) Morning Glory?",
          "release_date": "1995-10-02",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:5X1wUxFLiomGBIwi0fLJrb"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
            },
            "href": "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
            "id": "2DaxqgrOhkeH0fpeiQq2f4",
            "name": "Oasis",
            "type": "artist",
            "uri": "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
          }
        ],
        "duration_ms": 258907,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAW9500189"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2tDz0gabkgCjFE34CWvwrl"
        },
        "href": "https://api.spotify.com/v1/tracks/2tDz0gabkgCjFE34CWvwrl",
        "id": "2tDz0gabkgCjFE34CWvwrl",
        "is_local": false,
        "name": "Wonderwall",
        "popularity": 0,
        "preview_url": null,
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:2tDz0gabkgCjFE34CWvwrl",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.408,
        "energy": 0.843,
        "key": 2,
        "loudness": -5.612,
        "mode": 1,
        "speechiness": 0.0369,
        "acousticness": 0.00221,
        "instrumentalness": 0,
        "liveness": 0.134,
        "valence": 0.468,
        "tempo": 174.452,
        "track_href": "https://api.spotify.com/v1/tracks/2tDz0gabkgCjFE34CWvwrl",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2tDz0gabkgCjFE34CWvwrl",
        "time_signature": 4,
        "original_position": 68
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1ZH5g1RDq3GY1OvyD0w0s2"
          },
          "href": "https://api.spotify.com/v1/albums/1ZH5g1RDq3GY1OvyD0w0s2",
          "id": "1ZH5g1RDq3GY1OvyD0w0s2",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27325a4df452a3c42ccc2e9288b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0225a4df452a3c42ccc2e9288b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485125a4df452a3c42ccc2e9288b",
              "width": 64
            }
          ],
          "name": "Combat Rock (Remastered)",
          "release_date": "1982",
          "release_date_precision": "year",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:1ZH5g1RDq3GY1OvyD0w0s2"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3RGLhK1IP9jnYFH4BRFJBS"
            },
            "href": "https://api.spotify.com/v1/artists/3RGLhK1IP9jnYFH4BRFJBS",
            "id": "3RGLhK1IP9jnYFH4BRFJBS",
            "name": "The Clash",
            "type": "artist",
            "uri": "spotify:artist:3RGLhK1IP9jnYFH4BRFJBS"
          }
        ],
        "duration_ms": 188987,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBARL1200670"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/39shmbIHICJ2Wxnk1fPSdz"
        },
        "href": "https://api.spotify.com/v1/tracks/39shmbIHICJ2Wxnk1fPSdz",
        "id": "39shmbIHICJ2Wxnk1fPSdz",
        "is_local": false,
        "name": "Should I Stay or Should I Go - Remastered",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/30dfcd239fdb4a9ee277ff3a214a4f6771bd8cb3?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:39shmbIHICJ2Wxnk1fPSdz",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.743,
        "energy": 0.836,
        "key": 2,
        "loudness": -6.465,
        "mode": 1,
        "speechiness": 0.116,
        "acousticness": 0.0804,
        "instrumentalness": 0,
        "liveness": 0.384,
        "valence": 0.82,
        "tempo": 113.375,
        "track_href": "https://api.spotify.com/v1/tracks/39shmbIHICJ2Wxnk1fPSdz",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/39shmbIHICJ2Wxnk1fPSdz",
        "time_signature": 4,
        "original_position": 69
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/19UoBHanqMth4tk0rFw5RJ"
          },
          "href": "https://api.spotify.com/v1/albums/19UoBHanqMth4tk0rFw5RJ",
          "id": "19UoBHanqMth4tk0rFw5RJ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273601c5174eb7d0073bb79764f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02601c5174eb7d0073bb79764f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851601c5174eb7d0073bb79764f",
              "width": 64
            }
          ],
          "name": "What A Wonderful World",
          "release_date": "1968",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:19UoBHanqMth4tk0rFw5RJ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/19eLuQmk9aCobbVDHc6eek"
            },
            "href": "https://api.spotify.com/v1/artists/19eLuQmk9aCobbVDHc6eek",
            "id": "19eLuQmk9aCobbVDHc6eek",
            "name": "Louis Armstrong",
            "type": "artist",
            "uri": "spotify:artist:19eLuQmk9aCobbVDHc6eek"
          }
        ],
        "duration_ms": 137520,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC16758823"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1qCQTy0fTXerET4x8VHyr9"
        },
        "href": "https://api.spotify.com/v1/tracks/1qCQTy0fTXerET4x8VHyr9",
        "id": "1qCQTy0fTXerET4x8VHyr9",
        "is_local": false,
        "name": "What A Wonderful World",
        "popularity": 12,
        "preview_url": null,
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1qCQTy0fTXerET4x8VHyr9",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.399,
        "energy": 0.258,
        "key": 5,
        "loudness": -16.028,
        "mode": 1,
        "speechiness": 0.033,
        "acousticness": 0.792,
        "instrumentalness": 0.00000186,
        "liveness": 0.128,
        "valence": 0.192,
        "tempo": 108.174,
        "track_href": "https://api.spotify.com/v1/tracks/1qCQTy0fTXerET4x8VHyr9",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1qCQTy0fTXerET4x8VHyr9",
        "time_signature": 3,
        "original_position": 70
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB"
          },
          "href": "https://api.spotify.com/v1/albums/1bt6q2SruMsBtcerNVtpZB",
          "id": "1bt6q2SruMsBtcerNVtpZB",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2730001af4f80be77069fc8fd41",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e020001af4f80be77069fc8fd41",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048510001af4f80be77069fc8fd41",
              "width": 64
            }
          ],
          "name": "Rumours",
          "release_date": "1977-02-04",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1bt6q2SruMsBtcerNVtpZB"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/08GQAI4eElDnROBrJRGE0X"
            },
            "href": "https://api.spotify.com/v1/artists/08GQAI4eElDnROBrJRGE0X",
            "id": "08GQAI4eElDnROBrJRGE0X",
            "name": "Fleetwood Mac",
            "type": "artist",
            "uri": "spotify:artist:08GQAI4eElDnROBrJRGE0X"
          }
        ],
        "duration_ms": 223613,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB10400050"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/07GvNcU1WdyZJq3XxP0kZa"
        },
        "href": "https://api.spotify.com/v1/tracks/07GvNcU1WdyZJq3XxP0kZa",
        "id": "07GvNcU1WdyZJq3XxP0kZa",
        "is_local": false,
        "name": "Go Your Own Way - 2004 Remaster",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/26ba8ef966c08f5116fd5ab94efc7a8671e640f5?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:07GvNcU1WdyZJq3XxP0kZa",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.583,
        "energy": 0.947,
        "key": 5,
        "loudness": -5.12,
        "mode": 1,
        "speechiness": 0.0378,
        "acousticness": 0.0185,
        "instrumentalness": 0.00109,
        "liveness": 0.0679,
        "valence": 0.803,
        "tempo": 135.448,
        "track_href": "https://api.spotify.com/v1/tracks/07GvNcU1WdyZJq3XxP0kZa",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/07GvNcU1WdyZJq3XxP0kZa",
        "time_signature": 4,
        "original_position": 71
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4KZGe18wZJbXL6JLW4KyLc"
          },
          "href": "https://api.spotify.com/v1/albums/4KZGe18wZJbXL6JLW4KyLc",
          "id": "4KZGe18wZJbXL6JLW4KyLc",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27367bc29c251c777361b17a190",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0267bc29c251c777361b17a190",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485167bc29c251c777361b17a190",
              "width": 64
            }
          ],
          "name": "A Day At The Races (Deluxe Edition 2011 Remaster)",
          "release_date": "1976-12-10",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:4KZGe18wZJbXL6JLW4KyLc"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            },
            "href": "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
            "id": "1dfeR4HaWDbWqFHLkxsg1d",
            "name": "Queen",
            "type": "artist",
            "uri": "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"
          }
        ],
        "duration_ms": 296480,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71029613"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4rDbp1vnvEhieiccprPMdI"
        },
        "href": "https://api.spotify.com/v1/tracks/4rDbp1vnvEhieiccprPMdI",
        "id": "4rDbp1vnvEhieiccprPMdI",
        "is_local": false,
        "name": "Somebody To Love - Remastered 2011",
        "popularity": 75,
        "preview_url": "https://p.scdn.co/mp3-preview/9954fe5d3a1456234bc7ea75e25e4bf69d68b224?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:4rDbp1vnvEhieiccprPMdI",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.406,
        "energy": 0.698,
        "key": 8,
        "loudness": -7.024,
        "mode": 1,
        "speechiness": 0.0624,
        "acousticness": 0.186,
        "instrumentalness": 0,
        "liveness": 0.233,
        "valence": 0.333,
        "tempo": 109.266,
        "track_href": "https://api.spotify.com/v1/tracks/4rDbp1vnvEhieiccprPMdI",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4rDbp1vnvEhieiccprPMdI",
        "time_signature": 3,
        "original_position": 72
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2x1Yi30lsWJUoBj1kmovnm"
          },
          "href": "https://api.spotify.com/v1/albums/2x1Yi30lsWJUoBj1kmovnm",
          "id": "2x1Yi30lsWJUoBj1kmovnm",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736f4433e965a9ee12556ecd12",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026f4433e965a9ee12556ecd12",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516f4433e965a9ee12556ecd12",
              "width": 64
            }
          ],
          "name": "Toulouse Street",
          "release_date": "1972",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2x1Yi30lsWJUoBj1kmovnm"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/39T6qqI0jDtSWWioX8eGJz"
            },
            "href": "https://api.spotify.com/v1/artists/39T6qqI0jDtSWWioX8eGJz",
            "id": "39T6qqI0jDtSWWioX8eGJz",
            "name": "The Doobie Brothers",
            "type": "artist",
            "uri": "spotify:artist:39T6qqI0jDtSWWioX8eGJz"
          }
        ],
        "duration_ms": 227267,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB10000626"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7Ar4G7Ci11gpt6sfH9Cgz5"
        },
        "href": "https://api.spotify.com/v1/tracks/7Ar4G7Ci11gpt6sfH9Cgz5",
        "id": "7Ar4G7Ci11gpt6sfH9Cgz5",
        "is_local": false,
        "name": "Listen to the Music",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/b93175e14bc19ad255f14ed293ca396cfaa1c9b9?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7Ar4G7Ci11gpt6sfH9Cgz5",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.645,
        "energy": 0.598,
        "key": 1,
        "loudness": -13.18,
        "mode": 0,
        "speechiness": 0.0335,
        "acousticness": 0.221,
        "instrumentalness": 0.00000353,
        "liveness": 0.0721,
        "valence": 0.913,
        "tempo": 105.929,
        "track_href": "https://api.spotify.com/v1/tracks/7Ar4G7Ci11gpt6sfH9Cgz5",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7Ar4G7Ci11gpt6sfH9Cgz5",
        "time_signature": 4,
        "original_position": 73
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/45tweuKI0zdh8zgKo05cTw"
          },
          "href": "https://api.spotify.com/v1/albums/45tweuKI0zdh8zgKo05cTw",
          "id": "45tweuKI0zdh8zgKo05cTw",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731a5b6271ae1c8497df20916e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021a5b6271ae1c8497df20916e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511a5b6271ae1c8497df20916e",
              "width": 64
            }
          ],
          "name": "The Temptations Sing Smokey",
          "release_date": "1965-03-22",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:45tweuKI0zdh8zgKo05cTw"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3RwQ26hR2tJtA8F9p2n7jG"
            },
            "href": "https://api.spotify.com/v1/artists/3RwQ26hR2tJtA8F9p2n7jG",
            "id": "3RwQ26hR2tJtA8F9p2n7jG",
            "name": "The Temptations",
            "type": "artist",
            "uri": "spotify:artist:3RwQ26hR2tJtA8F9p2n7jG"
          }
        ],
        "duration_ms": 165000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMO16490001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/745H5CctFr12Mo7cqa1BMH"
        },
        "href": "https://api.spotify.com/v1/tracks/745H5CctFr12Mo7cqa1BMH",
        "id": "745H5CctFr12Mo7cqa1BMH",
        "is_local": false,
        "name": "My Girl",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/a38a2f0fc30ffe90ecae49b9789517338c5ea193?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:745H5CctFr12Mo7cqa1BMH",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.572,
        "energy": 0.418,
        "key": 0,
        "loudness": -10.738,
        "mode": 1,
        "speechiness": 0.0349,
        "acousticness": 0.635,
        "instrumentalness": 0,
        "liveness": 0.0961,
        "valence": 0.694,
        "tempo": 104.566,
        "track_href": "https://api.spotify.com/v1/tracks/745H5CctFr12Mo7cqa1BMH",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/745H5CctFr12Mo7cqa1BMH",
        "time_signature": 4,
        "original_position": 74
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7r36rel1M4gyBavfcJP6Yz"
          },
          "href": "https://api.spotify.com/v1/albums/7r36rel1M4gyBavfcJP6Yz",
          "id": "7r36rel1M4gyBavfcJP6Yz",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273649d4f282653ab8be56f447e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02649d4f282653ab8be56f447e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851649d4f282653ab8be56f447e",
              "width": 64
            }
          ],
          "name": "The Essential Billy Joel",
          "release_date": "2001-10-02",
          "release_date_precision": "day",
          "total_tracks": 36,
          "type": "album",
          "uri": "spotify:album:7r36rel1M4gyBavfcJP6Yz"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e"
            },
            "href": "https://api.spotify.com/v1/artists/6zFYqv1mOsgBRQbae3JJ9e",
            "id": "6zFYqv1mOsgBRQbae3JJ9e",
            "name": "Billy Joel",
            "type": "artist",
            "uri": "spotify:artist:6zFYqv1mOsgBRQbae3JJ9e"
          }
        ],
        "duration_ms": 336093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM17300504"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3FCto7hnn1shUyZL42YgfO"
        },
        "href": "https://api.spotify.com/v1/tracks/3FCto7hnn1shUyZL42YgfO",
        "id": "3FCto7hnn1shUyZL42YgfO",
        "is_local": false,
        "name": "Piano Man",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/58ebd5167860afaf6246d239b5ec9dce329c9f97?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:3FCto7hnn1shUyZL42YgfO",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.334,
        "energy": 0.472,
        "key": 0,
        "loudness": -8.791,
        "mode": 1,
        "speechiness": 0.0277,
        "acousticness": 0.6,
        "instrumentalness": 0.00000362,
        "liveness": 0.317,
        "valence": 0.431,
        "tempo": 179.173,
        "track_href": "https://api.spotify.com/v1/tracks/3FCto7hnn1shUyZL42YgfO",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3FCto7hnn1shUyZL42YgfO",
        "time_signature": 3,
        "original_position": 75
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6WaIQHxEHtZL0RZ62AuY0g"
          },
          "href": "https://api.spotify.com/v1/albums/6WaIQHxEHtZL0RZ62AuY0g",
          "id": "6WaIQHxEHtZL0RZ62AuY0g",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f34e8811de255b34c56301d8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f34e8811de255b34c56301d8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f34e8811de255b34c56301d8",
              "width": 64
            }
          ],
          "name": "The Wall (Remastered)",
          "release_date": "1979-11-30",
          "release_date_precision": "day",
          "total_tracks": 26,
          "type": "album",
          "uri": "spotify:album:6WaIQHxEHtZL0RZ62AuY0g"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
            },
            "href": "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
            "id": "0k17h0D3J5VfsdmQ1iZtE9",
            "name": "Pink Floyd",
            "type": "artist",
            "uri": "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
          }
        ],
        "duration_ms": 228587,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBN9Y1100099"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7rPzEczIS574IgPaiPieS3"
        },
        "href": "https://api.spotify.com/v1/tracks/7rPzEczIS574IgPaiPieS3",
        "id": "7rPzEczIS574IgPaiPieS3",
        "is_local": false,
        "name": "Another Brick In The Wall, Pt. 2 - 2011 Remastered Version",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/73d913b1a9cfa64fda1f7d04d7bb16345fa0aac4?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:7rPzEczIS574IgPaiPieS3",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.693,
        "energy": 0.353,
        "key": 0,
        "loudness": -17.852,
        "mode": 1,
        "speechiness": 0.0414,
        "acousticness": 0.0704,
        "instrumentalness": 0.00113,
        "liveness": 0.503,
        "valence": 0.75,
        "tempo": 104.143,
        "track_href": "https://api.spotify.com/v1/tracks/7rPzEczIS574IgPaiPieS3",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7rPzEczIS574IgPaiPieS3",
        "time_signature": 4,
        "original_position": 76
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/54V1ljNtyzAm053oJqi0SH"
          },
          "href": "https://api.spotify.com/v1/albums/54V1ljNtyzAm053oJqi0SH",
          "id": "54V1ljNtyzAm053oJqi0SH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27317e1907923e91181f38290ac",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0217e1907923e91181f38290ac",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485117e1907923e91181f38290ac",
              "width": 64
            }
          ],
          "name": "Second Helping (Expanded Edition)",
          "release_date": "1974-04-15",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:54V1ljNtyzAm053oJqi0SH"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4MVyzYMgTwdP7Z49wAZHx0"
            },
            "href": "https://api.spotify.com/v1/artists/4MVyzYMgTwdP7Z49wAZHx0",
            "id": "4MVyzYMgTwdP7Z49wAZHx0",
            "name": "Lynyrd Skynyrd",
            "type": "artist",
            "uri": "spotify:artist:4MVyzYMgTwdP7Z49wAZHx0"
          }
        ],
        "duration_ms": 283800,
        "episode": false,
        "explicit": true,
        "external_ids": {
          "isrc": "USMC17446153"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7e89621JPkKaeDSTQ3avtg"
        },
        "href": "https://api.spotify.com/v1/tracks/7e89621JPkKaeDSTQ3avtg",
        "id": "7e89621JPkKaeDSTQ3avtg",
        "is_local": false,
        "name": "Sweet Home Alabama",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/eb85160675cff4cd8d521dbf90316eaafe60db49?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:7e89621JPkKaeDSTQ3avtg",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.596,
        "energy": 0.605,
        "key": 7,
        "loudness": -12.145,
        "mode": 1,
        "speechiness": 0.0255,
        "acousticness": 0.181,
        "instrumentalness": 0.000331,
        "liveness": 0.0863,
        "valence": 0.886,
        "tempo": 97.798,
        "track_href": "https://api.spotify.com/v1/tracks/7e89621JPkKaeDSTQ3avtg",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7e89621JPkKaeDSTQ3avtg",
        "time_signature": 4,
        "original_position": 77
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1MGM1GQX7YGdyOM4Wuf197"
          },
          "href": "https://api.spotify.com/v1/albums/1MGM1GQX7YGdyOM4Wuf197",
          "id": "1MGM1GQX7YGdyOM4Wuf197",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/eae289250c8c0db9820cb772a0d4aa24b60bd6ed",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/da9bf090ff1c3fc89e2aefd695bd9acc68151446",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/5ff2bd43bf1c8b414d4c390af3bb72a45cef9745",
              "width": 64
            }
          ],
          "name": "Las 66 Favoritas de Jose María Íñigo y José Ramón Pardo. Vol. 1 (1958-1961) [Remastered]]",
          "release_date": "2011-05-10",
          "release_date_precision": "day",
          "total_tracks": 66,
          "type": "album",
          "uri": "spotify:album:1MGM1GQX7YGdyOM4Wuf197"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1eYhYunlNJlDoQhtYBvPsi"
            },
            "href": "https://api.spotify.com/v1/artists/1eYhYunlNJlDoQhtYBvPsi",
            "id": "1eYhYunlNJlDoQhtYBvPsi",
            "name": "Ray Charles",
            "type": "artist",
            "uri": "spotify:artist:1eYhYunlNJlDoQhtYBvPsi"
          }
        ],
        "duration_ms": 117493,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "ES6341100155"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0yRbkTprsL0rYr4UId0Ryi"
        },
        "href": "https://api.spotify.com/v1/tracks/0yRbkTprsL0rYr4UId0Ryi",
        "id": "0yRbkTprsL0rYr4UId0Ryi",
        "is_local": false,
        "name": "Hit the Road Jack (Remastered)",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/9ab84ea0b0a8813db8b9220420ae7079dc490ff8?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:0yRbkTprsL0rYr4UId0Ryi",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.588,
        "energy": 0.768,
        "key": 8,
        "loudness": -6.749,
        "mode": 0,
        "speechiness": 0.249,
        "acousticness": 0.587,
        "instrumentalness": 0,
        "liveness": 0.667,
        "valence": 0.961,
        "tempo": 173.107,
        "track_href": "https://api.spotify.com/v1/tracks/0yRbkTprsL0rYr4UId0Ryi",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0yRbkTprsL0rYr4UId0Ryi",
        "time_signature": 4,
        "original_position": 78
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7spOTrIPTM8RrMIAhCjLJi"
          },
          "href": "https://api.spotify.com/v1/albums/7spOTrIPTM8RrMIAhCjLJi",
          "id": "7spOTrIPTM8RrMIAhCjLJi",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27355ef4cc7e56a02c68c3abc0f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0255ef4cc7e56a02c68c3abc0f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485155ef4cc7e56a02c68c3abc0f",
              "width": 64
            }
          ],
          "name": "The Very Best Of \"The Archies\"",
          "release_date": "2007-11-07",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:7spOTrIPTM8RrMIAhCjLJi"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/33QmoCkSqADuQEtMCysYLh"
            },
            "href": "https://api.spotify.com/v1/artists/33QmoCkSqADuQEtMCysYLh",
            "id": "33QmoCkSqADuQEtMCysYLh",
            "name": "The Archies",
            "type": "artist",
            "uri": "spotify:artist:33QmoCkSqADuQEtMCysYLh"
          }
        ],
        "duration_ms": 167187,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLG620400826"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3iSws76HjaU7k49EqJVTfF"
        },
        "href": "https://api.spotify.com/v1/tracks/3iSws76HjaU7k49EqJVTfF",
        "id": "3iSws76HjaU7k49EqJVTfF",
        "is_local": false,
        "name": "Sugar, Sugar",
        "popularity": 67,
        "preview_url": "https://p.scdn.co/mp3-preview/278683ecf117709bfd10fbc042a03d3cb2d2f182?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:3iSws76HjaU7k49EqJVTfF",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.736,
        "energy": 0.871,
        "key": 2,
        "loudness": -2.786,
        "mode": 1,
        "speechiness": 0.0278,
        "acousticness": 0.466,
        "instrumentalness": 0,
        "liveness": 0.108,
        "valence": 0.967,
        "tempo": 122.395,
        "track_href": "https://api.spotify.com/v1/tracks/3iSws76HjaU7k49EqJVTfF",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3iSws76HjaU7k49EqJVTfF",
        "time_signature": 4,
        "original_position": 79
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3mSTISZZYTzufLg11vmYSx"
          },
          "href": "https://api.spotify.com/v1/albums/3mSTISZZYTzufLg11vmYSx",
          "id": "3mSTISZZYTzufLg11vmYSx",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738f1e67d0f5bc49b6ea8de065",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028f1e67d0f5bc49b6ea8de065",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518f1e67d0f5bc49b6ea8de065",
              "width": 64
            }
          ],
          "name": "Chosen",
          "release_date": "2023-05-08",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3mSTISZZYTzufLg11vmYSx"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3ap8NHIp7STwcHZrdKbiQL"
            },
            "href": "https://api.spotify.com/v1/artists/3ap8NHIp7STwcHZrdKbiQL",
            "id": "3ap8NHIp7STwcHZrdKbiQL",
            "name": "Elliot Clayton",
            "type": "artist",
            "uri": "spotify:artist:3ap8NHIp7STwcHZrdKbiQL"
          }
        ],
        "duration_ms": 194285,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBLFP2303589"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1TiBUVbr7RxaDTtMUp1Okr"
        },
        "href": "https://api.spotify.com/v1/tracks/1TiBUVbr7RxaDTtMUp1Okr",
        "id": "1TiBUVbr7RxaDTtMUp1Okr",
        "is_local": false,
        "name": "Chosen",
        "popularity": 15,
        "preview_url": "https://p.scdn.co/mp3-preview/874be37338f51bf1ca5bcf5e1480c5f75e825a47?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1TiBUVbr7RxaDTtMUp1Okr",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.46,
        "energy": 0.871,
        "key": 0,
        "loudness": -3.413,
        "mode": 1,
        "speechiness": 0.0643,
        "acousticness": 0.00058,
        "instrumentalness": 0,
        "liveness": 0.212,
        "valence": 0.702,
        "tempo": 79.97,
        "track_href": "https://api.spotify.com/v1/tracks/1TiBUVbr7RxaDTtMUp1Okr",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1TiBUVbr7RxaDTtMUp1Okr",
        "time_signature": 4,
        "original_position": 80
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/02f3y3NTsddjdUMoNiBppI"
          },
          "href": "https://api.spotify.com/v1/albums/02f3y3NTsddjdUMoNiBppI",
          "id": "02f3y3NTsddjdUMoNiBppI",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a2fc41b0dd6ce4f0d16a4c46",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a2fc41b0dd6ce4f0d16a4c46",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a2fc41b0dd6ce4f0d16a4c46",
              "width": 64
            }
          ],
          "name": "Make It Big",
          "release_date": "1984-10-23",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:02f3y3NTsddjdUMoNiBppI"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5lpH0xAS4fVfLkACg9DAuM"
            },
            "href": "https://api.spotify.com/v1/artists/5lpH0xAS4fVfLkACg9DAuM",
            "id": "5lpH0xAS4fVfLkACg9DAuM",
            "name": "Wham!",
            "type": "artist",
            "uri": "spotify:artist:5lpH0xAS4fVfLkACg9DAuM"
          }
        ],
        "duration_ms": 231333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBBBN0009712"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0ikz6tENMONtK6qGkOrU3c"
        },
        "href": "https://api.spotify.com/v1/tracks/0ikz6tENMONtK6qGkOrU3c",
        "id": "0ikz6tENMONtK6qGkOrU3c",
        "is_local": false,
        "name": "Wake Me Up Before You Go-Go",
        "popularity": 81,
        "preview_url": "https://p.scdn.co/mp3-preview/48ce25ff385552880371a3c460f0b90ecbcfceea?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:0ikz6tENMONtK6qGkOrU3c",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.62,
        "energy": 0.573,
        "key": 0,
        "loudness": -11.893,
        "mode": 1,
        "speechiness": 0.0423,
        "acousticness": 0.271,
        "instrumentalness": 0,
        "liveness": 0.0607,
        "valence": 0.897,
        "tempo": 81.548,
        "track_href": "https://api.spotify.com/v1/tracks/0ikz6tENMONtK6qGkOrU3c",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0ikz6tENMONtK6qGkOrU3c",
        "time_signature": 4,
        "original_position": 81
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4ObsEU7mIXbo2n9A31yfds"
          },
          "href": "https://api.spotify.com/v1/albums/4ObsEU7mIXbo2n9A31yfds",
          "id": "4ObsEU7mIXbo2n9A31yfds",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27342a15a4fe15a8a88ab728d5b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0242a15a4fe15a8a88ab728d5b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485142a15a4fe15a8a88ab728d5b",
              "width": 64
            }
          ],
          "name": "Rock Of The Westies",
          "release_date": "1975-10-24",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4ObsEU7mIXbo2n9A31yfds"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3PhoLpVuITZKcymswpck5b"
            },
            "href": "https://api.spotify.com/v1/artists/3PhoLpVuITZKcymswpck5b",
            "id": "3PhoLpVuITZKcymswpck5b",
            "name": "Elton John",
            "type": "artist",
            "uri": "spotify:artist:3PhoLpVuITZKcymswpck5b"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4vjGlQWexbru6aOUCLTVir"
            },
            "href": "https://api.spotify.com/v1/artists/4vjGlQWexbru6aOUCLTVir",
            "id": "4vjGlQWexbru6aOUCLTVir",
            "name": "Kiki Dee",
            "type": "artist",
            "uri": "spotify:artist:4vjGlQWexbru6aOUCLTVir"
          }
        ],
        "duration_ms": 275440,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBALX7600007"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7HW5WIw7ZgZORCzUxv5gW5"
        },
        "href": "https://api.spotify.com/v1/tracks/7HW5WIw7ZgZORCzUxv5gW5",
        "id": "7HW5WIw7ZgZORCzUxv5gW5",
        "is_local": false,
        "name": "Don't Go Breaking My Heart",
        "popularity": 80,
        "preview_url": "https://p.scdn.co/mp3-preview/a1ac078e1ebc26f93431ccd9b5eec2c8c6dc2272?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 10,
        "type": "audio_features",
        "uri": "spotify:track:7HW5WIw7ZgZORCzUxv5gW5",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.729,
        "energy": 0.844,
        "key": 5,
        "loudness": -8.824,
        "mode": 1,
        "speechiness": 0.0344,
        "acousticness": 0.149,
        "instrumentalness": 0.00000287,
        "liveness": 0.0604,
        "valence": 0.777,
        "tempo": 131.459,
        "track_href": "https://api.spotify.com/v1/tracks/7HW5WIw7ZgZORCzUxv5gW5",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7HW5WIw7ZgZORCzUxv5gW5",
        "time_signature": 4,
        "original_position": 82
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/62FTy4WqUxi3paBlxOhh4M"
          },
          "href": "https://api.spotify.com/v1/albums/62FTy4WqUxi3paBlxOhh4M",
          "id": "62FTy4WqUxi3paBlxOhh4M",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b16991c5257c7d27033dd50a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b16991c5257c7d27033dd50a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b16991c5257c7d27033dd50a",
              "width": 64
            }
          ],
          "name": "Boots",
          "release_date": "1966-03",
          "release_date_precision": "month",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:62FTy4WqUxi3paBlxOhh4M"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3IZrrNonYELubLPJmqOci2"
            },
            "href": "https://api.spotify.com/v1/artists/3IZrrNonYELubLPJmqOci2",
            "id": "3IZrrNonYELubLPJmqOci2",
            "name": "Nancy Sinatra",
            "type": "artist",
            "uri": "spotify:artist:3IZrrNonYELubLPJmqOci2"
          }
        ],
        "duration_ms": 166008,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USASE0500005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2nwCO1PqpvyoFIvq3Vrj8N"
        },
        "href": "https://api.spotify.com/v1/tracks/2nwCO1PqpvyoFIvq3Vrj8N",
        "id": "2nwCO1PqpvyoFIvq3Vrj8N",
        "is_local": false,
        "name": "These Boots Are Made For Walkin'",
        "popularity": 0,
        "preview_url": null,
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:2nwCO1PqpvyoFIvq3Vrj8N",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.74,
        "energy": 0.392,
        "key": 9,
        "loudness": -11.996,
        "mode": 1,
        "speechiness": 0.0824,
        "acousticness": 0.483,
        "instrumentalness": 0.00000111,
        "liveness": 0.0965,
        "valence": 0.387,
        "tempo": 82.742,
        "track_href": "https://api.spotify.com/v1/tracks/2nwCO1PqpvyoFIvq3Vrj8N",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2nwCO1PqpvyoFIvq3Vrj8N",
        "time_signature": 4,
        "original_position": 83
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ZY0QpMBky4uDVxmqEWMwu"
          },
          "href": "https://api.spotify.com/v1/albums/2ZY0QpMBky4uDVxmqEWMwu",
          "id": "2ZY0QpMBky4uDVxmqEWMwu",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734848d47e2700f74e5a544a46",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024848d47e2700f74e5a544a46",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514848d47e2700f74e5a544a46",
              "width": 64
            }
          ],
          "name": "Mississippi Bound",
          "release_date": "2022-10-14",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:2ZY0QpMBky4uDVxmqEWMwu"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5xoAY88lmbvT6QXehTwqbu"
            },
            "href": "https://api.spotify.com/v1/artists/5xoAY88lmbvT6QXehTwqbu",
            "id": "5xoAY88lmbvT6QXehTwqbu",
            "name": "Ivor S.K.",
            "type": "artist",
            "uri": "spotify:artist:5xoAY88lmbvT6QXehTwqbu"
          }
        ],
        "duration_ms": 244831,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "AUOPH2200006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/695Va1uWRfMWE7dgbJmMsc"
        },
        "href": "https://api.spotify.com/v1/tracks/695Va1uWRfMWE7dgbJmMsc",
        "id": "695Va1uWRfMWE7dgbJmMsc",
        "is_local": false,
        "name": "Sex Drugs & Cigarettes",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/bab069172ed90d1fecfe109e4399bb8bb017f3a3?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:695Va1uWRfMWE7dgbJmMsc",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.665,
        "energy": 0.572,
        "key": 2,
        "loudness": -9.913,
        "mode": 1,
        "speechiness": 0.0415,
        "acousticness": 0.443,
        "instrumentalness": 0,
        "liveness": 0.073,
        "valence": 0.961,
        "tempo": 206.093,
        "track_href": "https://api.spotify.com/v1/tracks/695Va1uWRfMWE7dgbJmMsc",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/695Va1uWRfMWE7dgbJmMsc",
        "time_signature": 4,
        "original_position": 84
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/51uoKRa8vT5SULrlF8s2t1"
          },
          "href": "https://api.spotify.com/v1/albums/51uoKRa8vT5SULrlF8s2t1",
          "id": "51uoKRa8vT5SULrlF8s2t1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27316aaf05fe82237576a7d0e38",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0216aaf05fe82237576a7d0e38",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485116aaf05fe82237576a7d0e38",
              "width": 64
            }
          ],
          "name": "Diana Ross Presents The Jackson 5",
          "release_date": "1969-12-18",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:51uoKRa8vT5SULrlF8s2t1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2iE18Oxc8YSumAU232n4rW"
            },
            "href": "https://api.spotify.com/v1/artists/2iE18Oxc8YSumAU232n4rW",
            "id": "2iE18Oxc8YSumAU232n4rW",
            "name": "The Jackson 5",
            "type": "artist",
            "uri": "spotify:artist:2iE18Oxc8YSumAU232n4rW"
          }
        ],
        "duration_ms": 176333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMO19400306"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5LxvwujISqiB8vpRYv887S"
        },
        "href": "https://api.spotify.com/v1/tracks/5LxvwujISqiB8vpRYv887S",
        "id": "5LxvwujISqiB8vpRYv887S",
        "is_local": false,
        "name": "I Want You Back",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/b58f3b21a871833f0b23e20927b0c1cfb436e156?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:5LxvwujISqiB8vpRYv887S",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.469,
        "energy": 0.538,
        "key": 8,
        "loudness": -13.559,
        "mode": 1,
        "speechiness": 0.0571,
        "acousticness": 0.305,
        "instrumentalness": 0.00012,
        "liveness": 0.37,
        "valence": 0.886,
        "tempo": 196.605,
        "track_href": "https://api.spotify.com/v1/tracks/5LxvwujISqiB8vpRYv887S",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5LxvwujISqiB8vpRYv887S",
        "time_signature": 4,
        "original_position": 85
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3ljmFm6dKbB8k5VMi0L6F7"
          },
          "href": "https://api.spotify.com/v1/albums/3ljmFm6dKbB8k5VMi0L6F7",
          "id": "3ljmFm6dKbB8k5VMi0L6F7",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273037cd59f5aa908cbf00241c5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02037cd59f5aa908cbf00241c5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851037cd59f5aa908cbf00241c5",
              "width": 64
            }
          ],
          "name": "Woke",
          "release_date": "2023-02-03",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3ljmFm6dKbB8k5VMi0L6F7"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2V2cS3j5kY7h4wCSkHqBpU"
            },
            "href": "https://api.spotify.com/v1/artists/2V2cS3j5kY7h4wCSkHqBpU",
            "id": "2V2cS3j5kY7h4wCSkHqBpU",
            "name": "Steven Keene",
            "type": "artist",
            "uri": "spotify:artist:2V2cS3j5kY7h4wCSkHqBpU"
          }
        ],
        "duration_ms": 207347,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZJLV2100007"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4YtVwh4koGsQGk77KWoSWG"
        },
        "href": "https://api.spotify.com/v1/tracks/4YtVwh4koGsQGk77KWoSWG",
        "id": "4YtVwh4koGsQGk77KWoSWG",
        "is_local": false,
        "name": "A Little Bit More",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/042bf4e0517ac135643660e133d300b560397cce?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 4,
        "type": "audio_features",
        "uri": "spotify:track:4YtVwh4koGsQGk77KWoSWG",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.297,
        "energy": 0.978,
        "key": 5,
        "loudness": -2.054,
        "mode": 0,
        "speechiness": 0.138,
        "acousticness": 0.00164,
        "instrumentalness": 0.417,
        "liveness": 0.376,
        "valence": 0.626,
        "tempo": 176.953,
        "track_href": "https://api.spotify.com/v1/tracks/4YtVwh4koGsQGk77KWoSWG",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4YtVwh4koGsQGk77KWoSWG",
        "time_signature": 4,
        "original_position": 86
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0PMasrHdpaoIRuHuhHp72O"
          },
          "href": "https://api.spotify.com/v1/albums/0PMasrHdpaoIRuHuhHp72O",
          "id": "0PMasrHdpaoIRuHuhHp72O",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a7865e686c36a4adda6c9978",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a7865e686c36a4adda6c9978",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a7865e686c36a4adda6c9978",
              "width": 64
            }
          ],
          "name": "Born In The U.S.A.",
          "release_date": "1984-06-04",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:0PMasrHdpaoIRuHuhHp72O"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT"
            },
            "href": "https://api.spotify.com/v1/artists/3eqjTLE0HfPfh78zjh6TqT",
            "id": "3eqjTLE0HfPfh78zjh6TqT",
            "name": "Bruce Springsteen",
            "type": "artist",
            "uri": "spotify:artist:3eqjTLE0HfPfh78zjh6TqT"
          }
        ],
        "duration_ms": 278680,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM18400406"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0dOg1ySSI7NkpAe89Zo0b9"
        },
        "href": "https://api.spotify.com/v1/tracks/0dOg1ySSI7NkpAe89Zo0b9",
        "id": "0dOg1ySSI7NkpAe89Zo0b9",
        "is_local": false,
        "name": "Born in the U.S.A.",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/8811b05640f8be29a94225f435edb05ea8c8b98b?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:0dOg1ySSI7NkpAe89Zo0b9",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.398,
        "energy": 0.952,
        "key": 4,
        "loudness": -6.042,
        "mode": 1,
        "speechiness": 0.061,
        "acousticness": 0.000373,
        "instrumentalness": 0.0000775,
        "liveness": 0.1,
        "valence": 0.584,
        "tempo": 122.093,
        "track_href": "https://api.spotify.com/v1/tracks/0dOg1ySSI7NkpAe89Zo0b9",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/0dOg1ySSI7NkpAe89Zo0b9",
        "time_signature": 4,
        "original_position": 87
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7dsWupQRlFuhG8FGiQAUjC"
          },
          "href": "https://api.spotify.com/v1/albums/7dsWupQRlFuhG8FGiQAUjC",
          "id": "7dsWupQRlFuhG8FGiQAUjC",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733f29a976eea00141514ab936",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023f29a976eea00141514ab936",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513f29a976eea00141514ab936",
              "width": 64
            }
          ],
          "name": "Blowin' Your Mind!",
          "release_date": "1967-09",
          "release_date_precision": "month",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:7dsWupQRlFuhG8FGiQAUjC"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/44NX2ffIYHr6D4n7RaZF7A"
            },
            "href": "https://api.spotify.com/v1/artists/44NX2ffIYHr6D4n7RaZF7A",
            "id": "44NX2ffIYHr6D4n7RaZF7A",
            "name": "Van Morrison",
            "type": "artist",
            "uri": "spotify:artist:44NX2ffIYHr6D4n7RaZF7A"
          }
        ],
        "duration_ms": 183307,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM16700357"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3yrSvpt2l1xhsV9Em88Pul"
        },
        "href": "https://api.spotify.com/v1/tracks/3yrSvpt2l1xhsV9Em88Pul",
        "id": "3yrSvpt2l1xhsV9Em88Pul",
        "is_local": false,
        "name": "Brown Eyed Girl",
        "popularity": 82,
        "preview_url": "https://p.scdn.co/mp3-preview/731469a968c3295114a2b7052610674bf56c6048?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:3yrSvpt2l1xhsV9Em88Pul",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.491,
        "energy": 0.583,
        "key": 7,
        "loudness": -10.964,
        "mode": 1,
        "speechiness": 0.0376,
        "acousticness": 0.185,
        "instrumentalness": 0,
        "liveness": 0.406,
        "valence": 0.908,
        "tempo": 150.566,
        "track_href": "https://api.spotify.com/v1/tracks/3yrSvpt2l1xhsV9Em88Pul",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3yrSvpt2l1xhsV9Em88Pul",
        "time_signature": 4,
        "original_position": 88
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2NCtCObbmJoJnplsR5mLAl"
          },
          "href": "https://api.spotify.com/v1/albums/2NCtCObbmJoJnplsR5mLAl",
          "id": "2NCtCObbmJoJnplsR5mLAl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cb81eb3c1238c60f2bbfd3b5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cb81eb3c1238c60f2bbfd3b5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cb81eb3c1238c60f2bbfd3b5",
              "width": 64
            }
          ],
          "name": "Sinatra/Basie: The Complete Reprise Studio Recordings",
          "release_date": "1962-12-10",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:2NCtCObbmJoJnplsR5mLAl"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0"
            },
            "href": "https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
            "id": "1Mxqyy3pSjf8kZZL4QVxS0",
            "name": "Frank Sinatra",
            "type": "artist",
            "uri": "spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2jFZlvIea42ZvcCw4OeEdA"
            },
            "href": "https://api.spotify.com/v1/artists/2jFZlvIea42ZvcCw4OeEdA",
            "id": "2jFZlvIea42ZvcCw4OeEdA",
            "name": "Count Basie",
            "type": "artist",
            "uri": "spotify:artist:2jFZlvIea42ZvcCw4OeEdA"
          }
        ],
        "duration_ms": 147000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRH10800836"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5b7OgznPJJr1vHNYGyvxau"
        },
        "href": "https://api.spotify.com/v1/tracks/5b7OgznPJJr1vHNYGyvxau",
        "id": "5b7OgznPJJr1vHNYGyvxau",
        "is_local": false,
        "name": "Fly Me To The Moon (In Other Words)",
        "popularity": 73,
        "preview_url": "https://p.scdn.co/mp3-preview/56a7677853d02c1dee1feb11d0e4d6df3183578e?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 11,
        "type": "audio_features",
        "uri": "spotify:track:5b7OgznPJJr1vHNYGyvxau",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.668,
        "energy": 0.26,
        "key": 7,
        "loudness": -14.256,
        "mode": 1,
        "speechiness": 0.0523,
        "acousticness": 0.453,
        "instrumentalness": 0,
        "liveness": 0.0621,
        "valence": 0.368,
        "tempo": 119.416,
        "track_href": "https://api.spotify.com/v1/tracks/5b7OgznPJJr1vHNYGyvxau",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5b7OgznPJJr1vHNYGyvxau",
        "time_signature": 4,
        "original_position": 89
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1ojULynnYUTgi16Dz6Vdeo"
          },
          "href": "https://api.spotify.com/v1/albums/1ojULynnYUTgi16Dz6Vdeo",
          "id": "1ojULynnYUTgi16Dz6Vdeo",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ce25add3b79a1f2339651c16",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ce25add3b79a1f2339651c16",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ce25add3b79a1f2339651c16",
              "width": 64
            }
          ],
          "name": "Mystical Cat",
          "release_date": "2023-01-30",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1ojULynnYUTgi16Dz6Vdeo"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2uhVrtDbQHZLrcrokN9Lon"
            },
            "href": "https://api.spotify.com/v1/artists/2uhVrtDbQHZLrcrokN9Lon",
            "id": "2uhVrtDbQHZLrcrokN9Lon",
            "name": "StarAce",
            "type": "artist",
            "uri": "spotify:artist:2uhVrtDbQHZLrcrokN9Lon"
          }
        ],
        "duration_ms": 193603,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "UK6822207050"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6oxtLLab0lDHyHWdw1oMCx"
        },
        "href": "https://api.spotify.com/v1/tracks/6oxtLLab0lDHyHWdw1oMCx",
        "id": "6oxtLLab0lDHyHWdw1oMCx",
        "is_local": false,
        "name": "Mystical Cat",
        "popularity": 26,
        "preview_url": "https://p.scdn.co/mp3-preview/7cac2bcf23eda2639d3498ad67bb06170f3a949e?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:6oxtLLab0lDHyHWdw1oMCx",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.687,
        "energy": 0.852,
        "key": 9,
        "loudness": -4.276,
        "mode": 0,
        "speechiness": 0.0301,
        "acousticness": 0.0194,
        "instrumentalness": 0.00000186,
        "liveness": 0.255,
        "valence": 0.675,
        "tempo": 119.075,
        "track_href": "https://api.spotify.com/v1/tracks/6oxtLLab0lDHyHWdw1oMCx",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/6oxtLLab0lDHyHWdw1oMCx",
        "time_signature": 4,
        "original_position": 90
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/58GjBhQvLHwfQFJtdP9Oxg"
          },
          "href": "https://api.spotify.com/v1/albums/58GjBhQvLHwfQFJtdP9Oxg",
          "id": "58GjBhQvLHwfQFJtdP9Oxg",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2730c3a44d76807bef665eacfa3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e020c3a44d76807bef665eacfa3",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048510c3a44d76807bef665eacfa3",
              "width": 64
            }
          ],
          "name": "Bad Girls",
          "release_date": "1979-04-25",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:58GjBhQvLHwfQFJtdP9Oxg"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2eogQKWWoohI3BSnoG7E2U"
            },
            "href": "https://api.spotify.com/v1/artists/2eogQKWWoohI3BSnoG7E2U",
            "id": "2eogQKWWoohI3BSnoG7E2U",
            "name": "Donna Summer",
            "type": "artist",
            "uri": "spotify:artist:2eogQKWWoohI3BSnoG7E2U"
          }
        ],
        "duration_ms": 314760,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USPR37907202"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2zMJN9JvDlvGP4jB03l1Bz"
        },
        "href": "https://api.spotify.com/v1/tracks/2zMJN9JvDlvGP4jB03l1Bz",
        "id": "2zMJN9JvDlvGP4jB03l1Bz",
        "is_local": false,
        "name": "Hot Stuff",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/b48b9f29b11d9821fc4f34e1307bf2d94867cc7b?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2zMJN9JvDlvGP4jB03l1Bz",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.823,
        "energy": 0.743,
        "key": 0,
        "loudness": -13.98,
        "mode": 1,
        "speechiness": 0.0316,
        "acousticness": 0.00559,
        "instrumentalness": 0.0306,
        "liveness": 0.0707,
        "valence": 0.966,
        "tempo": 120.471,
        "track_href": "https://api.spotify.com/v1/tracks/2zMJN9JvDlvGP4jB03l1Bz",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2zMJN9JvDlvGP4jB03l1Bz",
        "time_signature": 4,
        "original_position": 91
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4lmdDGcU5u1xk3GCcVJSYT"
          },
          "href": "https://api.spotify.com/v1/albums/4lmdDGcU5u1xk3GCcVJSYT",
          "id": "4lmdDGcU5u1xk3GCcVJSYT",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e9a522d43a304d4d433ff251",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e9a522d43a304d4d433ff251",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e9a522d43a304d4d433ff251",
              "width": 64
            }
          ],
          "name": "The Very Best of The Everly Brothers",
          "release_date": "1964-08-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:4lmdDGcU5u1xk3GCcVJSYT"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4ACplpEqD6JIVgKrafauzs"
            },
            "href": "https://api.spotify.com/v1/artists/4ACplpEqD6JIVgKrafauzs",
            "id": "4ACplpEqD6JIVgKrafauzs",
            "name": "The Everly Brothers",
            "type": "artist",
            "uri": "spotify:artist:4ACplpEqD6JIVgKrafauzs"
          }
        ],
        "duration_ms": 143333,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB19903268"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7dblNGnRXEBrVJunazs2U5"
        },
        "href": "https://api.spotify.com/v1/tracks/7dblNGnRXEBrVJunazs2U5",
        "id": "7dblNGnRXEBrVJunazs2U5",
        "is_local": false,
        "name": "All I Have to Do Is Dream",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/064cab5991af814508a07693fbe3323838d818d9?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 8,
        "type": "audio_features",
        "uri": "spotify:track:7dblNGnRXEBrVJunazs2U5",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.534,
        "energy": 0.462,
        "key": 4,
        "loudness": -8.172,
        "mode": 1,
        "speechiness": 0.0266,
        "acousticness": 0.839,
        "instrumentalness": 0,
        "liveness": 0.129,
        "valence": 0.534,
        "tempo": 96.195,
        "track_href": "https://api.spotify.com/v1/tracks/7dblNGnRXEBrVJunazs2U5",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7dblNGnRXEBrVJunazs2U5",
        "time_signature": 4,
        "original_position": 92
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2jTbcSPVTBRAoc3mHU6hy0"
          },
          "href": "https://api.spotify.com/v1/albums/2jTbcSPVTBRAoc3mHU6hy0",
          "id": "2jTbcSPVTBRAoc3mHU6hy0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731b3c09cb3ec9f618664f2622",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021b3c09cb3ec9f618664f2622",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511b3c09cb3ec9f618664f2622",
              "width": 64
            }
          ],
          "name": "Oh, Pretty Woman",
          "release_date": "1962",
          "release_date_precision": "year",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2jTbcSPVTBRAoc3mHU6hy0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS"
            },
            "href": "https://api.spotify.com/v1/artists/0JDkhL4rjiPNEp92jAgJnS",
            "id": "0JDkhL4rjiPNEp92jAgJnS",
            "name": "Roy Orbison",
            "type": "artist",
            "uri": "spotify:artist:0JDkhL4rjiPNEp92jAgJnS"
          }
        ],
        "duration_ms": 178933,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM16401425"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/48i055G1OT5KxGGftwFxWy"
        },
        "href": "https://api.spotify.com/v1/tracks/48i055G1OT5KxGGftwFxWy",
        "id": "48i055G1OT5KxGGftwFxWy",
        "is_local": false,
        "name": "Oh, Pretty Woman",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/246e9dc1fb2676bdacceaa564e46967ed000afef?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:48i055G1OT5KxGGftwFxWy",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.619,
        "energy": 0.603,
        "key": 9,
        "loudness": -9.481,
        "mode": 1,
        "speechiness": 0.0342,
        "acousticness": 0.712,
        "instrumentalness": 0,
        "liveness": 0.0721,
        "valence": 0.958,
        "tempo": 127.433,
        "track_href": "https://api.spotify.com/v1/tracks/48i055G1OT5KxGGftwFxWy",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/48i055G1OT5KxGGftwFxWy",
        "time_signature": 4,
        "original_position": 93
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5z090LQztiqh13wYspQvKQ"
          },
          "href": "https://api.spotify.com/v1/albums/5z090LQztiqh13wYspQvKQ",
          "id": "5z090LQztiqh13wYspQvKQ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273522088789d49e216d9818292",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02522088789d49e216d9818292",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851522088789d49e216d9818292",
              "width": 64
            }
          ],
          "name": "Electric Ladyland",
          "release_date": "1968-10-25",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:5z090LQztiqh13wYspQvKQ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/776Uo845nYHJpNaStv1Ds4"
            },
            "href": "https://api.spotify.com/v1/artists/776Uo845nYHJpNaStv1Ds4",
            "id": "776Uo845nYHJpNaStv1Ds4",
            "name": "Jimi Hendrix",
            "type": "artist",
            "uri": "spotify:artist:776Uo845nYHJpNaStv1Ds4"
          }
        ],
        "duration_ms": 240800,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX90900749"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2aoo2jlRnM3A0NyLQqMN2f"
        },
        "href": "https://api.spotify.com/v1/tracks/2aoo2jlRnM3A0NyLQqMN2f",
        "id": "2aoo2jlRnM3A0NyLQqMN2f",
        "is_local": false,
        "name": "All Along the Watchtower",
        "popularity": 77,
        "preview_url": "https://p.scdn.co/mp3-preview/4f5eb4f96894dcab22691ebc7605cdbc4a7e70aa?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 15,
        "type": "audio_features",
        "uri": "spotify:track:2aoo2jlRnM3A0NyLQqMN2f",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.438,
        "energy": 0.805,
        "key": 8,
        "loudness": -6.237,
        "mode": 1,
        "speechiness": 0.0624,
        "acousticness": 0.00255,
        "instrumentalness": 0.0000569,
        "liveness": 0.0842,
        "valence": 0.564,
        "tempo": 113.253,
        "track_href": "https://api.spotify.com/v1/tracks/2aoo2jlRnM3A0NyLQqMN2f",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2aoo2jlRnM3A0NyLQqMN2f",
        "time_signature": 4,
        "original_position": 94
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1mSECpFqHRW6leG4idqTE1"
          },
          "href": "https://api.spotify.com/v1/albums/1mSECpFqHRW6leG4idqTE1",
          "id": "1mSECpFqHRW6leG4idqTE1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273419ef0b4e93476c41b7b3c89",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02419ef0b4e93476c41b7b3c89",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851419ef0b4e93476c41b7b3c89",
              "width": 64
            }
          ],
          "name": "Seal",
          "release_date": "1994-05-31",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1mSECpFqHRW6leG4idqTE1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5GtMEZEeFFsuHY8ad4kOxv"
            },
            "href": "https://api.spotify.com/v1/artists/5GtMEZEeFFsuHY8ad4kOxv",
            "id": "5GtMEZEeFFsuHY8ad4kOxv",
            "name": "Seal",
            "type": "artist",
            "uri": "spotify:artist:5GtMEZEeFFsuHY8ad4kOxv"
          }
        ],
        "duration_ms": 288427,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB19900917"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3YKptz29AsOlm7WAVnztBh"
        },
        "href": "https://api.spotify.com/v1/tracks/3YKptz29AsOlm7WAVnztBh",
        "id": "3YKptz29AsOlm7WAVnztBh",
        "is_local": false,
        "name": "Kiss from a Rose",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/7902464c33351dafb17949c3f699bf035ba57d22?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:3YKptz29AsOlm7WAVnztBh",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.584,
        "energy": 0.533,
        "key": 10,
        "loudness": -7.11,
        "mode": 0,
        "speechiness": 0.0305,
        "acousticness": 0.684,
        "instrumentalness": 0,
        "liveness": 0.306,
        "valence": 0.224,
        "tempo": 131.745,
        "track_href": "https://api.spotify.com/v1/tracks/3YKptz29AsOlm7WAVnztBh",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3YKptz29AsOlm7WAVnztBh",
        "time_signature": 3,
        "original_position": 95
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6zH7vpx7NiOJiDQzj8C8wY"
          },
          "href": "https://api.spotify.com/v1/albums/6zH7vpx7NiOJiDQzj8C8wY",
          "id": "6zH7vpx7NiOJiDQzj8C8wY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273695ec70b21f26b8e970f2597",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02695ec70b21f26b8e970f2597",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851695ec70b21f26b8e970f2597",
              "width": 64
            }
          ],
          "name": "Shallow Graves",
          "release_date": "2020-09-04",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6zH7vpx7NiOJiDQzj8C8wY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1z3MylQuygGpO5eD1fvs6Q"
            },
            "href": "https://api.spotify.com/v1/artists/1z3MylQuygGpO5eD1fvs6Q",
            "id": "1z3MylQuygGpO5eD1fvs6Q",
            "name": "India Ramey",
            "type": "artist",
            "uri": "spotify:artist:1z3MylQuygGpO5eD1fvs6Q"
          }
        ],
        "duration_ms": 184933,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "QZHZ62077974"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/748Y9WdvsPWZBp7IPkyeiM"
        },
        "href": "https://api.spotify.com/v1/tracks/748Y9WdvsPWZBp7IPkyeiM",
        "id": "748Y9WdvsPWZBp7IPkyeiM",
        "is_local": false,
        "name": "Up to No Good",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/f21e10c13941b65f880d379040329bfdce4e5df0?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 2,
        "type": "audio_features",
        "uri": "spotify:track:748Y9WdvsPWZBp7IPkyeiM",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.529,
        "energy": 0.84,
        "key": 2,
        "loudness": -5.21,
        "mode": 1,
        "speechiness": 0.0917,
        "acousticness": 0.0484,
        "instrumentalness": 0.000392,
        "liveness": 0.15,
        "valence": 0.807,
        "tempo": 169.832,
        "track_href": "https://api.spotify.com/v1/tracks/748Y9WdvsPWZBp7IPkyeiM",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/748Y9WdvsPWZBp7IPkyeiM",
        "time_signature": 4,
        "original_position": 96
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ei2X6ghPnw7YRwQtAH075"
          },
          "href": "https://api.spotify.com/v1/albums/2ei2X6ghPnw7YRwQtAH075",
          "id": "2ei2X6ghPnw7YRwQtAH075",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733009007708ab5134936a58b3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023009007708ab5134936a58b3",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513009007708ab5134936a58b3",
              "width": 64
            }
          ],
          "name": "Honky Chateau",
          "release_date": "1972-05-19",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:2ei2X6ghPnw7YRwQtAH075"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3PhoLpVuITZKcymswpck5b"
            },
            "href": "https://api.spotify.com/v1/artists/3PhoLpVuITZKcymswpck5b",
            "id": "3PhoLpVuITZKcymswpck5b",
            "name": "Elton John",
            "type": "artist",
            "uri": "spotify:artist:3PhoLpVuITZKcymswpck5b"
          }
        ],
        "duration_ms": 281613,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAMB7200006"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3gdewACMIVMEWVbyb8O9sY"
        },
        "href": "https://api.spotify.com/v1/tracks/3gdewACMIVMEWVbyb8O9sY",
        "id": "3gdewACMIVMEWVbyb8O9sY",
        "is_local": false,
        "name": "Rocket Man (I Think It's Going To Be A Long, Long Time)",
        "popularity": 83,
        "preview_url": "https://p.scdn.co/mp3-preview/c7316d016815fab0bb5ecb309da33e57d4da69c5?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 5,
        "type": "audio_features",
        "uri": "spotify:track:3gdewACMIVMEWVbyb8O9sY",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.601,
        "energy": 0.532,
        "key": 10,
        "loudness": -9.119,
        "mode": 1,
        "speechiness": 0.0286,
        "acousticness": 0.432,
        "instrumentalness": 0.00000625,
        "liveness": 0.0925,
        "valence": 0.341,
        "tempo": 136.571,
        "track_href": "https://api.spotify.com/v1/tracks/3gdewACMIVMEWVbyb8O9sY",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3gdewACMIVMEWVbyb8O9sY",
        "time_signature": 4,
        "original_position": 97
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1v4O55JGou3T0Vlj06fdXz"
          },
          "href": "https://api.spotify.com/v1/albums/1v4O55JGou3T0Vlj06fdXz",
          "id": "1v4O55JGou3T0Vlj06fdXz",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273015c484a7aca592df1a77828",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02015c484a7aca592df1a77828",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851015c484a7aca592df1a77828",
              "width": 64
            }
          ],
          "name": "The Singles Plus",
          "release_date": "1987-10-19",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:1v4O55JGou3T0Vlj06fdXz"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3ICflSq6ZgYAIrm2CTkfVP"
            },
            "href": "https://api.spotify.com/v1/artists/3ICflSq6ZgYAIrm2CTkfVP",
            "id": "3ICflSq6ZgYAIrm2CTkfVP",
            "name": "The Animals",
            "type": "artist",
            "uri": "spotify:artist:3ICflSq6ZgYAIrm2CTkfVP"
          }
        ],
        "duration_ms": 269907,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE6400209"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4mn2kNTqiGLwaUR8JdhJ1l"
        },
        "href": "https://api.spotify.com/v1/tracks/4mn2kNTqiGLwaUR8JdhJ1l",
        "id": "4mn2kNTqiGLwaUR8JdhJ1l",
        "is_local": false,
        "name": "House of the Rising Sun",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/da246d5f609a6133eacfbbbd01efef7f85988511?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:4mn2kNTqiGLwaUR8JdhJ1l",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.316,
        "energy": 0.484,
        "key": 9,
        "loudness": -9.11,
        "mode": 0,
        "speechiness": 0.0308,
        "acousticness": 0.000334,
        "instrumentalness": 0.00445,
        "liveness": 0.0912,
        "valence": 0.299,
        "tempo": 117.363,
        "track_href": "https://api.spotify.com/v1/tracks/4mn2kNTqiGLwaUR8JdhJ1l",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4mn2kNTqiGLwaUR8JdhJ1l",
        "time_signature": 3,
        "original_position": 98
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5eJGByVRy3unFhxb38u8sL"
          },
          "href": "https://api.spotify.com/v1/albums/5eJGByVRy3unFhxb38u8sL",
          "id": "5eJGByVRy3unFhxb38u8sL",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27399df7ff91e56e11ae303c4fe",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0299df7ff91e56e11ae303c4fe",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485199df7ff91e56e11ae303c4fe",
              "width": 64
            }
          ],
          "name": "I Had a Name",
          "release_date": "2022-08-19",
          "release_date_precision": "day",
          "total_tracks": 3,
          "type": "album",
          "uri": "spotify:album:5eJGByVRy3unFhxb38u8sL"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6TSjJlhB2taxea58rCkMkj"
            },
            "href": "https://api.spotify.com/v1/artists/6TSjJlhB2taxea58rCkMkj",
            "id": "6TSjJlhB2taxea58rCkMkj",
            "name": "The Vices",
            "type": "artist",
            "uri": "spotify:artist:6TSjJlhB2taxea58rCkMkj"
          }
        ],
        "duration_ms": 184547,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "NLW3Q2200003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4BAoz0zZwmFR1aihUDcfrl"
        },
        "href": "https://api.spotify.com/v1/tracks/4BAoz0zZwmFR1aihUDcfrl",
        "id": "4BAoz0zZwmFR1aihUDcfrl",
        "is_local": false,
        "name": "I Had a Name",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/469119f301b39fe37e1e0921e504037274b36c75?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:4BAoz0zZwmFR1aihUDcfrl",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.556,
        "energy": 0.742,
        "key": 10,
        "loudness": -6.666,
        "mode": 0,
        "speechiness": 0.0351,
        "acousticness": 0.0149,
        "instrumentalness": 0.00000974,
        "liveness": 0.0665,
        "valence": 0.717,
        "tempo": 94.996,
        "track_href": "https://api.spotify.com/v1/tracks/4BAoz0zZwmFR1aihUDcfrl",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4BAoz0zZwmFR1aihUDcfrl",
        "time_signature": 4,
        "original_position": 99
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1DThdjKvkvxYaqlDUnQGzK"
          },
          "href": "https://api.spotify.com/v1/albums/1DThdjKvkvxYaqlDUnQGzK",
          "id": "1DThdjKvkvxYaqlDUnQGzK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d526e12f9cf41ae9069660a8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d526e12f9cf41ae9069660a8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d526e12f9cf41ae9069660a8",
              "width": 64
            }
          ],
          "name": "Soul Men",
          "release_date": "1967",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1DThdjKvkvxYaqlDUnQGzK"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2BVYdY4PyfCF9z4NrkhEB2"
            },
            "href": "https://api.spotify.com/v1/artists/2BVYdY4PyfCF9z4NrkhEB2",
            "id": "2BVYdY4PyfCF9z4NrkhEB2",
            "name": "Sam & Dave",
            "type": "artist",
            "uri": "spotify:artist:2BVYdY4PyfCF9z4NrkhEB2"
          }
        ],
        "duration_ms": 159000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USAT20001065"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4eGHlplaq1ME8oetnTuFFf"
        },
        "href": "https://api.spotify.com/v1/tracks/4eGHlplaq1ME8oetnTuFFf",
        "id": "4eGHlplaq1ME8oetnTuFFf",
        "is_local": false,
        "name": "Soul Man",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/fef830eb36aaca6f22ac750953deca2d21f62408?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:4eGHlplaq1ME8oetnTuFFf",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.79,
        "energy": 0.41,
        "key": 0,
        "loudness": -13.241,
        "mode": 1,
        "speechiness": 0.0343,
        "acousticness": 0.263,
        "instrumentalness": 0.00314,
        "liveness": 0.174,
        "valence": 0.815,
        "tempo": 112.345,
        "track_href": "https://api.spotify.com/v1/tracks/4eGHlplaq1ME8oetnTuFFf",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4eGHlplaq1ME8oetnTuFFf",
        "time_signature": 4,
        "original_position": 100
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3myPwaMYjdwhtq0nFgeG6W"
          },
          "href": "https://api.spotify.com/v1/albums/3myPwaMYjdwhtq0nFgeG6W",
          "id": "3myPwaMYjdwhtq0nFgeG6W",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27322463d6939fec9e17b2a6235",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0222463d6939fec9e17b2a6235",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485122463d6939fec9e17b2a6235",
              "width": 64
            }
          ],
          "name": "Songs From The Big Chair (Super Deluxe Edition)",
          "release_date": "1985-02-25",
          "release_date_precision": "day",
          "total_tracks": 59,
          "type": "album",
          "uri": "spotify:album:3myPwaMYjdwhtq0nFgeG6W"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4bthk9UfsYUYdcFyqxmSUU"
            },
            "href": "https://api.spotify.com/v1/artists/4bthk9UfsYUYdcFyqxmSUU",
            "id": "4bthk9UfsYUYdcFyqxmSUU",
            "name": "Tears For Fears",
            "type": "artist",
            "uri": "spotify:artist:4bthk9UfsYUYdcFyqxmSUU"
          }
        ],
        "duration_ms": 251489,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBF088590110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4RvWPyQ5RL0ao9LPZeSouE"
        },
        "href": "https://api.spotify.com/v1/tracks/4RvWPyQ5RL0ao9LPZeSouE",
        "id": "4RvWPyQ5RL0ao9LPZeSouE",
        "is_local": false,
        "name": "Everybody Wants To Rule The World",
        "popularity": 88,
        "preview_url": "https://p.scdn.co/mp3-preview/49a5e33d422484fde5484d3e665821e9a3a8b540?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:4RvWPyQ5RL0ao9LPZeSouE",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.645,
        "energy": 0.795,
        "key": 7,
        "loudness": -12.095,
        "mode": 1,
        "speechiness": 0.0527,
        "acousticness": 0.347,
        "instrumentalness": 0.00389,
        "liveness": 0.104,
        "valence": 0.535,
        "tempo": 112.067,
        "track_href": "https://api.spotify.com/v1/tracks/4RvWPyQ5RL0ao9LPZeSouE",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4RvWPyQ5RL0ao9LPZeSouE",
        "time_signature": 4,
        "original_position": 101
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2vB7uVHcRU4dmHeFQCTkSK"
          },
          "href": "https://api.spotify.com/v1/albums/2vB7uVHcRU4dmHeFQCTkSK",
          "id": "2vB7uVHcRU4dmHeFQCTkSK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739060a2c0a01366ee03274597",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029060a2c0a01366ee03274597",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519060a2c0a01366ee03274597",
              "width": 64
            }
          ],
          "name": "Rock Around The Clock",
          "release_date": "1955-12-19",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2vB7uVHcRU4dmHeFQCTkSK"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3MFp4cYuYtTZe3d3xkLLbr"
            },
            "href": "https://api.spotify.com/v1/artists/3MFp4cYuYtTZe3d3xkLLbr",
            "id": "3MFp4cYuYtTZe3d3xkLLbr",
            "name": "Bill Haley & His Comets",
            "type": "artist",
            "uri": "spotify:artist:3MFp4cYuYtTZe3d3xkLLbr"
          }
        ],
        "duration_ms": 129893,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USMC15486163"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1uRKT2LRANv4baowBWHfDS"
        },
        "href": "https://api.spotify.com/v1/tracks/1uRKT2LRANv4baowBWHfDS",
        "id": "1uRKT2LRANv4baowBWHfDS",
        "is_local": false,
        "name": "(We're Gonna) Rock Around The Clock",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/e0c8c95f061db7f75c533dff8aaa3740d3293e38?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:1uRKT2LRANv4baowBWHfDS",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.811,
        "energy": 0.859,
        "key": 9,
        "loudness": -6.317,
        "mode": 1,
        "speechiness": 0.168,
        "acousticness": 0.205,
        "instrumentalness": 0.00000373,
        "liveness": 0.0761,
        "valence": 0.784,
        "tempo": 90.686,
        "track_href": "https://api.spotify.com/v1/tracks/1uRKT2LRANv4baowBWHfDS",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/1uRKT2LRANv4baowBWHfDS",
        "time_signature": 4,
        "original_position": 102
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1cmOT0GhJc3op7L0kJsGsC"
          },
          "href": "https://api.spotify.com/v1/albums/1cmOT0GhJc3op7L0kJsGsC",
          "id": "1cmOT0GhJc3op7L0kJsGsC",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737c5454c462cedb6eb1aa8852",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027c5454c462cedb6eb1aa8852",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517c5454c462cedb6eb1aa8852",
              "width": 64
            }
          ],
          "name": "Celebrate (Greatest Hits / Expanded Edition)",
          "release_date": "2013-03-25",
          "release_date_precision": "day",
          "total_tracks": 50,
          "type": "album",
          "uri": "spotify:album:1cmOT0GhJc3op7L0kJsGsC"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6hN9F0iuULZYWXppob22Aj"
            },
            "href": "https://api.spotify.com/v1/artists/6hN9F0iuULZYWXppob22Aj",
            "id": "6hN9F0iuULZYWXppob22Aj",
            "name": "Simple Minds",
            "type": "artist",
            "uri": "spotify:artist:6hN9F0iuULZYWXppob22Aj"
          }
        ],
        "duration_ms": 260773,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAAA0100587"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2u96akbqgCRtkjfLMYrgZo"
        },
        "href": "https://api.spotify.com/v1/tracks/2u96akbqgCRtkjfLMYrgZo",
        "id": "2u96akbqgCRtkjfLMYrgZo",
        "is_local": false,
        "name": "Don't You (Forget About Me) - Remastered 2001",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/163b03e6a2e9e109b24d391dd036f10d56f3fa5b?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2u96akbqgCRtkjfLMYrgZo",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.666,
        "energy": 0.788,
        "key": 2,
        "loudness": -7.02,
        "mode": 1,
        "speechiness": 0.0276,
        "acousticness": 0.0884,
        "instrumentalness": 0.0628,
        "liveness": 0.298,
        "valence": 0.675,
        "tempo": 111.257,
        "track_href": "https://api.spotify.com/v1/tracks/2u96akbqgCRtkjfLMYrgZo",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2u96akbqgCRtkjfLMYrgZo",
        "time_signature": 4,
        "original_position": 103
      },
      {
        "album": {
          "album_type": "single",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0WAQeQMArRh4g5kPpi571L"
          },
          "href": "https://api.spotify.com/v1/albums/0WAQeQMArRh4g5kPpi571L",
          "id": "0WAQeQMArRh4g5kPpi571L",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cbe7ae895d00960f25143947",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cbe7ae895d00960f25143947",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cbe7ae895d00960f25143947",
              "width": 64
            }
          ],
          "name": "Thousand Stars",
          "release_date": "2023-04-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0WAQeQMArRh4g5kPpi571L"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0agWEPfMTw1b4N97WslJqV"
            },
            "href": "https://api.spotify.com/v1/artists/0agWEPfMTw1b4N97WslJqV",
            "id": "0agWEPfMTw1b4N97WslJqV",
            "name": "Kevin Davy White",
            "type": "artist",
            "uri": "spotify:artist:0agWEPfMTw1b4N97WslJqV"
          }
        ],
        "duration_ms": 171000,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "usdy42351659"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6FFOWkMZ3yVpfifDhH8Hpw"
        },
        "href": "https://api.spotify.com/v1/tracks/6FFOWkMZ3yVpfifDhH8Hpw",
        "id": "6FFOWkMZ3yVpfifDhH8Hpw",
        "is_local": false,
        "name": "Thousand Stars",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/24a3662f620748f72197fcd4d94326bc2504a441?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:6FFOWkMZ3yVpfifDhH8Hpw",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.325,
        "energy": 0.886,
        "key": 0,
        "loudness": -6.286,
        "mode": 1,
        "speechiness": 0.0805,
        "acousticness": 0.000134,
        "instrumentalness": 0.00033,
        "liveness": 0.0745,
        "valence": 0.607,
        "tempo": 119.957,
        "track_href": "https://api.spotify.com/v1/tracks/6FFOWkMZ3yVpfifDhH8Hpw",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/6FFOWkMZ3yVpfifDhH8Hpw",
        "time_signature": 4,
        "original_position": 104
      },
      {
        "album": {
          "album_type": "compilation",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0NUEQILaBzavnzcMEs4buZ"
          },
          "href": "https://api.spotify.com/v1/albums/0NUEQILaBzavnzcMEs4buZ",
          "id": "0NUEQILaBzavnzcMEs4buZ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b96c21e15c091eb98a6c88a4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b96c21e15c091eb98a6c88a4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b96c21e15c091eb98a6c88a4",
              "width": 64
            }
          ],
          "name": "The Very Best of Frankie Valli & The 4 Seasons",
          "release_date": "2003-01-14",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:0NUEQILaBzavnzcMEs4buZ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6mcrZQmgzFGRWf7C0SObou"
            },
            "href": "https://api.spotify.com/v1/artists/6mcrZQmgzFGRWf7C0SObou",
            "id": "6mcrZQmgzFGRWf7C0SObou",
            "name": "Frankie Valli & The Four Seasons",
            "type": "artist",
            "uri": "spotify:artist:6mcrZQmgzFGRWf7C0SObou"
          }
        ],
        "duration_ms": 201093,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRH10175221"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7ePFDzrnLt3Ynqgy2UFWri"
        },
        "href": "https://api.spotify.com/v1/tracks/7ePFDzrnLt3Ynqgy2UFWri",
        "id": "7ePFDzrnLt3Ynqgy2UFWri",
        "is_local": false,
        "name": "December, 1963 (Oh What a Night!)",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/51effd871c92f7eb6ff43e9d16028e554db1c12d?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 19,
        "type": "audio_features",
        "uri": "spotify:track:7ePFDzrnLt3Ynqgy2UFWri",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.727,
        "energy": 0.588,
        "key": 1,
        "loudness": -9.568,
        "mode": 1,
        "speechiness": 0.0253,
        "acousticness": 0.058,
        "instrumentalness": 0.00000546,
        "liveness": 0.0414,
        "valence": 0.964,
        "tempo": 104.413,
        "track_href": "https://api.spotify.com/v1/tracks/7ePFDzrnLt3Ynqgy2UFWri",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7ePFDzrnLt3Ynqgy2UFWri",
        "time_signature": 4,
        "original_position": 105
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0O284g2liKB3MTL4MsY1fJ"
          },
          "href": "https://api.spotify.com/v1/albums/0O284g2liKB3MTL4MsY1fJ",
          "id": "0O284g2liKB3MTL4MsY1fJ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27379d527d14aea026582db9af0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0279d527d14aea026582db9af0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485179d527d14aea026582db9af0",
              "width": 64
            }
          ],
          "name": "The Lion Sleeps Tonight",
          "release_date": "1994-08-11",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0O284g2liKB3MTL4MsY1fJ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1GAJzApRTMmYZ9EjQ91VOy"
            },
            "href": "https://api.spotify.com/v1/artists/1GAJzApRTMmYZ9EjQ91VOy",
            "id": "1GAJzApRTMmYZ9EjQ91VOy",
            "name": "The Tokens",
            "type": "artist",
            "uri": "spotify:artist:1GAJzApRTMmYZ9EjQ91VOy"
          }
        ],
        "duration_ms": 161200,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC16100933"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2QbSGkb3TgghEHpjKCsznm"
        },
        "href": "https://api.spotify.com/v1/tracks/2QbSGkb3TgghEHpjKCsznm",
        "id": "2QbSGkb3TgghEHpjKCsznm",
        "is_local": false,
        "name": "The Lion Sleeps Tonight (Wimoweh)",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/44d12a5a7b07e816954cf7f53d5050d9c3e7ebd4?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2QbSGkb3TgghEHpjKCsznm",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.433,
        "energy": 0.478,
        "key": 5,
        "loudness": -9.401,
        "mode": 1,
        "speechiness": 0.0336,
        "acousticness": 0.759,
        "instrumentalness": 0,
        "liveness": 0.162,
        "valence": 0.751,
        "tempo": 121.946,
        "track_href": "https://api.spotify.com/v1/tracks/2QbSGkb3TgghEHpjKCsznm",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2QbSGkb3TgghEHpjKCsznm",
        "time_signature": 4,
        "original_position": 106
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3TU9a0ngwVYr7YRe5fJPVH"
          },
          "href": "https://api.spotify.com/v1/albums/3TU9a0ngwVYr7YRe5fJPVH",
          "id": "3TU9a0ngwVYr7YRe5fJPVH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f9ddaa9b3da1cd7275626987",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f9ddaa9b3da1cd7275626987",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f9ddaa9b3da1cd7275626987",
              "width": 64
            }
          ],
          "name": "Shout!",
          "release_date": "1959-08-21",
          "release_date_precision": "day",
          "total_tracks": 22,
          "type": "album",
          "uri": "spotify:album:3TU9a0ngwVYr7YRe5fJPVH"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/53QzNeFpzAaXYnrDBbDrIp"
            },
            "href": "https://api.spotify.com/v1/artists/53QzNeFpzAaXYnrDBbDrIp",
            "id": "53QzNeFpzAaXYnrDBbDrIp",
            "name": "The Isley Brothers",
            "type": "artist",
            "uri": "spotify:artist:53QzNeFpzAaXYnrDBbDrIp"
          }
        ],
        "duration_ms": 268560,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC15903415"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2ZNTPtYmAhN9vCwnAgqKn1"
        },
        "href": "https://api.spotify.com/v1/tracks/2ZNTPtYmAhN9vCwnAgqKn1",
        "id": "2ZNTPtYmAhN9vCwnAgqKn1",
        "is_local": false,
        "name": "Shout, Pts. 1 & 2",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/daaef949078ecfea871f20f8af03e65877987e53?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 11,
        "type": "audio_features",
        "uri": "spotify:track:2ZNTPtYmAhN9vCwnAgqKn1",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.489,
        "energy": 0.866,
        "key": 10,
        "loudness": -7.433,
        "mode": 1,
        "speechiness": 0.0933,
        "acousticness": 0.753,
        "instrumentalness": 0,
        "liveness": 0.876,
        "valence": 0.416,
        "tempo": 138.63,
        "track_href": "https://api.spotify.com/v1/tracks/2ZNTPtYmAhN9vCwnAgqKn1",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2ZNTPtYmAhN9vCwnAgqKn1",
        "time_signature": 4,
        "original_position": 107
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/31q47gQszFt0CddSyMksgO"
          },
          "href": "https://api.spotify.com/v1/albums/31q47gQszFt0CddSyMksgO",
          "id": "31q47gQszFt0CddSyMksgO",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739f39192f9f8ca1c90847b3e5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029f39192f9f8ca1c90847b3e5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519f39192f9f8ca1c90847b3e5",
              "width": 64
            }
          ],
          "name": "Willy And The Poor Boys (Expanded Edition)",
          "release_date": "1969-11-02",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:31q47gQszFt0CddSyMksgO"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3IYUhFvPQItj6xySrBmZkd"
            },
            "href": "https://api.spotify.com/v1/artists/3IYUhFvPQItj6xySrBmZkd",
            "id": "3IYUhFvPQItj6xySrBmZkd",
            "name": "Creedence Clearwater Revival",
            "type": "artist",
            "uri": "spotify:artist:3IYUhFvPQItj6xySrBmZkd"
          }
        ],
        "duration_ms": 140773,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USC4R0817618"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4BP3uh0hFLFRb5cjsgLqDh"
        },
        "href": "https://api.spotify.com/v1/tracks/4BP3uh0hFLFRb5cjsgLqDh",
        "id": "4BP3uh0hFLFRb5cjsgLqDh",
        "is_local": false,
        "name": "Fortunate Son",
        "popularity": 85,
        "preview_url": "https://p.scdn.co/mp3-preview/3240fb7f732ebc6f9cc83df560dceeab925bba92?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:4BP3uh0hFLFRb5cjsgLqDh",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.64,
        "energy": 0.663,
        "key": 0,
        "loudness": -7.516,
        "mode": 1,
        "speechiness": 0.0374,
        "acousticness": 0.201,
        "instrumentalness": 0.00806,
        "liveness": 0.152,
        "valence": 0.663,
        "tempo": 132.77,
        "track_href": "https://api.spotify.com/v1/tracks/4BP3uh0hFLFRb5cjsgLqDh",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/4BP3uh0hFLFRb5cjsgLqDh",
        "time_signature": 4,
        "original_position": 108
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn"
          },
          "href": "https://api.spotify.com/v1/albums/1jWmEhn3ggaL6isoyLfwBn",
          "id": "1jWmEhn3ggaL6isoyLfwBn",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025b96a8c5d61be8878452f8f1",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515b96a8c5d61be8878452f8f1",
              "width": 64
            }
          ],
          "name": "The Doors",
          "release_date": "1967-01-04",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:1jWmEhn3ggaL6isoyLfwBn"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt"
            },
            "href": "https://api.spotify.com/v1/artists/22WZ7M8sxp5THdruNY3gXt",
            "id": "22WZ7M8sxp5THdruNY3gXt",
            "name": "The Doors",
            "type": "artist",
            "uri": "spotify:artist:22WZ7M8sxp5THdruNY3gXt"
          }
        ],
        "duration_ms": 429760,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USEE19900203"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5uvosCdMlFdTXhoazkTI5R"
        },
        "href": "https://api.spotify.com/v1/tracks/5uvosCdMlFdTXhoazkTI5R",
        "id": "5uvosCdMlFdTXhoazkTI5R",
        "is_local": false,
        "name": "Light My Fire",
        "popularity": 72,
        "preview_url": "https://p.scdn.co/mp3-preview/93ada68507ef1a45fd47f8575cbecc657afd8fff?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 6,
        "type": "audio_features",
        "uri": "spotify:track:5uvosCdMlFdTXhoazkTI5R",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.413,
        "energy": 0.725,
        "key": 3,
        "loudness": -5.787,
        "mode": 0,
        "speechiness": 0.0324,
        "acousticness": 0.369,
        "instrumentalness": 0.0000216,
        "liveness": 0.0905,
        "valence": 0.44,
        "tempo": 124.618,
        "track_href": "https://api.spotify.com/v1/tracks/5uvosCdMlFdTXhoazkTI5R",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/5uvosCdMlFdTXhoazkTI5R",
        "time_signature": 4,
        "original_position": 109
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD"
          },
          "href": "https://api.spotify.com/v1/albums/6YabPKtZAjxwyWbuO9p4ZD",
          "id": "6YabPKtZAjxwyWbuO9p4ZD",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0241720ef0ae31e10d39e43ca2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485141720ef0ae31e10d39e43ca2",
              "width": 64
            }
          ],
          "name": "Highway 61 Revisited",
          "release_date": "1965-08-30",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:6YabPKtZAjxwyWbuO9p4ZD"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/74ASZWbe4lXaubB36ztrGX"
            },
            "href": "https://api.spotify.com/v1/artists/74ASZWbe4lXaubB36ztrGX",
            "id": "74ASZWbe4lXaubB36ztrGX",
            "name": "Bob Dylan",
            "type": "artist",
            "uri": "spotify:artist:74ASZWbe4lXaubB36ztrGX"
          }
        ],
        "duration_ms": 369600,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19922509"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3AhXZa8sUQht0UEdBJgpGc"
        },
        "href": "https://api.spotify.com/v1/tracks/3AhXZa8sUQht0UEdBJgpGc",
        "id": "3AhXZa8sUQht0UEdBJgpGc",
        "is_local": false,
        "name": "Like a Rolling Stone",
        "popularity": 70,
        "preview_url": "https://p.scdn.co/mp3-preview/d48c45e3194cfe07470c85e50ca7dc7440661caa?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:3AhXZa8sUQht0UEdBJgpGc",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.482,
        "energy": 0.721,
        "key": 0,
        "loudness": -6.839,
        "mode": 1,
        "speechiness": 0.0321,
        "acousticness": 0.731,
        "instrumentalness": 0,
        "liveness": 0.189,
        "valence": 0.557,
        "tempo": 95.263,
        "track_href": "https://api.spotify.com/v1/tracks/3AhXZa8sUQht0UEdBJgpGc",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/3AhXZa8sUQht0UEdBJgpGc",
        "time_signature": 4,
        "original_position": 110
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
          },
          "href": "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
          "id": "0ETFjACtuP2ADo6LFhL6HN",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851dc30583ba717007b00cceb25",
              "width": 64
            }
          ],
          "name": "Abbey Road (Remastered)",
          "release_date": "1969-09-26",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
            },
            "href": "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
            "id": "3WrFJ7ztbogyGnTHbHJFl2",
            "name": "The Beatles",
            "type": "artist",
            "uri": "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
          }
        ],
        "duration_ms": 259947,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE0601690"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD"
        },
        "href": "https://api.spotify.com/v1/tracks/2EqlS6tkEnglzr7tkKAAYD",
        "id": "2EqlS6tkEnglzr7tkKAAYD",
        "is_local": false,
        "name": "Come Together - Remastered 2009",
        "popularity": 79,
        "preview_url": "https://p.scdn.co/mp3-preview/bbab28fdda09132f997f45180922fd477fca4c25?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 1,
        "type": "audio_features",
        "uri": "spotify:track:2EqlS6tkEnglzr7tkKAAYD",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.533,
        "energy": 0.376,
        "key": 9,
        "loudness": -11.913,
        "mode": 0,
        "speechiness": 0.0393,
        "acousticness": 0.0302,
        "instrumentalness": 0.248,
        "liveness": 0.0926,
        "valence": 0.187,
        "tempo": 165.007,
        "track_href": "https://api.spotify.com/v1/tracks/2EqlS6tkEnglzr7tkKAAYD",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2EqlS6tkEnglzr7tkKAAYD",
        "time_signature": 4,
        "original_position": 111
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/77UI8F1LuhiQaKIL1qOE1W"
          },
          "href": "https://api.spotify.com/v1/albums/77UI8F1LuhiQaKIL1qOE1W",
          "id": "77UI8F1LuhiQaKIL1qOE1W",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737723fdc89d8e25e65aa6730d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027723fdc89d8e25e65aa6730d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517723fdc89d8e25e65aa6730d",
              "width": 64
            }
          ],
          "name": "Ritchie Valens",
          "release_date": "1959",
          "release_date_precision": "year",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:77UI8F1LuhiQaKIL1qOE1W"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Y9xEAGW4GwGJgbiI6W85P"
            },
            "href": "https://api.spotify.com/v1/artists/5Y9xEAGW4GwGJgbiI6W85P",
            "id": "5Y9xEAGW4GwGJgbiI6W85P",
            "name": "Ritchie Valens",
            "type": "artist",
            "uri": "spotify:artist:5Y9xEAGW4GwGJgbiI6W85P"
          }
        ],
        "duration_ms": 126960,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USRH10402003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2aEeghgUcnu75tzcolFMfs"
        },
        "href": "https://api.spotify.com/v1/tracks/2aEeghgUcnu75tzcolFMfs",
        "id": "2aEeghgUcnu75tzcolFMfs",
        "is_local": false,
        "name": "La Bamba - Single Version",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/b460e782da73afa26d3882db0cfb052e7cfe9947?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 7,
        "type": "audio_features",
        "uri": "spotify:track:2aEeghgUcnu75tzcolFMfs",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.516,
        "energy": 0.809,
        "key": 0,
        "loudness": -6.419,
        "mode": 1,
        "speechiness": 0.0545,
        "acousticness": 0.787,
        "instrumentalness": 0.000331,
        "liveness": 0.303,
        "valence": 0.939,
        "tempo": 75.099,
        "track_href": "https://api.spotify.com/v1/tracks/2aEeghgUcnu75tzcolFMfs",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/2aEeghgUcnu75tzcolFMfs",
        "time_signature": 4,
        "original_position": 112
      },
      {
        "album": {
          "album_type": "album",
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk"
          },
          "href": "https://api.spotify.com/v1/albums/4I5zzKYd2SKDgZ9DRf5LVk",
          "id": "4I5zzKYd2SKDgZ9DRf5LVk",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273204f41d52743c6a9efd62985",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02204f41d52743c6a9efd62985",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851204f41d52743c6a9efd62985",
              "width": 64
            }
          ],
          "name": "\"Heroes\" (2017 Remaster)",
          "release_date": "1977",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4I5zzKYd2SKDgZ9DRf5LVk"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy"
            },
            "href": "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy",
            "id": "0oSGxfWSnnOXhD2fKuz2Gy",
            "name": "David Bowie",
            "type": "artist",
            "uri": "spotify:artist:0oSGxfWSnnOXhD2fKuz2Gy"
          }
        ],
        "duration_ms": 371413,
        "episode": false,
        "explicit": false,
        "external_ids": {
          "isrc": "USJT11700005"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7Jh1bpe76CNTCgdgAdBw4Z"
        },
        "href": "https://api.spotify.com/v1/tracks/7Jh1bpe76CNTCgdgAdBw4Z",
        "id": "7Jh1bpe76CNTCgdgAdBw4Z",
        "is_local": false,
        "name": "Heroes - 2017 Remaster",
        "popularity": 76,
        "preview_url": "https://p.scdn.co/mp3-preview/9c4ff8b06fa3aa92572737ab3616578b20993e14?cid=ad262abcde7048a29f081c4a5d8bbbd3",
        "track": true,
        "track_number": 3,
        "type": "audio_features",
        "uri": "spotify:track:7Jh1bpe76CNTCgdgAdBw4Z",
        "added_at": "2023-05-17T21:53:14Z",
        "danceability": 0.489,
        "energy": 0.758,
        "key": 7,
        "loudness": -6.491,
        "mode": 1,
        "speechiness": 0.0297,
        "acousticness": 0.000678,
        "instrumentalness": 0.49,
        "liveness": 0.092,
        "valence": 0.435,
        "tempo": 112.113,
        "track_href": "https://api.spotify.com/v1/tracks/7Jh1bpe76CNTCgdgAdBw4Z",
        "analysis_url": "https://api.spotify.com/v1/audio-analysis/7Jh1bpe76CNTCgdgAdBw4Z",
        "time_signature": 4,
        "original_position": 113
      }
    ]
  };
  // Render sorting buttons
  const displaySortButtons = () => {
    return (
      <Wrap mt={1.5}>
        <Text>Sort by:</Text>
        <Button size={'sm'} isDisabled>
          #
        </Button>
        <Button size={'sm'} isDisabled>
          Track Name
        </Button>
        <Button size={'sm'} isDisabled>
          Album Name
        </Button>
        <Button size={'sm'} isDisabled>
          Artist Name
        </Button>
        <Button size={'sm'} isDisabled>
          Release Date
        </Button>
        <Button size={'sm'} isDisabled>
          Date Added
        </Button>
        <Button size={'sm'} isDisabled>
          Popularity
        </Button>
        <Button size={'sm'} isDisabled>
          Tempo
        </Button>
        <Button size={'sm'} isDisabled>
          Acousticness
        </Button>
        <Button size={'sm'} isDisabled>
          Danceability
        </Button>
        <Button size={'sm'} isDisabled>
          Energy
        </Button>
        <Button size={'sm'} isDisabled>
          Instrumentalness
        </Button>
        <Button size={'sm'} isDisabled>
          Liveness
        </Button>
        <Button size={'sm'} isDisabled>
          Loudness
        </Button>
        <Button size={'sm'} isDisabled>
          Speechiness
        </Button>
        <Button size={'sm'} isDisabled>
          Valence
        </Button>
      </Wrap>
    );
  }


  return (
    <Container maxW='container.xl' sx={{ padding: isMobile ? '2ch' : '4ch', justifyContent: 'center !important', alignItems: 'center !important' }}>
      
      <Center flexDirection="column">
        {/* always open and not closable */}
        <Card
          w="100%"
          maxW="lg"
          p={4}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          overflow="hidden"
          mb={4}
        >
          <Heading size="lg" mb={4}>
            TuneTidy's Spotify Playlist Sorter
          </Heading>
          <List spacing={3}>
            <ListItem>
              Here you can sort your playlist by many different criteria. And save
              them as new playlists or overwrite the original.
            </ListItem>
            <ListItem>
              <ListIcon as={AddIcon} color="black" />
              Creat Copy: creates a copy of the sorted playlist and adds it to your
              Spotify account. Refresh the page after copying to view the new
              playlist.
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} color="red" />
              Override Plalist: overwrites the original playlist with the sorted
              version. You will lose any manually set custom order you have set for
              the playlist, however you can always revert back to the Date Added as
              your sort order.
            </ListItem>
            <ListItem>
              Login with your Spotify account to edit your playlists. Get started by
              clicking the button below.
            </ListItem>
          </List>
          <Center>
            <Button
              as="a"
              mt={5}
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
              size="md"
              backgroundColor="#1DB954"
              color="black"
            >
              Login with
              <Image
                h={21.9375}
                src="/Spotify_Logo_CMYK_Black.png"
                alt="Spotify"
                paddingLeft="1ch"
              />
            </Button>
          </Center>
        </Card>
        <Card
          rounded={'sm'}
          my={3}
          mx={[0, 3]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={'6px 6px 0 black'}>
          <Box p={4}>
            <Wrap mb={3}>
              <Wrap>
                <Heading color={'black'} fontSize={'2xl'}>
                  <Avatar
                    size="md"
                    src={presetPlaylist?.images?.[0]?.url}
                    mr={2}
                    icon={<Spinner />}
                    borderRadius={2}
                  />

                  {presetPlaylist.name}
                </Heading>
                <WrapItem>
                  <IconButton
                    colorScheme='blue'
                    aria-label='View instructions'
                    icon={<InfoIcon />}
                    size={isMobile ? 'xs' : 'sm'}
                    ml={2}
                    onClick={() => { }}
                    title={'View instructions'}
                    isDisabled
                  />
                  <IconButton
                    backgroundColor={'#1DB954'}
                    aria-label='View playlist on Spotify'
                    icon={<Image src={'/Spotify_Icon_CMYK_Black.png'} boxSize={isMobile ? '15px' : '20px'} fallback={<Spinner size={'xs'}></Spinner>} />}
                    size={isMobile ? 'xs' : 'sm'}
                    ml={2}
                    onClick={() => { }}
                    title={'View playlist on Spotify'}
                    isDisabled
                  />
                </WrapItem>
              </Wrap>
              <Spacer />
              <ButtonGroup size='sm' isAttached>
                <Button size={isMobile ? 'xs' : 'sm'} isDisabled><AddIcon mr={1} /> Create Copy</Button>
                <Button size={isMobile ? 'xs' : 'sm'} colorScheme='red' isDisabled><EditIcon mr={1} /> Override Playlist</Button>
              </ButtonGroup>
            </Wrap>
            {/* Sorting buttons */}
            {displaySortButtons()}
            {/* Tracks list */}
            <TracksList tracks={presetPlaylist.tracks} />
          </Box>
        </Card>
      </Center>
    </Container>

  );
}

export default PublicPlaylistEditor;
