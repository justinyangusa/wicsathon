'use strict';

$('form').submit((ev) => {
	ev.preventDefault();

	const url = ev.target.url.value;
	if (!url) return;

	const frameCount = $('.col').length;
	const iframe = `<iframe src="${url}"></iframe>`;

	if (frameCount % 3 === 0) {
		$('.row:nth-last-child(1)').insertAfter(`
			<div class="row">
				<div class="col">
					${iframe}
				</div>
			</div>
		`);
	} else {
		$('.row:nth-child(1)').append(`
			<div class="col">
				${iframe}
			</div>
		`);
	}
});
