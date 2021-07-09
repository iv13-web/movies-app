export function createTemplate(id) {
	return `
		<div class="container movie-container grid"></div>
		<div class="pagination" data-id=${id}></div>
	`
}