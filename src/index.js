import './styles/index.sass'

import {Catalog} from "@/components/catalog/catalog"
import {ThemeComponent} from '@/components/theme/theme.component'
import {NavComponent} from '@/components/nav/nav.component'
import {AboutComponent} from '@/components/about.component'
import {TestComponent} from '@/components/test.component'
import {SearchComponent} from "@/components/search/search.component"
import {Observer} from "@/core/observer"

new ThemeComponent('theme-toggler')
const observer = new Observer()
const search = new SearchComponent('search', observer)

const latest = new Catalog('latest', {
    url:'movie/now_playing',
    type:'movie',
})
const popular = new Catalog('popular', {
    url:'movie/popular',
    type:'movie',
})
const upcoming = new Catalog('upcoming',{
    url:'movie/upcoming',
    type:'movie',
})
const topMovies = new Catalog('topMovies',{
    url:'movie/top_rated',
    type:'movie',
})
const series = new Catalog('series',{
    url:'tv/popular',
    type:'tv',
})

const test = new TestComponent('test')
const about = new AboutComponent('about')

const tabs = [
    {name: 'latest', Component: latest},
    {name: 'popular', Component: popular},
    {name: 'upcoming', Component: upcoming},
    {name: 'topMovies', Component: topMovies},
    {name: 'series', Component: series},
    {name: 'test', Component: test},
    {name: 'about', Component: about},
    {name: 'search', Component: search},
]

new NavComponent('nav', observer, tabs)
