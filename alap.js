var tomb = [
    {
        "nev":"Babgulyás",
        "kepnev":"1.jpg",
        "elkeszites_ido": 120,
        "kaloria": 110,
    },
    {
        "nev":"Spagetti",
        "kepnev":"2.jpg",
        "elkeszites_ido": 70,
        "kaloria": 78,
    },
    {
        "nev":"Rántotthús",
        "kepnev":"3.jpg",
        "elkeszites_ido": 60,
        "kaloria": 70,
    },
    {
        "nev":"Zsíroskenyér",
        "kepnev":"4.jpg",
        "elkeszites_ido": 5,
        "kaloria": 310,
    },
    {
        "nev":"Natúr csirkemell",
        "kepnev":"5.jpg",
        "elkeszites_ido": 45,
        "kaloria": 70,
    },
]
var sorsolas = () =>
{
    var veletlen = Math.floor(Math.random()* tomb.length)
    console.log(veletlen)
    
    document.getElementById("etelhelye").innerHTML =
    `
    <span style="color:green">
    ${tomb[veletlen].nev}
    </span>
    <br>
    `
    document.getElementById("etelhelye").innerHTML += 
    `
    <img class="kepek" src="${tomb[veletlen].kepnev}" alt="">
    <br>
    `
    
    document.getElementById("etelhelye").innerHTML +=
    `
    <span class="kek">
    ${tomb[veletlen].elkeszites_ido}
    </span>
    perc
    <br>
    `
    
    document.getElementById("etelhelye").innerHTML += 
    `
    <span id="zold">
    ${tomb[veletlen].kaloria}
    </span>
    kcal
    <br>
    `

    //DIZÁJNOLÁS JAVASZKRIPTBEN
    document.getElementById("zold").style.background="grey"
    document.getElementById("zold").style.fontWeight="bold"
    document.getElementById("zold").style.fontFamily="fantasy"
    
}

var sz = ""
for (const elem of tomb)
{
    sz += 
    `
    <div class="col-sm-3"
    <p>${elem.nev}</p>
    <p><img class="img-fluid" src="${elem.kepnev}"</p>
    <p>${elem.elkeszites_ido}</p>
    <p>${elem.kaloria}</p>
    </div>
    `
}
document.getElementById("etelek").innerHTML = sz
console.log(sz)
//console.log(tomb)