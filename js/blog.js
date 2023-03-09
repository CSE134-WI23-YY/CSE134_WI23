var movieCnt = 0;
var movieCntAdded = 0;

export function testImport() {
    alert("Function successfully imported");
}

// since delete is called in addEventListener in addMovie, where the element
// movieLi is accessible, input does NOT have to be Id. 
export function deleteMovie(movieLi) {

    const parent_movieLi = movieLi.parentNode;
    parent_movieLi.removeChild(movieLi);
    movieCnt--;
}

const template_movie = document.getElementById('template_movie');
const movieLi = template_movie.content.getElementById('movieLi');


// IMPORTANT: input should be id of movie unordered list
export function addMovie(movieUlId) {
    // movieDiv.

    // why does the following line FAILS?
    //     const clon = movieDiv.content.cloneNode(true);

    const clon_template_movie = template_movie.content.cloneNode(true);



    const movieLi = clon_template_movie.getElementById('movieLi');

    // const clon = document.getElementById('template_movie');
    const movieUl = document.getElementById(movieUlId);
    movieUl.appendChild(movieLi);

    movieCnt++;
    movieCntAdded++;

    movieLi.id = `movie_${movieCntAdded}_${movieUlId}`;
    
    // ************ QUESTION why neither of the following two works? 
    // Uncaught TypeError: Cannot read properties of undefined (reading 'getElementById')
    // const deleteBtn = movieLi.content.getElementById('deleteBtn');

    // movieLi.getElementById is not a function
    // const deleteBtn = movieLi.getElementById('deleteBtn');

    const deleteBtn = movieLi.children['deleteBtn'];


    deleteBtn.addEventListener('click', ()=>{
        
        deleteMovie(movieLi);
    
    });



    // const clon = movieDiv.content.cloneNode(true);


    // const movieLi = clon_template_movie.getElementById('movieLi');

    // // const clon = document.getElementById('template_movie');
    // const movieUl = document.getElementById(movieUlId);
    // movieUl.appendChild(movieLi);

    // movieCnt++;
    // movieCntAdded++;

    // movieLi.id = `movie_${movieCntAdded}_${movieUlId}`;

    // const deleteBtn = clon_template_movie.getElementById('deleteBtn');


    // deleteBtn.addEventListener('click', deleteMovie(movieLi.id));



}