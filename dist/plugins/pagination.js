function createPagination(i,a,n){if(i>1){let t,e=a-1,l=a+1;a==i&&i>2?e-=2:a==i-1&&i>2&&(e-=1),1==a?l+=2:2==a&&(l+=1);try{let d="";a>2&&i>4&&(d+=`<div class="pagination__link" onclick="createPagination(${i}, 1, ${n})">1</div>`,a>3&&i>5&&(d+='<div class="pagination__dots">...</div>'));for(let c=e;c<=l;c++)c>i||(0==c&&(c+=1),t=a==c?"pagination__link_active":"",d+=`<div class="pagination__link ${t}" onclick="createPagination(${i}, ${c}, ${n})">${c}</div>`);a<i-1&&i>4&&(a<i-2&&i>=6&&(d+='<div class="pagination__dots">...</div>'),d+=`<div class="last pagination__link" onclick="createPagination(${i}, ${i}, ${n})">${i}</div>`);let c=[...document.querySelectorAll(".pagination")],o=[...document.querySelectorAll('[data-type = "catalog"]')].find((i=>i.id===n));return c.find((i=>i.dataset.id===o.id)).innerHTML=d,d}catch(d){let c="";a>2&&i>4&&(c+=`<div class="pagination__link" onclick="createPagination(${i}, 1, ${n.id})">1</div>`,a>3&&i>5&&(c+='<div class="pagination__dots">...</div>'));for(let d=e;d<=l;d++)d>i||(0==d&&(d+=1),t=a==d?"pagination__link_active":"",c+=`<div class="pagination__link ${t}" onclick="createPagination(${i}, ${d}, ${n.id})">${d}</div>`);a<i-1&&i>4&&(a<i-2&&i>=6&&(c+='<div class="pagination__dots">...</div>'),c+=`<div class="last pagination__link" onclick="createPagination(${i}, ${i}, ${n.id})">${i}</div>`);let o=[...document.querySelectorAll(".pagination")],s=[...document.querySelectorAll('[data-type = "catalog"]')].find((i=>i.id===n.id));return o.find((i=>i.dataset.id===s.id)).innerHTML=c,c}}}