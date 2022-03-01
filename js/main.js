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
let price = 11977170;
let text = "Teljes ajánlott kiskereskedelmi ár (bruttó)";

/* Functions module */
function formFuel(){
    let check = document.getElementById("fuelChecked").checked;
    if(check === false){
        price = 12942370;
    }else{
        price = 11977170;
    }
    document.querySelector(".fullPrice").innerHTML = `${text} ${new Intl.NumberFormat().format(price)} Ft`;
};

function formPropulsion(){
    let check = document.getElementById("PropulsionChecked").checked;
    if(check === false){
        price += 2312670
    }
    document.querySelector(".fullPrice").innerHTML = `${text} ${new Intl.NumberFormat().format(price)} Ft`;
}

function formGear(){
    let check = document.getElementById("GearChecked").checked;
    if(check === false){
        price += 839470
    }
    document.querySelector(".fullPrice").innerHTML = `${text} ${new Intl.NumberFormat().format(price)} Ft`;
}