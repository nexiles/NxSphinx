function setSpanIGP(){
    var clsElementList=document.getElementsByTagName('span');
}

function setSpaninPara(pClassList){
    for(var i=0; i<=pClassList.length; i++){
        if(pClassList[i]){
            var para_html=pClassList[i].innerHTML;
            para_html='<samp>'+para_html+'</samp>';
            pClassList[i]=para_html;
        }
    }
}

function init(){
    setSpanIGP();
}
window.onload=init;

