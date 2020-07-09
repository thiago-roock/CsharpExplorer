$(".modoDark").hide();
var xx = "corPreta";
$("#modoWhite").click(function() {
    mudandoCor();
});
$("#modoDark").click(function() {
    mudandoCor();
});

function mudandoCor() {
    if (xx == "corBranca") {
        $("#corpo").addClass("dark");
        xx = "corPreta";
        $(".modoDark").hide();
        $(".modoWhite").show();

    } else {
        $("#corpo").removeClass("dark");
        xx = "corBranca";
        $(".modoDark").show();
        $(".modoWhite").hide();
    }
}

$(".copy").click(function() {
    $(".copy__popover").addClass("show");
});