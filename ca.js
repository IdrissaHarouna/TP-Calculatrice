function calculer(operateur) {
    let premierNombre = parseFloat(document.getElementById('premier-nombre').value);
    let deuxiemeNombre = parseFloat(document.getElementById('deuxieme-nombre').value);
    let troisiemeNombre = parseFloat(document.getElementById('troisieme-nombre').value);
    let resultat;
    switch (operateur) {
      case '+':
        resultat = premierNombre + deuxiemeNombre + troisiemeNombre;
        break;
      case '-':
        resultat = premierNombre - deuxiemeNombre - troisiemeNombre;
        break;
      case '*':
        resultat = premierNombre * deuxiemeNombre * troisiemeNombre;
        break;
      case '/':
        resultat = premierNombre / deuxiemeNombre / troisiemeNombre;
        break;
    }
    document.getElementById('resultat').innerText = 'Résultat : ' + resultat;
  }