var xhr = new XMLHttpRequest();
var url = './health.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
    
        var waysList = document.createElement('ul');
        article.attributes.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
    

    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
    
        articlesDiv.appendChild(articleDiv);
      });
}


  xhr.send();
