// export class LogSomeData {
//     constructor(content) {
//         this.content = content;
//         this.date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
//     }

//     toString() {
//         return JSON.stringify({
//             content: this.content,
//             date: this.date,
//         });
//     }
// }


// // DARK THEME
// const btn = document.querySelector(".toggler")

// btn.addEventListener('click', () => {
//     btn.classList.toggle('toggler_active');

//     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

//     prefersDarkScheme.matches 
//       ? document.body.classList.toggle("light-theme")
//       : document.body.classList.toggle("dark-theme")

// });











// BURGER
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('burger_active');
});


