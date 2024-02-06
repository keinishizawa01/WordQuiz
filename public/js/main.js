

const loadQuiz = function () {
    fetch('json/quiz.json') //仕様書項目１　サーバへリクエスト/WordQuiz/public/
        .then(function (response) { //fetchから返答があるとthen実行
            return response.json(); //仕様書項目２　受け取ったデータをオブジェクトに変換
        })
        .then((data) => {
            quiz = data.map((quizList) => {//仕様書項目３　totalCount,totalAnswer要素を追加しquiz変数へ代入
                return{
                    question:quizList.question,
                    answer:quizList.answer,
                    totalCount:0,
                    totalAnswer:0
                }
            }
            );
            setupQuiz(); 
        });
};

const setupQuiz = function () { //仕様書項目４
    randomNumber = Math.floor(Math.random() * quiz.length); //quiz配列の長さを上限とするランダムな整数を生成し、randomNumberへ代入
    randomQuestion = quiz[randomNumber].question; //生成されたrandomNumberをインデックスとし、quiz配列の該当するquestion要素をrandomQuestionへ代入
    if (quiz[randomNumber].totalCount > 0) {  //問題出題回数が0より大きい場合
        questionPercent = Math.floor((quiz[randomNumber].totalAnswer / quiz[randomNumber].totalCount) * 100) + "％"; //問題に対する正解回数÷問題の出題回数*100を整数+％で表示
    } else {
        questionPercent = "データがありません"; //それ以外の場合は正解率表示箇所へ"データがありません"を表示
    }
    console.log(questionPercent);
    document.getElementById('question').textContent = randomQuestion; //ejsのid questionへrandomQuestionを表示
    document.getElementById('answer-input').value = ''; //回答をクリア
    document.getElementById('answerpercent').textContent = questionPercent; //ejsのid answerpercentへ正解率もしくはデータがありませんと表示
};

window.onload = function () {
    loadQuiz();
    document.getElementById('submit-button').addEventListener('click', function () { clickHandler(); });



    const clickHandler = function () {
        if (quiz[randomNumber].answer === document.getElementById('answer-input').value) { //仕様書項目５　取得したデータが答えと一致しているか判別
            document.getElementById('answerResult').textContent = '正解です!'; //仕様書項目６　answeresultへ正解表示
            quiz[randomNumber].totalAnswer++
            quiz[randomNumber].totalCount++
        } else {
            document.getElementById('answerResult').textContent = '不正解です。'; //仕様書項目６　answeresultへ不正解表示
            quiz[randomNumber].totalCount++
        }

        setTimeout(function () { //1秒後に仕様書項目４を再度実行
            setupQuiz();
        }, 1000);
    }
};
