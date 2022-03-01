/* Controller module */
document.querySelector(".formFuel").addEventListener("click" , callFunction);
document.querySelector(".formPropulsion").addEventListener("click" , callFunction);
document.querySelector(".formGear").addEventListener("click" , callFunction);


function callFunction(){
    formFuel()
    formPropulsion()
    formGear()
}


/* Data module */
let fullPrice = 11977170;
let monthPrice = Math.round(fullPrice / 12);


/* Functions module */
function formFuel(){
    let check = document.getElementById("fuelChecked").checked;
    if(check === false){
        fullPrice = 12942370;
    }else{
        fullPrice = 11977170;
    }
    monthPrice= Math.round(fullPrice / 12)
    document.querySelector(".fullPrice").innerHTML = `${new Intl.NumberFormat().format(fullPrice)} Ft`;
    document.querySelector(".monthPrice").innerHTML = `${new Intl.NumberFormat().format(monthPrice)} Ft / hó`;
};

function formPropulsion(){
    let check = document.getElementById("PropulsionChecked").checked;
    if(check === false){
        fullPrice += 2312670
    }
    monthPrice= Math.round(fullPrice / 12)
    document.querySelector(".fullPrice").innerHTML = `${new Intl.NumberFormat().format(fullPrice)} Ft`;
    document.querySelector(".monthPrice").innerHTML = `${new Intl.NumberFormat().format(monthPrice)} Ft / hó`;
}

function formGear(){
    let check = document.getElementById("GearChecked").checked;
    if(check === false){
        fullPrice += 839470
    }
    monthPrice= Math.round(fullPrice / 12)
    document.querySelector(".fullPrice").innerHTML = `${new Intl.NumberFormat().format(fullPrice)} Ft`;
    document.querySelector(".monthPrice").innerHTML = `${new Intl.NumberFormat().format(monthPrice)} Ft / hó`;
}