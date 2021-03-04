import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {CreateComponent} from './components/create.component'
import {FavouriteComponent} from './components/favourite.component'
import {PostsComponent} from './components/posts.component'

const header = new HeaderComponent('header');
const navigation = new NavigationComponent('navigation');
const posts = new PostsComponent('posts');
const create = new CreateComponent('create');
const favourite = new FavouriteComponent('favorite')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favourite}
]);