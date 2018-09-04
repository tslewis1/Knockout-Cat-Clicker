var initalCats = [
{
	 clickCount: 0,
	 name: 'Figaro',
	 imgSrc: 'img/Figaro.jpg',
	 imgAttribution: 'http://disneyanimals.wikia.com/wiki/Figaro?file=653px-Pinocchio-pinocchio-4947890-960-720-1-.jpg',
	 nicknames: ['Figaroooooo', 'Figgy', 'Sir Figgy']

},
{
	clickCount: 0,
	name: 'Lucifer',
	imgSrc: 'img/Lucifer.jpg',
	imgAttribution: 'http://2.bp.blogspot.com/--t8qoRNNgVA/UKxGcRkc-OI/AAAAAAAAXaw/F_HL15mQQz4/s1600/Cinderella+Lucifer.jpg',
	nicknames: ['Lucie', 'Lu-Lu', 'Satan']
},
{
	clickCount: 0,
	name: 'Marie',
	imgSrc: 'img/Marie.jpeg',
	imgAttribution: 'https://www.babble.com/wp-content/uploads/2013/10/image_3732635c.jpeg',
	nicknames: ['Mare-Mare', 'Sweet Girl', 'Lovely Marie']
},
{
	clickCount: 0,
	name: 'Rajah',
	imgSrc: 'img/Rajah.jpg',
	imgAttribution: 'https://www.babble.com/wp-content/uploads/2013/10/rajah-1.jpg',
	nicknames: ['Raj', 'Ra-Ra', 'Ro', 'Rajah Girl']
},
{
	clickCount: 0,
	name: 'Simba and Nala',
	imgSrc: 'img/Simba-and-Nala.jpg',
	imgAttribution: 'https://vignette.wikia.nocookie.net/lionking/images/5/51/Simba_and_nala.jpg/revision/latest?cb=20130405160603',
	nicknames: ['Cutest Couple', 'Besties', 'Adorbs', 'Little Lion Cubs']
}]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);


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
	var self = this;

	this.catList = ko.observableArray([]);

	initalCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList() [0]); 

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.setCat =function(clickedCat) {
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel());