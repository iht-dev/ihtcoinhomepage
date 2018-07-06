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
        "teamTitle":["团队介绍","<b>Team</b> Members"],
        "advisoryTitle":["专家顾问","<b>Advisory</b> Board"],
        "teambackgroundTitle":["团队背景","<b>Team</b> Background"],
        "advisorybackgroundTitle":["顾问背景","<b>advisory</b> Background"],
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
        'paperTitle':['paperTitle中文','Whitepaper'],
        'kycTitle':['kyctitle','KYC'],
        'contractTitle':['kyctitle','Investement Contract'],
        'download':['xiazai','Download'],
        'appBtn':['application;','Application From'],
        'fundTitle':['funtTitle;','Fund Raising and Application Plan'],
        'fillinBtn':['fillinBtn;','Fill In Investment Interest'],
        'mechanismTitle':['tokenTitle;','IHT Token Mechanism'],
        'mechanism':['token;','<p>IHT is issued by token sale with an upper limited set, accounting for 35% of the total tokens generated. For more information, see Chapter below. </p><p>IHT total supply will be set as: 100,000,000 IHT.<br/>35% tokens will be used in token sale public selling. </p><p><b>1ETH = 350IHT.  </b></p><p>The tokens which aren’t sell out in in token sale will be automatically destroyed.</p>'],
        'saleTitle':['saleTitle;','IHT Token Sale Structure'],
        'sale':['sale;','<p><b>HardCap: 100,000ETH </b><br/><b>Private Seed: 4280ETH</b><br/>50% Bonus for Private Seed Investors<br/>*50% locked up for 3 months*</p><p><b>Private Pre-sale #1 : 14280ETH</b><br/>5% Bonus for VIP institutions & individuals;<br/>*50% locked up for 6 months*</p><p><b>Private Pre-sale #2 : 14280ETH</b><br/>25%  Bonus Early entities;<br/> *50% locked up for 6 months*<br/> *50% locked up for 3 months*</p><p><b>Public Pre-sale: 14280ETH</b><br/>10% bonus for public 3k individual cap; <br/>*No locked up* </p><p><b>Crowd-sale: 52880ETH</b><br/>no bonus, individual cap is 6k<br/>*No lock up* </p>'],
        'suppyTitle':['suppyTitle','IHT Supply Distribution'],
        'suppy':['suppyTitle','<p><b>Tokens issued will be distributed as follows:</b></p><ul><li>35% will be put into circulation via the token sale</li><li>40% reserved tokens are representatively hold by the foundation</li><li>20% for the sustained development of the foundation</li><li>20% for the ecological deployment</li><li>15% owned by all employees of the foundation</li><li>10% owned by the early Investors</li></ul><p><b>Additional Terms:</b></p><ul><li>30% of the foundation\'s reserve will be locked up for 24 months.</li><li>the IHT Token held by the early investors will be locked up for 6 months.</li><li>employee tokens will be subject to a 6 months cliff and a tri-monthly vesting over a period of 24 months starting from token sale close.</li></ul>'],
        'capitalTitle':['capitalTitle','Capital usage budget'],
        'capital':['capital','<p>10% - legal fees on token sale raising.</p><p>10% - domestic and international publicity & Ecological Construction</p><p>15% - existing R&D team\’s operation</p><p>15% - recruiting new R&D operators</p><p>50%- prepaying the tokenized assets to speed up assets acquisition</p>'],
        'complianceTitle':['complianceTitle','Compliance'],
        'compliance':['compliance','IHT Token refers to Litecoin and other well-known encryption of digital coin, and a nonprofit foundation named Public Company Limited by Guarantee in Singapore. The main task of the foundation is to publicly, fairly and transparently operate the state of IHT, and support the development team.The register place will be chosen upon the legal advice.'],
        'TokenRiskTitle':['TokenRiskTitle','Token Risk'],
        'TokenRisk':['TokenRisk','IHToken has no intention of being an investment platform. IHT is the digital currency that drives users to use the products in the platform.'],
        'projectRiskTitle':['projectRiskTitle','Project Risk'],
        'projectRisk':['projectRisk','The same as any project, the development and execution of our platform may have the risk of delay or even failure. Although the core team has a good record in research and development and business management experience, this is not a guarantee for success. The team will strive to implement milestones outlined in the project roadmap and will publish our progress and challenges as transparently as possible.'],
        'digitalCoinRiskTitle':['digitalCoinRiskTitle','Digital Coin Risk'],
        'digitalCoinRisk':['digitalCoinRisk','Compared with other assets (such as stocks, bonds, and even real estate), the volatility of digital coin is dramatic. Please do not buy IHT tokens over the amount you can accept. The best thing to do is to diversify your portfolio and make digital coin a reasonable part of your assets. This does not constitute an investment advice, purely common sense. Like any blockchain, please take the time to understand our projects and visions. Our goal is to finance from like-minded people who want to actively participate in our open research platform.'],
        'regulatoryRiskTitle':['regulatoryRiskTitle','Regulatory risk'],
        'regulatoryRisk':['regulatoryRisk','Digital currency is seen as a grey area of regulation in china. The regulatory environment for blockchain and digital coin is still at an early stage of development. We will do our utmost to comply with the development of all legal and regulatory policies, but we cannot foresee how the regulations will affect our project and platform development.<br/>In China, IHT will strictly comply with relevant laws and regulations, including, but not limited to, real estate, finance, securities and other related laws and regulations. In the presence or occurrence of relevant registration, approval, filing and other procedures, IHT will strictly follow the procedures to perform the relevant procedures. At the same time, IHT will strictly comply with the current laws and regulations relating to promoters’ restrictions and foreign exchange control.<br/>acIn any area where IHT carries out the relevant blockchain business, IHT will comply with local laws and regulations, including, but not limited to, registration, approval, filing and other related procedures.'],
        'registerTitle':['registerTitle','Register Interest'],
        'registerTips':['registerTitle','Please tell us your Pre-sale investment intention and <br/>get more information of IHT ICO'],
        'cancle':['cancle','CANCLE'],
        'send':['send','SEND'],
        
        
        
        
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
        'name':['吴友平','Ricky Ng'],
        'intro':['董事长兼创始人','Chairman and Founder'],
        'layertxt':["全球第一个房产区块链云平台董事长兼创始人。2017年度最大的加密基金之一McafeeCC的联合创始人兼董事。大中华区最大的数字广告平台之一爱点击（iclick）联合创始人。创造年收入10亿的广告神话， 是百度和腾讯在中国和海外最大的合作伙伴。雅虎前任大中华区业务部高级商务总监，超过十年的网络营销及创业实际经验。电脑与金融工程学学士。","Chairman and founder of I-house.com &I-house.com Token(IHT), the first blockchain real estate cloud platform worldwide.Co-founder, Director of McafeeCC, one of the largest crypto fund founded in 2017.Co-founder of Iclick Interactive, one of the largest digital advertising platform in greater China area, created an advertising myth of 1 billion RMB per year, major partner with Baidu and Tencent in China and overseas.Former Senior Business Manager in Yahoo Asia – Yahoo! Search Marketing; Professional in digital marketing with more than ten years of practical experience in digital marketing and Entrepreneurship. Bachelor of Engineering, Ecommerce and Financial Engineering."],
        'link':['http://www.linkedin.com/in/rickyng1/','http://www.linkedin.com/in/rickyng1/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["金健博","Evan Kim"],
        'intro':["首席运营官","Chief Operating Officer"],
		'layertxt':["九年传统媒体行业从业经历，六年互联网行业从业经历，其中七年区域总经理岗位经验。原万达集团南昌万达文旅城市市场总监，负责南昌项目的市场推广及相关项目管理工作。 ","Nine years of experience in traditional media industry, six years of Internet industry experience, including seven years of experience on the position of regional general manager. Former City Director of marketing of Nanchang Wanda cultural tourism city of Wanda Group. Responsible for marketing and related project management of Nanchang project"],
        'link':['https://www.linkedin.com/in/evan-kim-25b84b154/','https://www.linkedin.com/in/evan-kim-25b84b154/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["陈莹","Nana Chen"],
        'intro':["首席营销官","Chief Marketing Officer"],
        'layertxt':["14年营销领域经验。百度游戏高级营销总监, 客户包括完美世界、腾讯等等。爱点击高级媒体总监，负责处理所有的媒体工作，包括百度、腾讯、360、搜狗等","14 years’ experience of marketing area. Senior Marketing Director of Games in Baidu, clients include Perfect World, Tencent…etc. Senior Media Director in iClick, in charged of working with all medias includes Baidu, Tencent, 360, Sogou…etc."],
        'link':['https://www.linkedin.com/in/%E8%8E%B9-%E9%99%88-139733154/','https://www.linkedin.com/in/%E8%8E%B9-%E9%99%88-139733154/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["姚国材","Eric Yao"],
        'intro':["Chief Blockchain Officer","Chief Blockchain Officer"],
        'layertxt':["加州理工学院（本科），华盛顿大学硕士研究生，二十二年微软美国西雅图和中国工程院研发工作经验。曾任资深技术团队经理，掌管微软 office、office365、exchange、sharepoint和windows相关技术开发工作。 ","Master of University of Washington, Bachelor of California Institute of Technology. Twenty-two years of research and development experience in Microsoft in Seattle (U.S.A) and CAE (the Chinese Academy of Engineering). Senior technical team manager, chief Microsoft, office, office365, exchange, SharePoint and windows related technical development work."],
        'link':['https://www.linkedin.com/in/ericgcdao/','https://www.linkedin.com/in/ericgcdao/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["梁家健","Kevin Leung"],
        'intro':["财务总监","Chief Financial Officer"],
        'layertxt':["8年房地产业从业经验，Foresea 资产管理有限公司总经理。一家商业地产咨询公司，北京地铁集团有限公司购物中心总经理。 ","8 years of experience in Real Estate industry; GM of Foresea Asset Management Ltd, a commercial property consultancy company; GM of Shopping center in Beijing of MTR Corporation Ltd."],
        'link':['http://www.linkedin.com/in/kevin-leung-0157081a/','http://www.linkedin.com/in/kevin-leung-0157081a/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["徐敬程","Jingcheng Xu"],
        'intro':["区块链顾问","Blockchain Consultant"],
        'layertxt':["数字资产基金Badwater Capital联合创始人，就职于位于硅谷和中国知名早期风险投资基金DFJ Dragon Fund,从事TMT领域的风险投资。2014年22岁创立知识技能分享平台火花科技, 获得IDG资本百万人民币风险投资,氪空间三期孵化毕业, 2016年收购退出。就读于美国Indiana University-Kelley School of Business和硅谷Draper University英雄学院。 ","Co-founder of digital asset fund Badwater Capital. Worked at DFJ Dragon Fund, located at Silicon Valley, which is a China's well-known early venture investment fund, and engaged in venture investment in the TMT field. 2014, just 22 years old, created spark technology, a knowledge and skills sharing platform, which acquired million yuan of venture capital investment from IDG, graduated from krypton space III stage, and exited after the progress of acquisition in 2016. Studied in Indiana University-Kelley School of Business in U.S. and Heroic Academy of Draper University in Silicon Valley."],
        'link':['https://www.linkedin.com/in/jc-xu-88940240/','https://www.linkedin.com/in/jc-xu-88940240/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["蒋宁","Neil Jiang"],
        'intro':["高级产品经理","Senior Product Manager"],
        'layertxt':	["高级产品经理，独立负责艾拉丁“室友”、“jobin”等产品的全平台需求规划。曾负责短视频产品“秒拍”，完成app、后台及网页等全平台需求规则。独立负责二次元社团产品“超能部”的孵化到迭代，以及二次元视频产品“猫团动漫”的迭代。 ","Senior Product Manager Independently responsible for Aladdin’s entire platform demand planning of iroommate, jobin and other products. Been responsible for the short video products seconds shot, completed the whole platform requirement rules of the app, background and web pages and so on. Independently responsible for the incubation and iteration of “Clans”, a two-dimensional community product, and the iterative of Maotuan Anime, a two-dimensional video product."],
        'link':['https://www.linkedin.com/in/neil-jiang-a4263aa1/','https://www.linkedin.com/in/neil-jiang-a4263aa1/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["谢鹏","Ares Xie"],
        'intro':["总技术负责人","Leader of Technical Department"],
        'layertxt':["8年后端开发经验，精通服务器集群、大数据、系统架构设计，曾任中国最大页游公司平台负责人，负责年投放7000w的广告系统，有数个开源项目。","8 years of back-end development experience, proficient in server cluster, big data, system architecture design, served as head of China's largest page tour company platform, responsible for the advertising system which delivery capacity is worth CNY 70 million; responsible for several open source projects."],
        'link':['https://www.linkedin.com/in/ares-xie-6b5732154/','https://www.linkedin.com/in/ares-xie-6b5732154/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["苏红","Catherine Su"],
        'intro':["董事长秘书、法务","Chairman Secretary & Legal Specialist"],
        'layertxt':["英国兰卡斯特大学法学博士，山东大学法学硕士，民商法学专业状元。精通中英文民法、商法、国际法、经济法、知识产权法等。在公司负责合同审查，投融资审查等法务相关内容。 ","Doctor of law, University of Lancaster; Master of civil and commercial law, Shandong University. Proficient in Civil Law, commercial law, international law, economic law, intellectual property law, etc. both in Chinese and English. Responsible for contract review, investment and financing review and other relevant legal content."],
        'link':['https://www.linkedin.com/in/hong-su-1736b8154/','https://www.linkedin.com/in/hong-su-1736b8154/']
    }],
        advisoryData=[{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['YALE REISOLEIL','YALE REISOLEIL'],
        'intro':['Founder & CEO of Mcafeecoin','Founder & CEO of Mcafeecoin'],
        'layertxt':["瑞首雷尔先生是四川弘健医疗投资管理合伙人及量化对冲基金经理。他共同管理 200 亿人民 币并购基金和一支 9 亿人民币跨境高科技风险投资基金。从 2013 年至今，瑞首雷尔先生带 领团队开发了多套独家量化交易系统。","A private equity fund manager and quantitative trader, Mr. ReiSoleil co-manages Sichuan Hongjian Medical Fund, a ¥20 billion acquisition fund, and a cross-border high technology venture capital fund. From 2013 to date, Mr. ReiSoleil has developed several proprietary quantitative trading systems."],
        'link':['http://www.linkedin.com/in/reisoleil/','http://www.linkedin.com/in/reisoleil/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['JOHN MCAFEE','JOHN MCAFEE'],
        'intro':['Founder of Mcafee Antivirus','Founder of Mcafee Antivirus'],
        'layertxt':["他是网络安全和软件创新的先锋。1989年，McAfee先生离开洛克希德·马丁，并创立了全球第一家防病毒公司-McAfee Associates。2010年8月 McAfee Associates上市两年后，McAfee先生将他剩余股份出售给英特尔公司。 2016年，迈克菲先生作为自由党竞选美国总统。 ","He is the pioneer of network security and software innovation. In 1989, Mr. McAfee left Lockheed Martin and created the world's first anti-Virus Inc -McAfee Associates. Two years after the listing of McAfee Associates in August 2010, Mr. McAfee sold his remaining shares to Intel. In 2016, Mr. McAfee on behalf of the Liberal Party run for president of the United states. "],
        'link':['http://www.linkedin.com/in/officialmcafee/','http://www.linkedin.com/in/officialmcafee/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["刘计平","Jiping Liu"],
        'intro':['founding member and Vice President of Baidu Inc','founding member and Vice President of Baidu Inc'],
        'layertxt':["百度创始团队，前华南区总经理，现任百度公司副总裁 1982—1986就读于山西大学信息管理系图书管理专业；1988年到达深圳，在惠普工作；2000——2005任百度深圳分公司经理；后历任百度公司副总裁。","Baidu's founding team; former general manager of Southern China District; vice president of Baidu Inc at present. 1982 – 1986, studied the library management in the Department of information management at Shanxi University. He arrived in Shenzhen in 1988 and worked at HP; 2000 - 2005, manager of Shenzhen branch of Baidu; after that he served as vice president of Baidu Inc. "],
        'link':['','']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['Sergey Grybniak','Sergey Grybniak'],
        'intro':['Founder of Opporty.com','Founder of Opporty.com'],
        'layertxt':["Sergey Grybniak is the founder of Opporty.com and Clever-Solution.com. Internationally recognized expert in digital marketing with international experience (USA, CIS, EU). He has over 500 successful projects under his belt. Mr. Grybniak is a serial entrepreneur and holds the IBA’s 2017 Bronze Stevie award (Category: Executive of the Year - Advertising, Marketing & Public Relations). Experienced in SEO, PPC, and SMM, Sergey has provided counsel to multiple billion dollar companies and industry leaders. Sergey is a contributor to Search Engine Journal, Search Engine Watch and few other respected media.","Sergey Grybniak is the founder of Opporty.com and Clever-Solution.com. Internationally recognized expert in digital marketing with international experience (USA, CIS, EU). He has over 500 successful projects under his belt. Mr. Grybniak is a serial entrepreneur and holds the IBA’s 2017 Bronze Stevie award (Category: Executive of the Year - Advertising, Marketing & Public Relations). Experienced in SEO, PPC, and SMM, Sergey has provided counsel to multiple billion dollar companies and industry leaders. Sergey is a contributor to Search Engine Journal, Search Engine Watch and few other respected media."],
        'link':['https://www.linkedin.com/in/sergey-grybniak-3b59944a/','https://www.linkedin.com/in/sergey-grybniak-3b59944a/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["王岳华","Richard Wang"],
        'intro':['Partner of DFJ Dragon Fund-Draper Dragon','Partner of DFJ Dragon Fund-Draper Dragon'],
        'layertxt':["王岳华，台湾交通大学的电信工程硕士, 博士候选人，具有20年半导体行业内经验，在2011年加入德丰杰龙脉中国基金团队。目前投资的方向有人工智能，区块链，物联网等项目。</br>王岳华先生在20年的从业经验里主要从事技术研发，以及市场营销等不同的工作岗位，主要专业是电磁波场论研究。在加入德丰杰龙脉中国基金之前，曾创立EDT Inc， 从事通讯产品的研发与销售，接着创立群众电子商务有限公司担任首席执行官职务，成功的打开了移动互联网及IPTV 渠道。王岳华先生在过去几年一直关注物联网，无线传感网络，智能节电等市场发展与应用。2010年王先生与硅谷创业伙伴创立了Olea Network 开发无线智能心电图传感器，利用都谱勒雷达的原理，接收人体心电的反射波，经由算法，可将移动中人群的心电图辩识出来，其应用广泛，如病房里的无线心电图监测系统。</br> 参与投资的项目有易宝支付，微纳科技，寰擎科技， 艾普柯， 无锡中感微，灵感家科技， 以及区块链公司如好扑科技， Vechain, Metaverse, RedPulse, Chinapex，Alphacat,以及DAF。目前王岳华感兴趣的领域有人工智能应用以及区块链技术。","Richard Wang is a partner of DFJ Dragon Fund-Draper Dragon and graduated from National Chiao Tung University, Taiwan with a Masters Degree in Telecommunications and Engineering. He is also a PhD. candidate.</br>DFJ Dragon Fund is part of a world-renowned venture capital group, Draper Venture Network (DVN), which has over 600 venture capital projects and invested in companied such as Baidu, Focus Media, Kongzhong Corp, Tesla, Twitter and other reputable technology companies. Investments in these companies have brought about considerable investment returns, especially with Baidu, which yielded over a hundred times in return. '\n'As a partner in Draper Dragon, Richard is in charge of investments in artificial intelligence, blockchain, Internet of Things, etc. He was also a part of and invested in YeePay, Nanosic, Innodealing, Epticore, ZGMICRO, IdeeBank and blockchain companies such as Haopu Information and Technology Co. Ltd, Vechain, Metaverse, RedPulse, Chinapex, Alphacat and DAF."],
        'link':['https://www.linkedin.com/in/richardwang/','https://www.linkedin.com/in/richardwang/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["蓝巨敏","Adrian Lam"],
        'intro':['Founder of Workzspace.com','Founder of Workzspace.com'],
        'layertxt':[" Workzspace.com的创始人，该公司在亚洲拥有1000多个服务性办公室和同事空间。Gerson Lehrman Group(GLG)的独立理事会成员。现在澳大利亚证券交易所（ASX）上市的Sportshero前首席运营官 ","Founder of Workzspace.com which has listings of 1000+ Serviced Offices & Coworking space in Asia. Independent council member of the Gerson Lehrman Group(GLG).  Former Chief Operating Officer of Sportshero now listed on Australian Stock Exchange (ASX)"],
        'link':['https://www.linkedin.com/in/adrianlam/','https://www.linkedin.com/in/adrianlam/']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':["王大伟","David Wang"],
        'intro':['Founder of Datachain','Founder of Datachain'],
        'layertxt':["上海交通大学高级金融学院MBA，曾就职盛大，IBM，携程，具有多年互联网行业工作经验。2015年合伙创立国内最大的租约证券化平台魔方金服，2016年中旬创立信数链（datachain)，专注区块链技术创新和应用，曾带队获工信部举办首届全国区块链大赛二等奖。","MBA of Shanghai Jiao Tong University. Have work experiences in Shanda Group, IBM, Ctrip and years of work experiences in the Internet industry. In 2015, he founded the largest domestic rental securitization platform, Rubik's Cube Finance Service. In mid of 2016, founded datachain, which is focuses on blockchain technology innovation and application. The winner of second prize of the first national blockchain competition held by the Ministry of Industry and Commerc"],
        'link':['','']
    },{
        'img':['team_1.jpg','team_1.jpg'],
        'name':['Roy Ma','Roy Ma'],
        'intro':['Business Development Director of CIF in Beijing','Business Development Director of CIF in Beijing'],
        'layertxt':['Mr. Roy Ma brings to CiF more than eight years of professional experiences. A United States expatriate based in China, he focuses on establishing CiF’s relationships with key industry leaders in real estate development, nancing and invest- ments. He is leveraging CiF’s extensive core industry competence to create synergy and develop new cross- border investment opportunities. With extensive business development experiences in sales, investments, wealth management and cross-border transactions, Mr. Ma will play a major role in furthering CiF’s global presence. Prior to working with CiF, Mr. Ma led the international department of Mexgroup, a leading global forex broker, directly managing more than 25 sales and marketing profes- 18 sionals. Prior to that, he acted as managing director (China) of Great Texas regional center, an EB-5 regional center with a long-standing history of success founded by Neil Bush. He also worked with Kalik & Lewin in Washington, D.C., on international trade-relat- ed legal practices. Mr. Ma earned his bachelor’s degree in economics and nance from the University of Maryland.','Mr. Roy Ma brings to CiF more than eight years of professional experiences. A United States expatriate based in China, he focuses on establishing CiF’s relationships with key industry leaders in real estate development, nancing and invest- ments. He is leveraging CiF’s extensive core industry competence to create synergy and develop new cross- border investment opportunities. With extensive business development experiences in sales, investments, wealth management and cross-border transactions, Mr. Ma will play a major role in furthering CiF’s global presence. Prior to working with CiF, Mr. Ma led the international department of Mexgroup, a leading global forex broker, directly managing more than 25 sales and marketing profes- 18 sionals. Prior to that, he acted as managing director (China) of Great Texas regional center, an EB-5 regional center with a long-standing history of success founded by Neil Bush. He also worked with Kalik & Lewin in Washington, D.C., on international trade-relat- ed legal practices. Mr. Ma earned his bachelor’s degree in economics and nance from the University of Maryland.'],
        'link':['https://www.linkedin.com/in/royma','https://www.linkedin.com/in/royma']
    }],
	pressData=[{
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
        'q': ["1.什么是IHT?","1.What is the IHT?"],
        'a':["IHT 是 i-house.com 项下开发的专门用于拆分不动产的智能合约技术和分布式记账技术。它运用区块链不可篡改，信息透明，共监管和可追溯性等优势。",
		"IHT is a smart contract technology and distributed accounting technology developed for the purpose of splitting real estate under i-house.com, which utilizes blockchain’s intrinsic advantages such as trustless mechanism, anti-tamper, co-supervision and traceability."]
    },{
        'q': ['2.为什么资产擁有方及金融机构需要用i-house.com？','2.Why do asset owners and financial institutions need to use I-house.com?'],
        'a':["IHT运用自身的智能合约和分布式记账技术连接资产端和金融机构端。大额资产可通过IHT智能合约拆分并分配给多个金融机构。用户可通过金融机构投资经IHT智能合约拆分的小额不动产。IHT作为连接两端的中心，在资产经过智能合约拆分并绑定后，任何个人或机构都不能进行更改，包括IHT本身。因此，通过IHT，可以确保用户投资牢固的绑定其指向的资 产，使投资更加安全，回报更加稳固。",
			"IHT uses its own smart contract and distributed accounting technology to connect the asset side and the financial institution side. Large assets can be split and distributed to multiple financial institutions through the IHT smart contract. Users, through financial institutions, can invest in small real estate split by IHT smart contract. IHT, as the center of the connection of two ends, cannot be changed by any individual or organization after the asset is split and bound, including the IHT itself. Therefore, through IHT, it can be ensured that users’ investment will be firmly bonded to the pointed assets, so that investment is more secured and returns are more stable."]
    },{
        'q': ['3.IHT有哪些优点？','3.How many advantages IHT has?'],
        'a':["(1) 使房地产投资小额化、动产化、透明化。利用 IHT 的平台，大大降低了投资人对于标的的投资门槛。IHT 在这方面全面支持了房地产 归属权的数字化的过程。IHT 的交易平台及服务平台，提供了资产持有人及投资人所需要的 管理工具。 </br>(2) 很高的交易便捷性。IHT 以资产数字化并利用区块链来体现这一便捷的交易过程。项目 在上市后，大大提高产品的流动性和变现能力。 </br>(3) 信息透明。所有交易透过区块链详细记录，经授权可查阅的账本让整个交易链一目了然， 包括在资产运营中的细节也可以放到 IHT 平台里，信息透明。 </br>(4) IHT 使得相对小的房屋产权也能碎片化，及缩短上市周期。IHT 使得房屋数字资产化更轻易简单。利用 IHT 平台的区块链技术，能快速把资产或某一部 分的资产变成数字资产。",
			"(1) Make real estate investment downsizing, dynamic and transparent. IHT in this regard fully supports the process of digitization of real estate ownership. IHT's trading platform and service platform provide the management tools </br>(2) High transaction convenience.</br>IHT by asset digitization uses blockchain to represent this convenient trading process. After the listing of the project, it will greatly improve product liquidity and cash-ability.needed by asset holders and investors</br>(3) Information transparency.</br>(4) IHT can fragmentize relatively small property rights, and shorten the listing cycle."]
    },{
        'q': ['4.资产擁有方及金融机构如何使用IHT代币？','4.How asset owners and financial institutions use the IHT tokens?'],
        'a':['a) 现金主要是通过充值、ATO 后的资金回笼获得。所有产权的交易和利润通过法币执行。</br> b) IHT 用于发起 ATO和支付服务费。IHT主要是通过ICO或者交易所购买。',
			'There are two main parts of the wallet: cash and IHT.</br>a)  Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat.</br>b) IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users. ']
    },{
        'q': ['5.i-house.com 及IHT时对普通用户有甚么好处？','5.What are the benefits of i-house.com and IHT for regular users?'],
        'a':['a) 投资人可以通过金融机构自有平台上的交易，获取到因房产产权溢价所产生的收益; </br>b) 投资人通过交易钱包中 IHT, 获取因 IHT 的溢价所产生的收益;</br>c) 房产商在开启 ATO 时，会明确房产对应每年的年化收益，用户以法币的方式获得购买 份额所对应的年化收益。具体的年化收益或利率的数额将根据每个项目的不同而确定。',
			'(a) Through transactions on the financial institution’s platform, users can obtain profits from the real estate premium;</br>(b) users can gain profits from the IHT premium by trading; </br>C) When real estate developer launches an ATO，the developer will confirm an annual yield of the corresponding property. The user will then receive the annualized profits of their purchased share in fiat. The annual yield or interest rate will vary on depending on the project.']
    },{
        'q': ['6.普通用户如何使用','6.How do ordinary users use it?'],
        'a':['在金融机构在其自有平台发布子产品后，投资人用户可以通过金融机构的销售入口，进行购 买;或者通过 IHT 平台，根据用户的个人兴趣和投资能力推荐相应的产品，跳转到金融机构 的销售页面进行购买。',
			"After the financial institution released sub-product on its own platform, users can subscribe it through the sale portal, or subscribe on IHT platform which will skip to the sales page of financial institution. The sub-product displayed on IHT platform will be recommended according to user's personal interest and investment ability."]
    },{
        'q': ['7.如何加快跟资产擁有方及金融机构的使用？','7.How to accelerate the use of asset owners and financial institutions?'],
        'a':['1)房产商通过在 IHT 平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后， 可以获得发布 ATO 的权限。房产商发布 ATO 时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相 关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。 其中确定份额后，房产商需要使用钱包中的 IHT 支付份额对应的拆分手续费，才能够正式发 布 ATO。</br>2) 金融机构在 IHT 平台上注册后，在 IHT 的承销平台，通过筛选和查看分类，找到自己最合适 的资产，通过支付一定量的 IHT 作为发起费 , 可承销某个 ATO 的所有份额中的部分份额。 发起费的具体 IHT 数量将根据 ATO 的具体情况和条件决定。 在确认承销完成后，金融机构可以将其承销的份额打包成数个子产品，在其自有平台上发布， 并在 IHT 平台上有展示入口可供各类用户查看。',
			'When the property developer issues ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate address, area, property right period and other relevant conditions), the sale of real estate, whether share repurchase in a certain period of time, valid duration of the subscription and annual effective yield.After determining the share, before they can officially publish the ATO，the property developers need to use the IHT in the wallet to pay the corresponding segmentation fee.']
    },{
        'q': ["8.房地产及金融行业领导者，可以如何贡献这个社区?","8.How leaders of real estate and financial industries can contribute to this community?"],
        'a':["IHT1.0 服务定位于 PaaS，即 Protocol-as-a-Service( 协议即服务 )，给资产方 ATO(Asset Tokenize Offering)提供发布平台服务，给资产方和金融机构提供一个互相发现和交易的平 台。同时 IHT 也会持续运营发展，向 2.0BaaS 迈进，即 Blockchain as a Service( 区块链即服务 ), 为金融机构构建移动信息化应用的资产拆分及管理平台。最终形态 3.0 将进化为基于实体资 产的金融化交易所，提高实体资产的流通性。 </br>从目前商业开展的形势来看，房产端和金融机构端都表现出很大的积极性。越来越多的房产 商和金融机构表示愿意积极参与到 i-house.com 项目中来，并期待 i-house.com 的区块链项目 IHT 尽 快上线。</br>在 IHT 未来发展蓝图中，除了全球不动产以外，所有有交换价值的资产也将会被纳入 IHT 区 块链化的范围。例如，飞机租赁，艺术品，古董，有价债券等等。",
			"IHT1.0 service is positioned as PaaS, Protocol-as-a-Service, which offers a standardized initialization and publication process for ATO ((Asset Tokenize Offering) to asset owners, acting as a neutral agent for asset owners and financial institutions so that both parties can search and make deals. Meanwhile, IHT will continue progressing to 2.0BaaS, Blockchain as a Service, and act as an asset segmentation and management platform for the construction of mobile information applications for financial institutions. Finally, IHT3.0 will evolve into a financial exchange based on physical assets to improve the liquidity of physical assets."]
    },{
        'q': ["9.怎么份额转移?","9.How to transfer the share?"],
        'a':["账户是智能合约基础单元，区块链跟踪每个账户的状态，所以区块链上的状态转换都是账户。之间价值的转移。账户分为外部账户、合约账户。两者基本的区别在于外部账户是由人类用户掌控，而合约账户则是由内部编码管控。如果他们是被人类用户“控制”的，那也是因为程序设定它们被具有特定地址的外部账户控制，进而被持有私钥控制外部账户的人控制着。IHT 资产交易智能合约基于上述智能合约的原则与框架，是IHT资产交易平台的核心交易模块。",
			"The account is the underlying unit of the smart contract, and the blockchain tracks the status of each account, so the state transitions on the blockchain at the end of contract execution reflected the final value in the corresponding accounts. The account is divided into an external account and a contract account. The difference is external account associated and controlled by human being while contract account is composed of internal control encoding. The contract account is controlled by human, since it is programmed with a specific address of the external account, and human user who held the private key to control access to the external account indirectly to the contract account.IHT asset exchange smart contract, based on the above smart contract principles and framework, is the core trading module in the IHT asset exchange platform."]
    }],
    inputLabel={
        'inputName':['姓名','name'],
        'inputEmail':['电子邮件','E-mail'],
        'inputReceive':['输入','Enter email to receive IHT news'],
        'inputNationality':['inputNationality','Nationality'],
        'inputInvestmentAmount':['Investment Amount','Investment Amount'],
        'inputETH':['ETH','ETH']

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
               '<div class="layer"><div>'+v['layertxt'][langnum]+'</div></div></li>'
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
            tempStr+='<dl><dt class="ddCtrl" ><a href="javascript:;" class="hide"><span class="spanTag"></span></a> '+v['q'][langnum]+'</dt><dd class="showDD">'+v['a'][langnum]+'</dd></dl>'

        })
       return tempStr;
   }
    $('.js-teamlist').html(addTeam(teamData));
    $('.js-advisorylist').html(addTeam(advisoryData));
    $('.js-presslist').html(pressFunc(pressData));
    $('.js-faqlist').html(faqFunc(faqData));
    //faqFunc(faqData);
	$('.ddCtrl').on("click",function(){
		$(this).find("span").toggle();
		$(this).next(".showDD").slideToggle(500).siblings("dd").slideUp(500);
	});
	$(document).on('mouseover','.js-teamgrouplist li',function () {
	    $(this).children('.layer').stop(true).fadeIn(500);
    }).on('mouseout','.js-teamgrouplist li',function (e) {
        $(this).children('.layer').stop(true).fadeOut(500);
    });


})(window);