$(function () {
    $("#control-zoomslider").on("input", updateZoom);
    function updateZoom(e) {
        console.log(e);
        $(":root").css("--zoom-factor", e.target.value);
    }
});
