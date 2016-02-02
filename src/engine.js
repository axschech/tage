'use strict';

class Engine {
    constructor(obj) {
        this.steps = obj.steps;
        this.info = obj.info;
        this.step = new Step();
        this.render = new Render(
            'main',
            this.choose,
            this.step,
            this.info
        );
    }

    choose = (choice, e) => {
        this.step.current = choice;
        this.step.obj = this.steps[this.step.current];
    };
}
