
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule));