     
      let nombreSecret;
      let essaisRestants = 5;
      
      function startGame() {
          document.getElementById("startScreen").style.display = "none";
          document.getElementById("game").style.display = "block";
          nombreSecret = Math.floor(Math.random() * 100) + 1;
          document.getElementById("essaisRestants").textContent = `Essais restants : ${essaisRestants}`;
      }
      
      function gameOver() {
          document.getElementById("game").style.display = "none";
          document.getElementById("gameOver").style.display = "block";
          document.getElementById("nombreSecret").textContent = nombreSecret;
      }
      
      function verifierNombre() {
          let proposition = parseInt(document.getElementById("guessInput").value);
          let indice = document.getElementById("indice");
      
          if (isNaN(proposition) || proposition < 1 || proposition > 100) {
              alert("Veuillez entrer un nombre valide entre 1 et 100.");
              return;
          }
      
          essaisRestants--;
      
          if (proposition === nombreSecret) {
              alert("Félicitations ! Vous avez trouvé le bon nombre !");
              location.reload(); // Recharge la page pour recommencer le jeu
          } else {
              if (proposition < nombreSecret) {
                  indice.textContent = "C'est plus grand !";
                  indice.style.color = "blue";
              } else {
                  indice.textContent = "C'est plus petit !";
                  indice.style.color = "blue";
              }
      
              if (essaisRestants > 0) {
                  document.getElementById("essaisRestants").textContent = `Essais restants : ${essaisRestants}`;
              } else {
                  gameOver();
              }
          }
      }
       