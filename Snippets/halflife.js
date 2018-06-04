var hoursRemaining = 24;
function halflifeStarting (time) {
    for (x = time; x >= 0; x/2) {
    var day = 1;
    var grid = Array([x,day]);
    console.log(grid);
    };
};
halflifeStarting(hoursRemaining);
