var starter_monthly = "12";
var starter_annually = "9";

var business_monthly = "24";
var business_annually = "19";

var professional_monthly = "60";
var professional_annually = "49";

$('#monthly').on("click", function() {
	$("#monthly").removeClass("grey");
    $("#annually").removeClass("right");
    $(".switch-pill").removeClass("right");

    $("#starterPrice").html(starter_monthly);
    $("#businessPrice").html(business_monthly);
    $("#professionalPrice").html(professional_monthly);
    $(".subheader2").html("billed monthly");
});

$('#annually').on("click", function() {
    $("#annually").addClass("right");
    $("#monthly").addClass("grey");
    $(".switch-pill").addClass("right");

    $("#starterPrice").html(starter_annually);
    $("#businessPrice").html(business_annually);
    $("#professionalPrice").html(professional_annually);
    $(".subheader2").html("billed annually");
});
