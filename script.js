function city() {
    alert("Loading weather report...");
}

function hide(element) {
    var element = document.querySelector(".bottom")
    element.remove()
}

function changevalue(element) { 
    for (var i = 1; i <= 8; i++) {
        var element2 = document.getElementById("temperaturenumbers" + i)
        if (element.value == "celsius") {
            var temp = (element2.innerHTML - 32) * 5 / 9
            element2.innerHTML = Math.round(temp)
        }
        else {
            var temp = element2.innerHTML * 9 / 5 + 32
            element2.innerHTML = Math.round(temp)
        }
    }
}
