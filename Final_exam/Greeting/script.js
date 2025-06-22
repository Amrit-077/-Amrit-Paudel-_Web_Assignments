// script.js
(function () {
    // TODO 8: Loop over names array
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        
        // TODO 9: Get first two letters
        var firstLetter = currentName.charAt(0).toLowerCase();
        var secondLetter = currentName.charAt(1).toLowerCase();
        
        // TODO 10: Check for 'j' and 's'
        if (firstLetter === 'j' && secondLetter === 's') {
            goodbyeSpeaker.speak(currentName);
        } else {
            helloSpeaker.speak(currentName);
        }
        console.log("---"); // Separator between names
    }
})(); // TODO 11: Wrapped in IIFE