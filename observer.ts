interface Subject {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}

interface Observer {
    update(subject: Subject): void;
}

class Bitcoin implements Subject {
    private observers: Observer[] = [];
    price: number = 0;

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (!isExist) {
            this.observers.push(observer);
        }
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public setPrice() {
        this.price = Math.floor(Math.random() * (69999));

        this.notify();
    }
}

class Binance implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof Bitcoin && subject.price < 50000) {
            console.log('Good price! Should sell');
        }
    }
}

class Exmo implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof Bitcoin && subject.price < 30000) {
            console.log('Wait a minute, keep it for long...');
        }
    }
}

(() => {
    const bitcoin = new Bitcoin();

    const binance = new Binance();

    bitcoin.attach(binance);

    const exmo = new Exmo();

    bitcoin.attach(exmo);

    bitcoin.setPrice();
    bitcoin.setPrice();
})();
