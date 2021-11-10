
******** One dimentional array******


function bestScore(scores)
{
    let max = scores[0];
    for( let x=1; x<scores.length; x++){
        if(max < scores[x])
        {
            max = scores[x];
        }
    } return max;

} 
var scores = [2121, 2218, 112, 112, 1125];
var maxscore = bestScore(scores);
console.log(maxscore);   


*******Two dimentional arrray*********


function bestScorer(playersInfo)
{
    let bestScorer = playersInfo[0][0];
    let bestScorer = playersInfo[0][1];
    for(let x=1; x<playersInfo.length; x++)
    {
        if(bestScorer < playersInfo[x][1])
        {
            bestScorer = playersInfo[x][1];
            bestScorer = playersInfo[x][0];
        }
        let playersInfo = [

            ["nomakn", 80],["hhajhj",89],["ahgf",34],["ajkja",56],

        ]; 
        var name = bestScorer(playersInfo);
        console.log(name);
    }
}
