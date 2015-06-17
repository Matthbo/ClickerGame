var monster = false; //deprecated soon
var monsterHealth = 100;
var monsterDamage = 5;

function spawnEnemy(level){//change to spawnRandomEnemy()
    if (monster == false) {
		console.log("Created a monster");
		monster = true;
		//bepaalt de HP van het monster, dit kan ook gewoon met een static number. moet je maar ff kijken (nu doet hij tussen de 100 en 200 HP en dat keer het level)
		monsterhealth = Math.floor((level * 200) + 100);
		console.log(monsterHealth = monsterhealth * level);
		// monsterLocation.innerHTML creëert het monster(voor nu)
		clickablesDiv.innerHTML = '<img onclick="damageEnemy();" src="images/bg1.1.png">'; //dat brick though
	} else if (monster == true) {
		console.log("There already is a monster");//there will be 4 at the same time, max!
	};
}
/*
function spawnEnemy(level, type){
 // TODO   
}*/

function damageEnemy(){
	monsterHealth -= playerClickDamage;
	console.log('playerdamage: ' + monsterHealth);
	if (monsterHealth <= 0) {
		console.log('You killed it!');
		monster = false;
		levelUp();
		statsDiv.innerHTML = 'Level: ' + level;
		spawnEnemy(level);
	};
}

function autoDamageEnemy(){
	if (monsterHealth <= 0) {
		console.log('You killed it!');
		monster = false;
		levelUp();
		statsDiv.innerHTML = 'Level: ' + level;
		spawnEnemy(level);
	};
	monsterHealth = monsterHealth - playerAutoDamageTotal;
	console.log('autodamage: ' + monsterHealth);
	//dit herlaad de functie iedere seconde en voert de berekende schade uit
	setTimeout(autoDamageEnemy,1000);
}