let total = 3000,	
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('changes-check'),
	changesCheckImg = document.getElementById('changes-check-img'),
	cmsCheck = document.getElementById('cms-check'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');



const 	land = 3000,
		corp = 10000,
		cms = 3000,
		changes = 1000,
		changesImg = 2000,
		blocks = 500,
		pages = 2000;

window.addEventListener('DOMContentLoaded', function() {

	tabLeft.addEventListener('click', () => {

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};

		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCheckImg.checked) {
			changesCheckImg.checked = false;
		};
		if (cmsCheck.checked) {
			cmsCheck.checked = false;
		};

		total = land;
		totalValue.value = total;
	});

	tabRight.addEventListener('click', () => {

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};

		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';

		tabRight.classList.add('active');
		tabLeft.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCheckImg.checked) {
			changesCheckImg.checked = false;
		};
		if (cmsCheck.checked) {
			cmsCheck.checked = false;
		};

		total = corp;
		totalValue.value = total;
	});

	counterBlock.addEventListener('change', () => {
		total = counterBlock.value * blocks;
		totalValue.value = total;
	});

	counterPages.addEventListener('change', () => {
		total = counterPages.value * pages;
		totalValue.value = total;
	});


	changesCheck.addEventListener('change', () => {
		if (changesCheck.checked) {
			total += changes;
			totalValue.value = total;
		} else {
			total -= changes;
			totalValue.value = total;
		}
	});

	changesCheckImg.addEventListener('change', () => {
		if (changesCheckImg.checked) {
			total += changesImg;
			totalValue.value = total;
		} else {
			total -= changesImg;
			totalValue.value = total;
		}
	});

	cmsCheck.addEventListener('change', () => {
		if (cmsCheck.checked) {
			total += cms;
			totalValue.value = total;
		} else {
			total -= cms;
			totalValue.value = total;
		}
	});

});