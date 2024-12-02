"use strict";

const url = "https://itunes.apple.com/search?term=";
const lista = document.getElementById("lista");

let upis;

function ispis(pjesme) {
  if (pjesme.length === 0) {
    lista.innerHTML = "Nema rezultata";
    return;
  }
  pjesme.forEach((pjesma) => {
    const li = document.createElement("li");
    li.textContent = `Ime: ${pjesma.artistName} Naziv: ${pjesma.trackName}`;
    lista.appendChild(li);
    console.log(pjesma.artistName, pjesma.trackName);
  });
}

function upisPjesme(e) {
  upis = e.target.value.replace(" ", "+");

  if (upis === "") {
    lista.innerHTML = "";
    return;
  }

  fetch(`${url}${upis}&entity=musicVideo`)
    .then((res) => res.json())
    .then((pjesme) => ispis(pjesme.results))
    .catch(console.log("Dogodila se greška"));

  console.log(`${url}${upis}&entity=musicVideo`);
}

document.getElementById("input").addEventListener("input", upisPjesme);
