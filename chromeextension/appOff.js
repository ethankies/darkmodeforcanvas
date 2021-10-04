(function () {
    const str = window.location.href;
    const winArr = str.split('')
        if(winArr[8]+winArr[9]+winArr[10] == 'can'){
            console.log('Dark mode for Canvas has been enabled!')
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })

}
})();