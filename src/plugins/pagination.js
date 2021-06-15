function createPagination(totalPages, page, selector) {

    if (totalPages > 1) {
        let active;
        let beforePage = page - 1;
        let afterPage = page + 1;

        // how many pages or li show before the current li
        if (page == totalPages && totalPages > 2) {
            beforePage = beforePage - 2;
        } else if (page == totalPages - 1 && totalPages > 2) {
            beforePage = beforePage - 1;
        }

        // how many pages or li show after the current li
        if (page == 1) {
            afterPage = afterPage + 2;
        } else if (page == 2) {
            afterPage  = afterPage + 1;
        }

        try {

            let html = '';
            if (page > 2 && totalPages > 4) { //if page value is less than 2 then add 1 after the previous button
                html += `<div class="pagination__link" onclick="createPagination(${totalPages}, 1, ${selector})">1</div>`;
                if (page > 3 && totalPages > 5) { //if page value is greater than 3 then add this (...) after the first li or page
                    html += `<div class="pagination__dots">...</div>`;
                }
            }

            for (let plength = beforePage; plength <= afterPage; plength++) {
                if (plength > totalPages) { //if plength is greater than totalPage length then continue
                    continue;
                }
                if (plength == 0) { //if plength is 0 than add +1 in plength value
                    plength = plength + 1;
                }
                if (page == plength){ //if page is equal to plength than assign active string in the active variable
                    active = "pagination__link_active";
                } else { //else leave empty to the active variable
                    active = "";
                }
                html += `<div class="pagination__link ${active}" onclick="createPagination(${totalPages}, ${plength}, ${selector})">${plength}</div>`;
            }

            if (page < totalPages - 1 && totalPages > 4) { //if page value is less than totalPage value by -1 then show the last li or page
                if (page < totalPages - 2 && totalPages >= 6) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
                    html += `<div class="pagination__dots">...</div>`;
                }
                html += `<div class="last pagination__link" onclick="createPagination(${totalPages}, ${totalPages}, ${selector})">${totalPages}</div>`;
            }

            let allPaginations = [...document.querySelectorAll('.pagination')];
            let component = [...document.querySelectorAll('[data-type = "catalog"]')].find(component => component.id === selector);
            let currentPagination =  allPaginations.find(pagination => pagination.dataset.id === component.id);
            currentPagination.innerHTML = html;
            return html;

        } catch (e) {

            let html = '';
            if (page > 2 && totalPages > 4) { //if page value is less than 2 then add 1 after the previous button
                html += `<div class="pagination__link" onclick="createPagination(${totalPages}, 1, ${selector.id})">1</div>`;
                if (page > 3 && totalPages > 5) { //if page value is greater than 3 then add this (...) after the first li or page
                    html += `<div class="pagination__dots">...</div>`;
                }
            }

            for (let plength = beforePage; plength <= afterPage; plength++) {
                if (plength > totalPages) { //if plength is greater than totalPage length then continue
                    continue;
                }
                if (plength == 0) { //if plength is 0 than add +1 in plength value
                    plength = plength + 1;
                }
                if (page == plength){ //if page is equal to plength than assign active string in the active variable
                    active = "pagination__link_active";
                } else { //else leave empty to the active variable
                    active = "";
                }
                html += `<div class="pagination__link ${active}" onclick="createPagination(${totalPages}, ${plength}, ${selector.id})">${plength}</div>`;
            }

            if (page < totalPages - 1 && totalPages > 4) { //if page value is less than totalPage value by -1 then show the last li or page
                if (page < totalPages - 2  && totalPages >= 6) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
                    html += `<div class="pagination__dots">...</div>`;
                }
                html += `<div class="last pagination__link" onclick="createPagination(${totalPages}, ${totalPages}, ${selector.id})">${totalPages}</div>`;
            }
            let allPaginations = [...document.querySelectorAll('.pagination')];
            let component = [...document.querySelectorAll('[data-type = "catalog"]')].find(component => component.id === selector.id);
            let currentPagination =  allPaginations.find(pagination => pagination.dataset.id === component.id);
            currentPagination.innerHTML = html;
            return html;
        }
    }


}   