function botonDesencriptador(){
    desaparecer();
    aparecerBttn();
    desencriptarTxt();
}

function botonEncriptador(){
    desaparecer();
    aparecerBttn();
    encriptarTxt();
}

function botonCopiar(){
    var copyText = document.getElementById("txtOut");
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("txtOut").value="";
}

function  desaparecer(){
    document.getElementById("imgMuneco").style.display="none";
    document.getElementById("txtOutIndication").style.display="none";
    }

function aparecerBttn(){
        document.getElementById("copybttn").style.display="block";
        document.getElementById("txtOut").style.display="block";
    }
    
function encriptarTxt(){
    var x = document.getElementById("txtIn").value;
    let reemplazarTxt = x.replace(/[aeiou]/g, function (letra){
        switch(letra){
            case "a":
            return "ai";
            case "e":
            return "enter";
            case "i":
            return "imes";
            case "o":
            return "ober";
            case "u":
            return "ufat";
            default:
                break;
        }
    })
    document.getElementById("txtOut").value=reemplazarTxt;
    document.getElementById("txtIn").value;
}

function desencriptarTxt(){
    var x = document.getElementById("txtIn").value;
    let reemplazarTxt = x.replace(/(ai|enter|imes|ober|ufat)/g, function (letra){
        switch(letra){
            case "ai":
            return "a";
            case "enter":
            return "e";
            case "imes":
            return "i";
            case "ober":
            return "o";
            case "ufat":
            return "u";
            default:
                break;
        }
    })
    document.getElementById("txtOut").value=reemplazarTxt;
    document.getElementById("txtIn").value;
}
