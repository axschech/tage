'use strict';

class Engine {
    constructor(obj) {
        this.steps = obj.steps;
        this.step = new Step();
        this.render = new Render(
            'main',
            this.choose,
            this.step
        );
    }

    choose = (choice, e) => {
        this.step.current = choice;
        this.step.obj = this.steps[this.step.current];
    };
}
