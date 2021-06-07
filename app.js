document.getElementById('formTask').addEventListener('submit', saveTask);
//el documento selecciona formTask. y cuando se presiona el evento submit, ejecuta la funcion saveTask


function saveTask(e){
    let title = document.getElementById('title').value;//de esta menera logramos ingresar a que es lo que se escribe en ADD TASK
    //esto necesita ser una constante para ser reutilizable en el resto de nuestra app

    let description = document.getElementById('description').value; //same

    const task ={//creamos el objeto para ordenar nuestra data  
        title, //title:title
        description // description:description
    };

    /*localStorage.setItem('tasks',JSON.stringify(task));//nos permite poder almacenar un dato pero necesitamos darle dos parametros, todo queda almacenado en localstorage
    //(nombre, valor del dato ) */

    localStorage.setItem('tasks',JSON.stringify(task));//para convertir un objeto a un string podemos utilizar JSON.stringify, este metodo nos permite convertir un objeto en un string
    //es mejor tenerlos almacenados en formato string
    localStorage.getItem('tasks')//para obtener los datos de arriba, solamente necesitamos pedir el dato


    if(localStorage.getItem('tasks')===null){//si desde el localstorage ya existe un valor llamado tareas y es igual a nulo vamos a crear tareas
        let task=[];
        tasks.push()//para a llenarlo con el metodo push
        
        //almacenarlo en el localstorage
        localStorage.setItem('tasks',JSON.stringify(tasks));
        
    }else{//si ya existe valores vamos a empezar a actualizarlos
        let tasks = JSON.parse(localStorage.getItem('tasks'));//aca obtenemos las tareas que tenemos almacenadas en el localstorage y almacenarla en una variable
        tasks.push(task);//las actualizamos con el metodo push, 
        localStorage.setItem('tasks',JSON.stringify(tasks));//y al mismo tiempo lo almacenamos 
        //para convertir un objeto a un string podemos utilizar JSON.stringify, este metodo nos permite convertir un objeto en un string
    }



    e.preventDefault();//evita que se refresque la pagina cuando le das a confirm

    //todos nuestros datos van a quedar guardados en localStorage
}