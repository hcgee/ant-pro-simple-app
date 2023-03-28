// export default [
//   {
//     path: '/user',
//     layout: false,
//     routes: [
//       {
//         name: 'login',
//         path: '/user/login',
//         component: './user/Login',
//       },
//       {
//         component: './404',
//       },
//     ],
//   },
//   {
//     path: '/welcome',
//     name: 'welcome',
//     icon: 'smile',
//     component: './Welcome',
//   },
//   // {
//   //   path: '/admin',
//   //   name: 'admin',
//   //   icon: 'crown',
//   //   access: 'canAdmin',
//   //   routes: [
//   //     {
//   //       path: '/admin/sub-page',
//   //       name: 'sub-page',
//   //       icon: 'smile',
//   //       component: './Welcome',
//   //     },
//   //     {
//   //       component: './404',
//   //     },
//   //   ],
//   // },
//   // {
//   //   name: 'list.table-list',
//   //   icon: 'table',
//   //   path: '/list',
//   //   component: './TableList',
//   // },
//   {
//     path: '/',
//     redirect: '/welcome',
//   },
//   {
//     component: './404',
//   },
// ];

export default [
  {
    "path": "/",
    "redirect": "/home",
    "exact": true
  },
  {
    "path": "/home",
    "name": "home",
    "iconImg": "assets/imgs/home",
    "iconSelImg": "assets/imgs/homeSel",
    component: './Welcome',
    "exact": true
  },
  {
    "path": "/video/:id",
    "name": "managerDetail",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/performance/:id",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/tmanage/stockPoolnew/stockDetail/:id",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/newComb",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/simulationComb/newOneExam",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/combDetail/:id",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/telMeetingDetail/:id",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/wl/tel/:id",
    "name": "电话会议详情",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/activityDetail/:type/:id",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/createActivity/:type",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/newCreateActivity/:type",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/teamManage-publishArtical",
    "name": "publishArtical",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/teamManage-publishServer",
    "name": "publishServer",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/agencyHome/:type/:id",
    "name": "agencyHome",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/searchList/:name/:type",
    "name": "searchList",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/listmore/:id",
    "name": "listmore",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/caitong",
    "routes": [
      {
        "path": "/caitong",
        "redirect": "/caitong/groupManager",
        "exact": true
      },
      {
        "path": "/caitong/groupManager",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/caitong/groupManager/",
            "redirect": "/caitong/groupManager/groupPerson",
            "exact": true
          },
          {
            "path": "/caitong/groupManager/groupPerson",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/groupManager/otherAuthManager",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/groupManager/ourGroupManager",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/groupManager/groupCompare",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/groupManager/latestAdjustment",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/caitong/activityManager",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/caitong/activityManager",
            "redirect": "/caitong/activityManager/activityCount",
            "exact": true
          },
          {
            "path": "/caitong/activityManager/activityCount",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/activityManager/activityScoreCount",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/caitong/activityManager/activityCheckInCount",
            "hideInMenu": true,
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "path": "/blockmonitor",
    "exact": true
  },
  {
    "path": "/nopermission",
    "exact": true
  },
  {
    "path": "/tmanage",
    "name": "tmanage",
    "iconImg": "assets/imgs/tmanage",
    "iconSelImg": "assets/imgs/tmanageSel",
    "routes": [
      {
        "path": "/tmanage/stockPoolnew",
        "name": "stockPoolnew",
        "iconImg": "assets/imgs/icon1",
        "iconSelImg": "assets/imgs/icon1Sel",
        "routes": [
          {
            "path": "/tmanage/stockPoolnew/selfPool",
            "name": "自选池",
            "exact": true
          },
          {
            "path": "/tmanage/stockPoolnew/trackPool",
            "name": "跟踪池",
            "exact": true
          },
          {
            "path": "/tmanage/stockPoolnew/tradPool",
            "name": "交易池",
            "exact": true
          },
          {
            "path": "/tmanage/stockPoolnew/corePool",
            "name": "核心池",
            "exact": true
          },
          {
            "path": "/tmanage/stockPoolnew/stockDetail/:id",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/tmanage/combination",
        "name": "combination",
        "iconImg": "assets/imgs/icon1",
        "iconSelImg": "assets/imgs/icon1Sel",
        "routes": [
          {
            "path": "/tmanage/combination/myCombination",
            "name": "我的组合",
            "exact": true
          },
          {
            "path": "/tmanage/combination/myCompany",
            "name": "我司组合",
            "exact": true
          },
          {
            "path": "/tmanage/combination/externalassessComb",
            "name": "外部考核组合",
            "exact": true
          },
          {
            "path": "/tmanage/combination/dynamic",
            "name": "调仓动态",
            "exact": true
          },
          {
            "path": "/tmanage/combination/combDetail/:id",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/tmanage/fileManage",
        "name": "研报管理",
        "iconImg": "assets/imgs/icon2",
        "iconSelImg": "assets/imgs/icon2Sel",
        "routes": [
          {
            "path": "/tmanage/fileManage/newreportDetail/:id",
            "name": "newReportDetail",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/customPage",
            "name": "研报列表",
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/reportDetail",
            "name": "研报详情",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/reportAdd",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/myCollection",
            "name": "我的收藏",
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/myUp",
            "name": "我的报告",
            "exact": true
          },
          {
            "path": "/tmanage/fileManage/reportstatical",
            "name": "研报统计",
            "exact": true
          }
        ]
      },
      {
        "path": "/tmanage/topicManage",
        "name": "专题管理",
        "iconImg": "assets/imgs/topic",
        "iconSelImg": "assets/imgs/topicSel",
        "exact": true
      },
      {
        "path": "/tmanage/firmOfferEarnings",
        "name": "实盘荐股收益",
        "iconImg": "assets/imgs/spsy",
        "iconSelImg": "assets/imgs/spsySel",
        "routes": [
          {
            "path": "/tmanage/firmOfferEarnings/resultsConfig",
            "name": "业绩配置",
            "exact": true
          },
          {
            "path": "/tmanage/firmOfferEarnings/firmOfferEarningsStatistics",
            "name": "实盘收益统计",
            "exact": true
          },
          {
            "path": "/tmanage/firmOfferEarnings/historyMonthStatistics",
            "name": "历史月度统计",
            "exact": true
          }
        ]
      },
      {
        "path": "/tmanage/topicDetail/:id",
        "name": "专题详情",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/tmanage/makeNew",
        "name": "新股询价",
        "iconImg": "assets/imgs/icon10",
        "iconSelImg": "assets/imgs/icon10Sel",
        "exact": true
      },
      {
        "path": "/tmanage/makeNew/newPoolCreateReport",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/tmanage/makeNew/:id",
        "name": "创建询价研报",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/tmanage/researchcalendar",
        "name": "投研日历",
        "iconImg": "assets/imgs/researchIcon",
        "iconSelImg": "assets/imgs/researchIconSel",
        "exact": true
      }
    ]
  },
  {
    "path": "/brokerGoldShares",
    "name": "brokerGoldShares",
    "iconImg": "assets/imgs/brokerGoldShares",
    "iconSelImg": "assets/imgs/brokerGoldSharesSel",
    "routes": [
      {
        "path": "/brokerGoldShares/researchCalendar",
        "name": "researchCalendar",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/portfolio",
        "name": "portfolio",
        "iconImg": "assets/imgs/portfolio",
        "iconSelImg": "assets/imgs/portfolio_sel",
        "routes": [
          {
            "path": "/brokerGoldShares/portfolio/combinationAll",
            "name": "全部组合",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/CombBigData",
            "name": "组合大数据",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/shenWanIndust",
            "name": "申万行业",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/goldShares",
            "name": "月度金股组合",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/warehouseNew",
            "name": "最新调仓",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/combDetail/:id",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/fittingCombDetail/:id",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/brokerGoldShares/portfolio/group",
            "name": "组合分组",
            "routes": [
              {
                "path": "/brokerGoldShares/portfolio/group",
                "redirect": "/brokerGoldShares/portfolio/group/list",
                "exact": true
              },
              {
                "path": "/brokerGoldShares/portfolio/group/list",
                "name": "组合分组",
                "parasitic": true,
                "exact": true
              },
              {
                "path": "/brokerGoldShares/portfolio/group/detail/:id",
                "name": "组合分组",
                "parasitic": true,
                "exact": true
              }
            ]
          }
        ]
      },
      {
        "path": "/brokerGoldShares/portfolioBack",
        "name": "portfolioBack",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/bangdan",
        "name": "bangdan",
        "iconImg": "assets/imgs/map_top",
        "iconSelImg": "assets/imgs/map_top_sel",
        "exact": true
      },
      {
        "path": "/brokerGoldShares/bangdan/secuCombDetail/:orgCode",
        "name": "secuCombDetail",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/bangdan/stockDetail/:id",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/monthRanking",
        "name": "monthRanking",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/exceedFour",
        "name": "exceedFour",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/concentrationHight",
        "name": "concentrationHight",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/analystWin",
        "name": "analystWin",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/analystWinDetail/:id/:date/:name",
        "name": "analystWinDetail",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/gindex",
        "name": "gindex",
        "iconImg": "assets/imgs/gole_icon",
        "iconSelImg": "assets/imgs/gold_incon_sel",
        "routes": [
          {
            "path": "/brokerGoldShares/gindex/bokerGoldShares",
            "name": "券商金股",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/gindex/industryGoldShares",
            "name": "行业金股",
            "exact": true
          },
          {
            "path": "/brokerGoldShares/gindex/brokerGoldStockDetail/:id",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/brokerGoldShares/gindex/stockDetail/:id",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/brokerGoldShares/gindex/industryGoldStockDetail/:id/:industryCode",
            "exact": true
          }
        ]
      },
      {
        "path": "/brokerGoldShares/activite",
        "name": "activite",
        "iconImg": "assets/imgs/video",
        "iconSelImg": "assets/imgs/video_sel",
        "exact": true
      },
      {
        "path": "/brokerGoldShares/activite1",
        "name": "activite",
        "iconImg": "assets/imgs/video",
        "iconSelImg": "assets/imgs/video_sel",
        "exact": true
      },
      {
        "path": "/brokerGoldShares/telMeetingDetail/:id",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/subjectAlbum/:id",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/report",
        "name": "report",
        "iconImg": "assets/imgs/research",
        "iconSelImg": "assets/imgs/research_sel",
        "exact": true
      },
      {
        "path": "/brokerGoldShares/report/reportDetail/:id",
        "name": "reportDetail",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/brokerGoldShares/instituteservices",
        "name": "institute",
        "exact": true
      },
      {
        "path": "/brokerGoldShares/combination/combDetail/:id",
        "hideInMenu": true,
        "exact": true
      }
    ]
  },
  {
    "path": "/newama",
    "name": "AMA",
    "iconImg": "assets/imgs/ama",
    "iconSelImg": "assets/imgs/amaSel",
    access: 'canShow',
    "routes": [
      {
        "path": "/newama",
        "redirect": "/newama/productStatistics",
        access: 'canShow',
        "exact": true
      },
      {
        "path": "/newama/productStatistics",
        access: 'canShow',
        "name": "产品统计",
        "hideInMenu": true,
        "routes": [
          {
            "path": "/newama/productStatistics/panoramic",
            "name": "panoramic",
            access: 'canShow',
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/newama/productStatistics/warehouse",
            "name": "warehouse",
            "hideInMenu": true,
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/newama/productStatistics/parsing",
            "name": "parsing",
            "hideInMenu": true,
            access: 'canShow',
            "exact": true
          }
        ]
      },
      {
        "path": "/newama/productAnalysis",
        "name": "产品分析",
        "hideInMenu": true,
        access: 'canShow',
        "routes": [
          {
            "path": "/newama/productAnalysis/report",
            "name": "report",
            "hideInMenu": true,
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/newama/productAnalysis/monitoring",
            "name": "monitoring",
            "hideInMenu": true,
            access: 'canShow',
            "exact": true
          }
        ]
      },
      {
        "path": "/newama/productEvaluation",
        "name": "绩效分析",
        "hideInMenu": true,
        access: 'canShow',
        "routes": [
          {
            "path": "/newama/productEvaluation/attribution",
            "name": "attribution",
            access: 'canShow',
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/newama/productEvaluation/brison",
            "name": "brison",
            access: 'canShow',
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/newama/productEvaluation/tracking",
            "name": "tracking",
            "hideInMenu": true,
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/newama/productEvaluation/Ability",
            "name": "Ability",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/newama/productCompare",
        "name": "产品比较分析",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/newama/productInformation",
        "name": "数据中心",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/newama/productInformation/historyData",
        "name": "数据中心历史详情",
        "hideInMenu": true,
        "exact": true
      }
    ]
  },
  {
    "path": "/personalcenter",
    "name": "personalcenter",
    "iconImg": "assets/imgs/person_p_a",
    "iconSelImg": "assets/imgs/person_p",
    "routes": [
      {
        "path": "/personalcenter/myTodo",
        "name": "我的待办",
        "iconImg": "assets/imgs/person_todo",
        "iconSelImg": "assets/imgs/person_todo_a",
        "exact": true
      },
      {
        "path": "/personalcenter/freeStock",
        "name": "我的股票",
        "iconImg": "assets/imgs/person_share",
        "iconSelImg": "assets/imgs/person_share_a",
        "routes": [
          {
            "path": "/personalcenter/freeStock",
            "redirect": "/personalcenter/freeStock/myChooose",
            "exact": true
          },
          {
            "path": "/personalcenter/freeStock/myChooose",
            "name": "自选股",
            "exact": true
          },
          {
            "path": "/personalcenter/freeStock/myShares",
            "name": "推荐股票",
            "exact": true
          }
        ]
      },
      {
        "path": "/personalcenter/combination",
        "name": "我的组合",
        "iconImg": "assets/imgs/person_comb",
        "iconSelImg": "assets/imgs/person_comb_a",
        "routes": [
          {
            "path": "/personalcenter/combination",
            "redirect": "/personalcenter/combination/myComb",
            "exact": true
          },
          {
            "path": "/personalcenter/combination/myComb",
            "name": "我的组合",
            "exact": true
          },
          {
            "path": "/personalcenter/combination/combGroup",
            "name": "组合分组",
            "exact": true
          }
        ]
      },
      {
        "path": "/personalcenter/focusOn",
        "name": "我的关注",
        "iconImg": "assets/imgs/person_focus",
        "iconSelImg": "assets/imgs/person_focus_a",
        "routes": [
          {
            "path": "/personalcenter/focusOn",
            "redirect": "/personalcenter/focusOn/analyst",
            "exact": true
          },
          {
            "path": "/personalcenter/focusOn/analyst",
            "name": "关注的分析师",
            "exact": true
          },
          {
            "path": "/personalcenter/focusOn/broker",
            "name": "关注的券商",
            "exact": true
          }
        ]
      },
      {
        "path": "/personalcenter/message",
        "name": "消息",
        "routes": [
          {
            "path": "/personalcenter/message",
            "redirect": "/personalcenter/message/notice",
            "exact": true
          },
          {
            "path": "/personalcenter/message/notice",
            "name": "消息通知",
            "exact": true
          },
          {
            "path": "/personalcenter/message/pushsetting",
            "name": "推送设置",
            "exact": true
          }
        ]
      },
      {
        "path": "/personalcenter/setting",
        "name": "个人设置",
        "iconImg": "assets/imgs/person_setting",
        "iconSelImg": "assets/imgs/person_setting_a",
        "routes": [
          {
            "path": "/personalcenter/setting",
            "redirect": "/personalcenter/setting/info",
            "exact": true
          },
          {
            "path": "/personalcenter/setting/info",
            "name": "我的资料",
            "exact": true
          },
          {
            "path": "/personalcenter/setting/editPassword",
            "name": "修改密码",
            "exact": true
          }
        ]
      },
      {
        "path": "/personalcenter/combDetail/:id",
        "hideInMenu": true,
        "exact": true
      }
    ]
  },
  {
    "path": "/manageMent",
    "name": "manageMent",
    "iconImg": "assets/imgs/manageMent",
    access: 'canShow',
    "iconSelImg": "assets/imgs/manageMentSel",
    "routes": [
      {
        "path": "/manageMent/systemSetting",
        "name": "systemSetting",
        "iconImg": "assets/imgs/icon13",
        access: 'canShow',
        "iconSelImg": "assets/imgs/icon13Sel",
        "routes": [
          {
            "path": "/manageMent/systemSetting",
            "redirect": "/manageMent/systemSetting/stockManage",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/stockManage",
            "name": "股票池管理",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/folderManage",
            "name": "研报类型设置",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/combineSetting",
            "name": "组合管理设置",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/markSetting",
            "name": "比较基准设置",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/Investment",
            "name": "投研日历设置",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/inquiryManage",
            "name": "新股询价管理",
            access: 'canShow',
            "exact": true
          },
          {
            "path": "/manageMent/systemSetting/companyManage",
            "name": "公司logo设置",
            access: 'canShow',
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/performance",
        "name": "绩效管理",
        "iconImg": "assets/imgs/icon1",
        "iconSelImg": "assets/imgs/icon1Sel",
        "routes": [
          {
            "path": "/manageMent/performance/performanceCheck/:id",
            "name": "绩效考核管理",
            "exact": true
          },
          {
            "path": "/manageMent/performance/performanceCycleSetting",
            "name": "绩效周期设置",
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/ama",
        "name": "ama",
        access: 'canShow',
        "iconImg": "assets/imgs/iconama",
        "iconSelImg": "assets/imgs/iconamaSel",
        "routes": [
          {
            "path": "/manageMent/ama",
            "redirect": "/manageMent/ama/productManage",
            "exact": true
          },
          {
            "path": "/manageMent/ama/productManage",
            "name": "产品管理",
            "exact": true
          },
          {
            "path": "/manageMent/ama/productGroupManage",
            "name": "产品分组管理",
            "exact": true
          },
          {
            "path": "/manageMent/ama/productDataList",
            "name": "产品数据列表",
            "exact": true
          },
          {
            "path": "/manageMent/ama/uploadValuationTable",
            "name": "上传估值表",
            "exact": true
          },
          {
            "path": "/manageMent/ama/emailParse",
            "name": "邮件解析配置",
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/personManager",
        "name": "人员管理",
        "iconImg": "assets/imgs/icon4",
        "iconSelImg": "assets/imgs/icon4Sel",
        "routes": [
          {
            "path": "/manageMent/personManager",
            "redirect": "/manageMent/personManager/user",
            "exact": true
          },
          {
            "path": "/manageMent/personManager/user",
            "name": "人员管理",
            "exact": true
          },
          {
            "path": "/manageMent/personManager/role",
            "name": "角色管理",
            "exact": true
          },
          {
            "path": "/manageMent/personManager/permission",
            "name": "权限管理",
            "exact": true
          },
          {
            "path": "/manageMent/personManager/role/edit",
            "name": "role",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/personManager/role/update",
            "name": "role",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/teamManage",
        "name": "teamManage",
        "routes": [
          {
            "path": "/manageMent/teamManage",
            "redirect": "/manageMent/teamManage/home",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/home",
            "name": "home",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/homeEdit",
            "name": "homeEdit",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/user",
            "name": "user",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/teamCombs",
            "name": "teamCombs",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/teamCombs-info",
            "name": "teamCombs-info",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/userCombs",
            "name": "userCombs",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/artical",
            "name": "artical",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/artical-info",
            "name": "artical-info",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/server",
            "name": "server",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/server-info",
            "name": "server-info",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/roadShow",
            "name": "roadShow",
            "exact": true
          },
          {
            "path": "/manageMent/teamManage/report",
            "name": "report",
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/other",
        "name": "other",
        "routes": [
          {
            "path": "/manageMent/other",
            "redirect": "/manageMent/other/companyProduct",
            "exact": true
          },
          {
            "path": "/manageMent/other/companyProduct",
            "name": "companyProduct",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/other/officialData",
            "name": "officialData",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/other/forbidPool",
            "name": "forbidPool",
            "hideInMenu": true,
            "exact": true
          },
          {
            "path": "/manageMent/other/mornEditor",
            "name": "mornEditor",
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "path": "/manageMent/goldStockManager",
        "name": "金股管理",
        "exact": true
      },
      {
        "path": "/manageMent/valuationManage/info",
        "name": "估值表模板管理",
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/manageMent/goldStockManager/goldStockList/:month",
        "name": "goldStockList",
        "hideInMenu": true,
        "exact": true
      }
    ]
  },
  {
    "path": "/others/collection",
    "name": "视频合辑",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/profile4",
    "name": "profile4",
    "hideInMenu": true,
    "exact": true
  },
  {
    "path": "/industryGoldStockDetail/:id/:industryCode",
    "exact": true
  },
  {
    "path": "/brokerGoldStockDetail/:id",
    "exact": true
  },
  {
    path: '/user',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]
