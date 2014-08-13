/*$( document ).ready(function() {
	$("#listOfBlogs > li" ).each(function() {
		//var id = $(this).attr("id");
		//alert(id);
		$(this).attr("id", $(this).attr("id").replace(/\s/g, ''));
	});
});*/

function switchSelected(clickedElement) {
	if ($('.selected').attr("id") != clickedElement) {
        $( "li" ).removeClass( "selected" );
        $(clickedElement).addClass("selected");
    } 
}

function filterBlogs(category) {
	if (category == "all") {
		$(".ReleaseNotes").show();
		$(".Startups").show();
		$(".General").show();
	} else if (category == "release") {
		$(".ReleaseNotes").show();
		$(".Startups").hide();
		$(".General").hide();
	} else if (category == "startups") {
		$(".ReleaseNotes").hide();
		$(".Startups").show();
		$(".General").hide();
	} else if (category == "general") {
		$(".ReleaseNotes").hide();
		$(".Startups").hide();
		$(".General").show();
	}
}

$('#allFilter').on('click', function () {
    switchSelected(this);
    filterBlogs("all");
});

$('#releaseNotesFilter').on('click', function () {
	switchSelected(this);
	filterBlogs("release");
});

$('#startupsFilter').on('click', function () {
	switchSelected(this);
	filterBlogs("startups");
});

$('#generalFilter').on('click', function () {
	switchSelected(this);
	filterBlogs("general");
});