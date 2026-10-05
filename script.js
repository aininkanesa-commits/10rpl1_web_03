const foto = document.querySelector(".profile img");
    foto.addEventListener("click", function () {
    foto.classList.remove("putar");
    void foto.offsetWidth;
    foto.classList.add("putar");
});