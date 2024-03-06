function matches(victory, defeat) {
    let result = victory - defeat;
    return result;
}

function rank() {
    let resultRank = matches(100, 30);
    let level = "";
    if (resultRank <= 10) {
        level = "Ferro";
    } else if (resultRank <= 20) {
        level = "Bronze";
    } else if (resultRank <= 50) {
        level = "Prata";
    } else if (resultRank <= 80) {
        level = "Ouro";
    } else if (resultRank <= 90) {
        level = "Diamante";
    } else if (resultRank <= 100) {
        level = "Lendário";
    } else if (resultRank >= 101) {
        level = "Imortal";
    }
    return `The Hero has a balance of ${resultRank} and is at the level of ${level}`;
}

console.log(rank());
