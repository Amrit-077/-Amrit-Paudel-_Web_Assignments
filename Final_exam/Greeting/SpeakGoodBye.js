// SpeakGoodBye.js
(function (window) {
    // TODO 5: Farewell array
    var farewell = [
        "Goodbye",        // English
        "Adiós",          // Spanish
        "Au revoir",      // French
        "Arrivederci",    // Italian
        "Auf Wiedersehen",// German
        "Alvida",         // Hindi
        "Sayonara",       // Japanese
        "Zài jiàn",       // Chinese
        "Ma'a as-salaama",// Arabic
        "Do svidaniya"    // Russian
    ];

    // TODO 6: Attach to goodbyeSpeaker object
    var goodbyeSpeaker = {};
    goodbyeSpeaker.speak = function (name) {
        for (var i = 0; i < farewell.length; i++) {
            console.log(farewell[i] + " " + name);
        }
    };

    // TODO 7: Expose to global scope
    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);