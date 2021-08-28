$(function () {
    $("#control-zoomslider").on("input change", function (e) {
        var input = e.target;
        $(":root").css("--zoom", input.value);
    });
    $(".control-zoomin").on("click", function () {
        var newZoom = parseInt($(":root").css("--zoom")) + 5;
        newZoom = Math.min(newZoom, parseInt($("#control-zoomslider").attr("max")));
        $("#control-zoomslider").val(String(newZoom));
        $(":root").css("--zoom", newZoom);
    });
    $(".control-zoomout").on("click", function () {
        var newZoom = parseInt($(":root").css("--zoom")) - 5;
        newZoom = Math.max(newZoom, parseInt($("#control-zoomslider").attr("min")));
        $("#control-zoomslider").val(String(newZoom));
        $(":root").css("--zoom", newZoom);
    });
});
