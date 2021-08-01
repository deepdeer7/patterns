interface Cat {
    showAllYouCan(): string;
}

class AbyssinianCat implements Cat {
    showAllYouCan(): string {
        return 'Run, play, meow, eat, pop, sleep';
    }
}

class Decorator implements Cat {
    protected cat: Cat;

    constructor(cat: Cat) {
        this.cat = cat;
    }

    public showAllYouCan(): string {
        return this.cat.showAllYouCan();
    }
}

class FlyDecorator extends Decorator {
    showAllYouCan(): string {
        return `I can fly. And also: ${super.showAllYouCan()}`;
    }
}

class SwimDecorator extends Decorator {
    showAllYouCan(): string {
        return `I can swim. And also: ${super.showAllYouCan()}`;
    }
}

(() => {
    const cat = new AbyssinianCat();

    let decorator: FlyDecorator | SwimDecorator = Math.random() > 0.5 ? new FlyDecorator(cat) : new SwimDecorator(cat);

    const skills = decorator.showAllYouCan();

    console.log(skills);
})();
