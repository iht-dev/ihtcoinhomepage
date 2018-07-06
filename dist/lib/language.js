define(function(){
	var lag =  function(l){
		var lng = {
			"首页"     : ["首页","Home"],
			"项目介绍" : ["项目介绍","About"],
			"路线规划" : ["路线规划","Roadmap"],
			"团队介绍" : ["团队介绍","Team Members"],
			"关于我们" : ["联系我们","Contact"],
			"公告"   : ["公告：我们目前暂不接受持有中国、美国护照的用户参与Token Sale.","Announcement: Currently, we are not accepting users who hold passports of China and the United States to participate in Token Sale."],
			"eng"      : ["EN","中"],
			"IHT"     : ["IHT   云产币","IHT Real Estate Protocol"],
			"去中心化" : ["全球不动产区块链交易云平台"," Global Real Estate Blockchain Cloud Platform"],
			"去中心化副标题" : ["A new way of asset management","A new way of asset management"],
			"中"       : ["中","EN"],
			"天"       : ["天","D"],
			"小时"     : ["小时","H"],
			"分"       : ["分","M"],
			"秒"       : ["秒","S"],
			"发行时间" : ["正式发行时间","Issue Date"],
			"截止时间" : ["Pre-Sale","Pre-Sale"],
			"白皮书"   : ["白皮书","WHITEPAPER"],
			"募集与使用计划" : ["申请Pre-sale","REGISTER FOR PRE-SALE"],
			"募集计划" : ["募集与使用计划","Fund Raising and Application Plan"],
			"项目介绍" : ["项目介绍","Project Introduction"],
			"项目信息" : ["IHT 是 i-house.com 项下开发的专门用于拆分不动产的智能合约技术和分布式记账技术。它运用区块链本身去信任机制，防篡改，信息透明，共监管和可追溯性等优势。通过 IHT 智能 合约可将大额不动产拆分并分配给金融机构，以此，给予用户以小额资金投资并获益于不动 产的机会。并保障了投资的安全性和低风险性。","IHT integrates global real estate markets with the blockchain mechanism. Through joining blockchain and real estate, the real estate developer, financial institutions and their users can be connected and the transaction of real estate can be made a part of “digital credit society”, therefore constituting a pivotal supporting part of the economic development. All owners and investors will become beneficiaries of i-house.com real estate blockchain."],
			"ihou"     : ["进入i-house","Go to i-house"],
			"了解更多" : ["了解更多","MORE"],
			"产品示例" : ["产品示例","Products Exhibition"],
			"钱包图" : ["产品首页","Products Home Page"],
		    "业务流程"  : ["业务流程图","the Process"],
		    "承销平台" : ["承销资产","Underwrite"],
		    "产品购买" : ["产品购买","Subscribe"],
			"应用场景" : ['应用场景',"Application Scenarios"],
			"应用介绍" : ['IHT借鉴传统的房地产投资工具，比如REITs，资产持有者可以透过第三方前期的审核、风控、资产包收益预估，快速把房地产资产所有权及收益权交易。透过这一过程，可以体现以下优点。','IHT draws from traditional real estate investment tools, such as REITs, where the asset holders can audit, risk control, and prediction of asset package income by the third party, seamlessly trade the real estate asset ownership and income rights. Through this process, the following advantages can be represented.'],
			
			"动产化"   : ["使房地产投资小额化、动产化、透明化","Make real estate investment affordable, dynamic and transparent"],
			"便捷性"   : ["很高的交易便捷性","Transactions made easy and simple"],
			"透明性"   : ["信息透明","Information transparency"],
			"上市周期" : ["相对小的房屋产权也能碎片化，及缩短上市周期","IHT can fragmentize relatively small property rights, and shorten the listing cycle"],
			"路线规划" : ["路线规划","Roadmap"],
			"团队组建" : ["团队组建","Team Building"],
			"筹备"     : ["i-house.com开始筹备","i-house.com started preparation"],
			"商业模式" : ["i-house.com 不动产商业模式初步确立，定位为全球不动产区块链交易云平台","i-house.com property business model set preliminarily"],
			"区块链升级" : ["i-house.com 启动并开始区块链升级","i-house.com launched start to upgrade Blockchain"],
			"资产投资平台" : ["i-house.com 发起IHT，可连接资产达100亿美元，可接触用户超1000万","i-house.com go ICO, issued IHT coin, positioned as decentralized property or assets investment platfrom"],
			"版本测试"   : ["i-house.com 2.0版本β测试，资产购买由一对一模式变为一对多模式","i-house.com 2.0 version beta test, property buyers changed from buying 1-1 model to 1-N model"],
			"版本2正式启动" : ["i-house.com 2.0版本正式启动","i-house.com 2.0 version official launch"],
			"资产区块链化"  : ["i-house.com 资产范围涵盖美国、澳大利亚和欧洲","Target to tokenize US$100M+ assets, covered US, Australia & Europe"],
			"资产覆盖世界"  : ["i-house.com 资产房范围涵盖包括中国在内的世界前十位的国家","Target to tokenize US$1B+ assets, covered over 10 major cuntries in the world, including China"],
			"上市"     : ["价值超过500亿美元的资产将被区块链化，并计划上市","Target to tokenize US$10B+ assets, will consider to go IPO"],
			"世界地图" : ["查看全球资产地图","Global Asset Map"],
			"iht计划"  : ["IHT计划覆盖全球一线城市，连接数百亿美元的资产和数千万用户","IHT plans to cover the major cities Worldwide connecting billions of dollars in assets and millions of users"],
			"吴友平"   : ["吴友平","Ricky Ng"],
			"董事长"   : ["董事长兼创始人","Chairman and Founder"],
			"吴友平介绍" : ["全球第一个房产区块链云平台董事长兼创始人。2017年度最大的加密基金之一McafeeCC的联合创始人兼董事。大中华区最大的数字广告平台之一爱点击（iclick）联合创始人。创造年收入10亿的广告神话， 是百度和腾讯在中国和海外最大的合作伙伴。雅虎前任大中华区业务部高级商务总监，超过十年的网络营销及创业实际经验。电脑与金融工程学学士。","Chairman and founder of I-house.com &I-house.com Token(IHT), the first blockchain real estate cloud platform worldwide.Co-founder, Director of McafeeCC, one of the largest crypto fund founded in 2017.Co-founder of Iclick Interactive, one of the largest digital advertising platform in greater China area, created an advertising myth of 1 billion RMB per year, major partner with Baidu and Tencent in China and overseas.Former Senior Business Manager in Yahoo Asia – Yahoo! Search Marketing; Professional in digital marketing with more than ten years of practical experience in digital marketing and Entrepreneurship. Bachelor of Engineering, Ecommerce and Financial Engineering."],
			"金健博"   : ["金健博","Evan Kim"],
			"首席运营官"   : ["首席运营官","Chief Operating Officer"],
			"金健博介绍" : ["九年传统媒体行业从业经历，六年互联网行业从业经历，其中七年区域总经理岗位经验。原万达集团南昌万达文旅城市市场总监，负责南昌项目的市场推广及相关项目管理工作。 ","Nine years of experience in traditional media industry, six years of Internet industry experience, including seven years of experience on the position of regional general manager. Former City Director of marketing of Nanchang Wanda cultural tourism city of Wanda Group. Responsible for marketing and related project management of Nanchang project"],
			"陈莹"  : ["陈莹","Nana Chen"],
			"首席营销官"  : ["首席营销官","Chief Marketing Officer"],
			"陈莹介绍"  : ["14年营销领域经验。百度游戏高级营销总监, 客户包括完美世界、腾讯等等。爱点击高级媒体总监，负责处理所有的媒体工作，包括百度、腾讯、360、搜狗等","14 years’ experience of marketing area. Senior Marketing Director of Games in Baidu, clients include Perfect World, Tencent…etc. Senior Media Director in iClick, in charged of working with all medias includes Baidu, Tencent, 360, Sogou…etc."],
			"姚国材"   : ["姚国材","Eric Yao"],
			"Chief Blockchain Officer": ["Chief Blockchain Officer","Chief Blockchain Officer"],
			"姚国材介绍" : ["加州理工学院（本科），华盛顿大学硕士研究生，二十二年微软美国西雅图和中国工程院研发工作经验。曾任资深技术团队经理，掌管微软 office、office365、exchange、sharepoint和windows相关技术开发工作。 ","Master of University of Washington, Bachelor of California Institute of Technology. Twenty-two years of research and development experience in Microsoft in Seattle (U.S.A) and CAE (the Chinese Academy of Engineering). Senior technical team manager, chief Microsoft, office, office365, exchange, SharePoint and windows related technical development work."],
			"梁家健"  : ["梁家健","Kevin Leung"],
			"财务总监" : ["财务总监","Chief Financial Officer"],
			"梁家健介绍" : ["8年房地产业从业经验，Foresea 资产管理有限公司总经理。一家商业地产咨询公司，北京地铁集团有限公司购物中心总经理。 ","8 years of experience in Real Estate industry; GM of Foresea Asset Management Ltd, a commercial property consultancy company; GM of Shopping center in Beijing of MTR Corporation Ltd."],
			"徐敬程"  : ["徐敬程","Jingcheng Xu"],
			"ICO consultant " : ["区块链顾问","Blockchain Consultant"],
			"徐敬程介绍"  : ["数字资产基金Badwater Capital联合创始人，就职于位于硅谷和中国知名早期风险投资基金DFJ Dragon Fund,从事TMT领域的风险投资。2014年22岁创立知识技能分享平台火花科技, 获得IDG资本百万人民币风险投资,氪空间三期孵化毕业, 2016年收购退出。就读于美国Indiana University-Kelley School of Business和硅谷Draper University英雄学院。 ","Co-founder of digital asset fund Badwater Capital. Worked at DFJ Dragon Fund, located at Silicon Valley, which is a China's well-known early venture investment fund, and engaged in venture investment in the TMT field. 2014, just 22 years old, created spark technology, a knowledge and skills sharing platform, which acquired million yuan of venture capital investment from IDG, graduated from krypton space III stage, and exited after the progress of acquisition in 2016. Studied in Indiana University-Kelley School of Business in U.S. and Heroic Academy of Draper University in Silicon Valley."],
			"蒋宁" : ["蒋宁","Neil Jiang"],
			"高级产品经理" : ["高级产品经理","Senior Product Manager"],
			"蒋宁介绍"  : ["高级产品经理，独立负责艾拉丁“室友”、“jobin”等产品的全平台需求规划。曾负责短视频产品“秒拍”，完成app、后台及网页等全平台需求规则。独立负责二次元社团产品“超能部”的孵化到迭代，以及二次元视频产品“猫团动漫”的迭代。 ","Senior Product Manager Independently responsible for Aladdin’s entire platform demand planning of iroommate, jobin and other products. Been responsible for the short video products seconds shot, completed the whole platform requirement rules of the app, background and web pages and so on. Independently responsible for the incubation and iteration of “Clans”, a two-dimensional community product, and the iterative of Maotuan Anime, a two-dimensional video product."],
	   		"谢鹏" : ["谢鹏","Ares Xie"],
	   		"总技术负责人" : ["总技术负责人","Leader of Technical Department"],
	   		"谢鹏介绍" : ["8年后端开发经验，精通服务器集群、大数据、系统架构设计，曾任中国最大页游公司平台负责人，负责年投放7000w的广告系统，有数个开源项目。","8 years of back-end development experience, proficient in server cluster, big data, system architecture design, served as head of China's largest page tour company platform, responsible for the advertising system which delivery capacity is worth CNY 70 million; responsible for several open source projects."],
	   		"苏红"  : ["苏红","Catherine Su"],
	   		"董事长助理" : ["董事长秘书、法务","Chairman Secretary & Legal Specialist"],
	   		"苏红介绍"  : ["英国兰卡斯特大学法学博士，山东大学法学硕士，民商法学专业状元。精通中英文民法、商法、国际法、经济法、知识产权法等。在公司负责合同审查，投融资审查等法务相关内容。 ","Doctor of law, University of Lancaster; Master of civil and commercial law, Shandong University. Proficient in Civil Law, commercial law, international law, economic law, intellectual property law, etc. both in Chinese and English. Responsible for contract review, investment and financing review and other relevant legal content."],
	   		"专家顾问" : ["专家顾问","Advisory Board"],
	   		"YALE REISOLEIL介绍" : ["瑞首雷尔先生是四川弘健医疗投资管理合伙人及量化对冲基金经理。他共同管理 200 亿人民 币并购基金和一支 9 亿人民币跨境高科技风险投资基金。从 2013 年至今，瑞首雷尔先生带 领团队开发了多套独家量化交易系统。","A private equity fund manager and quantitative trader, Mr. ReiSoleil co-manages Sichuan Hongjian Medical Fund, a ¥20 billion acquisition fund, and a cross-border high technology venture capital fund. From 2013 to date, Mr. ReiSoleil has developed several proprietary quantitative trading systems."],
	   		"JOHN MCAFEE介绍" : ["他是网络安全和软件创新的先锋。1989年，McAfee先生离开洛克希德·马丁，并创立了全球第一家防病毒公司-McAfee Associates。2010年8月 McAfee Associates上市两年后，McAfee先生将他剩余股份出售给英特尔公司。 2016年，迈克菲先生作为自由党竞选美国总统。 ","He is the pioneer of network security and software innovation. In 1989, Mr. McAfee left Lockheed Martin and created the world's first anti-Virus Inc -McAfee Associates. Two years after the listing of McAfee Associates in August 2010, Mr. McAfee sold his remaining shares to Intel. In 2016, Mr. McAfee on behalf of the Liberal Party run for president of the United states. "],
	   		"刘计平" : ["刘计平","Jiping Liu"],
	   		"刘计平介绍" : ["百度创始团队，前华南区总经理，现任百度公司副总裁 1982—1986就读于山西大学信息管理系图书管理专业；1988年到达深圳，在惠普工作；2000——2005任百度深圳分公司经理；后历任百度公司副总裁。","Baidu's founding team; former general manager of Southern China District; vice president of Baidu Inc at present. 1982 – 1986, studied the library management in the Department of information management at Shanxi University. He arrived in Shenzhen in 1988 and worked at HP; 2000 - 2005, manager of Shenzhen branch of Baidu; after that he served as vice president of Baidu Inc. "],
	   		"Tim Draper介绍" : ["DFJ Co-founder, Tesla, Baidu A round investor 德丰杰(DFJ)投资基金的创办合伙人，德丰杰投资基金旗下共管理20亿美元的资本，共投资超过二百家创业公司。Tim Draper毕业于美国斯坦福大学(Stanford Univ.)电子工程系获学士学位，并于美国哈佛大学(Harvard Univ.)商学院获得工商管理硕士(MBA)学位。 ","DFJ Co-founder, Tesla, Baidu A round investor The founding partner of Draper Fisher Jurvetson (DFJ), manages $2 billion in total capital, and invests more than two hundred start-up companies. Tim Draper graduated from the Stanford University (Stanford Univ.), received a bachelor's degree in electrical engineering, and received an MBA degree (MBA) from the Harvard University (Harvard Univ.) business school. "],
	   		"FBG Capital介绍" : ["FBG 区块链投资基金","FBG block chain investment fund"],
	   		"RSK介绍" : ["RSK是基于比特币区块链的智能合约平台 RSK（rootstock）自提出概念时就是一项令人瞩目的开发平台。本质上，RSK是打造类似以太坊一样的去中心，图灵完备智能合约平台。 Coinfabrik 是RSK团队基于以太坊技术做的智能合约平台，将与Mcafee 平台共同合作向项目方提供技术支持，技术审核，认证等服务。 ","RSK is an smart contract platform based on bitcoin block chain, and RSK (rootstock) is a remarkable development platform when it comes up with concepts. In essence, RSK, like Ethereum, is a smart contract platform which is decentralized and meet the Turing complete. Coinfabrik is an smart contract platform created by RSK team,which is based on Ethereum technology. It will work with Mcafee platform to provide technical support, technical review, certification and other services to the project side. "],
	   		"PWC介绍" : ["由于ICO跟数字货币并非有完善的监管，为做到真实，合法，恰当的处理，我们将委託PWC作为我们的会计及法务顾问，由开始SPV的公司，法律咨询，审计等服务将由他们的专业团队提供。","Because the ICO and digital coin are not under perfect supervision, to be authentic, lawful, appropriate treatment, we will appoint PCW as our the accounting and legal adviser. Their professional team will provide the legal consulting, audit and other services from the starting of SPV."],
	   		"王岳华" : ["王岳华","Richard Wang"],
	   		"王岳华介绍" : ["王岳华，台湾交通大学的电信工程硕士, 博士候选人，具有20年半导体行业内经验，在2011年加入德丰杰龙脉中国基金团队。目前投资的方向有人工智能，区块链，物联网等项目。</br>王岳华先生在20年的从业经验里主要从事技术研发，以及市场营销等不同的工作岗位，主要专业是电磁波场论研究。在加入德丰杰龙脉中国基金之前，曾创立EDT Inc， 从事通讯产品的研发与销售，接着创立群众电子商务有限公司担任首席执行官职务，成功的打开了移动互联网及IPTV 渠道。王岳华先生在过去几年一直关注物联网，无线传感网络，智能节电等市场发展与应用。2010年王先生与硅谷创业伙伴创立了Olea Network 开发无线智能心电图传感器，利用都谱勒雷达的原理，接收人体心电的反射波，经由算法，可将移动中人群的心电图辩识出来，其应用广泛，如病房里的无线心电图监测系统。</br> 参与投资的项目有易宝支付，微纳科技，寰擎科技， 艾普柯， 无锡中感微，灵感家科技， 以及区块链公司如好扑科技， Vechain, Metaverse, RedPulse, Chinapex，Alphacat,以及DAF。目前王岳华感兴趣的领域有人工智能应用以及区块链技术。","Richard Wang is a partner of DFJ Dragon Fund-Draper Dragon and graduated from National Chiao Tung University, Taiwan with a Masters Degree in Telecommunications and Engineering. He is also a PhD. candidate.</br>DFJ Dragon Fund is part of a world-renowned venture capital group, Draper Venture Network (DVN), which has over 600 venture capital projects and invested in companied such as Baidu, Focus Media, Kongzhong Corp, Tesla, Twitter and other reputable technology companies. Investments in these companies have brought about considerable investment returns, especially with Baidu, which yielded over a hundred times in return. '\n'As a partner in Draper Dragon, Richard is in charge of investments in artificial intelligence, blockchain, Internet of Things, etc. He was also a part of and invested in YeePay, Nanosic, Innodealing, Epticore, ZGMICRO, IdeeBank and blockchain companies such as Haopu Information and Technology Co. Ltd, Vechain, Metaverse, RedPulse, Chinapex, Alphacat and DAF."],
	   		"蓝巨敏" : ["蓝巨敏","Adrian Lam"],
	   		"蓝巨敏介绍" : [" Workzspace.com的创始人，该公司在亚洲拥有1000多个服务性办公室和同事空间。Gerson Lehrman Group(GLG)的独立理事会成员。现在澳大利亚证券交易所（ASX）上市的Sportshero前首席运营官 ","Founder of Workzspace.com which has listings of 1000+ Serviced Offices & Coworking space in Asia. Independent council member of the Gerson Lehrman Group(GLG).  Former Chief Operating Officer of Sportshero now listed on Australian Stock Exchange (ASX)"],
	   		"王大伟" : ["王大伟","David Wang"],
	   		"王大伟介绍" : ["上海交通大学高级金融学院MBA，曾就职盛大，IBM，携程，具有多年互联网行业工作经验。2015年合伙创立国内最大的租约证券化平台魔方金服，2016年中旬创立信数链（datachain)，专注区块链技术创新和应用，曾带队获工信部举办首届全国区块链大赛二等奖。","MBA of Shanghai Jiao Tong University. Have work experiences in Shanda Group, IBM, Ctrip and years of work experiences in the Internet industry. In 2015, he founded the largest domestic rental securitization platform, Rubik's Cube Finance Service. In mid of 2016, founded datachain, which is focuses on blockchain technology innovation and application. The winner of second prize of the first national blockchain competition held by the Ministry of Industry and Commerc"],
	   		"曾慈雯" : ["曾慈雯","Ms. Tzu Wen Maryann Tseng"],
	   		"曾慈雯介绍" : ["Ms. Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017).","Ms. Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017)."],
	   		"团队背景"  : ["团队背景","Team Background"],
	   		"顾问背景"  : ["顾问背景","Advisory Board Background"],
	   		"新闻报道" : ["新闻报道","Press Releases"],
	   		"国内"   : ["国内","Domestic"],
	   		"国外"   : ["国外","Overseas"],
	   		"订阅我们" : ["订阅我们","Subscribe"],
	   		"订阅"  : ["订阅","Subscribe"],
	   		"最新资讯" : ["订阅我们获取IHT最新资讯","Subscribe News of IHT"],
	   		"联系我们" :["联系我们","Contact Us"],
	   		"电话"    : ["电话：","Tel:"],
	   		"公司邮箱" : ["公司邮箱：","E-mail:"]
 		};
		$('.lg').each(function(idex,ele){
			var k = $(ele).data("name");
			if(lng[k] !== undefined){
				$(ele).html(lng[k][l])
			}
		})
	};
	var load = function(l){
		var download = {
			"白皮书下载" : ["http://ihtcoin.com/home/pf/IHT共享房产区块链白皮书.pdf?v=1212","http://ihtcoin.com/home/pf/IHT Sharing Real Estate Blockchain Whitepaper.pdf?v=1212"],
			"name"   : ["IHT共享房产区块链白皮书","IHT Sharing Real Estate Blockchain Whitepaper"]
		};
		var txt = $('.loada').data("name");
		if(download[txt] !== undefined){
			$('.loada').attr("download",download["name"][l])
			$('.loada').attr("href",download[txt][l])
		}
	};
	var hf = function(l){
		var hfa = {
			"首页" : ["index.html?lang=ch","index.html?lang=eng"],
			"了解" : ["productFlow.html?lang=ch","productFlow.html?lang=eng"],
			"ihou" : ["http://i-house.com/_static/indexpc/","http://i-house.com/_static/indexpc/"]
		};
		$('.hf').each(function(idx,ele){
			var txt = $(ele).data("name");
				if(hfa[txt] !== undefined){
				$(ele).attr("href",hfa[txt][l])
			}
		})
	};
	var lbImg = function(l){
		var lngImg = {
			"钱包图" : ["image/introduce/money_chn.png?v=1202","image/introduce/money_eng.png?v=1202"],
			"承销平台" : ["image/introduce/chengxiaozichan_chn.png","image/introduce/chengxiaozichan_eng.png"],
			"产品购买" : ["image/introduce/chanpingoumai_chn.png","image/introduce/chanpingoumai_eng.png"],
			"业务流程" : ["image/introduce/yewu_chn.jpg","image/introduce/yewu_eng.jpg"],
			"第一张" : ["image/IHTImage/1.png","image/IHTImage/1en.png"],
			"第二张" : ["image/IHTImage/2.png","image/IHTImage/2en.png"],
			"第三张" : ["image/IHTImage/房产认购列表-chn.png","image/IHTImage/房产认购列表-eng.png"],
			"第四张"  : ["image/IHTImage/房产认购详情chn.png","image/IHTImage/房产认购详情-eng.png"],
			"第五张"  : ["image/IHTImage/房产交易列表-chn.png","image/IHTImage/房产交易列表-eng.png"],
			"第六张"  : ["image/IHTImage/房产交易详情chn.png","image/IHTImage/房产交易详情-eng.png"]
		};
		$('.imga').each(function(idx,ele){
			var k = $(ele).data('name');
			if(lngImg[k] !== undefined){
				$(ele).attr("src",lngImg[k][l])
			};
		});	
	}
	var fs = function(l){
		var fsa = {
			"发送" : ["点击发送邮件","Click for E-mail"]
		};
		$('.foot-fs').each(function(idx,ele){
			var txt = $(ele).data("name");
				if(fsa[txt] !== undefined){
				$(ele).attr("title",fsa[txt][l])
			}
		})
	};
	var Email = function(l){
		var Emaila = {
			"邮箱地址" : ["请输入邮箱","Email address"]
		};
		$('.lgEmail').each(function(idx,ele){
			var txt = $(ele).data("name");
				if(Emaila[txt] !== undefined){
				$(ele).attr("placeholder",Emaila[txt][l])
			}
		})
	}
	
	var ima = function(l){
		var imsa = {
			"路线规划图" : ["image/timeZh-chn.png?v=1212","image/timeZh-eng.png?v=1212"],
			"资产地图"  : ["image/mong-chn.png?v=1130","image/mong-eng.png?v=1130"]
		};
		$('.timeZh').each(function(idx,ele){
			var txt = $(ele).data("name");
				if(imsa[txt] !== undefined){
				$(ele).attr("src",imsa[txt][l])
			}
		})
	}
	
	return {
		lag : lag,
		load : load,
		lbImg : lbImg,
		hf   : hf,
		fs : fs,
		ima : ima,
		Email : Email
	}
})