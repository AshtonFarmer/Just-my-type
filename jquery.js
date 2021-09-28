$(document).ready(function () {
    $("#yellow-block").hide();


    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        };
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        };
    });


    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let lettersIndex = 0;
    let sentenceIndex = 0;

    printSentence();

    $(document).keypress(function () {

        typeLetters();

    });

    function printSentence() {

        sentence = sentences[sentenceIndex];
        letters = sentence.split('', sentence.length);
        checkLetters = letters;
        lettersIndex = 0;
        do {
            $("#sentence").append(`<span id="letters${lettersIndex}">${letters[lettersIndex]}</span>`);
            lettersIndex++;
        } while (lettersIndex < sentence.length);
        lettersIndex = 1;
        sentenceIndex++;
        $(`#letters${[0]}`).css("background-color", "yellow");
        $("#target-letter").append(`<span id="target">${letters[0]}</span>`);

    };

    function typeLetters() {

        targetLetter();
        $(`#letters${lettersIndex}`).css("background-color", "yellow");
        console.log(letters[lettersIndex]);
        if (lettersIndex > 0) {
            $(`#letters${lettersIndex}`).prev().css("background-color", "white");
        };

        lettersIndex++;

        if (sentence.length === lettersIndex - 1) {
            $("#sentence").empty();
            printSentence();
        };
    };

    function targetLetter() {

        $("#target-letter").empty();
        if (letters[lettersIndex] === '') {
            $("#target-letter").append(`<span id="target">[ SPACE ]</span>`);
        } else if (lettersIndex < sentence.length) {
            $("#target-letter").append(`<span id="target">${letters[lettersIndex]}</span>`);
        };

    };


    $(document).ready(function () {
        $("button").click(function () {

            $("#d")[0].reset()
        });
    });


});

