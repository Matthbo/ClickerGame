//player
var playerHealth;
var playerArmor;
var playerClickDamage;
var playerAutoDamage;

var level;

var version;

//divs
var gameDiv;
var clickablesDiv;
var weaponsDiv;
var armorDiv;
var statsDiv;

function preInit(){
    playerHealth = 100;
    playerArmor = 0;
    playerClickDamage = 10;
    playerAutoDamage = 0;
    level = 0;
    
    version = 0.1;
}

function init(){
    //load database stuff here (if it exists for this player)
    //todo: start the game, game logic, enemies, all the things!
    
    var allDivs = document.getElementsByTagName("div");
    for(var i = 0; i<allDivs.length; i++){
        switch (allDivs[i].className){
            case 'game': gameDiv = allDivs[i]; break;
            case 'clickables': clickablesDiv = allDivs[i]; break;
            case 'weapons': weaponsDiv = allDivs[i]; break;
            case 'armor': armorDiv = allDivs[i]; break;
            case 'stats': statsDiv = allDivs[i]; break;
        }
    }
}

preInit();
init();