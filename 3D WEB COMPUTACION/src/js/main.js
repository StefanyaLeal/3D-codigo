/* Author : Stefanya Leal Tamayo
   Date of creation: 23/08/2023
   Last modification: 23/08/2023
*/

//creation elements

var scene = null,
    camera = null,
    render = null,
    control = null,
    cube = null,
    torus = null,
    cone = null;


const size = 10,
          divisions = 10;

    var material1, material2, material3, mesh1, mesh2, mesh3, geometryC, geometryT, geometryA, figure = [];

function starScene() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xC0EAEA);
    camera = new THREE.PerspectiveCamera(75 // ángulo de vision 
        , window.innerWidth / window.innerHeight, // relación aspecto 16:
        0.1, // Más cerca (no renderiza)
        1000); // Más lejos (no renderiza)


    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('app') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //--- Orbit control ---
        control = new THREE.OrbitControls(camera, renderer.domElement);
        camera.position.set(0,0,0);
        control.update();

    camera.position.z=5;


    //GRID HELPER
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);

    //AXES HELPER
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);


    animate();

    
}

function animate() {
    requestAnimationFrame(animate);
    control.update();
    renderer.render(scene, camera);

    //ARREGLO
    for (let i=0; i<figure.length; i++){

        figure[i].rotation.x += 0.03;
        figure[i].rotation.z += 0.03;


    }


    /*cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    torus.rotation.x += 0.03;
    torus.rotation.z += 0.03;

    cone.rotation.x += 0.07;
    cone.rotation.z += 0.07;
    */
    
}

//RESIZE
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


function poner(form){

    switch (form){

        case "Cubo":
        //crea el cubo
            geometryC = new THREE.BoxGeometry(1, 1, 1);
        

        break;

        case "Torus":
            geometryT = new THREE.TorusGeometry(0.8, 0.1, 5, 20);


        break;

        case "Cone":

            geometryA = new THREE.ConeGeometry(1, 2, 10);

        break;
    }

    //cube
    material1 = new THREE.MeshBasicMaterial( { color: 0xEC7ADD, wireframe: true } );
    //torus
    material2 = new THREE.MeshBasicMaterial( { color: 0x00FF08, wireframe: true } );
    //cone
    material3 = new THREE.MeshBasicMaterial( { color: 0x0008FF, wireframe: true } );
    
    //cube
    mesh1=  new THREE.Mesh( geometryC, material1 );
    //torus
    mesh2=  new THREE.Mesh( geometryT, material2 );
    //cone
    mesh3=  new THREE.Mesh( geometryA, material3 );

    //CUBE
    mesh1.position.x = Math.random() * -(9- 1) + 4.02;
    mesh1.position.z = Math.random() * -(9- 1) + 4.02;

    //TORUS
    mesh2.position.x = Math.random() * -(9- 1) + 4.02;
    mesh2.position.z = Math.random() * -(9- 1) + 4.02;

    //CONE
    mesh3.position.x = Math.random() * -(9- 1) + 4.02;
    mesh3.position.z = Math.random() * -(9- 1) + 4.02;

    
    
    
    

    addcube();
    addtorus();
    addcone();
   
    


}

function addcube(){

    scene.add(mesh1);
    figure.push(mesh1);


    }

function addtorus(){

    scene.add(mesh2);
    figure.push(mesh2);
    
    
        }

function addcone(){

    scene.add(mesh3);
    figure.push(mesh3);
        
        
 }

/*function crearGeometria(){
     // Cubo
     const geometry = new THREE.BoxGeometry( 1, 1, 1 );
     const material = new THREE.MeshBasicMaterial( { color: 0xFFB200,
                                                         wireframe: true } );
     cube = new THREE.Mesh( geometry, material );
     scene.add( cube );
    
     cube.position.x = Math.floor(Math.random() *max);





    }
    
*/




/*
    // Cubo
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0xFFB200,
                                                        wireframe: true } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

     //Torus
    const geometryTorus = new THREE.TorusGeometry( 0.8, 0.1, 5, 20 ); 
    const materialTorus = new THREE.MeshBasicMaterial( { color: 0xEC1818 ,
                                                                 wireframe: true} ); 
    torus = new THREE.Mesh( geometryTorus, materialTorus ); 
    scene.add( torus );

//Cono

    const geometryCone = new THREE.ConeGeometry( 1, 2, 10 );
    const materialCone = new THREE.MeshBasicMaterial({ color: 0xE218EC,
                                                        wireframe: true });
    cone = new THREE.Mesh(geometryCone, materialCone);
    scene.add(cone);

    cone.position.x = 4;   
    torus.position.x = -4;
    camera.position.z = 5;                  ESTO VA DENTRO DE LA FUNCION 
*/


// var: crear variablr: int, float, boolean
// let: valor de la variable
//const: cinstante