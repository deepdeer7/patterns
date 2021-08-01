// start: abstract interfaces //

interface ReligionFactory {
	createSacredBook(): SacredBook;

	createSacredBuliding(): SacredBuliding;

	createBeliever(): Believer;
}

interface SacredBook {
	makePeopleHappy(): string;
}

interface SacredBuliding {
	makePeopleFeelForgiven(): string;
}

interface Believer {
	doGoodDeeds(): string;
}

// end: abstract interfaces //

// start: christianity classes //

class ChristianBible implements SacredBook {
	makePeopleHappy(): string {
		return 'Jesus wants you to be happy, dude!';
	}
}

class Church implements SacredBuliding {
	makePeopleFeelForgiven(): string {
		return 'Jesus forgives you, buddy';
	}
}

class Christian implements Believer {
	doGoodDeeds(): string {
		return 'Faith makes you as Christian to do good deeds';
	}
}


class ChristianityFactory implements ReligionFactory {
	createBeliever(): Believer {
		return new Christian();
	}

	createSacredBook(): SacredBook {
		return new ChristianBible();
	}

	createSacredBuliding(): SacredBuliding {
		return new Church();
	}
}

// end: christianity classes //


// start: judaism classes //

class HebrewBible implements SacredBook {
	makePeopleHappy(): string {
		return 'God wants you to be happy, dude!';
	}
}

class Synagogue implements SacredBuliding {
	makePeopleFeelForgiven(): string {
		return 'God forgives you, buddy';
	}
}

class Jew implements Believer {
	doGoodDeeds(): string {
		return 'Faith makes you as Jew to do good deeds';
	}
}


class JudaismFactory implements ReligionFactory {
	createBeliever(): Believer {
		return new Jew();
	}

	createSacredBook(): SacredBook {
		return new HebrewBible();
	}

	createSacredBuliding(): SacredBuliding {
		return new Synagogue();
	}
}

// end: judaism classes //


// start: islam classes //

class Koran implements SacredBook {
	makePeopleHappy(): string {
		return 'Muhammad wants you to be happy, dude!';
	}
}

class Mosque implements SacredBuliding {
	makePeopleFeelForgiven(): string {
		return 'Muhammad forgives you, buddy';
	}
}

class Islamic implements Believer {
	doGoodDeeds(): string {
		return 'Faith makes you as Islamic to do good deeds';
	}
}


class IslamicFactory implements ReligionFactory {
	createBeliever(): Believer {
		return new Islamic();
	}

	createSacredBook(): SacredBook {
		return new Koran();
	}

	createSacredBuliding(): SacredBuliding {
		return new Mosque();
	}
}

// end: islam classes //

enum Religion {
	Islamic = 'Islamic',
	Judaism = 'Judaism',
	Christian = 'Christian'
}


(() => {
    let factory: IslamicFactory | ChristianityFactory | ChristianityFactory;

    const religion = Math.random() < 0.33 ? Religion.Christian :
    	Math.random() > 0.66 ? Religion.Islamic : Religion.Judaism;

    switch (religion) {
    	case Religion.Christian:
      		factory = new ChristianityFactory();
      		break;
    	case Religion.Islamic:
      		factory = new IslamicFactory();
      		break;
      	case Religion.Judaism:
      		factory = new JudaismFactory();
      		break;
  	}

  	const believer = factory.createBeliever();
  	const sacredBook = factory.createSacredBook();
  	const sacredBuilding = factory.createSacredBuliding();

    console.log(believer.doGoodDeeds(), sacredBook.makePeopleHappy(), sacredBuilding.makePeopleFeelForgiven());
})();
































