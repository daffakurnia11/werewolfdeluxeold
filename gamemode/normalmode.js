var i = 7;

function countplus() {
    i++;
    if (i > 21){
        i = 21;
    }
    document.getElementById("numplayer").innerHTML = i;
    document.getElementById("descnumber").innerHTML = i;
    moderator(i);
    werewolf(i);
    bodyguard(i);
    villager(i);
    onecard(i);
}
function countmin() {
    --i;
    if (i < 7) {
        i = 7;
    }
    document.getElementById("numplayer").innerHTML = i;
    document.getElementById("descnumber").innerHTML = i;
    moderator(i);
    werewolf(i);
    bodyguard(i);
    villager(i);
    onecard(i);
}

function moderator(i){
    if (i >= 7 && i < 22) {
        document.getElementById("nummoderator").innerHTML = '1';
    }
    if (i >= 22 && i < 43) {
        document.getElementById("nummoderator").innerHTML = '2';
    }
    if (i >= 43 && i <= 63) {
        document.getElementById("nummoderator").innerHTML = '3';
    }
}

function werewolf(i){
    if (i >= 7 && i < 12){
        document.getElementById("numwerewolf").innerHTML = '2';
    }
    if (i >= 12 && i < 17){
        document.getElementById("numwerewolf").innerHTML = '3';
    }
    if (i >= 17 && i < 22){
        document.getElementById("numwerewolf").innerHTML = '4';
    }
}

function bodyguard(i){
    if (i >= 7 && i < 9) {
        document.getElementById("numbodyguard").innerHTML = '1';
    }
    if (i >= 9 && i < 14) {
        document.getElementById("numbodyguard").innerHTML = '2';
    }
    if (i >= 14 && i < 18) {
        document.getElementById("numbodyguard").innerHTML = '3';
    }
    if (i >= 18 && i < 21) {
        document.getElementById("numbodyguard").innerHTML = '4';
    }
    if (i >= 21 && i < 22) {
        document.getElementById("numbodyguard").innerHTML = '5';
    }
}

function villager(i){
    if (i === 7) {
        document.getElementById("numvillager").innerHTML = '1';
    }
    if (i >= 8 && i < 11) {
        document.getElementById("numvillager").innerHTML = '2';
    }
    if (i >= 11 && i < 15) {
        document.getElementById("numvillager").innerHTML = '3';
    }
    if (i >= 15 && i < 20) {
        document.getElementById("numvillager").innerHTML = '4';
    }
    if (i >= 20 && i < 22) {
        document.getElementById("numvillager").innerHTML = '5';
    }
}

function onecard(i){
    if (i >= 7 && i < 10) {
        document.getElementById("numhunter").innerHTML = '1';
        document.getElementById("numcursed").innerHTML = '';
        document.getElementById("numbomber").innerHTML = '';
        document.getElementById("numalphawolf").innerHTML = '';
        document.getElementById("numtanner").innerHTML = '';
    }
    if (i >= 10 && i < 13) {
        document.getElementById("numhunter").innerHTML = '1';
        document.getElementById("numcursed").innerHTML = '1';
        document.getElementById("numbomber").innerHTML = '';
        document.getElementById("numalphawolf").innerHTML = '';
        document.getElementById("numtanner").innerHTML = '';
    }
    if (i >= 13 && i < 16) {
        document.getElementById("numhunter").innerHTML = '1';
        document.getElementById("numcursed").innerHTML = '1';
        document.getElementById("numbomber").innerHTML = '1';
        document.getElementById("numalphawolf").innerHTML = '';
        document.getElementById("numtanner").innerHTML = '';
    }
    if (i >= 16 && i < 19) {
        document.getElementById("numhunter").innerHTML = '1';
        document.getElementById("numcursed").innerHTML = '1';
        document.getElementById("numbomber").innerHTML = '1';
        document.getElementById("numalphawolf").innerHTML = '1';
        document.getElementById("numtanner").innerHTML = '';
    }
    if (i >= 19 && i < 22) {
        document.getElementById("numhunter").innerHTML = '1';
        document.getElementById("numcursed").innerHTML = '1';
        document.getElementById("numbomber").innerHTML = '1';
        document.getElementById("numalphawolf").innerHTML = '1';
        document.getElementById("numtanner").innerHTML = '1';
    }
}