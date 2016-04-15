DROP TABLE IF EXISTS `restapi`.`other`;

CREATE TABLE `restapi`.`other` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `publication` varchar(100) DEFAULT NULL,
  `issue` varchar(100) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*
*/

#TRUNCATE TABLE `restapi`.`other`;

INSERT INTO `restapi`.`other`
(
`title`,
`publication`,
`issue`,
`type`,
`url`
)
VALUES
(
	"Flag on the Moon: the Beast of Yucca Flats",
	"NER Digital",
	"(June 21, 2012):",
	"creative nonfiction",
	"http://www.nereview.com/tag/the-beast-of-yucca-flats/"
);

/*
    [
      {
        "title": "Flag on the Moon: the Beast of Yucca Flats",
        "publication": "NER Digital",
        "issue": "(June 21, 2012):",
        "type": "creative nonfiction",
        "pid": "beast-item",
        "url": "http://www.nereview.com/tag/the-beast-of-yucca-flats/",
        "pClasses": {
          "beastItem": "true",
          "animateBgColor": ""
        }
      },
      {
        "title": "Maceo Montoya, The Scoundrel and the Optimist",
        "publication": "Indiana Review",
        "issue": "32, No. 1 (Summer 2010): 176-177",
        "type": "book review"
      },
      {
        "title": "The Paris Review Perspective",
        "publication": "Critical Insights: Benjamin Franklin.",
        "issue": "Pasadena, CA: Salem Press, 2009",
        "type": "critical anthology"
      },
      {
        "title": "Bernard Share, Inish",
        "publication": "Indiana Review",
        "issue": "31, No. 2 (Winter 2009): 180-181",
        "type": "book review"
      }
    ]
*/