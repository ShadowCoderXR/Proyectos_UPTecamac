function juego(){
        let opc = prompt ("Bienvenido al juego de la vida. ¿Desea jugar? 1 = si 2 = no");

        if (opc==1){
            let opc2 = prompt ("Prefieres el bien? = 1 | o el mal = 2?");
            
            if (opc2==1){
                let opc3 = prompt ("Prefieres el area del arte? = 1 | o de la tecnología? = 2");
                
                if (opc3==1){
                    let opc4 = prompt ("Que area del arte te apaciona mas? | 1 = cine | 2 = musica ");
                    if (opc4 == 1){
                        alert ("ahora eres un gran director de cine, reconocido por peliculas de fantacia que adoran chicos y grandes");
                    }else{
                        alert ("Te convertiste en todo un icono de la musica latio-americana, trayendo de vuelta la cultura de la buena musica");
                    }
                    
        
                }else{
                    let opc5 = prompt("En que escuela deberias estudiar? | UPT = 1 | UNAM = 2 |");
                    if (opc5 == 1){
                        alert ("Buena eleccion, encontraste buenos profesores, una carrera enfocada en lo que deseas y te mantienes cerca de tus seres queridos");
                    }else{
                        alert ("bueno, puedes presumir pero no obtienes gran beneficio, aun que debo aceptar que las instalaciones de CU son buenas");
                    }
                }
    
            }else{
                alert("jamás sigas el camino del mal");
            }

        }else{
            alert("cobarde!!");
        }

}