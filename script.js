// Mettre en commentaire un bloc de code : Ctrl + K + C
// Enlever le commentaire d'un bloc de code : Ctrl + K + U
// Remettre en forme le code : Ctrl + K + F

window.onload = function () {
  const state = "prod"; // "dev" ou "prod"
  const resultat = document.getElementById("resultat");
  const touches = document.querySelectorAll("#calculatrice th");

  let calcul = "";

  // Click sur touches

  touches.forEach((touche) => {
    touche.addEventListener("click", () => {
        let value = touche.textContent;
        if (value === "C") {
            clear();
        } else if (value === "=") {
            calculer();
        } else {
            ajouterCalcul(value);
        }
    });
  });


  // Ajout dans le input
  function ajouterCalcul(caractere) {
    calcul += caractere;
    notify("Calcul actuel : " + calcul);
    resultat.value = calcul;
  }

  function calculer() {
    try {
      resultat.value = eval(calcul);
      calcul = resultat.value;
    } catch (error) {
      resultat.value = "Erreur";
      console.log("Erreur de calcul : ", error);
      clear();
    }
  }

  function clear() {
    calcul = "";
    resultat.value = "";
  }

  // Si appui sur égal, calcul
  document.getElementById("equal").addEventListener("click", () => {
    calculer();
  });

  function notify(message) {
    if (state === "dev") {
      console.log(message);
    }
  }
};
