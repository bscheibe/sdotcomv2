$('#blogNav').addClass('on');

var categories = [];

function switchSelected(clickedElement) {
	if ($('.selected').attr("id") != clickedElement) {
        $( "li" ).removeClass( "selected" );
        $(clickedElement).addClass("selected");
    } 
}

//Have to do the selected category last to allow for multiple category tags
function filterBlogs(filter) {
	if (filter == "ReleaseNotesFilter") {
		categories.forEach(function (category) {
			if (category != "releasenotes") {
				$("." + category).hide();
			}
		})
		$(".releasenotes").show();
	} else if (filter == "StartupsFilter") {
		categories.forEach(function (category) {
			if (category != "startups") {
				$("." + category).hide();
			}
		})
		$(".startups").show();
	} else if (filter == "GeneralFilter") {
		categories.forEach(function (category) {
			if (category != "general") {
				$("." + category).hide();
			}
		})
		$(".general").show();
	} else {
		categories.forEach(function (category) {
			$("." + category).show();
		})
	}
}

//Goes though the categories and sets up on clicks events for all of them
$("#categories > li" ).each(function() {
	$(this).on('click', function () {
		switchSelected(this);
		filterBlogs($(this).attr('id'));
	});
	var category = $(this).text().replace(/\s/g, '').toLowerCase();
	if (category != "all") {
		categories.push(category);
	}
});