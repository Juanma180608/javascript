function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function guessNumberGame() {
    console.log("Adivina el número secreto (entre 1 y 100)!");
    console.log("Ingresá tu número y te diré si es mayor o menor.");

    let playAgain = true;

    while (playAgain) {
        const secretNumber = generateRandomNumber();
        let attempts = 0;
        let guess;

        do {
            guess = prompt("Ingresa tu número (o escribe 'salir' para terminar):");

            if (guess === null || guess.toLowerCase() === 'salir') {
                console.log("¡Hasta luego! Gracias por jugar.");
                playAgain = false;
                break;
            }

          
            const number = parseInt(guess);
            if (isNaN(number) || number < 1 || number > 100) {
                console.log("Recuerda ingresar un número entre 1 y 100.");
                continue; 
            }

            attempts++;

            if (number === secretNumber) {
                console.log(`¡Fantástico! Adivinaste el número ${secretNumber} en ${attempts} intentos.`);

                const choice = prompt("¿Quieres jugar de nuevo? Escribe 'jugar' para reiniciar o 'salir' para terminar:");

                if (choice === null || choice.toLowerCase() === 'salir') {
                    console.log("¡Hasta luego! Gracias por jugar.");
                    playAgain = false;
                } else if (choice.toLowerCase() === 'jugar') {
                    console.log("¡Vamos de nuevo!");
                } else {
                    console.log("Opción no válida. Saliendo del juego.");
                    playAgain = false;
                }

            } else if (number < secretNumber) {
                console.log("El número secreto es mayor. Sigue intentando.");
            } else {
                console.log("El número secreto es menor. Sigue intentando.");
            }
        } while (guess !== null && parseInt(guess) !== secretNumber);
    }
}

guessNumberGame();
