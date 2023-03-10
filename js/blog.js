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
// const movieLi = template_movie.content.getElementById('movieLi');


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

    const deleteBtn = movieLi.children['deleteMovieBtn'];


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


// refers to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog


const addMovieBtn1 = document.getElementById('addMovieBtn1');
const dialog_addMovie = document.getElementById("dialog_addMovie");
const output_addMovie = document.getElementById('output_addMovie');
const confirmBtn_addMovie = document.getElementById('confirmBtn_addMovie');
// const form_addMovie = document.getElementById('form_addMovie');
const select_addMovie = document.getElementById('select_addMovie');



addMovieBtn1.addEventListener('click', ()=>{
    dialog_addMovie.showModal();

    // how to make the movie li entry appear AFTER the dialog?
    addMovie('movieUl_1');
});

// The guide gives (e) \\\\\\\\\\\\\\\\\\ WHY
// select_favPartDialog.addEventListener('change', (e)=> {
select_addMovie.addEventListener('change', ()=> {
    confirmBtn_addMovie.value = select_addMovie.value;
});

dialog_addMovie.addEventListener('close', ()=> {
    // output_favPartDialog.innerText = "Thank you!"+${dialog_favPartDialog.returnValue};
    // output_favPartDialog.innerHTML= `Thank you! ${dialog_favPartDialog.returnValue}`;
    output_addMovie.value= `Thank you! ${dialog_addMovie.returnValue}`;
    // returnValue_favDialog_purified = DOMPurify.sanitize(favDialog.returnValue); 
    // output_favPartDialog.value = 'ReturnValue: ${returnValue_favDialog_purified}.';
});



// obj = documetn.createELement('ul');

// obj.innerHTML = `<h1 id='title> <' ` ' ` '