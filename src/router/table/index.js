export default [
  {
    path: '/table',
    name: 'table-test',
    component: () => import('@/views/table/test-table.vue')
  },
  {
    path: '/dy-tab',
    name: 'table-dy',
    component: () => import('@/views/table/dy-tab.vue')
  },
  {
    path: '/import',
    name: 'table-import',
    component: () => import('@/views/table/import-table.vue')
  },
]