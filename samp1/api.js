function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "person.json", true);
    xhttp.send();
}