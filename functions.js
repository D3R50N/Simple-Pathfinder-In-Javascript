function prevent(e) {
    if (begin == e.target) {
        alert("Is already the begin step");
        return true;
    }
    else if (end == e.target) {
        alert("Is already the end step");
        return true;
    }
    else if (obs.includes(e.target)) {
        alert("Is already an obstacle step");
        return true;
    }

    return false;
}
function initSteps() {
    for (let index = 0; index < total; index++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < total; j++) {
            var th = document.createElement('th');
            th.className = "step pe-auto text-center";
            tr.appendChild(th);

            let idx = steps.length;
            th.innerText = idx;
            th.setAttribute("index", idx);
            steps.push(th);


            th.addEventListener('click', (e) => {
                if (!isSetingUp) {
                    alert("First click on Start setup");
                    return;
                }
                if (setStart) {
                    if (prevent(e)) return;

                    e.target.classList.add("bg-info");
                    begin = e.target;
                    setStart = false;
                    setEnd = true;

                }
                else if (setEnd) {
                    if (prevent(e)) return;
                    e.target.classList.add("bg-danger");
                    end = e.target;
                    setEnd = false;
                    setObs = true;
                }
                else if (setObs) {
                    if (prevent(e)) return;
                    e.target.classList.add("bg-secondary");


                    obs.push(e.target);
                }
            });

        }
        container.appendChild(tr);

    }
}


function expectedNeighboursIndex(idx) {
    return [
        idx + 1, idx - 1, idx + total, idx - total,
        // idx - 1 - total, idx - 1 + total, idx + total + 1, idx - total + 1
    ];
}

function isObs(step) {
    return obs.includes(step);
}
function neighboursIndex(idx) {
    let value = [];
    for (const expectedIndex of expectedNeighboursIndex(idx)) {
        if (steps[expectedIndex] == null || steps[expectedIndex] == undefined || isObs(steps[expectedIndex]) )
            continue;
        if (idx % total == 0) {
            if (expectedIndex == idx - 1)
                continue;
        }
        if (idx % total == total - 1) {
            if (expectedIndex == idx + 1)
                continue;
        }
        value.push(expectedIndex);
    }

    return value;
}

function showNeighbours(step = domId()) {
    let index = parseInt(step.getAttribute("index"));

    for (const i of neighboursIndex(index)) {
        if (steps[i] == end || steps[i] == begin)
            continue;
        steps[i].classList.add("bg-warning");
        steps[i].classList.add("bg-gradient");


        // steps[i].classList.add("text-white");
    }
}


function hideNeighbours(step = domId()) {
    let index = parseInt(step.getAttribute("index"));
    for (const i of neighboursIndex(index)) {
        if (steps[i] == end || steps[i] == begin)
            continue;
        steps[i].classList.remove("bg-warning");
        steps[i].classList.remove("bg-gradient");

        // steps[i].classList.add("text-white");
    }
}