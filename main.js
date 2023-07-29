class Hero {
    constructor(name, hp){
        this.name = name;
        this.hp = hp; //healthy points
        this.canFly = false;
        this.shield = false;
    }

    attacked(damage) { //matoda de atac cu parametrul damage
        if(this.canFly) { //se verifica daca eroul poate zbura 
            let chance = Math.random();

            if(chance > 0.5) { //daca valoarea variabilei chance >5 eroul poate zbura si evita damage ul
                console.log(this.name + ' flew away.');
                damage = 0;
            }
        }

        if(this.shield) {
            damage *= 0.8;
            console.log(this.name + ' defends with a shield.');
        }

        this.hp -= damage;
        console.log(this.name + ' has been attacked. HP reduce by' + damage + '. HP remaining:' + this.hp + '.');

    }
}

//clasa Hero este clasa parinte, clasele Dwarf, Sprite, Dragon sunt clasele Copii.

class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shield = true; //se apara cu scutul
    }

    attack(otherHero) {
        let damage = 10;
        console.log(this.name + ' attacked with damage: ' + damage + '.');
        otherHero.attacked(damage);
    }

}

class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }

    attack(otherHero) {
        let damage = 15;
        console.log(this.name + ' attacked with damage: ' + damage + ' . ');
        otherHero.attacked(damage);
    }
}

class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
        this.shield = true;
    }

    attack(otherHero) {
        let damage = 5;
        console.log(this.name + ' attacked with damage: ' + damage + '.');
        otherHero.attacked(damage);
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }
    performAttack() {
        if(this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }
    changeTurn(){
        this.turn = 1 - this.turn;

    } 
    findWinner() {
        let showWinner = '';
        if(this.hero1.hp > 0) {
            showWinner = this.hero1.name + ' won with ' + this.hero1.hp + ' HP left';
            console.log(showWinner);
            return showWinner;
        } else if(this.hero2.hp >0) {
            showWinner = this.hero2.name + ' won with ' + this.hero2.hp + ' HP left';
            console.log(showWinner);
            return showWinner;
        } else {
            console.log('No heroes left alive.');
        }
    }

    go() {
        do{
           this.performAttack();
           this.changeTurn();
        } while(this.hero1.hp > 0 && this.hero2.hp > 0 );
        this.findWinner();
    }
}

let dwarf = new Dwarf("Colomboli Maniz Dwarf", 50);
let sprite = new Sprite("Gambalino Sprite", 40);
let dragon = new Dragon("Kaliophic Dragon", 60);

let epicFight = new Fight(dwarf, dragon);
epicFight.go();
epicFight.findWinner();










