# WordQuiz
 単語帳アプリ

## [仕様書](https://docs.google.com/document/d/1uLT11_0v7FIU90fxK5mgR_tfizftLac-uwWBl0rn7KU/edit#heading=h.cfmpu1ppfpw6)

## 前提
- node.jsのインストール

## インストール方法
1. このリポジトリをクローンします。
2. `cd [clonefolder]`cmdでクローンしたフォルダまで移動します。
3. `npm install`でexpressをインストールします。
4. `node app.js`で起動します。
 
## 問題追加方法
1. クローンされたフォルダの中のpublic>json>quiz.jsonファイルをテキストエディタで開きます。
2. `[]`配列の中で`{"question"と"answer"}`のオブジェクトを記載します。
3. 記入例  
```js
[
  {
    "question": "追加したい問題",  //問題文を" "で囲んで記載し、question要素とanswer要素は","で区切ってください。
    "answer": "問題に対する答え" //答えを" "で囲んで記載してください。
  }, //更に問題を追加したい場合は","でオブジェクトを区切ってください。
  {
    "question": "追加したい問題",
    "answer": "問題に対する答え"
  } //最後に追加したオブジェクトには","は付けないでください。
]
```
