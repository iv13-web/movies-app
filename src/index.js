import './styles/index.sass'

import {Component} from "@/core/component"
import {Catalog} from "@/core/catalog"
import {WelcomeComponent} from './components/welcome_component'
import {ThemeComponent} from './components/theme_component'
import {NavComponent} from './components/nav_component'


import {AboutComponent} from './components/about_component'
import {SeriesComponent} from './components/series_component'



new WelcomeComponent('welcome')
new ThemeComponent('theme-toggler')

const loader = new Component('loader')
const nav = new NavComponent('nav')


const latest = new Catalog('latest', 'movie/now_playing', loader)
const popular = new Catalog('popular', 'movie/popular', loader)
const upcoming = new Catalog('upcoming','movie/upcoming' , loader)
const topMovies = new Catalog('topMovies','movie/top_rated' , loader)
const series = new Catalog('series','tv/popular' , loader)


const test = new SeriesComponent('test')
const about = new AboutComponent('about')

nav.selectTabs([
    {dataAttribute: 'latest', Component: latest},
    {dataAttribute: 'popular', Component: popular},
    {dataAttribute: 'upcoming', Component: upcoming},
    {dataAttribute: 'topMovies', Component: topMovies},
    {dataAttribute: 'series', Component: series},

    {dataAttribute: 'test', Component: test},
    {dataAttribute: 'about', Component: about},

])


