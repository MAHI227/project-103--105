Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90});

    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    
    function take_snap(){
        Webcam.snap(function (data_uri){
                document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>" ;    
               });
    }
    console.log("ml5version",ml5.version);

    classfier=ml5.imageClassifier(' https://storage.googleapis.com/tm-model/tGX-LjlRP/model.json',modelLoaded);
    function modelLoaded(){
        console.log("model is loaded");
        console.log(classfier);
    }

    function check(){
        img=document.getElementById("captured_image");
        classfier.classify(img,gotresult);
    }
    function gotresult(error,result){
        if (error){
            console.error(error);
        }
        else{
            console.log(result);
            document.getElementById("result_object").innerHTML=result[0].label;
            document.getElementById("result_object_confidence").innerHTML=result[0].confidence.toFixed(3);        }
    }