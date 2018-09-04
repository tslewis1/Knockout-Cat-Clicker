var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Smiley');
	this.imgSrc = ko.observable('img/Smiling_Cats_17.jpg');
	this.imgAttribution = ko.observable('https://kittentoob.com/wp-content/uploads/2013/04/Smiling_Cats_17.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		let count = 0; 
		count++;
	};

	this.nicknames = ko.observableArray(['Smiley Miley', 'Kitty Wampus', 'Miss Whiskerson']);

	this.
}

ko.applyBindings(new ViewModel());