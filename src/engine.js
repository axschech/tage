'use strict';

class Engine {
    constructor(obj) {
        this.steps = obj.steps;
        this.info = obj.info;
        this.soundtrack = new Soundtrack('main', this.info.soundtrack);
        this.step = new Step(this.steps[0]);
        this.score = new Score(0);
        this.render = new Render(
            'main',
            this.choose,
            this.step,
            this.score
        );
        if (this.step.obj.music === 'play' || 'restart') {
            this.soundtrack.play();
        }
    }

    choose = (choice, e) => {
        if (this.step.obj
                && this.step.obj.choices[choice]
                    && this.step.obj.choices[choice].score) {
            this.score.current += parseInt(this.step.obj.choices[choice].score);
        }
        if (this.step.obj.choices[choice] &&
                typeof this.steps[this.step.obj.choices[choice].goes] !== 'undefined') {
            this.step.obj = this.steps[this.step.obj.choices[choice].goes];
        }
        this.soundtrack[this.step.obj.music]();
    };
}
