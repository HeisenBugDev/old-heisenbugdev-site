window.onload = (function () {
    $('.no-aa-image').each(function (i,img) {
        console.log("hihihihihi");
        console.log(img);
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.webkitImageSmoothingEnabled = false;
        ctx.drawImage($(img)[0], 0, 0, canvas.width, canvas.height);
        $(img)[0].parentNode.replaceChild(canvas, $(img)[0]);
        //$(img).replaceWith(canvas);
    });
});
