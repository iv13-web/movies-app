// import {mdb} from "@/services/api.service";
//
// export async function createContent(url, page, id) {
// 		this.loader.show();
// 		const data = await mdb.fetchCards(url, page);
// 		console.log(data)
// 		const html = data.results.map(movie => render(movie));
// 		this.$el.querySelector('.container')
// 				.insertAdjacentHTML('beforeend', html.join(' '));
// 		this.pagination.innerHTML = createPagination(data.total_pages, getPage(id), id);
// 		this.loader.hide();
// }
//
//
// export async function switchPages(event, url, id) {
// 		const target = event.target
// 		let page
// 		if (event.target && target.classList.contains('pagination__link') && !target.classList.contains('pagination__dots')) {
// 				page = target.innerText;
// 		}
// 		this.$el.querySelector('.container').innerHTML = '';
// 		this.$el.querySelector('.pagination').innerHTML = '';
// 		createContent.bind(this)(url, page, id);
// 		localStorage.setItem(id, JSON.stringify(page))
// }
//
// export function getPage(id) {
// 		if (localStorage.getItem(id)) return +JSON.parse(localStorage.getItem(id))
// 		return 1
// }