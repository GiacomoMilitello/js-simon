/*
fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

function updateTime() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 9, 30, 0);
    let update = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 40, 0);

    let diff = tomorrow - now;
    let diffUpdate = update - now;

    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-h').innerHTML = hours;
    document.getElementById('countdown-m').innerHTML = minutes;
    document.getElementById('countdown-s').innerHTML = seconds;
    
    if (diff < 0 && diffUpdate > 0) {
        clearInterval(interval);
        document.getElementById('oh-no').innerHTML = "you're late!";
    }  else if (diffUpdate < 0) {
        clearInterval(interval);
        tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 9, 30, 0);
        interval = setInterval(updateTime, 1000);
    }
}

let interval = setInterval(updateTime, 1000);