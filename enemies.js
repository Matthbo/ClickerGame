var monsterHealth1 = 100;
var monsterHealth2 = 100;
var monsterHealth3 = 100;
var monsterHealth4 = 100;
var monsterDamage1 = 5;
var monsterDamage2 = 5;
var monsterDamage3 = 5;
var monsterDamage4 = 5;
var monsterType1;
var monsterType2;
var monsterType3;
var monsterType4;

function spawnRandomEnemy(level, lane){
    console.log("Created a monster");
    var health = Math.round(Math.random() * 5 + 1);
    switch(lane){
        case 1:
            monsterHealth1 = Math.round(health * (level * 10));
            monster1.innerHTML = '<img onclick="damageEnemy(1);" src="images/bg1.1.png" />';
            break;
        case 2:
            monsterHealth2 = Math.round(health * (level * 10));
            monster2.innerHTML = '<img onclick="damageEnemy(2);" src="images/bg1.1.png" />';
            break;
        case 3:
            monsterHealth3 = Math.round(health * (level * 10));
            monster3.innerHTML = '<img onclick="damageEnemy(3);" src="images/bg1.1.png" />';
            break;
        case 4:
            monsterHealth4 = Math.round(health * (level * 10));
            monster4.innerHTML = '<img onclick="damageEnemy(4);" src="images/bg1.1.png" />';
            break;
    }
}

function spawnEnemy(level, lane, type){
 // TODO
}

function damageEnemy(lane){
    switch(lane){
        case 1:
            monsterHealth1 -= playerClickDamage;
            console.log('playerdamage: ' + monsterHealth1);
            if (monsterHealth1 <= 0) {
                console.log('You killed it!');
                levelUp();
                spawnRandomEnemy(level, lane);
            };
            break;
        case 2:
            monsterHealth2 -= playerClickDamage;
            console.log('playerdamage: ' + monsterHealth2);
            if (monsterHealth2 <= 0) {
                console.log('You killed it!');
                levelUp();
                spawnRandomEnemy(level, lane);
            };
            break;
        case 3:
            monsterHealth3 -= playerClickDamage;
            console.log('playerdamage: ' + monsterHealth3);
            if (monsterHealth3 <= 0) {
                console.log('You killed it!');
                levelUp();
                spawnRandomEnemy(level, lane);
            };
            break;
        case 4:
            monsterHealth4 -= playerClickDamage;
            console.log('playerdamage: ' + monsterHealth4);
            if (monsterHealth4 <= 0) {
                console.log('You killed it!');
                levelUp();
                spawnRandomEnemy(level, lane);
            };
            break;
    }
    
}

// deprecated soon
/*
function autoDamageEnemy(){
    if(playerAutoDamageTotal > 0){
        monsterHealth -= playerAutoDamageTotal;
        console.log('autodamage: ' + monsterHealth);
        if (monsterHealth <= 0) {
            console.log('You killed it!');
            levelUp();
        };
    }
	setTimeout(autoDamageEnemy,1000);
}*/