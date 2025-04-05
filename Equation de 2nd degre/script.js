function resoudreEquation()
{
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultatElement = document.getElementById("resultat");

    if (isNaN(a) || isNaN(b) || isNaN(c))
    {
        resultatElement.innerHTML = "entrer des nombres valides";
        return;
    }

    if (a === 0) {
        resultatElement.innerHTML = "Ce n'est pas une équation du second degré (a est different delta 0).";
        return;
    }

    let delta = b * b - 4 * a * c;

    if (delta > 0) 
    {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultatElement.innerHTML = `Deux solutions : x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } 

    else if (delta === 0) 
    {
        let x = -b / (2 * a);
        resultatElement.innerHTML = `Une seule solution : x = ${x.toFixed(2)}`;
    }

    else 
    {
        resultatElement.innerHTML = "Pas de solution reelle (delta < 0).";
    }
}