console.log('welcome to third project');

//initailizing the news api parameters
// let source = 'bbc-news';
// let apiKey = 'fc91a3b36699f745fe7ea9b4c0d0a280'

//grab the news container
let newAccordion = document.getElementById('newsAccordion');
//create the an AJAX request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=fc91a3b36699f745fe7ea9b4c0d0a280&lang=en`, true);



//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        // console.log(articles);

        let newsHTML = "";

        articles.forEach(function (element, index) {
            console.log(element, index);


            let news = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link  collapsed" type="button " data-toggle="collapse" data-target="#collapse${index}"
         aria-expanded="true" aria-controls="collapse${index}">
                       <b>  Breaking News ${index + 1}:- </b>${element["title"]}
        </button>
         </h2>
        </div>

<div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["description"]}. <a href = "${element['url']}" target = "_blank">Read more here </a> 
        

        </div>
        </div>
        </div>`;
            newsHTML += news;
        });
        newAccordion.innerHTML = newsHTML;
    }
    else {
        console.log('some error occured')
    }
}
xhr.send();
