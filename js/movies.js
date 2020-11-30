

    const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"

    const getMovies = fetch(`${moviesUrl}`)

    //Displays loading message until fetch has completed
    function pageLoading(){
        $(document).ajaxStart(function(){
            // Show image container
            $("#loadingMessage").show();
        });
        $(document).ajaxComplete(function(event, request){
            // Hide image container
            $("#loadingMessage").hide();
        });
    }


    function moviesRequest () {
        getMovies
            pageLoading()
            .then(res => res.json())
            // .then(data => console.log(typeof data))
        .then(movies => {
            let html = '<ul>'
            for (let movie of movies) {
                html += `<li>${movie.title}</li>`
            }
            html += '</ul>';
            document.write(html);
        })
    }

moviesRequest()