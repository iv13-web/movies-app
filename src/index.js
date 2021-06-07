import './styles/index.sass'

import {Component} from "@/core/component"
import {Catalog} from "@/core/catalog"
import {WelcomeComponent} from './components/welcome_component'
import {ThemeComponent} from './components/theme_component'
import {NavComponent} from './components/nav_component'
import {AboutComponent} from './components/about_component'
import {TestComponent} from './components/test_component'

new WelcomeComponent('welcome')
new ThemeComponent('theme-toggler')
const loader = new Component('loader')
const nav = new NavComponent('nav')


const latest = new Catalog('latest', 'movie/now_playing','movie', loader)
const popular = new Catalog('popular', 'movie/popular', 'movie', loader)
const upcoming = new Catalog('upcoming','movie/upcoming' , 'movie', loader)
const topMovies = new Catalog('topMovies','movie/top_rated' , 'movie', loader)
const series = new Catalog('series','tv/popular' , 'tv', loader)

const test = new TestComponent('test')
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


