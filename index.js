let scores = [24,25,23,25,26,27,21,22,28,29,21,20];

function highestScore (scores) {
    console.log(scores);
    let max = scores[0];
    for (x=1; x < scores.length; x++){
        if (max < scores[x])
        {
        max = scores[x];
        }
    }
    return max;
}

var result = highestScore(scores);
console.log(result);