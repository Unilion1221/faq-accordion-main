var computedStyle = function (el,style) {
    var cs;
    if (typeof el.currentStyle != 'undefined'){
        cs = el.currentStyle;
    }
    else {
        cs = document.defaultView.getComputedStyle(el,null);
    }
    return  cs[style];
}

document.querySelectorAll(".faq-layer-3-box").forEach((element)=>{
    element.childNodes[1].addEventListener('click', ()=>{
        let disp = element.childNodes[3];
        console.log(element.childNodes[1].childNodes[1].getAttribute('src'));
        if(computedStyle(disp, 'display') === 'none'){
            element.childNodes[3].style.display = 'flex';
            element.childNodes[1].childNodes[1].src = './assets/images/icon-minus.svg';
        } else{
            element.childNodes[3].style.display = 'none';
            element.childNodes[1].childNodes[1].src = './assets/images/icon-plus.svg';
        }
    })
})