/**
* This simple code fetches a joke from a public API and display it using * jQuery and Bootstrap. However, the developer was quite in a rush when
* this was written, so the implementation quality is quite bad.
*
* Your job is to fork this jsFiddle and start improving it. You're free
* to rewrite the entire code using any technology you like or feel
* confident, as well as change or improve the design.
*
* What's wrong with it? Well, sometimes it just doesn't show
* anything :( and also people is getting bored of programming jokes,
* they would like something different sometimes but we're afraid
* some content would offend people. Is it possible to customize the
* result? Oh well, we'll leave this details to you, feel free to
* propose solutions. Good work!
*
*/

// API DOC: https://sv443.net/jokeapi/v2/
const apiUrl = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist"; //cambio url così da inserire i "jokes" per tutte le categorie (any) e oscuro quelli offensivi
$.ajax(apiUrl)
	.done(function (data) {
  if(data.type == "twopart") { //nel caso in cui lo scherzo sia composto da 2 parti
    $('.joke-text').html(data.setup);
    $('.joke-answer').html(data.delivery);
    //console.log(data);
  } else { //altrimenti se è una frase singola nascondo la seconda parte e uso .joke anziché .setup
  	$('.joke-text').html(data.joke);
    $('.joke-answer').hide();
  }

  });
