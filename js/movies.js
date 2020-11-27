

    const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"

    const getMovies = fetch(`${moviesUrl}`)


    function moviesRequest (){
        getMovies
            .then(rep => rep.json())
            .then(data => console.log(data))
    }

    moviesRequest();


