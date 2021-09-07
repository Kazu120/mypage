const output = document.querySelector('#output');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  output.innerHTML = "あなたは既にダークモードを使用しています";
} else {
    output.innerHTML = "コントロールセンターからダークモードに変更してみてください";
}
