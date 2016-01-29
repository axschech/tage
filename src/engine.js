'use strict';

class Engine {
    constructor() {
        this.mainSteps = new Steps('main');
        this.promisePrime = Promise.all([
            this.mainSteps.promise
        ]);

        this.promisePrime.then(() => {
            console.log(this.mainSteps.steps);
        });
    }
}
