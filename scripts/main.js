import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,addStudent,addTeacher,modalAlert} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const opt = document.getElementById('opcion');

opt.onchange = function (){
    var op = document.getElementById('opcion').value; 
    if (op === 'profesor'){
        modalAlert("you can register the teacher!!!")
        document.getElementById('text1').innerText="Nombres y Apellidos:";

        document.getElementById('text2').innerText="Profesion:";
        document.getElementById('text3').innerText="Edad:";
    } 
    
    
    else if (op === 'estudiante'){
        modalAlert("you can register the student!!!")
        document.getElementById('text1').innerText="Nombres:";
        document.getElementById('text2').innerText="Apellidos:";
        document.getElementById('text3').innerText="Promedio:";
    }
}


btnAgregar.onclick = function () {
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    
    const nameApe = document.getElementById('nombre').value;
    const prof = document.getElementById('apellido').value;
    const age = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    if (op === 'estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert("student successfully added!!!")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            } else {
                document.querySelector('#promedio').value= "";
                modalAlert("invalid data!!!");
            }
        } else {
            modalAlert("invalid data!!!");
        }
    } else if (op === 'profesor') {
        if (validateString(nameApe) && validateString(prof) && op !=0){
            if (!isNaN(age)){
                addTeacher(name,lastName,avg)
                modalAlert("adjunct professor")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            }
        } else {
            modalAlert("invalid data!!!");
        }
    }
}
btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if (op === 'estudiante'){
        paintCard("ESTUDIANTE");
    } else if (op === 'profesor') {
        paintCard("PROFESOR");
    }  
})
