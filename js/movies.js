function fetchDataMovies(div,movieId,user) {
    const url = "https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=73e9c32f5e534d529e1537f3b4f4ae38&language=en-US";

    $.get(url, (data) => {
        displayData(data, div,user)
    });
}

function displayData(data, div, user) {
        const divElement = $(div);

        let title = data.original_title;
        let path = 'https://image.tmdb.org/t/p/w185'+ data.poster_path;
        let bio = data.overview;
        let vote = data.vote_average;
        let id = data.id;
        let homepage = data.homepage;
        let url = "addMovie.php?username=" + user + "&title=" + id ;
        let newHTML = "<div class=\"card-one\">  <img class=\"picture\" src="+ path + " style=\"width:70%\"> <div class=\"card-text-one\"> <h3 class=\"card-title\">"+ title +"</h3> <br> <p class=\"card-votes\">vote average: "+ vote +"</p><p>"+ bio +"</p> <a class=\"link\" href="+ homepage +">More info</a>  </div> </div>";
        divElement.append(newHTML);

}
 
function displayList(data, div) {
    const divElement = $(div)

    let title = data.original_title;
    let vote = data.vote_average;
    let homepage = data.homepage;
    let release = data.release_date;
    let newHTML = "<div class=\"card-one\"> <div class=\"card-text-one\"> <h3 class=\"card-title\">"+ title +"</h3> <br> <p class=\"card-votes\">vote average: "+ vote +"</p><p>Release date: "+ release +"</p> <a class=\"link\" href="+ homepage +">More info</a>  </div> </div> <br>";
    divElement.append(newHTML);
}

function showMovies(data, div) {
    const movies = []
    for (let i = 0; i < data.length; i++){
        let movieId = data[i].innerText
        const url = "https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=73e9c32f5e534d529e1537f3b4f4ae38&language=en-US";

        $.get(url, (data) => {
            movies.push(data)
            displayList(data,div)
        });
    }
    console.log(movies)
}

$(document).ready(function() {

    const div1 = ".data-one";
    const movieId = $('#movieId');
    const username = $('#username');

    const titles = $('.movie-title-one');

    if (titles.length > 0) {
       showMovies(titles, div1);
    }else {
        fetchDataMovies(div1,movieId[0].innerText,username[0].innerText);
    }
    
 
});

