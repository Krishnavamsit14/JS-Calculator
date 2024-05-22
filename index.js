function Display(value){
    document.getElementById('textarea').value+=value
}
function Answer(){
    var value=document.getElementById('textarea').value
    var ans=eval(value)
    document.getElementById('textarea').value=ans
}
function Clear(){
    document.getElementById('textarea').value=''
}