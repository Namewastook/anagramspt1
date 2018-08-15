
document.getElementById("findButton").onclick = function () {
document.getElementById("word").innerHTML = ""  
    var typedText = document.getElementById("input").value;

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

    typedText = alphabetize(typedText);

    for (i = 0; i < words.length; i++) {
        console.log(words[i] + "       ");
        let word = alphabetize(words[i])
        if (typedText === word) {

            document.getElementById("word").innerHTML += words[i] + ' ';

        }
    }
}