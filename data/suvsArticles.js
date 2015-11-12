
/**
 * Each article can use any combination of individual tags
 */
var tags = ['india','usa','suvs','cars','hatchback','maruti'];

var articleText = [
                   "Cadillac has undergone something of a renaissance in recent years. It's gone from building heavy, "+
                   "soggy barges for Florida retirees to creating exciting sedans and coupes that can compete with the best Germany has to offer."+
                   " But super-sedans don't make big money – SUVs do, which is why Cadillac's new lightweight XT5 is so important for the American brand."

 ];

/**
 * Each article is of following structure
 * {<tags>,<articleTitle>,<articleImage>,<articleText>,<author>,<date>}
 */
var suvsArticles = [
                       {'tags': [tags[1],tags[2]], 'title' : 'Cadillac unveils heavy-hitting lightweight XT5 crossover', 'image': 'images/auto/cadillac-suv.jpg', 'text' : articleText[0], 'author' : 'Hareesh Bhimani', 'date' : '1st June 2013'}
                       ]