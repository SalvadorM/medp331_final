
function fetchDataMovies(div,username) {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=73e9c32f5e534d529e1537f3b4f4ae38&language=en-US&page=1";

    $.get(url, (data) => {
        const movies = parseData(data.results)
        displayData(movies, div, username)
    });
}

function parseData(data) {
    var movies = [];
    console.log(data)
    for(i = 0; i < data.length;i++){
        var movie_path = "https://www.themoviedb.org/movie/" + data[i].id;
        var url = 'https://image.tmdb.org/t/p/w185'+ data[i].poster_path;
        var curr = {
            'title': data[i].title,
            'vote': data[i].vote_average,
            'body': data[i].overview,
            'id': data[i].id,
            'popularity' : data[i].popularity,
            'poster': url,
            'link' : movie_path,
        };
        movies.push(curr);
    }
    movies.sort(function(a, b) { return b.vote - a.vote; });
    console.log(movies)
    return movies
}

function displayData(data, div, username) {
    const divElement = $(div);
    $(data).each( (index) => {
        let title = data[index].title;
        let path = data[index].poster;
        let votes = data[index].vote;
        let id = data[index].id;
        let url = "movie.php?username=" + username + "&movie=" + id;
        let newHTML = "<div class=\"card\">  <img class=\"picture\" src="+ path + " style=\"width:100%\"> <div class=\"card-text\"> <h3 class=\"card-title\">"+ title +"</h3> <br> <p class=\"card-votes\">vote average: "+ votes +"</p><a class=\"link\" href="+ url +">Save Movie</a>  </div>    </div>";
    divElement.append(newHTML);
    });
}


$(document).ready(function() {

    const div1 = ".data";
    const username = $('#username');
    fetchDataMovies(div1,username[0].innerText);
 
});

