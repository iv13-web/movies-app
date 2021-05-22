// import {Component} from './core/component';
import './styles/index.sass';

import {WelcomeComponent} from './components/welcome_component';
import {ThemeComponent} from './components/theme_component';

import {LoaderComponent} from './components/loader_component';
import {AboutComponent} from './components/about_component';
import {NavComponent} from './components/nav_component';
import {FilmsComponent} from './components/films_component';
import {SeriesComponent} from './components/series_component';
import {Top250Component} from './components/top250_component';
import {NewsComponent} from './components/news_component';
import {ScheduleComponent} from './components/schedule_component';



new WelcomeComponent('welcome');
new ThemeComponent('theme-toggler');


const loader = new LoaderComponent('loader');
const nav = new NavComponent('nav');
const films = new FilmsComponent('films');
const series = new SeriesComponent('series');
const top250 = new Top250Component('top-250', loader);
const news = new NewsComponent('news');
const schedule = new ScheduleComponent('schedule');
const about = new AboutComponent('about');

// передаю в nav_component в массиве, чтобы применить forEach
nav.selectTabs([
    {dataAttribute: 'films', Component: films},
    {dataAttribute: 'series', Component: series},
    {dataAttribute: 'top250', Component: top250},
    {dataAttribute: 'news', Component: news},
    {dataAttribute: 'schedule', Component: schedule},
    {dataAttribute: 'about', Component: about},
])

