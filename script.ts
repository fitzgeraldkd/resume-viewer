$(function() {
    $("#control-zoomslider").on("input change", function(e) {
        const input = e.target as HTMLInputElement;
        $(":root").css("--zoom", input.value);
    });
    
    $(".control-zoomin").on("click", function() {
        let newZoom: number = parseInt($(":root").css("--zoom")) + 5;
        newZoom = Math.min(newZoom, parseInt($("#control-zoomslider").attr("max")));
        setZoom(newZoom);
    });
    
    $(".control-zoomout").on("click", function() {
        let newZoom: number = parseInt($(":root").css("--zoom")) - 5;
        newZoom = Math.max(newZoom, parseInt($("#control-zoomslider").attr("min")));
        setZoom(newZoom);
    });

    $(".control-zoomfit").on("click", function () {
        const windowWidth: number = $(window).width();
        const windowHeight: number = $(window).height();
        const documentWidth: number = 2 * styleProperty("--horizontal-margin") + 8.5 * styleProperty("--pixels-per-inch");
        const documentHeight: number = 2 * styleProperty("--vertical-margin") + 11 * styleProperty("--pixels-per-inch");
        const horizontalScale: number = windowWidth / documentWidth;
        const verticalScale: number = windowHeight / documentHeight;
        const newZoom = Math.min(horizontalScale, verticalScale) * 100;
        console.log(windowWidth, windowHeight, documentWidth, documentHeight, horizontalScale, verticalScale);
        setZoom(newZoom);
    });

    function setZoom(zoom: number) {
        $("#control-zoomslider").val(String(zoom));
        $(":root").css("--zoom", zoom);
    }

    function styleProperty(property: string) {
        console.log(property, $(":root").css(property), parseInt($(":root").css(property)))
        return parseInt($(":root").css(property));
    }
});