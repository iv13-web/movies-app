import {LogSomeData} from '@modules/test';
import './styles/index.sass';

// import './assets/classification.jpg';

const someData = new LogSomeData('Future movie app')
console.log(someData);

async function a () {
    return await Promise.resolve('working')
}
a().then(console.log);

