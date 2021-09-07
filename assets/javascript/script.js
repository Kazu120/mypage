const output = document.querySelector('#output');

if(window.matchMedia('(prefers-color-scheme: dark)').matches === true){
  output.innerHTML = "あなたは既にダークモードを使用しています";
  
}else{
  (window.matchMedia('(prefers-color-scheme: dark)').matches === true){
    output.innerHTML = "コントロールセンターからダークモードに変更してみてください";
  }
}
