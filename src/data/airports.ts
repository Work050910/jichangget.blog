// Structured Dataset for 28 Airports on jichangget.blog
// Re-ranked per user instructions:
// 1. 全球云 2. 飞猫云 3. 暮光加速 4. 大佬云 5. 微风网络 6-28. 随机重排
export interface AirportPlan {
  name: string;
  price: string;
  traffic: string;
}

export interface AirportItem {
  id: string;
  slug: string;
  name: string;
  affLink: string;
  promoCode: string;
  promoDesc: string;
  minPrice: string;
  minPriceNum: number;
  traffic: string;
  lineType: string;
  protocol: string;
  aiSupport: string;
  streaming: string;
  tagline: string;
  audience: string;
  notFor: string;
  plans: AirportPlan[];
  notes: string;
}

export const AIRPORTS: AirportItem[] = [
  {
    "id": "quanqiuyun",
    "slug": "quanqiuyun-review",
    "name": "全球云",
    "affLink": "https://hueue09.gcvipaff.com/#/?code=z8U9aaa4",
    "promoCode": "qq88",
    "promoDesc": "官方专属 8 折优惠码 qq88",
    "minPrice": "20 元/月 · 120GB/月",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1500GB/月，另有私人专线与一次性包",
    "lineType": "多国家多出口专线与中转",
    "protocol": "智能分流协议",
    "aiSupport": "多地区干净出口适配跨境 AI 业务",
    "streaming": "支持 TikTok、YouTube 等多地区流媒体",
    "tagline": "优势在多国家地区节点、智能分流和灵活计费，跨境业务多出口 IP 首选",
    "audience": "经常切换区域、兼顾海外短视频运营和跨境电商外贸工作的用户",
    "notFor": "仅在国内特定单个固定节点打游戏的用户",
    "plans": [
      {
        "name": "轻量版月付",
        "price": "20 元/月 (折后 16 元)",
        "traffic": "120GB/月"
      },
      {
        "name": "进阶版月付",
        "price": "40 元/月 (折后 32 元)",
        "traffic": "300GB/月"
      },
      {
        "name": "重度版月付",
        "price": "100 元/月 (折后 80 元)",
        "traffic": "700GB/月"
      },
      {
        "name": "大户版月付",
        "price": "180 元/月 (折后 144 元)",
        "traffic": "1500GB/月"
      },
      {
        "name": "一次性流量包",
        "price": "100 元 / 100GB 起",
        "traffic": "100G - 800G 可选"
      },
      {
        "name": "私人专线",
        "price": "680 元/月",
        "traffic": "500GB 独享带宽"
      }
    ],
    "notes": "结算时输入 qq88 享 8 折优惠；适用套餐、有效期及能否与活动叠加以结算页为准。"
  },
  {
    "id": "feimaoyun",
    "slug": "feimaoyun-review",
    "name": "飞猫云",
    "affLink": "https://quanqiu.flycatvipaff.cc/#/?code=7ZOeVmNS",
    "promoCode": "flycat888",
    "promoDesc": "新用户季付及以上 8 折优惠码 flycat888",
    "minPrice": "7 元/月 · 50GB/月（学生版年付折算）",
    "minPriceNum": 7.0,
    "traffic": "50GB - 150GB/月，首次月付推荐星耀版 25 元 / 150GB",
    "lineType": "低价 IEPL 专线",
    "protocol": "SS / Trojan / VLESS 多协议",
    "aiSupport": "香港优化线路支持 ChatGPT 等工具稳定交互",
    "streaming": "晚高峰实测香港节点表现优良，流媒体解锁",
    "tagline": "低价小流量搭配 IEPL 专线，晚高峰香港节点稳定，提供自研客户端与流媒体解锁",
    "audience": "轻量备用线路需求者、学生党、主用香港方向及多设备家庭用户",
    "notFor": "每月需消耗数千吉字节大带宽的重度下载大户",
    "plans": [
      {
        "name": "学生版年付",
        "price": "84 元/年 (折合 7 元/月)",
        "traffic": "50GB/月"
      },
      {
        "name": "星耀版月付",
        "price": "25 元/月",
        "traffic": "150GB/月"
      }
    ],
    "notes": "新用户购买季付及以上套餐输入 flycat888 享 8 折，适用范围以结算页为准。"
  },
  {
    "id": "muguangjiashu",
    "slug": "muguangjiashu-review",
    "name": "暮光加速",
    "affLink": "https://quanqi12.twilightaff.com/#/?code=beAVqNPf",
    "promoCode": "mm88",
    "promoDesc": "官方专属 8 折优惠码 mm88",
    "minPrice": "20 元/月 · 120GB/月",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1.5TB/月，另有一次性与定制专线",
    "lineType": "大带宽优化中转与专线",
    "protocol": "高性能流媒体优化协议",
    "aiSupport": "全方位支持 ChatGPT、Claude 等主流 AI 工具",
    "streaming": "晚高峰观看 YouTube 4K 顺畅，流媒体全面解锁",
    "tagline": "晚高峰观看 4K 视频流畅，下载可跑满带宽，多媒体全面解锁与 AI 高度可用",
    "audience": "重视高峰期影音体验、高频观看海外视频与大流量下载的重度用户",
    "notFor": "仅需每月几个吉字节应急的超轻量备用者",
    "plans": [
      {
        "name": "基础版",
        "price": "20 元/月 (折后 16 元)",
        "traffic": "120GB/月"
      },
      {
        "name": "标准版",
        "price": "40 元/月 (折后 32 元)",
        "traffic": "300GB/月"
      },
      {
        "name": "旗舰版",
        "price": "100 元/月 (折后 80 元)",
        "traffic": "700GB/月"
      },
      {
        "name": "至尊版",
        "price": "180 元/月 (折后 144 元)",
        "traffic": "1.5TB/月"
      },
      {
        "name": "一次性流量",
        "price": "219 元 / 150GB 起",
        "traffic": "150G - 800G"
      }
    ],
    "notes": "结算时输入 mm88 可享 8 折；适用套餐与有效期以结算页为准。"
  },
  {
    "id": "dalaoyun",
    "slug": "dalaoyun-review",
    "name": "大佬云",
    "affLink": "https://adcua9104.dalaoyunaff.com/#/?code=J6GqQqk8",
    "promoCode": "dly88",
    "promoDesc": "拼音首字母专属优惠码 dly88",
    "minPrice": "20 元/月 · 120GB",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1500GB，阶梯定价分明",
    "lineType": "多档位梯度中转与专线",
    "protocol": "标准通用订阅",
    "aiSupport": "各档位均支持日常 AI 工具与外服办公",
    "streaming": "支持主流流媒体高码率视频流播放",
    "tagline": "套餐层级清晰，价格梯度透明，涵盖轻量月付到尊享大户完整周期",
    "audience": "喜欢标准阶梯定价、追求明确账单周期与多周期弹性续费的自用读者",
    "notFor": "只寻找 5 元以下廉价小流量过渡的超短期用户",
    "plans": [
      {
        "name": "轻云 Lite",
        "price": "20.00 元/月 (54/季, 192/年)",
        "traffic": "120GB"
      },
      {
        "name": "跃云 Leap",
        "price": "40.00 元/月 (108/季, 384/年)",
        "traffic": "300GB"
      },
      {
        "name": "凌云 Soar",
        "price": "100.00 元/月 (270/季, 960/年)",
        "traffic": "700GB"
      },
      {
        "name": "无界 Infinity",
        "price": "180.00 元/月 (486/季, 1728/年)",
        "traffic": "1500GB"
      }
    ],
    "notes": "流量重置口径建议在注册登录后于用户中心控制台最后复核。"
  },
  {
    "id": "breezenet",
    "slug": "breezenet-review",
    "name": "微风网络（BreezeNet）",
    "affLink": "https://edp01.breezenetaff.com/#/?code=vxDUI8kY",
    "promoCode": "wfwn88",
    "promoDesc": "拼音首字母专属优惠码 wfwn88",
    "minPrice": "25 元/月 · 200GB/月",
    "minPriceNum": 25.0,
    "traffic": "200GB/月，大容量性价比月付",
    "lineType": "轻量 IEPL 专线",
    "protocol": "自研客户端 + 通用订阅导入",
    "aiSupport": "支持常规日常 AI 交互与资料检索",
    "streaming": "支持主流海外流媒体影音播放",
    "tagline": "定位为轻量 IEPL 专线方案，低门槛大流量，自研与第三方订阅导入兼具",
    "audience": "偏好大容量月流量、希望从月付小额测试、轻度自用兼顾主力者",
    "notFor": "要求多国极度冷门住宅出口的特种测试从业者",
    "plans": [
      {
        "name": "月付主力档",
        "price": "25 元/月",
        "traffic": "200GB/月"
      },
      {
        "name": "目录参考年付",
        "price": "137 元/年",
        "traffic": "100GB/月"
      },
      {
        "name": "轻量体验包",
        "price": "以控制台为准",
        "traffic": "50GB/月"
      }
    ],
    "notes": "公开价格记录存在多版本，发布前在邀请页确认当前最低档、重置方式与设备并发。"
  },
  {
    "id": "langwang",
    "slug": "langwang-review",
    "name": "浪网（WaveNet）",
    "affLink": "https://langwang.wavenetaff.com/#/?code=pYe3kzd4",
    "promoCode": "lw88",
    "promoDesc": "专属优惠码 lw88",
    "minPrice": "25 元/月 · 150GB/月",
    "minPriceNum": 25.0,
    "traffic": "150GB - 2TB/月，不限在线设备数量",
    "lineType": "AI 与开发者定向优化专线",
    "protocol": "优选 Shadowsocks 协议",
    "aiSupport": "重点优化 ChatGPT、Claude 及各类 AI 开发工具",
    "streaming": "支持海外主流影音及技术论坛流畅访问",
    "tagline": "重点面向 AI 应用和开发工具访问，采用成熟协议且不限制设备数量",
    "audience": "程序员、AI 开发者、需要多设备协同办公的自由职业者与团队",
    "notFor": "仅在旧版本单核廉价软路由上运行且不支持并发的设备",
    "plans": [
      {
        "name": "用户入门价",
        "price": "25 元/月",
        "traffic": "150GB/月"
      },
      {
        "name": "常规中档",
        "price": "70 元/月",
        "traffic": "400GB/月"
      },
      {
        "name": "重度档位",
        "price": "120 元/月",
        "traffic": "800GB/月"
      },
      {
        "name": "旗舰 2TB",
        "price": "200 元/月",
        "traffic": "2TB/月"
      },
      {
        "name": "年付轻量",
        "price": "119 元/年",
        "traffic": "80GB/月"
      }
    ],
    "notes": "结算时输入 lw88；不限制在线设备数，但需遵守合理使用守则。"
  },
  {
    "id": "ermaoyun",
    "slug": "ermaoyun-review",
    "name": "二猫云",
    "affLink": "https://quanqiu.2maoyunaff.cc/#/?code=zy39Ip8E",
    "promoCode": "emy88",
    "promoDesc": "拼音首字母专属优惠码 emy88",
    "minPrice": "20 元/月 · 100GB/月",
    "minPriceNum": 20.0,
    "traffic": "100GB - 800GB/月，多档位动物系列套餐",
    "lineType": "中转 + 专线混合架构",
    "protocol": "混合优化协议",
    "aiSupport": "支持常规 AI 工具与外服检索",
    "streaming": "原生 IP 落地，重点强化流媒体解锁",
    "tagline": "以中转 + 专线的混合线路平衡成本和稳定性，原生 IP 与流媒体解锁出彩",
    "audience": "预算适中、主要需求是追剧、观影和常规海外服务日常浏览的用户",
    "notFor": "对完全纯专线无任何中转有严格要求的政企级用户",
    "plans": [
      {
        "name": "白猫套餐",
        "price": "20 元/月",
        "traffic": "100GB/月"
      },
      {
        "name": "橘猫畅玩版",
        "price": "40 元/月",
        "traffic": "200GB/月"
      },
      {
        "name": "牛奶猫尊享版",
        "price": "80 元/月",
        "traffic": "400GB/月"
      },
      {
        "name": "黑猫无限版",
        "price": "160 元/月",
        "traffic": "800GB/月"
      }
    ],
    "notes": "公开记录为暂无一次性不限时订阅；线路构成与客户端限制需在控制台确认。"
  },
  {
    "id": "kexinyun",
    "slug": "kexinyun-review",
    "name": "可信云",
    "affLink": "https://quanqiu.kosingaff.com/#/?code=NRG0tXKO",
    "promoCode": "kxy88",
    "promoDesc": "拼音首字母专属优惠码 kxy88",
    "minPrice": "9 元/月 · 45GB/月（轻量月付）",
    "minPriceNum": 9.0,
    "traffic": "45GB - 1200GB/月，常规基础 25 元 / 150GB",
    "lineType": "IEPL 企业级专线",
    "protocol": "全平台通用专线协议",
    "aiSupport": "全天候低延迟支持各类 AI 办公工具",
    "streaming": "高可用解锁 Netflix、Disney+ 等主流平台",
    "tagline": "品牌叙事聚焦长期稳定与售后服务，IEPL 专线全平台支持与高流媒体兼容",
    "audience": "愿意为稳定网络与服务响应支付合理月费、偏好老牌工单保障的用户",
    "notFor": "寻找免费测试或超低价大流量共享的短期羊毛客",
    "plans": [
      {
        "name": "轻量月付",
        "price": "9 元/月",
        "traffic": "45GB/月"
      },
      {
        "name": "基础版月付",
        "price": "25 元/月",
        "traffic": "150GB/月"
      },
      {
        "name": "标准版月付",
        "price": "50 元/月",
        "traffic": "300GB/月"
      },
      {
        "name": "专业版月付",
        "price": "100 元/月",
        "traffic": "600GB/月"
      },
      {
        "name": "旗舰版月付",
        "price": "200 元/月",
        "traffic": "1200GB/月"
      },
      {
        "name": "年付小包",
        "price": "96 元/年 (总量 60G)",
        "traffic": "60GB/年"
      }
    ],
    "notes": "年付小包流量为全年总量而非按月重置；售后时效与专线覆盖以当前条款为准。"
  },
  {
    "id": "yinxingren",
    "slug": "yinxingren-review",
    "name": "隐形人",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=ISH1y2IF",
    "promoCode": "yxr888",
    "promoDesc": "新户专享优惠码 yxr888",
    "minPrice": "24 元/月 · 144GB/月",
    "minPriceNum": 24.0,
    "traffic": "144GB - 1600GB/月，纯专线架构随用随续",
    "lineType": "全线纯专线架构",
    "protocol": "纯专线 + VLESS 协议",
    "aiSupport": "AI 与各类生产力工具原生纯净解锁",
    "streaming": "强调 8K 极速加载与流媒体原生解锁",
    "tagline": "新加坡团队打造，全线纯专线与 VLESS 协议，8K 视频秒开与原生解锁",
    "audience": "关注专线质量、画质追求极高、注重随用随续灵活性的极客与发烧友",
    "notFor": "只愿付出极低预算寻找数元月付的偶尔翻阅者",
    "plans": [
      {
        "name": "白银纪元",
        "price": "24 元/月",
        "traffic": "144GB/月"
      },
      {
        "name": "黄金序列",
        "price": "48 元/月",
        "traffic": "360GB/月"
      },
      {
        "name": "铂金至臻",
        "price": "105 元/月",
        "traffic": "750GB/月"
      },
      {
        "name": "钻石穹顶",
        "price": "185 元/月",
        "traffic": "1600GB/月"
      },
      {
        "name": "一次性流量包",
        "price": "229 元 / 160GB 起",
        "traffic": "160G - 1000G"
      }
    ],
    "notes": "新用户结算时输入 yxr888；一次性方案标注有设备限制，购买前请核对。"
  },
  {
    "id": "lingdongyun",
    "slug": "lingdongyun-review",
    "name": "灵动云",
    "affLink": "https://lingdongyun.lingdongaff.com/#/?code=ibHQOYGt",
    "promoCode": "ld88",
    "promoDesc": "专属优惠码 ld88",
    "minPrice": "20 元/月 · 100GB/月",
    "minPriceNum": 20.0,
    "traffic": "100GB - 1.5TB/月，覆盖常用亚太节点",
    "lineType": "亚太高质量中转与专线",
    "protocol": "全线现代 VLESS 协议",
    "aiSupport": "支持常规 AI 对话工具与学术搜索",
    "streaming": "晚高峰观看 YouTube 4K 顺畅，主流流媒体解锁",
    "tagline": "全线采用较新 VLESS 协议，覆盖港台日新美，晚高峰 4K 视频顺畅",
    "audience": "看重常用亚太地区节点覆盖、追求影音顺畅与协议现代化的高清观众",
    "notFor": "使用无法更新升级的老旧非 VLESS 客户端软件终端",
    "plans": [
      {
        "name": "拂风版",
        "price": "20 元/月 (204/年)",
        "traffic": "100GB/月"
      },
      {
        "name": "驭浪版",
        "price": "50 元/月 (510/年)",
        "traffic": "300GB/月"
      },
      {
        "name": "破晓版",
        "price": "100 元/月 (1020/年)",
        "traffic": "700GB/月"
      },
      {
        "name": "凌霄版",
        "price": "180 元/月 (1836/年)",
        "traffic": "1.5TB/月"
      },
      {
        "name": "一次性闲云",
        "price": "199 元 / 一次性",
        "traffic": "150GB 不限时"
      }
    ],
    "notes": "结算时输入 ld88；实际折扣、适用套餐与有效期以结算页为准。"
  },
  {
    "id": "guangnianti",
    "slug": "guangnianti-review",
    "name": "光年梯",
    "affLink": "https://quanqiu.gntaff.com/#/?code=qUJeOegs",
    "promoCode": "gnt88",
    "promoDesc": "拼音首字母专属优惠码 gnt88",
    "minPrice": "18 元/月 · 110GB/月",
    "minPriceNum": 18.0,
    "traffic": "110GB - 900GB/月，另有私人专线定制方案",
    "lineType": "三网优化中转",
    "protocol": "通用主流协议",
    "aiSupport": "稳定访问 ChatGPT 等日常 AI 服务",
    "streaming": "支持主流海外高清流媒体播放",
    "tagline": "易用性优先，强调客户端一键导入、三网线路优化与清晰套餐档位",
    "audience": "新手第一次接触机场的轻量自用选择、注重配置直观易上手的用户",
    "notFor": "需要极端海外小众落地国家或超大并发团队商用",
    "plans": [
      {
        "name": "入门版",
        "price": "18 元/月",
        "traffic": "110GB/月"
      },
      {
        "name": "晋级版",
        "price": "34 元/月",
        "traffic": "220GB/月"
      },
      {
        "name": "专业版",
        "price": "68 元/月",
        "traffic": "450GB/月"
      },
      {
        "name": "至尊版",
        "price": "130 元/月",
        "traffic": "900GB/月"
      },
      {
        "name": "私人专线",
        "price": "680 元/月",
        "traffic": "500GB/月 (独享带宽)"
      }
    ],
    "notes": "结算时请确认各周期折扣、订阅导入方式及独享节点交付标准。"
  },
  {
    "id": "lingmaowangluo",
    "slug": "lingmaowangluo-review",
    "name": "灵猫网络（Civet）",
    "affLink": "https://vip02.civetaff.com/#/?code=MLVZXxQj",
    "promoCode": "lmwl88",
    "promoDesc": "拼音首字母专属优惠码 lmwl88",
    "minPrice": "25 元/月 · 150GB/月（月付 Small）",
    "minPriceNum": 25.0,
    "traffic": "150GB - 300GB/月，年付小包 85 元/年 (45GB)",
    "lineType": "宣称 IPLC 专线",
    "protocol": "通用多平台订阅",
    "aiSupport": "日常网络交互与 AI 检索访问",
    "streaming": "宣称支持主流海外影视流媒体",
    "tagline": "服务商资料主打 IPLC、1 倍流量、不限设备与通用订阅，多档位梯度",
    "audience": "讨厌复杂高倍率计费规则、有多台设备需要同时连接的自用读者",
    "notFor": "要求详尽公开机房上游网络拓扑与 SLA 赔付承诺的用户",
    "plans": [
      {
        "name": "年付小包",
        "price": "85 元/年",
        "traffic": "45GB/年"
      },
      {
        "name": "月付 Small",
        "price": "25 元/月 (195/年)",
        "traffic": "150GB/月"
      },
      {
        "name": "月付 Big",
        "price": "45 元/月 (295/年)",
        "traffic": "300GB/月"
      },
      {
        "name": "季付 Small",
        "price": "65 元/季",
        "traffic": "150GB/月"
      },
      {
        "name": "季付 Big",
        "price": "125 元/季",
        "traffic": "300GB/月"
      }
    ],
    "notes": "宣传协议与节点截图存在不一致；流量重置口径与设备并发须在结算页核实。"
  },
  {
    "id": "firefly",
    "slug": "firefly-review",
    "name": "Firefly",
    "affLink": "https://vip02.fireflyaff.com/#/?code=lBPETX1d",
    "promoCode": "ff88",
    "promoDesc": "品牌专属优惠码 ff88",
    "minPrice": "25 元/月 · 150GB/月（Lite 版）",
    "minPriceNum": 25.0,
    "traffic": "150GB - 1000GB/月，年付折合 8 元/月，一次性 100GB 可选",
    "lineType": "宣称 IPLC + VLESS",
    "protocol": "VLESS 专线协议",
    "aiSupport": "宣称支持各类常用 AI 办公与检索应用",
    "streaming": "宣传原生 IP 落地与主流海外流媒体支持",
    "tagline": "服务商定位偏向 IPLC 与 VLESS，宣传原生 IP、不限设备和企业定制",
    "audience": "偏向 VLESS 专线架构、需要大流量与不限设备并发、有一次性储备需求者",
    "notFor": "仅需极少量备用流量且不想月付 25 元的偶尔读者",
    "plans": [
      {
        "name": "年付版",
        "price": "96 元/年 (折合 8 元/月)",
        "traffic": "60GB/月"
      },
      {
        "name": "Lite 月付",
        "price": "25 元/月",
        "traffic": "150GB/月"
      },
      {
        "name": "Plus 月付",
        "price": "45 元/月",
        "traffic": "300GB/月"
      },
      {
        "name": "Blaze 月付",
        "price": "85 元/月",
        "traffic": "600GB/月"
      },
      {
        "name": "Nova 月付",
        "price": "150 元/月",
        "traffic": "1000GB/月"
      },
      {
        "name": "一次性套餐",
        "price": "100 元 / 一次性",
        "traffic": "100GB 不限时"
      }
    ],
    "notes": "通用订阅需按控制台实际提供为准；购买前确认所需客户端及公平使用条款。"
  },
  {
    "id": "yifanyun",
    "slug": "yifanyun-review",
    "name": "一翻云",
    "affLink": "https://quanqiu.1flyunaff.cc/#/?code=gJtw80i4",
    "promoCode": "yfy88",
    "promoDesc": "拼音首字母专属优惠码 yfy88",
    "minPrice": "30 元/月 · 150GB/月",
    "minPriceNum": 30.0,
    "traffic": "150GB - 1200GB/月，大流量高起点",
    "lineType": "三网优化进阶线路",
    "protocol": "VLESS / Reality 现代协议",
    "aiSupport": "高抗封锁传输，支持高强度 AI 数据交互",
    "streaming": "高码率超高清流媒体无缓冲播放",
    "tagline": "入门档即提供 150GB 高流量，全线采用 VLESS / Reality 协议抗封锁",
    "audience": "视频、下载等月度消耗较大，并在意新技术协议抗封锁能力的使用者",
    "notFor": "预算低于 20 元/月或设备不支持 Reality 协议的老旧终端",
    "plans": [
      {
        "name": "VIP1",
        "price": "30 元/月 (306/年)",
        "traffic": "150GB/月"
      },
      {
        "name": "VIP2",
        "price": "60 元/月 (612/年)",
        "traffic": "300GB/月"
      },
      {
        "name": "VIP3",
        "price": "120 元/月 (1224/年)",
        "traffic": "600GB/月"
      },
      {
        "name": "VIP4",
        "price": "240 元/月 (2448/年)",
        "traffic": "1200GB/月"
      }
    ],
    "notes": "长期套餐应确认流量是否按月重置、节点倍率和退款条款。"
  },
  {
    "id": "yuzhouyun",
    "slug": "yuzhouyun-review",
    "name": "宇宙云",
    "affLink": "https://quanqiu.yuzoucloud.cc/#/?code=f3DHb9Gj",
    "promoCode": "yzy88",
    "promoDesc": "拼音首字母专属优惠码 yzy88",
    "minPrice": "14.9 元/月 · 100GB/月",
    "minPriceNum": 14.9,
    "traffic": "100GB 起步，宣称覆盖 70+ 节点与多国出口",
    "lineType": "多地区专线与中转",
    "protocol": "通用多协议接入",
    "aiSupport": "支持常规 AI 对话工具与学术搜索",
    "streaming": "覆盖主流国家流媒体解锁",
    "tagline": "走多地区覆盖与大流量性价比路线，强调三网优化与主流客户端快速导入",
    "audience": "经常切换不同国家或地区节点、希望在合理预算内控制月度成本的用户",
    "notFor": "要求 100% 独享专线保活或极度敏感的金融业务",
    "plans": [
      {
        "name": "公开入门档",
        "price": "14.9 元/月",
        "traffic": "100GB/月"
      },
      {
        "name": "多地区进阶包",
        "price": "结算页即时显示",
        "traffic": "多档位可选"
      },
      {
        "name": "不限时储备包",
        "price": "以控制台为准",
        "traffic": "一次性流量"
      }
    ],
    "notes": "需在邀请页确认节点具体地区、流量倍率、设备数、续费与退款规则。"
  },
  {
    "id": "weituyun",
    "slug": "weituyun-review",
    "name": "唯兔云",
    "affLink": "https://quanqiu.vipaff.cc/#/?code=c4sOJBXE",
    "promoCode": "wty88",
    "promoDesc": "拼音首字母专属优惠码 wty88",
    "minPrice": "14.9 元/月 · 100GB/月",
    "minPriceNum": 14.9,
    "traffic": "100GB - 1000GB/月，年付折合 6.66 元/月，不限时 500GB 可选",
    "lineType": "60+ 节点负载均衡",
    "protocol": "VLESS 现代协议",
    "aiSupport": "全面解锁 ChatGPT、Claude 及主流 AI 工具",
    "streaming": "多节点负载均衡解锁全球流媒体",
    "tagline": "采用 VLESS 作为主要协议卖点，60+ 节点与智能负载均衡，减少手动切线",
    "audience": "注重协议先进性与多节点自动调度、希望减少手动切线频率的进阶用户",
    "notFor": "仅限旧版本老式客户端且不支持 VLESS 协议的终端设备",
    "plans": [
      {
        "name": "入门年付",
        "price": "79.9 元/年 (约 6.66 元/月)",
        "traffic": "45GB/月"
      },
      {
        "name": "基础版",
        "price": "14.9 元/月 (142.9/年)",
        "traffic": "100GB/月"
      },
      {
        "name": "进阶版",
        "price": "29.9 元/月 (286.9/年)",
        "traffic": "200GB/月"
      },
      {
        "name": "高级版",
        "price": "59.9 元/月 (547.9/年)",
        "traffic": "500GB/月"
      },
      {
        "name": "尊享版",
        "price": "119.9 元/月 (1150.9/年)",
        "traffic": "1000GB/月"
      },
      {
        "name": "一次性流量包",
        "price": "340 元 / 一次性",
        "traffic": "500GB 不限时"
      }
    ],
    "notes": "购买前核对一次性流量包有效期及账户重置规则。"
  },
  {
    "id": "guangsuyun",
    "slug": "guangsuyun-review",
    "name": "光速云",
    "affLink": "https://quanqiu.gsyaff.com/#/?code=AAkbe2W6",
    "promoCode": "gsy88",
    "promoDesc": "拼音首字母专属优惠码 gsy88",
    "minPrice": "17 元/月 · 110GB/月",
    "minPriceNum": 17.0,
    "traffic": "110GB - 900GB/月，年付折合约 8.25 元/月，一次性 1000GB",
    "lineType": "BGP 入口低延迟中转",
    "protocol": "高性能中转协议",
    "aiSupport": "支持常用 AI 工具与搜索引擎快速响应",
    "streaming": "支持主流影音流媒体快速起播",
    "tagline": "核心叙事是 BGP 入口与低延迟中转，兼顾三网接入和客户端快速导入",
    "audience": "对网页即时响应、即时通讯及轻度游戏等延迟敏感的日常场景用户",
    "notFor": "追求冷门偏远地区住宅 IP 的特殊业务需求者",
    "plans": [
      {
        "name": "轻量年付",
        "price": "99 元/年 (折合约 8.25 元/月)",
        "traffic": "59GB/月"
      },
      {
        "name": "极速版",
        "price": "17 元/月",
        "traffic": "110GB/月"
      },
      {
        "name": "流光版",
        "price": "34 元/月",
        "traffic": "220GB/月"
      },
      {
        "name": "量子版",
        "price": "68 元/月",
        "traffic": "450GB/月"
      },
      {
        "name": "无界版",
        "price": "130 元/月",
        "traffic": "900GB/月"
      },
      {
        "name": "一次性套餐",
        "price": "680 元 / 一次性",
        "traffic": "1000GB 不限时"
      }
    ],
    "notes": "年付与不限时套餐的流量重置及有效期以结算页为准。"
  },
  {
    "id": "tiziyun",
    "slug": "tiziyun-review",
    "name": "梯子云（LadderCloud）",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=wI00rGj2",
    "promoCode": "tiziyun",
    "promoDesc": "官方专属 8 折优惠码 tiziyun",
    "minPrice": "25 元/月 · 125GB/月",
    "minPriceNum": 25.0,
    "traffic": "125GB - 1.6TB/月，另有一次性与轻量年付",
    "lineType": "全线 IEPL 企业专线",
    "protocol": "专线多协议，自研+开源客户端兼备",
    "aiSupport": "原生支持 ChatGPT 等主流 AI 工具",
    "streaming": "解锁 Netflix、Disney+ 等 4K 影音",
    "tagline": "全线采用 IEPL 企业专线，缓解晚高峰拥堵，提供自研与开源多端选择",
    "audience": "对高峰拥挤敏感、需要兼顾小白易用性与进阶客户端自定义的用户",
    "notFor": "对每月预算有极端 10 元以下限制的用户",
    "plans": [
      {
        "name": "基础版",
        "price": "25 元/月 (折后 20 元)",
        "traffic": "125GB/月"
      },
      {
        "name": "进阶版",
        "price": "60 元/月 (折后 48 元)",
        "traffic": "350GB/月"
      },
      {
        "name": "高级版",
        "price": "110 元/月 (折后 88 元)",
        "traffic": "750GB/月"
      },
      {
        "name": "顶配版",
        "price": "190 元/月 (折后 152 元)",
        "traffic": "1.6TB/月"
      },
      {
        "name": "年付轻量",
        "price": "89 元/年",
        "traffic": "60GB/年"
      }
    ],
    "notes": "结算时输入 tiziyun 可享 8 折；适用套餐与有效期以结算页为准。"
  },
  {
    "id": "jilianyun",
    "slug": "jilianyun-review",
    "name": "极连云",
    "affLink": "https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV",
    "promoCode": "jly88",
    "promoDesc": "拼音首字母专属优惠码 jly88",
    "minPrice": "15.5 元/月 · 100GB/月（常规月付）",
    "minPriceNum": 15.5,
    "traffic": "100GB - 1000GB/月，年付折合 8 元/月，一次性 1000GB 可选",
    "lineType": "IPLC 内网专线",
    "protocol": "IPLC 专线协议",
    "aiSupport": "优质支持 ChatGPT、Claude 等生产力工具",
    "streaming": "香港、日本方向低延迟解锁 4K 流媒体",
    "tagline": "主打 IPLC 内网专线连通稳定性，重点突出抗封锁、防 QoS 与亚太低延迟",
    "audience": "敏感时期仍需保持高连通率、跨国远程办公与对低延迟敏感的 AI 进阶用户",
    "notFor": "仅需超小流量且拒绝任何月付门槛的偶尔使用人群",
    "plans": [
      {
        "name": "轻量体验年付",
        "price": "96 元/年 (折合 8 元/月)",
        "traffic": "60GB/月"
      },
      {
        "name": "基础版月付",
        "price": "15.5 元/月",
        "traffic": "100GB/月"
      },
      {
        "name": "进阶版月付",
        "price": "30.5 元/月",
        "traffic": "200GB/月"
      },
      {
        "name": "旗舰版月付",
        "price": "65.5 元/月",
        "traffic": "500GB/月"
      },
      {
        "name": "尊享版月付",
        "price": "120.5 元/月",
        "traffic": "1000GB/月"
      },
      {
        "name": "一次性流量包",
        "price": "399 元 / 一次性",
        "traffic": "1000GB 不限时"
      }
    ],
    "notes": "年付折算价不等于月付门槛；专线覆盖、流量倍率和长期套餐规则以结算页为准。"
  },
  {
    "id": "shanyue",
    "slug": "shanyue-review",
    "name": "闪跃（FlashLeap）",
    "affLink": "https://vip02.flashleapaff.com/#/?code=bsjhVp9y",
    "promoCode": "sy88",
    "promoDesc": "拼音首字母专属优惠码 sy88",
    "minPrice": "24 元/月 · 150GB/月（闪动 Flicker）",
    "minPriceNum": 24.0,
    "traffic": "150GB - 1000GB/月，年付折合 8 元/月",
    "lineType": "宣称 IPLC 专线架构",
    "protocol": "通用订阅与定制客户端",
    "aiSupport": "宣称支持 ChatGPT 等 AI 工具快速响应",
    "streaming": "宣称原生 IP 落地，兼顾流媒体解锁",
    "tagline": "资料描述为 IPLC 专线与 1 倍流量方案，兼顾低延迟、通用订阅和定制端",
    "audience": "重视高峰期低延迟响应、愿意先从小额月付验证性能的进阶用户",
    "notFor": "未经验证便盲目大额年付的冲动型消费者",
    "plans": [
      {
        "name": "闪跃年付版",
        "price": "96 元/年 (折合 8 元/月)",
        "traffic": "60GB/月"
      },
      {
        "name": "闪动 Flicker",
        "price": "24 元/月",
        "traffic": "150GB/月"
      },
      {
        "name": "飞跃 Leap",
        "price": "44 元/月",
        "traffic": "300GB/月"
      },
      {
        "name": "瞬移 Teleport",
        "price": "84 元/月",
        "traffic": "600GB/月"
      },
      {
        "name": "跃迁 Warp",
        "price": "134 元/月",
        "traffic": "1000GB/月"
      }
    ],
    "notes": "下单前核对当前折扣、实际设备数限制、流量重置周期与导入方式。"
  },
  {
    "id": "u1s1",
    "slug": "u1s1-review",
    "name": "U1S1",
    "affLink": "https://quanqiu.v2yunvipaff.com/#/?code=YCf9VJsS",
    "promoCode": "u1s188",
    "promoDesc": "按首字母生成优惠码 u1s188，结算前以官方活动页为准",
    "minPrice": "20 元/月 · 120GB/月",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1500GB/月，另有 1000GB 一次性流量包",
    "lineType": "中转优化",
    "protocol": "主流通用中转",
    "aiSupport": "支持 ChatGPT 等日常 AI 工具交互",
    "streaming": "解锁主流流媒体，提供原生 IP 节点",
    "tagline": "定位偏向稳定、标注清楚的长期自用方案，中转优化配合原生 IP 落地",
    "audience": "在意实际可用性、不想研究复杂配置的长期自用用户与日常影音读者",
    "notFor": "追求超低单价年付、极端多端并发共享或极客冷门协议玩家",
    "plans": [
      {
        "name": "基础体验版",
        "price": "20 元/月",
        "traffic": "120GB/月"
      },
      {
        "name": "日常影音版",
        "price": "40 元/月",
        "traffic": "300GB/月"
      },
      {
        "name": "重度冲浪版",
        "price": "100 元/月",
        "traffic": "700GB/月"
      },
      {
        "name": "尊享大户版",
        "price": "180 元/月",
        "traffic": "1500GB/月"
      },
      {
        "name": "不限时流量包",
        "price": "580 元 / 一次性",
        "traffic": "1000GB 不限时"
      }
    ],
    "notes": "套餐名称与价格据公开资料整理，发布与购买前仍需在结算页确认流量重置周期、在线设备数及节点倍率。"
  },
  {
    "id": "wuyoulianjie",
    "slug": "wuyoulianjie-review",
    "name": "无忧链接",
    "affLink": "https://wep01.worryfreeaff.com/#/?code=fOCJz3E2",
    "promoCode": "wylj88",
    "promoDesc": "拼音首字母专属优惠码 wylj88",
    "minPrice": "12.92 元/月 · 100GB/月",
    "minPriceNum": 12.92,
    "traffic": "100GB - 1TB/月，另有 mini 年付与超低门槛一次性包",
    "lineType": "多协议均衡优化中转",
    "protocol": "VLESS / Trojan / Hysteria2 多协议",
    "aiSupport": "宣称支持 ChatGPT 等常规 AI 工具使用",
    "streaming": "覆盖港日新美，常规流媒体支持",
    "tagline": "亮点在于通用订阅与主流多协议兼容，从低频小包延伸到 1TB 月流量",
    "audience": "追求极低月付起步、使用频次不固定、希望储备一次性流量包的用户",
    "notFor": "对特定专线 SLA 可用率有极度苛刻商业保障的企业客户",
    "plans": [
      {
        "name": "mini 链接年付",
        "price": "79 元/年",
        "traffic": "40GB/月"
      },
      {
        "name": "舒心链接",
        "price": "12.92 元/月 (123.76/年)",
        "traffic": "100GB/月"
      },
      {
        "name": "省心链接",
        "price": "22.44 元/月 (214.88/年)",
        "traffic": "200GB/月"
      },
      {
        "name": "随心链接",
        "price": "52.36 元/月 (502.52/年)",
        "traffic": "500GB/月"
      },
      {
        "name": "忘忧链接",
        "price": "117 元/月 (1123/年)",
        "traffic": "1TB/月"
      },
      {
        "name": "一次性流量包",
        "price": "16.15 元 / 100GB",
        "traffic": "100GB 不限时"
      }
    ],
    "notes": "协议、节点和晚高峰表现仍以实时页面与本地测试为准。"
  },
  {
    "id": "sogoyun",
    "slug": "sogoyun-review",
    "name": "SOGO 云",
    "affLink": "https://afasfw.sogotztz2.sbs/#/?code=Mgoqf6KP",
    "promoCode": "sogo88",
    "promoDesc": "品牌专属优惠码 sogo88",
    "minPrice": "20 元/月 · 120GB/月（活动入门档）",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1000GB/月，另有一系列一次性套餐可选",
    "lineType": "全球专线优化",
    "protocol": "多端通用专线",
    "aiSupport": "多设备并发顺畅访问各类 AI 办公工具",
    "streaming": "支持 4K 流媒体多设备并发观赏",
    "tagline": "突出全球节点、专线优化和多设备使用，套餐从较大的月流量起步",
    "audience": "家庭或小团队的多端并发连接、4K 流媒体与 AI 工具协同办公",
    "notFor": "仅有一台手机使用且每月消耗不足 10GB 的超低频用户",
    "plans": [
      {
        "name": "活动入门档",
        "price": "20 元/月 (常规 25 元)",
        "traffic": "120GB/月"
      },
      {
        "name": "优选版",
        "price": "50 元/月",
        "traffic": "250GB/月"
      },
      {
        "name": "强化版",
        "price": "100 元/月",
        "traffic": "500GB/月"
      },
      {
        "name": "顶配版",
        "price": "200 元/月",
        "traffic": "1000GB/月"
      },
      {
        "name": "一次性 100G",
        "price": "100 元",
        "traffic": "100GB 不限时"
      },
      {
        "name": "一次性 500G",
        "price": "400 元",
        "traffic": "500GB 不限时"
      }
    ],
    "notes": "活动价可能随时调整，多设备同时在线规则应在下单前确认。"
  },
  {
    "id": "edgenova",
    "slug": "edgenova-review",
    "name": "边缘节点（EdgeNova）",
    "affLink": "https://quanqi.edgenovaaff.cc/#/?code=8BBARdHw",
    "promoCode": "byjd88",
    "promoDesc": "拼音首字母专属优惠码 byjd88",
    "minPrice": "25 元/月 · 120GB/月（常规月付）",
    "minPriceNum": 25.0,
    "traffic": "120GB - 1000GB/月，年付折合 9 元/月",
    "lineType": "海外团队 Reality 纯净节点",
    "protocol": "Reality 原生协议",
    "aiSupport": "外服环境与 AI 生产力工具高度适配",
    "streaming": "原生落地 IP，海外流媒体全解锁",
    "tagline": "海外团队运营与 Reality 协议是主要辨识度，原生 IP 节点专为外服与 AI 打造",
    "audience": "能接受技术化配置、看重抗封锁与纯净原生落地 IP 属性的专业用户",
    "notFor": "完全没有代理基础的新手或仅需要傻瓜式极简界面的用户",
    "plans": [
      {
        "name": "年付入门",
        "price": "108 元/年 (折合 9 元/月)",
        "traffic": "45GB/月"
      },
      {
        "name": "标准版月付",
        "price": "25 元/月",
        "traffic": "120GB/月"
      },
      {
        "name": "进阶版月付",
        "price": "50 元/月",
        "traffic": "250GB/月"
      },
      {
        "name": "高级版月付",
        "price": "100 元/月",
        "traffic": "500GB/月"
      },
      {
        "name": "极限版月付",
        "price": "200 元/月",
        "traffic": "1000GB/月"
      }
    ],
    "notes": "英文界面、协议兼容与原生 IP 地区应在下单前先行确认。"
  },
  {
    "id": "flyv",
    "slug": "flyv-review",
    "name": "FlyV（飞V）",
    "affLink": "https://feiv289.flyvaff.com/#/?code=qQCT0BeY",
    "promoCode": "fly20",
    "promoDesc": "官方专属优惠码 fly20",
    "minPrice": "25 元/月 · 150GB/月",
    "minPriceNum": 25.0,
    "traffic": "150GB - 1000GB/月，统一 1× 计费，不限设备",
    "lineType": "全线专线架构",
    "protocol": "高速专线接入",
    "aiSupport": "稳定访问 ChatGPT 等主流 AI 工具",
    "streaming": "支持 4K/8K 流媒体，全节点 1x 计费",
    "tagline": "全线专线架构，所有节点按 1× 流量计费，不限速不限制设备数量",
    "audience": "多设备家庭、高码率影音场景、反感复杂高倍率计费的自用读者",
    "notFor": "对入门价格要求必须低于 15 元的预算敏感型读者",
    "plans": [
      {
        "name": "年付版",
        "price": "96 元/年 (折合 8 元/月)",
        "traffic": "60GB/月"
      },
      {
        "name": "Lite 月付",
        "price": "25 元/月",
        "traffic": "150GB/月"
      },
      {
        "name": "Plus 月付",
        "price": "45 元/月",
        "traffic": "300GB/月"
      },
      {
        "name": "Blaze 月付",
        "price": "85 元/月",
        "traffic": "600GB/月"
      },
      {
        "name": "Nova 月付",
        "price": "150 元/月",
        "traffic": "1000GB/月"
      },
      {
        "name": "一次性流量包",
        "price": "100 元 / 一次性",
        "traffic": "100GB 不限时"
      }
    ],
    "notes": "结算时输入 fly20；发布前请在 FlyV 结算页确认最新套餐阶梯与重置规则。"
  },
  {
    "id": "sujie",
    "slug": "sujie-review",
    "name": "速界",
    "affLink": "https://quanqiu.speedworldaff.cc/#/?code=kY825Zat",
    "promoCode": "sj88",
    "promoDesc": "拼音首字母专属优惠码 sj88",
    "minPrice": "25 元/月 · 150GB/月",
    "minPriceNum": 25.0,
    "traffic": "150GB 起步，支持季付、半年、年付等长周期优惠",
    "lineType": "高带宽 IPLC 专线",
    "protocol": "IPLC 高速专线协议",
    "aiSupport": "晚高峰低丢包，流畅支持各类 AI 应用",
    "streaming": "专业支持 4K/8K 超高清流媒体晚高峰播放",
    "tagline": "卖点集中在高带宽 IPLC 专线和晚高峰承载，超低延迟与 4K/8K 影音强劲",
    "audience": "对高峰时段速度、高清播放和大流量传输要求较高的重度流媒体与游戏用户",
    "notFor": "只查文字网页的极轻度偶尔自用人群",
    "plans": [
      {
        "name": "极速版",
        "price": "25 元/月 (255/年)",
        "traffic": "150GB/月"
      },
      {
        "name": "超速版",
        "price": "50 元/月 (510/年)",
        "traffic": "中大流量档"
      },
      {
        "name": "光速版",
        "price": "100 元/月 (1020/年)",
        "traffic": "大带宽进阶档"
      },
      {
        "name": "跃迁版",
        "price": "200 元/月 (2040/年)",
        "traffic": "旗舰极限档"
      },
      {
        "name": "年付体验包",
        "price": "88 元/年",
        "traffic": "轻量体验包"
      }
    ],
    "notes": "公开价格表未同时列明各高阶档精确流量，购买前须在结算页核对。"
  },
  {
    "id": "kuajieyun",
    "slug": "kuajieyun-review",
    "name": "跨界云",
    "affLink": "https://vip02.kuajieaff.com/#/?code=Qu0GQkhP",
    "promoCode": "kjy88",
    "promoDesc": "拼音首字母专属优惠码 kjy88",
    "minPrice": "20 元/月 · 120GB",
    "minPriceNum": 20.0,
    "traffic": "120GB - 1500GB/月，四档阶梯覆盖",
    "lineType": "宣称全网专线升级",
    "protocol": "通用订阅接入",
    "aiSupport": "支持常规日常 AI 交互与工具访问",
    "streaming": "支持主流海外流媒体播放",
    "tagline": "核心信息是服务商所称的全网专线升级与通用订阅，提供 120G 至 1500G 宽幅选择",
    "audience": "习惯月付小额测试、对月度流量有明确梯度规划的自用读者",
    "notFor": "要求严格公开端到端专线测速承诺与 SLA 担保的用户",
    "plans": [
      {
        "name": "轻云 Lite",
        "price": "20 元/月 (54/季, 192/年)",
        "traffic": "120GB"
      },
      {
        "name": "跃云 Leap",
        "price": "40 元/月 (108/季, 384/年)",
        "traffic": "300GB"
      },
      {
        "name": "凌云 Soar",
        "price": "100 元/月 (270/季, 960/年)",
        "traffic": "700GB"
      },
      {
        "name": "无界 Infinity",
        "price": "180 元/月 (486/季, 1728/年)",
        "traffic": "1500GB"
      }
    ],
    "notes": "资料标有一次性方案可用但未列价格；结算前确认流量周期、设备并发及当前专线规则。"
  },
  {
    "id": "kuaili",
    "slug": "kuaili-review",
    "name": "快狸",
    "affLink": "https://quanqiu.kuailicloud.cc/#/?code=vuYET5Qj",
    "promoCode": "kl88",
    "promoDesc": "拼音首字母专属优惠码 kl88",
    "minPrice": "10 元/月 · 30GB/月（活动入门档）",
    "minPriceNum": 10.0,
    "traffic": "30GB - 1000GB/月，常规基础版 22 元 / 100GB",
    "lineType": "中转线路优化",
    "protocol": "三网均衡接入协议",
    "aiSupport": "日常 AI 检索与对话顺畅支持",
    "streaming": "解锁常用海外影视流媒体",
    "tagline": "强调中转线路优化和简单配置，三网接入取向较均衡，月付大流量",
    "audience": "不想折腾规则或客户端、只需要一套日常省心主力订阅的用户",
    "notFor": "需要极端底层协议自定义调整或复杂多层分流的极客",
    "plans": [
      {
        "name": "活动入门档",
        "price": "10 元/月",
        "traffic": "30GB/月"
      },
      {
        "name": "月猩月付小包",
        "price": "15 元/月",
        "traffic": "50GB/月"
      },
      {
        "name": "小狸基础",
        "price": "22 元/月",
        "traffic": "100GB/月"
      },
      {
        "name": "灵理标准",
        "price": "35 元/月",
        "traffic": "250GB/月"
      },
      {
        "name": "夜理强化",
        "price": "95 元/月",
        "traffic": "500GB/月"
      },
      {
        "name": "森狸年付小包",
        "price": "120 元/年",
        "traffic": "30GB/月"
      }
    ],
    "notes": "客户端兼容性、退款条件和流量重置日均需在结算页确认。"
  }
];
