var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var GuessLetters = []
document.onkeyup = function() {
	 var letter = String.fromCharCode(event.keyCode).toLowerCase();
	 var textnode = document.createTextNode(letter);
	 document.getElementById("guess").appendChild(textnode);
};

var NumberLeft = ["8","7","6","5","4","3","2","1","0"];
	 for (var i = 0; i < NumberLeft.length; i++) {
        var numleftnew = NumberLeft[1]
        var textnode1 = document.createTextNode(numleftnew);
        document.getElementById("guessleft").appendChild(textnode1);