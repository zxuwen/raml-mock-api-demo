# Jukebox API API documentation version v1
http://jukebox.api.com

---

## /songs
Collection of available songs in Jukebox.

### /songs

* **get**: Get a list of songs.
* **post**: Add a new song to Jukebox.

### /songs/{songId}
Entity representing a song

* **get**: Get the song
with songId =
{songId}

### /songs/{songId}/file-content
The file to be reproduced by the client

* **get**: Get the file content
* **post**: Enters the file content for an existing song entity.

The song needs to be created for the `/songs/{songId}/file-content` to exist.
You can use this second resource to get and post the file to reproduce.

Use the "binary/octet-stream" content type to specify the content from any consumer (excepting web-browsers).
Use the "multipart-form/data" content type to upload a file which content will become the file-content

## /artists
Collection of available artists in Jukebox.

### /artists

* **get**: Get a list of artists.
* **post**: Add a new artist to Jukebox.

### /artists/{artistId}
Entity representing a artist

* **get**: Get the artist
with artistId =
{artistId}

### /artists/{artistId}/albums
Collection of albulms belonging to the artist

* **get**: Get a specific artist's albums list

## /albums
Collection of available albums in Jukebox.

### /albums

* **get**: Get a list of albums.
* **post**: Add a new album to Jukebox.

### /albums/{albumId}
Entity representing a album

* **get**: Get the album
with albumId =
{albumId}

### /albums/{albumId}/songs
Collection of available songs in Jukebox.

* **get**: Get the list of songs for the album with `albumId = {albumId}`

