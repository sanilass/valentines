// script.js
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal-carta");
    var iconeCarta = document.getElementById("icone-carta");
    var span = document.getElementsByClassName("fechar")[0];

    iconeCarta.onclick = function() {
        modal.classList.add("modal-aberta");
    }

    span.onclick = function() {
        modal.classList.remove("modal-aberta");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("modal-aberta");
        }
    }
});
