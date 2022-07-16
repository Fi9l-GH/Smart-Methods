var speechRecognition =window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''

recognition.lang = 'ar-SA'

recognition.onstart = function(){
    instructions.text("Listening....")
}

recognition.onspeechend = function(){
    instructions.text("Stopped listening, press start to speak again")
}

recognition.onerror = function(){
    instructions.text("I can't hear you, Can you repeat that again ?")
}

recognition.onresult = function(event){
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    content = transcript
    textbox.val(content)
}


$("#start-btn").click(function (event){
    if (content.length){
        content += ''
    }
    recognition.start()
})

textbox.on('input', function(){
    content = $(this).val()
})