let maoUsuario = parseInt(prompt("Pedra(1), Papel(2), Tesoura(3)"));
let random = parseInt(Math.random() * 3 +1);

let maoMaquina = random;

console.log(maoUsuario);
console.log(maoMaquina);

let resultado = "Sem cálculo";


switch (maoUsuario) {
    case 1:

            if(maoMaquina == 1){
                resultado = "Empate";
            }
        
            if (maoMaquina == 2){
                resultado = "Derrota";
            }
            
            if (maoMaquina == 3){
                resultado = "Vitória";
            }
        break;

    case 2:


            if(maoMaquina == 1){
                resultado = "Vitória";
            }
        
            if (maoMaquina == 2){
                resultado = "Empate";
            }
            
            if (maoMaquina == 3){
                resultado = "Derrota";
            }

        break;
    case 3:


            if(maoMaquina == 1){
                resultado = "Derrota";
            }
        
            if (maoMaquina == 2){
                resultado = "Vitória";
            }
            
            if (maoMaquina == 3){
                resultado = "Empate";
            }

        break;
    
    default:
        alert("Escolha entre os números: 1, 2 ou 3")
        break;
}

alert(resultado);

