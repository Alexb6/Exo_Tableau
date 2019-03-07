var myTab = [12, -56, 90, 787, 432, 80, 45, 22, 45, -25, 44, 212, -453, 432, 765];

// Ajout de 100 nombre

for (let i = 0; i < 100; i++) {
    do var ajout = Math.ceil(Math.random() * 100)
    while (ajout < 10) {
        myTab.push(ajout);
    }
}


// Trouver le Max
var leMax = 0;

function nbMax(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > leMax) {
            leMax = tab[i];
        } else {
            leMax = leMax;
        }
    }
    return leMax;
}
nbMax(myTab);

// Trouver le Min
var leMin = 0;

function nbMin(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < leMin) {
            leMin = tab[i];
        } else {
            leMin = leMin;
        }
    }
    return leMin;
}
nbMin(myTab);

// La somme des valeurs
var laSom = 0;

function calSom(tab) {
    for (let i = 0; i < tab.length; i++) {
        laSom += tab[i];
    }
    return laSom;
}
calSom(myTab);

// La moyenne des valeurs
var laMoy = laSom / myTab.length;


var myTab1 = []; // tableau des valeurs inférieurs ou égales à 10
var myTab2 = []; // tableau des valeurs supérieures à 10

// Séparaton des valeurs inférieures ou égales à 10
function valInfDix(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] <= 10) {
            myTab1.push(tab[i])
        }
    }
    return myTab1;
}
valInfDix(myTab);

// Séparaton des valeurs supérieures à 10
function valSupDix(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > 10) {
            myTab2.push(tab[i])
        }
    }
    return myTab2;
}
valSupDix(myTab);

// Trier les deux tableaux
// var myTab1Tri = [];
// var myTab2Tri = [];

// function tabTri(initTab, newTab) {
//     newTab[0] = initTab[0];
//     for (let i = 1; i < initTab.length; i++) {
//         if (initTab[i] >= newTab[newTab.length - 1]) {
//             newTab.push(initTab[i]);
//         } else if (initTab[i] <= newTab[0]) {
//             newTab.unshift(initTab[i]);
//         }
//     }
// }

function tabTri(initTab, newTab) {
    newTab[0] = initTab[0];
    for (let i = 1; i < initTab.length; i++) {
        var longueur = newTab.length;
        for (let j = 0; j < longueur; j++) {
            if (initTab[i] < newTab[j]) {
                newTab.splice(j, 0, initTab[i]);
            }
        }
    }
}


// function tabTri(tab) {
//     for (var i = 1; i < tab.length; i++) {
//         for (var j = 0; j < tab.length; j++) {
//             if (tab[i] < tab[j]) {
//                 let tempo = tab[i];
//                 tab[i] = tab[j];
//                 tab[j] = tempo;
//             }
//         }
//     }
// }

tabTri(myTab1, myTab1Tri);
//tabTri(myTab2, myTab2Tri);