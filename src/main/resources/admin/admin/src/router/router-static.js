import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dangan from '@/views/modules/dangan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import exampapertopic from '@/views/modules/exampapertopic/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import falvfagui from '@/views/modules/falvfagui/list'
    import falvfaguiCollection from '@/views/modules/falvfaguiCollection/list'
    import falvfaguiLiuyan from '@/views/modules/falvfaguiLiuyan/list'
    import fenxi from '@/views/modules/fenxi/list'
    import forum from '@/views/modules/forum/list'
    import gongsi from '@/views/modules/gongsi/list'
    import jianli from '@/views/modules/jianli/list'
    import laoshi from '@/views/modules/laoshi/list'
    import toudi from '@/views/modules/toudi/list'
    import xinwen from '@/views/modules/xinwen/list'
    import xinwenCollection from '@/views/modules/xinwenCollection/list'
    import xinwenLiuyan from '@/views/modules/xinwenLiuyan/list'
    import xinxi from '@/views/modules/xinxi/list'
    import xuanchuan from '@/views/modules/xuanchuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhaopin from '@/views/modules/zhaopin/list'
    import zhaopinCollection from '@/views/modules/zhaopinCollection/list'
    import zhaopinLiuyan from '@/views/modules/zhaopinLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryDangan from '@/views/modules/dictionaryDangan/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryFalvfagui from '@/views/modules/dictionaryFalvfagui/list'
    import dictionaryFalvfaguiCollection from '@/views/modules/dictionaryFalvfaguiCollection/list'
    import dictionaryFenxi from '@/views/modules/dictionaryFenxi/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGongsi from '@/views/modules/dictionaryGongsi/list'
    import dictionaryJianli from '@/views/modules/dictionaryJianli/list'
    import dictionaryKemu from '@/views/modules/dictionaryKemu/list'
    import dictionaryLeixing from '@/views/modules/dictionaryLeixing/list'
    import dictionaryMianshiYesno from '@/views/modules/dictionaryMianshiYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXinwen from '@/views/modules/dictionaryXinwen/list'
    import dictionaryXinwenCollection from '@/views/modules/dictionaryXinwenCollection/list'
    import dictionaryXinxi from '@/views/modules/dictionaryXinxi/list'
    import dictionaryXinxiBanji from '@/views/modules/dictionaryXinxiBanji/list'
    import dictionaryZhaopin from '@/views/modules/dictionaryZhaopin/list'
    import dictionaryZhaopinCollection from '@/views/modules/dictionaryZhaopinCollection/list'
    import dictionaryZujuan from '@/views/modules/dictionaryZujuan/list'





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
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryDangan',
        name: '学生档案类型',
        component: dictionaryDangan
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryFalvfagui',
        name: '法律法规类型',
        component: dictionaryFalvfagui
    }
    ,{
        path: '/dictionaryFalvfaguiCollection',
        name: '收藏表类型',
        component: dictionaryFalvfaguiCollection
    }
    ,{
        path: '/dictionaryFenxi',
        name: '就业分析类型',
        component: dictionaryFenxi
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGongsi',
        name: '企业类型',
        component: dictionaryGongsi
    }
    ,{
        path: '/dictionaryJianli',
        name: '求职意向',
        component: dictionaryJianli
    }
    ,{
        path: '/dictionaryKemu',
        name: '科目',
        component: dictionaryKemu
    }
    ,{
        path: '/dictionaryLeixing',
        name: '招聘类型',
        component: dictionaryLeixing
    }
    ,{
        path: '/dictionaryMianshiYesno',
        name: '投递状态',
        component: dictionaryMianshiYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXinwen',
        name: '新闻资讯类型',
        component: dictionaryXinwen
    }
    ,{
        path: '/dictionaryXinwenCollection',
        name: '收藏表类型',
        component: dictionaryXinwenCollection
    }
    ,{
        path: '/dictionaryXinxi',
        name: '学生专业',
        component: dictionaryXinxi
    }
    ,{
        path: '/dictionaryXinxiBanji',
        name: '学生班级',
        component: dictionaryXinxiBanji
    }
    ,{
        path: '/dictionaryZhaopin',
        name: '招聘岗位',
        component: dictionaryZhaopin
    }
    ,{
        path: '/dictionaryZhaopinCollection',
        name: '收藏表类型',
        component: dictionaryZhaopinCollection
    }
    ,{
        path: '/dictionaryZujuan',
        name: '组卷方式',
        component: dictionaryZujuan
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dangan',
        name: '学生档案',
        component: dangan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷',
        component: exampaper
      }
    ,{
        path: '/exampapertopic',
        name: '试卷选题',
        component: exampapertopic
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/falvfagui',
        name: '法律法规',
        component: falvfagui
      }
    ,{
        path: '/falvfaguiCollection',
        name: '法律法规收藏',
        component: falvfaguiCollection
      }
    ,{
        path: '/falvfaguiLiuyan',
        name: '法律法规留言',
        component: falvfaguiLiuyan
      }
    ,{
        path: '/fenxi',
        name: '就业分析',
        component: fenxi
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gongsi',
        name: '企业',
        component: gongsi
      }
    ,{
        path: '/jianli',
        name: '简历',
        component: jianli
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/toudi',
        name: '简历投递',
        component: toudi
      }
    ,{
        path: '/xinwen',
        name: '新闻资讯',
        component: xinwen
      }
    ,{
        path: '/xinwenCollection',
        name: '新闻资讯收藏',
        component: xinwenCollection
      }
    ,{
        path: '/xinwenLiuyan',
        name: '新闻资讯留言',
        component: xinwenLiuyan
      }
    ,{
        path: '/xinxi',
        name: '学生信息',
        component: xinxi
      }
    ,{
        path: '/xuanchuan',
        name: '宣传',
        component: xuanchuan
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/zhaopin',
        name: '职位招聘',
        component: zhaopin
      }
    ,{
        path: '/zhaopinCollection',
        name: '职位收藏',
        component: zhaopinCollection
      }
    ,{
        path: '/zhaopinLiuyan',
        name: '招聘咨询',
        component: zhaopinLiuyan
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