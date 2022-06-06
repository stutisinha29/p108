var dog = 0;
var cat=0;
var lion=0;
var cow=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V1EkJGNcX/model.json', modelReady); 
}
function modelReady(){
    classifier.classify(gotResults); 
}

function gotResults(error, results){
 console.log('gotResults')
 if (error){
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1; 
    random_number_g = Math.floor(Math.random()*255)+1; 
    random_number_b = Math.floor(Math.random()*255)+1; 

    document.getElementById("result_label").innerHTML = 'Detected noise is of -'+
    results[0].label;
    document.getElementById("result_confidence").innerHTML= 'Accuracy-'+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color= "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal');

    if (results[0].label=="barking") {
        img.src = 'dog.jpeg';
        dog+1
    } else if (results[0].label=="roaring"){
        img.src = 'lion.png';
        lion+1
    } else if (results[0].label=="meowing"){
        img.src = 'cat.png';
        cat+1
    } else if (results[0].label=="mooing"){
         img.src = 'cow.png';
         cow+1
        }
        else {
            img.src='listen.png'
        }
    }
}
 