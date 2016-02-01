'use strict';

/**
* Bootstraping goes here!
*/

class App {
    constructor() {
        this.mainSteps = new Steps('main');
        this.promisePrime = Promise.all([
            this.mainSteps.promise
        ]);

        this.promisePrime.then(() => {
            this.engine = new Engine(this.mainSteps.response);
        });

    }
}

let app = new App();
