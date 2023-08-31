let currentImageUrl = ""; // 초기 이미지 URL

const startBtn = document.getElementById("startBtn");
const homeBtn = document.getElementById("homeBtn");
const cameraBtn = document.getElementById("cameraBtn");
const recameraShowBtn = document.getElementById("recameraShowBtn");
const qnaBtn = document.getElementById("qnaBtn");
const springBtn=document.getElementById("springBtn");
const summerBtn=document.getElementById("summerBtn");
const autumnBtn=document.getElementById("autumnBtn");
const winterBtn=document.getElementById("winterBtn");

const homeSection = document.getElementById("home");
const cameraSection = document.getElementById("camera");
const cameraShowSection = document.getElementById("cameraShow");
const qnaSection = document.getElementById("qna");
const result_springSection=document.getElementById("result_spring");
const result_summerSection=document.getElementById("result_summer");
const result_autumnSection=document.getElementById("result_autumn");
const result_winterSection=document.getElementById("result_winter");
const re_springSection=document.getElementById("re_spring");
const re_summerSection = document.getElementById("re_summer");
const re_autumnSection=document.getElementById("re_autumn");
const re_winterSection=document.getElementById("re_winter");

startBtn.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    cameraSection.classList.remove("hidden");
    cameraShowSection.classList.add("hidden");
    qnaSection.classList.add("hidden");
});

homeBtn.addEventListener("click", () => {
    cameraSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    cameraShowSection.classList.add("hidden");
    qnaSection.classList.add("hidden");
});

const imageUrlBase = `http://192.168.137.165:8080/?action=snapshot`; // 공통으로 사용할 이미지 URL의 베이스 부분

function getImageUrl() {
    return `${imageUrlBase}&timestamp=${Date.now()}`;
}

cameraBtn.addEventListener("click", () => {
    event.stopPropagation();
    currentImageUrl = getImageUrl(); // 이미지 URL 갱신

    const circleDiv = document.querySelector(".circle");
    circleDiv.style.backgroundImage = `url("${currentImageUrl}")`;
    circleDiv.style.backgroundPosition = "center";
    circleDiv.style.backgroundRepeat = "no-repeat";
    circleDiv.style.backgroundSize = "cover";

    cameraSection.classList.add("hidden");
    cameraShowSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
    qnaSection.classList.add("hidden");

    console.log(currentImageUrl);
});


recameraShowBtn.addEventListener("click", () => {
    event.stopPropagation();
    cameraShowSection.classList.add("hidden");
    cameraSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
    qnaSection.classList.add("hidden");
});

qnaBtn.addEventListener("click", () => {
    event.stopPropagation();
    const cameraShowSection = document.querySelector("#cameraShow");
    const qnaSection = document.querySelector("#qna");

    cameraShowSection.classList.add("hidden");
    cameraSection.classList.add("hidden");
    homeSection.classList.add("hidden");
    qnaSection.classList.remove("hidden");

    goNext();

    const circleDiv = document.querySelector(".circle2");
    circleDiv.style.backgroundImage = `url("${currentImageUrl}")`;
    circleDiv.style.backgroundPosition = "center";
    circleDiv.style.backgroundRepeat = "no-repeat";
    circleDiv.style.backgroundSize = "cover";

    console.log(currentImageUrl);
});

springBtn.addEventListener("click", () => {
    event.stopPropagation();
    result_springSection.classList.add("hidden");
    re_springSection.classList.remove("hidden");
});

summerBtn.addEventListener("click", () => {
    event.stopPropagation();
    result_summerSection.classList.add("hidden");
    re_summerSection.classList.remove("hidden");
});

autumnBtn.addEventListener("click", () => {
    event.stopPropagation();
    result_autumnSection.classList.add("hidden");
    re_autumnSection.classList.remove("hidden");
});

winterBtn.addEventListener("click", () => {
    event.stopPropagation();
    result_winterSection.classList.add("hidden");
    re_winterSection.classList.remove("hidden");
});

