function sendMusic() {
    var confirmPassword = "11112018";
    var music = document.getElementById("music_name");
 
	var xhttp = new XMLHttpRequest();

	xhttp.open("POST", "https://docs.google.com/forms/d/1_lAnxPgfZsTRQLApJtVcY9ycKJmtCeV1RB-fyK-qm1Q/formResponse?ifq&entry.874131164=" + music.value + "&submit=Submit", true);
	xhttp.send();



    alert("Obrigado pela sugestão!");

    music.value = "";

}