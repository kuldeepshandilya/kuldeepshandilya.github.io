
/**
 * Each article can use any combination of individual tags
 */
var tags = ['india','usa','Maria Sharapova','Roger Federer','boris','biography'];

var articleText = [
                   "Maria Yuryevna Sharapova; born 19 April 1987 is a Russian professional tennis player, who is ranked world No. 3" +
                   " by the Women's Tennis Association (WTA). A United States resident since 1994,[4] Sharapova has competed on the " +
                   "WTA tour since 2001. She has been ranked world No. 1 in singles by the WTA on five separate occasions, for a total" +
                   " of 21 weeks. She is one of ten women, and the only Russian, to hold the career Grand Slam. She is also an Olympic" +
                   " medalist, having earned silver for Russia in women's singles at the 2012 Summer Olympics in London.Sharapova became" +
                   " the world No. 1 for the first time on August 22, 2005, at the age of 18, and last held the ranking for the fifth time" +
                   " for four weeks from June 11, 2012, to July 8, 2012. Her 35 singles titles and five Grand Slam titles—two at the French" +
                   " Open and one each at the Australian Open, Wimbledon, and US Open—rank third among active players, behind Serena and Venus" +
                   " Williams. She won the year-ending WTA Finals in her debut in 2004. She has also won three doubles titles.Despite an injury-prone" +
                   " career, Sharapova has achieved a rare level of longevity in the women’s game. She has won at least one singles title a year from" +
                   " 2003 until 2015, a streak only bested by Steffi Graf, Martina Navratilova, and Chris Evert. Several tennis pundits and former players" +
                   " have called Sharapova one of tennis’s best competitors, with John McEnroe calling her one of the best the sport has ever seen.Sharapova" +
                   " has been featured in a number of modeling assignments, including a feature in the Sports Illustrated Swimsuit Issue. She appeared in" +
                   " many advertisements, including those for Nike, Prince, and Canon, being the face of several fashion houses, most notably Cole Haan." +
                   " Since February 2007, she has been a United Nations Development Programme Goodwill Ambassador, concerned specifically with the Chernobyl" +
                   " Recovery and Development Programme. In June 2011, she was named one of the '30 Legends of Women's Tennis: Past, Present and Future' by" + 
                   "Time and in March 2012 was named one of the '100 Greatest of All Time' by Tennis Channel.",

					"Novak Djokovic defeated Roger Federer for the second straight year in a Wimbledon final, winning the tournament for the third" +
					" time with a 7-6 (7-1) 6-7 (10-12), 6-4, 6-3 victory and rewarding himself by taking a bite out of Centre Court.Djokovic, ranked" +
					"  No. 1 in the world, has now won nine Grand Slam tournaments and kept No. 2 Federer from becoming the oldest man to win Wimbledon" +
					" at age 33. He regained his composure and rallied after Federer won an epic second-set tiebreak that left Djokovic yelling angrily" +
					" from the bench. 'It's a dream come true again. Even though I've won it for a third time, every time it feels like (the) first," +
					"' Djokovic said afterward. 'Today, I knew that Roger was going to come out being very aggressive. I knew he was going to play as he " +
					"always plays in finals and majors -- at the highest possible level. If I wanted to have a chance to win, I needed to stay mentally tough." +
					"'Unfortunately in the second-set tiebreak I had many, many opportunities, but that's why he's a champion. ... He's so calm and he fights 'til" +
					" the last shot.'Asked what he was telling himself as he angrily slapped his feet with his racket and tried to rip his shirt after the second set," +
					" Djokovic replied: 'You don't want to know. But I managed to bounce back.'When it was over Djokovic, who is coached by former German great Boris" +
					" Becker, knelt and picked some grass to eat after the final point",
					
					"Leander Paes passed countryman Mahesh Bhupathi in claiming a men's record ninth Grand Slam mixed doubles title on Friday at the US Open." +
					"Paes teamed with Martina Hingis to defeat Sam Querrey and Bethanie Mattek-Sands 6-4, 3-6, 10-7. The Indian-Swiss pair fired 32 winners and " +
					"staved off four of five break points over the 77-minute affair. They rallied from an early 4-1 deficit in the Match Tie-break, claiming nine" +
					" of the next 12 points to prevail.'Martina said something that was quite interesting,' said Paes. 'She said you have to have the guts to go" +
					" after something, and I don't believe that I personally have the technique or the caliber of talent that Martina has.'One thing I do have is the" +
					" guts. I will go for it. My whole life is about perseverance, just trying to find a way to succeed. Sometimes the chips are against you; sometimes" +
					" they fool you. What I love about this teamwork is that in any partnership there's got to be one person who brings the energy to the team. There's" +
					" got to be one person who takes all the pressure on their shoulder and drives the team forward.'I know if I can keep Martina happy, if I can keep her" +
					" relaxed, the tennis I don't even have to worry about. This young girl is phenomenal on the tennis court and off of it. We actually have our best times" +
					" when we are on the practice court. We were on the practice court before the Australian Open. We were on for like two hours practising for a final. Just" +
					" having fun. I learn a lot from her.'",
					
					"The 2015 Australian Open was a tennis tournament that took place at Melbourne Park from 19 January to 1 February 2015. It was the 103rd edition" +
					" of the Australian Open, and the first Grand Slam tournament of the year.Stanislas Wawrinka was the defending champion in men's singles but lost to" +
					" four-time Australian Open champion Novak Djokovic in the semi-finals. Reigning women's champion Li Na did not defend her title, as she retired from" +
					" professional tennis in September, 2014.[1] Novak Djokovic won an Open Era record fifth men's singles crown by defeating Andy Murray in the finals, and" +
					" this was the third time they met each other in the finals. Serena Williams won an Open Era record six women's singles championships by defeating Maria " +
					"Sharapova in the finals, and this was the second time they met each other in the finals. Simone Bolelli and Fabio Fognini teamed up to win the men's doubles" +
					" title for the first time over the team of Pierre-Hugues Herbert and Nicolas Mahut.[4] Bethanie Mattek-Sands and Lucie Šafárová teamed up to win the women's" +
					" doubles crown for the first time over the team of Chan Yung-jan and Zheng Jie.[5] Martina Hingis and Leander Paes teamed up to win the mixed doubles title, " +
					"it was the second for Hingis and third for Paes, over the defending champions Kristina Mladenovic and Daniel Nestor.The 2015 Australian Open was the 103rd edition" +
					" of the tournament and was held at Melbourne Park in Melbourne, Victoria, Australia.The tournament was run by the International Tennis Federation (ITF) and was" +
					" be part of the 2015 ATP World Tour and the 2015 WTA Tour calendars under the Grand Slam category. The tournament consisted of both men's and women's singles" +
					" and doubles draws as well as a mixed doubles event. There were singles and doubles events for both boys and girls (players under 18), which was part of the " +
					"Grade A category of tournaments, and also singles, doubles and quad events for men's and women's wheelchair tennis players as part of the NEC tour under the Grand Slam category",
					
					"Boris Franz Becker  born 22 November 1967) is a German former world No. 1 professional tennis player. He is a six-time major singles champion," +
					" including having been the youngest Wimbledon men's champion when he was 17. He also won 13 Masters Series titles, five elite indoor titles " +
					"(three ATP Tour Finals, a WCT Finals, and a Grand Slam Cup), and an Olympic gold medal in doubles. Tennis magazine ranked Becker the 11th best male" +
					" player of the period 1965–2005. He is currently coaching Novak Djokovic.Becker was born in Leimen, Germany, the only son of Elvira and Karl-Heinz Becker." +
					" His mother was Catholic, and they raised him as a Catholic.[1][2] His father Karl-Heinz, an architect, founded a tennis centre in Leimen, where Becker learned" +
					" the game.Becker turned professional in 1984, under the guidance of Romanian-born coach Günther Bosch and Romanian manager Ion Tiriac, and won his first professional" +
					" doubles title that year in Munich. As a German teenager, Becker won the Tennis World Young Masters at the NEC in Birmingham in 1985, before taking his first top-level" +
					" singles title in June that year at Queen's Club. Two weeks later, on 7 July, he became the first unseeded player and the first German to win the Wimbledon singles title," +
					" defeating Kevin Curren in four sets. Unseeded, Becker was at that time ranked 20th in ATP ranking,[3] but Wimbledon did not then seed players beyond the top 16. He was the" +
					" youngest ever male Grand Slam singles champion at 17 years, 227 days (a record later broken by Michael Chang in 1989, who won the French Open when he was 17 years, 110 days)." +
					" Two months after his triumph, Becker became the youngest winner of the Cincinnati Open. Becker has since said that The plan from my parents for me was to finish school, go" +
					"to university, get a proper degree and learn something respectful. The last thing on everyone's mind was me becoming a tennis professional"
                   ];

/**
 * Each article is of following structure
 * {<tags>,<articleTitle>,<articleImage>,<articleText>,<author>,<date>}
 */
var tennisArticles = [
                       {'tags': [tags[0],tags[2]], 'title' : 'Maria Sharapova', 'image': 'images/tennis/mariasharapova.jpg', 'text' : articleText[0], 'author' : 'Hareesh Bhimani', 'date' : '1st June 2013'},
                       {'tags': [tags[0],tags[1],tags[2]], 'title' : 'Wimbledon 2014 final', 'image': 'images/tennis/wimbledonfinal.jpg', 'text' : articleText[1], 'author' : 'Pankaj Kapur', 'date' : '2nd April 2014'},
                       {'tags': [tags[0]], 'title' : 'US Mixed Doubles final 2015', 'image': 'images/tennis/USdoublesfinal.jpg', 'text' : articleText[2], 'author' : 'Steve Brenner', 'date' : '9th November 2015'},
                       {'tags': [tags[0],tags[4],tags[5]], 'title' : 'Australian Open 2015', 'image': 'images/tennis/australianopen2015.jpg', 'text' : articleText[3], 'author' : 'Steve Brenner', 'date' : '9th November 2015'},
                       {'tags': [tags[0],tags[1], tags[3],tags[5]], 'title' : 'Biography : Boris Becker', 'image': 'images/tennis/boris.jpg', 'text' : articleText[4], 'author' : 'Suneel Wiki', 'date' : '9th November 2015'}
                       ]