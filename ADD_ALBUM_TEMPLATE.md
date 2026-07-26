# Add Album Template

Use this form when adding a release to the Music Archive. Album and track records are separate so one album can own any number of expandable track entries.

## 1. Album record

Create `src/content/albums/your-album-slug.md`.

```md
---
title: "Album Title"
slug: "album-title"
artist: "SHINHWI"
releaseDate: "2026-01-31"
year: 2026
category: "SHINHWI ORIGINALS"
genre: "Genre / Secondary genre"
cover: "/images/music/album-title-cover.jpg"
description: "A concise one- or two-sentence release description for indexes and metadata."
# Omit catalogNumber when no verified public catalog number is available.
catalogNumber: "SHW-ALB-000"
spotifyUrl: "https://open.spotify.com/album/REPLACE_WITH_ALBUM_ID"
appleMusicUrl: "https://music.apple.com/..."
amazonMusicUrl: "https://music.amazon.com/albums/..."
youtubeMusicUrl: "https://music.youtube.com/playlist?list=..."
morePlatformUrl: "https://push.fm/fl/..."
featured: false
relatedWorld: "Optional Project UNAC world connection"
relatedStory: "Optional story or chapter connection"
bookletImages:
  - src: "/images/music/album-title-booklet-01.jpg"
    alt: "Describe the visible image for visitors using assistive technology"
    caption: "Plate 01 / Short archive caption"
  - src: "/images/music/album-title-booklet-02.jpg"
    alt: "Second booklet image description"
    caption: "Plate 02 / Short archive caption"
---

Write the album statement and liner notes here in Markdown.

Use several short paragraphs rather than one dense block. Explain the record's intent, sound, world or story connection, and any production context that belongs in the public archive.
```

Allowed `category` values:

- `SHINHWI ORIGINALS`
- `PROJECT UNAC OST`

Only one current release should normally use `featured: true`.

## 2. Track records

Create one file per track in `src/content/tracks/`. Use filenames that keep the album and track order visible, such as `album-title-01-opening.md`.

```md
---
album: "album-title"
number: 1
title: "Track Title"
duration: "03:45"
credits:
  - role: "Written and performed by"
    name: "SHINHWI"
  - role: "Production"
    name: "Name"
  - role: "Mix and mastering"
    name: "Name"
# Omit lyrics or commentary when verified public text is unavailable.
lyrics: |-
  First lyric line.
  Second lyric line.

  A new stanza may follow.
commentary: |-
  Describe the track's role, arrangement, lyric concept, motif, or story connection. This appears inside the expandable track record.
---
```

The `album` value must exactly match the album record's `slug`.

## 3. Image files

Place cover and booklet images in `public/images/music/`.

- Cover artwork should be square and large enough for the opening spread.
- Booklet images may use landscape or portrait formats.
- Use square corners; do not bake decorative rounded frames into the files.
- Optimize raster images before committing.
- Write meaningful `alt` text and short monospace-style captions.

## 4. Platform links

- Use the public album URL, not an artist home page, whenever one exists.
- The Spotify URL must contain `/album/{album-id}` so the responsive player can be generated.
- Use `morePlatformUrl` for a consolidated release landing page such as PUSH.fm.
- Omit an unavailable platform field instead of using `#`.
- Omit unverified catalog numbers, credits, lyrics, and commentary instead of filling them with placeholder text.
- External links appear in the opening spread; only Spotify is embedded, once, on the album detail page.

## 5. Review checklist

- Run `npm run build`.
- Open `/music/` and confirm the release appears in the correct category and chronology.
- Open `/music/your-album-slug/`.
- Verify the cover, metadata, platform links, Spotify embed, liner notes, track order, expandable lyrics, credits, booklet images, archive record, and album navigation.
- Check desktop and mobile layouts before publishing.
