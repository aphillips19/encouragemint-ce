/**
 * Add your Analytics tracking ID here.
 */
var _AnalyticsCode = 'UA-113384874-2';
/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var possibleMessages = [
    "Follow your dreams!",
    "Reach for the stars!",
    "Do the impossible!",
    "Believe in yourself!",
    "The sky is the limit!",
    "Hang in there!",
    "Don\'t give up!",
    "Keep pushing!",
    "Keep fighting!",
    "Stay strong!",
    "Never give up!",
    "Come on! You can do it!",
    "you've got this!",
    "you can do it!",
    "I be-leaf in you",
    "chin up, friend!",
    "don't worry, everything is under control",
    "you rock!",
    "you rule!",
    "you're doing great!",
    "I know you're trying very hard",
    "keep up the good work!",
    "You are amazing"
]


function pickMessage() {
    // pick a message at random from the list of possible messages
    index = Math.floor(Math.random() * possibleMessages.length)
    message = possibleMessages[index].toLowerCase()
    return message
}

function changeText() {
  // pick a message
  var message = pickMessage()
  // change the text to that message
  document.getElementById("motivational-text").textContent = message;
}


function animateText() {
  // Wrap every word in a span
  $('.ml9 .words').each(function(){
    $(this).html($(this).text().replace(/\S+/g, "<span class='word'>$&</span>"));
  });
  // apply animation
  anime.timeline({loop: true})
    .add({
      targets: '.ml9 .word',
      scale: [0, 1],
      duration: 1500,
      elasticity: 500,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 200,
      easing: "easeOutExpo",
      delay: 5000
    });
}

document.addEventListener('DOMContentLoaded', function () {
    changeText();
    animateText();
  });
