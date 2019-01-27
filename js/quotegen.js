$(document).ready(function() {

  // When Button Is Clicked
  $("#generate").on("click", function(){

    // Get Quote From API
    $.getJSON("http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="  + new Date().getTime(), function(data) {

      // Replace Quote Placeholder With JSON Object
      $("#theQuote").hide().html(data[0].content).fadeIn('slow');

      // Replace Author Placeholder with JSON Object
      $("#theAuthor").hide().html("- " + data[0].title).fadeIn('slow');
    });

  });

  // Populate Twitter Box with Current Quote
  $("#tweet-button").click(function(event){
    window.open("http://twitter.com/intent/tweet?text=" + $("#theQuote").text() + $("#theAuthor").text());
  });

});
