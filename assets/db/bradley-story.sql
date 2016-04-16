DROP TABLE IF EXISTS `restapi`.`story`;

CREATE TABLE `restapi`.`story` (
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
# TRUNCATE TABLE `restapi`.`story`;

INSERT INTO `restapi`.`story`
(
`title`,
`publication`
)
VALUES
(
    "In the Presence of the Actor",
    "Copper Nickel"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`note`
)
VALUES
(
    "Trash Mountain",
    "Third Coast",
    "40 & 41 (Fall 2015): 120-133",
    "* Winner of the 2015 Jaimy Gordon Prize, judged by Stuart Dybek"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`url`)
VALUES
(
    "The Beard of Human Weakness",
    "Web Conjunctions",
    "(January 19, 2016):",
    "http://www.conjunctions.com/webcon/bazzle16.htm"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "Crimes of the Video Age",
    "New Ohio Review",
    "14 (Fall 2013): 120-130"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`url`
)
VALUES
(
    "A Complaint",
    "NER Digital",
    "(September 4, 2013):",
    "http://www.nereview.com/2013/09/04/a-complaint-by-bradley-bazzle/"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "Cinder Blocks",
    "Epoch",
    "No. 1 (February 2013): 3-25"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "The Milkman",
    "The Beloit Fiction Journal",
    "25 (Spring 2012): 66-75"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`url`
)
VALUES
(
    "The Case Against Dr. Smetana",
    "Phoebe",
    "41, No. 2 (Spring 2012):",
    "http://www.phoebejournal.com/the-case-against-dr-smetana/"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`url`
)
VALUES
(
    "Magellan",
    "The Iowa Review",
    "41, No. 3 (winter 2011-2012): 1-15",
    "http://www.iowareview.org/from-the-issue/volume-41-issue-3-%E2%80%94-winter-2011/magellan"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`,
`url`
)
VALUES
(
    "Gift Horse",
    "New England Review",
    "31, No. 4 (winter 2010-2011): 54-68",
    "http://cat.middlebury.edu/~nereview/31-4/Bazzle.htm"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "Bramilton’s Fury",
    "Splash of Red",
    "(July 9, 2010): online"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "The List",
    "Cold Mountain Review",
    "37, No. 2 (spring 2009): 61-64"
);

INSERT INTO `restapi`.`story`
(
`title`,
`publication`,
`issue`
)
VALUES
(
    "The Dictionary",
    "Opium",
    "7 (2008): 95-97"
);
