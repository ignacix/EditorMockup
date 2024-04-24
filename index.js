

function activarBtnDownload(){    
    var btn = document.getElementById("btnDownload");
    btn.style.visibility = "visible";            
    }


    function cambiarTexto() {
    // Obtener el iframe (Y obtener el contenido)
    var iframe = document.getElementById('previewFrame');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    //console.log(iframeDoc); 

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var loQueSea = document.getElementById('loQueSea').value;
    var descripcion = document.getElementById('descripcion').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var instagram = document.getElementById('instagram').value;
    var saludo = document.getElementById('saludo').value;
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    var p3 = document.getElementById('p3').value;        
    var color = document.getElementById('color').value;        

    //console.log(color.value);

    // Modificar el contenido dentro del iframe
    iframeDoc.getElementById('nombre').innerText = nombre;
    iframeDoc.getElementById('loQueSea').innerText = loQueSea;
    iframeDoc.getElementById('descripcion').innerText = descripcion;
    //Para los links se modifica el atributo href del anchor
    //(En el caso del email concateno con mailto: para que ejecute alguna app de correo electrónico hacia ese mail)
    iframeDoc.getElementById('sendEmail').href = 'mailto:'+email;
    iframeDoc.getElementById('linkedin').href = linkedin;
    iframeDoc.getElementById('github').href = github;
    iframeDoc.getElementById('instagram').href = instagram;
    iframeDoc.getElementById('saludo').innerText = saludo;
    iframeDoc.getElementById('p1').innerText = p1;
    iframeDoc.getElementById('p2').innerText = p2;
    iframeDoc.getElementById('p3').innerText = p3;
    iframeDoc.getElementById("section2").style.backgroundColor = color;
    
        
    activarBtnDownload();
}


function descargarArchivo() {

    //________DESCARGAR EL HTML DEL IFRAME________

    // Obtener el contenido HTML del iframe MODIFICADO
    var iframe = document.getElementById('previewFrame');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var contenidoHTML = iframeDoc.documentElement.outerHTML;

    // Crear un Blob con el contenido HTML 
    var blob = new Blob([contenidoHTML], { type: 'text/html' });

    // Crear un objeto URL para el Blob
    var url = URL.createObjectURL(blob);

    // Crear un enlace para la descarga
    var a = document.createElement('a');
    a.href = url;
    // (Nombre del archivo a descargar)
    a.download = 'index.html'; 
    a.style.display = 'none'; // Ocultar el enlace

    // Agregar el enlace al documento
    document.body.appendChild(a);

    // Ejecutar un click para iniciar la descarga
    a.click();

    // Limpiar el objeto URL y eliminar el enlace del documento después de la descarga
    setTimeout(function () {
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }, 100);



    //_________ DESCARGAR EL CSS________

    var contenidoCSS = `
    html, body {
        padding: 0%;
        margin: 0%;
        height: 100%;
    }
    /*FUENTE*/
    
    main{
        height: 96%;
        margin: 0%;
        padding: 0%;
        font-family: 'Open Sans', sans-serif;
        display: flex;
        background-color: rgb(252, 252, 252);
    }
    
    body {
        position: relative;
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
    }
    
    #principalCard{
        margin: 3%;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    /*BUTTONS*/
    button{
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
    }
    .button{
        background-color: transparent; 
        color: white; 
        font-size: larger;
        padding: 10px 20px; 
        border: none; 
        cursor: pointer; 
        transition: text-shadow 0.3s ease;
    }
    
    .button:hover {
        color: rgba(255, 255, 255, 0.9); 
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); 
    }
    
    
    /*BOTH SECTIONS*/
    
    section{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1, h5{
        margin-bottom: 0%
    }
    
    h3, h4, h5{
        margin-top: 0%;
        padding-top: 0%;
    }
    
    h4{
        font-weight: normal;
    }
    
    /*SECTION ONE*/
    
    #section1{
        background-color: rgb(252, 252, 252);    
    }

    #photo{    
        width: 90%;
        border-radius: 10px;
    }
    
    #sendEmail {
        text-decoration: none;
        color: white;
        background-color: rgb(44, 44, 44);
        padding: 5px;
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 10px;;
    }
    
    #social{
        display: flex;
        
    }
    #social a img{
        width: 50px;
        margin: 10px;
    }
    

    /*SECTION TWO*/
    
    #section2{
        background-color: ${color.value};    
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(69, 70, 70);
        
    }
    
    #section2 div{    
        margin: 0%;    
        padding-left: 30px;
        width: 85%;
        display: flex;
        flex-direction: column;
        color: azure;        
    }
    
    #section2 div div{
        margin: 0%;
        width: 90%;
    }
    
    
    #section2 div div h4{
        margin-bottom: 0%;
        border-top: solid rgb(54, 54, 54) 2px;
        padding-top: 25px;
    }
    
    
    #section2 div div p{
        margin: 5px 0;
        line-height: 1.5;
    }
    
    
    #technologiesAndLanguages{        
        margin-top: 20px;    
    }
    
    /*FOOTER*/
    
    footer{
        bottom: 0%;
        margin: 0%;
        padding: 0%;
        height: 4%;
        display: flex;
        justify-content: center;
        background-color: rgb(24, 24, 24);
    }
    footer p{
        margin: 0%;
        padding: 0%;
        color: rgb(100, 103, 103);
    
    }
    
    
    /*ANIMACIÓNES*/
    
    .imagen-con-zoom {
        transition: transform 0.3s ease; 
    }
    
    .imagen-con-zoom:hover {
        transform: scale(1.1); 
    }
    
    
    
    
    /*EASTEREGG-LLUVIA DE CORAZONES*/
    #texto{
        cursor: pointer;
    }
    
    .corazon {
        position: fixed; 
        color: red;
        font-size: 50px;
        pointer-events: none; 
        animation: caida 1.5s linear infinite; 
    }
    
    @keyframes caida {
        0% { transform: translateY(-1000px); }
        100% { transform: translateY(100vh); } 
    }
    /*FIN DEL EASTEREGG-LLUVIA DE CORAZONES*/
    
    
    
    
    
    /*RESPONSIVE*/
    
    @media(max-width: 700px){
    
        html{
            height: 100%;
        }
        body{
            height: 100%;
            position: relative;
        }
        main{
            flex-direction: column;
            width: 100%;
            height: 100%;
            clip-path:none;    
        }
    
        #changeLanguage{
            color: #333;
        }
    
        #section1{
            width: 100%;
            height: 48%;
            padding: 70px 0px;    
        }
        #section2{
            width: 100%;
            height: 55%;
            padding: 100px 0px 160px;
            clip-path:none;
            box-shadow: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
        }
        #section2 div{
            display: flex;
            justify-content: center;        
            padding-left: 0%;
            text-align: center;
            align-items: center;
            
        }
    
        #technologiesAndLanguages{
            width: 400px;
        }
    
        footer{
            position: fixed; 
            bottom: 0; 
            width: 100%; 
            padding: 10px; 
            text-align: center;         
        }
    }
    
    
    @media(max-width: 400px){
        #section2{
            width: 100%;
            height: 55%;
            padding: 150px 0px 250px;        
            clip-path:none;
        }
    
        #technologiesAndLanguages{
            width: 300px;
        }
    
        
    }
    @media (max-width: 400px) and (max-height: 750px) {
        #section1{
            padding: 150px 0px;    
        }
        #section2{
            padding:  300px 0px 320px;
        }
    }                
`;
    // Crear un Blob con el contenido CSS
    var blobCSS = new Blob([contenidoCSS], { type: 'text/css' });

    // Crear un objeto URL para el Blob CSS
    var urlCSS = URL.createObjectURL(blobCSS);

    // Crear un enlace para la descarga del archivo CSS
    var aCSS = document.createElement('a');
    aCSS.href = urlCSS;
    // Setear el nombre
    aCSS.download = 'styles.css'; 
    aCSS.style.display = 'none'; // Ocultar el enlace

    // Agregar el enlace CSS al documento
    document.body.appendChild(aCSS);

    // Ejecutar un click para iniciar la descarga
    aCSS.click();

    // Limpiar el objeto URL CSS y eliminar el enlace CSS del documento después de la descarga
    setTimeout(function () {
        URL.revokeObjectURL(urlCSS);
        document.body.removeChild(aCSS);
    }, 100);



    //DESCARGAR FOLDER SRC CON IMAGENES Y LOGOS

            
    // Crear un nuevo objeto JSZip
    var zip = new JSZip();

    // Agregar archivos a la carpeta ZIP
    zip.file("src/iconGithub.png", fetch("src/iconGitHub.png").then(res => res.blob()));
    zip.file("src/iconLinkedin.png", fetch("src/iconLinkedin.png").then(res => res.blob()));
    zip.file("src/iconInstagram.png", fetch("src/iconInstagram.png").then(res => res.blob()));
    zip.file("src/iconProfile.png", fetch("src/iconProfile.png").then(res => res.blob()));
    zip.file("src/logo.png", fetch("src/logo.png").then(res => res.blob()));
    // Agrega más archivos aquí según sea necesario

    // Generar la carpeta ZIP
    zip.generateAsync({ type: "blob" }).then(function (blob) {
    // Crear un objeto URL para el Blob
    var url = URL.createObjectURL(blob);

    // Crear un enlace para la descarga
    var a = document.createElement('a');
    a.href = url;
    a.download = 'src.zip'; // Nombre del archivo ZIP a descargar
    a.style.display = 'none'; // Ocultar el enlace

    // Agregar el enlace al documento
    document.body.appendChild(a);

    // Simular un clic en el enlace para iniciar la descarga
    a.click();

    // Limpiar el objeto URL y eliminar el enlace del documento después de la descarga
    setTimeout(function () {
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }, 100);
    });

}
