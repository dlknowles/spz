/* Defines settings and actions specific to game levels */
var Levels = (function () {
    var self = this;

    // 0: maxTurns
    // 1: maxColors
    // 2: num gems (position,position,...)
    // 3: num jewels (position,position,...)
    // 4: monsters (type:position:turn,type:position:turn,...)
    var Levels = [
        "50;3;1;0;",
        "60;4;2;2;",
        "70;5;4;4;"
    ];

    var Level = function () {
        this.maxTurns = 50;
        this.maxColors = 6;
        this.numGems = 1;
        this.numJewels = 0;
        this.monsters = [];
    }

    function getLevelSettings(level) {
        var settings = Levels[level].split(";")
            levelSettings = new Level(),
            monsters = settings[4].split(",");

        levelSettings.maxTurns = settings[0];
        console.log('max turns: ' + levelSettings.maxTurns);

        levelSettings.maxColors = settings[1];
        console.log('max colors: ' + levelSettings.maxColors);

        levelSettings.numGems = settings[2];
        console.log('num gems: ' + levelSettings.numGems);

        levelSettings.numJewels = settings[3];
        console.log('num jewels: ' + levelSettings.numJewels);

        monsters.forEach(function (monster) {
            var monsterSettings = monster.split(":");

            console.log('need to define monsters!');
        });      

        return levelSettings;
    }

    return {
        getLevelSettings: getLevelSettings,
        /* Highest game level allowed */
        highestLevel: (Levels.length - 1)
    };
}());