const N1 = document.getElementById("Nota1");
const N2 = document.getElementById("Nota2");
const N3 = document.getElementById("Nota3");
const Rspt = document.getElementById("Resul");
const Label = document.getElementById("LabelResul");

function CalcularMedia(){


    const valorNota1 = N1.value;
    const valorNota2 = N2.value;
    const valorNota3 = N3.value;

    if(Number(valorNota1) <= 10 && Number(valorNota2) <= 10 && Number(valorNota3) <= 10 || Number.isInteger(valorNota1) && Number.isInteger(valorNota2) && Number.isInteger(valorNota3)){

        const media = (Number(valorNota1) + Number(valorNota2) + Number(valorNota3)) / 3;
        
        Rspt.value = Math.round(media);



    } else {
        alert("São válidos apenas números inteiros e menores ou iguais a 10!");
        }
    }

    function Limpar(){
        N1.value = "";
        N2.value = "";
        N3.value = "";
        Rspt.value = "";
    }