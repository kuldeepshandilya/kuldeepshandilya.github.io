$(function() {
	$("#tabs").tabs();
});


function addEmptyLine(ul) {
	var li = document.createElement("li");
	li.innerHTML = "<br>";
	ul.appendChild(li);
}

/**
 * interest = user attribute say 'usa' or 'india' artcles - one of the 5 arrays -
 * cricketArticles etc recommendedList - list into which recommendations to
 * append to
 * 
 */
function matchTags(interest, articles, recommendList) {
	for (index in articles) {
		var tags = articles[index].tags;
		for (tagindex in tags) {
			if (tags[tagindex] == interest) {
				recommendList.push(articles[index]);
				break;
			}
		}
	}

	return recommendList;
}

function drawRecommendations(recommendedArticles, divId, displayDivId) {
	var ul = document.getElementById(divId);
	ul.innerHTML="";
	addEmptyLine(ul);
	for (i in recommendedArticles) {
		//console.log("add article:"+recommendedArticles[i].title);
		addArticle(recommendedArticles[i], ul, displayDivId);
		addEmptyLine(ul);
	}
}

function addArticle(article, ul, displayDiv) {

	var li = document.createElement("li");
	li.innerHTML = "<img src=" + article.image + " alt=" + article.image
			+ " style='width: 30px; height: 20px;'"
			+ " /> &nbsp;&nbsp;<a href='' onclick=renderArticle(" + article
			+ "); >" + article.title + "</a>";
	ul.appendChild(li);

}

function displayArticles(articles, tabId) {
	var index = 0;
	var ul = document.createElement("ul");
	var output = tabId + '_output';
	var output = document.getElementById(output);
	for (i in articles) {
		var articleId = tabId + index;
		var articleLink = "#" + articleId;

		var li = document.createElement("li");
		li.innerHTML = "<a href="
				+ articleLink
				+ " data-toggle=collapse>"
				+ articles[i].title
				+ "</a> 	<div id="
				+ articleId
				+ " class=collapse> 	<table>	<tr><td width='200px' align='left'><img src="
				+ articles[i].image + " alt=" + articles[i].image
				+ " style='width: 180px; height: 150px;'"
				+ " /></td>	<td width='800px' align='top'>" + articles[i].text
				+ "</td>	</tr>	<tr><br></tr>	<tr>		<td>Author</td>	<td><i>"
				+ articles[i].author
				+ "</td>		</tr>	<tr>		<td>Date Published</td>	<td><i>"
				+ articles[i].date + "</td>		</tr>	</table>		</div>";
		addEmptyLine(ul);
		ul.appendChild(li);
		
		index = index + 1;
	}
	output.innerHTML = "<h2>Headline News(" + tabId + ")</h2>";
	output.appendChild(ul);
}
