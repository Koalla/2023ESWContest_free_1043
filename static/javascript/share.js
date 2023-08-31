function clip() {
    var url = 'https://koalla.github.io/2023ESWContest_free_1043/templates/koalla.html';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("링크가 복사되었습니다.")
}

function shareKakao() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '퍼스널 컬러 추천 받을래?',
            description: '#임베디드소프트웨어 #코알라 #퍼스널컬러테스트',
            imageUrl: "https://i.ibb.co/wCvPCq3/koalla-Png.png",
            link: {
                webUrl: 'https://koalla.github.io/2023ESWContest_free_1043/templates/koalla.html',
            },
        },
        buttons: [
            {
                title: '퍼스널 컬러 만나기',
                link: {
                    webUrl: 'https://koalla.github.io/2023ESWContest_free_1043/templates/koalla.html',
                },
            },
        ],
    });
}