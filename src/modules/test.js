export class LogSomeData {
    constructor(content) {
        this.content = content;
        this.date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
    }

    toString() {
        return JSON.stringify({
            content: this.content,
            date: this.date,
        });
    }
}