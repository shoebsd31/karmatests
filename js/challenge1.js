var challenge1 = (function () {

    function points(gameScores) {
        var totalPoints = 0;
        gameScores.forEach(gameScore => {
            var x = parseInt(gameScore.split(':')[0]);
            var y = parseInt(gameScore.split(':')[1]);
            if (x > y)
                totalPoints = totalPoints + 3;
            if (x === y)
                totalPoints = totalPoints + 1;
        });
        return totalPoints;
    }
    return {
        points: points
    }

})();