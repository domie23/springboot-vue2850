import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import liuyan from '@/views/modules/liuyan/list'
    import shouji from '@/views/modules/shouji/list'
    import shoujiCollection from '@/views/modules/shoujiCollection/list'
    import shoujiCommentback from '@/views/modules/shoujiCommentback/list'
    import shoujiOrder from '@/views/modules/shoujiOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShouji from '@/views/modules/dictionaryShouji/list'
    import dictionaryShoujiCollection from '@/views/modules/dictionaryShoujiCollection/list'
    import dictionaryShoujiOrder from '@/views/modules/dictionaryShoujiOrder/list'
    import dictionaryShoujiOrderPayment from '@/views/modules/dictionaryShoujiOrderPayment/list'
    import dictionaryTejia from '@/views/modules/dictionaryTejia/list'
    import dictionaryXinpin from '@/views/modules/dictionaryXinpin/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShouji',
        name: '手机类型',
        component: dictionaryShouji
    }
    ,{
        path: '/dictionaryShoujiCollection',
        name: '收藏表类型',
        component: dictionaryShoujiCollection
    }
    ,{
        path: '/dictionaryShoujiOrder',
        name: '订单类型',
        component: dictionaryShoujiOrder
    }
    ,{
        path: '/dictionaryShoujiOrderPayment',
        name: '订单支付类型',
        component: dictionaryShoujiOrderPayment
    }
    ,{
        path: '/dictionaryTejia',
        name: '是否特价',
        component: dictionaryTejia
    }
    ,{
        path: '/dictionaryXinpin',
        name: '是否新品',
        component: dictionaryXinpin
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/shouji',
        name: '手机',
        component: shouji
      }
    ,{
        path: '/shoujiCollection',
        name: '手机收藏',
        component: shoujiCollection
      }
    ,{
        path: '/shoujiCommentback',
        name: '手机评价',
        component: shoujiCommentback
      }
    ,{
        path: '/shoujiOrder',
        name: '手机订单',
        component: shoujiOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
