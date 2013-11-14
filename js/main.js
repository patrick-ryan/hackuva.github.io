var isMobile = navigator.userAgent.match(/Mobile/i) != null;
if (isMobile) {
    $("#title").attr("width", "80%");
}
