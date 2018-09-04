var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Smiley');
	this.imgSrc = ko.observable('img/Smiling_Cats_17.jpg');
	this.imgAttribution = ko.observable('https://kittentoob.com/wp-content/uploads/2013/04/Smiling_Cats_17.jpg');
	this.nicknames = ko.observableArray(['Smiley Miley', 'Kitty Wampus', 'Miss Whiskerson']);


	this.title = ko.computed(function() {
		let title;
		let clicks = this.clickCount();
		if (clicks < 15) {
			title = 'Newborn';
		} else if (clicks < 45) {
			title = 'Infant';
		} else if (clicks < 90) {
			title = 'Child';
		} else if (clicks < 150) {
			title = 'Teen';
		} else if (clicks < 300) {
			title = 'Adult';
		} else {
			title = 'Unicorn';
		}

		return title;
	}, this);

}

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat()); 

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());