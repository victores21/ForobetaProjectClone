const imageOpinion = document.getElementById("image-opinion");
const windowWidth = window.innerWidth;
if (windowWidth >= 1024) {
  imageOpinion.setAttribute(
    "src",
    "./images/BannerLanding_S20_frases_sello.webp"
  );
} else {
  console.log("I'm so kid boe");
}
