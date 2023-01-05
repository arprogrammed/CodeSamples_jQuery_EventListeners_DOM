$("div").addClass("container-fluid justify-content-center text-center");
$("h1").addClass("h1");
$("button").addClass("btn btn-dark col-2");

$(document).keydown(function(event) {
    $("h1").text(event.key);
});

//The $ contains documemt.querySelectorAll()
//it will return all matching elements
//use combined or heirarchal selectors to
//get the desired element.

//addClass and removeClass are a great way to
//control appearance in css with concern separation.

//See jQuery docs for accessing indexable
//elements or active psuedo classes.
