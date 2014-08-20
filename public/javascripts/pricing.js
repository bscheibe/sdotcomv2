var starter_monthly = "11.50";
var starter_annually = "9";

var business_monthly = "36.50";
var business_annually = "29";

var professional_monthly = "61.50";
var professional_annually = "49";

$("#starterPrice").html(starter_annually);
$("#businessPrice").html(business_annually);
$("#professionalPrice").html(professional_annually);

function toggleStyles()  {
    $("#monthly").toggleClass("grey");
    $("#monthly").toggleClass("selected");
    $("#annually").toggleClass("right");
    $("#annually").toggleClass("selected");
    $(".switch-pill").toggleClass("right");
}

function monthly () {
    toggleStyles();

    $("#starterPrice").html(starter_monthly);
    $("#businessPrice").html(business_monthly);
    $("#professionalPrice").html(professional_monthly);
    $(".subheader2").html("billed monthly");
}

function annually () {
    toggleStyles();

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
