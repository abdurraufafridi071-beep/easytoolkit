const image = document.getElementById("image");
const preview = document.getElementById("preview");

if(image){
    image.addEventListener("change", function(){
        const file = this.files[0];

        if(file){
            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";
        }
    });
}
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}
const themeBtn = document.getElementById("themeBtn");

if(themeBtn){
themeBtn.onclick = function(){

document.body.classList.toggle("dark-mode");

themeBtn.innerText =
document.body.classList.contains("dark-mode")
? "☀️ Light Mode"
: "🌙 Dark Mode";

};
}
