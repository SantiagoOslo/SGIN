<!DOCTYPE html>
<html lang ="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technoinnova</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/estilos.css">

</head>
<body>
   

    <main>
            <div class="contenedor__todo"> 

                <div class="caja__trasera"> 
                    <div class="caja__trasera-login" >
                        <h3>¿Ya tienes cuenta?</h3>
                        <p>Incia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Inciar sesión</button>
                    </div>

                    <div class="caja__trasera-register" >
                        <h3>¿Aún no tienes cuenta?</h3>
                        <p>Registrate para entrar en la página</p>
                        <button id="btn__registrarse">Registrarse</button>
                    </div>
                </div>

                <div class="contenedor__login-register">            
                    <form action="/sistemadegestion/php/login_usuario_be.php" method="POST"  class="formulario__login">                         
                        <h2>Iniciar sesión</h2>
                        <input type="text" placeholder="Correo electrónico" name="correo">
                        <input type="password" placeholder="Contraseña" name="clave">
                        <button>Entrar</button>

                    </form>
                    
                    <form action="/sistemadegestion/php/registro_usuario_be.php" method="POST" class="formulario__register">                             
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre Completo" name="nombre_completo">
                        <input type="text" placeholder="Correo electrónico" name="correo">
                        <input type="text" placeholder="Usuario" name="usuario">
                        <input type="password" placeholder="Contraseña" name="clave">
                        <button>Registrarse</button>

                    </form>
                    
                </div>
            </div>

    </main>

    <script src="Log/Login.js" > </script>

</body>
</html> 