var pointsArray = document.getElementsByClassName('point');

var animatePoints = function() {  // argument no longer needed since forEach will grab point node

    forEach(pointsArray, revealPoint = function(pointNode) { // grab each node from pointsArray and apply style
        pointNode.style.opacity = 1;
        pointNode.style.transform = "scaleX(1) translateY(0)";
        pointNode.style.msTransform = "scaleX(1) translateY(0)";
        pointNode.style.WebkitTransform = "scaleX(1) translateY(0)";
    });
};

window.onload = function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
        animatePoints(); // remove argument since forEach will access point node
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(); // remove argument since forEach will access point node
        }
    });
}
