$(function() {
    $("#control-zoomslider").on("input change", function(e) {
        const input = e.target as HTMLInputElement;
        $(":root").css("--zoom", input.value);
    });
    
    $(".control-zoomin").on("click", function() {
        let newZoom = parseInt($(":root").css("--zoom")) + 5;
        newZoom = Math.min(newZoom, parseInt($("#control-zoomslider").attr("max")));
        $("#control-zoomslider").val(String(newZoom));
        $(":root").css("--zoom", newZoom);
    });
    
    $(".control-zoomout").on("click", function() {
        let newZoom = parseInt($(":root").css("--zoom")) - 5;
        newZoom = Math.max(newZoom, parseInt($("#control-zoomslider").attr("min")));
        $("#control-zoomslider").val(String(newZoom));
        $(":root").css("--zoom", newZoom);
    });
});