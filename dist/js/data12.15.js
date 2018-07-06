(function (global) {
    "use strict";
    var lang,langnum,imgurl='dist/images/',ihtData = {
        "navhome"     : ["首页","HOME"],
        "navproject"  : ["项目介绍","PROJECT INTRODUCTION"],
        "navroadmap"  : ["路线规划","ROADMAP"],
        "navteam"     : ["团队介绍","TEAM MEMBERS"],
        "navfaq"      : ["FAQ","FAQ"],
        "language" : ["ENGLISH","中文"],
        "notice"   : ["公告：我们目前暂不接受持有中国、美国护照的用户参与Token Sale.","Announcement: Currently, we are not accepting users who hold passports of China and the United States to participate in Token Sale."],
        "iht"      : ["IHT   云产币","IHT Real Estate Protocol"],
        "globalreal" : ["全球不动产区块链交易云平台"," Global Real Estate Blockchain Cloud Platform"],
        "titleproject":["项目介绍","Project Introduction"],
        "titletext":   ["产品详情","IHT integrates global real estate markets with the blockchain mechanism. Through joining blockchain and real estate, the real estate developer, financial institutions and their users can be connected and the transaction of real estate can be made a part of “digital credit society”, therefore constituting a pivotal supporting part of the economic development. All owners and investors will become beneficiaries of i-house.com real estate blockchain."],
        "walletTitle":["IHT钱包","IHT wallet"],
        "wallet":["钱包主要分两个部分，现金、IHT<br/> a) 现金主要是通过充值、ATO后的资金回笼获得。 所有产权的交易和利润通过法币执行。 b)	IHT用于发起ATO和支付服务费。主要是通过用户通过认购得到以及从其他用户那里交易购买到。","<p>There are two main parts of the wallet: cash and IHT. </p><p>a)	Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat.</p><p> b)	IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users.</p>"],
        "platformTitle":["IHT平台","IHT platform"],
        "platform" : ["房产商通过在 IHT 平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后，可以获得发布 ATO 的权限。 房产商发布 ATO 时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相 关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。 其中确定份额后，房产商需要使用钱包中的 IHT 支付份额对应的拆分手续费，才能够正式发布 ATO。","<p>After getting the qualification certification(jurisdiction relevant licenses, property registration, proof of ownership, etc.) on the IHT platform, the property developers can obtain the right to issue ATO.</p><p>When the property developer issue ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate, address area, property right and other relevant conditions), the sale of real estate, whether share repurchase, in a certain period of time the subscription time and annual effective yield.</p>"],
        "howworksTitle":["工作方式","How it works?"],
        "howworks":["howworks","<p><b>How can financial institution underwrite ATO assets on the IHT platform?</b></p><p>After financial institution registered in the IHT platform, on the IHT underwriting platform, through screening and check the classification, financial institution could find a most suitable asset. An initialization fee will be paid with IHT dependent on ATO complexity and terms, after which shares of an ATO can be underwritten. After the completion of underwritten, financial institution can generate many sub-products from its original shares and release on its own platform and show it to users on the display portal of IHT.</p>"],
        "subscribeTitle":["subscribeTitle","How can to subscribe shares?"],
        "subscribe":["subscribe","<p>After the financial institution released sub-product on its own platform, users can subscribe it through the sale portal, or subscribe on IHT platform which will skip to the sales page of financial institution. The sub-product displayed on IHT platform will be recommended according to user's personal interest and investment ability.</p>"],
        "watch":["更多","WATCH DEMO"],
        "more":["更多","Learn more"],
        "applicationTitle":["Application Scenarios","<b>Application</b> Scenarios"],
        "application":["Application Scenarios","IHT draws from traditional real estate investment tools, such as REITs, where the asset holders can audit, risk control, and prediction of asset package income by the third party, seamlessly trade the real estate asset ownership and income rights. Through this process, the following advantages can be represented."],
        "commumityTitle":["COMMUNITY","COMMUNITY"],
        "commumity":["Make real estate investment affordable, dynamic and transparent","Make real estate investment affordable, dynamic and transparent"],
        "transactionTitle":["TRANSACTION","TRANSACTION"],
        "transaction":["Transactions made easy and simple","Transactions made easy and simple"],
        "infomationTitle":["INFORMATION","INFORMATION"],
        "infomation":["Information transparency","Information transparency"],
        "mapTitle":["","<b>Roadmap</b>"],
        "maptxt":["","IHT plans to cover the major cities Worldwide connecting billions of dollars in assets and millions of users"],
        "teamTitle":["","<b>Team</b> Members"],
        "advisoryTitle":["1","<b>Advisory</b> Board"],
        "teambackgroundTitle":["1","<b>Team</b> Background"],
        "advisorybackgroundTitle":["","<b>advisory</b> Background"],
        "pressTitle":["新闻报导","<b>Press</b> Release"],
        'readmore':['更多','Read more'],
        'aboutTitle':['关于我们','ABOUT US'],
        'about':['关于我们','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p>ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>'],
        'newsLetterTitle':['','NEWSLETTER'],
        'newsTips':['','Get updates about new tours, travel tips, photo guides and more !'],
        'sendBtn':['发送','SEND'],
        'join':['登陆','Join The Community'],
        'whiteTitle':['白皮书','WHITE PAPER'],
        'regTitle':['申请Pre-sale','REGISTER FOR PRE-SALE'],
        'issue':['Issue','Issue Date Q1 2018   |   Pre-Sale 15 Dec - 15 Jan'],
        'subscribeBtn':['subscribe','SUBSCRIBE'],
        'projectTitle':['projectTitle','<b>Project</b> Preview'],
        'regTips':['regTips','If you want to invest in IHT, please kindly fill in the form of KYC on-line, download the Investment Contract, sign your name and send back to the IHT official e-mail: <a href="mailto:investment@ihtcoin.com">investment@ihtcoin.com</a>. Thank you for your cooperation.'],
        //  "钱包介绍app" :  ["钱包主要分两个部分，现金、IHT<br/> a) 现金主要是通过充值、ATO后的资金回笼获得。 所有产权的交易和利润通过法币执行。 b)	IHT用于发起ATO和支付服务费。主要是通过用户通过认购得到以及从其他用户那里交易购买到。","There are two main parts of the wallet: cash and IHT. <br />a)	Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat. b)	IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users."],
        // "认购简介" : ["房产商通过在 IHT 平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后，可以获得发布 ATO 的权限。 房产商发布 ATO 时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相 关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。 其中确定份额后，房产商需要使用钱包中的 IHT 支付份额对应的拆分手续费，才能够正式发布 ATO。","After getting the qualification certification(jurisdiction relevant licenses, property registration, proof of ownership, etc.) on the IHT platform, the property developers can obtain the right to issue ATO.<br/> When the property developer issue ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate, address area, property right and other relevant conditions), the sale of real estate, whether share repurchase, in a certain period of time the subscription time and annual effective yield.<br/> After determining the share, before they can officially publish the ATO，the property developers need to use the IHT to pay the corresponding segmentation fee.<br />"],





        //old
        //"about" : ["项目介绍","About"],
        "contact" : ["联系我们","Contact"],
        "去中心化副标题" : ["-- A new way of asset management","-- A new way of asset management"],
        "白皮书"   : ["白皮书","WHITEPAPER"],
        "KYC"    : ["KYC","KYC"],
        "投资合同" : ["投资合同","INVESTMENT CONTRACT"],
        "投资IHT"  :["如果您有意向投资IHT，请在线填写KYC并下载投资合同。填写、签名并发送回IHT官方邮箱investment@ihtcoin.com，感谢您的支持与合作。","If you want to invest in IHT, please kindly fill in the form of KYC on-line, download the Investment Contract, sign your name and send back to the IHT official e-mail：investment@ihtcoin.com. Thank you for your cooperation."],
        "项目介绍" : ["项目介绍","Project Introduction"],
        "项目介绍中文" : [" i-house.com项目自筹备起就定位为全球不动产区块链交易云平台。I-house.com着眼于通过区块链机制整合全球不动产交易市场。通过将区块链机制与不动产挂钩，连接房产开发商与金融机构及其用户，将不动产交易纳入到全球“数字化信用社会”布局中，并发挥不动产交易对经济发展的重要支撑作用。使所有不动产所有人和投资人都受益于i-house.com不动产区块链机制。<br /><br />IHT 是 i-house.com 项下开发的专门用于拆分不动产的智能合约技术和分布式记账技术。它 运用区块链本身去信任机制，防篡改，信息透明，共监管和可追溯性等优势。通过 IHT 智能 合约可将大额不动产拆分并分配给金融机构，以此，给予用户以小额资金投资并获益于不动 产的机会。并保障了投资的安全性和低风险性。<br /><br />IHT1.0服务定位于PaaS，即Protocol-as-a-Service(协议即服务)，给资产方ATO提供发布平台服务，给资产方和金融机构提供一个互相发现和交易的平台。同时IHT也会持续运营发展，向2.0BaaS迈进，即Blockchain as a Service(区块链即服务),为金融机构构建移动信息化应用的资产拆分及管理平台。 最终形态3.0将进化为基于实体资产的金融化交易所，提高实体资产的流通性。<br /><br />从目前商业开展的形势来看，房产端和金融机构端都表现出很大的积极性。越来越多的房产商和金融机构表示愿意积极参与到i-house.com项目中来，并期待i-house.com的区块链项目IHT尽快上线。<br /><br />在IHT未来发展蓝图中，除了全球不动产以外，所有有交换价值的资产也将会被纳入IHT区块链化的范围。例如，飞机租赁，艺术品，古董，有价债券等等。<br />","i-house.com has been set up as global real estate blockchain  cloud exchange. Its mission is to integrate global real estate market. Through joining blockchain  and real estate, the real estate developer, financial institutions and their users can be connected and the transaction of real estate can be made a part of “digital credit society”, therefore constituting a pivotal part of the economic development. All owners and investors will become beneficiaries of i-house.com real estate blockchain . <br /><br />IHT is a smart contract technology and distributed accounting technology developed for the purpose of splitting real estate under i-house.com, which utilizes blockchain’s intrinsic advantages such as distrust mechanism, anti-tamper, co-supervision and traceability. Through IHT’s smart contract, large real estate can be split and distributed to financial institutions. In this way, the user will get the opportunity to invest in small amounts of money and benefit from real estate, and it ensures the security and low risk of investment.<br /><br />IHT1.0 service is posited as PaaS, Protocol-as-a-Service, which offers a standardized initialization and publication process for ATO, acting as a neutral agent for asset owners and investors so that both parties can search and makes deals at their leisure. Meanwhile, IHT will continue progressing to 2.0BaaS, Blockchain as a Service, and acts as an asset segmentation and management platform for the construction of mobile information applications for financial institutions. Finally, IHT3.0 will evolve into a financial exchange based on physical assets to improve the liquidity of physical assets. <br /><br />From the current situation of commercial development, the real estate developers end and financial institutions have shown great enthusiasm. More and more real estate developers and financial institutions are willing to actively participate in the i-house.com project, and look forward to the i-house.com blockchain  project IHT on-line as soon as possible. <br /><br />In a greater sense of IHT future blueprint, aside from real estate, all assets that have trading value will be incorporated into IHT blockchain  platform such as aircraft rental, antiques and bonds."],
        "募集计划" : ["募集与使用计划","Fund Raising and Application Plan"],
        "填写投资意向" : ["填写投资意向","Fill in the investment intention"],
        "ihou"     : ["进入i-house","Go to i-house"],
        "使用流程" : ["使用流程","Product Form & Design Principle"],
        "钱包组成" :["一、如何使用IHT钱包","1.Usage of the IHT wallet"],
        "钱包介绍" : ["钱包主要分两个部分，现金、IHT<br/> a) 现金主要是通过充值、ATO后的资金回笼获得。 所有产权的交易和利润通过法币执行。 b)	IHT用于发起ATO和支付服务费。主要是通过用户通过认购得到以及从其他用户那里交易购买到。<br /><br />* 图中开发商、房产及金融机构仅为示例展示，不代表已经与 i-house.com 确立合作关系。<br />","There are two main parts of the wallet: cash and IHT. <br />a)	Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat. b)	IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users.<br />"],
        "钱包介绍app" :  ["钱包主要分两个部分，现金、IHT<br/> a) 现金主要是通过充值、ATO后的资金回笼获得。 所有产权的交易和利润通过法币执行。 b)	IHT用于发起ATO和支付服务费。主要是通过用户通过认购得到以及从其他用户那里交易购买到。","There are two main parts of the wallet: cash and IHT. <br />a)	Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat. b)	IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users."],
        "以上图" : ["* 图中开发商、房产及金融机构仅为示例展示，不代表已经与 i-house.com 确立合作关系。","*The above developers，real estate and financial institutions are only for displaying, it does not represent the cooperation with i-house.com has been established."],
        "房产认购" : ["二、房产商在IHT平台发起ATO（房产产权认购）","2. How could property developers launch ATO on IHT platform"],
        "找到平台" : ["三、金融机构如何在 IHT 平台上承销 ATO 的资产","3. How can financial institution underwrite ATO assets on the IHT platform?"],
        "投资人平台" : ["金融机构在 IHT 平台上注册后，在 IHT 的承销平台，通过筛选和查看分类，找到自己最合适的资产，通过支付一定量的IHT作为发起费,可承销某个ATO的所有份额中的部分份额。发起费的具体IHT数量将根据ATO的具体情况和条件决定。在确认承销完成后，金融机构可以将其承销的份额打包成数个子产品，在其自有平台上发布， 并在 IHT 平台上有展示入口可供各类用户查看。<br /><br />* 图中开发商、房产及金融机构仅为示例展示，不代表已经与 i-house.com 确立合作关系。<br />","After financial institution registered in the IHT platform, on the IHT underwriting platform, through screening and check the classification, financial institution could find a most suitable asset. An initialization fee will be paid with IHT dependent on ATO complexity and terms, after which shares of an ATO can be underwritten. After the completion of underwritten, financial institution can generate many sub-products from its original shares and release on its own platform and show it to users on the display portal of IHT.<br /><br />*The above developers，real estate and financial institutions are only for displaying, it does not represent the cooperation with i-house.com has been established.<br />"],
        "投资人平台app"    : ["金融机构在 IHT 平台上注册后，在 IHT 的承销平台，通过筛选和查看分类，找到自己最合适 的资产，通过支付 1 个 IHT, 可承销某个 ATO 的所有份额中的部分份额。 在确认承销完成后，金融机构可以将其承销的份额打包成数个子产品，在其自有平台上发布， 并在 IHT 平台上有展示入口可供各类用户查看。","After financial institution registered in the IHT platform, on the IHT underwriting platform, through screening and check the classification, financial institution could find a most suit- able asset. Then, after paying 1 IHT, some shares of an ATO can be underwritten. After the completion of underwritten, financial institution can generate many sub-products from its original shares and release on its own platform and show it to users on the display portal of IHT."],
        "投资人认购" : ["四、投资人在IHT平台上认购及交易房产产权","4.How do investors subscribe and trade property rights on the IHT platform"],
        "投资人认购介绍" : ["四、投资人如何购买 ATO 的资产","4. How can investors subscribe shares of ATO?"],
        "投资人金融机构" : ["在金融机构在其自有平台发布子产品后，投资人用户可以通过金融机构的销售入口，进行购买;或者通过 IHT 平台，根据用户的个人兴趣和投资能力推荐相应的产品，跳转到金融机构的销售页面进行购买。","After the financial institution released sub-product on its own platform, users can subscribe it through the sale portal, or subscribe on IHT platform which will skip to the sales page of financial institution. The sub-product displayed on IHT platform will be recommended according to user's personal interest and investment ability."],
        "投资人的收益"    : ["五、通过 IHT 平台的 ATO，投资人可以获取多项收益","5. Through the ATO and trading on IHT platform, users can obtain a number of profits"],
        "收益详解"    : ["a) 投资人可以通过金融机构自有平台上的交易，获取到因房产产权溢价所产生的收益; <br />b) 投资人通过交易钱包中 IHT, 获取因 IHT 的溢价所产生的收益; <br />c) 房产商在开启 ATO 时，会明确房产对应每年的年化收益，用户以法币的方式获得购买份额所对应的年化收益。具体的年化收益或利率的数额将根据每个项目的不同而确定。<br /><br />* 图中开发商、房产及金融机构仅为示例展示，不代表已经与 i-house.com 确立合作关系。<br />","(a) Through transactions on the financial institution’s platform, users can obtain profits from the real estate premium; (b) users can gain profits from the IHT premium by trading IHT in their wallets; (c) When real estate developer launches an ATO，the developer will confirm an annual yield of the corresponding property. The user will then receive the annualized profits of their purchased share in fiat. The annual yield or interest rate will vary on depending on the project.<br /><br />*The above developers，real estate and financial institutions are only for displaying, it does not represent the cooperation with i-house.com has been established.<br />"],
        "收益详解app" : ["a) 投资人可以通过金融机构自有平台上的交易，获取到因房产产权溢价所产生的收益; <br />b) 投资人通过交易钱包中 IHT, 获取因 IHT 的溢价所产生的收益; <br />c) 房产商在开启 ATO 时，会明确房产对应每年的年化收益，用户以法币的方式获得购买份额所对应的年化收益。具体的年化收益或利率的数额将根据每个项目的不同而确定。<br />","(a) Through transactions on the financial institution’s platform, users can obtain profits from the real estate premium;<br />(b) users can gain profits from the IHT premium by trading IHT in their wallets;<br />(c) When real estate developer launches an ATO，the developer will confirm an annual yield of the corresponding property. The user will then receive the annualized profits of their purchased share in fiat. The annual yield or interest rate will vary on depending on the project.<br />"],
        "业务流程图"  : ["业务流程","The specific business process diagram is as follows"],
        "操作示例"   : ["操作示例","Examples of specific forms of operation are as follows"],
        "操作步骤"  : ["角色为 : 资产方 A、金融机构 B、C、D、个人投资人 E、F、G 资产方 A 有 1 处房产，价值 1000w，通过 IHT 平台的 ATO，将该房产拆分成了 100 份，每 份价值为 10w，并向 IHT 平台支付了对应需要的 IHT 币。设定了 1 年后回购，并且年收益 为 10%。 金融机构在 IHT 平台上看到 ATO 项目后，B 承销了其中的 50 份，C 和 D 分别承销了其中的 25 份。 B 在承销了 50 份之后，将其中的 25 份打包称为一个金融产品，叫 B 平台产品 1 号，总金 额为 250w 的金融产品，并在其自有平台上，售卖给会员 E、F、G。","Roles: asset owner A financial institution B, C, D individual users, E, F, G Asset owner A has 1 properties. The value is 1000W. Through releasing ATO on the IHT platform, the property is split into 100 shares and each value is 10W. The required IHT coins be paid to the IHT platform. Asset owner A sets up the repurchase period is 1 years and the annual return is 10%. After the ATO is released on the IHT platform, financial institution B cam underwrite 50 shares of it, and C and D can underwrite 25 shares of it respectively. After B underwriting 50 shares, it can package 25 shares and generate a new financial product. This new financial product can be named #1 and its total value is 250w. it can be sold to member E, F, G, on its own platform."],
        "联系我们" :["联系我们","Contact Us"],
        "电话"    : ["电话：","Tel:"],
        "公司邮箱" : ["公司邮箱：","E-mail:"]
    },
    teamData=[{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    }],
        advisoryData=[{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['中文','Ricky Ng'],
        'intro':['中文','Chairman & Founder'],
        'layertxt':['中文','layer txt'],
        'link':['link','link']
    }],pressData=[{
        'img':['p_yahoo.png'],
        'date':['日期','December 4, 2017'],
        'title':['标题','i-house.com and McAfee Coin Launch Presale of IHT Token for Real Estate Smart Contract Development'],
        'intro':['介绍','According to the latest news, i-house.com has formed partnership with Mr. John McAfee, to build a blockchain cloud platform for global real estate industry. McAfee Coin AG (MCF) has announced a strategic partnership with i-house.com to launch a ICO presale ….']
    },{
        'img':['p_reuters.png'],
        'date':['日期','December 4, 2017'],
        'title':['标题','i-house.com and McAfee Coin Launch Presale of IHT Token for Real Estate Smart Contract Development'],
        'intro':['介绍','According to the latest news, i-house.com has formed partnership with Mr. John McAfee, According to the latest news, i-house.com has formed partnership with Mr. John McAfee, to build a blockchain cloud platform for global real estate industry. McAfee Coin AG (MCF) has announced a strategic partnership with i-house.com to launch a ICO presale ….']
    },{
        'img':['p_nasdaq.png'],
        'date':['日期','December 4, 2017'],
        'title':['标题','i-house.com and McAfee Coin Launch Presale of IHT Token for Real Estate Smart Contract Development'],
        'intro':['介绍','According to the latest news, i-house.com has formed partnership with Mr. John McAfee, to build a blockchain cloud platform for global real estate industry. McAfee Coin AG (MCF) has announced a strategic partnership with i-house.com to launch a ICO presale ….']
    }],
    faqData=[{
        'q': ['中文标题','What is the IHT?'],
        'a':['答案','IHT is a smart contract technology and distributed accounting technology developed for the purpose of splitting real estate under i-house.com, which utilizes blockchain’s intrinsic advantages such as trustless mechanism, anti-tamper, co-supervision and traceability.']
    },{
        'q': ['中文标题','Why do asset owners and financial institutions need to use I-house.com?'],
        'a':['答案','answer']
    },{
        'q': ['中文标题','How many advantages IHT has?'],
        'a':['答案','answer']
    },{
        'q': ['中文标题','What are the benefits of i-house.com and IHT for regular users?'],
        'a':['答案','answer']
    },{
        'q': ['中文标题','How do ordinary users use it?'],
        'a':['答案','answer']
    },{
        'q': ['中文标题','How to accelerate the use of asset owners and financial institutions?'],
        'a':['答案','answer']
    },{
        'q': ['中文标题','How leaders of real estate and financial industries can contribute to this community?'],
        'a':['答案','answer']
    }],
    inputLabel={
        'inputName':['姓名','name'],
        'inputEmail':['电子邮件','E-mail'],
        'inputReceive':['输入','Enter email to receive IHT news']

    }
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }
    lang=getQueryString('lang')?getQueryString('lang'):'eng';
    langnum=(lang=='ch')?0:1;

    $('.iht').each(function (idx, ele) {
        var ks=$(ele).data('main');
        if(ihtData[ks] !==undefined){
            $(ele).html(ihtData[ks][langnum]);
        }
    })
    $('.ihtinput').each(function (idx, ele) {
        var ks=$(ele).data('main');
        if(inputLabel[ks] !==undefined){
            $(ele).attr('placeholder',inputLabel[ks][langnum]);
        }
    })
   function addTeam(data) {
       var teamStr='';
       $.each(data,function (k, v) {
           if(k%4==3){
               teamStr+='<li class="mr0">'
           }
           else{
               teamStr+='<li>';
           }
           teamStr+='<p class="teamimg"><img src="'+imgurl+v['img'][langnum]+'"/> </p><div class="teamtxt">' +'<div>'+v['name'][langnum]+'</div><p>'+v['intro'][langnum]+'</p></div>' +
               '<div class="layer">'+v['layertxt'][langnum]+'</div> </li>'
       })
       return teamStr;
   }
   function pressFunc(data) {
       var tempStr='';
       $.each(data,function(k,v){
           tempStr+='<dl><dt><img src="'+imgurl+v['img']+'"/></dt><dd><h6 class="presstitle">'+v['date'][langnum]+'</h6><div class="presstxt"><b>'+v['title'][langnum]+'</b><p>'+v['intro'][langnum]+'</p>' +
               '<a href="javascript::">'+ihtData['readmore'][langnum]+'</a> </div></dd></dl>'
       })
       return tempStr;
   }
   function faqFunc(data) {
        var tempStr='';
        $.each(data,function (k, v) {
            tempStr+='<dl><dt><a href="javascript:;" class="hide"><span></span></a> '+v['q'][langnum]+'</dt><dd>'+v['a'][langnum]+'</dd></dl>'
            console.log(v['q'][langnum])
            console.log(v.a)
        })
       return tempStr;
   }
    $('.js-teamlist').html(addTeam(teamData));
    $('.js-advisorylist').html(addTeam(advisoryData));
    $('.js-presslist').html(pressFunc(pressData));
    $('.js-faqlist').html(faqFunc(faqData));
    faqFunc(faqData);
})(window);