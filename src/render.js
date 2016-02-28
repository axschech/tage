class Render {
    //gotta clean this up
    constructor(type, choose, step, score) {
        this.type = type;
        this.step = step;
        this.choose = choose;
        this.score = score;
        this.render();
        this.listener();
    }

    html = () => {
        let htmlStr = `<h1>Score: ${this.score.current}</h1>`,
            type = this.type, i = 0;
        htmlStr += this.step.obj.header;
        htmlStr += `<img class="step-img" src='${type}/images/${this.step.obj.image}' class="img-rounded" />`;
        htmlStr += this.step.obj.text;
        this.step.obj.choices.forEach((choice) => {
            htmlStr += `<p><a href="#" class='${type}' id='${type}_${i}'>${choice.text}</a></p>`;
            i++;
        })
        return htmlStr;
    };

    render = () => {
        document.getElementById('text').innerHTML = this.html();
    };

    pre_image = () => {

    };

    listener = () => {
        let type = this.type;
        document.body.addEventListener('click', (e) => {
            let target = e.target || e.srcElement;
            if (target.className.match(`${type}`)) {
                e.preventDefault();
                this.choose(target.id.replace(`${type}_`, ''));
                this.render();
            }
        }, false);
    };
}
