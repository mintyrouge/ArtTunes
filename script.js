// function upload(){
//     alert("hi");
// }

var loadFile = function(event) {
    var myImage = document.getElementById('output');
    myImage.src = URL.createObjectURL(event.target.files[0]);

    var canvas = document.getElementById("canvas");
    var original = new MarvinImage();
    var image;

    function thresholding(){
        image = original.clone();
        Marvin.thresholding(original, image, 160);
        image.draw(canvas);
    }

    function edgeDetection1(){
        image = original.clone();
        image.clear(0xFF000000);
        Marvin.prewitt(original, image);
        Marvin.grayScale(image, image);
        image.draw(canvas);
    }

    function edgeDetection2(){
        image = original.clone();
        image.clear(0xFF000000);
        Marvin.prewitt(original, image);
        Marvin.invertColors(image, image);
        Marvin.thresholding(image, image, 200);
        Marvin.invertColors(image, image);
        image.draw(canvas);
    }

    original.load(myImage.src, function(){
        //options
        //thresholding();
        //edgeDetection1();
        edgeDetection2();
    });
    
};