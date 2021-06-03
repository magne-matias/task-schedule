document.getElementById('formTask').addEventListener('submit', saveTask);
//el documento selecciona formTask. y cuando se presiona el evento submit, ejecuta la funcion saveTask


function saveTask(){
    
    e.preventDefault();//evita que se refresque la pagina cuando le das a confirm

    let title = document.getElementById('title').value;//de esta menera logramos ingresar a que es lo que se escribe en ADD TASK
    //esto necesita ser una constante para ser reutilizable en el resto de nuestra app

    let description = document.getElementById('description').value; //same

    const task ={//creamos el objeto para ordenar nuestra data  
        title, //title:title
        description // description:description
    };

}