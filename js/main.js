var cardEl = document.querySelector('.card');

/* String[number] access */
var imageWidth = '302';
var imageHeight = '302';

var cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.width = imageWidth[0] + imageWidth[1] + imageWidth[2];
cardImageEl.height = imageHeight[0] + imageHeight[1] + imageHeight[2];

/* Array.isArray() */
var ids = ['3426', '3427', '3428', '3429'];
var idsIsAnArray = Array.isArray(ids);

var cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = idsIsAnArray ? '#' + ids[ids.length - 1] : '';

/* Array forEach() */
var description = [
	'Our Equilibrium collection',
	'promotes',
	'balance and calm',
];

var descriptionText = '';
description.forEach(function (text) {
	descriptionText += text + ' ';
});

var cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = descriptionText.trim();

/* Property Getters and Setters */
var statusItem = {
	set ethereumAmount(val) {
		this._ethereumAmount = val;
	},
	get ethereumAmount() {
		return this._ethereumAmount;
	},
	set remainingTime(val) {
		this._remainingTime = val;
	},
	get remainingTime() {
		return this._remainingTime;
	},
};

statusItem.ethereumAmount = '0.041 ETH';
statusItem.remainingTime = '3 days left';

var cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('span').textContent =
	statusItem.ethereumAmount;
cardStatusItemEls[1].querySelector('span').textContent =
	statusItem.remainingTime;

/* Object.create() */
var dummyAuthor = {
	name: 'Jules Wyvern',
	image: 'avatar.png',
};

var author = Object.create(dummyAuthor);

var cardAuthorImageEl = cardEl.querySelector('.card__author-img');
cardAuthorImageEl.src = './images/' + author.image;
cardAuthorImageEl.alt = author.name;

var cardAuthorNameEl = cardEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = author.name;
