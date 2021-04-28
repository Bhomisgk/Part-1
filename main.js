var Prediction_1 =""
var Prediction_2 =""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        console.log(data_uri)
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version' ,ml5.version)

classifier = 
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first Prediction is" + prediction1
    speak_data_1 = "The second Prediction is" + prediction2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}


function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        //speak();
        if (results[0].label == "This is looking amazing") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "All the best") {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if (results[0].label == "That was a marvellous victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (results[1].label == "You keep Rocking") {
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }
        if (results[0].label == "This is looking amazing") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "All the best") {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if (results[0].label == "That was a marvellous victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (results[1].label == "You keep Rocking") {
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }

    }

}