class Hamburger {
    toppings = []
    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    };
    static SIZE_BIG = {
        price: 100,
        calories: 40,
    };
    static SUPPLEMENT_CHEESE = {
        price: 10,
        calories: 20
    };
    static SUPPLEMENT_SALAD = {
        price: 20,
        calories: 5,
    };
    static SUPPLEMENT_CHIPS = {
        price: 15,
        calories: 10,
    };
    static TOPPING_SPICES = {
        price: 15,
        calories: 0,
    };
    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    };

    constructor(size, supplement) {
        this.size = size;
        this.supplement = supplement;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculateCalories() {
        let calories = this.size.calories + this.supplement.calories;
        this.toppings.forEach(topping => {
            calories += topping.calories;
        });
        return calories
    }

    calculatePrice() {
        let price = this.size.price + this.supplement.price;
        this.toppings.forEach(topping => {
            price += topping.price;
        });
        return price
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.SUPPLEMENT_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories:` + hamburger.calculateCalories());

console.log(`Price:` + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICES);

console.log(`Price with sauce:` + hamburger.calculatePrice());