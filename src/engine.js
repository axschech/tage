'use strict';

class Engine {
    constructor(steps) {
        this.steps = steps;
        this.step = new Step();
        this.choose(0);
        this.render = new Render('main', this.choose);
    }

    choose = (choice) => {
        this.step.current = choice;
        this.step.obj = this.steps[this.step.current];
        console.log(this.step);
    };
}
