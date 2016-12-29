# Jean Michel Backend

Wrapper around the [audiosear.ch](https://www.audiosear.ch) API to have curated podcast content. Work in progress.

## Installation & Usage
* run `npm install` to install dependencies
* run `export NODE_ENV=development` to set the environment
* run `nodemon server.js` to start the server

go to `jeanmichel-data` or another mongo directory and run `sudo mongod`

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

### Get Episodes from Shows

Returns the latest 10 episodes of the show.

__URL:__ /shows/episodes

__Optional Query Parameters__

* `shows` - Comma seperated id's of the shows

__Example Response__

```json
[
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
  },
  {
    "id": 18416,
    "title": "#449: Middle School",
    "description": "This week, at the suggestion of a 14-year-old listener, we bring you stories from the awkward, confusing, hormonally charged world of middle school. Including a teacher who transforms peer pressure into a force for good, and reports from the frontlines of the middle school dance.\n\n(Pictured: 7th graders at a costume dance, dressed as chararacters from The Outsiders.)",
    "date_created": "2011-10-30",
    "identifier": "5089 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/449/middle-school",
    "physical_location": "rss",
    "duration": 3445,
    "tags": [],
    "updated_at": "2016-04-18 11:46:54 UTC",
    "itunes_episode": 367017947,
    "date_added": "2015-09-16 21:08:59 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 18206,
        "duration": 3445,
        "url": [
          "https://www.audiosear.ch/media/audio_file/471e/449.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 407910,
        "name": "teacher",
        "identifier": "http://d.opencalais.com/genericHasher-1/d0a067f4-c3c2-30c4-9437-7361127f8904",
        "score": 1,
        "type": "Position",
        "station": "entity",
        "extra": "---\nmatches:\n- detection: '[charged world of middle school. Including ]a teacher[ who transforms\n    peer pressure into a force for]'\n  prefix: 'charged world of middle school. Including '\n  exact: a teacher\n  suffix: ' who transforms peer pressure into a force for'\n  offset: 159\n  length: 9\nrentities:\n- Philosophy of education\n- Knowledge sharing\n- Education\n"
      },
      {
        "id": 407912,
        "name": "Education",
        "identifier": null,
        "score": 1,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Education\nrentities:\n- Philosophy of education\n- Knowledge sharing\n- Education\n"
      }
    ],
    "extra": {
      "itunes_episode": "367017947",
      "skip_transcript": "true"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/18416",
      "ui": "https://www.audiosear.ch/a/47f0/449-middle-school"
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
  },
  {
    "id": 70461,
    "title": "#584: For Your Reconsideration",
    "description": "The older and wiser we get, the more bewildering our past decisions can seem. This week, people revisit those decisions — and we revisit <a href=\"http://www.thisamericanlife.org/radio-archives/episode/555/the-incredible-rarity-of-changing-your-mind\">a story we aired a year ago</a> with new, fascinating updates about a groundbreaking study that turned out to be false.",
    "date_created": "2016-04-11",
    "identifier": "6946 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/584/for-your-reconsideration",
    "physical_location": "rss",
    "duration": 3597,
    "tags": [],
    "updated_at": "2016-04-11 14:32:03 UTC",
    "itunes_episode": 366585165,
    "date_added": "2016-04-11 11:13:58 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 70167,
        "duration": 3597,
        "url": [
          "https://www.audiosear.ch/media/audio_file/11217/584.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 741146,
        "name": "Los Angeles",
        "identifier": "http://d.opencalais.com/genericHasher-1/874eaab9-7b66-36e3-9650-8de7a5001cf9",
        "score": 0.430676558073393,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '34.0522'\nlongitude: '-118.2428'\ncountry: United States\nstate: California\nrentities:\n- Populated places in the United States with Hispanic plurality populations\n- Populated coastal places in California\n- Cities in Los Angeles County, California\n- Port settlements in the United States\n- Article Feedback 5 Additional Articles\n- County seats in California\n- Host cities of the Summer Olympic Games\n- Communities on U.S. Route 66\n- Populated places established in 1781\n- Los Angeles, California\n- Incorporated cities and towns in California\n"
      },
      {
        "id": 741145,
        "name": "Dallas",
        "identifier": "http://d.opencalais.com/genericHasher-1/82b8c016-34f7-3d31-9a9e-3b44a6ef2f08",
        "score": 0.215338279036697,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '32.7833'\nlongitude: '-96.8'\ncountry: United States\nstate: Texas\nrentities:\n- Populated places in the United States with Hispanic plurality populations\n- Cities in Texas\n- County seats in Texas\n- Populated places in Dallas County, Texas\n- Populated places in Collin County, Texas\n- Dallas, Texas\n- Populated places in Rockwall County, Texas\n- Populated places established in 1841\n- Dallas – Fort Worth Metroplex\n- Populated places in Kaufman County, Texas\n- Populated places in Denton County, Texas\n"
      },
      {
        "id": 741143,
        "name": "Los Angeles",
        "identifier": "http://d.opencalais.com/genericHasher-1/3a095c88-7cdd-3076-978a-18aae3312803",
        "score": 0.430676558073393,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '34.0522'\nlongitude: '-118.2428'\ncountry: United States\nstate: California\nrentities:\n- Populated places in the United States with Hispanic plurality populations\n- Populated coastal places in California\n- Cities in Los Angeles County, California\n- Port settlements in the United States\n- Article Feedback 5 Additional Articles\n- County seats in California\n- Host cities of the Summer Olympic Games\n- Communities on U.S. Route 66\n- Populated places established in 1781\n- Los Angeles, California\n- Incorporated cities and towns in California\n"
      },
      {
        "id": 741141,
        "name": "Miami",
        "identifier": "http://d.opencalais.com/genericHasher-1/c6c3a55a-644a-31a1-a604-2e48df00041e",
        "score": 0.604530977561084,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '25.7739'\nlongitude: '-80.1939'\ncountry: United States\nstate: Florida\nrentities:\n- Seaside resorts in Florida\n- Port cities in Florida\n- Miami, Florida\n- Bermuda Triangle\n- Tropics\n- Cities in Miami-Dade County, Florida\n- Populated places in Florida with Hispanic majority populations\n- Populated places established in 1896\n- County seats in Florida\n"
      },
      {
        "id": 741139,
        "name": "thanksgiving",
        "identifier": "http://d.opencalais.com/genericHasher-1/db7149cd-cd91-34e6-9128-d5f8968b3c75",
        "score": 1,
        "type": "Holiday",
        "station": "entity",
        "extra": "---\nrentities:\n- Catholic Liturgical Rites\n- Anglican sacraments\n- Lutheran Eucharistic theology\n- Mass (liturgy)\n- Eucharist\n- Structure of the Mass\n- Christian terms\n- Anglican Eucharistic theology\n- Sacraments\n"
      },
      {
        "id": 741140,
        "name": "Carnival",
        "identifier": "http://d.opencalais.com/genericHasher-1/88545960-b360-3bc8-80ed-2805dde0dbd2",
        "score": 1,
        "type": "Holiday",
        "station": "entity",
        "extra": "---\nrentities:\n- Christian festivals and holy days\n- Haitian music\n- Street culture\n- Carnivals\n- Parades\n"
      }
    ],
    "extra": {
      "itunes_episode": "366585165"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/70461",
      "ui": "https://www.audiosear.ch/a/1133d/584-for-your-reconsideration"
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
  },
  {
    "id": 18310,
    "title": "#556: Same Bed, Different Dreams",
    "description": "Stories of people who are tied together, but imagine radically different futures.  In one case, a movie star and her ex-husband plot against Kim Jong-Il.  In another, a woman stalks her doppleganger. And sometimes, one bed is the basis for an entire relationship, even for a man who almost never sees the person who shares his bed.",
    "date_created": "2015-05-03",
    "identifier": "6765 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/556/same-bed-different-dreams",
    "physical_location": "rss",
    "duration": 3547,
    "tags": [],
    "updated_at": "2016-04-05 11:47:27 UTC",
    "itunes_episode": 366138709,
    "date_added": "2015-09-16 21:07:49 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 18100,
        "duration": 3547,
        "url": [
          "https://www.audiosear.ch/media/audio_file/46b4/556.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 407578,
        "name": "koryo-saram",
        "identifier": null,
        "score": 0.9,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Ethnic groups in Ukraine\n- Korea–Soviet Union relations\n- Ethnic groups in Tajikistan\n- Ethnic groups in Kazakhstan\n- Overseas Korean groups\n- Ethnic groups in Kyrgyzstan\n- Ethnic groups in Russia\n- Korean expatriates in the Soviet Union\n- Ethnic groups in Turkmenistan\n- Koryo-saram\n- Ethnic groups in Uzbekistan\n"
      },
      {
        "id": 407593,
        "name": "futures contract",
        "identifier": null,
        "score": 0.7,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Margin policy\n- Articles with inconsistent citation formats\n- Derivatives (finance)\n"
      },
      {
        "id": 407553,
        "name": "Kim Jong-Il",
        "identifier": "http://d.opencalais.com/pershash-1/d9cba870-986f-3d1b-ac3b-2685489d9043",
        "score": 0.9505,
        "type": "Person",
        "station": "entity",
        "extra": "---\nmatches:\n- detection: '[ against Kim Jong-Il.  In another, a woman stalks ]her[ doppleganger.\n    And sometimes, one bed is the]'\n  prefix: ' against Kim Jong-Il.  In another, a woman stalks '\n  exact: her\n  suffix: ' doppleganger. And sometimes, one bed is the'\n  offset: 182\n  length: 3\nwikipedia_url: http://en.wikipedia.com/wiki/Kim_Jong-il\nrentities:\n- Korean film producers\n- 2011 deaths\n- People from Khabarovsk Krai\n- Children of national leaders\n- Workers' Party of Korea politicians\n- Heads of state of North Korea\n- Alumni of the University of Malta\n- North Korean billionaires\n- Deaths from myocardial infarction\n- Kim Il-sung family\n- Korean expatriates in the Soviet Union\n- Members of the Supreme People's Assembly of North Korea\n- Cardiovascular disease deaths in North Korea\n- 1940s births\n- Leaders of political parties in North Korea\n- Kim Jong-il\n- Koryo-saram\n- Deified people\n- Communist rulers\n"
      },
      {
        "id": 407561,
        "name": "kim dynasty",
        "identifier": null,
        "score": 0.9,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- History of Korea\n- Former countries in Korean history\n- Former countries in East Asia\n- 935 disestablishments\n- Silla\n- 50s BC establishments\n- Ancient peoples\n- States and territories established in 57 BC\n- Korean culture\n"
      },
      {
        "id": 407605,
        "name": "Entertainment & Culture",
        "identifier": null,
        "score": 1,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Entertainment_Culture\nrentities:\n- Media studies\n- Popular culture\n- Youth\n"
      },
      {
        "id": 407614,
        "name": "Human Interest",
        "identifier": null,
        "score": 1,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Human Interest\nrentities:\n- Journalism genres\n"
      },
      {
        "id": 407619,
        "name": "Law & Crime",
        "identifier": null,
        "score": 0.87,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Law_Crime\nrentities:\n- International criminal law\n"
      },
      {
        "id": 407622,
        "name": "Arts and Entertainment",
        "identifier": null,
        "score": 0.84669,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Arts & Entertainment\nrentities:\n- American studies\n- American society\n- Arts in the United States\n- American culture\n- Entertainment in the United States\n"
      },
      {
        "id": 407632,
        "name": "Family and Relationships",
        "identifier": null,
        "score": 0.780952,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Family & Relationships\nrentities:\n- Breastfeeding\n- Fatwas\n- Kinship and descent\n- Islam-related controversies\n- Fiqh\n"
      },
      {
        "id": 407569,
        "name": "kim jong-il",
        "identifier": null,
        "score": 0.9,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Korean film producers\n- 2011 deaths\n- People from Khabarovsk Krai\n- Children of national leaders\n- Workers' Party of Korea politicians\n- Heads of state of North Korea\n- Alumni of the University of Malta\n- North Korean billionaires\n- Deaths from myocardial infarction\n- Kim Il-sung family\n- Korean expatriates in the Soviet Union\n- Members of the Supreme People's Assembly of North Korea\n- Cardiovascular disease deaths in North Korea\n- 1940s births\n- Leaders of political parties in North Korea\n- Kim Jong-il\n- Koryo-saram\n- Deified people\n- Communist rulers\n"
      }
    ],
    "extra": {
      "itunes_episode": "366138709",
      "skip_transcript": "true"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/18310",
      "ui": "https://www.audiosear.ch/a/4786/556-same-bed-different-dreams"
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
  },
  {
    "id": 63018,
    "title": "#583: It'll Make Sense When You're Older",
    "description": "At first, it’s super annoying, getting told it’ll make sense when you’re older. Then, when you’re a teenager, hard lessons are learned, despite your best efforts to be too cool to care. By the time you’re actually old, you know a bunch of stuff— and you’re desperate to hold onto it. You might even wonder HOW you know all the things you know. Hosted by Chana Joffe-Walt and featuring SNL’s Sasheer Zamata.",
    "date_created": "2016-03-28",
    "identifier": "6942 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/583/itll-make-sense-when-youre-older",
    "physical_location": "rss",
    "duration": 3525,
    "tags": [],
    "updated_at": "2016-03-28 12:40:50 UTC",
    "itunes_episode": 365695459,
    "date_added": "2016-03-28 10:12:50 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 62833,
        "duration": 3525,
        "url": [
          "https://www.audiosear.ch/media/audio_file/f571/583.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 710329,
        "name": "Human Interest",
        "identifier": null,
        "score": 0.595,
        "type": null,
        "station": "topic",
        "extra": "{\"original\"=>\"Human Interest\"}"
      },
      {
        "id": 710325,
        "name": "Arkansas",
        "identifier": "http://d.opencalais.com/genericHasher-1/693b9b27-4f42-328f-8fcd-34d3f5c08cc5",
        "score": 0.221064729457504,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"34.8\", \"longitude\"=>\"-92.2\", \"country\"=>\"United States\"}"
      },
      {
        "id": 710324,
        "name": "Chicago",
        "identifier": "http://d.opencalais.com/genericHasher-1/03ff2f32-7d79-3042-a299-2010505bc8fc",
        "score": 0.221064729457504,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>\"41.85\", \"longitude\"=>\"-87.65\", \"country\"=>\"United States\", \"state\"=>\"Illinois\"}"
      },
      {
        "id": 710323,
        "name": "Florida",
        "identifier": "http://d.opencalais.com/genericHasher-1/b5bf3113-97ac-319c-a20d-308c716c8d7b",
        "score": 0.221064729457504,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"28.0908069444\", \"longitude\"=>\"-81.960407533\", \"country\"=>\"United States\"}"
      },
      {
        "id": 710320,
        "name": "America",
        "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
        "score": 0.734361135573556,
        "type": "Continent",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 710318,
        "name": "Bob Brown",
        "identifier": "http://d.opencalais.com/pershash-1/6f91b867-29cb-3f04-96c6-96de4a086e59",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[ my boss. Ira Glass.\\nWho graciously let me sit in ]his[ post this week. Thanks for the hospitality.\\nI'm]\", \"prefix\"=>\" my boss. Ira Glass.\\nWho graciously let me sit in \", \"exact\"=>\"his\", \"suffix\"=>\" post this week. Thanks for the hospitality.\\nI'm\", \"offset\"=>45935, \"length\"=>3}, {\"detection\"=>\"[And things were\\ngoing. Amazing. Because ]his[ producer. Never said no. Like when he\\nasked for]\", \"prefix\"=>\"And things were\\ngoing. Amazing. Because \", \"exact\"=>\"his\", \"suffix\"=>\" producer. Never said no. Like when he\\nasked for\", \"offset\"=>46195, \"length\"=>3}, {\"detection\"=>\"[Because his producer. Never said no. Like when ]he[\\nasked for a model train to blow up her film. And]\", \"prefix\"=>\"Because his producer. Never said no. Like when \", \"exact\"=>\"he\", \"suffix\"=>\"\\nasked for a model train to blow up her film. And\", \"offset\"=>46234, \"length\"=>2}, {\"detection\"=>\"[train packed with explosives on\\nrails. And if ]he[ asked for a wind machine here send helicopters.]\", \"prefix\"=>\"train packed with explosives on\\nrails. And if \", \"exact\"=>\"he\", \"suffix\"=>\" asked for a wind machine here send helicopters.\", \"offset\"=>46353, \"length\"=>2}]}"
      },
      {
        "id": 710315,
        "name": "Ebony",
        "identifier": "http://d.opencalais.com/genericHasher-1/ed829b17-5ba7-3979-89d2-96c22ad939a0",
        "score": 1,
        "type": "Published Medium",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 710312,
        "name": "Larry Smith",
        "identifier": "http://d.opencalais.com/pershash-1/24611986-b9ba-3ee8-a763-8d63d1da579f",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 710310,
        "name": "Brian Reed",
        "identifier": "http://d.opencalais.com/pershash-1/47aee741-638a-3f1a-a1df-2a400893ce7e",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 710309,
        "name": "Nancy Updike",
        "identifier": "http://d.opencalais.com/pershash-1/881e979e-5597-3599-815b-2df0ab522c00",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 710308,
        "name": "Ira Glass",
        "identifier": "http://d.opencalais.com/pershash-1/76d93800-336f-301e-a675-4990d315b8cc",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[times and it's not\\nonly from my mom. It's from ]her[ friends. From adults of love and everybody.\\nSaw]\", \"prefix\"=>\"times and it's not\\nonly from my mom. It's from \", \"exact\"=>\"her\", \"suffix\"=>\" friends. From adults of love and everybody.\\nSaw\", \"offset\"=>1673, \"length\"=>3}, {\"detection\"=>\"[A brief selection. Why do you\\nsmoke. Why did ]she[ commit suicide. Why do I have to go to]\", \"prefix\"=>\"A brief selection. Why do you\\nsmoke. Why did \", \"exact\"=>\"she\", \"suffix\"=>\" commit suicide. Why do I have to go to\", \"offset\"=>2321, \"length\"=>3}, {\"detection\"=>\"[puberty. Who is puberty and why would you hit ]her[. How\\ndo you say butt hole in Spanish. Pretty]\", \"prefix\"=>\"puberty. Who is puberty and why would you hit \", \"exact\"=>\"her\", \"suffix\"=>\". How\\ndo you say butt hole in Spanish. Pretty\", \"offset\"=>2443, \"length\"=>3}, {\"detection\"=>\"[And we're talking about the choices\\nI was made. ]Ira[ describes his thirty's. This way. Every moment I]\", \"prefix\"=>\"And we're talking about the choices\\nI was made. \", \"exact\"=>\"Ira\", \"suffix\"=>\" describes his thirty's. This way. Every moment I\", \"offset\"=>32011, \"length\"=>3}, {\"detection\"=>\"[Like when he\\nasked for a model train to blow up ]her[ film. And Dad was given a real train packed with]\", \"prefix\"=>\"Like when he\\nasked for a model train to blow up \", \"exact\"=>\"her\", \"suffix\"=>\" film. And Dad was given a real train packed with\", \"offset\"=>46272, \"length\"=>3}]}"
      },
      {
        "id": 710306,
        "name": "Daisy Bates",
        "identifier": "http://d.opencalais.com/pershash-1/cf20c996-aa92-3b46-927b-e43cbdcd5fea",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[Nine black kids. And they had a lady named\\n]Daisy[. Somebody. That's Daisy Bates' the head of the]\", \"prefix\"=>\"Nine black kids. And they had a lady named\\n\", \"exact\"=>\"Daisy\", \"suffix\"=>\". Somebody. That's Daisy Bates' the head of the\", \"offset\"=>21620, \"length\"=>5}, {\"detection\"=>\"[Arkansas chapter of the N.W.\\nC.P. at the time. ]She[ would walk these kids to school every day.\\nShe]\", \"prefix\"=>\"Arkansas chapter of the N.W.\\nC.P. at the time. \", \"exact\"=>\"She\", \"suffix\"=>\" would walk these kids to school every day.\\nShe\", \"offset\"=>21720, \"length\"=>3}, {\"detection\"=>\"[She would walk these kids to school every day.\\n]She[ would listen to them. And I mean this is stuff I]\", \"prefix\"=>\"She would walk these kids to school every day.\\n\", \"exact\"=>\"She\", \"suffix\"=>\" would listen to them. And I mean this is stuff I\", \"offset\"=>21767, \"length\"=>3}, {\"detection\"=>\"[mean this is stuff I read in the\\nnewspaper. How ]she[ was sympathetic to what they were going through]\", \"prefix\"=>\"mean this is stuff I read in the\\nnewspaper. How \", \"exact\"=>\"she\", \"suffix\"=>\" was sympathetic to what they were going through\", \"offset\"=>21847, \"length\"=>3}, {\"detection\"=>\"[ Ebony magazine we would read it how sympathetic. ]She[\\nwas today and they had somebody to talk to. We]\", \"prefix\"=>\" Ebony magazine we would read it how sympathetic. \", \"exact\"=>\"She\", \"suffix\"=>\"\\nwas today and they had somebody to talk to. We\", \"offset\"=>22067, \"length\"=>3}, {\"detection\"=>\"[ and acid.\\nBut my mom still envy them. Because in ]her[ mind. Those kids had access to the one]\", \"prefix\"=>\" and acid.\\nBut my mom still envy them. Because in \", \"exact\"=>\"her\", \"suffix\"=>\" mind. Those kids had access to the one\", \"offset\"=>22349, \"length\"=>3}, {\"detection\"=>\"[ had access to the one thing\\nthat would have made ]her[ own situation more bearable. They have the ear]\", \"prefix\"=>\" had access to the one thing\\nthat would have made \", \"exact\"=>\"her\", \"suffix\"=>\" own situation more bearable. They have the ear\", \"offset\"=>22419, \"length\"=>3}, {\"detection\"=>\"[the relationship with their mom like. ]She[ had lots of kids. She had\\nseven kids. She always]\", \"prefix\"=>\"the relationship with their mom like. \", \"exact\"=>\"She\", \"suffix\"=>\" had lots of kids. She had\\nseven kids. She always\", \"offset\"=>22532, \"length\"=>3}, {\"detection\"=>\"[with their mom like. She had lots of kids. ]She[ had\\nseven kids. She always made me feel like I]\", \"prefix\"=>\"with their mom like. She had lots of kids. \", \"exact\"=>\"She\", \"suffix\"=>\" had\\nseven kids. She always made me feel like I\", \"offset\"=>22554, \"length\"=>3}, {\"detection\"=>\"[like. She had lots of kids. She had\\nseven kids. ]She[ always made me feel like I was the wrought up a]\", \"prefix\"=>\"like. She had lots of kids. She had\\nseven kids. \", \"exact\"=>\"She\", \"suffix\"=>\" always made me feel like I was the wrought up a\", \"offset\"=>22574, \"length\"=>3}, {\"detection\"=>\"[so I was black. I was. Chunky. Donkey\\ndusty. ]She[ favored like the lighter kids are like one of]\", \"prefix\"=>\"so I was black. I was. Chunky. Donkey\\ndusty. \", \"exact\"=>\"She\", \"suffix\"=>\" favored like the lighter kids are like one of\", \"offset\"=>22826, \"length\"=>3}, {\"detection\"=>\"[like the lighter kids are like one of us. ]She[ treated them differently.\\nWhen her mother was]\", \"prefix\"=>\"like the lighter kids are like one of us. \", \"exact\"=>\"She\", \"suffix\"=>\" treated them differently.\\nWhen her mother was\", \"offset\"=>22880, \"length\"=>3}, {\"detection\"=>\"[one of us. She treated them differently.\\nWhen ]her[ mother was teaching her. Was the same thing her]\", \"prefix\"=>\"one of us. She treated them differently.\\nWhen \", \"exact\"=>\"her\", \"suffix\"=>\" mother was teaching her. Was the same thing her\", \"offset\"=>22915, \"length\"=>3}, {\"detection\"=>\"[them differently.\\nWhen her mother was teaching ]her[. Was the same thing her country with teaching]\", \"prefix\"=>\"them differently.\\nWhen her mother was teaching \", \"exact\"=>\"her\", \"suffix\"=>\". Was the same thing her country with teaching\", \"offset\"=>22939, \"length\"=>3}, {\"detection\"=>\"[her mother was teaching her. Was the same thing ]her[ country with teaching her that her blackness]\", \"prefix\"=>\"her mother was teaching her. Was the same thing \", \"exact\"=>\"her\", \"suffix\"=>\" country with teaching her that her blackness\", \"offset\"=>22963, \"length\"=>3}, {\"detection\"=>\"[Was the same thing her country with teaching ]her[ that her blackness was\\nless valuable. If she's]\", \"prefix\"=>\"Was the same thing her country with teaching \", \"exact\"=>\"her\", \"suffix\"=>\" that her blackness was\\nless valuable. If she's\", \"offset\"=>22989, \"length\"=>3}, {\"detection\"=>\"[same thing her country with teaching her that ]her[ blackness was\\nless valuable. If she's buying]\", \"prefix\"=>\"same thing her country with teaching her that \", \"exact\"=>\"her\", \"suffix\"=>\" blackness was\\nless valuable. If she's buying\", \"offset\"=>22998, \"length\"=>3}, {\"detection\"=>\"[her that her blackness was\\nless valuable. If ]she['s buying cute little dresses for all of her]\", \"prefix\"=>\"her that her blackness was\\nless valuable. If \", \"exact\"=>\"she\", \"suffix\"=>\"'s buying cute little dresses for all of her\", \"offset\"=>23034, \"length\"=>3}, {\"detection\"=>\"[If she's buying cute little dresses for all of ]her[ daughters.\\nI should be the one that didn't get]\", \"prefix\"=>\"If she's buying cute little dresses for all of \", \"exact\"=>\"her\", \"suffix\"=>\" daughters.\\nI should be the one that didn't get\", \"offset\"=>23078, \"length\"=>3}, {\"detection\"=>\"[hair.\\nMake their hair look cute. And then when ]she[ gets to me as she's tired she just throws a few]\", \"prefix\"=>\"hair.\\nMake their hair look cute. And then when \", \"exact\"=>\"she\", \"suffix\"=>\" gets to me as she's tired she just throws a few\", \"offset\"=>23301, \"length\"=>3}, {\"detection\"=>\"[hair look cute. And then when she gets to me as ]she['s tired she just throws a few plats so\\nmy head]\", \"prefix\"=>\"hair look cute. And then when she gets to me as \", \"exact\"=>\"she\", \"suffix\"=>\"'s tired she just throws a few plats so\\nmy head\", \"offset\"=>23319, \"length\"=>3}, {\"detection\"=>\"[And then when she gets to me as she's tired ]she[ just throws a few plats so\\nmy head and they're]\", \"prefix\"=>\"And then when she gets to me as she's tired \", \"exact\"=>\"she\", \"suffix\"=>\" just throws a few plats so\\nmy head and they're\", \"offset\"=>23331, \"length\"=>3}, {\"detection\"=>\"[ own hair when I was like six gray\\nbecause I knew ]she[ was not go put herself out to make me look]\", \"prefix\"=>\" own hair when I was like six gray\\nbecause I knew \", \"exact\"=>\"she\", \"suffix\"=>\" was not go put herself out to make me look\", \"offset\"=>23475, \"length\"=>3}, {\"detection\"=>\"[This is the part of\\nthe maybe the most that ]she[ feels the way she does about white people]\", \"prefix\"=>\"This is the part of\\nthe maybe the most that \", \"exact\"=>\"she\", \"suffix\"=>\" feels the way she does about white people\", \"offset\"=>23639, \"length\"=>3}, {\"detection\"=>\"[of\\nthe maybe the most that she feels the way ]she[ does about white people because white people]\", \"prefix\"=>\"of\\nthe maybe the most that she feels the way \", \"exact\"=>\"she\", \"suffix\"=>\" does about white people because white people\", \"offset\"=>23657, \"length\"=>3}, {\"detection\"=>\"[people because white people were so\\nterrible to ]her[. And I get that. But there's something else]\", \"prefix\"=>\"people because white people were so\\nterrible to \", \"exact\"=>\"her\", \"suffix\"=>\". And I get that. But there's something else\", \"offset\"=>23726, \"length\"=>3}, {\"detection\"=>\"[ I get that. But there's something else going on. ]She['s mad\\nat her mom for putting her in that]\", \"prefix\"=>\" I get that. But there's something else going on. \", \"exact\"=>\"She\", \"suffix\"=>\"'s mad\\nat her mom for putting her in that\", \"offset\"=>23784, \"length\"=>3}, {\"detection\"=>\"[there's something else going on. She's mad\\nat ]her[ mom for putting her in that situation. Forcing]\", \"prefix\"=>\"there's something else going on. She's mad\\nat \", \"exact\"=>\"her\", \"suffix\"=>\" mom for putting her in that situation. Forcing\", \"offset\"=>23797, \"length\"=>3}, {\"detection\"=>\"[else going on. She's mad\\nat her mom for putting ]her[ in that situation. Forcing her to go to a place]\", \"prefix\"=>\"else going on. She's mad\\nat her mom for putting \", \"exact\"=>\"her\", \"suffix\"=>\" in that situation. Forcing her to go to a place\", \"offset\"=>23817, \"length\"=>3}, {\"detection\"=>\"[mom for putting her in that situation. Forcing ]her[ to go to a place where white people could\\ntreat]\", \"prefix\"=>\"mom for putting her in that situation. Forcing \", \"exact\"=>\"her\", \"suffix\"=>\" to go to a place where white people could\\ntreat\", \"offset\"=>23848, \"length\"=>3}, {\"detection\"=>\"[to go to a place where white people could\\ntreat ]her[ that way\\nwas where I went to school where I]\", \"prefix\"=>\"to go to a place where white people could\\ntreat \", \"exact\"=>\"her\", \"suffix\"=>\" that way\\nwas where I went to school where I\", \"offset\"=>23900, \"length\"=>3}, {\"detection\"=>\"[I couldn't believe how many times I asked ]her[ if\\nshe was proud of her contribution. Do you]\", \"prefix\"=>\"I couldn't believe how many times I asked \", \"exact\"=>\"her\", \"suffix\"=>\" if\\nshe was proud of her contribution. Do you\", \"offset\"=>24178, \"length\"=>3}, {\"detection\"=>\"[ I couldn't believe how many times I asked her if\\n]she[ was proud of her contribution. Do you look at]\", \"prefix\"=>\" I couldn't believe how many times I asked her if\\n\", \"exact\"=>\"she\", \"suffix\"=>\" was proud of her contribution. Do you look at\", \"offset\"=>24185, \"length\"=>3}, {\"detection\"=>\"[how many times I asked her if\\nshe was proud of ]her[ contribution. Do you look at that time and think]\", \"prefix\"=>\"how many times I asked her if\\nshe was proud of \", \"exact\"=>\"her\", \"suffix\"=>\" contribution. Do you look at that time and think\", \"offset\"=>24202, \"length\"=>3}, {\"detection\"=>\"[movement. I get that this is a hard period in ]her[\\nlife but I figured she could at least see how it]\", \"prefix\"=>\"movement. I get that this is a hard period in \", \"exact\"=>\"her\", \"suffix\"=>\"\\nlife but I figured she could at least see how it\", \"offset\"=>25042, \"length\"=>3}, {\"detection\"=>\"[this is a hard period in her\\nlife but I figured ]she[ could at least see how it benefited me. I went]\", \"prefix\"=>\"this is a hard period in her\\nlife but I figured \", \"exact\"=>\"she\", \"suffix\"=>\" could at least see how it benefited me. I went\", \"offset\"=>25065, \"length\"=>3}, {\"detection\"=>\"[get away from me.\\nAnd then my wife girlfriend ]she[ was like was drunk that like. I may be trying to]\", \"prefix\"=>\"get away from me.\\nAnd then my wife girlfriend \", \"exact\"=>\"she\", \"suffix\"=>\" was like was drunk that like. I may be trying to\", \"offset\"=>25642, \"length\"=>3}, {\"detection\"=>\"[to explain the whole thing\\nwith a lady that ]she[ has no right to say that you have. Whoever you]\", \"prefix\"=>\"to explain the whole thing\\nwith a lady that \", \"exact\"=>\"she\", \"suffix\"=>\" has no right to say that you have. Whoever you\", \"offset\"=>25736, \"length\"=>3}, {\"detection\"=>\"[ I mostly have white friends. And I was like this ]she[\\nthink I don't want to hang around black people.]\", \"prefix\"=>\" I mostly have white friends. And I was like this \", \"exact\"=>\"she\", \"suffix\"=>\"\\nthink I don't want to hang around black people.\", \"offset\"=>26566, \"length\"=>3}, {\"detection\"=>\"[But\\nmy mother would let me be curious about ]her[. My mom and I have never had the]\", \"prefix\"=>\"But\\nmy mother would let me be curious about \", \"exact\"=>\"her\", \"suffix\"=>\". My mom and I have never had the\", \"offset\"=>27460, \"length\"=>3}, {\"detection\"=>\"[and I have never had the closest\\nrelationship. ]She[ and my dad split up when I was nine. And at some]\", \"prefix\"=>\"and I have never had the closest\\nrelationship. \", \"exact\"=>\"She\", \"suffix\"=>\" and my dad split up when I was nine. And at some\", \"offset\"=>27519, \"length\"=>3}, {\"detection\"=>\"[ to focus\\na lot of my anger over their divorce on ]her[. She was always very strict with me.\\nSo he]\", \"prefix\"=>\" to focus\\na lot of my anger over their divorce on \", \"exact\"=>\"her\", \"suffix\"=>\". She was always very strict with me.\\nSo he\", \"offset\"=>27637, \"length\"=>3}, {\"detection\"=>\"[lot of my anger over their divorce on her. ]She[ was always very strict with me.\\nSo he bought a]\", \"prefix\"=>\"lot of my anger over their divorce on her. \", \"exact\"=>\"She\", \"suffix\"=>\" was always very strict with me.\\nSo he bought a\", \"offset\"=>27642, \"length\"=>3}, {\"detection\"=>\"[They used a Met Your Mother.\\nFor the rest of ]her[ life. Easy any\\nparallels between. Your]\", \"prefix\"=>\"They used a Met Your Mother.\\nFor the rest of \", \"exact\"=>\"her\", \"suffix\"=>\" life. Easy any\\nparallels between. Your\", \"offset\"=>29005, \"length\"=>3}, {\"detection\"=>\"[cool. I\\nhave a lot of the shore Jewish friends.\\n]She[ told me that they dated for three months and]\", \"prefix\"=>\"cool. I\\nhave a lot of the shore Jewish friends.\\n\", \"exact\"=>\"She\", \"suffix\"=>\" told me that they dated for three months and\", \"offset\"=>29664, \"length\"=>3}, {\"detection\"=>\"[me that they dated for three months and then ]she[ dumped them. Because of her mom.\\nHer uncles are]\", \"prefix\"=>\"me that they dated for three months and then \", \"exact\"=>\"she\", \"suffix\"=>\" dumped them. Because of her mom.\\nHer uncles are\", \"offset\"=>29718, \"length\"=>3}, {\"detection\"=>\"[months and then she dumped them. Because of ]her[ mom.\\nHer uncles are out one night with him and]\", \"prefix\"=>\"months and then she dumped them. Because of \", \"exact\"=>\"her\", \"suffix\"=>\" mom.\\nHer uncles are out one night with him and\", \"offset\"=>29746, \"length\"=>3}, {\"detection\"=>\"[and then she dumped them. Because of her mom.\\n]Her[ uncles are out one night with him and he said.]\", \"prefix\"=>\"and then she dumped them. Because of her mom.\\n\", \"exact\"=>\"Her\", \"suffix\"=>\" uncles are out one night with him and he said.\", \"offset\"=>29755, \"length\"=>3}, {\"detection\"=>\"[white man.\\nI'm going to call your mama and tell ]her[ what you do it up here. So when we\\nget home that]\", \"prefix\"=>\"white man.\\nI'm going to call your mama and tell \", \"exact\"=>\"her\", \"suffix\"=>\" what you do it up here. So when we\\nget home that\", \"offset\"=>29865, \"length\"=>3}]}"
      }
    ],
    "extra": {
      "itunes_episode": "365695459"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/63018",
      "ui": "https://www.audiosear.ch/a/f62a/583-it-ll-make-sense-when-you-re-older"
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
  },
  {
    "id": 55359,
    "title": "#582: When the Beasts Come Marching In",
    "description": "We human beings think we run the world, that we’ve got things under control. And then an animal shows up, and things don’t go as planned. We have stories this week where seals, wolves and a moose drop in and show us who isn't boss.",
    "date_created": "2016-03-14",
    "identifier": "6936 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/582/when-the-beasts-come-marching-in",
    "physical_location": "rss",
    "duration": 3786,
    "tags": [],
    "updated_at": "2016-03-14 12:26:52 UTC",
    "itunes_episode": 364756604,
    "date_added": "2016-03-14 10:13:37 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 55292,
        "duration": 3786,
        "url": [
          "https://www.audiosear.ch/media/audio_file/d7fc/582.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 672576,
        "name": "Chicago",
        "identifier": "http://d.opencalais.com/genericHasher-1/03ff2f32-7d79-3042-a299-2010505bc8fc",
        "score": 0.208014597676509,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '41.85'\nlongitude: '-87.65'\ncountry: United States\nstate: Illinois\nrentities:\n- Populated places in the United States with African American plurality populations\n- Cities in Illinois\n- Populated places in DuPage County, Illinois\n- Port settlements in the United States\n- County seats in Illinois\n- Populated places established in 1833\n- Populated places in Cook County, Illinois\n- Irish-American culture\n- Chicago metropolitan area\n- Communities on U.S. Route 66\n- Populated places on the Great Lakes\n- Italian-American culture\n- Chicago, Illinois\n- United States places with Orthodox Jewish communities\n- Polish American history\n"
      },
      {
        "id": 672570,
        "name": "Thomas Jefferson",
        "identifier": "http://d.opencalais.com/pershash-1/ec04438d-7897-36bc-b43a-ed44a2cd5ab4",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "---\nmatches:\n- detection: |-\n    [drumming\n    Stephanie Foo Hannah choppy watch on ]him[ and he for Rob and Sammy and Alyssa ship and]\n  prefix: \"drumming\\nStephanie Foo Hannah choppy watch on \"\n  exact: him\n  suffix: ' and he for Rob and Sammy and Alyssa ship and'\n  offset: 57098\n  length: 3\n- detection: '[Foo Hannah choppy watch on him and ]he[ for Rob and Sammy and Alyssa\n    ship and Nancy]'\n  prefix: 'Foo Hannah choppy watch on him and '\n  exact: he\n  suffix: ' for Rob and Sammy and Alyssa ship and Nancy'\n  offset: 57106\n  length: 2\nrentities:\n- House of Burgesses members\n- Writers from Virginia\n- United States presidential candidates, 1796\n- Gentleman scientists\n- Classical liberalism\n- United States presidential candidates, 1800\n- People from Albemarle County, Virginia\n- American planters\n- American book and manuscript collectors\n- Ambassadors of the United States to France\n- History of the United States (1789–1849)\n- American gardeners\n- American foreign policy writers\n- People of Virginia in the American Revolution\n- 1743 births\n- Pre-19th-century cryptographers\n- Virginia lawyers\n- Vice Presidents of the United States\n- 1826 deaths\n- American people of Welsh descent\n- Members of the Virginia House of Delegates\n- University of Virginia people\n- Deists\n- American political philosophers\n- Governors of Virginia\n- Democratic-Republican Party Presidents of the United States\n- American Unitarians\n- Continental Congressmen from Virginia\n- The College of William & Mary alumni\n- American inventors\n- Virginia Democratic-Republicans\n- American architects\n- Democratic-Republican Party Vice Presidents of the United States\n- Religious skeptics\n- Presidents of the United States\n- Randolph family of Virginia\n- Thomas Jefferson\n- United States presidential candidates, 1792\n- Enlightenment philosophers\n- American people of English descent\n- Jefferson family\n- American people of Scottish descent\n- People of the American Enlightenment\n- Physiocrats\n- Signers of the United States Declaration of Independence\n- United States presidential candidates, 1804\n- United States Secretaries of State\n"
      },
      {
        "id": 672569,
        "name": "Julie Snyder",
        "identifier": "http://d.opencalais.com/pershash-1/32d67fbe-4335-3c32-b03d-5418000c7ded",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "---\nrentities:\n- People from Longueuil\n- Living people\n- Péladeau family\n- Deal or No Deal\n- 1967 births\n- Canadian television talk show hosts\n- Canadian game show hosts\n"
      },
      {
        "id": 672567,
        "name": "Easter",
        "identifier": "http://d.opencalais.com/genericHasher-1/aca118a4-4ac8-3e8d-9282-620c0d8ac459",
        "score": 1,
        "type": "Holiday",
        "station": "entity",
        "extra": "---\nrentities:\n- Easter\n- Holy Week\n- Christian holidays\n"
      },
      {
        "id": 672565,
        "name": "coaxial cable",
        "identifier": "http://d.opencalais.com/genericHasher-1/b4832ee7-ca15-3581-8680-044213fb8c52",
        "score": 1,
        "type": "Technology",
        "station": "entity",
        "extra": "---\nrentities:\n- Article Feedback 5\n- Antennas (radio)\n- Signal cables\n- Television terminology\n"
      },
      {
        "id": 672566,
        "name": "printing",
        "identifier": "http://d.opencalais.com/genericHasher-1/c78250b6-f7c2-3e2d-bd36-0c1266bd43c0",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "---\nmatches:\n- detection: |-\n    [Rick found the animal in a vacant lot behind a ]printing business[. I walked up and looked and I\n    could see the]\n  prefix: 'Rick found the animal in a vacant lot behind a '\n  exact: printing business\n  suffix: |-\n    . I walked up and looked and I\n    could see the\n  offset: 52785\n  length: 17\nrentities:\n- Planographic printing\n- Lithography\n- Lithography (microfabrication)\n- Greek loanwords\n- Printmaking\n- Communication design\n- Austrian inventions\n- Graphic design\n"
      },
      {
        "id": 672577,
        "name": "Anchorage",
        "identifier": "http://d.opencalais.com/genericHasher-1/7942a56f-91c4-3fd2-b510-19082d1d69b3",
        "score": 0.745724532272885,
        "type": "City",
        "station": "location",
        "extra": "---\nrentities:\n- Port settlements in the United States\n- Anchorage, Alaska\n- Anchorage metropolitan area\n- Cities in Alaska\n- Alaska boroughs\n- Populated places established in 1914\n- Consolidated city–counties in the United States\n"
      },
      {
        "id": 672575,
        "name": "San Diego",
        "identifier": "http://d.opencalais.com/genericHasher-1/b335fee0-c1bf-3b50-9677-478482c47734",
        "score": 0.583970804646981,
        "type": "City",
        "station": "location",
        "extra": "---\nlatitude: '32.7153'\nlongitude: '-117.1564'\ncountry: United States\nstate: California\nrentities:\n- Cities in San Diego County, California\n- San Diego metropolitan area\n- Populated coastal places in California\n- Spanish mission settlements in North America\n- County seats in California\n- San Diego, California\n- Article Feedback 5\n- Populated places established in 1769\n- Cities in Southern California\n- San Diego County, California\n- Incorporated cities and towns in California\n"
      },
      {
        "id": 672574,
        "name": "California",
        "identifier": "http://d.opencalais.com/genericHasher-1/9679b237-33e8-3478-ba13-d9af3c4b943e",
        "score": 0.482994938491779,
        "type": "Province Or State",
        "station": "location",
        "extra": "---\nlatitude: '36.4885198674'\nlongitude: '-119.701379437'\ncountry: United States\nrentities:\n- West Coast of the United States\n- States and territories established in 1850\n- States of the United States\n- Former Spanish colonies\n- California\n"
      },
      {
        "id": 672573,
        "name": "America",
        "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
        "score": 0.745724532272885,
        "type": "Continent",
        "station": "location",
        "extra": "---\nrentities:\n- Northern American countries\n- United States\n- 1776 establishments in the United States\n- Countries bordering the Atlantic Ocean\n- States and territories established in 1776\n- Countries bordering the Arctic Ocean\n- English-speaking countries and territories\n- Former confederations\n- Member states of the United Nations\n- Member states of NATO\n- G20 nations\n- Countries bordering the Pacific Ocean\n- Liberal democracies\n- Superpowers\n- Bicontinental countries\n- Federal countries\n- G8 nations\n"
      },
      {
        "id": 672572,
        "name": "energy",
        "identifier": "http://d.opencalais.com/genericHasher-1/05bb2646-0ab8-3a48-b4eb-d29cfd33ce39",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "---\nrentities:\n- Landscape\n- Hydroelectricity\n- Sustainable technologies\n"
      },
      {
        "id": 672571,
        "name": "food",
        "identifier": "http://d.opencalais.com/genericHasher-1/c16d75d3-6824-32a7-82c2-b8c266572ee5",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "---\nrentities:\n- Agriculture\n"
      },
      {
        "id": 672568,
        "name": "Brian Reed",
        "identifier": "http://d.opencalais.com/pershash-1/47aee741-638a-3f1a-a1df-2a400893ce7e",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "---\nmatches:\n- detection: |-\n    [the water. Biologists call it flushing.\n    And to ]Brian[. And the other SEAL. Activists. Flushing the]\n  prefix: \"the water. Biologists call it flushing.\\nAnd to \"\n  exact: Brian\n  suffix: . And the other SEAL. Activists. Flushing the\n  offset: 9573\n  length: 5\n- detection: |-\n    [in and. You know walking.\n    Shake you awake and. ]He[ told you to leave your house or something I mean]\n  prefix: \"in and. You know walking.\\nShake you awake and. \"\n  exact: He\n  suffix: ' told you to leave your house or something I mean'\n  offset: 9883\n  length: 2\n- detection: |-\n    [and. This is that Pro sealed attorney Guy. ]Brian[ peanuts.\n    And you can make donations you can find]\n  prefix: 'and. This is that Pro sealed attorney Guy. '\n  exact: Brian\n  suffix: |2-\n     peanuts.\n    And you can make donations you can find\n  offset: 11814\n  length: 5\n- detection: |-\n    [to oppose this deal. Don't know your you\n    know ]his[ chauffeur. If you saw your lawyer you know]\n  prefix: \"to oppose this deal. Don't know your you\\nknow \"\n  exact: his\n  suffix: ' chauffeur. If you saw your lawyer you know'\n  offset: 12116\n  length: 3\n- detection: |-\n    [problems with the seals. This is can't Trey go. ]He['s a\n    consultant at coastal environments and he]\n  prefix: 'problems with the seals. This is can''t Trey go. '\n  exact: He\n  suffix: |-\n    's a\n    consultant at coastal environments and he\n  offset: 14030\n  length: 2\n- detection: |-\n    [He's a\n    consultant at coastal environments and ]he[ started a research based organization called the]\n  prefix: \"He's a\\nconsultant at coastal environments and \"\n  exact: he\n  suffix: ' started a research based organization called the'\n  offset: 14076\n  length: 2\n- detection: |-\n    [called the novela so sciatic\n    Institute. ]He['s published more than fifty scientific papers.]\n  prefix: \"called the novela so sciatic\\nInstitute. \"\n  exact: He\n  suffix: '''s published more than fifty scientific papers.'\n  offset: 14157\n  length: 2\n- detection: |-\n    [published more than fifty scientific papers. ]He[ also swam at the Children's Pool as\n    a kid. Back]\n  prefix: 'published more than fifty scientific papers. '\n  exact: He\n  suffix: |2-\n     also swam at the Children's Pool as\n    a kid. Back\n  offset: 14207\n  length: 2\n- detection: |-\n    [ as\n    a kid. Back in the one nine hundred sixty S.. ]He['s been sort of the voice of reason for the]\n  prefix: \" as\\na kid. Back in the one nine hundred sixty S.. \"\n  exact: He\n  suffix: '''s been sort of the voice of reason for the'\n  offset: 14292\n  length: 2\n- detection: |-\n    [violating people's\n    civil rights by harassing ]him[ in a public area. You know tourist stuff.]\n  prefix: \"violating people's\\ncivil rights by harassing \"\n  exact: him\n  suffix: ' in a public area. You know tourist stuff.'\n  offset: 14609\n  length: 3\n- detection: |-\n    [guy and this little girl. She's got to be see ]his[ daughter comes around crying.\n    And she said that]\n  prefix: 'guy and this little girl. She''s got to be see '\n  exact: his\n  suffix: |2-\n     daughter comes around crying.\n    And she said that\n  offset: 15339\n  length: 3\n- detection: |-\n    [ this guy. You know.\n    The father's like sense. And ]he['s yelling at the guy you. My daughter you\n    know.]\n  prefix: \" this guy. You know.\\nThe father's like sense. And \"\n  exact: he\n  suffix: |-\n    's yelling at the guy you. My daughter you\n    know.\n  offset: 15636\n  length: 2\n- detection: |-\n    [you\n    know. I meant she was she was terrified of ]his[ scream and she's. I mean it was that kind of]\n  prefix: \"you\\nknow. I meant she was she was terrified of \"\n  exact: his\n  suffix: ' scream and she''s. I mean it was that kind of'\n  offset: 15724\n  length: 3\n- detection: |-\n    [some SEALs when they came up on the beach.\n    ]Brian[ read me the email. OK Two divers to use the]\n  prefix: |\n    some SEALs when they came up on the beach.\n  exact: Brian\n  suffix: ' read me the email. OK Two divers to use the'\n  offset: 22826\n  length: 5\n- detection: |-\n    [in San\n    Francisco. Either San Diego or. Oakland. ]His[ hogs will be involved in\n    her punishment. She's]\n  prefix: \"in San\\nFrancisco. Either San Diego or. Oakland. \"\n  exact: His\n  suffix: |2-\n     hogs will be involved in\n    her punishment. She's\n  offset: 23422\n  length: 3\n- detection: |-\n    [the animal protection\n    and Rescue League. In one ]he[ threatened to burn down the organization store]\n  prefix: \"the animal protection\\nand Rescue League. In one \"\n  exact: he\n  suffix: ' threatened to burn down the organization store'\n  offset: 24034\n  length: 2\n- detection: |-\n    [ protection. This thing. Being the stun gun. Now. ]Brian[ went out of his way to\n    explain that it wasn't]\n  prefix: ' protection. This thing. Being the stun gun. Now. '\n  exact: Brian\n  suffix: |2-\n     went out of his way to\n    explain that it wasn't\n  offset: 29233\n  length: 5\n- detection: |-\n    [Being the stun gun. Now. Brian went out of ]his[ way to\n    explain that it wasn't technically a stun]\n  prefix: 'Being the stun gun. Now. Brian went out of '\n  exact: his\n  suffix: |2-\n     way to\n    explain that it wasn't technically a stun\n  offset: 29251\n  length: 3\n- detection: |-\n    [a stun gun. This point was really important to ]him[ since he had an\n    expert witness declare it not a]\n  prefix: 'a stun gun. This point was really important to '\n  exact: him\n  suffix: |2-\n     since he had an\n    expert witness declare it not a\n  offset: 29344\n  length: 3\n- detection: |-\n    [This point was really important to him since ]he[ had an\n    expert witness declare it not a stun gun.]\n  prefix: 'This point was really important to him since '\n  exact: he\n  suffix: |2-\n     had an\n    expert witness declare it not a stun gun.\n  offset: 29354\n  length: 2\n- detection: |-\n    [how the\n    newspapers reported. Any case when ]he[ got down to the beach. The seaweed kicker can]\n  prefix: \"how the\\nnewspapers reported. Any case when \"\n  exact: he\n  suffix: ' got down to the beach. The seaweed kicker can'\n  offset: 29497\n  length: 2\n- detection: |-\n    [near. You know near where the scalp line is and ]he['s just gone\n    back and forth from the callup and]\n  prefix: 'near. You know near where the scalp line is and '\n  exact: he\n  suffix: |-\n    's just gone\n    back and forth from the callup and\n  offset: 29631\n  length: 2\n- detection: |-\n    [callup and then dumping in the water and then ]he[ comes back picks up another two\n    handfuls full of]\n  prefix: 'callup and then dumping in the water and then '\n  exact: he\n  suffix: |2-\n     comes back picks up another two\n    handfuls full of\n  offset: 29716\n  length: 2\n- detection: |-\n    [picks up another two\n    handfuls full of kelp and ]he[ goes. Oh you want to listen just slings it right]\n  prefix: \"picks up another two\\nhandfuls full of kelp and \"\n  exact: he\n  suffix: ' goes. Oh you want to listen just slings it right'\n  offset: 29777\n  length: 2\n- detection: |-\n    [device. And I did try to. You\n    know. I pushed ]him[ back with it. He admitted in the police report.]\n  prefix: \"device. And I did try to. You\\nknow. I pushed \"\n  exact: him\n  suffix: ' back with it. He admitted in the police report.'\n  offset: 30028\n  length: 3\n- detection: |-\n    [ did try to. You\n    know. I pushed him back with it. ]He[ admitted in the police report. He\n    was not]\n  prefix: \" did try to. You\\nknow. I pushed him back with it. \"\n  exact: He\n  suffix: |2-\n     admitted in the police report. He\n    was not\n  offset: 30046\n  length: 2\n- detection: |-\n    [back with it. He admitted in the police report. ]He[\n    was not shocked through his thick sweat sure]\n  prefix: 'back with it. He admitted in the police report. '\n  exact: He\n  suffix: |2-\n\n    was not shocked through his thick sweat sure\n  offset: 30080\n  length: 2\n- detection: |-\n    [ in the police report. He\n    was not shocked through ]his[ thick sweat sure that you brought it down. You]\n  prefix: \" in the police report. He\\nwas not shocked through \"\n  exact: his\n  suffix: ' thick sweat sure that you brought it down. You'\n  offset: 30107\n  length: 3\n- detection: |-\n    [ my perspective. I was\n    enforcing the law. I mean. ]He['s harassing Seal's He's harassing people and\n    he]\n  prefix: \" my perspective. I was\\nenforcing the law. I mean. \"\n  exact: He\n  suffix: |-\n    's harassing Seal's He's harassing people and\n    he\n  offset: 30329\n  length: 2\n- detection: |-\n    [the law. I mean. He's harassing Seal's ]He['s harassing people and\n    he attacks me. And I was]\n  prefix: 'the law. I mean. He''s harassing Seal''s '\n  exact: He\n  suffix: |-\n    's harassing people and\n    he attacks me. And I was\n  offset: 30351\n  length: 2\n- detection: |-\n    [He's harassing Seal's He's harassing people and\n    ]he[ attacks me. And I was using reasonable force for]\n  prefix: |\n    He's harassing Seal's He's harassing people and\n  exact: he\n  suffix: ' attacks me. And I was using reasonable force for'\n  offset: 30377\n  length: 2\n- detection: |-\n    [and went to the ground. And I think I pinned ]him[ down and I think all the police like\n    that I mean]\n  prefix: 'and went to the ground. And I think I pinned '\n  exact: him\n  suffix: |2-\n     down and I think all the police like\n    that I mean\n  offset: 30511\n  length: 3\n- detection: |-\n    [ down and I think all the police like\n    that I mean ]he[ was you know he was drunk he was agitated I mean]\n  prefix: \" down and I think all the police like\\nthat I mean \"\n  exact: he\n  suffix: ' was you know he was drunk he was agitated I mean'\n  offset: 30564\n  length: 2\n- detection: |-\n    [all the police like\n    that I mean he was you know ]he[ was drunk he was agitated I mean he was just]\n  prefix: \"all the police like\\nthat I mean he was you know \"\n  exact: he\n  suffix: ' was drunk he was agitated I mean he was just'\n  offset: 30580\n  length: 2\n- detection: |-\n    [like\n    that I mean he was you know he was drunk ]he[ was agitated I mean he was just being he just]\n  prefix: \"like\\nthat I mean he was you know he was drunk \"\n  exact: he\n  suffix: ' was agitated I mean he was just being he just'\n  offset: 30593\n  length: 2\n- detection: |-\n    [ was you know he was drunk he was agitated I mean ]he[ was just being he just being belligerent.\n    But]\n  prefix: ' was you know he was drunk he was agitated I mean '\n  exact: he\n  suffix: |2-\n     was just being he just being belligerent.\n    But\n  offset: 30616\n  length: 2\n- detection: |-\n    [drunk he was agitated I mean he was just being ]he[ just being belligerent.\n    But this time he had so]\n  prefix: 'drunk he was agitated I mean he was just being '\n  exact: he\n  suffix: |2-\n     just being belligerent.\n    But this time he had so\n  offset: 30634\n  length: 2\n- detection: |-\n    [being he just being belligerent.\n    But this time ]he[ had so I guess when he asked what would I have]\n  prefix: \"being he just being belligerent.\\nBut this time \"\n  exact: he\n  suffix: ' had so I guess when he asked what would I have'\n  offset: 30675\n  length: 2\n- detection: '[this time he had so I guess when ]he[ asked what would I have done\n    over again I]'\n  prefix: 'this time he had so I guess when '\n  exact: he\n  suffix: ' asked what would I have done over again I'\n  offset: 30698\n  length: 2\n- detection: |-\n    [done over again I probably would've just pinned ]him[ down\n    again. But this done going to would not]\n  prefix: 'done over again I probably would''ve just pinned '\n  exact: him\n  suffix: |2-\n     down\n    again. But this done going to would not\n  offset: 30773\n  length: 3\n- detection: |-\n    [that big device would not have been\n    involved. ]Brian[. Was the one who was arrested. He pled no]\n  prefix: \"that big device would not have been\\ninvolved. \"\n  exact: Brian\n  suffix: . Was the one who was arrested. He pled no\n  offset: 30916\n  length: 5\n- detection: |-\n    [Brian. Was the one who was arrested. ]He[ pled no contest to\n    assault with a stun gun.]\n  prefix: 'Brian. Was the one who was arrested. '\n  exact: He\n  suffix: |2-\n     pled no contest to\n    assault with a stun gun.\n  offset: 30953\n  length: 2\n- detection: |-\n    [He pled no contest to\n    assault with a stun gun. ]Brian['s a smart guy and. Super thoughtful.\n    But I think]\n  prefix: \"He pled no contest to\\nassault with a stun gun. \"\n  exact: Brian\n  suffix: |-\n    's a smart guy and. Super thoughtful.\n    But I think\n  offset: 31000\n  length: 5\n- detection: |-\n    [a smart guy and. Super thoughtful.\n    But I think ]he[ got caught up in his herd mentality. And people]\n  prefix: \"a smart guy and. Super thoughtful.\\nBut I think \"\n  exact: he\n  suffix: ' got caught up in his herd mentality. And people'\n  offset: 31055\n  length: 2\n- detection: |-\n    [thoughtful.\n    But I think he got caught up in ]his[ herd mentality. And people here forgot that]\n  prefix: \"thoughtful.\\nBut I think he got caught up in \"\n  exact: his\n  suffix: ' herd mentality. And people here forgot that'\n  offset: 31075\n  length: 3\n- detection: |-\n    [December fifteenth to May fifteenth. ]Brian[ and can't. Both support this decision.\n    Anybody]\n  prefix: 'December fifteenth to May fifteenth. '\n  exact: Brian\n  suffix: |2-\n     and can't. Both support this decision.\n    Anybody\n  offset: 32125\n  length: 5\n- detection: |-\n    [totally dig us. Despite our\n    natures. You\n    know ]him[ spring. In San Diego.\n    Found out on the story a]\n  prefix: \"totally dig us. Despite our\\nnatures. You\\nknow \"\n  exact: him\n  suffix: |2-\n     spring. In San Diego.\n    Found out on the story a\n  offset: 33600\n  length: 3\n- detection: |-\n    [hundred twenty one. The Custer Wolf. Is Dead.\n    ]He[ was the master criminal of the animal world. For]\n  prefix: |\n    hundred twenty one. The Custer Wolf. Is Dead.\n  exact: He\n  suffix: ' was the master criminal of the animal world. For'\n  offset: 35365\n  length: 2\n- detection: |-\n    [Animal outlaw the range\n    country to ever know. ]His[ cruelty was surpassed only by his cunning. Here]\n  prefix: \"Animal outlaw the range\\ncountry to ever know. \"\n  exact: His\n  suffix: ' cruelty was surpassed only by his cunning. Here'\n  offset: 35562\n  length: 3\n- detection: |-\n    [to ever know. His cruelty was surpassed only by ]his[ cunning. Here tonight.\n    Tomorrow night he]\n  prefix: 'to ever know. His cruelty was surpassed only by '\n  exact: his\n  suffix: |2-\n     cunning. Here tonight.\n    Tomorrow night he\n  offset: 35596\n  length: 3\n- detection: |-\n    [by his cunning. Here tonight.\n    Tomorrow night ]he[ devastated rains half a hundred miles away. Yes]\n  prefix: \"by his cunning. Here tonight.\\nTomorrow night \"\n  exact: he\n  suffix: ' devastated rains half a hundred miles away. Yes'\n  offset: 35638\n  length: 2\n- detection: |-\n    [ that this Wolf.\n    Was really good at being a wolf. ]He[ lope through every kind of danger and spurned]\n  prefix: \" that this Wolf.\\nWas really good at being a wolf. \"\n  exact: He\n  suffix: ' lope through every kind of danger and spurned'\n  offset: 36561\n  length: 2\n- detection: |-\n    [ He lope through every kind of danger and spurned ]him[ Oh.\n    He sniffed at the sight of this poison and]\n  prefix: ' He lope through every kind of danger and spurned '\n  exact: him\n  suffix: |2-\n     Oh.\n    He sniffed at the sight of this poison and\n  offset: 36610\n  length: 3\n- detection: |-\n    [ through every kind of danger and spurned him Oh.\n    ]He[ sniffed at the sight of this poison and passed]\n  prefix: |2\n     through every kind of danger and spurned him Oh.\n  exact: He\n  suffix: ' sniffed at the sight of this poison and passed'\n  offset: 36618\n  length: 2\n- detection: |-\n    [the sight of this poison and passed it by. When ]he[ killed for food\n    he took only the choices than]\n  prefix: 'the sight of this poison and passed it by. When '\n  exact: he\n  suffix: |2-\n     killed for food\n    he took only the choices than\n  offset: 36680\n  length: 2\n- detection: |-\n    [ poison and passed it by. When he killed for food\n    ]he[ took only the choices than most but sometimes he]\n  prefix: |2\n     poison and passed it by. When he killed for food\n  exact: he\n  suffix: ' took only the choices than most but sometimes he'\n  offset: 36699\n  length: 2\n- detection: |-\n    [took only the choices than most but sometimes ]he[ killed in atrocious ways for\n    the mere sake of]\n  prefix: 'took only the choices than most but sometimes '\n  exact: he\n  suffix: |2-\n     killed in atrocious ways for\n    the mere sake of\n  offset: 36748\n  length: 2\n- detection: |-\n    [ways for\n    the mere sake of killing off what ]he[ wanted cattle. Breaking their legs but not]\n  prefix: \"ways for\\nthe mere sake of killing off what \"\n  exact: he\n  suffix: ' wanted cattle. Breaking their legs but not'\n  offset: 36814\n  length: 2\n- detection: |-\n    [region who did not feel a shiver and between ]his[ shoulder blades when alone or in the\n    dark. He]\n  prefix: 'region who did not feel a shiver and between '\n  exact: his\n  suffix: |2-\n     shoulder blades when alone or in the\n    dark. He\n  offset: 36995\n  length: 3\n- detection: |-\n    [his shoulder blades when alone or in the\n    dark. ]He[ thought of this gray devil of the desert.\n    Four]\n  prefix: \"his shoulder blades when alone or in the\\ndark. \"\n  exact: He\n  suffix: |2-\n     thought of this gray devil of the desert.\n    Four\n  offset: 37042\n  length: 2\n- detection: |-\n    [of the desert.\n    Four years ago is made for snow. ]He[ never took another. And many\n    people suppose that]\n  prefix: \"of the desert.\\nFour years ago is made for snow. \"\n  exact: He\n  suffix: |2-\n     never took another. And many\n    people suppose that\n  offset: 37120\n  length: 2\n- detection: |-\n    [ never took another. And many\n    people suppose that ]he[ devoted himself to revenge for her then later on]\n  prefix: \" never took another. And many\\npeople suppose that \"\n  exact: he\n  suffix: ' devoted himself to revenge for her then later on'\n  offset: 37172\n  length: 2\n- detection: |-\n    [ devoted himself to revenge for her then later on ]he[\n    attached. To himself. To coyotes. Not as equals]\n  prefix: ' devoted himself to revenge for her then later on '\n  exact: he\n  suffix: |2-\n\n    attached. To himself. To coyotes. Not as equals\n  offset: 37224\n  length: 2\n- detection: |-\n    [To himself. To coyotes. Not as equals but ]his[ servants.\n    Never permitted him to come here. And]\n  prefix: 'To himself. To coyotes. Not as equals but '\n  exact: his\n  suffix: |2-\n     servants.\n    Never permitted him to come here. And\n  offset: 37279\n  length: 3\n- detection: |-\n    [Not as equals but his servants.\n    Never permitted ]him[ to come here. And they could feed from his kills]\n  prefix: \"Not as equals but his servants.\\nNever permitted \"\n  exact: him\n  suffix: ' to come here. And they could feed from his kills'\n  offset: 37309\n  length: 3\n- detection: |-\n    [him to come here. And they could feed from ]his[ kills only after he himself had\n    finished. They]\n  prefix: 'him to come here. And they could feed from '\n  exact: his\n  suffix: |2-\n     kills only after he himself had\n    finished. They\n  offset: 37352\n  length: 3\n- detection: |-\n    [And they could feed from his kills only after ]he[ himself had\n    finished. They travelled far out on]\n  prefix: 'And they could feed from his kills only after '\n  exact: he\n  suffix: |2-\n     himself had\n    finished. They travelled far out on\n  offset: 37373\n  length: 2\n- detection: |-\n    [himself had\n    finished. They travelled far out on ]his[ funks given warning of ambush\n    or approaching]\n  prefix: \"himself had\\nfinished. They travelled far out on \"\n  exact: his\n  suffix: |2-\n     funks given warning of ambush\n    or approaching\n  offset: 37424\n  length: 3\n- detection: |-\n    [ proceed in the language of the animal inspector. ]He[ reported the facts to the Biological\n    Survey.]\n  prefix: ' proceed in the language of the animal inspector. '\n  exact: He\n  suffix: |2-\n     reported the facts to the Biological\n    Survey.\n  offset: 38738\n  length: 2\n- detection: |-\n    [the Biological\n    Survey. Unlike most outdoor men ]he[ did not want to talk in her Oaks. There\n    is a]\n  prefix: \"the Biological\\nSurvey. Unlike most outdoor men \"\n  exact: he\n  suffix: |2-\n     did not want to talk in her Oaks. There\n    is a\n  offset: 38810\n  length: 2\n- detection: |-\n    [went into the country where the wolf arranged.\n    ]He[ tried to find fresh tracks. But without success.]\n  prefix: |\n    went into the country where the wolf arranged.\n  exact: He\n  suffix: ' tried to find fresh tracks. But without success.'\n  offset: 38939\n  length: 2\n- detection: |-\n    [ tried to find fresh tracks. But without success. ]He[ asked some of the men who\n    had lost stock. Just]\n  prefix: ' tried to find fresh tracks. But without success. '\n  exact: He\n  suffix: |2-\n     asked some of the men who\n    had lost stock. Just\n  offset: 38991\n  length: 2\n- detection: |-\n    [ men who\n    had lost stock. Just where the wolf made ]his[ headquarters in their section.\n    Contrary to their]\n  prefix: \" men who\\nhad lost stock. Just where the wolf made \"\n  exact: his\n  suffix: |2-\n     headquarters in their section.\n    Contrary to their\n  offset: 39061\n  length: 3\n- detection: |-\n    [ Pilger mountains. Williams ended up the soles of ]his[ shoes and start a\n    string out his traps. Wolf got]\n  prefix: ' Pilger mountains. Williams ended up the soles of '\n  exact: his\n  suffix: |2-\n     shoes and start a\n    string out his traps. Wolf got\n  offset: 39274\n  length: 3\n- detection: |-\n    [ up the soles of his shoes and start a\n    string out ]his[ traps. Wolf got on his trail that night showed]\n  prefix: \" up the soles of his shoes and start a\\nstring out \"\n  exact: his\n  suffix: ' traps. Wolf got on his trail that night showed'\n  offset: 39307\n  length: 3\n- detection: |-\n    [and start a\n    string out his traps. Wolf got on ]his[ trail that night showed signs of great]\n  prefix: \"and start a\\nstring out his traps. Wolf got on \"\n  exact: his\n  suffix: ' trail that night showed signs of great'\n  offset: 39330\n  length: 3\n- detection: |-\n    [night showed signs of great excitement.\n    What ]he[ thought to be the presence of a possible mate in]\n  prefix: \"night showed signs of great excitement.\\nWhat \"\n  exact: he\n  suffix: ' thought to be the presence of a possible mate in'\n  offset: 39390\n  length: 2\n- detection: |-\n    [ thought to be the presence of a possible mate in ]his[ neighborhood. On April first.\n    Williams at his]\n  prefix: ' thought to be the presence of a possible mate in '\n  exact: his\n  suffix: |2-\n     neighborhood. On April first.\n    Williams at his\n  offset: 39442\n  length: 3\n- detection: |-\n    [ in his neighborhood. On April first.\n    Williams at ]his[ first glimpse of the wolf. But was unable to get]\n  prefix: \" in his neighborhood. On April first.\\nWilliams at \"\n  exact: his\n  suffix: ' first glimpse of the wolf. But was unable to get'\n  offset: 39488\n  length: 3\n- detection: |-\n    [on the flanks of their mother.\n    They would warn ]him[ of danger by taking flight for a while Williams]\n  prefix: \"on the flanks of their mother.\\nThey would warn \"\n  exact: him\n  suffix: ' of danger by taking flight for a while Williams'\n  offset: 39683\n  length: 3\n- detection: |-\n    [ Williams did\n    not shoot the guy I was hoping that ]he[ would get a chance at the Wolf without any given]\n  prefix: \" Williams did\\nnot shoot the guy I was hoping that \"\n  exact: he\n  suffix: ' would get a chance at the Wolf without any given'\n  offset: 39775\n  length: 2\n- detection: |-\n    [from which the coyotes were killed. Liam shot ]him[\n    hoping that he then had a clear field. In this]\n  prefix: 'from which the coyotes were killed. Liam shot '\n  exact: him\n  suffix: |2-\n\n    hoping that he then had a clear field. In this\n  offset: 40001\n  length: 3\n- detection: |-\n    [coyotes were killed. Liam shot him\n    hoping that ]he[ then had a clear field. In this he was greatly]\n  prefix: \"coyotes were killed. Liam shot him\\nhoping that \"\n  exact: he\n  suffix: ' then had a clear field. In this he was greatly'\n  offset: 40017\n  length: 2\n- detection: |-\n    [that he then had a clear field. In this ]he[ was greatly mistaken.\n    The wolf played hide and]\n  prefix: 'that he then had a clear field. In this '\n  exact: he\n  suffix: |2-\n     was greatly mistaken.\n    The wolf played hide and\n  offset: 40052\n  length: 2\n- detection: |-\n    [mistaken.\n    The wolf played hide and seek with ]him[. After making a kill you would go on some]\n  prefix: \"mistaken.\\nThe wolf played hide and seek with \"\n  exact: him\n  suffix: . After making a kill you would go on some\n  offset: 40112\n  length: 3\n- detection: |-\n    [them to go\n    away but they don't understand what ]he[ means. And so basically they make so much noise]\n  prefix: \"them to go\\naway but they don't understand what \"\n  exact: he\n  suffix: ' means. And so basically they make so much noise'\n  offset: 40748\n  length: 2\n- detection: |-\n    [ who's the wolf again. A month later.\n    The work at ]his[ foot caught in a trap. But not completely. And]\n  prefix: \" who's the wolf again. A month later.\\nThe work at \"\n  exact: his\n  suffix: ' foot caught in a trap. But not completely. And'\n  offset: 40887\n  length: 3\n- detection: |-\n    [Finally at the wharf on Oct eleventh. Here's ]his[\n    own account of it quote. He stepped into a trap]\n  prefix: 'Finally at the wharf on Oct eleventh. Here''s '\n  exact: his\n  suffix: |2-\n\n    own account of it quote. He stepped into a trap\n  offset: 41033\n  length: 3\n- detection: |-\n    [eleventh. Here's his\n    own account of it quote. ]He[ stepped into a trap in the morning\n    and I got a]\n  prefix: \"eleventh. Here's his\\nown account of it quote. \"\n  exact: He\n  suffix: |2-\n     stepped into a trap in the morning\n    and I got a\n  offset: 41062\n  length: 2\n- detection: |-\n    [a trap in the morning\n    and I got a good grip on ]him[. He broke the swivel of the trap and ran on with]\n  prefix: \"a trap in the morning\\nand I got a good grip on \"\n  exact: him\n  suffix: . He broke the swivel of the trap and ran on with\n  offset: 41125\n  length: 3\n- detection: |-\n    [in the morning\n    and I got a good grip on him. ]He[ broke the swivel of the trap and ran on with it]\n  prefix: \"in the morning\\nand I got a good grip on him. \"\n  exact: He\n  suffix: ' broke the swivel of the trap and ran on with it'\n  offset: 41130\n  length: 2\n- detection: |-\n    [the swivel of the trap and ran on with it on ]his[ front for\n    a draw them three miles and got a shot]\n  prefix: 'the swivel of the trap and ran on with it on '\n  exact: his\n  suffix: |2-\n     front for\n    a draw them three miles and got a shot\n  offset: 41184\n  length: 3\n- detection: |-\n    [for\n    a draw them three miles and got a shot at ]him[ and got him. He has been\n    so lucky that I]\n  prefix: \"for\\na draw them three miles and got a shot at \"\n  exact: him\n  suffix: |2-\n     and got him. He has been\n    so lucky that I\n  offset: 41240\n  length: 3\n- detection: |-\n    [them three miles and got a shot at him and got ]him[. He has been\n    so lucky that I expected the gun]\n  prefix: 'them three miles and got a shot at him and got '\n  exact: him\n  suffix: |-\n    . He has been\n    so lucky that I expected the gun\n  offset: 41252\n  length: 3\n- detection: |-\n    [three miles and got a shot at him and got him. ]He[ has been\n    so lucky that I expected the gun would]\n  prefix: 'three miles and got a shot at him and got him. '\n  exact: He\n  suffix: |2-\n     has been\n    so lucky that I expected the gun would\n  offset: 41257\n  length: 2\n- detection: |-\n    [Temp\n    is notable for that was almost white. ]His[ teeth. Press\n    Release Notes with a been good for]\n  prefix: \"Temp\\nis notable for that was almost white. \"\n  exact: His\n  suffix: |2-\n     teeth. Press\n    Release Notes with a been good for\n  offset: 41478\n  length: 3\n- detection: |-\n    [fifteen years longer.\n    Thanks to our brave men. ]He[ told us about this press release. It's kind of a]\n  prefix: \"fifteen years longer.\\nThanks to our brave men. \"\n  exact: He\n  suffix: ' told us about this press release. It''s kind of a'\n  offset: 41577\n  length: 2\nrentities:\n- Living people\n- People from Anderson, Indiana\n- 1973 births\n"
      },
      {
        "id": 672564,
        "name": "Nancy Updike",
        "identifier": "http://d.opencalais.com/pershash-1/881e979e-5597-3599-815b-2df0ab522c00",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "---\nrentities:\n- Living people\n- This American Life people\n- Year of birth missing (living people)\n"
      }
    ],
    "extra": {
      "itunes_episode": "364756604"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/55359",
      "ui": "https://www.audiosear.ch/a/d83f/582-when-the-beasts-come-marching-in"
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
  },
  {
    "id": 49096,
    "title": "#581: Anatomy of Doubt",
    "description": "This week, a story about doubt: how it germinated, spread, and eventually took hold of an entire community, with terrible consequences. A collaboration with <a href=\"https://www.themarshallproject.org/2015/12/16/an-unbelievable-story-of-rape?ref=hp-2-112#.R6Y5VxBge\">The Marshall Project</a> and <a href=\"https://www.propublica.org/\">ProPublica</a>.",
    "date_created": "2016-02-29",
    "identifier": "6916 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/581/anatomy-of-doubt",
    "physical_location": "rss",
    "duration": 3644,
    "tags": [],
    "updated_at": "2016-02-29 12:09:03 UTC",
    "itunes_episode": 363853609,
    "date_added": "2016-02-29 11:14:52 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 48230,
        "duration": 3644,
        "url": [
          "https://www.audiosear.ch/media/audio_file/bc66/581.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 631936,
        "name": "Murray",
        "identifier": "http://d.opencalais.com/genericHasher-1/fc868bf6-a9f2-3820-ae9e-b4a3a4afef9a",
        "score": 0.792508765337218,
        "type": "Natural Feature",
        "station": "location",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[false reporting\\nfalse reporting charge meant. ]The Murray['s rape case would be officially closed.\\nThe]\", \"prefix\"=>\"false reporting\\nfalse reporting charge meant. \", \"exact\"=>\"The Murray\", \"suffix\"=>\"'s rape case would be officially closed.\\nThe\", \"offset\"=>26842, \"length\"=>10}]}"
      },
      {
        "id": 631935,
        "name": "Colorado",
        "identifier": "http://d.opencalais.com/genericHasher-1/096a73ce-884f-33d7-9375-ac1c8ec74b16",
        "score": 0.442129458915007,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"39.0473491002\", \"longitude\"=>\"-105.465397491\", \"country\"=>\"United States\"}"
      },
      {
        "id": 631933,
        "name": "Washington",
        "identifier": "http://d.opencalais.com/genericHasher-1/1d1529b7-da5f-3884-8de0-c765b3b7d3a3",
        "score": 0.221064729457504,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>\"38.89\", \"longitude\"=>\"-77.03\", \"country\"=>\"United States\"}"
      },
      {
        "id": 631932,
        "name": "Jordan",
        "identifier": "http://d.opencalais.com/genericHasher-1/e3790e59-5b7a-3ef4-8402-d9b411026191",
        "score": 0.442129458915007,
        "type": "Country",
        "station": "location",
        "extra": "{\"latitude\"=>\"31.9276533333\", \"longitude\"=>\"35.8793493333\"}"
      },
      {
        "id": 631930,
        "name": "Seattle",
        "identifier": "http://d.opencalais.com/genericHasher-1/ad004887-c581-3051-9f70-22f68e4b89e4",
        "score": 0.442129458915007,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>\"47.6064\", \"longitude\"=>\"-122.3308\", \"country\"=>\"United States\", \"state\"=>\"Washington\"}"
      },
      {
        "id": 631929,
        "name": "America",
        "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
        "score": 0.764758314850788,
        "type": "Continent",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 631928,
        "name": "Shannon",
        "identifier": "http://d.opencalais.com/genericHasher-1/a0687b4a-70aa-32cc-b3b7-312e77386774",
        "score": 0.921823342301926,
        "type": "Natural Feature",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 631924,
        "name": "mining",
        "identifier": "http://d.opencalais.com/genericHasher-1/7118950c-c257-3ade-8c76-b63d5f58af50",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 631923,
        "name": "Rick Karr",
        "identifier": "http://d.opencalais.com/pershash-1/d884c29b-0117-362b-9ff7-ae443218db4c",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 631918,
        "name": "Mark O'Leary",
        "identifier": "http://d.opencalais.com/pershash-1/8eddbe73-b64a-38e6-a026-529916559710",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[height and weight and he did he had a distinct. ]Mark[ on his leg. A birthmark.\\nShe told Detective got]\", \"prefix\"=>\"height and weight and he did he had a distinct. \", \"exact\"=>\"Mark\", \"suffix\"=>\" on his leg. A birthmark.\\nShe told Detective got\", \"offset\"=>31731, \"length\"=>4}, {\"detection\"=>\"[ and weight and he did he had a distinct. Mark on ]his[ leg. A birthmark.\\nShe told Detective got breast]\", \"prefix\"=>\" and weight and he did he had a distinct. Mark on \", \"exact\"=>\"his\", \"suffix\"=>\" leg. A birthmark.\\nShe told Detective got breast\", \"offset\"=>31739, \"length\"=>3}, {\"detection\"=>\"[size and shape of an egg. That a camera with\\n]him[. And she remembered the color and brand of the]\", \"prefix\"=>\"size and shape of an egg. That a camera with\\n\", \"exact\"=>\"him\", \"suffix\"=>\". And she remembered the color and brand of the\", \"offset\"=>31836, \"length\"=>3}, {\"detection\"=>\"[in the horrible\\nmy words horrible things that ]he[ did to her for a number of hours. And in]\", \"prefix\"=>\"in the horrible\\nmy words horrible things that \", \"exact\"=>\"he\", \"suffix\"=>\" did to her for a number of hours. And in\", \"offset\"=>32421, \"length\"=>2}, {\"detection\"=>\"[we were outside. And she was talking about that ]he[ was a gentleman\\ncalm mild mannered. And I just]\", \"prefix\"=>\"we were outside. And she was talking about that \", \"exact\"=>\"he\", \"suffix\"=>\" was a gentleman\\ncalm mild mannered. And I just\", \"offset\"=>32737, \"length\"=>2}, {\"detection\"=>\"[another town\\nremembered a case just like it in ]his[ department in Westminster.\\nContacted Westminster]\", \"prefix\"=>\"another town\\nremembered a case just like it in \", \"exact\"=>\"his\", \"suffix\"=>\" department in Westminster.\\nContacted Westminster\", \"offset\"=>33225, \"length\"=>3}, {\"detection\"=>\"[But they needed now was a D.N.A. sample from ]Mark\\nO'Leary[ to see if it tied him to the crimes. So F.B.I.]\", \"prefix\"=>\"But they needed now was a D.N.A. sample from \", \"exact\"=>\"Mark\\nO'Leary\", \"suffix\"=>\" to see if it tied him to the crimes. So F.B.I.\", \"offset\"=>35302, \"length\"=>12}, {\"detection\"=>\"[cameras outside his house while he was\\ngone. ]Mark[ leave his house agents trail him where they]\", \"prefix\"=>\"cameras outside his house while he was\\ngone. \", \"exact\"=>\"Mark\", \"suffix\"=>\" leave his house agents trail him where they\", \"offset\"=>35560, \"length\"=>4}, {\"detection\"=>\"[outside his house while he was\\ngone. Mark leave ]his[ house agents trail him where they didn't know\\nis]\", \"prefix\"=>\"outside his house while he was\\ngone. Mark leave \", \"exact\"=>\"his\", \"suffix\"=>\" house agents trail him where they didn't know\\nis\", \"offset\"=>35571, \"length\"=>3}, {\"detection\"=>\"[he was\\ngone. Mark leave his house agents trail ]him[ where they didn't know\\nis that Mark O'Leary had]\", \"prefix\"=>\"he was\\ngone. Mark leave his house agents trail \", \"exact\"=>\"him\", \"suffix\"=>\" where they didn't know\\nis that Mark O'Leary had\", \"offset\"=>35594, \"length\"=>3}, {\"detection\"=>\"[that Mark O'Leary had a brother who lived with ]him[ in the same house.\\nSo the guy they were]\", \"prefix\"=>\"that Mark O'Leary had a brother who lived with \", \"exact\"=>\"him\", \"suffix\"=>\" in the same house.\\nSo the guy they were\", \"offset\"=>35671, \"length\"=>3}, {\"detection\"=>\"[Expecting it to be empty they're shocked when\\n]Mark[ answers. Agents think quickly. Say they're]\", \"prefix\"=>\"Expecting it to be empty they're shocked when\\n\", \"exact\"=>\"Mark\", \"suffix\"=>\" answers. Agents think quickly. Say they're\", \"offset\"=>35900, \"length\"=>4}, {\"detection\"=>\"[have a flyer with a phony suspect photo to show ]him[ the conversation and.\\nMark goes inside.]\", \"prefix\"=>\"have a flyer with a phony suspect photo to show \", \"exact\"=>\"him\", \"suffix\"=>\" the conversation and.\\nMark goes inside.\", \"offset\"=>36055, \"length\"=>3}, {\"detection\"=>\"[suspect photo to show him the conversation and.\\n]Mark[ goes inside. Meanwhile. Marx Brothers eating in]\", \"prefix\"=>\"suspect photo to show him the conversation and.\\n\", \"exact\"=>\"Mark\", \"suffix\"=>\" goes inside. Meanwhile. Marx Brothers eating in\", \"offset\"=>36081, \"length\"=>4}, {\"detection\"=>\"[Marx Brothers eating in a diner. And when ]he['s done\\nagents who happened to get D.N.A. off his]\", \"prefix\"=>\"Marx Brothers eating in a diner. And when \", \"exact\"=>\"he\", \"suffix\"=>\"'s done\\nagents who happened to get D.N.A. off his\", \"offset\"=>36152, \"length\"=>2}, {\"detection\"=>\"[he's done\\nagents who happened to get D.N.A. off ]his[ glass. Which brings them closer to their]\", \"prefix\"=>\"he's done\\nagents who happened to get D.N.A. off \", \"exact\"=>\"his\", \"suffix\"=>\" glass. Which brings them closer to their\", \"offset\"=>36200, \"length\"=>3}, {\"detection\"=>\"[days later. Tech to God rest on our team. Go to ]Mark['s house. And Mark comes to the door.\\nAnd you]\", \"prefix\"=>\"days later. Tech to God rest on our team. Go to \", \"exact\"=>\"Mark\", \"suffix\"=>\"'s house. And Mark comes to the door.\\nAnd you\", \"offset\"=>36658, \"length\"=>4}, {\"detection\"=>\"[you know we have weapons out and I tell ]him[ you know that we have a search warrant for the]\", \"prefix\"=>\"you know we have weapons out and I tell \", \"exact\"=>\"him\", \"suffix\"=>\" you know that we have a search warrant for the\", \"offset\"=>36744, \"length\"=>3}, {\"detection\"=>\"[ we have a search warrant for the house and I pat ]him[ down to make sure\\ndoesn't have any weapons. He's]\", \"prefix\"=>\" we have a search warrant for the house and I pat \", \"exact\"=>\"him\", \"suffix\"=>\" down to make sure\\ndoesn't have any weapons. He's\", \"offset\"=>36811, \"length\"=>3}, {\"detection\"=>\"[him down to make sure\\ndoesn't have any weapons. ]He['s got real baggy clothes on when he comes out]\", \"prefix\"=>\"him down to make sure\\ndoesn't have any weapons. \", \"exact\"=>\"He\", \"suffix\"=>\"'s got real baggy clothes on when he comes out\", \"offset\"=>36859, \"length\"=>2}, {\"detection\"=>\"[ any weapons. He's got real baggy clothes on when ]he[ comes out and so when I'm pat him\\ndown and]\", \"prefix\"=>\" any weapons. He's got real baggy clothes on when \", \"exact\"=>\"he\", \"suffix\"=>\" comes out and so when I'm pat him\\ndown and\", \"offset\"=>36895, \"length\"=>2}, {\"detection\"=>\"[ clothes on when he comes out and so when I'm pat ]him[\\ndown and lifted up both pant legs. I saw the]\", \"prefix\"=>\" clothes on when he comes out and so when I'm pat \", \"exact\"=>\"him\", \"suffix\"=>\"\\ndown and lifted up both pant legs. I saw the\", \"offset\"=>36928, \"length\"=>3}, {\"detection\"=>\"[I saw the mark which you think when you saw\\n]him[ or he's he's the guy that he needed to be in]\", \"prefix\"=>\"I saw the mark which you think when you saw\\n\", \"exact\"=>\"him\", \"suffix\"=>\" or he's he's the guy that he needed to be in\", \"offset\"=>37011, \"length\"=>3}, {\"detection\"=>\"[ saw the mark which you think when you saw\\nhim or ]he['s he's the guy that he needed to be in]\", \"prefix\"=>\" saw the mark which you think when you saw\\nhim or \", \"exact\"=>\"he\", \"suffix\"=>\"'s he's the guy that he needed to be in\", \"offset\"=>37018, \"length\"=>2}, {\"detection\"=>\"[mark which you think when you saw\\nhim or he's ]he['s the guy that he needed to be in handcuffs.\\nHe]\", \"prefix\"=>\"mark which you think when you saw\\nhim or he's \", \"exact\"=>\"he\", \"suffix\"=>\"'s the guy that he needed to be in handcuffs.\\nHe\", \"offset\"=>37023, \"length\"=>2}, {\"detection\"=>\"[ think when you saw\\nhim or he's he's the guy that ]he[ needed to be in handcuffs.\\nHe was very surprised]\", \"prefix\"=>\" think when you saw\\nhim or he's he's the guy that \", \"exact\"=>\"he\", \"suffix\"=>\" needed to be in handcuffs.\\nHe was very surprised\", \"offset\"=>37041, \"length\"=>2}, {\"detection\"=>\"[he's the guy that he needed to be in handcuffs.\\n]He[ was very surprised he went on with blue. She]\", \"prefix\"=>\"he's the guy that he needed to be in handcuffs.\\n\", \"exact\"=>\"He\", \"suffix\"=>\" was very surprised he went on with blue. She\", \"offset\"=>37071, \"length\"=>2}, {\"detection\"=>\"[ needed to be in handcuffs.\\nHe was very surprised ]he[ went on with blue. She rests I'm\\ngovernor says.]\", \"prefix\"=>\" needed to be in handcuffs.\\nHe was very surprised \", \"exact\"=>\"he\", \"suffix\"=>\" went on with blue. She rests I'm\\ngovernor says.\", \"offset\"=>37093, \"length\"=>2}, {\"detection\"=>\"[license on her chest it was gagged and bound\\nto ]his[ Marie. I'm thinking huh. Thank God I don't have]\", \"prefix\"=>\"license on her chest it was gagged and bound\\nto \", \"exact\"=>\"his\", \"suffix\"=>\" Marie. I'm thinking huh. Thank God I don't have\", \"offset\"=>37716, \"length\"=>3}, {\"detection\"=>\"[she is I know this is what I mean I'm thinking ]he[ probably did\\nthat as a form of. Intimidation]\", \"prefix\"=>\"she is I know this is what I mean I'm thinking \", \"exact\"=>\"he\", \"suffix\"=>\" probably did\\nthat as a form of. Intimidation\", \"offset\"=>37869, \"length\"=>2}]}"
      },
      {
        "id": 631915,
        "name": "search warrant",
        "identifier": "http://d.opencalais.com/genericHasher-1/a1a26d31-a70c-3369-ae01-49f67f6d6769",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 631908,
        "name": "social media",
        "identifier": "http://d.opencalais.com/genericHasher-1/3648a12a-fbb1-30aa-9b5f-ddb643a85040",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 631905,
        "name": "food",
        "identifier": "http://d.opencalais.com/genericHasher-1/c16d75d3-6824-32a7-82c2-b8c266572ee5",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 631903,
        "name": "Jonathan Mann",
        "identifier": "http://d.opencalais.com/pershash-1/f89ff3cb-10c5-369b-8273-612d6186b156",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[who hunted job he won't\\nbikini Jonathan Mann ]he[ for Alyssa ship and Nancy Updike scene produces]\", \"prefix\"=>\"who hunted job he won't\\nbikini Jonathan Mann \", \"exact\"=>\"he\", \"suffix\"=>\" for Alyssa ship and Nancy Updike scene produces\", \"offset\"=>46159, \"length\"=>2}]}"
      },
      {
        "id": 631897,
        "name": "Nancy Updike",
        "identifier": "http://d.opencalais.com/pershash-1/881e979e-5597-3599-815b-2df0ab522c00",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[our editors\\nshoulder level Julie striders I did ]her[ a consultant for technical directors Matt]\", \"prefix\"=>\"our editors\\nshoulder level Julie striders I did \", \"exact\"=>\"her\", \"suffix\"=>\" a consultant for technical directors Matt\", \"offset\"=>46269, \"length\"=>3}]}"
      }
    ],
    "extra": {
      "itunes_episode": "363853609"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/49096",
      "ui": "https://www.audiosear.ch/a/bfc8/581-anatomy-of-doubt"
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
  },
  {
    "id": 45264,
    "title": "#580: That's One Way to Do It",
    "description": "Forget the easy way. This week, stories about people who come up with very innovative…and unusual...solutions to their problems. Including the story of a young voter who defies political categorization.",
    "date_created": "2016-02-22",
    "identifier": "6913 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/580/thats-one-way-to-do-it",
    "physical_location": "rss",
    "duration": 3654,
    "tags": [],
    "updated_at": "2016-02-22 12:09:39 UTC",
    "itunes_episode": 363371374,
    "date_added": "2016-02-22 11:15:52 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 44469,
        "duration": 3654,
        "url": [
          "https://www.audiosear.ch/media/audio_file/adb5/580.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 608615,
        "name": "diver down",
        "identifier": null,
        "score": 0.028,
        "type": null,
        "station": "tag",
        "extra": "{}"
      },
      {
        "id": 608614,
        "name": "wwe hall of fame",
        "identifier": null,
        "score": 0.028,
        "type": null,
        "station": "tag",
        "extra": "{}"
      },
      {
        "id": 608613,
        "name": "trump family",
        "identifier": null,
        "score": 0.028,
        "type": null,
        "station": "tag",
        "extra": "{}"
      },
      {
        "id": 608612,
        "name": "right-wing populism",
        "identifier": null,
        "score": 0.036,
        "type": null,
        "station": "tag",
        "extra": "{}"
      },
      {
        "id": 608611,
        "name": "donald trump",
        "identifier": null,
        "score": 0.581413353399081,
        "type": null,
        "station": "tag",
        "extra": "{}"
      },
      {
        "id": 608610,
        "name": "New Hampshire",
        "identifier": "http://d.opencalais.com/genericHasher-1/7939509e-cf20-3dbf-9810-55b80881efd6",
        "score": 0.215338279036697,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"43.6540820346\", \"longitude\"=>\"-71.5642098846\", \"country\"=>\"United States\"}"
      },
      {
        "id": 608609,
        "name": "Chicago",
        "identifier": "http://d.opencalais.com/genericHasher-1/03ff2f32-7d79-3042-a299-2010505bc8fc",
        "score": 0.215338279036697,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>\"41.85\", \"longitude\"=>\"-87.65\", \"country\"=>\"United States\", \"state\"=>\"Illinois\"}"
      },
      {
        "id": 608608,
        "name": "Columbia South Carolina",
        "identifier": "http://d.opencalais.com/genericHasher-1/3f5a07e6-fe23-3c81-ab75-2a0924662c17",
        "score": 0.215338279036697,
        "type": "City",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 608607,
        "name": "Iran",
        "identifier": "http://d.opencalais.com/genericHasher-1/da74dbfc-f3fc-397b-93b0-25115642a515",
        "score": 0.897944473522682,
        "type": "Country",
        "station": "location",
        "extra": "{\"latitude\"=>\"33.6803609863\", \"longitude\"=>\"51.1688766542\"}"
      },
      {
        "id": 608606,
        "name": "California",
        "identifier": "http://d.opencalais.com/genericHasher-1/9679b237-33e8-3478-ba13-d9af3c4b943e",
        "score": 0.430676558073393,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"36.4885198674\", \"longitude\"=>\"-119.701379437\", \"country\"=>\"United States\"}"
      },
      {
        "id": 608605,
        "name": "South Carolina",
        "identifier": "http://d.opencalais.com/genericHasher-1/81682637-b3d2-39a3-bb31-31001f53d4f7",
        "score": 0.556641376279689,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"34.0033149514\", \"longitude\"=>\"-81.0592258065\", \"country\"=>\"United States\"}"
      },
      {
        "id": 608604,
        "name": "Tehran",
        "identifier": "http://d.opencalais.com/genericHasher-1/6154455c-785d-38c5-901a-0b52f95ff7ef",
        "score": 0.215338279036697,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>nil, \"longitude\"=>nil, \"country\"=>\"Iran\", \"state\"=>\"Tehrān Province\"}"
      },
      {
        "id": 608603,
        "name": "America",
        "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
        "score": 0.945834074804076,
        "type": "Continent",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 608602,
        "name": "dialysis",
        "identifier": "http://d.opencalais.com/genericHasher-1/d63eb493-8593-3d53-b728-f6cef826a88b",
        "score": 1,
        "type": "Technology",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608601,
        "name": "Ted Cruz",
        "identifier": "http://d.opencalais.com/pershash-1/36f7893f-51d0-34e7-b6cb-d4d69a63c407",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[Alex and paid them is Sandor\\nsupporters. Over ]Cruz[ charms record on gay marriage at that point.]\", \"prefix\"=>\"Alex and paid them is Sandor\\nsupporters. Over \", \"exact\"=>\"Cruz\", \"suffix\"=>\" charms record on gay marriage at that point.\", \"offset\"=>13316, \"length\"=>4}, {\"detection\"=>\"[at that point. Scant at best.\\nNot one of ]his[ applause lines. Not getting much mention at all]\", \"prefix\"=>\"at that point. Scant at best.\\nNot one of \", \"exact\"=>\"his\", \"suffix\"=>\" applause lines. Not getting much mention at all\", \"offset\"=>13392, \"length\"=>3}, {\"detection\"=>\"[ at all because Alex can believe what he wants\\nto ]Cruz[ probably even Jellicoe probably against gay]\", \"prefix\"=>\" at all because Alex can believe what he wants\\nto \", \"exact\"=>\"Cruz\", \"suffix\"=>\" probably even Jellicoe probably against gay\", \"offset\"=>13486, \"length\"=>4}, {\"detection\"=>\"[real people. That's why I couldn't support ]Cruz[.\\nAlex's parents are big cruise supporters. Acid]\", \"prefix\"=>\"real people. That's why I couldn't support \", \"exact\"=>\"Cruz\", \"suffix\"=>\".\\nAlex's parents are big cruise supporters. Acid\", \"offset\"=>22983, \"length\"=>4}, {\"detection\"=>\"[ I mean that is something.\\nIt's Alex's dad though ]Ted[ children. That's the major cruise supporter in]\", \"prefix\"=>\" I mean that is something.\\nIt's Alex's dad though \", \"exact\"=>\"Ted\", \"suffix\"=>\" children. That's the major cruise supporter in\", \"offset\"=>26167, \"length\"=>3}, {\"detection\"=>\"[supporter in the family.\\nAlex told me he sees ]Cruz[ as the most hard line against gay marriage. And]\", \"prefix\"=>\"supporter in the family.\\nAlex told me he sees \", \"exact\"=>\"Cruz\", \"suffix\"=>\" as the most hard line against gay marriage. And\", \"offset\"=>26251, \"length\"=>4}, {\"detection\"=>\"[gay marriage. And the most dangerous\\nbecause ]his[ experience arguing in front of the Supreme]\", \"prefix\"=>\"gay marriage. And the most dangerous\\nbecause \", \"exact\"=>\"his\", \"suffix\"=>\" experience arguing in front of the Supreme\", \"offset\"=>26331, \"length\"=>3}, {\"detection\"=>\"[The maddest and Alex's dad knows that. What ]Cruz[ says if he's for\\nthe traditional. Ammi. And I]\", \"prefix\"=>\"The maddest and Alex's dad knows that. What \", \"exact\"=>\"Cruz\", \"suffix\"=>\" says if he's for\\nthe traditional. Ammi. And I\", \"offset\"=>26468, \"length\"=>4}, {\"detection\"=>\"[and Alex's dad knows that. What Cruz says if ]he['s for\\nthe traditional. Ammi. And I guess that's]\", \"prefix\"=>\"and Alex's dad knows that. What Cruz says if \", \"exact\"=>\"he\", \"suffix\"=>\"'s for\\nthe traditional. Ammi. And I guess that's\", \"offset\"=>26481, \"length\"=>2}, {\"detection\"=>\"[the people who embrace the other\\nposition that ]he['s out. And the fact that we embrace that. But he]\", \"prefix\"=>\"the people who embrace the other\\nposition that \", \"exact\"=>\"he\", \"suffix\"=>\"'s out. And the fact that we embrace that. But he\", \"offset\"=>26604, \"length\"=>2}, {\"detection\"=>\"[ he's out. And the fact that we embrace that. But ]he[ knows that.\\nI mean we embrace a man and woman.]\", \"prefix\"=>\" he's out. And the fact that we embrace that. But \", \"exact\"=>\"he\", \"suffix\"=>\" knows that.\\nI mean we embrace a man and woman.\", \"offset\"=>26653, \"length\"=>2}, {\"detection\"=>\"[a man and woman. You know and the yeah I'm sure\\n]he[ feels some rejection and then that probably]\", \"prefix\"=>\"a man and woman. You know and the yeah I'm sure\\n\", \"exact\"=>\"he\", \"suffix\"=>\" feels some rejection and then that probably\", \"offset\"=>26734, \"length\"=>2}, {\"detection\"=>\"[you can give me one example. When you found out ]he[ was gay.\\nIt made me so angry. Because I\\nam]\", \"prefix\"=>\"you can give me one example. When you found out \", \"exact\"=>\"he\", \"suffix\"=>\" was gay.\\nIt made me so angry. Because I\\nam\", \"offset\"=>26864, \"length\"=>2}, {\"detection\"=>\"[me. It broke my heart. It broke my heart for ]him[ because\\nI think he has opened up a Pandora's box]\", \"prefix\"=>\"me. It broke my heart. It broke my heart for \", \"exact\"=>\"him\", \"suffix\"=>\" because\\nI think he has opened up a Pandora's box\", \"offset\"=>27120, \"length\"=>3}, {\"detection\"=>\"[ heart. It broke my heart for him because\\nI think ]he[ has opened up a Pandora's box of real trouble]\", \"prefix\"=>\" heart. It broke my heart for him because\\nI think \", \"exact\"=>\"he\", \"suffix\"=>\" has opened up a Pandora's box of real trouble\", \"offset\"=>27140, \"length\"=>2}, {\"detection\"=>\"[That really is a concern.\\nAnother concern for ]Ted[ is suicide rates for gay men. So he confronted]\", \"prefix\"=>\"That really is a concern.\\nAnother concern for \", \"exact\"=>\"Ted\", \"suffix\"=>\" is suicide rates for gay men. So he confronted\", \"offset\"=>27364, \"length\"=>3}, {\"detection\"=>\"[ concern for Ted is suicide rates for gay men. So ]he[ confronted Alex with his\\nstats and he could]\", \"prefix\"=>\" concern for Ted is suicide rates for gay men. So \", \"exact\"=>\"he\", \"suffix\"=>\" confronted Alex with his\\nstats and he could\", \"offset\"=>27401, \"length\"=>2}, {\"detection\"=>\"[rates for gay men. So he confronted Alex with ]his[\\nstats and he could counter everyone he done is]\", \"prefix\"=>\"rates for gay men. So he confronted Alex with \", \"exact\"=>\"his\", \"suffix\"=>\"\\nstats and he could counter everyone he done is\", \"offset\"=>27425, \"length\"=>3}, {\"detection\"=>\"[to talk about.\\nNow he needs parents debate over ]Cruz[ versus Trump. Instead of gay. Not\\ngetting the]\", \"prefix\"=>\"to talk about.\\nNow he needs parents debate over \", \"exact\"=>\"Cruz\", \"suffix\"=>\" versus Trump. Instead of gay. Not\\ngetting the\", \"offset\"=>29534, \"length\"=>4}, {\"detection\"=>\"[Ted Cruz says of the\\nprinciples and standards ]he[ asked. So Alex knows that. And I know he's]\", \"prefix\"=>\"Ted Cruz says of the\\nprinciples and standards \", \"exact\"=>\"he\", \"suffix\"=>\" asked. So Alex knows that. And I know he's\", \"offset\"=>29744, \"length\"=>2}]}"
      },
      {
        "id": 608600,
        "name": "Donald Trump",
        "identifier": "http://d.opencalais.com/pershash-1/3cb6735d-ad40-304e-b561-6fae64c71c32",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[the state. Talking to groups like students for ]Trump[.\\nA group of high schoolers. That's how I happen.]\", \"prefix\"=>\"the state. Talking to groups like students for \", \"exact\"=>\"Trump\", \"suffix\"=>\".\\nA group of high schoolers. That's how I happen.\", \"offset\"=>9791, \"length\"=>5}, {\"detection\"=>\"[on the South Carolina\\ndirector for students for ]Trump[. And I live in Columbia South Carolina. So put]\", \"prefix\"=>\"on the South Carolina\\ndirector for students for \", \"exact\"=>\"Trump\", \"suffix\"=>\". And I live in Columbia South Carolina. So put\", \"offset\"=>10009, \"length\"=>5}, {\"detection\"=>\"[ live in Columbia South Carolina. So put together ]he[ made me nervous.\\nAfter he told me where he was]\", \"prefix\"=>\" live in Columbia South Carolina. So put together \", \"exact\"=>\"he\", \"suffix\"=>\" made me nervous.\\nAfter he told me where he was\", \"offset\"=>10071, \"length\"=>2}, {\"detection\"=>\"[So put together he made me nervous.\\nAfter ]he[ told me where he was from. I asked him where he]\", \"prefix\"=>\"So put together he made me nervous.\\nAfter \", \"exact\"=>\"he\", \"suffix\"=>\" told me where he was from. I asked him where he\", \"offset\"=>10097, \"length\"=>2}, {\"detection\"=>\"[he made me nervous.\\nAfter he told me where ]he[ was from. I asked him where he was from we are]\", \"prefix\"=>\"he made me nervous.\\nAfter he told me where \", \"exact\"=>\"he\", \"suffix\"=>\" was from. I asked him where he was from we are\", \"offset\"=>10114, \"length\"=>2}, {\"detection\"=>\"[he told me where he was from. I asked ]him[ where he was from we are in Columbia South]\", \"prefix\"=>\"he told me where he was from. I asked \", \"exact\"=>\"him\", \"suffix\"=>\" where he was from we are in Columbia South\", \"offset\"=>10135, \"length\"=>3}, {\"detection\"=>\"[he told me where he was from. I asked him where ]he[ was from we are in Columbia South]\", \"prefix\"=>\"he told me where he was from. I asked him where \", \"exact\"=>\"he\", \"suffix\"=>\" was from we are in Columbia South\", \"offset\"=>10145, \"length\"=>2}, {\"detection\"=>\"[this. Outside table with the high schoolers for ]Trump[ and. Alex stood out in a\\nmillion ways from the]\", \"prefix\"=>\"this. Outside table with the high schoolers for \", \"exact\"=>\"Trump\", \"suffix\"=>\" and. Alex stood out in a\\nmillion ways from the\", \"offset\"=>10489, \"length\"=>5}, {\"detection\"=>\"[not long after that a group called Students for ]Trump[.\\nReached out to Alex on Instagram. Yes Alex if]\", \"prefix\"=>\"not long after that a group called Students for \", \"exact\"=>\"Trump\", \"suffix\"=>\".\\nReached out to Alex on Instagram. Yes Alex if\", \"offset\"=>11308, \"length\"=>5}, {\"detection\"=>\"[in pain. And that\\nquake. Alex became an active. ]Trump[ supporter. Now. Alex was already\\na conservative.]\", \"prefix\"=>\"in pain. And that\\nquake. Alex became an active. \", \"exact\"=>\"Trump\", \"suffix\"=>\" supporter. Now. Alex was already\\na conservative.\", \"offset\"=>11439, \"length\"=>5}, {\"detection\"=>\"[asking everybody I was meeting down there went ]Trump[. Alex gave me a reason I\\ndid not expect. I was]\", \"prefix\"=>\"asking everybody I was meeting down there went \", \"exact\"=>\"Trump\", \"suffix\"=>\". Alex gave me a reason I\\ndid not expect. I was\", \"offset\"=>12154, \"length\"=>5}, {\"detection\"=>\"[did I hear right. Your main concern is what.\\n]Trump[ is fine with gay marriage thank goodness and.]\", \"prefix\"=>\"did I hear right. Your main concern is what.\\n\", \"exact\"=>\"Trump\", \"suffix\"=>\" is fine with gay marriage thank goodness and.\", \"offset\"=>12262, \"length\"=>5}, {\"detection\"=>\"[is fine with gay marriage thank goodness and. ]He['s a realist. You knows that as a society moves]\", \"prefix\"=>\"is fine with gay marriage thank goodness and. \", \"exact\"=>\"He\", \"suffix\"=>\"'s a realist. You knows that as a society moves\", \"offset\"=>12314, \"length\"=>2}, {\"detection\"=>\"[ that's\\nwhere you're going the other students for ]Trump[ kid scurry off to a corner to consult after\\nthis]\", \"prefix\"=>\" that's\\nwhere you're going the other students for \", \"exact\"=>\"Trump\", \"suffix\"=>\" kid scurry off to a corner to consult after\\nthis\", \"offset\"=>13142, \"length\"=>5}, {\"detection\"=>\"[hundred people on Instagram. Alex is big into\\n]Trump[ like he's making sacrifices. He says he's lost]\", \"prefix\"=>\"hundred people on Instagram. Alex is big into\\n\", \"exact\"=>\"Trump\", \"suffix\"=>\" like he's making sacrifices. He says he's lost\", \"offset\"=>14031, \"length\"=>5}, {\"detection\"=>\"[ people on Instagram. Alex is big into\\nTrump like ]he['s making sacrifices. He says he's lost friends.]\", \"prefix\"=>\" people on Instagram. Alex is big into\\nTrump like \", \"exact\"=>\"he\", \"suffix\"=>\"'s making sacrifices. He says he's lost friends.\", \"offset\"=>14042, \"length\"=>2}, {\"detection\"=>\"[is big into\\nTrump like he's making sacrifices. ]He[ says he's lost friends. Other black kids at]\", \"prefix\"=>\"is big into\\nTrump like he's making sacrifices. \", \"exact\"=>\"He\", \"suffix\"=>\" says he's lost friends. Other black kids at\", \"offset\"=>14066, \"length\"=>2}, {\"detection\"=>\"[into\\nTrump like he's making sacrifices. He says ]he['s lost friends. Other black kids at school]\", \"prefix\"=>\"into\\nTrump like he's making sacrifices. He says \", \"exact\"=>\"he\", \"suffix\"=>\"'s lost friends. Other black kids at school\", \"offset\"=>14074, \"length\"=>2}, {\"detection\"=>\"[friends. Other black kids at school make\\nfun of ]him[. He's got into big fights with his Muslim]\", \"prefix\"=>\"friends. Other black kids at school make\\nfun of \", \"exact\"=>\"him\", \"suffix\"=>\". He's got into big fights with his Muslim\", \"offset\"=>14132, \"length\"=>3}, {\"detection\"=>\"[Other black kids at school make\\nfun of him. ]He['s got into big fights with his Muslim friends to]\", \"prefix\"=>\"Other black kids at school make\\nfun of him. \", \"exact\"=>\"He\", \"suffix\"=>\"'s got into big fights with his Muslim friends to\", \"offset\"=>14137, \"length\"=>2}, {\"detection\"=>\"[make\\nfun of him. He's got into big fights with ]his[ Muslim friends to like after he posted some]\", \"prefix\"=>\"make\\nfun of him. He's got into big fights with \", \"exact\"=>\"his\", \"suffix\"=>\" Muslim friends to like after he posted some\", \"offset\"=>14167, \"length\"=>3}, {\"detection\"=>\"[ big fights with his Muslim friends to like after ]he[ posted some insane\\nMuslim comments from Trump on]\", \"prefix\"=>\" big fights with his Muslim friends to like after \", \"exact\"=>\"he\", \"suffix\"=>\" posted some insane\\nMuslim comments from Trump on\", \"offset\"=>14200, \"length\"=>2}, {\"detection\"=>\"[ after he posted some insane\\nMuslim comments from ]Trump[ on a snap chat. Last week. One of my\\nIslamic]\", \"prefix\"=>\" after he posted some insane\\nMuslim comments from \", \"exact\"=>\"Trump\", \"suffix\"=>\" on a snap chat. Last week. One of my\\nIslamic\", \"offset\"=>14243, \"length\"=>5}, {\"detection\"=>\"[my\\nIslamic friends asked me why do you support ]Trump[. And I said you know. I'm\\nnot against Islam. And]\", \"prefix\"=>\"my\\nIslamic friends asked me why do you support \", \"exact\"=>\"Trump\", \"suffix\"=>\". And I said you know. I'm\\nnot against Islam. And\", \"offset\"=>14330, \"length\"=>5}, {\"detection\"=>\"[feels like I'm against her and she said. Well.\\n]Trump[ wants to keep all the Muslims. And I said first]\", \"prefix\"=>\"feels like I'm against her and she said. Well.\\n\", \"exact\"=>\"Trump\", \"suffix\"=>\" wants to keep all the Muslims. And I said first\", \"offset\"=>14553, \"length\"=>5}, {\"detection\"=>\"[She was annoyed but they're still friends. Was ]he[ afraid of hurting her feelings.\\nYou know. I]\", \"prefix\"=>\"She was annoyed but they're still friends. Was \", \"exact\"=>\"he\", \"suffix\"=>\" afraid of hurting her feelings.\\nYou know. I\", \"offset\"=>15062, \"length\"=>2}, {\"detection\"=>\"[the shelf. You know\\nAlex jumps feet first into ]Trump[ related awkward situations like Later that day]\", \"prefix\"=>\"the shelf. You know\\nAlex jumps feet first into \", \"exact\"=>\"Trump\", \"suffix\"=>\" related awkward situations like Later that day\", \"offset\"=>15256, \"length\"=>5}, {\"detection\"=>\"[that day we walk over\\nto U.S.C. campus. And ]he[ flags down college kids walking down the street]\", \"prefix\"=>\"that day we walk over\\nto U.S.C. campus. And \", \"exact\"=>\"he\", \"suffix\"=>\" flags down college kids walking down the street\", \"offset\"=>15344, \"length\"=>2}, {\"detection\"=>\"[down the street level who's\\nvery formal like at ]his[ most presentation Ali. He's inviting them to]\", \"prefix\"=>\"down the street level who's\\nvery formal like at \", \"exact\"=>\"his\", \"suffix\"=>\" most presentation Ali. He's inviting them to\", \"offset\"=>15427, \"length\"=>3}, {\"detection\"=>\"[formal like at his most presentation Ali. ]He['s inviting them to this debate watch\\nparty and]\", \"prefix\"=>\"formal like at his most presentation Ali. \", \"exact\"=>\"He\", \"suffix\"=>\"'s inviting them to this debate watch\\nparty and\", \"offset\"=>15454, \"length\"=>2}, {\"detection\"=>\"[Everything that I've seen through the media. ]He['s just.\\nIt just comes full of hate and I just]\", \"prefix\"=>\"Everything that I've seen through the media. \", \"exact\"=>\"He\", \"suffix\"=>\"'s just.\\nIt just comes full of hate and I just\", \"offset\"=>15757, \"length\"=>2}, {\"detection\"=>\"[your age say\\nI don't feel comfortable having ]him[ as the president. Because I think he's being]\", \"prefix\"=>\"your age say\\nI don't feel comfortable having \", \"exact\"=>\"him\", \"suffix\"=>\" as the president. Because I think he's being\", \"offset\"=>16148, \"length\"=>3}, {\"detection\"=>\"[having him as the president. Because I think ]he['s being racist. When\\nlike you're black and she's]\", \"prefix\"=>\"having him as the president. Because I think \", \"exact\"=>\"he\", \"suffix\"=>\"'s being racist. When\\nlike you're black and she's\", \"offset\"=>16186, \"length\"=>2}, {\"detection\"=>\"[And\\none dollar trade trumpets president. And ]he[ reforms this country. I think they will]\", \"prefix\"=>\"And\\none dollar trade trumpets president. And \", \"exact\"=>\"he\", \"suffix\"=>\" reforms this country. I think they will\", \"offset\"=>16614, \"length\"=>2}, {\"detection\"=>\"[I don't support it. Would you still vote for. ]He[ wouldn't do that.\\nThat's a make or break thing]\", \"prefix\"=>\"I don't support it. Would you still vote for. \", \"exact\"=>\"He\", \"suffix\"=>\" wouldn't do that.\\nThat's a make or break thing\", \"offset\"=>16798, \"length\"=>2}, {\"detection\"=>\"[do that.\\nThat's a make or break thing for you. ]He[ wouldn't do that he would.\\nThis is officially]\", \"prefix\"=>\"do that.\\nThat's a make or break thing for you. \", \"exact\"=>\"He\", \"suffix\"=>\" wouldn't do that he would.\\nThis is officially\", \"offset\"=>16857, \"length\"=>2}, {\"detection\"=>\"[ make or break thing for you. He wouldn't do that ]he[ would.\\nThis is officially the strangest reason I]\", \"prefix\"=>\" make or break thing for you. He wouldn't do that \", \"exact\"=>\"he\", \"suffix\"=>\" would.\\nThis is officially the strangest reason I\", \"offset\"=>16877, \"length\"=>2}, {\"detection\"=>\"[Trump so hard that\\nyou're going in so hard for ]Trump[ is because it's a way\\nto express that you're]\", \"prefix\"=>\"Trump so hard that\\nyou're going in so hard for \", \"exact\"=>\"Trump\", \"suffix\"=>\" is because it's a way\\nto express that you're\", \"offset\"=>22540, \"length\"=>5}, {\"detection\"=>\"[he needs parents debate over Cruz versus ]Trump[. Instead of gay. Not\\ngetting the the]\", \"prefix\"=>\"he needs parents debate over Cruz versus \", \"exact\"=>\"Trump\", \"suffix\"=>\". Instead of gay. Not\\ngetting the the\", \"offset\"=>29546, \"length\"=>5}, {\"detection\"=>\"[points ahead of\\nit. Chris. And all the polls. ]He['s really he doesn't like he's not in my face]\", \"prefix\"=>\"points ahead of\\nit. Chris. And all the polls. \", \"exact\"=>\"He\", \"suffix\"=>\"'s really he doesn't like he's not in my face\", \"offset\"=>30077, \"length\"=>2}, {\"detection\"=>\"[of\\nit. Chris. And all the polls. He's really ]he[ doesn't like he's not in my face you\\nknow it's]\", \"prefix\"=>\"of\\nit. Chris. And all the polls. He's really \", \"exact\"=>\"he\", \"suffix\"=>\" doesn't like he's not in my face you\\nknow it's\", \"offset\"=>30089, \"length\"=>2}, {\"detection\"=>\"[And all the polls. He's really he doesn't like ]he['s not in my face you\\nknow it's not. And so I]\", \"prefix\"=>\"And all the polls. He's really he doesn't like \", \"exact\"=>\"he\", \"suffix\"=>\"'s not in my face you\\nknow it's not. And so I\", \"offset\"=>30105, \"length\"=>2}, {\"detection\"=>\"[And so I don't get too thrilled.\\nIt in front of ]him[ about what he's doing. But I'm really proud of]\", \"prefix\"=>\"And so I don't get too thrilled.\\nIt in front of \", \"exact\"=>\"him\", \"suffix\"=>\" about what he's doing. But I'm really proud of\", \"offset\"=>30192, \"length\"=>3}, {\"detection\"=>\"[get too thrilled.\\nIt in front of him about what ]he['s doing. But I'm really proud of him.\\nAnd I'm]\", \"prefix\"=>\"get too thrilled.\\nIt in front of him about what \", \"exact\"=>\"he\", \"suffix\"=>\"'s doing. But I'm really proud of him.\\nAnd I'm\", \"offset\"=>30207, \"length\"=>2}, {\"detection\"=>\"[about what he's doing. But I'm really proud of ]him[.\\nAnd I'm really sort of dazzled by]\", \"prefix\"=>\"about what he's doing. But I'm really proud of \", \"exact\"=>\"him\", \"suffix\"=>\".\\nAnd I'm really sort of dazzled by\", \"offset\"=>30243, \"length\"=>3}, {\"detection\"=>\"[I'm really sort of dazzled by how\\nsuccessfully ]he[ engages his endeavors. And so often\\naccomplishes]\", \"prefix\"=>\"I'm really sort of dazzled by how\\nsuccessfully \", \"exact\"=>\"he\", \"suffix\"=>\" engages his endeavors. And so often\\naccomplishes\", \"offset\"=>30299, \"length\"=>2}, {\"detection\"=>\"[sort of dazzled by how\\nsuccessfully he engages ]his[ endeavors. And so often\\naccomplishes his goal.]\", \"prefix\"=>\"sort of dazzled by how\\nsuccessfully he engages \", \"exact\"=>\"his\", \"suffix\"=>\" endeavors. And so often\\naccomplishes his goal.\", \"offset\"=>30310, \"length\"=>3}, {\"detection\"=>\"[ engages his endeavors. And so often\\naccomplishes ]his[ goal. So detached. Alex's dad has]\", \"prefix\"=>\" engages his endeavors. And so often\\naccomplishes \", \"exact\"=>\"his\", \"suffix\"=>\" goal. So detached. Alex's dad has\", \"offset\"=>30351, \"length\"=>3}, {\"detection\"=>\"[were having these conversations. This happened.\\n]Trump[ went on T.V. and talked about the Supreme Court]\", \"prefix\"=>\"were having these conversations. This happened.\\n\", \"exact\"=>\"Trump\", \"suffix\"=>\" went on T.V. and talked about the Supreme Court\", \"offset\"=>30575, \"length\"=>5}, {\"detection\"=>\"[much to him. The reason he'd stick\\nthem self on ]Trump[ in the first place. It just didn't seem true. So]\", \"prefix\"=>\"much to him. The reason he'd stick\\nthem self on \", \"exact\"=>\"Trump\", \"suffix\"=>\" in the first place. It just didn't seem true. So\", \"offset\"=>31127, \"length\"=>5}, {\"detection\"=>\"[disses to fix is ruling. He would. I support\\n]Trump[ fully. I support Trump fully. So maybe Is it]\", \"prefix\"=>\"disses to fix is ruling. He would. I support\\n\", \"exact\"=>\"Trump\", \"suffix\"=>\" fully. I support Trump fully. So maybe Is it\", \"offset\"=>31618, \"length\"=>5}, {\"detection\"=>\"[He would. I support\\nTrump fully. I support ]Trump[ fully. So maybe Is it possible\\nthat I sort of]\", \"prefix\"=>\"He would. I support\\nTrump fully. I support \", \"exact\"=>\"Trump\", \"suffix\"=>\" fully. So maybe Is it possible\\nthat I sort of\", \"offset\"=>31641, \"length\"=>5}, {\"detection\"=>\"[different with him.\\nHe was so much more into ]Trump[. Even than he had been two weeks ago. It was]\", \"prefix\"=>\"different with him.\\nHe was so much more into \", \"exact\"=>\"Trump\", \"suffix\"=>\". Even than he had been two weeks ago. It was\", \"offset\"=>32098, \"length\"=>5}, {\"detection\"=>\"[him.\\nHe was so much more into Trump. Even than ]he[ had been two weeks ago. It was like his\\nbeaver.]\", \"prefix\"=>\"him.\\nHe was so much more into Trump. Even than \", \"exact\"=>\"he\", \"suffix\"=>\" had been two weeks ago. It was like his\\nbeaver.\", \"offset\"=>32115, \"length\"=>2}, {\"detection\"=>\"[ Even than he had been two weeks ago. It was like ]his[\\nbeaver. Football teams in the Super Bowl or]\", \"prefix\"=>\" Even than he had been two weeks ago. It was like \", \"exact\"=>\"his\", \"suffix\"=>\"\\nbeaver. Football teams in the Super Bowl or\", \"offset\"=>32154, \"length\"=>3}, {\"detection\"=>\"[Football teams in the Super Bowl or something. ]He[ was just Google E.I. for him.\\nHis reasons for]\", \"prefix\"=>\"Football teams in the Super Bowl or something. \", \"exact\"=>\"He\", \"suffix\"=>\" was just Google E.I. for him.\\nHis reasons for\", \"offset\"=>32213, \"length\"=>2}, {\"detection\"=>\"[Bowl or something. He was just Google E.I. for ]him[.\\nHis reasons for supporting Trump no longer came]\", \"prefix\"=>\"Bowl or something. He was just Google E.I. for \", \"exact\"=>\"him\", \"suffix\"=>\".\\nHis reasons for supporting Trump no longer came\", \"offset\"=>32241, \"length\"=>3}, {\"detection\"=>\"[or something. He was just Google E.I. for him.\\n]His[ reasons for supporting Trump no longer came from]\", \"prefix\"=>\"or something. He was just Google E.I. for him.\\n\", \"exact\"=>\"His\", \"suffix\"=>\" reasons for supporting Trump no longer came from\", \"offset\"=>32246, \"length\"=>3}, {\"detection\"=>\"[Google E.I. for him.\\nHis reasons for supporting ]Trump[ no longer came from reasoning out one position]\", \"prefix\"=>\"Google E.I. for him.\\nHis reasons for supporting \", \"exact\"=>\"Trump\", \"suffix\"=>\" no longer came from reasoning out one position\", \"offset\"=>32273, \"length\"=>5}, {\"detection\"=>\"[ the next. It\\nwas more chemical emotional. I like ]his[ persona. I like\\nhis stance on domestic policy in]\", \"prefix\"=>\" the next. It\\nwas more chemical emotional. I like \", \"exact\"=>\"his\", \"suffix\"=>\" persona. I like\\nhis stance on domestic policy in\", \"offset\"=>32378, \"length\"=>3}, {\"detection\"=>\"[chemical emotional. I like his persona. I like\\n]his[ stance on domestic policy in regard to building]\", \"prefix\"=>\"chemical emotional. I like his persona. I like\\n\", \"exact\"=>\"his\", \"suffix\"=>\" stance on domestic policy in regard to building\", \"offset\"=>32398, \"length\"=>3}, {\"detection\"=>\"[wall and\\nbuilding up our security and our for ]his[ financial policies. I\\nlike it. I agree with it]\", \"prefix\"=>\"wall and\\nbuilding up our security and our for \", \"exact\"=>\"his\", \"suffix\"=>\" financial policies. I\\nlike it. I agree with it\", \"offset\"=>32500, \"length\"=>3}, {\"detection\"=>\"[She added My hands here.\\nYeah. That's like ]Trump[ he does he does it.\\nAlex. You probably figured]\", \"prefix\"=>\"She added My hands here.\\nYeah. That's like \", \"exact\"=>\"Trump\", \"suffix\"=>\" he does he does it.\\nAlex. You probably figured\", \"offset\"=>32690, \"length\"=>5}, {\"detection\"=>\"[ She added My hands here.\\nYeah. That's like Trump ]he[ does he does it.\\nAlex. You probably figured out]\", \"prefix\"=>\" She added My hands here.\\nYeah. That's like Trump \", \"exact\"=>\"he\", \"suffix\"=>\" does he does it.\\nAlex. You probably figured out\", \"offset\"=>32696, \"length\"=>2}, {\"detection\"=>\"[My hands here.\\nYeah. That's like Trump he does ]he[ does it.\\nAlex. You probably figured out by now.]\", \"prefix\"=>\"My hands here.\\nYeah. That's like Trump he does \", \"exact\"=>\"he\", \"suffix\"=>\" does it.\\nAlex. You probably figured out by now.\", \"offset\"=>32704, \"length\"=>2}, {\"detection\"=>\"[We're full of hope or full of fear and with ]Trump[. Maybe with any\\noutsider candidate Sanders or]\", \"prefix\"=>\"We're full of hope or full of fear and with \", \"exact\"=>\"Trump\", \"suffix\"=>\". Maybe with any\\noutsider candidate Sanders or\", \"offset\"=>33218, \"length\"=>5}, {\"detection\"=>\"[I asked why their son was\\ninto trump the said ]Trump['s campaign reached out to Alex remember. Alex]\", \"prefix\"=>\"I asked why their son was\\ninto trump the said \", \"exact\"=>\"Trump\", \"suffix\"=>\"'s campaign reached out to Alex remember. Alex\", \"offset\"=>33648, \"length\"=>5}, {\"detection\"=>\"[for Rubio right now. And the reason he like ]Trump[. They both said was\\nsomething much deeper. About]\", \"prefix\"=>\"for Rubio right now. And the reason he like \", \"exact\"=>\"Trump\", \"suffix\"=>\". They both said was\\nsomething much deeper. About\", \"offset\"=>33862, \"length\"=>5}, {\"detection\"=>\"[I didn't see on my own. But they did.\\nBecause ]Trump[. Shows power. And Alex is about\\npower. Because]\", \"prefix\"=>\"I didn't see on my own. But they did.\\nBecause \", \"exact\"=>\"Trump\", \"suffix\"=>\". Shows power. And Alex is about\\npower. Because\", \"offset\"=>33980, \"length\"=>5}]}"
      },
      {
        "id": 608599,
        "name": "Cato Institute",
        "identifier": "http://d.opencalais.com/genericHasher-1/be313495-bb0c-3e69-a685-f46012467ca4",
        "score": 1,
        "type": "Facility",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608596,
        "name": "Listenership",
        "identifier": "http://d.opencalais.com/pershash-1/11339438-d868-35c6-a629-b49cde5fc7ad",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608595,
        "name": "bank",
        "identifier": "http://d.opencalais.com/genericHasher-1/6c8d4d6b-9026-39f0-8967-42d22a408453",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608594,
        "name": "David Goodman",
        "identifier": "http://d.opencalais.com/pershash-1/767559a0-53fd-3711-9a3b-89f721964c44",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[Damien Gray from Rob get this. Special thanks ]David[ seen in the area Francisco Monaco Corey]\", \"prefix\"=>\"Damien Gray from Rob get this. Special thanks \", \"exact\"=>\"David\", \"suffix\"=>\" seen in the area Francisco Monaco Corey\", \"offset\"=>51108, \"length\"=>5}]}"
      },
      {
        "id": 608592,
        "name": "Bernie Sanders",
        "identifier": "http://d.opencalais.com/pershash-1/4771f280-395d-3755-b3c9-a7e2af4ad549",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[very similar story. One of\\nour producers how ]he[ chases in South Carolina's last month and was]\", \"prefix\"=>\"very similar story. One of\\nour producers how \", \"exact\"=>\"he\", \"suffix\"=>\" chases in South Carolina's last month and was\", \"offset\"=>9613, \"length\"=>2}, {\"detection\"=>\"[destitute family. And so saying someone like ]Bernie[\\nsan. They are saying that he's going to]\", \"prefix\"=>\"destitute family. And so saying someone like \", \"exact\"=>\"Bernie\", \"suffix\"=>\"\\nsan. They are saying that he's going to\", \"offset\"=>11748, \"length\"=>6}, {\"detection\"=>\"[someone like Bernie\\nsan. They are saying that ]he['s going to redistribute the wealth and sort of]\", \"prefix\"=>\"someone like Bernie\\nsan. They are saying that \", \"exact\"=>\"he\", \"suffix\"=>\"'s going to redistribute the wealth and sort of\", \"offset\"=>11781, \"length\"=>2}, {\"detection\"=>\"[to law school in a lesser project. When I asked ]him[ the\\nquestion I was asking everybody I was]\", \"prefix\"=>\"to law school in a lesser project. When I asked \", \"exact\"=>\"him\", \"suffix\"=>\" the\\nquestion I was asking everybody I was\", \"offset\"=>12084, \"length\"=>3}, {\"detection\"=>\"[with Trump. Maybe with any\\noutsider candidate ]Sanders[ or two thousand and eight Obama. There seem to]\", \"prefix\"=>\"with Trump. Maybe with any\\noutsider candidate \", \"exact\"=>\"Sanders\", \"suffix\"=>\" or two thousand and eight Obama. There seem to\", \"offset\"=>33259, \"length\"=>7}, {\"detection\"=>\"[personal journeys that lead supporters to ]him[ in New Hampshire trump one men.\\nHe won women. He]\", \"prefix\"=>\"personal journeys that lead supporters to \", \"exact\"=>\"him\", \"suffix\"=>\" in New Hampshire trump one men.\\nHe won women. He\", \"offset\"=>33381, \"length\"=>3}, {\"detection\"=>\"[to him in New Hampshire trump one men.\\n]He[ won women. He when the young people and the old]\", \"prefix\"=>\"to him in New Hampshire trump one men.\\n\", \"exact\"=>\"He\", \"suffix\"=>\" won women. He when the young people and the old\", \"offset\"=>33417, \"length\"=>2}, {\"detection\"=>\"[in New Hampshire trump one men.\\nHe won women. ]He[ when the young people and the old people. People]\", \"prefix\"=>\"in New Hampshire trump one men.\\nHe won women. \", \"exact\"=>\"He\", \"suffix\"=>\" when the young people and the old people. People\", \"offset\"=>33431, \"length\"=>2}]}"
      },
      {
        "id": 608591,
        "name": "Brian Reed",
        "identifier": "http://d.opencalais.com/pershash-1/47aee741-638a-3f1a-a1df-2a400893ce7e",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[risk out stories for a show. Kimberly Henderson ]his[ office\\ncoordinator. Research up today.]\", \"prefix\"=>\"risk out stories for a show. Kimberly Henderson \", \"exact\"=>\"his\", \"suffix\"=>\" office\\ncoordinator. Research up today.\", \"offset\"=>50938, \"length\"=>3}]}"
      },
      {
        "id": 608589,
        "name": "Nancy Updike",
        "identifier": "http://d.opencalais.com/pershash-1/881e979e-5597-3599-815b-2df0ab522c00",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[directors Matty any production\\nup today for ]her[ Smith said Linda the operations director and we]\", \"prefix\"=>\"directors Matty any production\\nup today for \", \"exact\"=>\"her\", \"suffix\"=>\" Smith said Linda the operations director and we\", \"offset\"=>50745, \"length\"=>3}]}"
      },
      {
        "id": 608588,
        "name": "Ira Glass",
        "identifier": "http://d.opencalais.com/pershash-1/76d93800-336f-301e-a675-4990d315b8cc",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608586,
        "name": "Kevin Spacey",
        "identifier": "http://d.opencalais.com/pershash-1/a3c59a94-267e-3e04-84bf-b97319aacf18",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 608583,
        "name": "Terry Gross",
        "identifier": "http://d.opencalais.com/pershash-1/d3020cb6-2d6c-3a96-bd13-311e00424c63",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[Gross on public radio but does not listen to ]her[. Not his thing. He has personally]\", \"prefix\"=>\"Gross on public radio but does not listen to \", \"exact\"=>\"her\", \"suffix\"=>\". Not his thing. He has personally\", \"offset\"=>1348, \"length\"=>3}, {\"detection\"=>\"[of his involves\\ndeceit and ingenuity. Is when ]Terry[ was still in his twenty's. Fish and Game Warden]\", \"prefix\"=>\"of his involves\\ndeceit and ingenuity. Is when \", \"exact\"=>\"Terry\", \"suffix\"=>\" was still in his twenty's. Fish and Game Warden\", \"offset\"=>2298, \"length\"=>5}, {\"detection\"=>\"[was especially a problem when the you'll read ]her[ near Fortuna California. Women were]\", \"prefix\"=>\"was especially a problem when the you'll read \", \"exact\"=>\"her\", \"suffix\"=>\" near Fortuna California. Women were\", \"offset\"=>3193, \"length\"=>3}, {\"detection\"=>\"[ Because he set up a look at on the road which he ]Terry[ and the\\nother wardens coming. Then one day.]\", \"prefix\"=>\" Because he set up a look at on the road which he \", \"exact\"=>\"Terry\", \"suffix\"=>\" and the\\nother wardens coming. Then one day.\", \"offset\"=>4317, \"length\"=>5}, {\"detection\"=>\"[and the\\nother wardens coming. Then one day. ]Terry[ got an idea.\\nHe came home with his dog but I'm]\", \"prefix\"=>\"and the\\nother wardens coming. Then one day. \", \"exact\"=>\"Terry\", \"suffix\"=>\" got an idea.\\nHe came home with his dog but I'm\", \"offset\"=>4367, \"length\"=>5}, {\"detection\"=>\"[knows days and that night\\naround nine o'clock ]Terry[ says he went to the eleven or about a mile]\", \"prefix\"=>\"knows days and that night\\naround nine o'clock \", \"exact\"=>\"Terry\", \"suffix\"=>\" says he went to the eleven or about a mile\", \"offset\"=>4598, \"length\"=>5}, {\"detection\"=>\"[the voice said. Get the net heck. Get a gun. ]Terry[ says he\\nwas too young and dumb to get scared]\", \"prefix\"=>\"the voice said. Get the net heck. Get a gun. \", \"exact\"=>\"Terry\", \"suffix\"=>\" says he\\nwas too young and dumb to get scared\", \"offset\"=>7311, \"length\"=>5}, {\"detection\"=>\"[ affairs officer at the ship model X. office with ]Terry[ worked and he confirmed that\\nyes this was a]\", \"prefix\"=>\" affairs officer at the ship model X. office with \", \"exact\"=>\"Terry\", \"suffix\"=>\" worked and he confirmed that\\nyes this was a\", \"offset\"=>8632, \"length\"=>5}, {\"detection\"=>\"[and. In some not against you at all\\nand ]she[ she doesn't feel that she feels like I'm against]\", \"prefix\"=>\"and. In some not against you at all\\nand \", \"exact\"=>\"she\", \"suffix\"=>\" she doesn't feel that she feels like I'm against\", \"offset\"=>14476, \"length\"=>3}, {\"detection\"=>\"[and. In some not against you at all\\nand she ]she[ doesn't feel that she feels like I'm against her]\", \"prefix\"=>\"and. In some not against you at all\\nand she \", \"exact\"=>\"she\", \"suffix\"=>\" doesn't feel that she feels like I'm against her\", \"offset\"=>14480, \"length\"=>3}, {\"detection\"=>\"[ against you at all\\nand she she doesn't feel that ]she[ feels like I'm against her and she said.]\", \"prefix\"=>\" against you at all\\nand she she doesn't feel that \", \"exact\"=>\"she\", \"suffix\"=>\" feels like I'm against her and she said.\", \"offset\"=>14502, \"length\"=>3}, {\"detection\"=>\"[ she doesn't feel that she feels like I'm against ]her[ and she said. Well.\\nTrump wants to keep all the]\", \"prefix\"=>\" she doesn't feel that she feels like I'm against \", \"exact\"=>\"her\", \"suffix\"=>\" and she said. Well.\\nTrump wants to keep all the\", \"offset\"=>14529, \"length\"=>3}, {\"detection\"=>\"[feel that she feels like I'm against her and ]she[ said. Well.\\nTrump wants to keep all the Muslims.]\", \"prefix\"=>\"feel that she feels like I'm against her and \", \"exact\"=>\"she\", \"suffix\"=>\" said. Well.\\nTrump wants to keep all the Muslims.\", \"offset\"=>14537, \"length\"=>3}, {\"detection\"=>\"[there's a very slight chance\\nof that happening. ]She[ was annoyed but they're still friends. Was he]\", \"prefix\"=>\"there's a very slight chance\\nof that happening. \", \"exact\"=>\"She\", \"suffix\"=>\" was annoyed but they're still friends. Was he\", \"offset\"=>15015, \"length\"=>3}, {\"detection\"=>\"[they're still friends. Was he afraid of hurting ]her[ feelings.\\nYou know. I don't want to do that I]\", \"prefix\"=>\"they're still friends. Was he afraid of hurting \", \"exact\"=>\"her\", \"suffix\"=>\" feelings.\\nYou know. I don't want to do that I\", \"offset\"=>15083, \"length\"=>3}, {\"detection\"=>\"[he's being racist. When\\nlike you're black and ]she['s white. And she's kind of looking at you like\\nI]\", \"prefix\"=>\"he's being racist. When\\nlike you're black and \", \"exact\"=>\"she\", \"suffix\"=>\"'s white. And she's kind of looking at you like\\nI\", \"offset\"=>16232, \"length\"=>3}, {\"detection\"=>\"[When\\nlike you're black and she's white. And ]she['s kind of looking at you like\\nI don't know. For]\", \"prefix\"=>\"When\\nlike you're black and she's white. And \", \"exact\"=>\"she\", \"suffix\"=>\"'s kind of looking at you like\\nI don't know. For\", \"offset\"=>16249, \"length\"=>3}, {\"detection\"=>\"[Then I asked. I know your mom adopted you\\nwhen ]she[ was on her own sue. How did she mean your dad.]\", \"prefix\"=>\"Then I asked. I know your mom adopted you\\nwhen \", \"exact\"=>\"she\", \"suffix\"=>\" was on her own sue. How did she mean your dad.\", \"offset\"=>19599, \"length\"=>3}, {\"detection\"=>\"[I know your mom adopted you\\nwhen she was on ]her[ own sue. How did she mean your dad. Well]\", \"prefix\"=>\"I know your mom adopted you\\nwhen she was on \", \"exact\"=>\"her\", \"suffix\"=>\" own sue. How did she mean your dad. Well\", \"offset\"=>19610, \"length\"=>3}, {\"detection\"=>\"[ adopted you\\nwhen she was on her own sue. How did ]she[ mean your dad. Well basically what happened\\nis]\", \"prefix\"=>\" adopted you\\nwhen she was on her own sue. How did \", \"exact\"=>\"she\", \"suffix\"=>\" mean your dad. Well basically what happened\\nis\", \"offset\"=>19631, \"length\"=>3}, {\"detection\"=>\"[love\\nas my choice. Said if I didn't want to add ]she[ wouldn't make\\nme have someone that would be good]\", \"prefix\"=>\"love\\nas my choice. Said if I didn't want to add \", \"exact\"=>\"she\", \"suffix\"=>\" wouldn't make\\nme have someone that would be good\", \"offset\"=>19914, \"length\"=>3}, {\"detection\"=>\"[face just lights up when he talks about ]her[. When he was in third grade. She was]\", \"prefix\"=>\"face just lights up when he talks about \", \"exact\"=>\"her\", \"suffix\"=>\". When he was in third grade. She was\", \"offset\"=>20533, \"length\"=>3}, {\"detection\"=>\"[he talks about her. When he was in third grade. ]She[ was his\\nteacher. And then she adopted him. It's]\", \"prefix\"=>\"he talks about her. When he was in third grade. \", \"exact\"=>\"She\", \"suffix\"=>\" was his\\nteacher. And then she adopted him. It's\", \"offset\"=>20566, \"length\"=>3}, {\"detection\"=>\"[in third grade. She was his\\nteacher. And then ]she[ adopted him. It's almost romantics. Like the]\", \"prefix\"=>\"in third grade. She was his\\nteacher. And then \", \"exact\"=>\"she\", \"suffix\"=>\" adopted him. It's almost romantics. Like the\", \"offset\"=>20596, \"length\"=>3}, {\"detection\"=>\"[ want to get into detail about what happened when ]she[ and her\\nhusband figured out Alex was gay but she]\", \"prefix\"=>\" want to get into detail about what happened when \", \"exact\"=>\"she\", \"suffix\"=>\" and her\\nhusband figured out Alex was gay but she\", \"offset\"=>23271, \"length\"=>3}, {\"detection\"=>\"[ get into detail about what happened when she and ]her[\\nhusband figured out Alex was gay but she did]\", \"prefix\"=>\" get into detail about what happened when she and \", \"exact\"=>\"her\", \"suffix\"=>\"\\nhusband figured out Alex was gay but she did\", \"offset\"=>23279, \"length\"=>3}, {\"detection\"=>\"[ she and her\\nhusband figured out Alex was gay but ]she[ did talk about what it was like for]\", \"prefix\"=>\" she and her\\nhusband figured out Alex was gay but \", \"exact\"=>\"she\", \"suffix\"=>\" did talk about what it was like for\", \"offset\"=>23320, \"length\"=>3}, {\"detection\"=>\"[gay but she did talk about what it was like for ]her[.\\nHeartbreaking when that's not what I wanted for]\", \"prefix\"=>\"gay but she did talk about what it was like for \", \"exact\"=>\"her\", \"suffix\"=>\".\\nHeartbreaking when that's not what I wanted for\", \"offset\"=>23360, \"length\"=>3}, {\"detection\"=>\"[agree with which with gay\\nmarriage. You know. ]She[ has the same feeling Alex says.\\nIt hurts to be]\", \"prefix\"=>\"agree with which with gay\\nmarriage. You know. \", \"exact\"=>\"She\", \"suffix\"=>\" has the same feeling Alex says.\\nIt hurts to be\", \"offset\"=>23674, \"length\"=>3}, {\"detection\"=>\"[about anything. Because they're so connected. ]She[ is the same feelings about\\nmeaning Alex that he]\", \"prefix\"=>\"about anything. Because they're so connected. \", \"exact\"=>\"She\", \"suffix\"=>\" is the same feelings about\\nmeaning Alex that he\", \"offset\"=>23783, \"length\"=>3}, {\"detection\"=>\"[about\\nmeaning Alex that he does about meeting ]her[. Well one day in November. It was\\nseven. The]\", \"prefix\"=>\"about\\nmeaning Alex that he does about meeting \", \"exact\"=>\"her\", \"suffix\"=>\". Well one day in November. It was\\nseven. The\", \"offset\"=>23854, \"length\"=>3}, {\"detection\"=>\"[about that. But you know I'm talking to ]her[ social worker and we'll just try\\nand see what]\", \"prefix\"=>\"about that. But you know I'm talking to \", \"exact\"=>\"her\", \"suffix\"=>\" social worker and we'll just try\\nand see what\", \"offset\"=>24951, \"length\"=>3}, {\"detection\"=>\"[the problem. We need to get rid of the problem. ]She[ added My hands here.\\nYeah. That's like Trump he]\", \"prefix\"=>\"the problem. We need to get rid of the problem. \", \"exact\"=>\"She\", \"suffix\"=>\" added My hands here.\\nYeah. That's like Trump he\", \"offset\"=>32647, \"length\"=>3}, {\"detection\"=>\"[Secret. Friday revere learned just how hard.\\n]Her[ friend Maurice kidney was failing. He needed a]\", \"prefix\"=>\"Secret. Friday revere learned just how hard.\\n\", \"exact\"=>\"Her\", \"suffix\"=>\" friend Maurice kidney was failing. He needed a\", \"offset\"=>37108, \"length\"=>3}, {\"detection\"=>\"[process. Every kidney\\ndonor has to go through. ]She[ contacted a transplant hospital. Which]\", \"prefix\"=>\"process. Every kidney\\ndonor has to go through. \", \"exact\"=>\"She\", \"suffix\"=>\" contacted a transplant hospital. Which\", \"offset\"=>37838, \"length\"=>3}, {\"detection\"=>\"[you into doing this.\\nFinally after six months. ]She[ had a conference call with the panel from the]\", \"prefix\"=>\"you into doing this.\\nFinally after six months. \", \"exact\"=>\"She\", \"suffix\"=>\" had a conference call with the panel from the\", \"offset\"=>38174, \"length\"=>3}, {\"detection\"=>\"[transplant hospital. A final\\nscreening. About ]her[ decision to donate. They had a lot of questions]\", \"prefix\"=>\"transplant hospital. A final\\nscreening. About \", \"exact\"=>\"her\", \"suffix\"=>\" decision to donate. They had a lot of questions\", \"offset\"=>38270, \"length\"=>3}, {\"detection\"=>\"[to donate. They had a lot of questions for ]her[. But one of the biggest\\nwas. What's going to]\", \"prefix\"=>\"to donate. They had a lot of questions for \", \"exact\"=>\"her\", \"suffix\"=>\". But one of the biggest\\nwas. What's going to\", \"offset\"=>38326, \"length\"=>3}, {\"detection\"=>\"[ taking care of donkeys to feed water to haul. So ]she[ to range\\nfor her husband and son. Each take a]\", \"prefix\"=>\" taking care of donkeys to feed water to haul. So \", \"exact\"=>\"she\", \"suffix\"=>\" to range\\nfor her husband and son. Each take a\", \"offset\"=>38490, \"length\"=>3}, {\"detection\"=>\"[to feed water to haul. So she to range\\nfor ]her[ husband and son. Each take a couple weeks off.]\", \"prefix\"=>\"to feed water to haul. So she to range\\nfor \", \"exact\"=>\"her\", \"suffix\"=>\" husband and son. Each take a couple weeks off.\", \"offset\"=>38507, \"length\"=>3}, {\"detection\"=>\"[Each take a couple weeks off. Which would give ]her[ a month of recovery time.\\nBut the panel said she]\", \"prefix\"=>\"Each take a couple weeks off. Which would give \", \"exact\"=>\"her\", \"suffix\"=>\" a month of recovery time.\\nBut the panel said she\", \"offset\"=>38575, \"length\"=>3}, {\"detection\"=>\"[ her a month of recovery time.\\nBut the panel said ]she[ might need longer than that. And so when I said]\", \"prefix\"=>\" her a month of recovery time.\\nBut the panel said \", \"exact\"=>\"she\", \"suffix\"=>\" might need longer than that. And so when I said\", \"offset\"=>38624, \"length\"=>3}, {\"detection\"=>\"[someone to help around secrets property while ]she[ recovered. That\\nwould be considered kidney]\", \"prefix\"=>\"someone to help around secrets property while \", \"exact\"=>\"she\", \"suffix\"=>\" recovered. That\\nwould be considered kidney\", \"offset\"=>39584, \"length\"=>3}, {\"detection\"=>\"[ Led secret to begin studying organ donation. And ]she[\\neventually even became a medical ethicist. And]\", \"prefix\"=>\" Led secret to begin studying organ donation. And \", \"exact\"=>\"she\", \"suffix\"=>\"\\neventually even became a medical ethicist. And\", \"offset\"=>40974, \"length\"=>3}, {\"detection\"=>\"[a medical ethicist. And in the thirty years. ]She['s been studying\\norgan donation since then she]\", \"prefix\"=>\"a medical ethicist. And in the thirty years. \", \"exact\"=>\"She\", \"suffix\"=>\"'s been studying\\norgan donation since then she\", \"offset\"=>41046, \"length\"=>3}, {\"detection\"=>\"[She's been studying\\norgan donation since then ]she[ says she's seen how ineffective and even]\", \"prefix\"=>\"She's been studying\\norgan donation since then \", \"exact\"=>\"she\", \"suffix\"=>\" says she's seen how ineffective and even\", \"offset\"=>41092, \"length\"=>3}, {\"detection\"=>\"[ been studying\\norgan donation since then she says ]she['s seen how ineffective and even]\", \"prefix\"=>\" been studying\\norgan donation since then she says \", \"exact\"=>\"she\", \"suffix\"=>\"'s seen how ineffective and even\", \"offset\"=>41101, \"length\"=>3}, {\"detection\"=>\"[to get more people to donate\\ntheir kidneys. So ]she[ set up a panel where she worked at the Cato]\", \"prefix\"=>\"to get more people to donate\\ntheir kidneys. So \", \"exact\"=>\"she\", \"suffix\"=>\" set up a panel where she worked at the Cato\", \"offset\"=>41931, \"length\"=>3}, {\"detection\"=>\"[kidneys. So she set up a panel where ]she[ worked at the Cato Institute.\\nWelcome to Cato I]\", \"prefix\"=>\"kidneys. So she set up a panel where \", \"exact\"=>\"she\", \"suffix\"=>\" worked at the Cato Institute.\\nWelcome to Cato I\", \"offset\"=>41956, \"length\"=>3}, {\"detection\"=>\"[Secret wanted to go to Iran herself and conduct ]her[\\nown research on how Iran's living donor system]\", \"prefix\"=>\"Secret wanted to go to Iran herself and conduct \", \"exact\"=>\"her\", \"suffix\"=>\"\\nown research on how Iran's living donor system\", \"offset\"=>44096, \"length\"=>3}, {\"detection\"=>\"[on how Iran's living donor system worked. ]She[ presented this idea to her\\nbosses at Cato a]\", \"prefix\"=>\"on how Iran's living donor system worked. \", \"exact\"=>\"She\", \"suffix\"=>\" presented this idea to her\\nbosses at Cato a\", \"offset\"=>44155, \"length\"=>3}, {\"detection\"=>\"[donor system worked. She presented this idea to ]her[\\nbosses at Cato a libertarian think tank. So you]\", \"prefix\"=>\"donor system worked. She presented this idea to \", \"exact\"=>\"her\", \"suffix\"=>\"\\nbosses at Cato a libertarian think tank. So you\", \"offset\"=>44182, \"length\"=>3}, {\"detection\"=>\"[firmly a member of the axis of evil. Cato told ]her[ no way.\\nSo secret quit and began to plan our]\", \"prefix\"=>\"firmly a member of the axis of evil. Cato told \", \"exact\"=>\"her\", \"suffix\"=>\" no way.\\nSo secret quit and began to plan our\", \"offset\"=>44423, \"length\"=>3}, {\"detection\"=>\"[out of desperation.\\nBut secret says. The people ]she[ interviewed came away feeling good about what]\", \"prefix\"=>\"out of desperation.\\nBut secret says. The people \", \"exact\"=>\"she\", \"suffix\"=>\" interviewed came away feeling good about what\", \"offset\"=>48227, \"length\"=>3}, {\"detection\"=>\"[secret came back to America from Iran. ]She[ thought long and hard about what she'd]\", \"prefix\"=>\"secret came back to America from Iran. \", \"exact\"=>\"She\", \"suffix\"=>\" thought long and hard about what she'd\", \"offset\"=>48332, \"length\"=>3}, {\"detection\"=>\"[from Iran. She thought long and hard about what ]she['d seen\\nabout how many lives were saved because]\", \"prefix\"=>\"from Iran. She thought long and hard about what \", \"exact\"=>\"she\", \"suffix\"=>\"'d seen\\nabout how many lives were saved because\", \"offset\"=>48369, \"length\"=>3}, {\"detection\"=>\"[ donors were able to sell their kidneys. And then\\n]she[ concluded. No definitely not something we should]\", \"prefix\"=>\" donors were able to sell their kidneys. And then\\n\", \"exact\"=>\"she\", \"suffix\"=>\" concluded. No definitely not something we should\", \"offset\"=>48469, \"length\"=>3}, {\"detection\"=>\"[our donors. With the respect\\nthey deserve. ]She[ try to get this going yourself. She founded a]\", \"prefix\"=>\"our donors. With the respect\\nthey deserve. \", \"exact\"=>\"She\", \"suffix\"=>\" try to get this going yourself. She founded a\", \"offset\"=>49675, \"length\"=>3}, {\"detection\"=>\"[deserve. She try to get this going yourself. ]She[ founded a nonprofit. That raises money\\nto help]\", \"prefix\"=>\"deserve. She try to get this going yourself. \", \"exact\"=>\"She\", \"suffix\"=>\" founded a nonprofit. That raises money\\nto help\", \"offset\"=>49711, \"length\"=>3}]}"
      },
      {
        "id": 608582,
        "name": "Adam",
        "identifier": "http://d.opencalais.com/genericHasher-1/ca569b98-3322-3989-851b-9b2595ebe0c2",
        "score": 1,
        "type": "Technology",
        "station": "entity",
        "extra": "{}"
      }
    ],
    "extra": {
      "itunes_episode": "363371374"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/45264",
      "ui": "https://www.audiosear.ch/a/b0d0/580-that-s-one-way-to-do-it"
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
  },
  {
    "id": 42697,
    "title": "#579: My Damn Mind",
    "description": "The brain!  It's powerful! We have the story of how one man's delusions lead him to a situation that's just as strange as the worst thoughts his mind is cooking up. That story's <a href=\"http://nyti.ms/1Qw4buA\">a collaboration with the New York Times</a>.  Our second story is about a man using the power of his own mind to deal with a problem.\n  \nPictured: Alan Pean, with visible scar from a bullet wound. Photo by Chad Batka for The New York Times.",
    "date_created": "2016-02-13",
    "identifier": "6906 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/579/my-damn-mind",
    "physical_location": "rss",
    "duration": 3572,
    "tags": [],
    "updated_at": "2016-02-14 11:55:47 UTC",
    "itunes_episode": 1000362833791,
    "date_added": "2016-02-13 11:12:23 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 41290,
        "duration": 3572,
        "url": [
          "https://www.audiosear.ch/media/audio_file/a14a/579.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 589363,
        "name": "Cleveland",
        "identifier": "http://d.opencalais.com/genericHasher-1/5291d0ca-3c6e-35cd-8fab-a98e16cc8d48",
        "score": 0.425492107106726,
        "type": "City",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 589362,
        "name": "Houston",
        "identifier": "http://d.opencalais.com/genericHasher-1/c3e43ffe-26e8-38bf-a500-c5c1c7e486c3",
        "score": 0.597253680591365,
        "type": "City",
        "station": "location",
        "extra": "{\"latitude\"=>\"29.7631\", \"longitude\"=>\"-95.3631\", \"country\"=>\"United States\", \"state\"=>\"Texas\"}"
      },
      {
        "id": 589361,
        "name": "Texas",
        "identifier": "http://d.opencalais.com/genericHasher-1/b6607136-0945-32d7-b4fa-a99019467fd9",
        "score": 0.337194517058496,
        "type": "Province Or State",
        "station": "location",
        "extra": "{\"latitude\"=>\"31.4484328889\", \"longitude\"=>\"-97.7816569778\", \"country\"=>\"United States\"}"
      },
      {
        "id": 589360,
        "name": "America",
        "identifier": "http://d.opencalais.com/genericHasher-1/22b7ced9-f8a7-328d-b061-241cb9bc908a",
        "score": 0.850984214213453,
        "type": "Continent",
        "station": "location",
        "extra": "{}"
      },
      {
        "id": 589359,
        "name": "The Washington Post",
        "identifier": "http://d.opencalais.com/genericHasher-1/e74b0b29-0f62-31f6-9f1f-177502380cc3",
        "score": 1,
        "type": "Published Medium",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[is a contributing columnist for Vanity Fair in ]The Washington\\nPost[ he has a new book coming out maple called old]\", \"prefix\"=>\"is a contributing columnist for Vanity Fair in \", \"exact\"=>\"The Washington\\nPost\", \"suffix\"=>\" he has a new book coming out maple called old\", \"offset\"=>52257, \"length\"=>19}]}"
      },
      {
        "id": 589358,
        "name": "New York hospital",
        "identifier": "http://d.opencalais.com/genericHasher-1/049b89a1-2566-3c45-a6de-bade9cf76c34",
        "score": 1,
        "type": "Facility",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589357,
        "name": "bank",
        "identifier": "http://d.opencalais.com/genericHasher-1/6c8d4d6b-9026-39f0-8967-42d22a408453",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589356,
        "name": "Cleveland Clinic",
        "identifier": "http://d.opencalais.com/genericHasher-1/051a8fab-12b7-373c-a1a0-6ee5b7ea20d7",
        "score": 1,
        "type": "Facility",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589355,
        "name": "Brian Reed",
        "identifier": "http://d.opencalais.com/pershash-1/47aee741-638a-3f1a-a1df-2a400893ce7e",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[producer Brian Reed or editor's job level to\\n]his[ Snyder's or editorial consultant or technical]\", \"prefix\"=>\"producer Brian Reed or editor's job level to\\n\", \"exact\"=>\"his\", \"suffix\"=>\" Snyder's or editorial consultant or technical\", \"offset\"=>52903, \"length\"=>3}]}"
      },
      {
        "id": 589354,
        "name": "car rental",
        "identifier": "http://d.opencalais.com/genericHasher-1/f18b3847-2814-3616-96c0-367f666fec3a",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589353,
        "name": "the New York Times",
        "identifier": "http://d.opencalais.com/genericHasher-1/e27cba57-b409-34f0-82c8-9328f02ed0fb",
        "score": 1,
        "type": "Published Medium",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589352,
        "name": "energy",
        "identifier": "http://d.opencalais.com/genericHasher-1/05bb2646-0ab8-3a48-b4eb-d29cfd33ce39",
        "score": 1,
        "type": "Industry Term",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589351,
        "name": "Donald Trump",
        "identifier": "http://d.opencalais.com/pershash-1/3cb6735d-ad40-304e-b561-6fae64c71c32",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[Whose friends in high school do not understand ]him[. They think\\nprobably mentally ill. Because I am]\", \"prefix\"=>\"Whose friends in high school do not understand \", \"exact\"=>\"him\", \"suffix\"=>\". They think\\nprobably mentally ill. Because I am\", \"offset\"=>54935, \"length\"=>3}]}"
      },
      {
        "id": 589350,
        "name": "Barack Obama",
        "identifier": "http://d.opencalais.com/pershash-1/cfcf1aa2-de05-3939-a7d5-10c9c7b3e87b",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[ with short hair. You look nothing like President ]Obama[.\\nSo the next summer it happened again and was]\", \"prefix\"=>\" with short hair. You look nothing like President \", \"exact\"=>\"Obama\", \"suffix\"=>\".\\nSo the next summer it happened again and was\", \"offset\"=>6914, \"length\"=>5}, {\"detection\"=>\"[incident. But\\nthat night on the P S four. With ]his[ friends on Face Time. As a king and again.\\nAnd]\", \"prefix\"=>\"incident. But\\nthat night on the P S four. With \", \"exact\"=>\"his\", \"suffix\"=>\" friends on Face Time. As a king and again.\\nAnd\", \"offset\"=>7286, \"length\"=>3}, {\"detection\"=>\"[that I was acting strange like.\\nWhy can't ]he[ log onto the computer why can't he allowed onto]\", \"prefix\"=>\"that I was acting strange like.\\nWhy can't \", \"exact\"=>\"he\", \"suffix\"=>\" log onto the computer why can't he allowed onto\", \"offset\"=>7512, \"length\"=>2}, {\"detection\"=>\"[can't he log onto the computer why can't ]he[ allowed onto the P S four whatever\\nlike what can]\", \"prefix\"=>\"can't he log onto the computer why can't \", \"exact\"=>\"he\", \"suffix\"=>\" allowed onto the P S four whatever\\nlike what can\", \"offset\"=>7547, \"length\"=>2}, {\"detection\"=>\"[ allowed onto the P S four whatever\\nlike what can ]he[ do that because you're unable to do it. Yeah I]\", \"prefix\"=>\" allowed onto the P S four whatever\\nlike what can \", \"exact\"=>\"he\", \"suffix\"=>\" do that because you're unable to do it. Yeah I\", \"offset\"=>7599, \"length\"=>2}, {\"detection\"=>\"[station. So I talk with the nurse. And I told ]her[ Look I think\\nthese of being some got all excited]\", \"prefix\"=>\"station. So I talk with the nurse. And I told \", \"exact\"=>\"her\", \"suffix\"=>\" Look I think\\nthese of being some got all excited\", \"offset\"=>19635, \"length\"=>3}, {\"detection\"=>\"[wanted to. Talk with the doctor.\\nAnd I see a to ]her[ that I think she may need some kind of]\", \"prefix\"=>\"wanted to. Talk with the doctor.\\nAnd I see a to \", \"exact\"=>\"her\", \"suffix\"=>\" that I think she may need some kind of\", \"offset\"=>19754, \"length\"=>3}, {\"detection\"=>\"[ with the doctor.\\nAnd I see a to her that I think ]she[ may need some kind of psychiatric help.\\nDid you]\", \"prefix\"=>\" with the doctor.\\nAnd I see a to her that I think \", \"exact\"=>\"she\", \"suffix\"=>\" may need some kind of psychiatric help.\\nDid you\", \"offset\"=>19771, \"length\"=>3}, {\"detection\"=>\"[and whether the nurse said. All of these ]she[\\ndidn't pay attention to me. She said she's going]\", \"prefix\"=>\"and whether the nurse said. All of these \", \"exact\"=>\"she\", \"suffix\"=>\"\\ndidn't pay attention to me. She said she's going\", \"offset\"=>19996, \"length\"=>3}, {\"detection\"=>\"[All of these she\\ndidn't pay attention to me. ]She[ said she's going is going to be this shows us]\", \"prefix\"=>\"All of these she\\ndidn't pay attention to me. \", \"exact\"=>\"She\", \"suffix\"=>\" said she's going is going to be this shows us\", \"offset\"=>20028, \"length\"=>3}, {\"detection\"=>\"[these she\\ndidn't pay attention to me. She said ]she['s going is going to be this shows us all she]\", \"prefix\"=>\"these she\\ndidn't pay attention to me. She said \", \"exact\"=>\"she\", \"suffix\"=>\"'s going is going to be this shows us all she\", \"offset\"=>20037, \"length\"=>3}, {\"detection\"=>\"[she's going is going to be this shows us all ]she[ said\\ngoing to the report but federal]\", \"prefix\"=>\"she's going is going to be this shows us all \", \"exact\"=>\"she\", \"suffix\"=>\" said\\ngoing to the report but federal\", \"offset\"=>20082, \"length\"=>3}, {\"detection\"=>\"[he did ask for a psychiatric evaluation. And ]she[\\ndid tell amount is going to be discharged. And I]\", \"prefix\"=>\"he did ask for a psychiatric evaluation. And \", \"exact\"=>\"she\", \"suffix\"=>\"\\ndid tell amount is going to be discharged. And I\", \"offset\"=>20202, \"length\"=>3}]}"
      },
      {
        "id": 589349,
        "name": "Michael J. Fox",
        "identifier": "http://d.opencalais.com/pershash-1/aa44969f-f0b2-31f0-ae3c-f9610b759309",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[example. Yeah. Of of\\nof of how to react. ]He['s made it his cause both his public cause\\nand]\", \"prefix\"=>\"example. Yeah. Of of\\nof of how to react. \", \"exact\"=>\"He\", \"suffix\"=>\"'s made it his cause both his public cause\\nand\", \"offset\"=>44621, \"length\"=>2}, {\"detection\"=>\"[Yeah. Of of\\nof of how to react. He's made it ]his[ cause both his public cause\\nand his personal]\", \"prefix\"=>\"Yeah. Of of\\nof of how to react. He's made it \", \"exact\"=>\"his\", \"suffix\"=>\" cause both his public cause\\nand his personal\", \"offset\"=>44634, \"length\"=>3}, {\"detection\"=>\"[of how to react. He's made it his cause both ]his[ public cause\\nand his personal cause. And I ask]\", \"prefix\"=>\"of how to react. He's made it his cause both \", \"exact\"=>\"his\", \"suffix\"=>\" public cause\\nand his personal cause. And I ask\", \"offset\"=>44649, \"length\"=>3}, {\"detection\"=>\"[ He's made it his cause both his public cause\\nand ]his[ personal cause. And I ask Great. But I just]\", \"prefix\"=>\" He's made it his cause both his public cause\\nand \", \"exact\"=>\"his\", \"suffix\"=>\" personal cause. And I ask Great. But I just\", \"offset\"=>44670, \"length\"=>3}]}"
      },
      {
        "id": 589348,
        "name": "the New Yorker",
        "identifier": "http://d.opencalais.com/genericHasher-1/5515b3d5-2f4d-3f36-b497-474f0551670e",
        "score": 1,
        "type": "Published Medium",
        "station": "entity",
        "extra": "{}"
      },
      {
        "id": 589347,
        "name": "Nancy Updike",
        "identifier": "http://d.opencalais.com/pershash-1/881e979e-5597-3599-815b-2df0ab522c00",
        "score": 1,
        "type": "Person",
        "station": "entity",
        "extra": "{\"matches\"=>[{\"detection\"=>\"[it.\\nWell. We have nothing else to talk about ]Nancy[. I'm\\nsure we could find something. Yes Well we]\", \"prefix\"=>\"it.\\nWell. We have nothing else to talk about \", \"exact\"=>\"Nancy\", \"suffix\"=>\". I'm\\nsure we could find something. Yes Well we\", \"offset\"=>51969, \"length\"=>5}, {\"detection\"=>\"[ Know. Now beyond say anything and.\\nNow. OK. What ]she[ done.\\nNancy Updike is one of the this is a]\", \"prefix\"=>\" Know. Now beyond say anything and.\\nNow. OK. What \", \"exact\"=>\"she\", \"suffix\"=>\" done.\\nNancy Updike is one of the this is a\", \"offset\"=>52138, \"length\"=>3}]}"
      }
    ],
    "extra": {
      "itunes_episode": "1000362833791"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/42697",
      "ui": "https://www.audiosear.ch/a/a6c9/579-my-damn-mind"
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
  },
  {
    "id": 18650,
    "title": "#214: Family Physics",
    "description": "We take the stately laws of physics—laws which mathematicians and scientists have spent centuries discovering and verifying—and apply them to the realm of human relationships, to see if they shed useful light on our daily lives.  ",
    "date_created": "2002-06-02",
    "identifier": "2791 at http://www.thisamericanlife.org",
    "digital_location": "http://www.thisamericanlife.org/radio-archives/episode/214/family-physics",
    "physical_location": "rss",
    "duration": 3557,
    "tags": [],
    "updated_at": "2016-02-12 03:21:53 UTC",
    "itunes_episode": 361259884,
    "date_added": "2015-09-16 21:11:42 UTC",
    "show_id": 27,
    "show_title": "This American Life",
    "audio_files": [
      {
        "id": 18440,
        "duration": 3557,
        "url": [
          "https://www.audiosear.ch/media/audio_file/4808/214.mp3"
        ]
      }
    ],
    "image_files": [],
    "entities": [
      {
        "id": 409545,
        "name": "human relationships",
        "identifier": null,
        "score": 0.501,
        "type": null,
        "station": "entity",
        "extra": "---\nwikipedia_url: http://en.wikipedia.com/wiki/Interpersonal_relationship\nrentities:\n- Interpersonal relationships\n"
      },
      {
        "id": 409549,
        "name": "mathematician",
        "identifier": null,
        "score": 0.9,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Formal sciences\n- Mathematics\n- Greek loanwords\n"
      },
      {
        "id": 409552,
        "name": "physical law",
        "identifier": null,
        "score": 0.9,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Metaphysics of science\n- Principles\n- Philosophy of science\n- Scientific method\n- Empirical laws\n"
      },
      {
        "id": 409556,
        "name": "Technology & Internet",
        "identifier": null,
        "score": 0.981,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Technology_Internet\nrentities:\n- Networking hardware\n- Computer networking\n"
      },
      {
        "id": 409554,
        "name": "universal law",
        "identifier": null,
        "score": 0.7,
        "type": null,
        "station": "tag",
        "extra": "---\nrentities:\n- Theories of gravitation\n- Fundamental physics concepts\n- Gravitation\n"
      },
      {
        "id": 409557,
        "name": "Science",
        "identifier": null,
        "score": 0.802548,
        "type": null,
        "station": "topic",
        "extra": "---\noriginal: Science\nrentities:\n- Science\n"
      }
    ],
    "extra": {
      "itunes_episode": "361259884",
      "skip_transcript": "true"
    },
    "urls": {
      "self": "https://www.audiosear.ch/api/episodes/18650",
      "ui": "https://www.audiosear.ch/a/48da/214-family-physics"
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
]
```
