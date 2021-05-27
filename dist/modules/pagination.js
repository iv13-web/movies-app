function createPagination(totalPages, page, i) {
    
    let html = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
  
    if (page > 2) { //if page value is less than 2 then add 1 after the previous button
        html += `<div class="pagination__link" onclick="createPagination(${totalPages}, 1, ${i})">1</div>`;
        if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
            html += `<div class="pagination__dots">...</div>`;
        }
    }
  
    // how many pages or li show before the current li
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    
    // how many pages or li show after the current li
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage  = afterPage + 1;
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
        html += `<div class="pagination__link ${active}" onclick="createPagination(${totalPages}, ${plength}, ${i})">${plength}</div>`;
    }
  
    if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
        if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
            html += `<div class="pagination__dots">...</div>`;
        }
        html += `<div class="last pagination__link" onclick="createPagination(${totalPages}, ${totalPages}, ${i})">${totalPages}</div>`;
    }
    document.querySelectorAll(".pagination")[i].innerHTML = html; //add li tag inside ul tag
    return html;
}