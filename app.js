let welcome = alert("Welcome Arwing pilot! ");
//my ship
class ship {
  constructor() {
    (this.hull = 20), (this.firepower = 5), (this.accuracy = 0.7);
  }
}
var myShip = new ship();

//enemy ships
class enemyShips {
  constructor() {
    (this.hull = getRndInteger(3, 6)),
      (this.firepower = getRndInteger(2, 4)),
      (this.accuracy = getAccuracy(6, 8));
  }
}
var eShip = new enemyShips();

//functions to generate random stats on enemy ships
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
function getAccuracy(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min) / 10;
}

//html status for the ships
function allShipStatus(myShip, eShip) {
  document.getElementsByClassName(
    "playerStats"
  )[0].innerHTML = `Hull : ${myShip.hull} <br>  FirePower:${myShip.firepower} <br> Accuracy :${myShip.accuracy} <br>`;

  document.getElementsByClassName(
    "enemyStats"
  )[0].innerHTML = `Hull : ${eShip.hull} <br>  FirePower:${eShip.firepower} <br> Accuracy :${eShip.accuracy} <br>`;
}

let enemyCount = 6;
//attack or retreat

function uInputAttackOrRetreat() {
  allShipStatus(myShip, eShip);
  setTimeout(() => {
    while (enemyCount >= 0) {
      console.log(eShip);

      if (myShip.hull > 0) {
        if (enemyCount > 0) {
          let uInputAttackOrRetreat =
            prompt(`Current Health:[${myShip.hull}]  [Target's Health:${eShip.hull}]  [Enemies Remaining:${enemyCount}], 
     Do you want to attack or retreat? enter a for attack and r for retreat`);
           allShipStatus(myShip, eShip);
          if (uInputAttackOrRetreat == "a") {
            
            shipAttack(myShip,eShip)
          } else if (uInputAttackOrRetreat == "r") {
            alert("You ran away, but you live to fight another day");
            return;
          } else {
            alert("WRONG INPUT PLEASE REFRESH AND TRY AGAIN");
          }
        } else {
          (eShip.hull = 0), (eShip.firepower = 0), (eShip.accuracy = 0);
          allShipStatus(myShip, eShip);
          return alert("Congrats you have destroyed all ships!");
        }
      } else {
        (myShip.hull = 0), (myShip.firepower = 0), (myShip.accuracy = 0);
        allShipStatus(myShip, eShip);
        return alert(`You have been destroyed, GAME OVER`);
      }
    }
  }, 2000);
}

//Arwing battle logic
function shipAttack() {
  if (Math.random() < myShip.accuracy) {
    if (myShip.firepower < eShip.hull) {
      eShip.hull -= myShip.firepower;
      alert(`Your attack hit!`);
      alert(`Enemy will now attack!`)
       enemyShipAttack(myShip, eShip);
     
    } else {
      (eShip.hull = getRndInteger(3, 6)),
        (eShip.firepower = getRndInteger(2, 4)),
        (eShip.accuracy = getAccuracy(6, 8));

      enemyCount--;
      alert(`Youve destroyed the enemy ship! `);
      
      return;
      
    }

    
  } else {
    alert(`Your attack missed`);
    alert(`Enemy will now attack`)
     enemyShipAttack(myShip, eShip);
  }
}

//enemy battle logic
function enemyShipAttack() {
  if (Math.random() < eShip.accuracy) {
    myShip.hull -= eShip.firepower;

    alert(`enemy attack Hit`);
  } else {
    alert(`Enemy attack missed`);
  }
}



uInputAttackOrRetreat();
