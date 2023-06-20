//Effectuer une requete avec l'objet XmlHttpREQUEST vers le serveur json https://jsonplaceholder.typicode.com/posts
//Initier la requete
let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);

//Creer une fonction qui va gerer la reponse lorsqu'elle seras recu
xhr.onreadystatechange = function()
{
    if(xhr.readyState==4 && xhr.status == 200)
    {
        document.write("Good Job!");
        console.log(xhr.readyState);
        console.log(xhr.status);
    }
}
//Ouvrir et envoyer la requete
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();