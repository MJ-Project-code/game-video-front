
export default [
    {
        path: '/',
        component: () => import('@/components/VideoPlayer/index')
    },
    {
        path: '/watch',
        component: () => import('@/components/VideoPlayer/index')
    },
    {
        path: '/unload',
        component: () => import('@/components/VideoPlayer/index')
    },
]
