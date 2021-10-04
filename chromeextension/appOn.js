(function () {
    const str = window.location.href;
    const winArr = str.split('')
        if(winArr[8]+winArr[9]+winArr[10] == 'can'){
    
        document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
        // document.body.style.filter = "invert(1) hue-rotate(180deg)"
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
   

   
})();