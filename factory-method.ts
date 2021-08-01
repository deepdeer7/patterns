interface SuperIntelligentPerson {
	tellAboutYourself(): string;
}

class PersonWhoDoesntSpitOnTheFloor implements SuperIntelligentPerson {
	tellAboutYourself(): string {
		return 'I am supper intelligent person because I dont split on the floor. I can learn you to do the same';
	}
}

class PersonWhoDoesntSpoilAnotherProperty implements SuperIntelligentPerson {
	tellAboutYourself(): string {
		return 'I am supper intelligent person because I dont spoil other peoples property. I can learn you to do the same';
	}
}

abstract class SuperIntelligentPersonCreator {
	abstract createPerson(): SuperIntelligentPerson;

	getPersonInfo(): string {
		const person = this.createPerson();
		return `This person is awesome! He has great story. Just listen! ${person.tellAboutYourself()}`;
	}
}

class PersonWhoDoesntSpitOnTheFloorCreator extends SuperIntelligentPersonCreator {

	createPerson(): SuperIntelligentPerson {
		return new PersonWhoDoesntSpitOnTheFloor();
	}
}

class PersonWhoDoesntSpoilAnotherPropertyCreator extends SuperIntelligentPersonCreator {
	
	createPerson(): SuperIntelligentPerson {
		return new PersonWhoDoesntSpoilAnotherProperty();
	}
}

enum SuperPower {
	NotSpitOnTheFloor = 'NotSpitOnTheFloor',
	NotSpoilProperty = 'NotSpoilProperty'
};


(() => {
    let creator: PersonWhoDoesntSpitOnTheFloorCreator | PersonWhoDoesntSpoilAnotherPropertyCreator;

    const type = Math.random() > 0.5 ? SuperPower.NotSpitOnTheFloor : SuperPower.NotSpoilProperty;

    switch (type) {
    	case SuperPower.NotSpitOnTheFloor:
      		creator = new PersonWhoDoesntSpitOnTheFloorCreator();
      		break;
    	case SuperPower.NotSpoilProperty:
      		creator = new PersonWhoDoesntSpoilAnotherPropertyCreator();
      		break;
  	}

    const info = creator.getPersonInfo();
    console.log(info);
})();
