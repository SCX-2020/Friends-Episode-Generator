const episodes = [
  //第一季
  {
    title: "The One Where Monica Gets a Roommate",
    season: 1,
    episode: 1,
    rating: 8.1,
    airdate: "22 Sep. 1994",
    summary: 'Monica and the gang introduce Rachel to the "real" world after she leaves her fiancé at the altar.',
    url: "https://www.bilibili.com/bangumi/play/ep468227/"
  },
  {
    title: "The One with the Sonogram at the End",
    season: 1,
    episode: 2,
    rating: 7.9,
    airdate: "29 Sep. 1994",
    summary: "Ross finds out his ex-wife is pregnant. Rachel returns her engagement ring to Barry. Monica becomes stressed when her and Ross's parents come to visit.",
    url: "https://www.bilibili.com/bangumi/play/ep468228/"
  },
  {
    title: "The One with the Thumb",
    season: 1,
    episode: 3,
    rating: 8.0,
    airdate: "6 Oct. 1994",
    summary: "Monica becomes irritated when everyone likes her new boyfriend more than she does. Chandler resumes his smoking habit. Phoebe is given $7000 when she finds a thumb in a can of soda.",
    url: "https://www.bilibili.com/bangumi/play/ep468229/"
  },
  {
    title: "The One with George Stephanopoulos",
    season: 1,
    episode: 4,
    rating: 7.9,
    airdate: "13 Oct. 1994",
    summary: "Joey and Chandler take Ross to a hockey game to take his mind off the anniversary of the first time he slept with Carol, while the girls become depressed when they realize they don't have a 'plan'.",
    url: "https://www.bilibili.com/bangumi/play/ep468253/"
  },
  {
    title: "The One with the East German Laundry Detergent",
    season: 1,
    episode: 5,
    rating: 8.3,
    airdate: "20 Oct. 1994",
    summary: "Eager to spend time with Rachel, Ross pretends his washroom is rat-infested so he can join her at the laundromat. Meanwhile, Joey has Monica pose as his girlfriend, and Chandler struggles to break up with his girlfriend.",
    url: "https://www.bilibili.com/bangumi/play/ep468255/"
  },
  {
    title: "The One with the Butt",
    season: 1,
    episode: 6,
    rating: 8.0,
    airdate: "27 Oct. 1994",
    summary: "Monica's obsessiveness is put to the test after Rachel cleans the apartment. Joey lands a film role as Al Pacino's butt double. Chandler enjoys a relationship with all of the fun but none of the responsibility.",
    url: "https://www.bilibili.com/bangumi/play/ep468258/"
  },
  {
    title: "The One with the Blackout",
    season: 1,
    episode: 7,
    rating: 8.9,
    airdate: "3 Nov. 1994",
    summary: "When New York suffers from a blackout, Ross tries to tell Rachel that he likes her, and Chandler gets stuck in an ATM vestibule with a model.",
    url: "https://www.bilibili.com/bangumi/play/ep468262/"
  },
  {
    title: "The One Where Nana Dies Twice",
    season: 1,
    episode: 8,
    rating: 8.0,
    airdate: "10 Nov. 1994",
    summary: "Monica and Ross mourn the loss of their grandmother. Chandler is shocked to find that people think he is gay.",
    url: "https://www.bilibili.com/bangumi/play/ep468269/"
  },
  {
    title: "The One Where Underdog Gets Away",
    season: 1,
    episode: 9,
    rating: 8.1,
    airdate: "17 Nov. 1994",
    summary: "The gang's plans for Thanksgiving go awry after they get locked out of Monica and Rachel's apartment.",
    url: "https://www.bilibili.com/bangumi/play/ep468274/"
  },
  {
    title: "The One with the Monkey",
    season: 1,
    episode: 10,
    rating: 7.9,
    airdate: "15 Dec. 1994",
    summary: "The gang make (and break) a pact not to bring dates to their New Years Eve party. Phoebe starts dating a scientist. Ross compensates for his loneliness by getting a monkey.",
    url: "https://www.bilibili.com/bangumi/play/ep468276/"
  },
  {
    title: "The One with Mrs. Bing",
    season: 1,
    episode: 11,
    rating: 8.0,
    airdate: "5 Jan. 1995",
    summary: "Chandler's flamboyant romance-novelist mother comes to visit, and Joey catches her kissing Ross. Meanwhile, Monica and Phoebe fight over a guy in a coma.",
    url: "https://www.bilibili.com/bangumi/play/ep468281/"
  },
  {
    title: "The One with the Dozen Lasagnas",
    season: 1,
    episode: 12,
    rating: 8.0,
    airdate: "12 Jan. 1995",
    summary: "Rachel and Paolo's relationship hits a snag when he makes a pass at Phoebe. Ross refuses to find out the sex of his baby until it's born. Chandler and Joey go shopping for a new kitchen table.",
    url: "https://www.bilibili.com/bangumi/play/ep468299/"
  },
  {
    title: "The One with the Boobies",
    season: 1,
    episode: 13,
    rating: 8.5,
    airdate: "19 Jan. 1995",
    summary: "Joey finds out his dad has a mistress. Rachel tries to even the score after Chandler inadvertently catches a glimpse of her breasts. Phoebe dates a shrink who analyzes the gang.",
    url: "https://www.bilibili.com/bangumi/play/ep468302/"
  },
  {
    title: "The One with the Candy Hearts",
    season: 1,
    episode: 14,
    rating: 8.1,
    airdate: "9 Feb. 1995",
    summary: "As Valentine's Day approaches; Ross and his date end up at the same restaurant as Carol and Susan, Joey inadvertently sets Chandler up on a blind date with Janice, and the girls burn mementos of their old boyfriends.",
    url: "https://www.bilibili.com/bangumi/play/ep468305/"
  },
  {
    title: "The One with the Stoned Guy",
    season: 1,
    episode: 15,
    rating: 8.1,
    airdate: "16 Feb. 1995",
    summary: "Monica cooks a gourmet meal for a restaurateur who is looking for a new chef, however he arrives at the apartment stoned. Meanwhile, Ross tries to master 'dirty talk'.",
    url: "https://www.bilibili.com/bangumi/play/ep468306/"
  },
  {
    title: "The One with Two Parts: Part 1",
    season: 1,
    episode: 16,
    rating: 8.0,
    airdate: "23 Feb. 1995",
    summary: "Phoebe feels neglected when Joey falls for her twin sister. Chandler struggles to fire an attractive co-worker. Ross attends Lamaze classes with Carol and Susan.",
    url: "https://www.bilibili.com/bangumi/play/ep468307/"
  },
  {
    title: "The One with Two Parts: Part 2",
    season: 1,
    episode: 17,
    rating: 8.3,
    airdate: "23 Feb. 1995",
    summary: "Rachel switches identities with Monica so she can use her health insurance. Meanwhile, Ursula continues to come between Phoebe and Joey.",
    url: "https://www.bilibili.com/bangumi/play/ep468308/"
  },
  {
    title: "The One with All the Poker",
    season: 1,
    episode: 18,
    rating: 8.7,
    airdate: "2 Mar. 1995",
    summary: "As Rachel interviews for a new job, the girls take on the guys in a game of poker.",
    url: "https://www.bilibili.com/bangumi/play/ep468310/"
  },
  {
    title: "The One Where the Monkey Gets Away",
    season: 1,
    episode: 19,
    rating: 8.0,
    airdate: "9 Mar. 1995",
    summary: "The gang frantically search for Ross's monkey Marcel after Rachel loses him.",
    url: "https://www.bilibili.com/bangumi/play/ep468311/"
  },
  {
    title: "The One with the Evil Orthodontist",
    season: 1,
    episode: 20,
    rating: 7.7,
    airdate: "6 Apr. 1995",
    summary: "Rachel and Barry start dating again, despite the fact that he's now engaged to Mindy; Chandler goes nuts when a woman he likes won't return his phone calls.",
    url: "https://www.bilibili.com/bangumi/play/ep468313/"
  },
  {
    title: "The One with the Fake Monica",
    season: 1,
    episode: 21,
    rating: 7.7,
    airdate: "27 Apr. 1995",
    summary: "Monica befriends the woman who stole her credit card. Ross is forced to give away Marcel. Joey tries to come up with a less ethnic-sounding stage name.",
    url: "https://www.bilibili.com/bangumi/play/ep468314/"
  },
  {
    title: "The One with the Ick Factor",
    season: 1,
    episode: 22,
    rating: 8.1,
    airdate: "4 May 1995",
    summary: "Summary: Monica gets a shock when she finds out her boyfriend is a high school student. Chandler finds out his colleagues don't like him when Phoebe temps as his secretary.",
    url: "https://www.bilibili.com/bangumi/play/ep468316/"
  },
  {
    title: "The One with the Birth",
    season: 1,
    episode: 23,
    rating: 8.6,
    airdate: "11 May 1995",
    summary: "As Carol goes into labor; Ross and Susan argue, Rachel flirts with Carol's doctor, and Joey assists a pregnant single mother.",
    url: "https://www.bilibili.com/bangumi/play/ep468317/"
  },
  {
    title: "The One Where Rachel Finds Out",
    season: 1,
    episode: 24,
    rating: 8.8,
    airdate: "18 May 1995",
    summary: "As Ross leaves for China, Chandler accidentally reveals Ross's feelings for Rachel. Joey takes part in a fertility study and is unable to sleep with his new girlfriend.",
    url: "https://www.bilibili.com/bangumi/play/ep468318/"
  },

  //第二季
  {
    title: "The One with Ross's New Girlfriend",
    season: 2,
    episode: 1,
    rating: 8.4,
    airdate: "21 Sep. 1995",
    summary: "Rachel waits for Ross at the airport, unaware he has a new girlfriend. Meanwhile, Chandler has a frightening experience with Joey's tailor, and Phoebe gives Monica a bad haircut.",
    url: "https://www.bilibili.com/bangumi/play/ep468251/"
  },
  {
    title: "The One with the Breast Milk",
    season: 2,
    episode: 2,
    rating: 8.0,
    airdate: "28 Sep. 1995",
    summary: "Monica goes shopping with Julie and tries to keep it a secret from Rachel. Ross is grossed out by Carol's breast milk. At his day job, Joey competes with a fellow cologne spritzer.",
    url: "https://www.bilibili.com/bangumi/play/ep468252/"
  },
  {
    title: "The One Where Heckles Dies",
    season: 2,
    episode: 3,
    rating: 8.2,
    airdate: "5 Oct. 1995",
    summary: "Mr. Heckles dies and leaves all his possessions to Monica and Rachel, Chandler worries he will die alone just like him. Meanwhile, Rachel and Monica argue over a lamp, Phoebe and Ross argue over evolution.",
    url: "https://www.bilibili.com/bangumi/play/ep468254/"
  },
  {
    title: "The One with Phoebe's Husband",
    season: 2,
    episode: 4,
    rating: 7.8,
    airdate: "12 Oct. 1995",
    summary: "When the gang find out Phoebe married a gay Canadian ice dancer for a green card, more of their secrets are revealed. Meanwhile, Rachel gives Ross bad advice on his relationship with Julie.",
    url: "https://www.bilibili.com/bangumi/play/ep468256/"
  },
  {
    title: "The One with Five Steaks and an Eggplant",
    season: 2,
    episode: 5,
    rating: 8.1,
    airdate: "19 Oct. 1995",
    summary: "The gang are divided by income issues; Monica, Ross and Chandler make more money, while Rachel, Phoebe, and Joey don't. Chandler also uses a case of mistaken identity to his advantage.",
    url: "https://www.bilibili.com/bangumi/play/ep468259/"
  },
  {
    title: "The One with the Baby on the Bus",
    season: 2,
    episode: 6,
    rating: 8.5,
    airdate: "2 Nov. 1995",
    summary: "Joey and Chandler are left to babysit Ben when Monica takes Ross to the hospital. Meanwhile, Phoebe loses her singing gig at Central Perk to a professional singer.",
    url: "https://www.bilibili.com/bangumi/play/ep468260/"
  },
  {
    title: "The One Where Ross Finds Out",
    season: 2,
    episode: 7,
    rating: 8.9,
    airdate: "9 Nov. 1995",
    summary: "A drunken Rachel calls Ross and reveals her feelings for him on his answering machine. Meanwhile, Monica keeps busy by being Chandler's personal trainer and Phoebe constantly wonders why her current boyfriend won't sleep with her.",
    url: "https://www.bilibili.com/bangumi/play/ep468263/"
  },
  {
    title: "The One with the List",
    season: 2,
    episode: 8,
    rating: 8.4,
    airdate: "16 Nov. 1995",
    summary: "With help from Chandler and Joey, Ross makes a list of pros and cons to decide whether to be with Julie or Rachel. Meanwhile, Monica gets a job making dessert with a disgusting synthetic chocolate substitute.",
    url: "https://www.bilibili.com/bangumi/play/ep468264/"
  },
  {
    title: "The One with Phoebe's Dad",
    season: 2,
    episode: 9,
    rating: 7.8,
    airdate: "14 Dec. 1995",
    summary: "Phoebe tracks down her father, but isn't sure whether she should meet him.",
    url: "https://www.bilibili.com/bangumi/play/ep468265/"
  },
  {
    title: "The One with Russ",
    season: 2,
    episode: 10,
    rating: 7.9,
    airdate: "4 Jan. 1996",
    summary: "Monica gets back together with 'Fun Bobby' and realizes why he is always so upbeat. Rachel starts dating a guy called Russ who bears an uncanny resemblance to Ross.",
    url: "https://www.bilibili.com/bangumi/play/ep468266/"
  },
  {
    title: "The One with the Lesbian Wedding",
    season: 2,
    episode: 11,
    rating: 7.9,
    airdate: "18 Jan. 1996",
    summary: "Rachel's mom comes to visit with big news. Monica caters Carol and Susan's wedding. Phoebe becomes 'possessed' by the spirit of a recently deceased client.",
    url: "https://www.bilibili.com/bangumi/play/ep468267/"
  },
  {
    title: "The One After the Superbowl: Part 1",
    season: 2,
    episode: 12,
    rating: 8.5,
    airdate: "28 Jan. 1996",
    summary: "Ross goes to visit Marcel whilst on a trip to California and discovers he is working in commercials. Joey receives a fan letter from an attractive but unstable woman. Phoebe is asked to sing for children at a library.",
    url: "https://www.bilibili.com/bangumi/play/ep468268/"
  },
  {
    title: "The One After the Superbowl: Part 2",
    season: 2,
    episode: 13,
    rating: 8.6,
    airdate: "28 Jan. 1996",
    summary: "Ross finds Marcel on the set of a new movie, where Chandler bumps into a former schoolmate. Meanwhile, Rachel and Monica compete for the affections of Jean-Claude Van Damme.",
    url: "https://www.bilibili.com/bangumi/play/ep468270/"
  },
  {
    title: "The One with the Prom Video",
    season: 2,
    episode: 14,
    rating: 9.3,
    airdate: "1 Feb. 1996",
    summary: "Monica struggles to tell her parents she is unemployed. Joey gives Chandler a hideous bracelet. The gang watch a video from Monica and Rachel's prom.",
    url: "https://www.bilibili.com/bangumi/play/ep468271/"
  },
  {
    title: "The One Where Ross and Rachel... You Know",
    season: 2,
    episode: 15,
    rating: 8.7,
    airdate: "8 Feb. 1996",
    summary: "Monica becomes infatuated with a friend of her parents when she caters a party for him. Ross and Rachel go on their first date. Joey and Chandler refuse to move when they get a new TV and two armchairs.",
    url: "https://www.bilibili.com/bangumi/play/ep468273/"
  },
  {
    title: "The One Where Joey Moves Out",
    season: 2,
    episode: 16,
    rating: 8.5,
    airdate: "15 Feb. 1996",
    summary: "Joey and Chandler's friendship is jeopardized when Joey decides to move out. Monica worries about her parents finding out about her relationship with Richard when they attend a party together. Rachel and Phoebe go to get tattoos.",
    url: "https://www.bilibili.com/bangumi/play/ep468275/"
  },
  {
    title: "The One Where Eddie Moves In",
    season: 2,
    episode: 17,
    rating: 8.1,
    airdate: "22 Feb. 1996",
    summary: "Chandler gets a new roommate. Phoebe gets the chance to make a music video for her song Smelly Cat. Ross and Monica clash when he is always at her and Rachel's apartment.",
    url: "https://www.bilibili.com/bangumi/play/ep468278/"
  },
  {
    title: "The One Where Dr. Ramoray Dies",
    season: 2,
    episode: 18,
    rating: 8.3,
    airdate: "21 Mar. 1996",
    summary: "Joey's soap opera character is killed off after he brags in an interview that he writes his own lines. Chandler is unnerved by Eddie's strange behavior, while Ross and Rachel compare their past lovers as do Richard and Monica.",
    url: "https://www.bilibili.com/bangumi/play/ep468279/"
  },
  {
    title: "The One Where Eddie Won't Go",
    season: 2,
    episode: 19,
    rating: 8.4,
    airdate: "28 Mar. 1996",
    summary: "Chandler demands that Eddie move out; however, he doesn't seem to get the message. Meanwhile, a book on empowerment for women inspires the girls. In order to pay his bills, Ross convinces Joey to audition for a role he doesn't want.",
    url: "https://www.bilibili.com/bangumi/play/ep468280/"
  },
  {
    title: "The One Where Old Yeller Dies",
    season: 2,
    episode: 20,
    rating: 8.0,
    airdate: "4 Apr. 1996",
    summary: "Phoebe's world view is shattered when she learns how Old Yeller really ends. Monica becomes jealous when Richard starts hanging out with Chandler and Joey. Rachel panics when she learns that Ross has planned their whole life together.",
    url: "https://www.bilibili.com/bangumi/play/ep468297/"
  },
  {
    title: "The One with the Bullies",
    season: 2,
    episode: 21,
    rating: 8.0,
    airdate: "25 Apr. 1996",
    summary: "Chandler and Ross run into two bullies at Central Perk. Monica tries her luck at the stock market to avoid taking a job at a 1950s themed diner. Phoebe drives upstate for a second time to meet her father while Joey and Rachel accompany her.",
    url: "https://www.bilibili.com/bangumi/play/ep468298/"
  },
  {
    title: "The One with the Two Parties",
    season: 2,
    episode: 22,
    rating: 8.9,
    airdate: "2 May 1996",
    summary: "Chaos ensues when Rachel's recently divorced parents show up at her surprise birthday party, so the gang has to find ways to keep her parents separated otherwise they'll start fighting.",
    url: "https://www.bilibili.com/bangumi/play/ep468300/"
  },
  {
    title: "The One with the Chicken Pox",
    season: 2,
    episode: 23,
    rating: 7.9,
    airdate: "9 May 1996",
    summary: "Phoebe catches chicken pox just as an old flame arrives in town on leave from the Navy. Joey gets a job at Chandler's office. Monica is upset that Richard doesn't have any quirks.",
    url: "https://www.bilibili.com/bangumi/play/ep468303/"
  },
  {
    title: "The One with Barry and Mindy's Wedding",
    season: 2,
    episode: 24,
    rating: 8.1,
    airdate: "16 May 1996",
    summary: "Rachel reluctantly agrees to be maid of honor at her ex-fiancé Barry's wedding. Monica ponders her future with Richard. Joey has to practice kissing guys to get a role in Warren Beatty's new movie but Ross and Chandler are unwilling to help him.",
    url: "https://www.bilibili.com/bangumi/play/ep468304/"
  },

  //第三季
  {
    title: "The One with the Princess Leia Fantasy",
    season: 3,
    episode: 1,
    rating: 8.3,
    airdate: "19 Sep. 1996",
    summary: "Monica suffers from insomnia and depression following her breakup with Richard. Joey struggles to accept Chandler and Janice's relationship. Ross confides in Rachel about one of his fantasies.",
    url: "https://www.bilibili.com/bangumi/play/ep511696/"
  },
  {
    title: "The One Where No One's Ready",
    season: 3,
    episode: 2,
    rating: 8.9,
    airdate: "26 Sep. 1996",
    summary: "A stressed Ross desperately and insistently tries to get the rest of the gang ready for a black tie event at the museum, while Joey and Chandler clash over personal belongings and personal space.",
    url: "https://www.bilibili.com/bangumi/play/ep511695/"
  },
  {
    title: "The One with the Jam",
    season: 3,
    episode: 3,
    rating: 7.9,
    airdate: "3 Oct. 1996",
    summary: "Monica tries to get over Richard by using her free time to make jam and considers artificial insemination through a sperm bank. Phoebe is stalked by a man who mistakes her for Ursula.",
    url: "https://www.bilibili.com/bangumi/play/ep511694/"
  },
  {
    title: "The One with the Metaphorical Tunnel",
    season: 3,
    episode: 4,
    rating: 7.9,
    airdate: "10 Oct. 1996",
    summary: "Chandler tries to get over his fear of commitment. Phoebe poses as Joey's agent after she forgets to tell him about an audition. Ross panics after seeing Ben play with a Barbie doll and tries to convince him to play with more manly toys.",
    url: "https://www.bilibili.com/bangumi/play/ep511693/"
  },
  {
    title: "The One with Frank Jr",
    season: 3,
    episode: 5,
    rating: 8.0,
    airdate: "17 Oct. 1996",
    summary: "Phoebe has trouble bonding with her half-brother Frank when he comes to visit. Joey attempts to build an entertainment center. Ross is challenged to name the five celebrities he'd like to sleep with most.",
    url: "https://www.bilibili.com/bangumi/play/ep511692/"
  },
  {
    title: "The One with the Flashback",
    season: 3,
    episode: 6,
    rating: 9.0,
    airdate: "31 Oct. 1996",
    summary: "The gang remember the events three years ago, when several of them almost slept together.",
    url: "https://www.bilibili.com/bangumi/play/ep511700/"
  },
  {
    title: "The One with the Race Car Bed",
    season: 3,
    episode: 7,
    rating: 8.1,
    airdate: "7 Nov. 1996",
    summary: "Monica buys a bed from Janice's soon to be ex husband. Ross and Rachel have dinner with Rachel's father. Joey leads an acting class.",
    url: "https://www.bilibili.com/bangumi/play/ep511699/"
  },
  {
    title: "The One with the Giant Poking Device",
    season: 3,
    episode: 8,
    rating: 8.2,
    airdate: "14 Nov. 1996",
    summary: "Chandler is devastated after Joey tells him he saw Janice kissing her ex-husband. Monica accidentally bumps Ben's head into a post when she and Rachel babysit. Phoebe is paranoid if she goes to dentist someone she knows will die.",
    url: "https://www.bilibili.com/bangumi/play/ep511698/"
  },
  {
    title: "The One with the Football",
    season: 3,
    episode: 9,
    rating: 8.9,
    airdate: "21 Nov. 1996",
    summary: 'Old sibling rivalry between Monica and Ross resurfaces and postpones Thanksgiving dinner when the gang decide to play a game of "touch" football.',
    url: "https://www.bilibili.com/bangumi/play/ep511697/"
  },
  {
    title: "The One Where Rachel Quits",
    season: 3,
    episode: 10,
    rating: 8.0,
    airdate: "12 Dec. 1996",
    summary: "Ross accidentally breaks a little girl's leg and tries to help her sell boxes of cookies which recreates Monica's childhood fixation. Rachel quits her job at Central Perk and Joey's Christmas tree selling conflicts with Phoebe's principles.",
    url: "https://www.bilibili.com/bangumi/play/ep511706/"
  },
  {
    title: "The One Where Chandler Can't Remember Which Sister",
    season: 3,
    episode: 11,
    rating: 8.4,
    airdate: "9 Jan. 1997",
    summary: "A drunken Chandler fools around with one of Joey's sisters - but he can't remember which one. Ross becomes skeptical when a guy at the diner gets Rachel an interview for a position at Bloomingdales.",
    url: "https://www.bilibili.com/bangumi/play/ep511705/"
  },
  {
    title: "The One with All the Jealousy",
    season: 3,
    episode: 12,
    rating: 8.1,
    airdate: "16 Jan. 1997",
    summary: "Ross becomes insanely jealous of Mark. Monica hooks up with a co-worker, who writes her a poem with a hidden meaning. One of Joey's numerous lies on his resume is exposed when he takes part in a Broadway production.",
    url: "https://www.bilibili.com/bangumi/play/ep511704/"
  },
  {
    title: "The One Where Monica and Richard Are Just Friends",
    season: 3,
    episode: 13,
    rating: 8.1,
    airdate: "30 Jan. 1997",
    summary: 'Monica\'s willpower is tested when she bumps into Richard. Joey and Rachel exchange their favorite books. Phoebe dates an athletic guy who doesn\'t realize he has a "wardrobe malfunction".',
    url: "https://www.bilibili.com/bangumi/play/ep511703/"
  },
  {
    title: "The One with Phoebe's Ex-Partner",
    season: 3,
    episode: 14,
    rating: 7.7,
    airdate: "6 Feb. 1997",
    summary: " Phoebe is reunited with her former singing partner. Chandler dates a woman with a prosthetic leg. Ross goes to a fashion lecture with Rachel when he hears she is going with Mark.",
    url: "https://www.bilibili.com/bangumi/play/ep511702/"
  },
  {
    title: "The One Where Ross and Rachel Take a Break",
    season: 3,
    episode: 15,
    rating: 8.4,
    airdate: "13 Feb. 1997",
    summary: "Ross seeks solace at a party after a bitter fight with Rachel and ends up in the arms of another woman; Phoebe's date needs an interpreter to communicate.",
    url: "https://www.bilibili.com/bangumi/play/ep511701/"
  },
  {
    title: "The One with the Morning After",
    season: 3,
    episode: 16,
    rating: 9.0,
    airdate: "20 Feb. 1997",
    summary: "Ross is guilt-ridden after sleeping with Chloe and desperately tries to stop Rachel from finding out and when she does, the rest of the gang listen to them argue and end up trapped in Monica's room for the rest of the night.",
    url: "https://www.bilibili.com/bangumi/play/ep511711/"
  },
  {
    title: "The One Without the Ski Trip",
    season: 3,
    episode: 17,
    rating: 8.2,
    airdate: "6 Mar. 1997",
    summary: "Monica, Chandler, Phoebe and Joey become stuck in the middle of Ross and Rachel's fight following their break-up.",
    url: "https://www.bilibili.com/bangumi/play/ep511710/"
  },
  {
    title: "The One with the Hypnosis Tape",
    season: 3,
    episode: 18,
    rating: 8.3,
    airdate: "13 Mar. 1997",
    summary: "Monica goes out with a guy who turns out to be a software billionaire. Chandler's stop smoking hypnosis tape has an unexpected side effect. Phoebe's brother Frank makes a surprise announcement that he is getting married - to a woman twice his age.",
    url: "https://www.bilibili.com/bangumi/play/ep511709/"
  },
  {
    title: "The One with the Tiny T-Shirt",
    season: 3,
    episode: 19,
    rating: 8.0,
    airdate: "27 Mar. 1997",
    summary: "Rachel goes on her first date, after splitting from Ross, with Mark. Joey clashes with his co-star in his new play. Monica continues to date Pete, even though she is still not attracted to him.",
    url: "https://www.bilibili.com/bangumi/play/ep511708/"
  },
  {
    title: "The One with the Dollhouse",
    season: 3,
    episode: 20,
    rating: 7.9,
    airdate: "10 Apr. 1997",
    summary: "Monica's aunt dies and leaves her an antique dollhouse that she doesn't want Phoebe to play with; Rachel regrets setting up Chandler with her boss, Joanna.",
    url: "https://www.bilibili.com/bangumi/play/ep511707/"
  },
  {
    title: "The One with the Chick and the Duck",
    season: 3,
    episode: 21,
    rating: 8.6,
    airdate: "17 Apr. 1997",
    summary: "Joey buys a chick for him and Chandler, Pete offers Monica a job at his restaurant but she is undecided if she should accept it. Ross shows his continued feelings for Rachel when he gives up being on TV for her.",
    url: "https://www.bilibili.com/bangumi/play/ep511716/"
  },
  {
    title: "The One with the Screamer",
    season: 3,
    episode: 22,
    rating: 8.1,
    airdate: "24 Apr. 1997",
    summary: "Ross witnesses Rachel's date screaming at people. Meanwhile, Joey becomes upset when Kate is offered a job in Los Angeles; Phoebe refuses to hang up the phone when she is placed on hold by her phone company.",
    url: "https://www.bilibili.com/bangumi/play/ep511715/"
  },
  {
    title: "The One with Ross's Thing",
    season: 3,
    episode: 23,
    rating: 7.9,
    airdate: "1 May 1997",
    summary: "Ross seeks medical help when he finds a mysterious skin condition on his backside. Phoebe struggles to choose between two guys; Monica can\'t decide what to do about Pete when she thinks he is going to propose.",
    url: "https://www.bilibili.com/bangumi/play/ep511714/"
  },
  {
    title: "The One with the Ultimate Fighting Champion",
    season: 3,
    episode: 24,
    rating: 8.0,
    airdate: "8 May 1997",
    summary: "Monica struggles to support Pete in his goal to become the Ultimate Fighting Champion. Chandler is uneasy when his boss playfully slaps his butt. Rachel becomes jealous when Ross starts dating a woman that was introduced to him by Phoebe.",
    url: "https://www.bilibili.com/bangumi/play/ep511713/"
  },
  {
    title: "The One at the Beach",
    season: 3,
    episode: 25,
    rating: 8.7,
    airdate: "15 May 1997",
    summary: "While at the beach, Phoebe meets a family friend with links to her past; Ross discovers that Rachel still loves him and must decide between her and Bonnie.",
    url: "https://www.bilibili.com/bangumi/play/ep511712/"
  },

  //第四季
  {
    title: "The One with the Jellyfish",
    season: 4,
    episode: 1,
    rating: 9.0,
    airdate: "25 Sep. 1997",
    summary: "Ross chooses between Rachel and his bald-headed girlfriend Bonnie; Joey, Chandler, and Monica have a perilous encounter with a jellyfish at the beach.",
    url: "https://www.bilibili.com/bangumi/play/ep511581/"
  },
  {
    title: "The One with the Cat",
    season: 4,
    episode: 2,
    rating: 7.9,
    airdate: "2 Oct. 1997",
    summary: "Phoebe becomes convinced that the spirit of her dead mother is inside a cat. Chandler and Joey are robbed. Monica goes on a date with a guy from her high school.",
    url: "https://www.bilibili.com/bangumi/play/ep511811/"
  },
  {
    title: "The One with the 'Cuffs",
    season: 4,
    episode: 3,
    rating: 8.4,
    airdate: "9 Oct. 1997",
    summary: "Monica tries to avoid criticism when she caters a party for her mother. Chandler ends up half naked and handcuffed to a chair in Rachel's boss's office. Joey tries to get educated from a salesman trying to sell him a set of encyclopedias.",
    url: "https://www.bilibili.com/bangumi/play/ep511829/"
  },
  {
    title: "The One with the Ballroom Dancing",
    season: 4,
    episode: 4,
    rating: 8.0,
    airdate: "16 Oct. 1997",
    summary: "Joey is forced to help Treeger learn how to dance after he threatens to have Monica and Rachel evicted. Phoebe develops a crush on one of her clients. Ross tries to help Chandler quit the gym.",
    url: "https://www.bilibili.com/bangumi/play/ep511830/"
  },
  {
    title: "The One with Joey's New Girlfriend",
    season: 4,
    episode: 5,
    rating: 8.3,
    airdate: "30 Oct. 1997",
    summary: "Chandler develops feelings for Joey's new girlfriend. Ross and Rachel try to make each other jealous with their dates. Phoebe's cold gives her a sexy singing voice.",
    url: "https://www.bilibili.com/bangumi/play/ep511824/"
  },
  {
    title: "The One with the Dirty Girl",
    season: 4,
    episode: 6,
    rating: 8.4,
    airdate: "6 Nov. 1997",
    summary: "Ross's new girlfriend is nearly perfect until he discovers her apartment is very dirty. Chandler buys a better birthday present for Kathy than Joey. Phoebe helps Monica cater an event. Rachel is obsessed at finishing a crossword puzzle by herself.",
    url: "https://www.bilibili.com/bangumi/play/ep511832/"
  },
  {
    title: "The One Where Chandler Crosses the Line",
    season: 4,
    episode: 7,
    rating: 8.6,
    airdate: "13 Nov. 1997",
    summary: "Chandler is guilt-ridden after kissing Kathy. Ross starts playing the keyboard again and everyone except Phoebe thinks he's terrible. Joey dates someone else while still attached to Kathy.",
    url: "https://www.bilibili.com/bangumi/play/ep511819/"
  },
  {
    title: "The One with Chandler in a Box",
    season: 4,
    episode: 8,
    rating: 9.0,
    airdate: "20 Nov. 1997",
    summary: "Chandler tries to earn Joey's forgiveness by lying in a wooden box for six hours. Monica accidentally gets ice in her eye and her doctor turns out to be Richard's son and it's discovered Rachel exchanges the gifts she received in the past.",
    url: "https://www.bilibili.com/bangumi/play/ep511814/"
  },
  {
    title: "The One Where They're Going to Party!",
    season: 4,
    episode: 9,
    rating: 7.7,
    airdate: "11 Dec. 1997",
    summary: "Monica ends up having to choose between a head chef position or the catering business she started with Phoebe. Rachel is close to getting a promotion but tragedy strikes. Chandler and Ross are excited when an old friend is coming to town.",
    url: "https://www.bilibili.com/bangumi/play/ep511820/"
  },
  {
    title: "The One with the Girl from Poughkeepsie",
    season: 4,
    episode: 10,
    rating: 7.9,
    airdate: "18 Dec. 1997",
    summary: "In order for her kitchen staff to acknowledge her authority, Monica hires Joey so she can fire him in front of them. Chandler unsuccessfully tries to set Rachel up with a co-worker. Ross can't choose between two girls.",
    url: "https://www.bilibili.com/bangumi/play/ep511825/"
  },
  {
    title: "The One with Phoebe's Uterus",
    season: 4,
    episode: 11,
    rating: 8.4,
    airdate: "8 Jan. 1998",
    summary: "Newlyweds Frank and Alice ask Phoebe to be their surrogate. Joey gets a job as a tour guide at Ross's museum. Chandler asks Monica and Rachel for advice on how to sexually satisfy Kathy.",
    url: "https://www.bilibili.com/bangumi/play/ep511823/"
  },
  {
    title: "The One with the Embryos",
    season: 4,
    episode: 12,
    rating: 9.4,
    airdate: "15 Jan. 1998",
    summary: "Phoebe's uterus is examined for implantation of the embryos. Meanwhile, a seemingly harmless game between Chandler and Joey against Monica and Rachel escalates into a full blown contest where the stakes are raised higher and higher.",
    url: "https://www.bilibili.com/bangumi/play/ep511833/"
  },
  {
    title: "The One with Rachel's Crush",
    season: 4,
    episode: 13,
    rating: 8.1,
    airdate: "29 Jan. 1998",
    summary: "After seeing Kathy's play, Chandler becomes convinced she is cheating on him with her co-star. Rachel develops a crush on one of her customers. Monica becomes jealous when she realizes she is no longer the 'hostess'.",
    url: "https://www.bilibili.com/bangumi/play/ep511818/"
  },
  {
    title: "The One with Joey's Dirty Day",
    season: 4,
    episode: 14,
    rating: 8.1,
    airdate: "5 Feb. 1998",
    summary: "Joey arrives on the set of his latest movie unwashed, after a three-day fishing trip with his dad. Rachel sets up Ross with the niece of her boss. Chandler goes through three phrases to help recover from Kathy cheating on him.",
    url: "https://www.bilibili.com/bangumi/play/ep511827/"
  },
  {
    title: "The One with All the Rugby",
    season: 4,
    episode: 15,
    rating: 8.4,
    airdate: "26 Feb. 1998",
    summary: "Chandler runs into Janice, and finds her more irritating than ever. Meanwhile, Ross attempts to learn how to play rugby to impress Emily and Monica obsesses over a electric switch.",
    url: "https://www.bilibili.com/bangumi/play/ep511821/"
  },
  {
    title: "The One with the Fake Party",
    season: 4,
    episode: 16,
    rating: 8.1,
    airdate: "19 Mar. 1998",
    summary: "Rachel organizes a fake good bye party for Emily so she can spend time with Joshua. A side effect from her pregnancy causes Phoebe to have a craving for meat.",
    url: "https://www.bilibili.com/bangumi/play/ep511828/"
  },
  {
    title: "The One with the Free Porn",
    season: 4,
    episode: 17,
    rating: 8.5,
    airdate: "26 Mar. 1998",
    summary: "Chandler and Joey discover that they're getting a free porn channel on their TV. Monica encourages Ross to tell Emily he loves her just before she leaves for London. Phoebe gets a shock when she visits her OB-GYN.",
    url: "https://www.bilibili.com/bangumi/play/ep511812/"
  },
  {
    title: "The One with Rachel's New Dress",
    season: 4,
    episode: 18,
    rating: 8.1,
    airdate: "2 Apr. 1998",
    summary: "Rachel has an awkward encounter with Joshua's parents. Phoebe is offered the chance to name one of the triplets. Ross becomes paranoid when Emily goes to London with Susan.",
    url: "https://www.bilibili.com/bangumi/play/ep511822/"
  },
  {
    title: "The One with All the Haste",
    season: 4,
    episode: 19,
    rating: 8.6,
    airdate: "9 Apr. 1998",
    summary: "Ross proposes to Emily. Monica and Rachel try to win their apartment back from Chandler and Joey.",
    url: "https://www.bilibili.com/bangumi/play/ep511815/"
  },
  {
    title: "The One with All the Wedding Dresses",
    season: 4,
    episode: 20,
    rating: 8.4,
    airdate: "16 Apr. 1998",
    summary: "Monica tries on Emily's wedding dress, and can't stop wearing it. Jealous of Ross's proposal to Emily, Rachel tries to talk Joshua into marriage. Chandler takes Joey to a sleep clinic when he starts snoring.",
    url: "https://www.bilibili.com/bangumi/play/ep511813/"
  },
  {
    title: "The One with the Invitation",
    season: 4,
    episode: 21,
    rating: 6.9,
    airdate: "23 Apr. 1998",
    summary: "As Ross and Emily send out wedding invitations, he and Rachel each look back on their relationship together while Joey and Chandler look for a purpose in life.",
    url: "https://www.bilibili.com/bangumi/play/ep511817/"
  },
  {
    title: "The One with the Worst Best Man Ever",
    season: 4,
    episode: 22,
    rating: 8.3,
    airdate: "30 Apr. 1998",
    summary: "at first Ross chooses Joey to be his best man but after a mishap at his bachelor party, he decides he wants both Joey and Chandler as his best men. Phoebe's mood swings makes Monica and Rachel nervous.",
    url: "https://www.bilibili.com/bangumi/play/ep511816/"
  },
  {
    title: "The One with Ross's Wedding: Part 1",
    season: 4,
    episode: 23,
    rating: 8.6,
    airdate: "7 May 1998",
    summary: "Phoebe tries to help Rachel deal with her feelings for Ross as the rest of the gang head to London for Ross and Emily's wedding.",
    url: "https://www.bilibili.com/bangumi/play/ep511826/"
  },
  {
    title: "The One with Ross's Wedding: Part 2",
    season: 4,
    episode: 23,
    rating: 9.1,
    airdate: "7 May 1998",
    summary: "Phoebe tries to warn the gang that Rachel is coming to London to tell Ross she still loves him. Ross and Emily's parents get into an argument over the bill for the wedding. Monica and Chandler sleep together. The wedding ends with a gaffe.",
    url: "https://www.bilibili.com/bangumi/play/ep511831/"
  },

  //第五季
  {
    title: "The One After Ross Says Rachel",
    season: 5,
    episode: 1,
    rating: 8.8,
    airdate: "24 Sep. 1998",
    summary: "A humiliated Emily runs away after Ross says Rachel's name at the altar. Meanwhile, Chandler and Monica struggle to get time alone together.",
    url: "https://www.bilibili.com/bangumi/play/ep468319/"
  },
  {
    title: "The One with All the Kissing",
    season: 5,
    episode: 2,
    rating: 8.9,
    airdate: "1 Oct. 1998",
    summary: "Chandler must constantly kiss the girls to cover up a kiss he gave to Monica to hide their affair. Phoebe gets irritated when the gang constantly talk about London. Rachel puts Monica in charge of her love life. Ross tries to contact Emily.",
    url: "https://www.bilibili.com/bangumi/play/ep468320/"
  },
  {
    title: "The One Hundredth",
    season: 5,
    episode: 3,
    rating: 8.7,
    airdate: "8 Oct. 1998",
    summary: "The gang take Phoebe to the hospital after she goes into labor. Monica threatens to go on a date with a male nurse after Chandler claims they are \"just goofing around.\" Joey gets treated for kidney stones.",
    url: "https://www.bilibili.com/bangumi/play/ep468321/"
  },
  {
    title: "The One Where Phoebe Hates PBS",
    season: 5,
    episode: 4,
    rating: 8.1,
    airdate: "18 Oct. 1998",
    summary: "Ross finally gets in touch with Emily and they try to work it out. Chandler gloats after Rachel reveals that Monica's secret boyfriend is the best sex she ever had. Phoebe and Joey debate if a selfless good deed exists.",
    url: "https://www.bilibili.com/bangumi/play/ep468322/"
  },
  {
    title: "The One with the Kips",
    season: 5,
    episode: 5,
    rating: 8.6,
    airdate: "29 Oct. 1998",
    summary: "Chandler and Monica go away for the weekend but spend the entire time fighting. Ross tries to tell Rachel about his agreement with Emily.",
    url: "https://www.bilibili.com/bangumi/play/ep468323/"
  },
  {
    title: "The One with the Yeti",
    season: 5,
    episode: 6,
    rating: 7.9,
    airdate: "5 Nov. 1998",
    summary: "Monica and Rachel think that Bigfoot has moved into their building; Emily and Ross end their marriage after Ross refuses to end his friendship with Rachel.",
    url: "https://www.bilibili.com/bangumi/play/ep468324/"
  },
  {
    title: "The One Where Ross Moves In",
    season: 5,
    episode: 7,
    rating: 8.2,
    airdate: "12 Nov. 1998",
    summary: "Ross moves in with Chandler and Joey after Emily's cousin kicks him out of his apartment. Phoebe dates a health inspector. Rachel plays hard-to-get with Danny.",
    url: "https://www.bilibili.com/bangumi/play/ep468325/"
  },
  {
    title: "The One with All the Thanksgivings",
    season: 5,
    episode: 8,
    rating: 9.0,
    airdate: "19 Nov. 1998",
    summary: "The gang remember and share with each other their worst Thanksgivings.",
    url: "https://www.bilibili.com/bangumi/play/ep468326/"
  },
  {
    title: "The One with Ross's Sandwich",
    season: 5,
    episode: 9,
    rating: 9.0,
    airdate: "10 Dec. 1998",
    summary: "Joey finds himself constantly covering for Chandler and Monica's affair. Ross becomes angry when someone at work eats his sandwich. Phoebe and Rachel enroll in a literature class.",
    url: "https://www.bilibili.com/bangumi/play/ep468327/"
  },
  {
    title: "The One with the Inappropriate Sister",
    season: 5,
    episode: 10,
    rating: 8.0,
    airdate: "17 Dec. 1998",
    summary: "A bored Ross wreaks havoc in Chandler and Joey's lives. Rachel is uncomfortable with Danny's unusually close relationship with his sister. Phoebe runs into trouble whilst collecting donations for the poor during Christmas.",
    url: "https://www.bilibili.com/bangumi/play/ep468328/"
  },
  {
    title: "The One with All the Resolutions",
    season: 5,
    episode: 11,
    rating: 9.0,
    airdate: "7 Jan. 1999",
    summary: "The gang make their New Years resolutions. Chandler struggles to not make jokes about everyone. Rachel uncovers a secret. Ross runs into trouble when he wears leather pants on a date.",
    url: "https://www.bilibili.com/bangumi/play/ep468329/"
  },
  {
    title: "The One with Chandler's Work Laugh",
    season: 5,
    episode: 12,
    rating: 8.1,
    airdate: "21 Jan. 1999",
    summary: "Monica becomes annoyed at how Chandler sucks up to his boss. Rachel tries to confront Monica about her relationship with Chandler. Ross hooks up with Janice when he finds out Emily is getting married.",
    url: "https://www.bilibili.com/bangumi/play/ep468330/"
  },
  {
    title: "The One with Joey's Bag",
    season: 5,
    episode: 13,
    rating: 7.9,
    airdate: "4 Feb. 1999",
    summary: "Phoebe's grandmother dies, and Phoebe is shocked when her father turns up at the funeral. Meanwhile, Rachel gives Joey a \"man's bag\" for an audition, and Chandler is scared to tell Monica he doesn't like her massages.",
    url: "https://www.bilibili.com/bangumi/play/ep468331/"
  },
  {
    title: "The One Where Everybody Finds Out",
    season: 5,
    episode: 14,
    rating: 9.7,
    airdate: "11 Feb. 1999",
    summary: "When Phoebe finds out about Monica and Chandler, she and Rachel attempt to get them to confess their relationship.",
    url: "https://www.bilibili.com/bangumi/play/ep468332/"
  },
  {
    title: "The One with the Girl Who Hits Joey",
    season: 5,
    episode: 15,
    rating: 8.4,
    airdate: "18 Feb. 1999",
    summary: "Ross makes enemies out of his new neighbors. Chandler freaks out about his relationship with Monica. Joey dates a girl who likes to playfully punch him but she doesn't realize she punches him too hard and Joey is reluctant to tell her.",
    url: "https://www.bilibili.com/bangumi/play/ep468333/"
  },
  {
    title: "The One with the Cop",
    season: 5,
    episode: 16,
    rating: 8.5,
    airdate: "25 Feb. 1999",
    summary: "Joey has a dream about Monica and becomes convinced he is in love with her. Meanwhile, Phoebe finds a police badge in Central Perk, and Ross tries to get his new sofa into his apartment.",
    url: "https://www.bilibili.com/bangumi/play/ep468334/"
  },
  {
    title: "The One with Rachel's Inadvertent Kiss",
    season: 5,
    episode: 17,
    rating: 8.3,
    airdate: "18 Mar. 1999",
    summary: "Rachel has an awkward encounter when she interviews for a new job. Monica becomes jealous of Phoebe and Gary. Joey searches for a 'hot girl' in Ross's building.",
    url: "https://www.bilibili.com/bangumi/play/ep468335/"
  },
  {
    title: "The One Where Rachel Smokes",
    season: 5,
    episode: 18,
    rating: 7.8,
    airdate: "8 Apr. 1999",
    summary: "Rachel takes up smoking to feel more included at work. Joey auditions for a soup commercial with Ross's son Ben, but they end up competing against each other. Monica and Phoebe plan Rachel's surprise birthday party one month in advance.",
    url: "https://www.bilibili.com/bangumi/play/ep468336/"
  },
  {
    title: "The One Where Ross Can't Flirt",
    season: 5,
    episode: 19,
    rating: 8.6,
    airdate: "22 Apr. 1999",
    summary: "As Joey's grandmother visits to watch him on TV, Ross has trouble flirting with the pizza delivery girl, and Rachel tries to find an earring of Monica's that she has misplaced.",
    url: "https://www.bilibili.com/bangumi/play/ep468337/"
  },
  {
    title: "The One with the Ride Along",
    season: 5,
    episode: 20,
    rating: 8.1,
    airdate: "29 Apr. 1999",
    summary: "The guys go on a ride-along with Gary. Rachel accidentally deletes a message from Emily on Ross's answering machine.",
    url: "https://www.bilibili.com/bangumi/play/ep468338/"
  },
  {
    title: "The One with the Ball",
    season: 5,
    episode: 21,
    rating: 8.3,
    airdate: "6 May 1999",
    summary: "Gary asks Phoebe to move in with him but she's reluctant to and to overcome boredom, Ross and Joey start throwing a ball to each other. Rachel buys an expensive cat but it doesn't behave as she hoped it would.",
    url: "https://www.bilibili.com/bangumi/play/ep468339/"
  },
  {
    title: "The One with Joey's Big Break",
    season: 5,
    episode: 22,
    rating: 8.1,
    airdate: "11 May 1999",
    summary: "Joey drives to Las Vegas to shoot a new movie where he is in the lead role. Rachel gets an eye infection but is reluctant to seek treatment because of her eye phobia. Phoebe is mad at Ross, but doesn't know why.",
    url: "https://www.bilibili.com/bangumi/play/ep468340/"
  },
  {
    title: "The One in Vegas: Part 1",
    season: 5,
    episode: 23,
    rating: 8.7,
    airdate: "20 May 1999",
    summary: "The gang go to Las Vegas to visit Joey. Chandler is angry when he finds out Monica had lunch with Richard. Ross and Rachel try to embarrass each other after an awkward encounter.",
    url: "https://www.bilibili.com/bangumi/play/ep468341/"
  },
  {
    title: "The One in Vegas: Part 2",
    season: 5,
    episode: 24,
    rating: 9.0,
    airdate: "20 May 1999",
    summary: "Chandler and Monica reconcile and hastily decide to get married. Ross and Rachel get drunk and roam the casino. Phoebe deals with a 'lurker' on the slot machines.",
    url: "https://www.bilibili.com/bangumi/play/ep468342/"
  },

  //第六季
  {
    title: "The One After Vegas",
    season: 6,
    episode: 1,
    rating: 8.6,
    airdate: "23 Sep. 1999",
    summary: "Ross and Rachel deal with the aftermath of their drunken escapade. Phoebe and Joey take a road trip back to New York in Phoebe's grandmother's cab. Monica and Chandler ponder the idea of marriage.",
    url: "https://www.bilibili.com/bangumi/play/ep513480/"
  },
  {
    title: "The One Where Ross Hugs Rachel",
    season: 6,
    episode: 2,
    rating: 8.0,
    airdate: "30 Sep. 1999",
    summary: "Monica and Chandler try to tell Rachel and Joey that they're moving in together. Phoebe thinks that Ross didn't get the annulment because he still loves Rachel.",
    url: "https://www.bilibili.com/bangumi/play/ep513496/"
  },
  {
    title: "The One with Ross's Denial",
    season: 6,
    episode: 3,
    rating: 8.0,
    airdate: "7 Oct. 1999",
    summary: "Ross tries to deny he still has feelings for Rachel. Joey interviews for a new roommate. Monica and Chandler argue over what to do with the spare room when they move in together.",
    url: "https://www.bilibili.com/bangumi/play/ep513495/"
  },
  {
    title: "The One Where Joey Loses His Insurance",
    season: 6,
    episode: 4,
    rating: 8.4,
    airdate: "14 Oct. 1999",
    summary: "Joey's health benefits lapse just as he develops a hernia. Ross is given a professorship at NYU and eager to impress his students, he puts on a fake English accent.",
    url: "https://www.bilibili.com/bangumi/play/ep513478/"
  },
  {
    title: "The One with Joey's Porsche",
    season: 6,
    episode: 5,
    rating: 8.0,
    airdate: "21 Oct. 1999",
    summary: "Ross and Rachel try to get an annulment, Joey finds the keys to a porsche in Central Perk, and Phoebe, Monica and Chandler babysit the triplets.",
    url: "https://www.bilibili.com/bangumi/play/ep513499/"
  },
  {
    title: "The One on the Last Night",
    season: 6,
    episode: 6,
    rating: 8.4,
    airdate: "4 Nov. 1999",
    summary: "On the last night before Chandler and Monica move in together, Monica and Rachel argue, and Chandler tries to give Joey money to help him pay the bills.",
    url: "https://www.bilibili.com/bangumi/play/ep513477/"
  },
  {
    title: "The One Where Phoebe Runs",
    season: 6,
    episode: 7,
    rating: 8.2,
    airdate: "11 Nov. 1999",
    summary: "Rachel is embarrassed by Phoebe's odd running style. Joey gets a new roommate. Chandler tries to impress Monica by cleaning the apartment but forgets how everything is supposed to look.",
    url: "https://www.bilibili.com/bangumi/play/ep513490/"
  },
  {
    title: "The One with Ross' Teeth",
    season: 6,
    episode: 8,
    rating: 8.3,
    airdate: "18 Nov. 1999",
    summary: "Ross goes too far while trying to impress a date by over-whitening his teeth. Rachel uses gossip to get her boss to like her after Phoebe supposedly makes out with Ralph Lauren.",
    url: "https://www.bilibili.com/bangumi/play/ep513479/"
  },
  {
    title: "The One Where Ross Got High",
    season: 6,
    episode: 9,
    rating: 9.1,
    airdate: "25 Nov. 1999",
    summary: "Ross is forced to reveal the reason why Jack and Judy don't like Chandler. Rachel tries to make dessert for the gang. Joey and Ross try to get out of Thanksgiving when they are invited to hang out with Janine and her dancer friends.",
    url: "https://www.bilibili.com/bangumi/play/ep513489/"
  },
  {
    title: "The One with the Routine",
    season: 6,
    episode: 10,
    rating: 8.5,
    airdate: "16 Dec. 1999",
    summary: "On the set of \"Dick Clark\'s New Year\'s Rockin\' Eve\", Joey tries to kiss Janine at midnight and Monica and Ross resurrect their dance routine from high school. Meanwhile, Rachel, Phoebe and Chandler look for Monica's Christmas presents.",
    url: "https://www.bilibili.com/bangumi/play/ep513482/"
  },
  {
    title: "The One with the Apothecary Table",
    season: 6,
    episode: 11,
    rating: 7.9,
    airdate: "6 Jan. 2000",
    summary: "Joey is caught in the middle when Janine tells him she doesn't like Monica and Chandler. Meanwhile, Rachel buys an apothecary table from a store that Phoebe hates.",
    url: "https://www.bilibili.com/bangumi/play/ep513497/"
  },
  {
    title: "The One with the Joke",
    season: 6,
    episode: 12,
    rating: 7.8,
    airdate: "13 Jan. 2000",
    summary: "Chandler and Ross argue over a joke. Meanwhile, Joey reluctantly takes a waiter job at Central Perk, and Monica becomes annoyed when Phoebe says she would choose Rachel over her as a girlfriend.",
    url: "https://www.bilibili.com/bangumi/play/ep513485/"
  },
  {
    title: "The One with Rachel's Sister",
    season: 6,
    episode: 13,
    rating: 8.1,
    airdate: "3 Feb. 2000",
    summary: "Rachel's younger sister arrives in New York and goes on a date with Ross. Meanwhile, Monica won't admit that she is sick.",
    url: "https://www.bilibili.com/bangumi/play/ep513501/"
  },
  {
    title: "The One Where Chandler Can't Cry",
    season: 6,
    episode: 14,
    rating: 8.4,
    airdate: "10 Feb. 2000",
    summary: "Rachel tries to end the spark between Ross and Jill. When Chandler admits that he can't cry, Monica tries to make it happen. The gang discovers that Phoebe's sister, Ursula, is a porn star and is using Phoebe's name.",
    url: "https://www.bilibili.com/bangumi/play/ep513487/"
  },
  {
    title: "The One That Could Have Been",
    season: 6,
    episode: 15,
    rating: 8.3,
    airdate: "17 Feb. 2000",
    summary: "Barry and Mindy's impending divorce prompts the gang to fantasize about what their lives might be like if they'd all taken different courses.",
    url: "https://www.bilibili.com/bangumi/play/ep513494/"
  },
  {
    title: "The One That Could Have Been",
    season: 6,
    episode: 16,
    rating: 8.4,
    airdate: "17 Feb. 2000",
    summary: "The gang continue to think about how different their lives could have been.",
    url: "https://www.bilibili.com/bangumi/play/ep513491/"
  },
  {
    title: "The One with Unagi",
    season: 6,
    episode: 17,
    rating: 9.0,
    airdate: "24 Feb. 2000",
    summary: "Rachel and Phoebe take self-defense classes. Chandler and Monica agree to give each other homemade presents for Valentine's Day. Joey tries to get money through medical research.",
    url: "https://www.bilibili.com/bangumi/play/ep513486/"
  },
  {
    title: "The One Where Ross Dates a Student",
    season: 6,
    episode: 18,
    rating: 8.2,
    summary: "Ross jeopardizes his career when he starts dating a student from one of his palaeontology classes. Rachel and Phoebe's apartment catches fire.",
    airdate: "9 Mar. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513488/"
  },
  {
    title: "The One with Joey's Fridge",
    season: 6,
    episode: 19,
    rating: 8.1,
    summary: "Joey tries to get everyone to pay for his broken fridge. Ross becomes paranoid when Elizabeth makes plans for spring break. Monica and Chandler compete against Phoebe to find Rachel a date.",
    airdate: "23 Mar. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513484/"
  },
  {
    title: "The One with Mac and C.H.E.E.S.E.",
    season: 6,
    episode: 20,
    rating: 7.2,
    summary: "Chandler forgets to write down a message for Joey when the time of his audition for the lead in a TV show is changed.",
    airdate: "13 Apr. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513498/"
  },
  {
    title: "The One Where Ross Meets Elizabeth's Dad",
    season: 6,
    episode: 21,
    rating: 8.5,
    summary: "Elizabeth's father takes an instant disliking to Ross. Joey almost gets fired from \"Mac and C.H.E.E.S.E.\" after offending the operator of the robot. Phoebe writes a book based on Monica and Chandler.",
    airdate: "27 Apr. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513500/"
  },
  {
    title: "The One Where Paul's the Man",
    season: 6,
    episode: 22,
    rating: 8.9,
    summary: "Paul threatens to have Ross fired from the university if he continues to date Elizabeth. The girls put their names down on a waiting list for a wedding venue.",
    airdate: "4 May 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513492/"
  },
  {
    title: "The One with the Ring",
    season: 6,
    episode: 23,
    rating: 8.4,
    summary: "Chandler and Phoebe go looking for an engagement ring for Monica. Rachel tries to get Paul to open up to her.",
    airdate: "11 May 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513493/"
  },
  {
    title: "The One with the Proposal",
    season: 6,
    episode: 24,
    rating: 8.6,
    summary: "Chandler's plan to propose to Monica at dinner is interrupted by Richard. Joey accidentally buys a boat at a silent auction. Ross and Elizabeth's relationship comes to a crossroad.",
    airdate: "18 May 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513481/"
  },
  {
    title: "The One with the Proposal",
    season: 6,
    episode: 25,
    rating: 9.2,
    summary: "Chandler continues to pretend to hate the idea of marriage, unaware Richard wants Monica back. Meanwhile, Rachel and Phoebe discuss their 'back-up' plans.",
    airdate: "18 May 2000",
    url: "https://www.bilibili.com/bangumi/play/ep513483/"
  },

  //第七季
  {
    season: 7,
    episode: 1,
    title: "The One with Monica's Thunder",
    rating: 8.3,
    summary: "The gang celebrate Monica and Chandler's engagement, however Ross and Rachel upstage them by briefly reuniting. Joey tries to dress and act like a nineteen-year-old for an audition.",
    airdate: "12 Oct. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512751/"
  },
  {
    season: 7,
    episode: 2,
    title: "The One with Rachel's Book",
    rating: 8.2,
    summary: "Monica learns her parents have spent her entire wedding fund. Phoebe temporarily moves into Ross's apartment, bringing her massage clients with her. Joey mocks Rachel when he finds an erotic novel she is reading.",
    airdate: "12 Oct. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512752/"
  },
  {
    season: 7,
    episode: 3,
    title: "The One with Phoebe's Cookies",
    rating: 8.0,
    summary: "Monica tries to figure out Phoebe's grandmother's secret cookie recipe. Meanwhile, Rachel tries to teach Joey how to sail, and Chandler has an awkward encounter when he tries to bond with Jack.",
    airdate: "19 Oct. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512753/"
  },
  {
    season: 7,
    episode: 4,
    title: "The One with Rachel's Assistant",
    rating: 7.9,
    summary: "Chaos ensues when Monica and Chandler decide to share each other's secrets. Rachel gets a promotion and interviews for an assistant. Joey is offered the chance to go back on \"Days of Our Lives\".",
    airdate: "26 Oct. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512754/"
  },
  {
    season: 7,
    episode: 5,
    title: "The One with the Engagement Picture",
    rating: 7.9,
    summary: "Chandler struggles to photograph well for his and Monica's engagement picture. Joey teaches Tag how to pick up women, much to Rachel's annoyance. Phoebe and Ross date a couple who are divorcing.",
    airdate: "2 Nov. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512755/"
  },
  {
    season: 7,
    episode: 6,
    title: "The One with the Nap Partners",
    rating: 8.7,
    summary: "Joey and Ross accidentally take a nap together - and much to their dismay, find that they like it. Phoebe and Rachel compete to become Monica's maid of honor.",
    airdate: "9 Nov. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512756/"
  },
  {
    season: 7,
    episode: 7,
    title: "The One with Ross's Library Book",
    rating: 8.3,
    summary: "Ross and Chandler discovers that Ross's book is in the section of the library where students go to have sex. Monica and Chandler run into Janice and she immediately invites herself to the wedding. They try to avoid her. Meanwhile, Rachel and Phoebe befriend Joey's girlfriend.",
    airdate: "16 Nov. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512757/"
  },
  {
    season: 7,
    episode: 8,
    title: "The One Where Chandler Doesn't Like Dogs",
    rating: 8.0,
    summary: "Ross struggles to name all 50 states in a game. Joey compromises Rachel's chances with her crush, Tag, during Thanksgiving dinner. Phoebe sneaks a dog into the apartment, making Chandler extremely nervous.",
    airdate: "23 Nov. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512758/"
  },
  {
    season: 7,
    episode: 9,
    title: "The One with All the Candy",
    rating: 8.0,
    summary: "Monica makes candy to get to know her neighbours, Rachel and Tag try to hide their relationship at work and Ross buys Phoebe a bike.",
    airdate: "7 Dec. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512759/"
  },
  {
    season: 7,
    episode: 10,
    title: "The One with the Holiday Armadillo",
    rating: 8.4,
    summary: "Ross wants to introduce Ben to Hanukkah. In order to entice Rachel to move back into their refurbished apartment, Phoebe must drive a wedge between Rachel and current roomie Joey.",
    airdate: "14 Dec. 2000",
    url: "https://www.bilibili.com/bangumi/play/ep512760/"
  },
  {
    season: 7,
    episode: 11,
    title: "The One with All the Cheesecakes",
    rating: 8.4,
    summary: "Chandler refuses to give back a cheesecake accidentally delivered to his apartment; Phoebe gets angry with Joey when he blows off dinner with her for a date.",
    airdate: "4 Jan. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512761/"
  },
  {
    season: 7,
    episode: 12,
    title: "The One Where They're Up All Night",
    rating: 8.5,
    summary: "After the gang head up to the roof to see a passing comet, separate events unfold that lead to them all having a sleepless night.",
    airdate: "11 Jan. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512762/"
  },
  {
    season: 7,
    episode: 13,
    title: "The One Where Rosita Dies",
    rating: 8.3,
    summary: "Rachel breaks Joey's armchair. Phoebe takes a temp job in a call centre. Ross and Monica find out their parents are selling their childhood home.",
    airdate: "1 Feb. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512763/"
  },
  {
    season: 7,
    episode: 14,
    title: "The One Where They All Turn Thirty",
    rating: 8.4,
    summary: "Rachel's 30th birthday prompts the rest of the gang to reminisce about their own 30th celebrations.",
    airdate: "8 Feb. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512764/"
  },
  {
    season: 7,
    episode: 15,
    title: "The One with Joey's New Brain",
    rating: 8.3,
    summary: "Joey's character on Days of Our Lives is awakened from his coma with a brain transplant from one of the show's most legendary characters. Ross practices the bagpipes for Monica and Chandler's wedding.",
    airdate: "15 Feb. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512765/"
  },
  {
    season: 7,
    episode: 16,
    title: "The One with the Truth About London",
    rating: 8.6,
    summary: "Chandler is shocked to find out who Monica really wanted to sleep with the night they first got together. Meanwhile, Rachel gets into trouble with Ross when she teaches Ben practical jokes.",
    airdate: "22 Feb. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512767/"
  },
  {
    season: 7,
    episode: 17,
    title: "The One with the Cheap Wedding Dress",
    rating: 8.2,
    summary: "Monica has to decide between her wedding dress and the band Chandler wants for the wedding. Joey and Ross date the same girl, and they both try to fight for her attention.",
    airdate: "15 Mar. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512766/"
  },
  {
    season: 7,
    episode: 18,
    title: "The One with Joey's Award",
    rating: 8.2,
    summary: "Joey is nominated for a Soapy Award for his part on Days of Our Lives and Rachel is his date to the ceremony. Joey doesn't win the award but takes someone else's award home. Rachel convinces him to take it back because he can't be happy with an award he didn't win. One of Ross' students failed the midterms because he is in love with Ross and can't concentrate in class so Ross changes his grade. But now more students come to Ross pretending to be in love with him in order to get a better grade. When Rachel and Joey take the Soapy back the real winner just throws it ...",
    airdate: "29 Mar. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512768/"
  },
  {
    season: 7,
    episode: 19,
    title: "The One with Ross and Monica's Cousin",
    rating: 8.6,
    summary: "Joey auditions for a naked role in a big movie; Rachel and Phoebe plan Monica's wedding shower; Ross becomes attracted to his cousin after she visits.",
    airdate: "19 Apr. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512769/"
  },
  {
    season: 7,
    episode: 20,
    title: "The One with Rachel's Big Kiss",
    rating: 8.2,
    summary: "Rachel's college friend can't remember a scandalous kiss from the past; Chandler and Ross argue for possession of Val Kilmer's tuxedo.",
    airdate: "26 Apr. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512770/"
  },
  {
    season: 7,
    episode: 21,
    title: "The One with the Vows",
    rating: 7.2,
    summary: "Monica and Chandler are getting married in four weeks and have to write their vows, but neither has a clue what to say, so they reflect on their past.",
    airdate: "3 May 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512771/"
  },
  {
    season: 7,
    episode: 22,
    title: "The One with Chandler's Dad",
    rating: 8.2,
    summary: "Ross and Rachel hit the freeway together when Monica's Porsche shows up again; Chandler and Monica go off to Vegas to find Chandler's estranged dad.",
    airdate: "10 May 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512772/"
  },
  {
    season: 7,
    episode: 23,
    title: "The One with Monica and Chandler's Wedding: Part 1",
    rating: 8.7,
    summary: "So close to the wedding, Chandler suddenly realizes the overwhelming meaning of getting married. Meanwhile, Joey acts opposite a famous actor in a movie, but can't bring himself to tell him that he spits when he says his lines.",
    airdate: "17 May 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512773/"
  },
  {
    season: 7,
    episode: 24,
    title: "The One with Monica and Chandler's Wedding: Part 2",
    rating: 9.1,
    summary: "Ross tries to find Chandler with Phoebe's help. Meanwhile Rachel tries to hinder Monica.",
    airdate: "17 May 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512774/"
  },

  //第八季
 {
    season: 8,
    episode: 1,
    title: "The One After I Do",
    rating: 8.6,
    summary: "The gang learns that Rachel is pregnant; Joey tries to impress a Broadway director who's dating Chandler's mom; Chandler's shoes make it hard for him to dance.",
    airdate: "27 Sep. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512881/"
  },
  {
    season: 8,
    episode: 2,
    title: "The One with the Red Sweater",
    rating: 9.0,
    summary: "Monica, Phoebe and Joey advise Rachel to tell the father about the pregnancy. Chandler and Ross lose the wedding photos.",
    airdate: "4 Oct. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512882/"
  },
  {
    season: 8,
    episode: 3,
    title: "The One Where Rachel Tells...",
    rating: 8.6,
    summary: "Even on their honeymoon, Monica is pushy, and is annoyed that Chandler won't jump the line at the airport check-in - especially after the couple in front of them, also on their honeymoon, get bumped up to first class. They try to sneak into the first-class lounge, but are caught - but she at least manages to steal an orange. Joey and Phoebe find that Monica and Chandler have tricked them out of the keys to the master apartment; Joey hopes a false gas leak alert will make super Treeger use his key, but he makes a fireman use an axe, and the wrecked door calls for a big...",
    airdate: "11 Oct. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512883/"
  },
  {
    season: 8,
    episode: 4,
    title: "The One with the Videotape",
    rating: 9.2,
    summary: "Ross and Rachel tell everyone about the night they were together. They have two different stories of how it happened until Ross accidentally reveals that he videotaped it. Not surprisingly, everyone wants to see it.",
    airdate: "18 Oct. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512884/"
  },
  {
    season: 8,
    episode: 5,
    title: "The One with Rachel's Date",
    rating: 7.9,
    summary: "Phoebe dates Monica's sous-chef Tim and Monica doesn't fire him for Phoebe's sake. When Phoebe decides to dump Tim, Monica can finally fire him. Rachel has a date with Kash, a co-star on Days of Our Lives. Ross thinks it's weird because whoever takes Rachel out, takes his baby out too. He always pictured that his next child would grow up in a happy family. Rachel's date was terrible because she made the mistake of mentioning she was pregnant. Ross reassures her it isn't so bad because when she has the baby she will love someone more than she ever loved anyone.",
    url: "https://www.bilibili.com/bangumi/play/ep512885/"
  },
  {
    season: 8,
    episode: 6,
    title: "The One with the Halloween Party",
    rating: 8.4,
    summary: "Monica and Chandler decide to throw a Halloween party; Phoebe runs into Ursula and her fiancée, who knows nothing about the \"real\" Ursula.",
    airdate: "1 Nov. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512886/"
  },
  {
    season: 8,
    episode: 7,
    title: "The One with the Stain",
    rating: 7.7,
    summary: "Chandler hires a maid, whom Monica suspects is stealing her clothing; Eric has trouble forgetting Ursula when he breaks up with her to date Phoebe.",
    airdate: "8 Nov. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512887/"
  },
  {
    season: 8,
    episode: 8,
    title: "The One with the Stripper",
    rating: 8.6,
    summary: "Chandler finds out that Monica had a bachelorette party with a stripper, even though they promised not to have bachelor/bachelorette parties. Rachel takes Phoebe along to dinner with Rachel's dad, because she is afraid her dad will be really angry when she tells him she's pregnant. Mr. Green is delighted to hear he will be a grandfather, but freaks out when he finds out that Rachel isn't getting married - so she just tells him that Ross won't marry her. Monica feels bad about having had a bachelorette party, so she organizes a bachelor party including a stripper for ...",
    url: "https://www.bilibili.com/bangumi/play/ep512888/"
  },
  {
    season: 8,
    episode: 9,
    title: "The One with the Rumor",
    rating: 9.2,
    summary: "Monica invites Will, an old school friend of her and Ross over for Thanksgiving dinner, unaware he isn't too fond of Rachel.",
    airdate: "22 Nov. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512889/"
  },
  {
    season: 8,
    episode: 10,
    title: "The One with Monica's Boots",
    rating: 7.9,
    summary: "Monica's expensive new boots hurt her feet, but she's determined to prove to Chandler that her purchase was worth it; Ben goes to school with Sting's son.",
    airdate: "6 Dec. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512890/"
  },
  {
    season: 8,
    episode: 11,
    title: "The One with Ross's Step Forward",
    rating: 7.8,
    summary: "Ross' new girlfriend orders Christmas cards with a photo of them on the cover.",
    airdate: "13 Dec. 2001",
    url: "https://www.bilibili.com/bangumi/play/ep512891/"
  },
  {
    season: 8,
    episode: 12,
    title: "The One Where Joey Dates Rachel",
    rating: 8.4,
    summary: "Joey wants to take Rachel to dinner on a pretend date to practice his dating skills, but soon develops romantic feelings for her; gang addicted to Ms. Pac-Man.",
    airdate: "10 Jan. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512892/"
  },
  {
    season: 8,
    episode: 13,
    title: "The One Where Chandler Takes a Bath",
    rating: 8.4,
    summary: "Monica turns Chandler on to the concept of taking a bath to relax; Ross and Rachel toss baby names around while deciding whether to learn the baby's sex.",
    airdate: "17 Jan. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512893/"
  },
  {
    season: 8,
    episode: 14,
    title: "The One with the Secret Closet",
    rating: 8.1,
    summary: "Chandler's very curious about a locked closet, but Monica won't tell him what is inside.",
    airdate: "31 Jan. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512894/"
  },
  {
    season: 8,
    episode: 15,
    title: "The One with the Birthing Video",
    rating: 8.2,
    summary: "During Valentine's Day, Chandler discovers the miracle of birth seeing an extremely graphic video. Ross hides from Mona that Rachel is now living in his apartment",
    airdate: "7 Feb. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512895/"
  },
  {
    season: 8,
    episode: 16,
    title: "The One Where Joey Tells Rachel",
    rating: 8.1,
    summary: "Ross freaks out when Joey tells him that he is in love with Rachel because Ross is afraid that they will get married and raise his kid together. Phoebe dates a guy called Don, who she thinks is Monica's soul-mate and introduces Don to Monica to see what will happen. Monica and Don get along perfectly. Ross goes to tell Joey that he doesn't hate him and Joey promises to never act on his feelings for Rachel because he won't jeopardize his friendship to Ross. But when Ross realizes that Joey really is in love for the first time he tells Joey to tell Rachel. When Joey ...",
    airdate: "28 Feb. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512896/"
  },
  {
    season: 8,
    episode: 17,
    title: "The One with the Tea Leaves",
    rating: 7.9,
    summary: "Chandler and Monica are happy together - their worst problem is his habit to put CDs in the wrong box and their different taste in music. Rachel is desperate to get back on good terms with Joey, so she takes Monica's advice to change the subject to something work-related. However in another uncomfortable conversation she manages to convince Joey that her boss, Mr. Zelner, wants to buy her baby. When Phoebe resumes reading tea leaves, she sees that she'll meet the man of her dreams soon, and takes that to be Jim, who she keeps bumping into. However she soon finds he ...",
    airdate: "7 Mar. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512897/"
  },
  {
    season: 8,
    episode: 18,
    title: "The One in Massapequa",
    rating: 8.0,
    summary: "Everyone prepares for the Gellers' 35th wedding anniversary in Long Island; Monica struggles to prepare the perfect toast; Phoebe invites her new boyfriend Parker.",
    airdate: "28 Mar. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512898/"
  },
  {
    season: 8,
    episode: 19,
    title: "The One with Joey's Interview",
    rating: 7.2,
    summary: "Joey prepares for his epic interview with Soap Opera Digest, reminiscing about his past acting experiences, his friends and his romantic life.",
    airdate: "4 Apr. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512899/"
  },
  {
    season: 8,
    episode: 20,
    title: "The One with the Baby Shower",
    rating: 8.1,
    summary: "Monica and Phoebe throw Rachel a baby shower but forget to invite Rachel's mom. Rachel realizes she has no idea how to look after the baby after the birth. Meanwhile, Joey auditions for a job as a host for a new game show called \"Bamboozled\", and Chandler and Ross help him practice.",
    airdate: "25 Apr. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512900/"
  },
  {
    season: 8,
    episode: 21,
    title: "The One with the Cooking Class",
    rating: 8.0,
    summary: "Monica's restaurant get a bad review. After confronting the critic who wrote it, she decides to join a cooking class, with Joey in tow. Rachel gets jealous when Ross hits it off with a woman at the baby department store.",
    airdate: "2 May 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512901/"
  },
  {
    season: 8,
    episode: 22,
    title: "The One Where Rachel Is Late",
    rating: 8.2,
    summary: "Monica and Phoebe bet on when Rachel's baby will be born as the due date comes and goes as Rachel becomes extremely irritable; Chandler falls asleep at Joey's big movie premiere.",
    airdate: "9 May 2002",

    url: "https://www.bilibili.com/bangumi/play/ep512902/"
  },
  {
    season: 8,
    episode: 23,
    title: "The One Where Rachel Has a Baby: Part 1",
    rating: 8.7,
    summary: "Ross and Rachel go to the hospital to have their baby, but it's a long labor. They get stuck in a semi-private room, and many other couples come and go before Rachel is ready to deliver - the last couple being Janice and her new husband. Chandler and Monica decide to start trying to have a baby.",
    airdate: "16 May 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512903/"
  },
  {
    season: 8,
    episode: 24,
    title: "The One Where Rachel Has a Baby: Part 2",
    rating: 8.8,
    summary: "After Rachel gives birth to her baby, she must confront relationship issues around her.",
    airdate: "16 May 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512904/"
  },

  //第九季
 {
    season: 9,
    episode: 1,
    title: "The One Where No One Proposes",
    rating: 8.5,
    summary: "Rachel, Ross and Joey get together in a guyand figure out that no one was actually going to propose; Mr. Geller walks in on Monica and Chandler having sex.",
    airdate: "26 Sep. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512906/"
  },
  {
    season: 9,
    episode: 2,
    title: "The One Where Emma Cries",
    rating: 8.4,
    summary: "Chandler, having trouble getting enough sleep at home, falls asleep in a meeting and accidentally agrees to run his company's Tulsa office.",
    airdate: "3 Oct. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512907/"
  },
  {
    season: 9,
    episode: 3,
    title: "The One with the Pediatrician",
    rating: 8.1,
    summary: "Joey arranges a blind date for Phoebe. Chandler is leaving for Tulsa without Monica, because she has got a great job offer.",
    airdate: "10 Oct. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512908/"
  },
  {
    season: 9,
    episode: 4,
    title: "The One with the Sharks",
    rating: 8.0,
    summary: "Monica thinks Chandler is aroused by shark documentaries.",
    airdate: "17 Oct. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512909/"
  },
  {
    season: 9,
    episode: 5,
    title: "The One with Phoebe's Birthday Dinner",
    rating: 8.3,
    summary: "Phoebe will celebrate her birthday by having a dinner with her friends at a fancy restaurant. But everybody is late to the dinner, due to a series of problems.",
    airdate: "31 Oct. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512910/"
  },
  {
    season: 9,
    episode: 6,
    title: "The One with the Male Nanny",
    rating: 8.2,
    summary: "Looking for a new nanny, Ross and Rachel hire a male nanny named Sandy. Monica tells Chandler that a guy at work is the funniest guy she has ever met.",
    airdate: "7 Nov. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512911/"
  },
  {
    season: 9,
    episode: 7,
    title: "The One with Ross's Inappropriate Song",
    rating: 8.5,
    summary: "Ross finds a way to make Emma laugh - singing \"Baby Got Back.\" Meanwhile, Phoebe meets Mike's parents, and Joey and Chandler find a video tape in Richard's apartment.",
    airdate: "14 Nov. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512912/"
  },
  {
    season: 9,
    episode: 8,
    title: "The One with Rachel's Other Sister",
    rating: 8.7,
    summary: "Rachel's middle sister shows up at Thanksgiving and causes arguments amongst the gang.",
    airdate: "21 Nov. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512913/"
  },
  {
    season: 9,
    episode: 9,
    title: "The One with Rachel's Phone Number",
    rating: 8.0,
    summary: "Rachel is ready to start hanging out again. She and Phoebe go to a bar, where they meet two guys.",
    airdate: "5 Dec. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512914/"
  },
  {
    season: 9,
    episode: 10,
    title: "The One with Christmas in Tulsa",
    rating: 7.2,
    summary: "Chandler must spend Christmas in Tulsa, which Monica thinks he might have an affair with a former Miss Oklahoma runner-up while he is there. Chandler comes home early to announce that he quit his job.",
    airdate: "12 Dec. 2002",
    url: "https://www.bilibili.com/bangumi/play/ep512915/"
  },
  {
    season: 9,
    episode: 11,
    title: "The One Where Rachel Goes Back to Work",
    rating: 7.8,
    summary: "Chandler starts looking for a job and is anxious about having a baby, Rachel decides to go back to work, and Phoebe works as an extra on Joey's show.",
    airdate: "9 Jan. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512916/"
  },
  {
    season: 9,
    episode: 12,
    title: "The One with Phoebe's Rats",
    rating: 7.7,
    summary: "Ross makes Joey stay away from their new nanny. Mike accidentally kills Phoebe's rat. Gavin gives Rachel a scarf and a kiss for her birthday.",
    airdate: "16 Jan. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512917/"
  },
  {
    season: 9,
    episode: 13,
    title: "The One Where Monica Sings",
    rating: 8.0,
    summary: "A night at Mike's piano bar gives Monica a very showy moment in the spotlight; Chandler employs his secret skill to repair Joey's botched eyebrow-waxing job.",
    airdate: "30 Jan. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512918/"
  },
  {
    season: 9,
    episode: 14,
    title: "The One with the Blind Dates",
    rating: 8.0,
    summary: "Phoebe and Joey purposely set Ross and Rachel up on bad dates in the hopes they'll get back together. Monica and Chandler babysit Emma.",
    airdate: "6 Feb. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512919/"
  },
  {
    season: 9,
    episode: 15,
    title: "The One with the Mugging",
    rating: 8.2,
    summary: "Joey gets a part in a stage-play in a painful way. Ross and Phoebe are mugged outside Central Perk, Phoebe realizes that she mugged Ross 18 years ago. Chandler starts his new career as advertising writer.",
    airdate: "13 Feb. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512920/"
  },
  {
    season: 9,
    episode: 16,
    title: "The One with the Boob Job",
    rating: 8.0,
    summary: "When Monica and Chandler both ask Joey for money not wanting the other to know why they are asking for it, Chandler sees that Joey gave money to Monica. Joey makes up that Monica is getting a boob job. Phoebe asks Mike to move in with her, but decides not to when she and Mike argue about their future. Rachel attempts to baby-proof the apartment, but makes Joey go insane when he can't open anything.",
    airdate: "20 Feb. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512921/"
  },
  {
    season: 9,
    episode: 17,
    title: "The One with the Memorial Service",
    rating: 8.3,
    summary: "When Chandler and Ross joke around on their college website, Ross is accused of being dead which leads to the fact that he was not popular in college. Joey is not willing to give his favorite stuffed animal, Hugsy, to Emma. Monica helps Phoebe not call Mike.",
    airdate: "13 Mar. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512922/"
  },
  {
    season: 9,
    episode: 18,
    title: "The One with the Lottery",
    rating: 8.5,
    summary: "Hoping to win a huge jackpot, the friends pool their money and buy dozens of lottery tickets. However, they bicker over how to spend the fortune if they win, and Monica irritates everyone else by buying tickets just for her and Chandler.",
    airdate: "3 Apr. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512923/"
  },
  {
    season: 9,
    episode: 19,
    title: "The One with Rachel's Dream",
    rating: 8.0,
    summary: "Joey is insecure now his Days of Our Lives character Dr. Drake Ramore is getting real dialog, so he asks Rachel to come along to the set, which she loves enough to get romantic dreams, but about Drake, Joey or both? Monica's fancy restaurant Javu is doing great, so she's flat out, too badly to accept joining Chandler on a surprise trip he booked to Vermont. When Phoebe comes sing her gross songs outside Javu, Monica tries to tell her nicely it's inappropriate, lacking style, but Phoebe just gets fancier dress; once told the truth, she starts a nasty row... Meanwhile ...",
    airdate: "17 Apr. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512924/"
  },
  {
    season: 9,
    episode: 20,
    title: "The One with the Soap Opera Party",
    rating: 8.1,
    summary: "Joey throws a cast party on the roof of his building where he ends up making out with an attractive professor that Ross had a crush on.",
    airdate: "24 Apr. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512925/"
  },
  {
    season: 9,
    episode: 21,
    title: "The One with the Fertility Test",
    rating: 8.1,
    summary: "Joey comes to Ross for advice on dating Charlie. Chandler and Monica bump into Janice at a fertility clinic. Rachel has a gift certificate for a massage which Phoebe doesn't want her to use.",
    airdate: "1 May 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512926/"
  },
  {
    season: 9,
    episode: 22,
    title: "The One with the Donor",
    rating: 7.6,
    summary: "When Joey hears that his girlfriend Charlie is an insecure shopper, he volunteers expert Rachel, who dreads being alone with her, so she makes sure Phoebe comes along, by saying she needs a dazzling outfit for the party she's going to just to save face as her ex Mike is coming too. Gynecologist Dr. Connelly tells Chandler and Monica they should keep trying the natural way, but realistically consider a surrogate mother -a nightmare for Monica- or donor sperm insemination, so Chandler invites his 'perfectly eligible' colleague Zach for dinner; they scare him with ...",
    airdate: "8 May 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512927/"
  },
  {
    season: 9,
    episode: 23,
    title: "The One in Barbados Part 1",
    rating: 8.5,
    summary: "To the other friends' fury, it keeps raining except during Ross's speech, which to their amazement is a big hit with the paleontologists. Joey's scientific ignorance decides Charlie to turn her favor to Ross, then they must flee the other academics who intend by tradition to throw the key note-speaker into the pool. Chandler and Phoebe knew better, but Mike accepts to play table tennis against ever-obsessive fluffy monster Monica; when she gets injured, Chandler jumps in and crushes Mike. Rachel can't hide her feelings for Joey anymore, so when he sees Ross and ...",
    airdate: "15 May 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512928/"
  },
  {
    season: 9,    
    episode: 24,
    title: "The One in Barbados Part 2",
    rating: 8.5,
    summary: "To the other friends' fury, it keeps raining except during Ross's speech, which to their amazement is a big hit with the paleontologists. Joey's scientific ignorance decides Charlie to turn her favor to Ross, then they must flee the other academics who intend by tradition to throw the key note-speaker into the pool. Chandler and Phoebe knew better, but Mike accepts to play table tennis against ever-obsessive fluffy monster Monica; when she gets injured, Chandler jumps in and crushes Mike. Rachel can't hide her feelings for Joey anymore, so when he sees Ross and ...",
    airdate: "15 May 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512929/"
  },

  //第十季
{
    season: 10,
    episode: 1,
    title: "The One After Joey and Rachel Kiss",
    rating: 8.4,
    summary: "Joey and Ross both attempt to come clean to each other that they're dating Rachel and Charlie. Phoebe finds out Mike has another girlfriend.",
    airdate: "25 Sep. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512958/"
  },
  {
    season: 10,
    episode: 2,
    title: "The One Where Ross Is Fine",
    rating: 8.7,
    summary: "Rachel and Joey fear for Ross's state of mind after he finds out about their relationship. Chandler and Monica visit some friends of Phoebe to get advice on adoption. Frank and the triplets come to visit.",
    airdate: "2 Oct. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512959/"
  },
  {
    season: 10,
    episode: 3,
    title: "The One with Ross's Tan",
    rating: 8.7,
    summary: "Ross goes to a tanning salon but fails to follow the 'simple' instructions. Joey and Rachel struggle to make the transition from friends to lovers. Monica and Phoebe try to avoid an annoying woman that used to live in their building.",
    airdate: "9 Oct. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512960/"
  },
  {
    season: 10,
    episode: 4,
    title: "The One with the Cake",
    rating: 8.2,
    summary: "On Emma's first birthday, Ross and Rachel convince everyone to delay their plans so they can attend her party, however plans go awry when Emma's birthday cake is revealed.",
    airdate: "23 Oct. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512961/"
  },
  {
    season: 10,
    episode: 5,
    title: "The One Where Rachel's Sister Babysits",
    rating: 8.1,
    summary: "Rachel's sister Amy comes to visit and moves in with her and Joey. Phoebe constantly and accidentally ruins Mike's proposals. Joey struggles to write a letter of recommendation for Monica and Chandler's adoption agency.",
    airdate: "30 Oct. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512962/"
  },
  {
    season: 10,
    episode: 6,
    title: "The One with Ross' Grant",
    rating: 8.0,
    summary: "Ross applies for a paleontology grant and finds out Charlie's ex-boyfriend reviews the applications. Monica and Rachel fight over who has to take Phoebe's ugly painting.",
    airdate: "6 Nov. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512963/"
  },
  {
    season: 10,
    episode: 7,
    title: "The One with the Home Study",
    rating: 8.1,
    summary: "Monica and Chandler nervously prepare for a visit from an adoption worker. Phoebe and Mike keep changing their minds about donating their wedding money to charity. Ross fights Rachel's fear of swings.",
    airdate: "13 Nov. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512964/"
  },
  {
    season: 10,
    episode: 8,
    title: "The One with the Late Thanksgiving",
    rating: 8.8,
    summary: "Joey, Ross, Rachel and Phoebe convince Monica and Chandler to host Thanksgiving, however the four of them end up arriving to dinner an hour late.",
    airdate: "20 Nov. 2003",
    url: "https://www.bilibili.com/bangumi/play/ep512965/"
  },
  {
    season: 10,
    episode: 9,
    title: "The One with the Birth Mother",
    rating: 8.5,
    summary: "Nervous and excited, Monica and Chandler travel to Ohio to meet a young pregnant woman, Erica Simmons, who is considering allowing them to adopt her child when it's born.",
    airdate: "8 Jan. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512966/"
  },
  {
    season: 10,
    episode: 10,
    title: "The One Where Chandler Gets Caught",
    rating: 7.8,
    summary: "Chandler and Monica have decided they want to raise their offspring in a suburban house and even find a perfect one in Westchester. Rachel and Phoebe see Chandler enter a car with his realtor, Nancy, and think he's cheating on Monica. After that misunderstanding is cleared, the other Friends are shocked the couple wants to leave Manhattan, and everybody starts reminiscing about living in New York as a gang, until Nancy calls about their bid on the house.",
    airdate: "15 Jan. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512967/"
  },
  {
    season: 10,
    episode: 11,
    title: "The One Where the Stripper Cries",
    rating: 8.9,
    summary: "Old secrets come to light when Ross and Chandler attend a college reunion. Monica and Rachel throw Phoebe a bachelorette party. Joey appears as a celebrity partner on a game show.",
    airdate: "5 Feb. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512968/"
  },
  {
    season: 10,
    episode: 12,
    title: "The One with Phoebe's Wedding",
    rating: 8.8,
    summary: "Chaos ensues as Phoebe and Mike prepare to get married.",
    airdate: "12 Feb. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512969/"
  },
  {
    season: 10,
    episode: 13,
    title: "The One Where Joey Speaks French",
    rating: 8.3,
    summary: "Phoebe tries to teach Joey to speak French for an audition; Ross and Rachel head out to Long Island after her dad has a heart attack.",
    airdate: "19 Feb. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512970/"
  },
  {
    season: 10,
    episode: 14,
    title: "The One with Princess Consuela",
    rating: 8.5,
    summary: "When Phoebe goes to get her name changed she realizes she can change it to anything she wants, so she changes it to Princess Consuela Banana Hammock, to Mike's displeasure. Chandler finds out that Monica never changed her last name. Monica and Chandler take Joey to their house to convince him it is a good move and he tries to find anything wrong with the house so they won't buy it. Rachel goes to a job interview at a restaurant but her current boss is sitting right beyond her, costing her her job at Ralph Lauren. When cleaning out her office, she bumps into Mark who ...",
    airdate: "26 Feb. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512971/"
  },
  {
    season: 10,
    episode: 15,
    title: "The One Where Estelle Dies",
    rating: 8.4,
    summary: "Ross tries to get Rachel to go back to Ralph Lauren, Joey doesn't know that his agent has died, and Monica and Chandler bump into Janice.",
    airdate: "22 Apr. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512972/"
  },
  {
    season: 10,
    episode: 16,
    title: "The One with Rachel's Going Away Party",
    rating: 8.8,
    summary: "The gang throws Rachel a goodbye party, during which she says goodbye to everybody individually.",
    airdate: "29 Apr. 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512973/"
  },
  {
    season: 10,
    episode: 17,
    title: "The Last One Part 1",
    rating: 9.6,
    summary: "Phoebe races Ross to the airport in a bid to stop Rachel from leaving for Paris. Monica and Chandler pack up their apartment ahead of their move to their new house, and Joey buys Chandler a new chick and duck as a leaving present.",
    airdate: "6 May 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512974/"
  },
  {
    season: 10,
    episode: 18,
    title: "The Last One Part 2",
    rating: 9.6,
    summary: "Phoebe races Ross to the airport in a bid to stop Rachel from leaving for Paris. Monica and Chandler pack up their apartment ahead of their move to their new house, and Joey buys Chandler a new chick and duck as a leaving present.",
    airdate: "6 May 2004",
    url: "https://www.bilibili.com/bangumi/play/ep512975/"
  },

];

const recommendBtn = document.getElementById("recommend-btn");
const episodeInfo = document.getElementById("episode-info");

let remainingEpisodes = [...episodes]; // 创建一个副本用于追踪剩余未选择的剧集

recommendBtn.addEventListener("click", function() {
  if (remainingEpisodes.length === 0) {
    remainingEpisodes = [...episodes]; // 所有剧集都被选中过一次后，重置列表
  }

  const randomIndex = Math.floor(Math.random() * remainingEpisodes.length);
  const recommendedEpisode = remainingEpisodes[randomIndex];

  // 从剩余列表中移除选中的剧集
  remainingEpisodes.splice(randomIndex, 1);

  episodeInfo.innerHTML = `
    <h2>Recommended Episode: Season ${recommendedEpisode.season}, Episode ${recommendedEpisode.episode}</h2>
    <h2>${recommendedEpisode.title}</h2>
    <p>${recommendedEpisode.summary}</p>
    <p><strong>Rating:</strong> ${recommendedEpisode.rating}</p>
    <p><strong>Airdate:</strong> ${recommendedEpisode.airdate}</p>
    <a href="${recommendedEpisode.url}" target="_blank">Watch on Bilibili</a>
  `;
  episodeInfo.style.display = "block";
});
