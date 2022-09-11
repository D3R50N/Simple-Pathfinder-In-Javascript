
var curr = -1;

// var interval = setInterval(() => {
//     if (curr >= 0)
//         hideNeighbours(steps[curr]);
//     curr++;
    
//     showNeighbours(steps[curr]);
//     if (curr >= steps.length-1) {
//         clearInterval(interval);
//         return;
//     }
// }, 100);



stp_btn.addEventListener('click', (e) => {
    stp_btn.classList.toggle('btn-primary');
    stp_btn.classList.toggle('btn-dark');

    isSetingUp = !isSetingUp;
    stp_btn.innerHTML = isSetingUp ? "End setup" : "Start setup";
});



find_btn.addEventListener('click', (e) => {
    if (isSetingUp) {
        alert("First click on End setup");
        return;
    }
    if (begin==null) {
        alert("Setup a begin step first");
        return;
    }
    if (end==null) {
        alert("Setup a end step first");
        return;
    }
    showNeighbours(begin)
    showNeighbours(end)

});

initSteps();
stp_btn.click();