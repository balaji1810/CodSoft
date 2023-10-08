const res = document.getElementById("res");
function main(event){
    if (event == "erase"){
        res.innerText = ""
    }
    else if (event == "enter"){
        res.innerText = eval(res.innerText);
    }
    else{
        res.innerText = res.innerText + event;
    }
}