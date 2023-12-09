let redShad = document.getElementById("green-mist");
let greenShad = document.getElementById("red-mist");
let whineShad = document.getElementById("whine-mist");
let metShad = document.getElementById("met-mist")
let def = document.getElementById("wert")
let mer = document.getElementById("ref")
let deg = document.getElementById("caro")
let y = document.getElementById("myAudio")
let pore = document.getElementById("porche")

function playwo(sound){
    sound.play()
}


redShad.addEventListener("click", function(){
    deg.innerHTML = "V12 ROADSTER"
    mer.innerHTML = "V12 ROADSTER"
    def.innerText = "ASTON MARTIN ROADSTER"
    let style = document.createElement('style')
    style.innerHTML = `
    .ain {
         background: linear-gradient( to top,transparent 50%,black 100%),url("./Aston Martin V12 Vantage config-2.jpg");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .carpic{
        background: url("./Aston Martin V12 Vantage config.jpg");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .met-green{
        border: solid 1px #fdb010;
    }
     `
    document.head.append(style)
})

greenShad.addEventListener("click", function(){
    playwo(y)
    deg.innerHTML = "V12 VANTAGE"
    mer.innerHTML = "V12 VANTAGE"
    def.innerText = "ASTON MARTIN VANTAGE"
    let style = document.createElement('style')
    style.innerHTML = `
    .ain {
         background: linear-gradient( to top,transparent 50%,black 100%), url("Screen_Shot_2022-07-22_at_1.06.59_PM.png");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .carpic{
        background: url("./lat.png");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .met-red{
        border: solid 1px #fdb010;
    }
     `
    document.head.append(style)
})


whineShad.addEventListener("click", function(){
    playwo(pore)
    deg.innerHTML = "PORCHE 935 [2019]"
    mer.innerHTML = "LIMITED SERIES"
    def.innerText = "PORCHE 935"
    let style = document.createElement('style')
    style.innerHTML = 
    `
    .ain {
        background:linear-gradient( to top,transparent 50%,black 100%), url("./porsche_76926.jpg");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .carpic{
        background: url("./pors935_270.jpg");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .met-whine{
        border: solid 1px #fdb010;
    }
     `
    document.head.append(style)
})

metShad.addEventListener("click", function(){
    deg.innerHTML = "BUGGATI-La-voiture-Nior"
    mer.innerHTML = "LIMITED SERIES"
    def.innerText = "BUGGATI-[2021]"
    let style = document.createElement('style')
    style.innerHTML = 
    `
    .ain {
        background: linear-gradient( to top,transparent 50%,black 100%),url("./01-BUGATTI-SOC2022.jpg");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .carpic{
        background: url("./bugatti-lvn.png.adapt.crop191x100.628p.png");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
    }
    .met-club{
        border: solid 1px #fdb010;
    }
     `
    document.head.append(style)
})



// set the date we're counting down to 
var countDownDate4 = new Date("dec 12, 2023 21:31:25").getTime();

// update the count down every 1 second
var x =  setInterval(function() {
    // get todays date and time
    var now = new Date().getTime();
    // find the distance between now and the count down date
    var distance = countDownDate4 - now;
    // time calculations for days, hours, minutes and seconds
    var day =Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000 );

    // output the result in an element with id="demo"
    document.getElementById("heb").innerHTML = day + "H";
    document.getElementById("deb").innerHTML = hours + "D";
    document.getElementById("meb").innerHTML = minutes + "M";
    // document.getElementById("seb").innerHTML = seconds + "|";
    // if the count down is over, write some text
    if (distance <0) {
        clearInterval(x);
    document.getElementById("bro").innerHTML = "EXPIRED" ;
    }
}, 1000);


$(document).ready(function(){
    $("#file").progressbar({value: 10, max:100});
})
