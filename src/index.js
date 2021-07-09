import "core-js/stable"
import "regenerator-runtime/runtime"
import './styles/index.sass'

import {Catalog} from "@/components/catalog/catalog"
import {ThemeComponent} from '@/components/theme/theme.component'
import {NavComponent} from '@/components/nav/nav.component'
import {SearchComponent} from "@/components/search/search.component"
import {Observer} from "@/core/observer"
import {LoaderComponent} from "@/components/loader/loader.component";

new LoaderComponent('loader')
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
const best = new Catalog('best',{
    url:'movie/top_rated',
    type:'movie',
})
const series = new Catalog('series',{
    url:'tv/popular',
    type:'tv',
})
const tabs = [
    {id: 'latest', Component: latest, title: 'Новинки'},
    {id: 'popular', Component: popular, title: 'Популярные'},
    {id: 'upcoming', Component: upcoming, title: 'В прокате'},
    {id: 'best', Component: best, title: 'Топ-фильмы'},
    {id: 'series', Component: series, title: 'Сериалы'},
    {id: 'search', Component: search},
]
new NavComponent('nav', observer, tabs)
