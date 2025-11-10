
const numberOfFilms =  +prompt ( 'Скільки фільмів ви уже переглянули?', ' ' );
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

// const a = prompt ('Один із останніх переглянутих фільмів?'),
//       b=prompt ('На скільки оціните його?'),
//       c = prompt ('Один із останніх переглянутих фільмів?'),
//       d = prompt ('На скільки оціните його?');
//   personalMovieDb.movies[a]=b;
//   personalMovieDb.movies[c]=d;
// console.log( personalMovieDb);





// let a;
// let b;
// for (let i =0; i<2; i++) {
//    while (isAnswCorrect === false ){
//     a = prompt ('Один із останніх переглянутих фільмів?');
//     if (a !== null)  {a = a.trim();} else continue;
//   if (  a.length > 50 || a.length < 1){
//     isAnswCorrect = false;
//   }  else isAnswCorrect = true;
//   } isAnswCorrect = false;
//   while (isAnswCorrect === false ){
//     b=prompt ('На скільки оціните його?');
//   if (b !== null)  {b = b.trim();} else continue;
//   if (  b.length > 50 || b.length < 1){
//     isAnswCorrect = false;
//   }  else isAnswCorrect = true;
//   } isAnswCorrect = false;
//  personalMovieDb.movies[a]=b;
// }





// for (let i =0; i<2; i++){
// do {  a = prompt ('Один із останніх переглянутих фільмів?');
//  if (a !== null)  {
//   a = a.trim();
// }} while (
// (a === null || a.length < 1 || a.length > 50)
// )

// do {  b=prompt ('На скільки оціните його?');
  
//  if (b !== null)  {
//   b = b.trim();
// }} while (
// (b === null || b.length < 1 || b.length > 50)
// )

// personalMovieDb.movies[a] = b;
// }

 let a; 
 let b;
 let isCorrect;
 let times = 1;

 for (let i = 0; i< 2; i++) { 
    for ( let j =0; j< numberOfFilms; j++) {
    a = prompt ('Один із останніх переглянутих фільмів?'); 
    if (a !== null)  {  a = a.trim();}
    if (a === null || a.length < 1 || a.length > 50) {
    isCorrect = false;    }
   if( !isCorrect) {    times++;   } else  times =1; isCorrect = false;
   }

 for (let i = 0; i< 2; i++) { 
    for ( let j =0; j< numberOfFilms; j++) {
    b=prompt ('На скільки оціните його?'); 
    if (b !== null)  {  b = b.trim();}
    if (b === null || b.length < 1 || b.length > 50) {
    isCorrect = false;    }   if( !isCorrect) {    times++;   } else  times =1; isCorrect = false;
   } 
  }
 personalMovieDb.movies[a] = b;
 }

 console.log( personalMovieDb);

 if (numberOfFilms>30) {
 console.log ( "Вы киноман");
 }else if(numberOfFilms <10) {
 console.log ( "Просмотрено довольно мало фильмов" );
 } else if( numberOfFilms>=10 && numberOfFilms<= 30) {
  console.log ("Вы классический зритель");
 } else   console.log ("Произошла ошибка");