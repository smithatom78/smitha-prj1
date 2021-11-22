function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText);

            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            var groc = myObj.grocery;

            text = "<center><br><br><table border='1' bgcolor='beige' cellpadding='10' height='450' width='750' align='center'><tr><th>SNO</th><th>Item name</th><th>Item Quantity</th><th>Unit(Kg/Gm/Lt)</th><th>Unit Price</th><th>Total</th><th>Purchase Status</th></tr>"
            for (x in groc) {
                if (groc[x].unit == "gm" || groc[x].unit == "ml")
                    groc[x].quantity = (groc[x].quantity / 1000);


                text += "<tr ><td align='center'>" + groc[x].id + "<td>" + groc[x].itemname + " </td>" + "<td align='center'>" + groc[x].quantity + " </td>" + "<td align='center'>" + groc[x].unit + " </td>" + "<td align='center'>" + groc[x].price + " </td>" + "<td >&#8377;" + (groc[x].quantity * groc[x].price) + "<td align='center'>" + groc[x].flag + "</td> </tr> ";
            }
            text += "</table></center>"
            document.getElementById("tab").innerHTML = text;
        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}

function clock() {
    let clocknode = document.querySelector("#clk1");
    return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clocknode.textContent = tick;
    }, 600);
}
clock();