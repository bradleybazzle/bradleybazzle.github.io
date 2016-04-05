bBazApp
.service('storiesService', function() {
  this.getStories = function() {
    // When I tried converting this array of objects into one object whose properties were each story objects,
    // the order of story properties created here was not maintained by ng-repeat.
    // JavaScript does not support associative arrays.
    var stories = [
  /*
    {
      title: "",
      publication: "",
      issue: "",
      type: "",
      url: "",
      note: "",
      pClasses: {
      }
    },
  */
      {
        title: "In the Presence of the Actor",
        publication: "Copper Nickel"
      },
      {
        title: "Trash Mountain",
        publication: "Third Coast",
        issue: "40 & 41 (Fall 2015): 120-133",
        note: "* Winner of the 2015 Jaimy Gordon Prize, judged by Stuart Dybek"
      },
      {
        title: "The Beard of Human Weakness",
        publication: "Web Conjunctions",
        issue: "(January 19, 2016):",
        url: "http://www.conjunctions.com/webcon/bazzle16.htm"
      },
      {
        title: "Crimes of the Video Age",
        publication: "New Ohio Review",
        issue: "14 (Fall 2013): 120-130"
      },
      {
        title: "A Complaint",
        publication: "NER Digital",
        issue: "(September 4, 2013):",
        url: "http://www.nereview.com/2013/09/04/a-complaint-by-bradley-bazzle/"
      },
      {
        title: "Cinder Blocks",
        publication: "Epoch",
        issue: "No. 1 (February 2013): 3-25"
      },
      {
        title: "The Milkman",
        publication: "The Beloit Fiction Journal",
        issue: "25 (Spring 2012): 66-75"
      },
      {
        title: "The Case Against Dr. Smetana",
        publication: "Phoebe",
        issue: "41, No. 2 (Spring 2012):",
        url: "http://www.phoebejournal.com/the-case-against-dr-smetana/"
      },
      {
        title: "Magellan",
        publication: "The Iowa Review",
        issue: "41, No. 3 (winter 2011-2012): 1-15",
        pid: "magellan-item",
        url: "http://www.iowareview.org/from-the-issue/volume-41-issue-3-%E2%80%94-winter-2011/magellan",
        pClasses: {
          magellanItem: "true",
          animateBgColor: ""
        }
      },
      {
        title: "Gift Horse",
        publication: "New England Review",
        issue: "31, No. 4 (winter 2010-2011): 54-68",
        url: "http://cat.middlebury.edu/~nereview/31-4/Bazzle.htm"
      },
      {
        title: "Bramilton’s Fury",
        publication: "Splash of Red",
        issue: "(July 9, 2010): online"
      },
      {
        title: "The List",
        publication: "Cold Mountain Review",
        issue: "37, No. 2 (spring 2009): 61-64"
      },
      {
        title: "The Dictionary",
        publication: "Opium",
        issue: "7 (2008): 95-97"
      }
    ];

    return stories;
  }

})
.service("othersService", function() {
  this.getOthers = function() {
  /*
    {
      title: "",
      publication: "",
      issue: "",
      type: "",
      url: "",
      note: "",
      pClasses: {
      }
    },
  */
    var others = [
      {
        title: "Flag on the Moon: the Beast of Yucca Flats",
        publication: "NER Digital",
        issue: "(June 21, 2012):",
        type: "creative nonfiction",
        pid: "beast-item",
        url: "http://www.nereview.com/tag/the-beast-of-yucca-flats/",
        pClasses: {
          beastItem: "true",
          animateBgColor: ""
        }
      },
      {
        title: "Maceo Montoya, The Scoundrel and the Optimist",
        publication: "Indiana Review",
        issue: "32, No. 1 (Summer 2010): 176-177",
        type: "book review"
      },
      {
        title: "The Paris Review Perspective",
        publication: "Critical Insights: Benjamin Franklin.",
        issue: "Pasadena, CA: Salem Press, 2009",
        type: "critical anthology"
      },
      {
        title: "Bernard Share, Inish",
        publication: "Indiana Review",
        issue: "31, No. 2 (Winter 2009): 180-181",
        type: "book review"
      }
    ];

    return others;
  }

})
.service("pressService", function() {
  this.getPressAry = function() {
    var pressAry = [
    /*
      {
        title: "",
        quote: "",
        reviewer: "",
        url: "",
        publication: ""
      },
    */
      {
        title: "Trash Mountain",
        quote: "I felt the subversive, humorous spirit of Mark Twain in the story, Twain if he lived by a dump instead of a river. There's life on the page here—on every page.",
        reviewer: "Stuart Dybek"
      },
      {
        title: "Crimes of the Video Age",
        quote: "Bazzle’s story is one of the finest I have ever read; it channels Bradbury to address serious social realities with a near Shakespearean scope. The story is very brisk, with humor and terror managed expertly.",
        reviewer: "Mary Florio",
        url: "http://www.newpages.com/item/5516-new-ohio-review",
        publication: "New Pages"
      },
      {
        title: "The Case Against Dr. Smetana",
        quote: "…fanciful, strange, and absurd",
        reviewer: "David Backer",
        url: "http://fictiondaily.org/2012/06/15/long-621/",
        publication: "Fiction Daily"
      },
      {
        title: "Magellan",
        quote: "…a creative meditation on what is contained and what is erased from the historical record",
        reviewer: "Shannon Smith",
        url: "http://www.newpages.com/item/4705-the-iowa-review",
        publication: "New Pages"
      },
      {
        title: "Magellan",
        quote: "A delightful, alchemical mixture of realism and complete bullshit . . . the most thrilling story I read the entire year.",
        reviewer: "Bryan Castille, Fiction Editor",
        url: "http://www.iowareview.org/blog/why-we%E2%80%99re-excited-publish%E2%80%A6%E2%80%9Cmagellan%E2%80%9D-bradley-bazzle",
        publication: "The Iowa Review"
      }
    ];

    return pressAry;
  }
});