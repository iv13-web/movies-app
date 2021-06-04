import './styles/index.sass';

import {WelcomeComponent} from './components/welcome_component';
import {ThemeComponent} from './components/theme_component';
import {LoaderComponent} from './components/loader_component';
import {AboutComponent} from './components/about_component';
import {NavComponent} from './components/nav_component';
import {Popular} from './components/popular_component';
import {SeriesComponent} from './components/series_component';
// import {Top250Component} from './components/top250_component';
import {Latest} from './components/latest_component';
import {ScheduleComponent} from './components/schedule_component';

new WelcomeComponent('welcome');
new ThemeComponent('theme-toggler');
const loader = new LoaderComponent('loader');
const nav = new NavComponent('nav');
// const top250 = new Top250Component('top250', loader);



const latest = new Latest('latest', 'movie/now_playing', loader);
const popular = new Popular('popular', 'movie/popular', loader);



const series = new SeriesComponent('series');
const schedule = new ScheduleComponent('schedule');
const about = new AboutComponent('about');

// передаю в nav_component в массиве, чтобы применить forEach
nav.selectTabs([
    {dataAttribute: 'latest', Component: latest},
    {dataAttribute: 'popular', Component: popular},


    {dataAttribute: 'series', Component: series},

    {dataAttribute: 'schedule', Component: schedule},
    {dataAttribute: 'about', Component: about},



    // {dataAttribute: 'top250', Component: top250},
]);


