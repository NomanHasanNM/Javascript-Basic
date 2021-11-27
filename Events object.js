
window.addEventListener("load", function()
{
    console.log("load");
});
window.addEventListener("unload", function()
{
   console.log("unload");
});
window.addEventListener("scroll", function()
{
    console.log("scroll");
});
window.addEventListener("scroll", function()
{
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});
