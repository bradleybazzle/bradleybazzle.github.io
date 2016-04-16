DROP TABLE IF EXISTS `restapi`.`press`;

CREATE TABLE `restapi`.`press` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `quote` varchar(300) DEFAULT NULL,
  `reviewer` varchar(100) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `publication` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*
*/

#TRUNCATE TABLE `restapi`.`press`;

INSERT INTO `restapi`.`press`
(
`title`,
`quote`,
`reviewer`
)
VALUES
(
    "Trash Mountain",
    "I felt the subversive, humorous spirit of Mark Twain in the story, Twain if he lived by a dump instead of a river. There's life on the page here—on every page.",
    "Stuart Dybek"
);

INSERT INTO `restapi`.`press`
(
`title`,
`quote`,
`reviewer`,
`url`,
`publication`
)
VALUES
(
    "Crimes of the Video Age",
    "Bazzle’s story is one of the finest I have ever read; it channels Bradbury to address serious social realities with a near Shakespearean scope. The story is very brisk, with humor and terror managed expertly.",
    "Mary Florio",
    "http://www.newpages.com/item/5516-new-ohio-review",
    "New Pages"
);

INSERT INTO `restapi`.`press`
(
`title`,
`quote`,
`reviewer`,
`url`,
`publication`
)
VALUES
(
    "The Case Against Dr. Smetana",
    "…fanciful, strange, and absurd",
    "David Backer",
    "http://fictiondaily.org/2012/06/15/long-621/",
    "Fiction Daily"
);

INSERT INTO `restapi`.`press`
(
`title`,
`quote`,
`reviewer`,
`url`,
`publication`
)
VALUES
(
    "Magellan",
    "…a creative meditation on what is contained and what is erased from the historical record",
    "Shannon Smith",
    "http://www.newpages.com/item/4705-the-iowa-review",
    "New Pages"
);

INSERT INTO `restapi`.`press`
(
`title`,
`quote`,
`reviewer`,
`url`,
`publication`
)
VALUES
(
    "Magellan",
    "A delightful, alchemical mixture of realism and complete bullshit . . . the most thrilling story I read the entire year.",
    "Bryan Castille, Fiction Editor",
    "http://www.iowareview.org/blog/why-we%E2%80%99re-excited-publish%E2%80%A6%E2%80%9Cmagellan%E2%80%9D-bradley-bazzle",
    "The Iowa Review"
);
