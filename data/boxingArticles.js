
/**
 * Each article can use any combination of individual tags
 */
var tags = ['india','usa','sachin','sehwag','bradman','biography'];

//TODO - replace article contents as per their title
var articleText = [
                   "It took nearly four decades for a batsman to score the first double-century in one-day international " +
                   "cricket but less than two years for the second. Virender Sehwag, the batsman most touted to break Sachin" +
                   " Tendulkar's record for the highest individual ODI score, didn't merely break it - he shattered it and " +
                   "raised the bar so high that it's hard to imagine anyone, apart from Sehwag himself, raising it higher."+
                   "Unlike Tendulkar in Gwalior, Sehwag wasn't running out of time as he raced towards 200 in Indore. He got" +
                   " there in the 44th over and had made 219 off 149 balls by the time he was dismissed in the 47th." +
                   " And in one of cricket's stranger coincidences, both ODI double-centuries were scored in the same " +
                   "Indian state - Madhya Pradesh - at venues less than 500 kilometres apart.",

					"It took nearly 40 years of waiting and it was well worth it. Sachin Tendulkar chose one of the better bowling attacks doing " +
					"the rounds, to eclipse the record for the highest score, before bringing up the first double-hundred in ODI history. " +
					"The spectators at the Captain Roop Singh Stadium became the envy of cricket fans as they witnessed one of the country's " +
					"favourite sporting heroes play a breathtaking innings which not only set up a 153-run annihilation but also the series " +
					"victory. He may have been run-out cheaply in the previous match, but nothing could deny him today - be it bowlers, fielders," +
					" mix-ups or cramps. Dinesh Karthik, Yusuf Pathan and MS Dhoni stood by and admired as the master unfurled all the shots in" +
					" his repertoire.",
					
					"It was sport – but not as America knows it.There was loud, vibrant noise emanating from the stands of Citi Field. The action" +
					" was fast-paced and enjoyably engaging. Big hits boomed off the bat, acrobatic catches were held.This, however, wasn’t the World" +
					" Series. It was cricket. Legends-style.Sachin Tendulkar and Shane Warne, two of the all-time greats, were attempting to stride where" +
					" no superstar cricketer had dared venture before.The International Cricket Council (ICC) sees the potential of creating cash-rich" +
					" revenue streams in the US while, so they claim, attempting to seriously establish the sport on these shores.Globalizing the game is" +
					" also on the agenda.But despite a crowd of 30,000-plus, who ensured Queens was transformed into a cross between Mumbai and Karachi, the" +
					" notion of getting your average New York sports fan excited about Ricky Ponting’s cover drive is fanciful to say the least.",
					
					"Sir Donald George 'Don' Bradman, AC (27 August 1908 – 25 February 2001), often referred to as 'The Don', was an Australian cricketer, " +
					"widely acknowledged as the greatest Test batsman of all time.[2] Bradman's career Test batting average of 99.94 is often cited as the greatest" +
					" achievement by any sportsman in any major sport.[3]The story that the young Bradman practised alone with a cricket stump and a golf ball is" +
					" part of Australian folklore.[4] Bradman's meteoric rise from bush cricket to the Australian Test team took just over two years. Before his " +
					"22nd birthday, he had set many records for top scoring, some of which still stand, and became Australia's sporting idol at the height of the" +
					" Great Depression.During a 20-year playing career, Bradman consistently scored at a level that made him, in the words of former Australia captain" +
					" Bill Woodfull, 'worth three batsmen to Australia'.[5] A controversial set of tactics, known as Bodyline, was specifically devised by the England " +
					"team to curb his scoring. As a captain and administrator, Bradman was committed to attacking, entertaining cricket; he drew spectators in record numbers." +
					" He hated the constant adulation, however, and it affected how he dealt with others. The focus of attention on his individual performances strained " +
					"relationships with some team-mates, administrators and journalists, who thought him aloof and wary.[6] Following an enforced hiatus due to the Second " +
					"World War, he made a dramatic comeback, captaining an Australian team known as 'The Invincibles' on a record-breaking unbeaten tour of England.",
					
					"Sachin Ramesh Tendulkar ; born 24 April 1973 is a former Indian cricketer and captain, widely regarded to be one of the greatest cricketers of all" +
					" time and by many as the greatest batsman of all time.He took up cricket at the age of eleven, made his Test debut on 15 November 1989 against Pakistan" +
					" in Karachi at the age of sixteen, and went on to represent Mumbai domestically and India internationally for close to twenty-four years. He is the only" +
					" player to have scored one hundred international centuries, the first batsman to score a double century in a One Day International, holds the record for most" +
					" number of runs in both ODI and Test cricket, the only player to complete more than 30,000 runs in international cricket.In 2002 just half way through his career," +
					" Wisden Cricketers' Almanack ranked him the second greatest Test batsman of all time, behind Don Bradman, and the second greatest ODI batsman of all time, behind" +
					" Viv Richards. Later in his career, Tendulkar was a part of the Indian team that won the 2011 World Cup, his first win in six World Cup appearances for India." +
					" He had previously been named 'Player of the Tournament' at the 2003 edition of the tournament, held in South Africa. In 2013, he was the only Indian cricketer" +
							" included in an all-time Test World XI named to mark the 150th anniversary of Wisden Cricketers' "
                   ];

/**
 * Each article is of following structure
 * {<tags>,<articleTitle>,<articleImage>,<articleText>,<author>,<date>}
 */
var boxingArticles = [
                       {'tags': [tags[0],tags[3]], 'title' : 'Maria Sharapova', 'image': 'images/cricket/mariasharapova.png', 'text' : articleText[0], 'author' : 'Hareesh Bhimani', 'date' : '1st June 2013'},
                       {'tags': [tags[0],tags[1],tags[2]], 'title' : 'Wimbledon 2014', 'image': 'images/cricket/sachin200.png', 'text' : articleText[1], 'author' : 'Pankaj Kapur', 'date' : '2nd April 2014'},
                       {'tags': [tags[1]], 'title' : 'US Doubles final 2015', 'image': 'images/cricket/cricketUSA.png', 'text' : articleText[2], 'author' : 'Steve Brenner', 'date' : '9th November 2015'},
                       {'tags': [tags[0],tags[4],tags[5]], 'title' : 'Australian Open', 'image': 'images/cricket/bradman.png', 'text' : articleText[3], 'author' : 'Steve Brenner', 'date' : '9th November 2015'},
                       {'tags': [tags[0], tags[2],tags[5]], 'title' : 'Biography : Boris Becker', 'image': 'images/cricket/sachin.png', 'text' : articleText[4], 'author' : 'Suneel Wiki', 'date' : '9th November 2015'}
                       ]