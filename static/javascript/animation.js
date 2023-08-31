// 봄 슬라이드 인덱스
let slideIndex1 = 0;

// 여름 슬라이드 인덱스
let slideIndex2 = 0;

// 가을 슬라이드 인덱스
let slideIndex3 = 0;

// 겨울 슬라이드 인덱스
let slideIndex4 = 0;

// 봄 슬라이드 쇼 설정
showSlides1();

function showSlides1() {
    const slides1 = [
        document.querySelectorAll(".slides li"),
        document.querySelectorAll(".slides1 li"),
        document.querySelectorAll(".slides2 li")
    ];

    for (let i = 0; i < slides1.length; i++) {
        for (let j = 0; j < slides1[i].length; j++) {
            slides1[i][j].style.display = "none";
        }
    }

    for (let i = 0; i < slides1.length; i++) {
        for (let j = slideIndex1; j < slideIndex1 + 3; j++) {
            if (slides1[i][j]) {
                slides1[i][j].style.display = "block";
            }
        }
    }

    slideIndex1 += 3;
    if (slideIndex1 >= slides1[0].length) {
        slideIndex1 = 0;
    }

    setTimeout(showSlides1, 3000); // 3초마다 슬라이드 전환
}

// 여름 슬라이드 쇼 설정
showSlides2();

function showSlides2() {
    const slides2 = [
        document.querySelectorAll(".slides4 li"),
        document.querySelectorAll(".slides5 li"),
        document.querySelectorAll(".slides6 li")
    ];

    for (let i = 0; i < slides2.length; i++) {
        for (let j = 0; j < slides2[i].length; j++) {
            slides2[i][j].style.display = "none";
        }
    }

    for (let i = 0; i < slides2.length; i++) {
        for (let j = slideIndex2; j < slideIndex2 + 3; j++) {
            if (slides2[i][j]) {
                slides2[i][j].style.display = "block";
            }
        }
    }

    slideIndex2 += 3;
    if (slideIndex2 >= slides2[0].length) {
        slideIndex2 = 0;
    }

    setTimeout(showSlides2, 3000); // 3초마다 슬라이드 전환
}


// 가을 슬라이드 쇼 설정
showSlides3();

function showSlides3() {
    const slides3 = [
        document.querySelectorAll(".slides7 li"),
        document.querySelectorAll(".slides8 li"),
        document.querySelectorAll(".slides9 li")
    ];

    for (let i = 0; i < slides3.length; i++) {
        for (let j = 0; j < slides3[i].length; j++) {
            slides3[i][j].style.display = "none";
        }
    }

    for (let i = 0; i < slides3.length; i++) {
        for (let j = slideIndex3; j < slideIndex3 + 3; j++) {
            if (slides3[i][j]) {
                slides3[i][j].style.display = "block";
            }
        }
    }

    slideIndex3 += 3;
    if (slideIndex3 >= slides3[0].length) {
        slideIndex3 = 0;
    }

    setTimeout(showSlides3, 3000); // 3초마다 슬라이드 전환
}

// 겨울 슬라이드 쇼 설정
showSlides4();

function showSlides4() {
    const slides4 = [
        document.querySelectorAll(".slides10 li"),
        document.querySelectorAll(".slides11 li"),
        document.querySelectorAll(".slides12 li")
    ];

    for (let i = 0; i < slides4.length; i++) {
        for (let j = 0; j < slides4[i].length; j++) {
            slides4[i][j].style.display = "none";
        }
    }

    for (let i = 0; i < slides4.length; i++) {
        for (let j = slideIndex4; j < slideIndex4 + 3; j++) {
            if (slides4[i][j]) {
                slides4[i][j].style.display = "block";
            }
        }
    }

    slideIndex4 += 3;
    if (slideIndex4 >= slides4[0].length) {
        slideIndex4 = 0;
    }

    setTimeout(showSlides4, 3000); // 3초마다 슬라이드 전환
}