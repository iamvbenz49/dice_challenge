function score() {
    var player1, player2;
    player1 = Math.floor(Math.random() * 6);
    player2 = Math.floor(Math.random() * 6);
    return [player1, player2]
}

function result(player1, player2) {
    if (player1 > player2) {
        return "Player 1 Wins"
    } else if (player1 < player2) {
        return "Player 2 Wins"
    } else {
        return "Draw"
    }
}
var imagesDatabase = {
    0: "assets/dice_1.png",
    1: "assets/dice_2.png",
    2: "assets/dice_3.png",
    3: "assets/dice_4.png",
    4: "assets/dice_5.png",
    5: "assets/dice_6.png",
}

function diceChange() {
    answer = score()
    res = result(answer[0], answer[1])

    pic1 = document.getElementById("pic1").setAttribute("src", imagesDatabase[answer[0]]);
    pic2 = document.getElementById("pic2").setAttribute("src", imagesDatabase[answer[1]]);

    var final_words = document.getElementById("close");
    final_words.innerText = res;


}