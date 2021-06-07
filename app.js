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

    if(localStorage.getItem('tasks')===null){//si desde el localstorage ya existe un valor llamado tareas y es igual a nulo vamos a crear tareas
        let tasks=[];
        tasks.push(task)//para a llenarlo con el metodo push
        
        //almacenarlo en el localstorage
        localStorage.setItem('tasks',JSON.stringify(tasks));
        
    }else{//si ya existe valores vamos a empezar a actualizarlos
        let tasks = JSON.parse(localStorage.getItem('tasks'));//aca obtenemos las tareas que tenemos almacenadas en el localstorage y almacenarla en una variable
        tasks.push(task);//las actualizamos con el metodo push, 
        localStorage.setItem('tasks',JSON.stringify(tasks));//y al mismo tiempo lo almacenamos 
        //para convertir un objeto a un string podemos utilizar JSON.stringify, este metodo nos permite convertir un objeto en un string
    }


    getTasks();

    document.getElementById('formTasks').requestFullscreen();//para que cuando guardemos una task se resetee el formulario de tasks

    e.preventDefault();//evita que se refresque la pagina cuando le das a confirm

    //todos nuestros datos van a quedar guardados en localStorage
}

function getTasks(){//vamos a hcer una consulta a localsotarge y una vez tenga el dato vamos a mostarlo por pantalla
    let tasks=JSON.parse(localStorage.getItem('tasks'));//quiero obtenrlas tareas en formato JSON y almacenarlo en una variable 
    let tasksView=document.getElementById('tasks');//obtenemos tasks

    tasksView.innerHTML='';//vamos a dejarlo limpio por si ya existen datos

    for(let i=0; i<tasks.length; i++){//de esta manera quedan registros de nuestra tarea mostradas en la consola
        
        let title=tasks[i].title;//esta variable va a almacenar el valor de las tareas en el indice i
        let description=tasks[i].description;//same

        //es d le vamos a insertar dentro de su div (que se encuentra en html)
        tasksView.innerHTML += //+= para que cada tarea cada vez que se recorra se mepiece a agregar dentro tasksView
        `<div class="card">
            <div class="card-body">
            <p>${title} - ${description}</p>
            <a class="btn btn-danger" onclick="deleteTask('${title}')" >
            DELETE</a>
            </div>
        </div>`
    }
}

function deleteTask(title){// a partir de un titulo puede eliminarlo
    let tasks=JSON.parse(localStorage.getItem('tasks'));

    for(let i =0; i<tasks.length; i++){//recorremos los datos del localstorage
        if(tasks[i].title == title){//si alguno de los titulos que estan en las notas coincide con el titulo que se encuentra en local storage
            tasks.splice(i,1);//este metodo nos ayuda a quitar un dato pero tenemos que decirle en que indice
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))//para guardar los cambios cuando eliminamos una task
    getTasks();
}

getTasks();