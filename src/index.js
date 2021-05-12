import {LogSomeData} from '@modules/test';
import './styles/font_roboto.css';
import './styles/style.scss';

// import './assets/classification.jpg';

const someData = new LogSomeData('Future movie app')
console.log(someData);

async function a () {
    return await Promise.resolve('working')
}
a().then(console.log);

