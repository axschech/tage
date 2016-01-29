'use strict';

class Steps {
    constructor(type) {
        this.type = type;
        this.steps = [];

        this.promise = this.getFile();
        this.promise.then((response) => {
            this.steps = response;
        })
    }

    getFile = (name) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onload = (e, test) => {
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch (e) {
                    reject();
                }
            }
            xhr.open("GET", `/${this.type}/steps.json`, true);
            xhr.send();
        });
    };
}
