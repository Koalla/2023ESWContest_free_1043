// 필요한 변수들 선언
const qna = document.querySelector("#qna");
const qBox = document.querySelector('.qBox');
const aBox = document.querySelector('.aBox');
const imageUrl = getImageUrl();

// 질문 목록의 마지막 인덱스
const endPoint = 9;
// 현재 질문 인덱스 초기화
let qIdx = 0;

// 유형에 따른 랜덤 색상을 반환하는 함수
function getRandomColor(type) {
    const answer = qnaList[qIdx].a.find(answer => answer.type === type);
    return answer.color;
}

function goNext() {
    if (qIdx === endPoint) {
        goResult();
        return;
    }

    qBox.innerHTML = qnaList[qIdx].q;
    aBox.innerHTML = '';

    const imageUrl = getImageUrl(); // 이미지 URL 생성

    for (let i = 0; i < qnaList[qIdx].a.length; i++) {
        const answerText = qnaList[qIdx].a[i].answer;
        const answerType = qnaList[qIdx].a[i].type;
        addAnswer(answerText, answerType, imageUrl); // 이미지 URL 전달
    }

    qIdx++;

    console.log("Current counts in 'p' array:", p.map(item => item.count));
}


// 답변을 버튼으로 추가하는 함수
function addAnswer(answerText, answerType) {
    const answer_btn = document.createElement('button');
    answer_btn.classList.add('answerList', 'my-5', 'py-3', 'mx-auto', 'fadeIn', 'answerBtnStyle');
    answer_btn.innerHTML = answerText;

    const color = getRandomColor(answerType);
    answer_btn.style.backgroundColor = color;

    switch (answerType) {
        case "spring":
            answer_btn.classList.add('spring');
            break;
        case "summer":
            answer_btn.classList.add('summer');
            break;
        case "fall":
            answer_btn.classList.add('autumn');
            break;
        case "winter":
            answer_btn.classList.add('winter');
            break;
    }

    const circle_div = document.createElement('div');
    circle_div.classList.add('circle2');
    answer_btn.appendChild(circle_div);
    circle_div.style.backgroundImage = `url("${currentImageUrl}")`;

    console.log('Image URL:', imageUrl);

    answer_btn.addEventListener('click', function () {
        switch (answerType) {
            case "spring":
                p[0].count++;
                break;
            case "summer":
                p[1].count++;
                break;
            case "autumn":
                p[2].count++;
                break;
            case "winter":
                p[3].count++;
                break;
        }

        console.log(`Question ${qIdx}: ${answerText}`);

        setTimeout(() => {
            goNext();
        }, 450);
    });

    aBox.appendChild(answer_btn);
}


// 결과 화면으로 이동하는 함수
function goResult() {
    let maxCount = p[0].count;
    let maxIndices = [0];

    for (let i = 1; i < p.length; i++) {
        if (p[i].count > maxCount) {
            maxCount = p[i].count;
            maxIndices = [i];
        } else if (p[i].count === maxCount) {
            maxIndices.push(i);
        }
    }

    if (maxIndices.length > 0) {
        const resultType = maxIndices[0];
        const resultInfo = infoList[resultType];

        if (resultInfo && resultInfo.section) {
            const sectionId = resultInfo.section;
            const sectionElement = document.getElementById(sectionId);

            if (sectionElement) {
                qnaSection.classList.add("hidden");
                sectionElement.classList.remove("hidden");

                const circleDiv = sectionElement.querySelector(".result_spring_div");
                circleDiv.style.backgroundImage = `url("${currentImageUrl}")`;
            } else {
                console.log(`Section with id "${sectionId}" not found.`);
            }
        } else {
            console.log("No valid result info found.");
        }
    } else {
        console.log("No results found.");
    }
}
