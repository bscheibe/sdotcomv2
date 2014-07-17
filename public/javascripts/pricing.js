var starter_monthly = "12.5";
var starter_annually = "9";

var business_monthly = "24";
var business_annually = "19";

var professional_monthly = "61";
var professional_annually = "49";

function monthly () {
    $("#monthly").removeClass("grey");
    $("#monthly").addClass("selected");
    $("#annually").removeClass("right");
    $("#annually").removeClass("selected");
    $(".switch-pill").removeClass("right");

    $("#starterPrice").html(starter_monthly);
    $("#businessPrice").html(business_monthly);
    $("#professionalPrice").html(professional_monthly);
    $(".subheader2").html("billed monthly");
}

function annually () {
    $("#annually").addClass("right");
    $("#annually").addClass("selected");
    $("#monthly").addClass("grey");
    $("#monthly").removeClass("selected");
    $(".switch-pill").addClass("right");

    $("#starterPrice").html(starter_annually);
    $("#businessPrice").html(business_annually);
    $("#professionalPrice").html(professional_annually);
    $(".subheader2").html("billed annually");
}

$('#toggle').on('click', function () {

    if ($('.selected').attr("id") == "monthly") {
        annually();
    } else {
        monthly();
    }

});

$('#monthly').on("click", function() {
	monthly();
});

$('#annually').on("click", function() {
    annually();
});
