
/**
 * Each article can use any combination of individual tags
 */
var tags = ['india','usa','suvs','cars','hatchback','maruti'];

var articleText = [
                  "There are many reasons to appreciate the Lexus ES 350. It is a very well-made and balanced luxury sedan that features both mannered performance and solid value."+
                   " For the up-and-coming executive or doctor, the ES 350 is a mature choice." +
                   "As with most Toyota products, the Lexus ES 350 is not a vehicle that jumps out at you with attention-seeking points of interest. " +
                   "It’s not particularly fast or nimble, there’s no elaborate styling, and the interior is posh without being eccentric." +
                   "Yet everything is there in an understated format that simply gets the job done and somehow looks elegant for it." +
                   "Other than the over-chromed grille edges on our review ES 350, from the outside the car is contemporary and unremarkable. " +
                   "The exterior styling is as coupe-like as any rival you can name and retains a European flair about the rear pillar and wheel well bulges." +
                   "On the inside, the 2016 ES 350 has a plush, well-heeled look about it that, again," +
                   "isn’t too ostentatious or over-the-top with finery. Simple tones, quality materials, and comfort are the clear aim." +
                   "In a busy parking lot of luxury sedans, the Lexus ES 350 sets itself apart with its top-shelf interior." +
                   "Few in the entry-level price class can boast the kind of refinement that this Lexus offers." +
                   "It’s an illustration of what makes the Lexus name.",
                   
                   "Maruti Suzuki's Baleno sedan may have been ahead of time in 1999, but its re-entry into the Indian market in 2015 in a new avatar of premium hatchback could not have come at a better time."+
                   "The premium hatchback Codenamed YRA, will be now officially called Baleno and will be hitting the Indian market in the upcoming festive season and take on the likes of Hyundai Elite i20 and Honda Jazz"

 ];

/**
 * Each article is of following structure
 * {<tags>,<articleTitle>,<articleImage>,<articleText>,<author>,<date>}
 */
var carsArticles = [
                       {'tags': [tags[1],tags[3]], 'title' : 'Review: Classy and dignified 2016 Lexus ES 350', 'image': 'images/auto/lexus.jpg', 'text' : articleText[0], 'author' : 'Pankaj Kapur', 'date' : '2nd April 2014'},
                       {'tags': [tags[4],tags[5]], 'title' : 'Maruti Suzuki christens new premium hatchback as Baleno', 'image': 'images/auto/baleno.jpg', 'text' : articleText[1], 'author' : 'Maruti Suzuki', 'date' : '9th November 2015'}
                       ]