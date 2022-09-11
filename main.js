

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
    if (begin == null) {
        alert("Setup a begin step first");
        return;
    }
    if (end == null) {
        alert("Setup a end step first");
        return;
    }

    var curr = begin;
    var curr_dir = DIR_R;
    var dir_counter = 0;

  
    var interval = setInterval(() => {
        // return;
        // hideNeighbours(curr);
        curr.classList.add("bg-success")
        let index = parseInt(curr.getAttribute("index"));

        let old_dir = curr_dir;
        // console.log(neighboursIndex(index));

        while (!neighboursIndex(index).includes(index + curr_dir) || old_dir + curr_dir == 0)
            curr_dir = randDir();
        if (old_dir != curr_dir)
            dir_counter += curr_dir;
        if (steps[index + curr_dir] == end) {
            clearInterval(interval);
            return;
        }
        curr = steps[index + curr_dir];

        if (curr == undefined) {
            // alert();
            clearInterval(interval);
            return;
        }
        curr.classList.add("bg-primary")
        // showNeighbours(steps[curr]);
        path.push(curr);

        if (steps[index + curr_dir] == end) {
            clearInterval(interval);
            return;
        }
    }, 100);

});



initSteps();
// stp_btn.click();
// steps[30].click();
// steps[80].click();

// for (let index = 48; index < 58; index++) {
//     steps[index].click();
// }
// steps[81].click();

// steps[69].click();
// stp_btn.click();

