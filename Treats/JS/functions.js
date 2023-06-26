// Coffee Cupcake

document.onmousemove = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById('coffee_cupcake') = -e.offsetX + "px";
    document.getElementById('coffee_cupcake') = -e.offsetY + "px";
}