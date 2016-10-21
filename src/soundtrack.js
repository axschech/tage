class Soundtrack {
    constructor(type, track) {
        this.type = type;
        this.track = track;
        this.element = document.getElementById('audio');
        this.element.childNodes[1].src = `${type}/music/${this.track}`;
        this.element.load();
    }

    play = () => {
        this.state = 'play';
        this.element.play();
    };

    pause = () => {
        this.state = 'pause';
        this.element.pause();
    };

    stop = () => {
        this.state = 'stop';
        this.element.pause();
        this.element.currentTime = 0;
    };

    restart = () => {
        this.stop();
        this.play();
    }
}
