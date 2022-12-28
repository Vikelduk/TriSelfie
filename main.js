var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 

var Textbox = document.getElementById("textbox"); 

camera = document.getElementById("camera");

Webcam.set(
    {
        width: 360,
        height: 250,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if (Content == "selfie")
    {
        console.log("tirando suas selfies --- ");
        speak();
    }
}

function speak()
{
  var synth = window.speechSynthesis;

  speakData = "Tirando suas selfies em 15 segundos";
  
  var utterThis = new SpeechSynthesisUtterance(speakData); // Convertendo texto em fala \\
  
  synth.speak(utterThis);

  Webcam.attach(camera);

  setTimeout(function()
  {
    takeSelfie1();
    save1();
  }, 5000);

  setTimeout(function()
  {
    takeSelfie2();
    save2();
  }, 10000);

  setTimeout(function()
  {
    takeSelfie3();
    save3();
  }, 15000);
}

function takeSelfie1()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result1").innerHTML = '<img id = "selfieImage1" src = "' + data_uri + ' "/>';
    });
}

function takeSelfie2()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result2").innerHTML = '<img id = "selfieImage2" src = "' + data_uri + ' "/>';
    });
}

function takeSelfie3()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result3").innerHTML = '<img id = "selfieImage3" src = "' + data_uri + ' "/>';
    });
}

function save1()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage1").src;

    link.ref = image;
    link.click();
}

function save2()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage2").src;

    link.ref = image;
    link.click();
}

function save3()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage3").src;

    link.ref = image;
    link.click();
}
