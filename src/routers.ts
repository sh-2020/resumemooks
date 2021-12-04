export const ROUTE = {
  root: '/',
  resume: '/resume',
  info: '/info',
  source: '/source',
  my: '/my'
}

export const ROUTE_KEY = {
  root: 'root',
  resume: 'resume',
  info: 'info',
  source: 'source',
  my: 'my'
}

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: ROUTE.root,
    key: ROUTE_KEY.root,
    text: "主页"
  },
  {
    url: ROUTE.info,
    key: ROUTE_KEY.info,
    text: '介绍'
  },
  {
    url: ROUTE.resume,
    key: ROUTE_KEY.resume,
    text: '简历'
  },
  {
    url: ROUTE.source,
    key: ROUTE_KEY.source,
    text: '源码'
  },
  {
    url: ROUTE.my,
    key: ROUTE_KEY.my,
    text: '我的'
  }
]