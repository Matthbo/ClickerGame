//player
var playerHealth;
var playerHealthMultiplier;
var playerHealthTotal;
var playerArmor;
var playerClickDamage;
var playerAutoDamage;
var playerAutoDamageMultiplier;
var playerAutoDamageTotal;

var level;
var coins;

var version;

//divs
var gameDiv;
var clickablesDiv;
var weaponsDiv;
var armorDiv;
var statsDiv;

function levelUp(){
    level++;
    playerHealthMultiplier *= 1.1;
}

function preInit(){
    playerHealth = 100;
    playerHealthMultiplier = 1; //depends on level
    playerHealthTotal = playerHealth * playerHealthMultiplier;
    playerArmor = 0;
    playerClickDamage = 10;
    playerAutoDamage = 0; // depends on weapon
    playerAutoDamageMultiplier = 1;
    playerAutoDamageTotal = playerAutoDamage * playerAutoDamageMultiplier;
    coins = 0;
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
    
    spawnEnemy(level);
    statsDiv.innerHTML = 'Level: ' + level;
    autoDamageEnemy();
}

function update(){
	setTimeout(update, 100)
	console.log("update");
}

preInit();
init();
update();