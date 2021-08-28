$(function () {
    $("#control-zoomslider").on("input change", function (e) {
        var input = e.target;
        $(":root").css("--zoom", input.value);
    });
    $(".control-zoomin").on("click", function () {
        var newZoom = parseInt($(":root").css("--zoom")) + 5;
        newZoom = Math.min(newZoom, parseInt($("#control-zoomslider").attr("max")));
        setZoom(newZoom);
        // $("#control-zoomslider").val(String(newZoom));
        // $(":root").css("--zoom", newZoom);
    });
    $(".control-zoomout").on("click", function () {
        var newZoom = parseInt($(":root").css("--zoom")) - 5;
        newZoom = Math.max(newZoom, parseInt($("#control-zoomslider").attr("min")));
        setZoom(newZoom);
        // $("#control-zoomslider").val(String(newZoom));
        // $(":root").css("--zoom", newZoom);
    });
    $(".control-zoomfit").on("click", function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var documentWidth = 2 * styleProperty("--horizontal-margin") + 8.5 * styleProperty("--pixels-per-inch");
        var documentHeight = 2 * styleProperty("--vertical-margin") + 11 * styleProperty("--pixels-per-inch");
        var horizontalScale = windowWidth / documentWidth;
        var verticalScale = windowHeight / documentHeight;
        var newZoom = Math.min(horizontalScale, verticalScale) * 100;
        console.log(windowWidth, windowHeight, documentWidth, documentHeight, horizontalScale, verticalScale);
        setZoom(newZoom);
    });
    function setZoom(zoom) {
        $("#control-zoomslider").val(String(zoom));
        $(":root").css("--zoom", zoom);
    }
    function styleProperty(property) {
        console.log(property, $(":root").css(property), parseInt($(":root").css(property)));
        return parseInt($(":root").css(property));
    }
});
