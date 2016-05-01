# Jean Michel Backend

## Installation & Usage
run `npm install` to install dependencies

run `nodemon app.js` to start the server 


## Endpoints 
### Get Episode By Id 

__URL__ : /episodes/:episodeId

__Example Response__

```json
{
  "id": 77804,
  "title": "#585: In Defense of Ignorance",
  "description": "Exactly how incompetent you are. What your ex’s best friend really thinks of you. The approximate time that you will die. Some things in life are better not to know about. And sometimes there can be a benefit to not knowing. In this episode – examples of ignorance truly being bliss, or even being an asset",
  "date_created": "2016-04-25",
  "identifier": "6951 at http://www.thisamericanlife.org",
  "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/585/in-defense-of-ignorance",
  "physical_location": "rss",
  "duration": 3667,
  "tags": [],
  "updated_at": "2016-04-25 12:30:05 UTC",
  "itunes_episode": 367456273,
  "date_added": "2016-04-25 11:05:36 UTC",
  "show_id": 27,
  "show_title": "This American Life",
  "audio_files": [
    {
      "id": 77414,
      "duration": 3667,
      "url": [
        "https://www.audiosear.ch/media/audio_file/12e66/585.mp3"
      ]
    }
  ],
  "image_files": [],
  "entities": [],
  "extra": {
    "itunes_episode": "367456273"
  },
  "urls": {
    "self": "https://www.audiosear.ch/api/episodes/77804",
    "ui": "https://www.audiosear.ch/a/12fec/585-in-defense-of-ignorance"
  },
  "categories": [
    {
      "id": 71,
      "parent_id": 6,
      "name": "Storytelling",
      "name_lc": "storytelling"
    }
  ],
  "highlights": {}
}

```
--
### Get Shows 

__URL:__ /shows/

__Optional Query Parameters__

* `shows` - Comma seperated id's of the shows 

__Example Response__

```json
[
  {
    "id": 27,
    "title": "This American Life",
    "description": "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 1.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards.",
    "network": "WBEZ",
    "itunes_id": 201671138,
    "categories": [
      "71"
    ],
    "image_files": [
      {
        "url": {
          "full": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-t500x500.jpg",
          "thumb": "https://i1.sndcdn.com/avatars-000031826170-mhm0e7-large.jpg"
        }
      }
    ],
    "number_of_episodes": 583,
    "episode_ids": [
      77804,
      18416,
    ],
    "urls": {
      "self": "https://www.audiosear.ch/api/shows/27",
      "ui": "https://www.audiosear.ch/show/27/this-american-life"
    },
    "sc_feed": "https://soundcloud.com/this-american-life",
    "web_profiles": {
      "personal": {
        "url": "http://www.thisamericanlife.org",
        "username": ""
      },
      "facebook": {
        "url": "http://facebook.com/thislife",
        "username": "thislife"
      },
      "twitter": {
        "url": "http://twitter.com/thisamerlife",
        "username": "thisamerlife"
      }
    }
  },
  {
    "id": 11,
    "title": "99% Invisible",
    "description": "Design is everywhere in our lives, perhaps most importantly in the places where we’ve just stopped noticing. 99% Invisible (99 Percent Invisible) is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars, KALW in San Francisco, and Radiotopia from PRX. Learn more: http://99percentinvisible.org  Proud member of PRX’s Radiotopia.",
    "network": "Radiotopia",
    "itunes_id": 394775318,
    "categories": [
      "71",
      "33"
    ],
    "image_files": [
      {
        "url": {
          "full": "https://i1.sndcdn.com/avatars-000004377536-9y0zpr-t500x500.jpg",
          "thumb": "https://i1.sndcdn.com/avatars-000004377536-9y0zpr-large.jpg"
        }
      }
    ],
    "number_of_episodes": 178,
    "episode_ids": [
      78948,
      75302,
      1847
    ],
    "urls": {
      "self": "https://www.audiosear.ch/api/shows/11",
      "ui": "https://www.audiosear.ch/show/11/99-invisible"
    },
    "sc_feed": "https://soundcloud.com/roman-mars",
    "web_profiles": {
      "personal": {
        "url": "http://99percentinvisible.org",
        "username": ""
      },
      "facebook": {
        "url": "http://www.facebook.com/99percentinvisible",
        "username": "99percentinvisible"
      },
      "twitter": {
        "url": "http://twitter.com/romanmars",
        "username": "romanmars"
      }
    }
  }
]
```