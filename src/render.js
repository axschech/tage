class Render {
    constructor(type, choose, step) {
        this.type = type;
        this.step = step;
        this.choose = choose;

        this.choose(0);
        this.render();
        this.listener();
    }

    html = () => {
        let htmlStr = this.step.obj.header,
            type = this.type;
        htmlStr += this.step.obj.text;
        this.step.obj.choices.forEach((choice) => {
            htmlStr += `<p><a href="#" class='${type}' id='${type}_${choice.goes}'>${choice.text}</a></p>`;
        })
        return htmlStr;
    };

    render = () => {
        document.getElementById('text').innerHTML = this.html();
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
