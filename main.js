Webcam.set ({
width:350,
height:300,
image_format:"png",
png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">'
    });
}
console.log('ml5.version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X7l4xgkkY/model.json',modelLoaded);

function modelLoaded() {
    console.log("model_loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "the first prediction is" + prediction_1;
    speak_data2 = "the second prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterthis);
}

function check() {
    img = document.getElementById('captured_img')
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if (prediction_1 = "happy") {
        document.getElementById("update_emoji").innerHTML = "&#128512;"
    }
    if (prediction_1 = "sad") {
        document.getElementById("update_emoji").innerHTML = "&#128546;"
    }
    if (prediction_1 = "sickomode/mad") {
        document.getElementById("update_emoji").innerHTML = "&#128548;"
    }
    if (prediction_2 = "happy") {
        document.getElementById("update_emoji2").innerHTML = "&#128512;"
    }
    if (prediction_2 = "sad") {
        document.getElementById("update_emoji2").innerHTML = "&#128546;"
    }
    if (prediction_2 = "sickomode/mad") {
        document.getElementById("update_emoji2").innerHTML = "&#128548;"
    }
}
}