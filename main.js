var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking selfie in 5 seconds";

    var utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);

    
        setTimeout(function() {
            snapshot();
            save();
        },5000);
       


}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function snapshot() {
    Webcam.snap(function(snapV){
        document.getElementById("result").innerHTML = "<img id='selfie_img' src='"+snapV+"'>";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").innerHTML;
    link.href = image;
    console.log(link.href);
    link.click();
}