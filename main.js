//player
var playerHealth;
var playerHealthMultiplier;
var playerHealthTotal;
var playerHealthMax;
var playerHealthMaxTotal;
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

//monsters
var monster1;
var monster2;
var monster3;
var monster4;

//stats
var levelStat;
var healthStat;
var dpcStat;
var coinsStat;

function levelUp(){
    level++;
    playerHealthMultiplier *= 1.1;
}

function getInfo(){
    console.log('playerHealthMaxTotal: ' + playerHealthMaxTotal + 'monsterHealth: ' + monsterHealth);
}


function update(){
    playerHealthTotal = Math.round(playerHealth * playerHealthMultiplier);
    playerHealthMaxTotal = Math.round(playerHealthMax * playerHealthMultiplier);
    playerAutoDamageTotal = Math.round(playerAutoDamage * playerAutoDamageMultiplier);
    
    levelStat.innerHTML = 'Level: ' + level;
    healthStat.innerHTML = 'Health: ' + playerHealthTotal;
    dpcStat.innerHTML = 'DPC: ' + playerClickDamage;
    coinsStat.innerHTML = 'Coins: ' + coins;
    
	setTimeout(update, 100);
}

function preInit(){
    playerHealth = 100;
    playerHealthMultiplier = 1; //depends on level
    playerHealthMax = 100;
    playerHealthTotal = playerHealth * playerHealthMultiplier;
    playerHealthMaxTotal = playerHealthMax * playerHealthMultiplier;
    playerArmor = 0;
    playerClickDamage = 10;
    playerAutoDamage = 0; // depends on weapon
    playerAutoDamageMultiplier = 1; //depends on upgrades
    playerAutoDamageTotal = playerAutoDamage * playerAutoDamageMultiplier;
    
    coins = 0;
    level = 0;
    
    version = 0.1;
    
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
    monster1 = document.getElementById("monster1");
    monster2 = document.getElementById("monster2");
    monster3 = document.getElementById("monster3");
    monster4 = document.getElementById("monster4");
    
    levelStat = document.getElementById("level");
    healthStat = document.getElementById("health");
    dpcStat = document.getElementById("dpc");
    coinsStat = document.getElementById("coins");
}

function init(){
    //load database stuff here (if it exists for this player)
    
    spawnRandomEnemy(level, Math.round(Math.random() * 3 + 1)); //math.round if needed
    //autoDamageEnemy();
    update();
}

preInit();
init();