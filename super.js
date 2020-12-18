class Super {
    constructor(name, strength, speed){
        this.name = name
        this.strength = strength
        this.speed = speed
        this.health = 100
    }

    show_stats(){
        console.log(`\nStats for ${this.name}:\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}\n`)
    }
    attack(target){
        if(target.health <= 0){
            target.health = 0
            console.log(`${this.name} has defeated ${target.name}!!`)
        }
        else {
            var dmg = (this.strength * 2) + (this.speed *.5)
            target.health = target.health - dmg
            console.log(`${this.name} attacked ${target.name} for ${dmg} hit points!!`)
        }
    }
}

var spidey = new Super("Spider-Man", 4, 3)
var greenie = new Super("Green Goblin", 3, 2)

while (spidey.health > 0 || greenie.health ){
    spidey.attack(greenie)
    greenie.attack(spidey)
}