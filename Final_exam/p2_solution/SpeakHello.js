// SpeakHello.js
(function (window) {
    // TODO 2: Greetings array
    var greetings = [
        "Hello",          // English
        "Hola",           // Spanish
        "Bonjour",        // French
        "Ciao",           // Italian
        "Hallo",          // German
        "Namaste",        // Hindi
        "Konnichiwa",     // Japanese
        "Ni hao",         // Chinese
        "Salam",          // Arabic
        "Privet"          // Russian
    ];

    // TODO 3: Attach to helloSpeaker object
    var helloSpeaker = {};
    helloSpeaker.speak = function (name) {
        for (var i = 0; i < greetings.length; i++) {
            console.log(greetings[i] + " " + name);
        }
    };

    // TODO 4: Expose to global scope
    window.helloSpeaker = helloSpeaker;
})(window);