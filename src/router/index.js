import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/layout/Main'
import Blank from '@/views/layout/Blank'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Test1 from '@/views/test/Test1'
import Test2 from '@/views/test/Test2'

Vue.use(Router)

export default new Router({
  routes: [
   {
    	path:'/blank',
    	name:'',
    	component:Blank,
    	children:[
    	{
    		path:'/login',
            name:'Login',
            component:Login
    	},
    	{
        path:'/404',
        name:'NotFound',
        component:NotFound
        }
    	]
    },
    {
      path: '/',
      name: '',
      component: Main,
      children:[
        {
        	path:'test1',
        	name:'Test1',
        	component:Test1
        },
        {
        	path:'test2',
        	name:'Test2',
        	component:Test2
        }
      ]
    },
    {
    	path:'*',
    	redirect:{path:'/404'}
    }
  ]
})
