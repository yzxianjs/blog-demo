import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tableRouter from './table/index'
import formRouter from './form/form'
import treeRouter from './tree/index'
import testRouter from './testRouter';
import bpmnRouter from './bpmn/index';

Vue.use(VueRouter)
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
const routes = [
	...bpmnRouter,
	...tableRouter,
	...formRouter,
	...treeRouter,
	...testRouter,
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/test',
		name: 'test22',
		component: () => import('@/views/test.vue')
	},
	{
		path: '/tree',
		name: 'tree',
		component: () => import('../views/yl-tree.vue')
	},
	{
		path: '/child-sync',
		name: 'child-sync',
		component: () => import('../views/child-sync/A.vue')
	},
	{
		path: '/params-type',
		name: 'params-type',
		component: () => import('@/views/params-type/demo.vue')
	},
	{
		path: '/parent',
		name: 'params-type2',
		component: () => import('@/views/parent/demo.vue')
	},
	{
		path: '/row',
		name: 'row-index',
		component: () => import('@/views/row/row-index.vue')
	},
	{
		path: '/flex',
		name: 'flex-index',
		component: () => import('@/views/row/yl-flex.vue')
	},
	{
		path: '/demo',
		name: 'demo-index',
		component: () => import('@/views/demo-demo.vue')
	},
	{
		path: '/demo2',
		name: 'demo-index',
		component: () => import('@/views/demo-demo2.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
