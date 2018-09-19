var left;
var right;
var leftStart = false;
var rightStart = false;
var leftChoice;
var rightChoice;

// A class example
class Player {
    constructor() {
      this.money = 20;
      this.health = 20;
      this.stamina = 10;
      this.potionCount = 0;
      this.maxHealth = 20;
      this.maxStamina = 10;
    }
    setEquip(sword, shield, potion){
        this.sword = sword;
        this.shield = shield;
        this.potion = potion;
    }
}
function play() {
    window.left = new Player();
    window.right = new Player();
    var startMoney = "Money: " + left.money;
    document.body.style.backgroundImage = "url('realback.png')";
    var left2 = ['leftWeapon', 'leftShield', 'leftPot'];
    var right2 = ['rightWeapon', 'rightShield', 'rightPot'];
    for(var i = 0; i < 4;i++){
        makeVisible(left2[0] + i);
        makeVisible(left2[1] + i);
        makeVisible(left2[2] + i);
        makeVisible(right2[0] + i);
        makeVisible(right2[1] + i);
        makeVisible(right2[2] + i);
    }
    makeInvisible('playBut');
    makeVisible('leftMoney');
    changeValue('leftMoney', startMoney);
    makeVisible('rightMoney');
    changeValue('rightMoney', startMoney);
    makeVisible('leftName');
    makeVisible('rightName');
    makeVisible('leftConfirm');
    makeVisible('rightConfirm');
}
 
function makeVisible(name){
    document.getElementById(name).style.display = 'table-cell';
}

function changeValue(name, newValue){
    document.getElementById(name).value = newValue;
}

function makeInvisible(name){
    document.getElementById(name).style.display = 'none';
}

function weaponLeft(which){
    document.getElementById("leftWeapon" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("leftWeapon" + i).style.color === "green"){
               left.money += 5*i;
           }
           document.getElementById("leftWeapon" + i).style.color = "white"; 
        }
    }
    left.money -= 5*which;
    if(left.money < 0){
        left.money += 5*which;
        document.getElementById("leftWeapon" + which).style.color = "white";
    }
    changeValue('leftMoney', "Money: " + left.money);
}

function shieldLeft(which){
    document.getElementById("leftShield" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("leftShield" + i).style.color === "green"){
               left.money += 5*i;
           }
           document.getElementById("leftShield" + i).style.color = "white"; 
        }
    }
    left.money -= 5*which;
    if(left.money < 0){
        left.money += 5*which;
        document.getElementById("leftShield" + which).style.color = "white";
        
    }
    changeValue('leftMoney', "Money: " + left.money);
}

function potLeft(which){
    document.getElementById("leftPot" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("leftPot" + i).style.color === "green"){
               left.money += 5*i;
           }
           document.getElementById("leftPot" + i).style.color = "white"; 
        }
    }
    left.money -= 5*which;
    if(left.money < 0){
        left.money += 5*which;
        document.getElementById("leftPot" + which).style.color = "white";
        
    }
    changeValue('leftMoney', "Money: " + left.money);
}

function weaponRight(which){
    document.getElementById("rightWeapon" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("rightWeapon" + i).style.color === "green"){
               right.money += 5*i;
           }
           document.getElementById("rightWeapon" + i).style.color = "white"; 
        }
    }
    right.money -= 5*which;
    if(right.money < 0){
        right.money += 5*which;
        document.getElementById("rightWeapon" + which).style.color = "white";
    }
    changeValue('rightMoney', "Money: " + right.money);
}

function shieldRight(which){
    document.getElementById("rightShield" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("rightShield" + i).style.color === "green"){
               right.money += 5*i;
           }
           document.getElementById("rightShield" + i).style.color = "white"; 
        }
    }
    right.money -= 5*which;
    if(right.money < 0){
        right.money += 5*which;
        document.getElementById("rightShield" + which).style.color = "white";
        
    }
    changeValue('rightMoney', "Money: " + right.money);
}

function potRight(which){
    document.getElementById("rightPot" + which).style.color = "green";
    for(var i = 0; i < 4; i++){
        if(i === which){
            
        }
        else{
           if(document.getElementById("rightPot" + i).style.color === "green"){
               right.money += 5*i;
           }
           document.getElementById("rightPot" + i).style.color = "white"; 
        }
    }
    right.money -= 5*which;
    if(right.money < 0){
        right.money += 5*which;
        document.getElementById("rightPot" + which).style.color = "white";
        
    }
    changeValue('rightMoney', "Money: " + right.money);
}

function confirmLeft(){
    var sword = 0;
    var shield = 0;
    var potion = 0;
    for(var i = 0; i < 4; i++){
        if(document.getElementById("leftWeapon" + i).style.color === "green"){
            sword = i;
        }
        if(document.getElementById("leftShield" + i).style.color === "green"){
            shield = i;
        }
        if(document.getElementById("leftPot" + i).style.color === "green"){
            potion = i;
            if(potion > 0){
                left.potionCount++;
            }
        }
    }
    left.setEquip(sword, shield, potion);
    for(var i = 0; i < 4; i++){
        makeInvisible("leftWeapon" + i);
        makeInvisible("leftShield" + i);
        makeInvisible("leftPot" + i);
    }
    makeInvisible("leftConfirm");
    makeInvisible("leftMoney");
    window.leftStart = true;
    if(window.rightStart === true && window.leftStart === true){
        startFight();
    }
}

function confirmRight(){
    var sword = 0;
    var shield = 0;
    var potion = 0;
    for(var i = 0; i < 4; i++){
        if(document.getElementById("rightWeapon" + i).style.color === "green"){
            sword = i;
        }
        if(document.getElementById("rightShield" + i).style.color === "green"){
            shield = i;
        }
        if(document.getElementById("rightPot" + i).style.color === "green"){
            potion = i;
            if(potion > 0){
                right.potionCount++;
            }
        }
    }
    right.setEquip(sword, shield, potion);
    for(var i = 0; i < 4; i++){
        makeInvisible("rightWeapon" + i);
        makeInvisible("rightShield" + i);
        makeInvisible("rightPot" + i);
    }
    makeInvisible("rightConfirm");
    makeInvisible("rightMoney");
    window.rightStart = true;
    if(window.rightStart === true && window.leftStart === true){
        startFight();
    }
}

function startFight(){
    resetScreen();
    
    
    var rightSwordStr = "";
    if(right.sword === 0){
        rightSwordStr = "Dagger";
    }
    if(right.sword === 1){
        rightSwordStr = "Tiny";
    }
    if(right.sword === 2){
        rightSwordStr = "Medium";
    }
    if(right.sword === 3){
        rightSwordStr = "Huge";
    }
    var rightShieldStr = "";
    if(right.shield === 0){
        rightShieldStr = "None";
    }
    if(right.shield === 1){
        rightShieldStr = "Tiny";
    }
    if(right.shield === 2){
        rightShieldStr = "Medium";
    }
    if(right.shield === 3){
        rightShieldStr = "Huge";
    }
    var rightPotStr = "";
    if(right.potion === 0){
        rightPotStr = "None";
    }
    if(right.potion === 1){
        rightPotStr = "Tiny";
    }
    if(right.potion === 2){
        rightPotStr = "Medium";
    }
    if(right.potion === 3){
        rightPotStr = "Huge";
    }
    changeValue('rightPotionCount', "Potion: " + right.potionCount);
    changeValue('rightSword', "Sword: " + rightSwordStr);
    changeValue('rightShield', "Shield: " + rightShieldStr);
    changeValue('rightPotion', "Potion: " + rightPotStr);
    // Left side
    var leftSwordStr = "";
    if(left.sword === 0){
        leftSwordStr = "Dagger";
    }
    if(left.sword === 1){
        leftSwordStr = "Tiny";
    }
    if(left.sword === 2){
        leftSwordStr = "Medium";
    }
    if(left.sword === 3){
        leftSwordStr = "Huge";
    }
    var leftShieldStr = "";
    if(left.shield === 0){
        leftShieldStr = "None";
    }
    if(left.shield === 1){
        leftShieldStr = "Tiny";
    }
    if(left.shield === 2){
        leftShieldStr = "Medium";
    }
    if(left.shield === 3){
        leftShieldStr = "Huge";
    }
    var leftPotStr = "";
    if(left.potion === 0){
        leftPotStr = "None";
    }
    if(left.potion === 1){
        leftPotStr = "Tiny";
    }
    if(left.potion === 2){
        leftPotStr = "Medium";
    }
    if(left.potion === 3){
        leftPotStr = "Huge";
    }
    changeValue('leftPotionCount', "Potion: " + left.potionCount);
    changeValue('leftSword', "Sword: " + leftSwordStr);
    changeValue('leftShield', "Shield: " + leftShieldStr);
    changeValue('leftPotion', "Potion: " + leftPotStr);
    window.leftStart = false;
    window.rightStart = false;
}

function goLeft(choice){
    window.leftStart = true;
    window.leftChoice = choice;
    clearLeft();
    if(window.rightStart === true && window.leftStart === true){
        clearScreen();
        turn();
    }
}
function goRight(choice){
    window.rightStart = true;
    window.rightChoice = choice;
    clearRight();
    if(window.rightStart === true && window.leftStart === true){
        clearScreen();
        turn();
    }
}

function turn(){
    var leftDmg = 0;
    var leftStamUse = Math.random() * (left.stamina/2 - 1) + 1;
    leftDmg = leftStamUse * ((left.sword + 3) - (right.shield + 1));
	if(leftDmg <= 0)
	{
		leftDmg = 2;
	}
    var rightDmg = 0;
    var rightStamUse = Math.random() * (right.stamina/2 - 1) + 1;
    rightDmg = rightStamUse * ((right.sword + 3) - (left.shield + 1));
	if(rightDmg <= 0)
	{
		rightDmg = 2;
	}
	
	if(window.leftChoice === 2){
        if(left.potionCount > 0){
            left.health += left.potion * 5;
            left.potionCount--;
            if(left.health > left.maxHealth){
                left.health = left.maxHealth;
            }
        }
    }
    if(window.rightChoice === 2){
        if(right.potionCount > 0){
            right.health += right.potion * 5;
            right.potionCount--;
            if(right.health > right.maxHealth){
                right.health = right.maxHealth;
            }
        }
    }
    if(window.leftChoice === 0){
        right.health -= leftDmg;
        if(right.health < 0){
            clearForWin(0);
            return;
        }
        left.stamina -= leftStamUse;
        if(left.stamina < 0){
            left.stamina = 0;
        }
    }
    if(window.rightChoice === 0){
        left.health -= rightDmg;
        if(left.health < 0){
            clearForWin(1);
            return;
        }
        right.stamina -= rightStamUse;
        if(right.stamina < 0){
            right.stamina = 0;
        }
    }
    if(window.leftChoice === 1){
        left.stamina += leftStamUse;
        if(left.stamina > left.maxStamina){
            left.stamina = left.maxStamina;
        }
    }
    if(window.rightChoice === 1){
        right.stamina += rightStamUse;
        if(right.stamina > right.maxStamina){
            right.stamina = right.maxStamina;
        }
    }
    
    update();
    resetScreen();
    window.leftStart = false;
    window.rightStart = false;
}

function clearScreen(){
    makeInvisible("rightAttack");
    makeInvisible("leftAttack");
    makeInvisible("leftRest");
    makeInvisible("rightRest");
    // Left side
    makeInvisible("leftHealth");
    makeInvisible("leftStamina");
    makeInvisible("leftPotion");
    makeInvisible("leftSword");
    makeInvisible("leftShield");
    makeInvisible("leftPotionCount");
    makeInvisible("leftPotionUse");
    // Right side
    makeInvisible("rightPotionUse");
    makeInvisible("rightHealth");
    makeInvisible("rightStamina");
    makeInvisible("rightPotion");
    makeInvisible("rightSword");
    makeInvisible("rightShield");
    makeInvisible("rightPotionCount");
    makeInvisible("rightPotionUse");
}

function clearLeft(){
    makeInvisible("leftHealth");
    makeInvisible("leftStamina");
    makeInvisible("leftPotion");
    makeInvisible("leftSword");
    makeInvisible("leftShield");
    makeInvisible("leftPotionCount");
    makeInvisible("leftPotionUse");
    makeInvisible("leftAttack");
    makeInvisible("leftRest");
}

function clearRight(){
    makeInvisible("rightAttack");
    makeInvisible("rightRest");
    makeInvisible("rightPotionUse");
    makeInvisible("rightHealth");
    makeInvisible("rightStamina");
    makeInvisible("rightPotion");
    makeInvisible("rightSword");
    makeInvisible("rightShield");
    makeInvisible("rightPotionCount");
    makeInvisible("rightPotionUse");
}

function clearForWin(side){
    clearLeft();
    clearRight();
    if(side === 0){
        makeVisible("leftWin");
    }
    if(side === 1){
        makeVisible("rightWin");
    }
}

function resetScreen(){
    makeVisible("rightAttack");
    makeVisible("leftAttack");
    makeVisible("leftRest");
    makeVisible("rightRest");
    // Left side
    makeVisible("leftHealth");
    makeVisible("leftStamina");
    makeVisible("leftPotion");
    makeVisible("leftSword");
    makeVisible("leftShield");
    makeVisible("leftPotionCount");
    makeVisible("leftPotionUse");
    // Right side
    makeVisible("rightPotionUse");
    makeVisible("rightHealth");
    makeVisible("rightStamina");
    makeVisible("rightPotion");
    makeVisible("rightSword");
    makeVisible("rightShield");
    makeVisible("rightPotionCount");
    makeVisible("rightPotionUse");
}

function update(){
    changeValue('leftHealth', "Health: " + Math.round(left.health));
    changeValue('leftStamina', "Stamina: " + Math.round(left.stamina));
    changeValue('leftPotionCount', "Potion: " + Math.round(left.potionCount));
    changeValue('rightHealth', "Health: " + Math.round(right.health));
    changeValue('rightStamina', "Stamina: " + Math.round(right.stamina));
    changeValue('rightPotionCount', "Potion: " + Math.round(right.potionCount));
}



