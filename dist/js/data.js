
(function (global) {
    "use strict";
    var lang,langnum,imgurl='dist/images/',moreData=['更多','more'],whiteurl={
        'download':['IHT共享房产区块链白皮书.pdf','IHT Sharing Real Estate Blockchain Whitepaper.pdf','IHT Sharing Real Estate Blockchain Whitepaper.pdf'],
        'url':['/whitepaper-zh','/whitepaper','/whitepaper']},legalurl={
        'download':['法律合规文件.pdf','Legal Opinion.pdf','Legal Opinion.pdf'],
        'url':['/legalOpinion','/legalOpinion','/legalOpinion']},ihtData = {
		'missionTitle'     : ['使命','MISSION','ミッション'],
		'mission'     : ['我们的使命是帮助每一个人轻松地拥有和分享他们的资产，并从分享经济中获益。 ','Our Mission is to help every person to own and share their assets easily and gain from the share economy boost',"弊社の使命はみんなの気軽な資産保有、シェアリング、シェアリング経済からの収益獲得をサポートすることです。"],
		'visionTitle'     : ['愿景','VISION',"ビジョン"],
		'vision'     : ['我们的愿景是在全球范围内建立一个值得信赖的股份制资产管理生态系统。','Our Vision is to create a trustful Share Economy Asset Management Ecosystem globally',"弊社のビジョンは、グローバル範囲で信頼できる株式制資産管理生態システムを確立することです。"],
		'valuesTitle'     : ['价值观','VALUES',"価値観"],
		'values'     : ['-		一切都可以分享<br>-		透明度是信任的最重要因素。 <br>-		非流动性资产应当在这个新的世界高度提高（与blockchain世界）<br>-	 每个人都可以成为“Airbnb”房东，每个人都可以拥有一个“Wework”<br>-	 购买财产/资产的方式可以被打乱（改进）','-	Everything can be shared<br>-	Transparency is the most important element for trust<br>-	Liquidity of assets shall be highly improved in this New World (the world with blockchain)<br>-	Everyone can be the “Airbnb” landlord, everyone can own a “Wework”<br>-	The way of buying property / asset can be disrupted (improved)',"- 全てはシェアリング可能<br>-  透明度は信頼の最も重要な要因です。<br>-  非流動性資産はこの新しい世界で高度化を目指そう（blockchain世界とともに）<br>-  誰でも「Airbnb」の大家になり、誰でも「Wework」を持つことが可能<br>-  財産/資産の購買方式は乱す（改善）可能"],
        'navhome'     : ['首页','HOME',"ホームページ"],
        'navproject'  : ['项目介绍','PRODUCT'," プロジェクト"],
        'navroadmap'  : ['路线规划','ROADMAP',"路線企画"],
        'navteam'     : ['团队介绍','TEAM',"チーム"],
        'navnews'     : ['新闻报道','NEWS',"ニュース"],
        'narblog'     : ['博客','BLOG',"ブログ"],
        'navfaq'      : ['FAQ','FAQ',"FAQ"],
        'language' : ['ENGLISH','中文',"日本語"],
        'languageImg':['<img src="dist/images/mg.jpg"/>','<img src="dist/images/zg.jpg"/>'],
        'notice'   : ['紧急通知：关于超额私募机构退币，警惕虚假代投网站、虚假私募个人团队的公告','Urgent notice: Notice on the coin return caused by the over sale collection of private equity institution, and the vigilance of false investment websites, false private sale of individuals or teams.',"緊急お知らせ：超額私募機構のコイン返却、虚偽名目貨幣投資サイト、虚偽私募個人チームへの注意に関する公告"],
        'tokenSale': ['仅仅10分钟，IHT成功达到硬顶','IHT has sold out in 10 minutes.',"10分間だけで、IHTは頂上到着に成功"],
        'countDay' : ['天','DAYS',"DAYS"],
        'countHour' : ['小时','HOURS',"HOURS"],
        'countMin' : ['分','MINUTES',"MINUTES"],
        'countSec' : ['秒','SECONDS',"SECONDS"],
        'tokenProrss' : ['Token sale 进度','Token sale progress',"Token sale スケジュール"],
        'minMoney'  : ['最低资金目标','Min funding goal',"最小資金目標"],
        'maxMoney'  : ['最大资金目标','Max funding goal',"最大資金目標"],
        '开始时间' : ['开始时间 ：','Start time :',"開始時間"],
        '结束时间' : ['结束时间 ：','End time :',"終了時間"],
        '已筹集' : ['已筹集 ：','Raised :',"募集済み"],
        'token价格' : ['Token sale 价格 ：','Token sale price :',"Token sale 価格 :"],
        'clkRt' :['点击右上角','Click the upper right corner',"右上をクリック"],
        'optionLlq' : ['选择在浏览器中打开','Choose to open in the browser',"ブラウザで開く"],
        'accountKey' :['查看账户IHT','CHECK YOUR IHT',"アカウント内のIHTを表示"],
        'groupLock' :['查询IHT锁定信息','CHECK IHT LOCKUP INFORMATION',"IHTロック情報の照会"],
        'query'  : ['查询','CHECK',"照会"],
        'unLockNumPrin'  : ['未锁定数量：','Unlocked IHT amount:',"未ロック数:"],
        'lockNumPrin' : ['主体锁定数量：','Principle lockup amount:',"主体ロック数:"],
        'lockTimePrin' : ['主体锁定时间：','Principle lockup time:',"主体ロック時刻:"],
        'lockNumBons' : ['奖励锁定数量：','Bonus lockup amount:',"奨励ロック数:"],
        'lockTimeBons' : ['奖励锁定时间：','Bonus lockup time:',"奨励ロック時刻:"],
        'ihtNone' : ['该地址无IHT锁定信息','No IHT lockup information',"当該アドレスにはIHTロック情報がありません"],
        'addErr' : ['无效的ETH钱包地址','Invalid ETH wallet address',"無効のETHウォレットアドレス"],
        'lockOut': ['查看如何取回锁定IHT','HOW TO RETRIEVE THE LOCKUP IHT',"ロックされたIHTの取り戻し方法の表示"],
        'takeOutLock' :['取回锁定IHT','RETRIEVE THE LOCKUP IHT',"ロックされたIHTの取り戻し"],
        'passport' : ['公告：我们目前暂不接受持有中国、美国护照的用户参与Token Sale.','Announcement: Currently, we are not accepting users who hold passports of China and the United States to participate in Token Sale.',"公告：現時点で中国、米国パスポート持参ユーザのToken Saleは対応できません"],
        'iht'      : ['IHT   云产币','IHT Real Estate Protocol',"IHT Real Estate Protocol"],
        'globalreal' : ['全球不动产区块链交易云平台<br/><em>" A new way of asset management "</em>',' Global Real Estate Blockchain Cloud Platform<br/><em>" A new way of asset management "</em>',"グローバル不動産ブロックチェーン取引クラウドプラットフォーム<br/><em>「資産管理の新ルート」</em>"],
        'titleproject':['项目介绍','Project Introduction',"プロジェクト紹介"],
        'titletext':   ['IHT 是 i-house.com 项下开发的专门用于拆分不动产的智能合约技术和分布式记账技术。它运用区块链本身去信任机制，防篡改，信息透明，共监管和可追溯性等优势。通过 IHT 智能 合约可将大额不动产拆分并分配给金融机构，以此，给予用户以小额资金投资并获益于不动 产的机会。并保障了投资的安全性和低风险性。','IHT integrates global real estate markets with the blockchain mechanism. Through joining blockchain and real estate, the real estate developer, financial institutions and their users can be connected and the transaction of real estate can be made a part of “digital credit society”, therefore constituting a pivotal supporting part of the economic development. All owners and investors will become beneficiaries of i-house.com real estate blockchain.',"IHTはi-house.comが開発した不動産を分解するスマート契約技術と分散式記帳技術である。それはブロックチェーンの改竄不可、情報が透明、共同管理と遡及可能性などの優勢を運用する。IHTスマート契約技術を通じて大口の不動産を分解して金融機構に分配する。それによってユーザーが小口資金で不動産を投資し利益を獲得するチャンスができる。そして投資の安全性とリスクの低さが保証される。"],
        'walletTitle':['如何使用IHT钱包','Usage of the IHT wallet',"IHTウォレットの使用方法"],
        'wallet':['<p>ATO（房产产权认购） 是资产方发起拆分的指令。用于生成资产拆分并记录于IHT底层账本。 所有产权和用益权的交易都通过法币执行。钱包中IHT消耗只是ATO的诱发机制。</p><p>*IHT 不会用作资产交易货币，所有资产交易货币将按照当地交易法币进行交易。</p>',"<p>ATO (Asset Tokenize Offering) is the order of the asset party to launch a split. It is used to generate asset split and it is recorded on the kernel ledger of IHT. All property rights and usufruct rights of the transaction shall be conducted under the asset’s local fiat. IHT consumption in the wallet is only an inducement mechanism of ATO.</p><p>*IHT will not be used as the form of currency in the asset transactions. All of the transactions will be conducted under the asset's local fiat.</p>","<p>ATO（不動産財産権引受） は資産保有者が発行した分割指令で、資産分割の生成およびIHTベース帳簿への記録に使われます。全ての財産権および用益物権取引は法定通貨で行います。ウォレットにおけるIHT消費はATOの発現機構に過ぎません。</p><p>*IHT は資産の取引通貨に使われることなく、全ての資産の取引通貨は現地の法定通貨で取引しなければなりません。</p>"],
        'platformTitle':['房产商在IHT平台发起ATO（房产产权认购）','How can property developers launch ATO on IHT platform',"不動産デベロッパーはIHTプラットフォームでATO（不動産財産権引受）を発起します"],
        'platform' : ['<p>房产商通过在 IHT 平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后，可以获得发布 ATO 的权限。 房产商发布 ATO 时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相 关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。 其中确定份额后，房产商需要使用钱包中的 IHT 支付份额对应的拆分手续费，才能够正式发布 ATO。</p>',"<p>When the property developer issue's ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate, address area, property right and other relevant conditions), the sale of real estate, whether share repurchase, in a certain period of time the subscription time and annual effective yield.</p><p>After determining the share, before they can officially publish the ATO，the property developers need to use the IHT in the wallet to act as an inducement mechanism.</p>","<p>不動産デベロッパーはIHTプラットフォームでの資格認証(関係法律許可証、資産登記および財産権証明書など)にパスした後、ATOの発布権限が取得できます。不動産デベロッパーはATOを発布する時に、不動産の具体的な状況（物件所在地、面積、財産権年数その他の関係状況）、不動産の売出分前、一定期間内に買い戻しの有無、引受の有効期間および毎年の年間平均収益を明確にする必要があります。分前を確定した後、不動産デベロッパーはウォレットのIHTで分前に対応した分割手数料を支払った上でATOを発布することができます。</p>"],
        'howworksTitle':['金融机构如何在 IHT 平台上承销 ATO 的资产','How can financial institutions underwrite ATO assets on the IHT platform?',"金融機関の IHT プラットフォームにおける ATO資産のアンダーライティング方法"],
        'howworks':['<p>金融机构在 IHT 平台上注册后，在 IHT 的承销平台，通过筛选和查看分类，找到自己最合适的资产，通过消耗一定的IHT作为诱发机制,可承销某个ATO的所有份额中的部分份额。具体IHT数量将根据ATO的具体情况和条件决定。在确认承销完成后，金融机构可以将其承销的份额打包成数个子产品，在其自有平台上发布， 并在 IHT 平台上有展示入口可供各类用户查看。</p>','<p>After the financial institution has registered on the IHT underwriting platform, they can find the most suitable asset through screening and checking the classification of the asset. IHT will be used as an inducement mechanism on underwriting shares of ATO assets. The specific quantity of IHT depends on the complexity and terms of each ATO.</p><p>After the completion of underwriting, financial institutions can generate many sub-products from its original shares and release on its own platform and show it to users on the display portal of IHT.</p>',"<p>金融機関はIHTプラットフォームで登録した後、IHTのアンダーライティングプ・ラットフォームにおいて、選別および分類の表示により、自分に適した資産を見つけ、所定数量のIHTを発起費として支払った後、あるATOの全ての分前における一部の分前をアンダーライティングすることができます。発起費の具体的なIHT数量はATOの詳細な状況および条件によって決定されます。アンダーライティング完了を確認した後、金融機関はアンダーライティングした分前を複数のサブ商品にパッケージングし、自分のプラットフォームを発布することができます。また、IHTプラットフォームに展示エントランスがあるため、様々なユーザに検索させることができます。</p>"],
        'subscribeTitle':['投资人如何购买 ATO 的资产','How can investors subscribe shares of ATO?',"投資家のATO資産購入方法"],
        'subscribe':['<p>在金融机构在其自有平台发布子产品后，投资人用户可以通过金融机构的销售入口，进行购买;或者通过 IHT 平台，根据用户的个人兴趣和投资能力推荐相应的产品，跳转到金融机构的销售页面进行购买。</p>',"<p>After the financial institution releases the sub-product on its own platform, users can subscribe through the sale portal, or subscribe on IHT platform which will skip to the sales page of the financial institution. The sub-product displayed on the IHT platform will be recommended according to the user's personal interest and investment ability.</p>","<p>金融機関が自分のプラットフォームでサブ商品を発布した後、投資家ユーザは金融機関の販売エントランスを経て購入するか、 IHTプラットフォームにおいてユーザのお好みや投資能力によって対応の商品を薦め、金融機関の販売ページにジャンプして購入することができます。</p>"],
        'watch':['更多','WATCH DEMO',"もっと"],
        'more':['更多','Learn more',"もっと"],
        'applicationTitle':['应用场景','<b>Application</b> Scenarios',"アプリケーション・シーン"],
        'application':['IHT借鉴传统的房地产投资工具，比如REITs，资产持有者可以透过第三方前期的审核、风控、资产包收益预估，快速把房地产资产所有权及收益权交易。透过这一过程，可以体现以下优点。','IHT draws from traditional real estate investment tools, such as REITs, where the asset holders can audit, risk control, predict the asset package income by the third party and seamlessly trade the real estate asset ownership and income rights. Through this process, the following advantages can be represented.',"IHTはREITsなどの従来の不動産投資ツールを活かし、資産保有者が第三者の前記審査、リスクマネジメント、資産パッケージ収益予測によって、速やかに不動産の資産所有権および収益権を取引できます。この過程で下記のメリットが体現できます。"],
        'commumityTitle':['分享','SHARE',"シェア"],
        'commumity':['每个资产都可以在我们的平台上共享。','Every asset is able to share within our platform',"どの資産でも弊社のプラットフォームでシェアリング可能。"],
        'transactionTitle':['透明','TRANSPARENCY',"透明"],
        'transaction':['我们每天、每周和每月提供资产透明度的充分透明度。','We provide full transparency of our asset income daily, weekly and monthly',"弊社は毎日、毎週、毎月に資産情報を提供し、充分な透明度を確保できます。"],
		'liquidityTitle':['流动性','LIQUIDITY',"流動性"],
        'liquidity':['资产云中，资产可以即时交易，为投资者提供流动性。','Within the asset cloud, assets can be transacted instantly and provide liquidity to investors',"資産クラウドでは、資産は即時に取引可能で、投資家に流動性を提供します。"],
        'infomationTitle':['信息','INFORMATION',"情報"],
        'infomation':['信息透明','Information transparency',"情報が透明"],
        'mapTitle':['路线规划','<b>Roadmap</b>',"路線企画"],
        'maptxt':['IHT计划覆盖全球一线城市，连接数百亿美元的资产和数千万用户','IHT plans to cover the major cities Worldwide connecting billions of dollars in assets and millions of users',"IHTはグローバルの一線都市をカバーし、数百億米ドルの資産および数千万のユーザーを繋ぐことを目指しています"],
        'teamTitle':['团队介绍','<b>Team</b> Members',"チームメンバーズ"],
        'advisoryTitle':['专家顾问','<b>Advisory</b> Board',"アドバイザー"],
        'teambackgroundTitle':['团队背景','<b>Team</b> Background',"チーム背景"],
        'advisorybackgroundTitle':['顾问背景','<b>Advisory</b> Background',"アドバイザー背景"],
        'investmentTitle' : ['投资机构','Investors',"投資機構"],
        'pressTitle':['新闻报道','<b>Press</b> Release'],
        'readmore':['更多','Read more',"もっと"],
        'aboutTitle':['','',""],
        'about':['','',""],
        'newsLetterTitle':['获取IHT最新资讯','NEWSLETTER',"IHT最新情報入手"],
        'newsTips':['','',""],
        // 'newsTips':['','Get updates about new tours, travel tips, photo guides and more !'],
        'sendBtn':['发送','SEND',"送信"],
        'join':['加入社区','Join the Community',"コミュニティへの参加"],
        'whiteTitle':['白皮书','WHITE PAPER',"白書"],
        'legal' : ['法律合规文件','Legal Opinion','法律文書'],
        'regTitle':['申请Pre-sale','REGISTER FOR PRE-SALE',"Pre-sale申込"],
//      'issue':['<b>正式发行时间</b> Q1 2018   |   <b>Pre-Sale</b>  一月中旬','<b>Issue Date</b> Q1 2018   |   <b>Pre-Sale</b> Mid January'],
        'subscribeBtn':['订阅','SUBSCRIBE',"購読"],
        'projectTitle':['项目预览','<b>Project</b> Preview',"プロジェクトプレビュー"],
        'regTips':['我们的申请已满, 如有任何查询，请发邮件到<a href="mailto:investment@ihtcoin.com">investment@ihtcoin.com</a>','The application process for IHT is full. If you have any enquiries please send email to: <a href="mailto:investment@ihtcoin.com">investment@ihtcoin.com</a>',"申込定員は既に満員したので、何かご検索の場合、<a href='mailto:investment@ihtcoin.com'>investment@ihtcoin.com</a>までお問い合わせください"],
        'mainze' : ['免责声明</br>请注意，请务必通过官方渠道购买IHT。任何非官方渠道获得的折扣、地址等信息都有可能是假的，都存在极高的法律风险。所以，请及时通过官方渠道查询。若私下通过非官方渠道购买，IHT团队不承担任何责任。','Disclaimer</br> For your attention. Please make sure to buy IHT through official channels. Any discounts, addresses, and other information from unofficial channels may be false, and there are very high legal risks. So, please inquire through official channel in time. If it is purchased privately through unofficial channels, the IHT team shall not take any responsibility.',"免責声明<br>必ずオフィシャルルートでIHTをご購入いただくようお願いします。非オフィシャルルートで入手された割引、アドレスなどの情報は虚偽な可能性があり、極めて高い法律的リスクが存在しています。だから、すみやかにオフィシャルルートで照会してください。非オフィシャルルートでご購入いただいたものに対し、IHTチームは一切責任を負いかねます。"],
        'paperTitle':['白皮书','Whitepaper',"白書"],
        'kycTitle':['KYC','KYC',"KYC"],
        'contractTitle':['投资合同','Investement Contract',"投資契約"],
        'download':['下载','Download',"Download"],
        'appBtn':['应用','Application From',"Application From"],
        'fundTitle':['募集与使用计划','Fund Raising and Application Plan',"募集および使用計画"],
        'fillinBtn':['填写投资意向','Fill In Investment Interest',"投資意向のご記入"],
        'mechanismTitle':['IHT代币机制','IHT Token Mechanism',"IHT名目貨幣仕組み"],
        'mechanism':['IHT 通过一个设置上限的首次代币发行， 占所产生的代币总量的35％。查询详细信息，请参阅下文章节。IHT 总共供给将会被设定为： 1,000,000,000 IHT， 35%的代币将会用于公开售卖。1IHT = 0.1USD没有被售卖的代币将会自动销毁。','<p>IHT is issued by token sale with an upper limited set, accounting for 35% of the total tokens generated. For more information, see the Chapter below. </p><p>IHT total supply will be set as: 1,000,000,000 IHT.<br/>35% tokens will be used in token sale public selling. </p><p><b>1IHT = 0.1USD.  </b></p><p>The tokens which aren’t sold in the token sale will be automatically destroyed.</p>',"IHT は上限を設けた初回名目貨幣で発行され、発生した名目貨幣総量の35％を占めます。詳しくは下記をご参照ください。IHT の供給総額は1,000,000,000 IHTとし、35%の名目貨幣は購買に販売されます。1IHT = 0.1USD　未販売の名目貨幣は自動的に破棄されます。"],
        'saleTitle':['IHT  Pre-sale 结构','IHT Token Sale Structure',"IHT  Pre-sale 構造"],
        'sale':['<p><b>硬限制上限：3500万美元</b></p><p><b>公开 Pre-sale</b><br/>预计500万美元  奖励15%<br/>主体部分：50%锁定3个月； 奖励部分：锁定3个月<br/>个人最低购买限额：15ETH</p>','<p><b>Hard Cap: $35mm </b></p><p><b>Public Pre-sale:</b><br/>Estimated $5mm 15% Bonus<br/>50% principle Lock up for 3 months, Bonus Lockup for 3 months<br/>individual minimum 15ETH</p>',"<p><b>強制制限上限：3500万米ドル</b></p><p><b>公開 Pre-sale</b><br/>500万米ドルの見込  奨励15%<br/>主体部分：50%は3ヶ月ロックします； 奨励部分：3ヶ月ロックします<br/>個人の最小購入限度額：15ETH</p>"],
        'suppyTitle':['IHT总数用途解析','IHT Supply Distribution',"IHT総数の用途解析"],
        'suppy':['发行的代币将会如下分布：•     35%通过售卖投入流通<br>•     40%储备代币为基金会代持<br>&nbsp;&nbsp;&nbsp;&nbsp; 20%基金会持续发展<br>&nbsp;&nbsp;&nbsp;&nbsp; 20%生态部署落地<br>•     15%为基金会员工所有<br>•     10%为早期投资人持有<br>•     基金会持有的30%的代币锁定24个月。<br>•     早期投资人持有的IHT Token锁定6个月。<br>•     基金会员工持有IHT Token锁定6个月，归转期为24个月，每季度转归12.5%。token sale结束起开始计算。',"<p><b>Tokens issued will be distributed as follows:</b></p><p>•     35% will be put into circulation via the token sale<br>•     40% will be reserved tokens which are representatively held by the foundation<br>&nbsp;&nbsp;&nbsp;&nbsp; 20% for the sustained development of the foundation<br>&nbsp;&nbsp;&nbsp;&nbsp; 20% for the ecological deployment<br>•     15% owned by all employees of the foundation<br>•     10% owned by the early Investors<p><b>Additional Terms:</b></p><ul><li>30% of the foundation's reserve will be locked up for 24 months.</li><li>the IHT Token held by the early investors will be locked up for 6 months.</li><li>employee tokens will be subject to a 6 months cliff and a tri-monthly vesting over a period of 24 months starting from the token sale close.</li></ul>","発行対象名目貨幣の分布は下記の通り：•     35%は販売で流通に投入<br>•     40%の在庫名目貨幣は基金会より代理保有します<br>&nbsp;&nbsp;&nbsp;&nbsp; 20%基金会の持続的な発展<br>&nbsp;&nbsp;&nbsp;&nbsp; 20%生態配置の実行<br>•     15%は基金会社員の保有とします<br>•     10%は早期投資家の保有としあｍす<br>•     基金会が保有した30%の名目貨幣は24ヶ月ロックされます。<br>•     早期投資家が保有したIHT Tokenは6ヶ月ロックされます。<br>•     基金会社員が保有したIHT Tokenは6ヶ月ロックされ、転帰期間は24ヶ月で、四半期毎に12.5%転帰されます。token sale完了時から起算します。"],
        'capitalTitle':['资金使用预算：','Capital usage budget',"資金使用予算："],
        'capital':['•     10% token sale公募的法律合规费用•     10% 国内外宣传 & 生态建设<br>•     15% 现有研发团队运转<br>•     15% 招募新的研发运营力量<br>•     50% 预付区块链资产以加快获取资产','<p>10% - legal fees on token sale raising.</p><p>10% - domestic and international publicity & Ecological Construction</p><p>15% - existing R&D team\’s operation</p><p>15% - recruiting new R&D operators</p><p>50%- prepaying the tokenized assets to speed up assets acquisition</p>',"•     10% token sale公募のコンプライアンス費用•     10% 国内外宣伝 & 生態構築<br>•     15% 現行研究開発チームの運営<br>•     15% 新しい研究開発運営人材の採用<br>•     50% ブロックチェーン資産の前払いで資産獲得を加速"],
        'complianceTitle':['合规性','Compliance',"コンプライアンス"],
        'compliance':['IHT Token参照莱特币等知名加密数字货币,将在私募完成后于新加坡成Public Company Limited by Guarantee 盈利基会,该基会的主要任务是公开、公正和透明的运营代币态,并对代币的开发 团队进行支持。团队会按照法律的建议选择注册地点。',"IHT Token refers to Litecoin and other well-known encryption of digital coin,it also reter's to a nonprofit foundation named Public Company Limited by Guarantee in Singapore. The main task of the foundation is to publicly, fairly and transparently operate the state of IHT, and support the development team.The solution of found management and the registration place will be chosen upon legal advice.","IHT Tokenはライトコイン等の知名な暗号デジタル通貨を参照し、私募完了後にシンガポールでPublic Company Limited by Guarantee 収益基金会を設立しします。当該基金会は名目貨幣を公開、公正、透明で運営し、名目貨幣の開発チームをサポートすることを目的とします。チームは法律的アドバイスにより登録場所を選定します。"],
        'TokenRiskTitle':['代币风险','Token Risk',"名目貨幣のリスク"],
        'TokenRisk':['IHToken无意作为投资平台。IHT是驱动用户参使用平台内产品的流通数字货币。','IHToken has no intention of being an investment platform. IHT is the digital currency that drives users to use the products in the platform.',"IHTokenは投資プラットフォームにする気はありません。IHTはユーザのプラットフォーム内製品の利用を促進する流通デジタル通貨です。"],
        'projectRiskTitle':['项目风险','Project Risk',"プロジェクトに関するリスク"],
        'projectRisk':['与任何项目一样，我们平台的开发和执行会有延迟甚至失败的风险。虽然核心团队具有良好的研发记录和业务管理经验，但这并不能为成功打包票。团队将努力实现在项目路线图中所述的里程碑，并将尽可能透明地公布我们的进展和遇到的挑战。','The same as any project, the development and execution of our platform may have the risk of delay or even failure. Although the core team has a good record in research and development and business management experience, this is not a guarantee for success. The team will strive to implement milestones outlined in the project roadmap and will publish our progress and challenges as transparently as possible.',"ほかのプロジェクトと同じように、弊社のプラットフォーム開発および実行にも遅延、更に失敗のリスクが存在しています。中核チームは優れた研究開発記録および業務管理経験を持っていますが、必ず成功するとは限りません。チームはプロジェクトロードマップに記載されたマイルストーンの実現に向けて全力を尽くし、できるだけ進捗状況およびチャレンジを透明に開示します。"],
        'digitalCoinRiskTitle':['数字货币风险','Digital Coin Risk',"デジタル通貨に関するリスク"],
        'digitalCoinRisk':['与其他资产（如股票，债券，甚至房地产等替代投资）相比，数字货币波动是十分剧烈的。不要购买在您承受范围数量以外的IHToken代币。最好的做法是使投资组合多元化，使数字货币构成您资产合理的一部分。这并不构成投资建议，纯粹是常识。与任何区块链一样，请花时间了解我们的项目和愿景。我们的目标是向希望积极参与我们开放性研究平台的志同道合人士融资。','Compared with other assets (such as stocks, bonds, and even real estate), the volatility of digital coin is dramatic. Please do not buy IHT tokens over the amount you can accept. The best thing to do is to diversify your portfolio and make digital coin a reasonable part of your assets. This does not constitute as investment advice, purely common sense. Like any blockchain, please take the time to understand our projects and visions. Our goal is to gain finance from like-minded people who want to actively participate in our open research platform.',"ほかの資産（株券、債券、更に不動産などの代替投資）に比べて、デジタル通貨の変動は極めて激しいものです。だから、負担能力を超えたIHToken名目貨幣のご購入を避けてください。ベストなやり方は投資組み合わせの多元化を図り、デジタル通貨を資産構成の一部とすることです。これは投資アドバイスではなく、単なる常識です。ほかのブロックチェーンと同じように、時間を掛けて弊社のプロジェクトおよびビジョンを理解してください。弊社の目標は弊社の開放型研究プラットフォームに積極的に参与したい意気投合する方から融資することです。"],
        'regulatoryRiskTitle':['监管风险','Regulatory risk',"監督管理に関するリスク"],
        'regulatoryRisk':['数字货币在中国被视为监管的灰色地带。区块链和数字货币的监管环境还处于初级发展阶段。我们将尽最大努力遵守所有法律和监管政策的发展，但我们不能预见法规将如何影响我们的项目和平台开发。在中国境内，IHT会严格遵守相关的法律法规，包括但不限于房地产、金融、证券等相关法律法规。在存在或出现相关注册、审批、备案等手续时，IHT会严格按照程序履行相关手续。同时，IHT会严格遵守当前法律法规中有关发起人限制以及外汇管制的规定。在任何一个IHT开展相关blockchain业务的地区，IHT都将遵守当地的相关法律法规，包括但不限于注册、审批、备案等相关手续。','<p>Digital currency is seen as a grey area of regulation in China. The regulatory environment for blockchain and digital coin is still at an early stage of development. We will do our utmost to comply with the development of all legal and regulatory policies, but we cannot foresee how the regulations will affect our project and platform development.</p><p>In China, IHT will strictly comply with relevant laws and regulations, including, but not limited to, real estate, finance, securities and other related laws and regulations. In the presence or occurrence of relevant registration, approval, filing and other procedures, IHT will strictly follow the procedures to perform the relevant procedures. At the same time, IHT will strictly comply with the current laws and regulations relating to promoters’ restrictions and foreign exchange control.</p><p>In any area where IHT carries out the relevant blockchain business, IHT will comply with local laws and regulations, including, but not limited to, registration, approval, filing and other related procedures.</p>',"デジタル通貨は中国では監督管理のグレーゾーンだと言われています。ブロックチェーンとデジタル通貨の監督管理環境はまだ初期発展段階に属しています。弊社は最善の努力によって全ての法律および監督管理政策の発展を遵守しますが、法規がどのように丙y差のプロジェクトおよびプラットフォームの解決に影響するかは予測不可能です。中国国内では、IHTは不動産、金融、証券などの関係法令を含めた法令を厳守します。登録、許認可、登記などに関る手続が存在した、或いは出現した場合、IHTは関係手続を確実に履行します。また、IHTは現行法令における発起人制限および外貨管理に関する規定を厳守します。IHTがblockchain関係業務を展開するいかなる地域において、IHTは現地の関係法令（登録、許認可、登記などに関る手続を含むが、これに限らない）を遵守します。"],
        'registerTitle':['投资意向','Register Interest',"投資意向"],
        'registerTips':['请告诉我们您的Pre-sale投资意向，获取IHT最新资讯','Please tell us your Pre-sale investment intention<br/>and get more information of IHT ICO',"あなたのPre-sale投資意向を教えていただき、IHTの最新情報を入手してください"],
        'cancle':['取消','CANCLE',"CANCLE"],
        'send':['发送','SEND',"送信"],
        'inputETH':['ETH','ETH',"ETH"],
        'inputBTC':['BTC','BTC',"BTC"],
        'success':['提交成功，感谢您的支持','Submitted successfully, Thank you for your support',"送信に成功しました。ご協力ありがとうございます"],
        'follow' : ['关注我们获取IHT最新资讯','Follow us to get news of IHT',"IHT最新情報を入手するようにフォローして下さい"],
        'share' : ['分享到','Share to',"シェア先"],
        'copySuccess' : ['复制链接成功','Copy link successfully',"リンク先のコピーに成功しました"],
        'confirm'   : ['确定','Confirm',"Confirm"],
        'newwayTitle' : ['资产管理的新途径','A new way of asset management',"資産管理の新ルート"],
        'Telegram':['Telegram','Telegram',"Telegram"],
		'Twitter':['Twitter','Twitter',"Twitter"],
		'Facebook':['Facebook','Facebook',"Facebook"],
		'App':['What’s App','What’s App',"What’s App"],
		'Wechat':['Wechat','Wechat',"Wechat"],
        //12.28 add
        'inputNameTitle':['姓名','Name',"名前"],
        'inputNationalityTitle':['国籍','Nationality',"Nationality"],
        'inputEmailTitle':['邮箱','E-mail',"メール"],
        'inputInvestmentAmountTitle':['意向投资额','Investment amount',"意向投資額"],
        'mediacontactTitle':['如何能够联系到你','What\'s your social media contact?',"ご連絡先は"],
        'socialmediacontactTitle':['你是如何找到我们的','How did you find out about us?',"どのように弊社の連絡先を入手したんですか"],
        'submitBtn':['提交','Submit',"送信"],
        '关于警惕虚假代投网站' : ['关于超额私募机构退币，警惕虚假代投网站、虚假私募个人团队的公告','关于超额私募机构退币，警惕虚假代投网站、虚假私募个人团队的公告',"超額私募機構のコイン返却、虚偽名目貨幣投資サイト、虚偽私募個人チームへの注意に関する公告"],
        '感谢大家对iht的热情' : ['感谢大家对 IHT 的热情支持，由于私募机构申请眾多，基于沟通及网络堵塞的原因，某位热情的机构投资人错过了私募轮的截止日期，额度而满。目前一笔大额以太坊的资金正由 Mr. Yale ReiSoleil 先生公司旗下账户安全托管。后续该资金去向和选择，将由经办人逐一与参与者沟通并安排，如有任何疑问，也可与 Yale ReiSoleil 先生核实与咨询。联络方式：  longnshort (WeChat)/@longnshort (Telegram)/yale.reisoleil@mcafee.vc. 感谢您对IHT的支持。','感谢大家对 IHT 的热情支持，由于私募机构申请眾多，基于沟通及网络堵塞的原因，某位热情的机构投资人错过了私募轮的截止日期，额度而满。目前一笔大额以太坊的资金正由 Mr. Yale ReiSoleil 先生公司旗下账户安全托管。后续该资金去向和选择，将由经办人逐一与参与者沟通并安排，如有任何疑问，也可与 Yale ReiSoleil 先生核实与咨询。联络方式：  longnshort (WeChat)/@longnshort (Telegram)/yale.reisoleil@mcafee.vc. 感谢您对IHT的支持。',"IHTにご支援いただき、お礼を申し上げます。私募機構の申込が多い為、コミュニケーションおよびインターネット渋滞の理由で、ある心の篭った機構投資家は私募シリーズの締切日を逃してしまって、限度額に達成しました。現在、大口のイーサリアム資金は Mr. Yale ReiSoleil 様の会社傘下の口座で安全に委託保管されています。今後の当該資金の行き先および選択について、担当者は参与者とそれぞれコミュニケーションし、計画しますので、何かご質問がございましたら、Yale ReiSoleil 様に確認し、問い合わせることもできます。連絡先：  longnshort (WeChat)/@longnshort (Telegram)/yale.reisoleil@mcafee.vc. IHTへのご支援ありがとうございました。"],
        'IHT官方工作人员发现' : ['近日，IHT 官方工作人员发现，不少假冒的网站、团队或个人开始发布 IHT 的虚假私募途径。我们在此声明，这些网站、团队、个人的私募途径均不是官方授权，如果投资人把钱打到了这类平台上，可能面临重大投资款无法收回的风险。','近日，IHT 官方工作人员发现，不少假冒的网站、团队或个人开始发布 IHT 的虚假私募途径。我们在此声明，这些网站、团队、个人的私募途径均不是官方授权，如果投资人把钱打到了这类平台上，可能面临重大投资款无法收回的风险。',"近日、IHTオフィシャル・スタッフは複数の虚偽なサイト、団体又は個人は虚偽な私募ルートを発布し始めたことを発見しました。ここで下記の通り声明いたします：前記のサイト、団体、個人の私募ルートは全てオフィシャル授権を得ていないため、投資家は資金を前記プラットフォームに振り込むと、多額の投資金額が回収できないリスクに直面するかもしれません。"],
        'ICO-China' : ['(一家名为 ICO-China 的网站宣称进行私募预售，官方确认这是非官方渠道，投资者投资款可能存在重大风险)','(一家名为 ICO-China 的网站宣称进行私募预售，官方确认这是非官方渠道，投资者投资款可能存在重大风险)',"ICO-Chinaというサイトは、私募の先行販売を公言しましたが、オフィシャルの確認により、これは非オフィシャルルールであると判明しましたので、投資家の投資金に重大なリスクが存在しているかもしれません"],
        '市场还出现了大量' :['与此同时，市场还出现了大量所谓转售 IHT 私募并有远高于官方早鸟轮计划折扣的情况，截止目前官方从未授权任何组织、个人、或是平台进行所谓私募转售。以下人士官方确认为虚假渠道，请广大投资者留意风险：','与此同时，市场还出现了大量所谓转售 IHT 私募并有远高于官方早鸟轮计划折扣的情况，截止目前官方从未授权任何组织、个人、或是平台进行所谓私募转售。以下人士官方确认为虚假渠道，请广大投资者留意风险：',"これと同時に、市場では、オフィシャルのアーリーバードシリーズの割引率より遥かに高い価格でIHT私募を転売すると名乗った状況が現れました。今までに、オフィシャルはいかなる組織、個人又はプラットフォームにいわゆる私募転売に関する権利を与えていません。以下のものはオフィシャルの確認により、虚偽なルートであると判明しましたので、投資家の方はリスクにご注意ください。"],
        '同样公开兜售' : ['“jun”同样公开兜售所谓“低价筹码”，投资者应保持高度警惕。','“jun”同样公开兜售所谓“低价筹码”，投资者应保持高度警惕。',"「jun」は公開でいわゆる「低価格チップ」を売り込んでおり、充分にお気をつけてください。"],
        '系盗用官方管理员头像' : ['jia jun 系盗用官方管理员头像进行照片。请广大投资者务必留意，否则同样极易可能出现投资款项被骗的情况。','jia jun 系盗用官方管理员头像进行照片。请广大投资者务必留意，否则同样极易可能出现投资款项被骗的情况。',"jia jun はオフィシャル管理者のアバターを盗用しました。これに気をつけないと、投資金が騙されるリスクは極めて高いです。"],
        '我们已经委托律师' : ['我们已经委托律师对上述两人的和多位投资者的聊天记录、朋友圈信息进行了证据留存，一旦出现投资者或是官方的权益受到损害，我们将会立刻交由律师处理。','我们已经委托律师对上述两人的和多位投资者的聊天记录、朋友圈信息进行了证据留存，一旦出现投资者或是官方的权益受到损害，我们将会立刻交由律师处理。',"弊社は既に前記の二人が複数の投資家とのチャート記録、モーメンツ情報を証拠として留保することについて弁護士に依頼しました。一旦、投資家又はオフィシャルの権益に損害を与えた場合、弊社は直ちにこれを弁護士に対応させます。"],

        //  '钱包介绍app' :  ['钱包主要分两个部分，现金、IHT<br/> a) 现金主要是通过充值、ATO后的资金回笼获得。 所有产权的交易和利润通过法币执行。 b)	IHT用于发起ATO和支付服务费。主要是通过用户通过认购得到以及从其他用户那里交易购买到。','There are two main parts of the wallet: cash and IHT. <br />a)	Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat. b)	IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users.'],
        // '认购简介' : ['房产商通过在 IHT 平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后，可以获得发布 ATO 的权限。 房产商发布 ATO 时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相 关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。 其中确定份额后，房产商需要使用钱包中的 IHT 支付份额对应的拆分手续费，才能够正式发布 ATO。','After getting the qualification certification(jurisdiction relevant licenses, property registration, proof of ownership, etc.) on the IHT platform, the property developers can obtain the right to issue ATO.<br/> When the property developer issue ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate, address area, property right and other relevant conditions), the sale of real estate, whether share repurchase, in a certain period of time the subscription time and annual effective yield.<br/> After determining the share, before they can officially publish the ATO，the property developers need to use the IHT to pay the corresponding segmentation fee.<br />'],

        //old
        //'about' : ['项目介绍','About'],
        /***
        'contact' : ['联系我们','Contact'],
        '去中心化副标题' : ['-- A new way of asset management','-- A new way of asset management'],
        '白皮书'   : ['白皮书','WHITEPAPER'],
        "KYC"    : ["KYC","KYC"],
        "投资合同" : ["投资合同","INVESTMENT CONTRACT"],
        "投资IHT"  :["如果您有意向投资IHT，请在线填写KYC并下载投资合同。填写、签名并发送回IHT官方邮箱investment@ihtcoin.com，感谢您的支持与合作。","If you want to invest in IHT, please kindly fill in the form of KYC on-line, download the Investment Contract, sign your name and send it back to the IHT official e-mail：investment@ihtcoin.com. Thank you for your cooperation."],
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

         **/
    },
    teamData=[{
        'img':['person_wu.jpg','mobile/RickyNg.png'],
        'name':['吴友平','Ricky Ng',"呉友平"],
        'intro':['董事长兼创始人','Chairman and Founder',"代表取締役兼創始者"],
        'layertxt':["全球第一个房产区块链云平台董事长兼创始人。大中华区最大的数字广告平台之一爱点击（iclick）联合创始人。创造年收入10亿的广告神话， 是百度和腾讯在中国和海外最大的合作伙伴。雅虎前任大中华区业务部高级商务总监，超过十年的网络营销及创业实际经验。电脑与金融工程学学士。","Chairman and founder of I-house.com &I-house.com Token(IHT), the first blockchain real estate cloud platforms worldwide.Co-founder of Iclick Interactive, one of the largest digital advertising platforms in greater China area, created an advertising myth of 1 billion RMB per year, major partner with Baidu and Tencent in China and overseas.Former Senior Business Manager in Yahoo Asia – Yahoo! Search Marketing; Professional in digital marketing with more than ten years of practical experience in digital marketing and Entrepreneurship. Bachelor of Engineering, Ecommerce and Financial Engineering.","世界初の不動産ブロックチェーン・クラウドプラットフォームの代表取締役兼創始者。大中華圏で最大のデジタル広告プラットフォームの一つである愛点击（iclick）の共同創立者。年間売上高が10億元の広告神話を創出し、百度と騰訊の中国および海外における最大なパートナー。ヤフー大中華圏業務部シニア・ビジネス・ディレクターを歴任、十年以上のインターネットマーケティングおよび創業経験。コンピューターおよび金融工程学学士。"],
        'link':['http://www.linkedin.com/in/rickyng1/','http://www.linkedin.com/in/rickyng1/',"http://www.linkedin.com/in/rickyng1/"]
    },{
        'img':['person_jin.jpg','mobile/EvanKim.png'],
        'name':["金健博","Evan Kim","金健博"],
        'intro':["首席运营官","Chief Operating Officer","最高執行責任者"],
		'layertxt':["九年传统媒体行业从业经历，六年互联网行业从业经历，其中七年区域总经理岗位经验。原万达集团南昌万达文旅城市市场总监，负责南昌项目的市场推广及相关项目管理工作。 ",
			"Nine years of experience in traditional media industry, six years of Internet industry experience, including seven years of experience in the position of Regional General Manager. Former City Director of Marketing of Nanchang Wanda Cultural Tourism City of Wanda Group. Responsible for marketing and related project management of Nanchang project",
            "九年間の伝統メディア業界職歴、六年間のインターネット業界職歴、そのうち、七年間の区域総経理経験。万達集団南昌万達文旅城市市場ディレクターを歴任、南昌プロジェクトのプロモーションおよびプロジェクト管理関係業務を担当した。"],
        'link':['https://www.linkedin.com/in/evan-kim-25b84b154/','https://www.linkedin.com/in/evan-kim-25b84b154/',"https://www.linkedin.com/in/evan-kim-25b84b154/"]
    },{
        'img':['person_cy.jpg','mobile/NanaChen.png'],
        'name':["陈莹","Nana Chen","陳蛍"],
        'intro':["首席营销官","Chief Marketing Officer","最高マーケティング責任者"],
        'layertxt':["14年营销领域经验。百度游戏高级营销总监, 客户包括完美世界、腾讯等等。爱点击高级媒体总监，负责处理所有的媒体工作，包括百度、腾讯、360、搜狗等",
            "14 years of experience in Marketing. Senior Marketing Director of Games in Baidu, clients include Perfect World, Tencent…etc. Senior Media Director in iClick, in charged of working with all medias includes Baidu, Tencent, 360, Sogou…etc.",
			"14年間のマーケティング分野経験。百度ゲームシニアマーケティングディレクター、顧客には、完美世界、騰訊等が含まれている。愛点击シニアメディアディレクターを歴任、百度、騰訊、360、搜狗等を含めた全てのメディア関係業務を担当した。"],
        'link':['https://www.linkedin.com/in/%E8%8E%B9-%E9%99%88-139733154/','https://www.linkedin.com/in/%E8%8E%B9-%E9%99%88-139733154/',"https://www.linkedin.com/in/%E8%8E%B9-%E9%99%88-139733154/"]
    },{
        'img':['person_yjg.jpg','mobile/EricYao.png'],
        'name':["姚国材","Eric Dao","姚国材"],
        'intro':["首席技术官","Chief Technology Officer","最高技術責任者"],
        'layertxt':["加州理工学院（本科），华盛顿大学硕士研究生，二十二年微软美国西雅图和中国工程院研发工作经验。曾任资深技术团队经理，掌管微软 office、office365、exchange、sharepoint和windows相关技术开发工作。 ",
            "Master's from the University of Washington, Bachelor's from California Institute of Technology. Twenty-two years of Research and Development experience in Microsoft in Seattle (U.S.A) and CAE (the Chinese Academy of Engineering). Senior Technical Team Manager, Chief of Microsoft office, office365, exchange, SharePoint and windows related technical development work.",
			"カリフォルニア工科大学(大学)，ワシントン大学修士、二十二年のマイクロソフト米国シアトルおよび中国工程院での研究開発経験。シニアテクノロジーチームマネージャーを歴任、マイクロソフトのoffice、office365、exchange、 sharepoint および windows に関する技術開発を管理した。"],
        'link':['https://www.linkedin.com/in/ericgcdao/','https://www.linkedin.com/in/ericgcdao/',"https://www.linkedin.com/in/ericgcdao/"]
    },{
        'img':['person_ljj.jpg','mobile/KevinLeung.png'],
        'name':["梁家健","Kevin Leung","梁家健"],
        'intro':["财务总监","Chief Financial Officer","財務ディレクター"],
        'layertxt':["8年房地产业从业经验，Foresea 资产管理有限公司总经理。一家商业地产咨询公司，北京地铁集团有限公司购物中心总经理。 ","8 years of experience in Real Estate industry; GM of Foresea Asset Management Ltd, a commercial property consultancy company; GM of Shopping center in Beijing of MTR Corporation Ltd.","8年間の不動産業界職歴、Foresea資産管理有限公司総経理。一家商業地産諮詢公司，北京地鉄集団有限公司ショッピングセンター総経理。"],
        'link':['http://www.linkedin.com/in/kevin-leung-0157081a/','http://www.linkedin.com/in/kevin-leung-0157081a/',"http://www.linkedin.com/in/kevin-leung-0157081a/"]
    },{
        'img':['person_xjc.jpg','mobile/Jingchengxu.png'],
        'name':["徐敬程","Jingcheng Xu","徐敬程"],
        'intro':["区块链顾问","Blockchain Consultant","ブロックチェーン・アドバイザー"],
        'layertxt':["数字资产基金Badwater Capital联合创始人，就职于位于硅谷和中国知名早期风险投资基金DFJ Dragon Fund,从事TMT领域的风险投资。2014年22岁创立知识技能分享平台火花科技, 获得IDG资本百万人民币风险投资,氪空间三期孵化毕业, 2016年收购退出。就读于美国Indiana University-Kelley School of Business和硅谷Draper University英雄学院。 ",
            "Co-founder of digital asset fund Badwater Capital. Worked at DFJ Dragon Fund, located in Silicon Valley, which is China's well-known early venture investment fund, and engaged in venture investment in the TMT field. in 2014, just 22 years old, created Spark Technology, a knowledge and skills sharing platform, which acquired millions of yuan in venture capital investment from IDG, graduated from krypton space III stage, and exited after the progress of acquisition in 2016. Studied in Indiana University-Kelley School of Business in U.S. and Heroic Academy of Draper University in Silicon Valley.",
			"デジタル資産ファンド Badwater Capital の共同創立者、シリコンバレーおよび中国に位置した知名な早期投資ファンド DFJ Dragon Fundでの職歴あり、 TMT分野のベンチャーキャピタルに従事。2014年に22歳でナレッジ・スキル・シェア・プラットフォームである火花科技を創設し、 IDG 資本の百万人民元のベンチャーキャピタルを取得、氪空間三期インキュベートで卒業 , 2016年に買収によって撤退。米国 Indiana University-Kelley School of Business およびシリコンバレー Draper University ドライパー大学に就学。"],
        'link':['https://www.linkedin.com/in/jc-xu-88940240/','https://www.linkedin.com/in/jc-xu-88940240/',"https://www.linkedin.com/in/jc-xu-88940240/"]
    },{
        'img':['person_jl.jpg','mobile/NeilJiang.png'],
        'name':["蒋宁","Neil Jiang","蒋寧"],
        'intro':["高级产品经理","Senior Product Manager","シニア・プロダクツ・マネージャー"],
        'layertxt':	["高级产品经理，独立负责艾拉丁“室友”、“jobin”等产品的全平台需求规划。曾负责短视频产品“秒拍”，完成app、后台及网页等全平台需求规则。独立负责二次元社团产品“超能部”的孵化到迭代，以及二次元视频产品“猫团动漫”的迭代。 ",
            "Senior Product Manager Independently responsible for Aladdin’s entire platform demand planning of iroommate, jobin and other products. Responsible for the short video products seconds shot, completed the whole platform requirement rules of the app, background and web pages and so on. Independently responsible for the incubation and iteration of “Clans”, a two-dimensional community product, and the iterative of Maotuan Anime, a two-dimensional video product.",
			"独立で艾拉丁「室友」、「jobin」などの製品のプラットフォーム全体のニーズ企画を担当。ショートビデオ製品「秒拍」を担当し、app、バックグラウンドおよびウェブページなどのプラットフォーム全体のニーズ企画を担当。独自で二次元社団製品「超能部」のインキュベーションからイテレーション、および二次元動画製品「猫団動漫」のイテレーションを担当"],
        'link':['https://www.linkedin.com/in/neil-jiang-a4263aa1/','https://www.linkedin.com/in/neil-jiang-a4263aa1/',"https://www.linkedin.com/in/neil-jiang-a4263aa1/"]
    },{
        'img':['person_xp.jpg','mobile/AresXie.png'],
        'name':["谢鹏","Ares Xie","謝鵬"],
        'intro':["总技术负责人","Leader of Technical Department","技術総括責任者"],
        'layertxt':["8年后端开发经验，精通服务器集群、大数据、系统架构设计，曾任中国最大页游公司平台负责人，负责年投放7000w的广告系统，有数个开源项目。","8 years of back-end development experience, proficient in server cluster, big data, system architecture design, served as head of China's largest page tour company platform, responsible for the advertising system which delivery capacity is worth CNY 70 million; responsible for several open source projects.","8年間のバックエンド開発経験、サーバ・クラスタ、ビッグデータ、システムアーキテクチャ設計が堪能、中国最大のウェブゲーム会社プラットフォーム責任者を歴任、年間配信量が7000wの広告システム、および複数のオープンソースプロジェクトを担当。"],
        'link':['https://www.linkedin.com/in/ares-xie-6b5732154/','https://www.linkedin.com/in/ares-xie-6b5732154/',"https://www.linkedin.com/in/ares-xie-6b5732154/"]
    },{
        'img':['person_sh.jpg','mobile/CatherineSu.png'],
        'name':["苏红","Catherine Su","蘇紅"],
        'intro':["董事长秘书、法务","Chairman Secretary & Legal Specialist","代表取締役秘書、法務"],
        'layertxt':["英国兰卡斯特大学法学博士，山东大学法学硕士，民商法学专业状元。精通中英文民法、商法、国际法、经济法、知识产权法等。在公司负责合同审查，投融资审查等法务相关内容。 ",
            "Doctor of Law, University of Lancaster; Master's of Civil and Commercial Law, Shandong University. Proficient in Civil Law, Commercial Law, International Law, Economic Law, Intellectual Property Law, etc. both in Chinese and English. Responsible for contract review, investment and financing review and other relevant legal content.",
			"英国ランカスター大学法学博士，山東大学法学硕士，民商法学専攻一位。中国語・英語民法、商法、国際法、経済法、知的財産権法等が堪能。会社で契約審査、投融資審査などの法務関係内容を担当。"],
        'link':['https://www.linkedin.com/in/hong-su-1736b8154/','https://www.linkedin.com/in/hong-su-1736b8154/',"https://www.linkedin.com/in/hong-su-1736b8154/"]
    },{
        'img':['SprinaWang.jpg','mobile/SprinaWang-m.jpg'],
        'name':["王冰心","Sprina Wang","王氷心"],
        'intro':["Global business Head","Global business Head","Global Business Head"],
        'layertxt':["区块链营销 专家，轻松筹Qfund海外运营VP，闪银Wecash 海外市场VP。10年+在线营销，产品项目管理和APP运营经验。5年+国际化市场深度运营经验，负责过北美，葡语，阿 拉伯语，印度，印尼，泰国，韩国等重点国际化市场。策略制定+团队管理+跨国沟通协作。专长：百度SEM，Google SEM，国际社区运 营-Facebook Twitter Telegram等, Google Play应用市场优化等。",
            "Global token marketing expert, with proven successful cases. HMS, which was fully fundraised with 30 M USD in 18 mins. IHT global business Head, 35 M USD in total fundraising. Qfund global business VP， Wecash global marketing VP. More than 10 years’ work experience in online marketing, product management and APP operation. More than 5 years’ global internet and APP business operation. Hands on business operation on US, BR, EG, UAE, ID, IN, TH markets, have various qualified local market resources. Strategy maker and good team player. E-Marketing skills: Baidu SEM, Google SEM, Facebook Ads and page operation, data analysis, Google Play ASO.",
			"blockchainに関するセールス専門家、「qingsongchou-easy counter 」（中国のクラウドファンディング・プラットフォーム） Qfundの海外運営VP、Wecash海外マーケティングVP。10年以上オンライン運営、製品管理及びアプリ運営経験があり、5年以上グローバル化マーケティング運営経験、北米、ポルトガル、アラブ、インド、タイ、韓国、などの重点的な地域のマーケティングを担当。戦略の作成、チーム管理及び多国間の協力関係構築にもたけている。得意分野：Baidu，SEM，Google SEM，国際コミュニティーの運営-Facebook Twitter Telegram 等 があり、あと、Google Play 応用市場の最適化"],
        'link':['https://www.linkedin.com/in/sprina-wang-25a65527/','https://www.linkedin.com/in/sprina-wang-25a65527/',"https://www.linkedin.com/in/sprina-wang-25a65527/"]
    },{
        'img':['Tony.jpg','mobile/Tony-m.jpg'],
        'name':["向康","Tony Xiang","向康"],
        'intro':["Director Of Business Development","Director Of Business Development","Director Of Business Development"],
        'layertxt':["五 年技术工作背景，曾就业于Dell Software中国以及360企业安全从事技术研发工作。12年赴美创业，从事办公用品领域的批发和零售，目前为 美国最大线上办公品牌供货商。同时，在电商平台上也有3个top rate的销售账号。美国商会理事，经常参与政商界活动，并 代表美国商会访问中国谈判合作。",
            "5 years working experience as Dev role in Dell, Qihoo 360. Then start own company in USA for office supply product, support TOP 5 brand company as their main supply partner. Good at supply chain and 5 years E-Commercial business from 0 to top sales. Advanced member in several chamber of commerce. Have many connection in different area and government source. ",
			"技術系の仕事経験5年、Dell Software 中国及び360会社セキュリティーにて技術開発の仕事をなされていた。2012年アメリカで創業し始め、事務用品の卸売りや小売りをしてた。現在アメリカ最大のオンライン事務用品サプライヤーになっている。また、EC P/Fにも三つの「top rate」 販売アカウントを持っている。アメリカ商会理事として、よく政商連合開催のイベントに顔を出したり、そして、アメリカ商会を代表し、交渉するために中国への訪問をなされたりしている。"],
        'link':[' https://www.linkedin.com/in/tony-xiang-38386015a/',' https://www.linkedin.com/in/tony-xiang-38386015a/',"https://www.linkedin.com/in/tony-xiang-38386015a/"]
    }
    ],
        advisoryData=[
    {
        'img':['YALE-REISOLEIL.jpg','mobile/YaleReisoleil.png'],
        'name':['Yale Reisoleil','Yale Reisoleil',"Yale Reisoleil"],
        'intro':['Founder & CEO of IOB LLC','Founder & CEO of IOB LLC',"IOB LLCの創始者及び最高経営責任者"],
        'layertxt':["瑞首雷尔先生是四川弘健医疗投资管理合伙人及量化对冲基金经理。他共同管理 200 亿人民 币并购基金和一支 9 亿人民币跨境高科技风险投资基金。从 2013 年至今，瑞首雷尔先生带 领团队开发了多套独家量化交易系统。","A private equity fund manager and quantitative trader, Mr. ReiSoleil co-manages Sichuan Hongjian Medical Fund, a ¥20 billion acquisition fund, and a cross-border high technology venture capital fund. From 2013 to date, Mr. ReiSoleil has developed several proprietary quantitative trading systems.","は四川弘健医療投資管理パートナーおよび量的ヘッジファンドマネージャーである。彼は共同で200億人民元の買収ファンドおよび9億人民元のクロスボーダーハイテク投資ファンドを管理している。2013年から、瑞首雷尔氏はチームをリードして、複数の独占量的取引システムを開発した"],
        'link':['http://www.linkedin.com/in/reisoleil/','http://www.linkedin.com/in/reisoleil/',"http://www.linkedin.com/in/reisoleil/"]
    },
//  {
//      'img':['JOHN-MCAFEE.jpg','mobile/JohnMcafee.png'],
//      'name':['JOHN MCAFEE','JOHN MCAFEE'],
//      'intro':['Founder of Mcafee Antivirus','Founder of Mcafee Antivirus'],
//      'layertxt':["他是网络安全和软件创新的先锋。1989年，McAfee先生离开洛克希德·马丁，并创立了全球第一家防病毒公司-McAfee Associates。2010年8月 McAfee Associates上市两年后，McAfee先生将他剩余股份出售给英特尔公司。 2016年，迈克菲先生作为自由党竞选美国总统。 ",
//			"He is the pioneer of network security and software innovation. In 1989, Mr. McAfee left Lockheed Martin and created the world's first anti-Virus Inc -McAfee Associates. Two years after the listing of McAfee Associates in August 2010, Mr. McAfee sold his remaining shares to Intel. In 2016, Mr. McAfee on behalf of the Liberal Party ran for president of the United States. "],
//      'link':['http://www.linkedin.com/in/officialmcafee/','http://www.linkedin.com/in/officialmcafee/']
//  },
    {
        'img':['Sergey-Grybniak.jpg','mobile/SergeyGrybniak.png'],
        'name':['Sergey Grybniak','Sergey Grybniak',"Sergey Grybniak"],
        'intro':['Founder of Opporty.com','Founder of Opporty.com',"opporty.comの創始者"],
        'layertxt':["Sergey Grybniak is the founder of Opporty.com and Clever-Solution.com. Internationally recognized expert in digital marketing with international experience (USA, CIS, EU). He has over 500 successful projects under his belt. Mr. Grybniak is a serial entrepreneur and holds the IBA’s 2017 Bronze Stevie award (Category: Executive of the Year - Advertising, Marketing & Public Relations). Experienced in SEO, PPC, and SMM, Sergey has provided counsel to multiple billion dollar companies and industry leaders. Sergey is a contributor to Search Engine Journal, Search Engine Watch and few other respected media.","Sergey Grybniak is the founder of Opporty.com and Clever-Solution.com. Internationally recognized expert in digital marketing with international experience (USA, CIS, EU). He has over 500 successful projects under his belt. Mr. Grybniak is a serial entrepreneur and holds the IBA’s 2017 Bronze Stevie award (Category: Executive of the Year - Advertising, Marketing & Public Relations). Experienced in SEO, PPC, and SMM, Sergey has provided counsel to multiple billion dollar companies and industry leaders. Sergey is a contributor to Search Engine Journal, Search Engine Watch and few other respected media.","Sergey Grybniakはopportuny.com及びClever-Solution.comの企業者である。国際で経験豊なデジタルセールス専門家として知られている（アメリカ、独連、EU）。500以上のPRJの成功を収めた。 Grybniakさんは数多くの賞も受賞され、そのうち、IBAの2017年Bronze Stevie賞を受賞。（類別：年度最高の高官 - 広告宣伝、セールス及び公共関係領域）。また、検索エンジンの最適化、支払クッリク及びシステムの保守管理にも豊な経験がある。主に、総資産十億USD以上の会社へコンサルサービスを提供している。それに、Grybniakさんは「Search Engine Watch」その他の有名なメディアの寄稿家でもある。"],
        'link':['https://www.linkedin.com/in/sergey-grybniak-3b59944a/','https://www.linkedin.com/in/sergey-grybniak-3b59944a/',"https://www.linkedin.com/in/sergey-grybniak-3b59944a/"]
    },{
        'img':['Richard Wang.jpg','mobile/RichardWang.png'],
        'name':["王岳华","Richard Wang","王岳華"],
        'intro':['Partner of DFJ Dragon Fund-Draper Dragon','Partner of DFJ Dragon Fund-Draper Dragon',"徳豊傑龍脈基金 パートナー"],
        'layertxt':["王岳华，台湾交通大学的电信工程硕士, 博士候选人，具有20年半导体行业内经验，在2011年加入德丰杰龙脉中国基金团队。目前投资的方向有人工智能，区块链，物联网等项目。</br>王岳华先生在20年的从业经验里主要从事技术研发，以及市场营销等不同的工作岗位，主要专业是电磁波场论研究。在加入德丰杰龙脉中国基金之前，曾创立EDT Inc， 从事通讯产品的研发与销售，接着创立群众电子商务有限公司担任首席执行官职务，成功的打开了移动互联网及IPTV 渠道。王岳华先生在过去几年一直关注物联网，无线传感网络，智能节电等市场发展与应用。2010年王先生与硅谷创业伙伴创立了Olea Network 开发无线智能心电图传感器，利用都谱勒雷达的原理，接收人体心电的反射波，经由算法，可将移动中人群的心电图辩识出来，其应用广泛，如病房里的无线心电图监测系统。</br> 参与投资的项目有易宝支付，微纳科技，寰擎科技， 艾普柯， 无锡中感微，灵感家科技， 以及区块链公司如好扑科技， Vechain, Metaverse, RedPulse, Chinapex，Alphacat,以及DAF。目前王岳华感兴趣的领域有人工智能应用以及区块链技术。",
            "Richard Wang is a partner of DFJ Dragon Fund-Draper Dragon and graduated from National Chiao Tung University, Taiwan with a Masters Degree in Telecommunications and Engineering. He is also a PhD. candidate.</br>DFJ Dragon Fund is part of a world-renowned venture capital group, Draper Venture Network (DVN), which has over 600 venture capital projects and invested in companies such as Baidu, Focus Media, Kongzhong Corp, Tesla, Twitter and other reputable technology companies. Investments in these companies have brought about considerable investment returns, especially with Baidu, which yielded over a hundred times in return. '\n'As a partner in Draper Dragon, Richard is in charge of investments in artificial intelligence, blockchain, Internet of Things, etc. He was also a part of and invested in YeePay, Nanosic, Innodealing, Epticore, ZGMICRO, IdeeBank and blockchain companies such as Haopu Information and Technology Co. Ltd, Vechain, Metaverse, RedPulse, Chinapex, Alphacat and DAF.",
			"徳豊傑龍脈基金 パートナーである王岳華氏は20年に渡って主に技術開発、マーケティングなどを担当し、主な専攻は電磁場論研究である。徳豊傑龍脈基金に加入する前に、EDT Incを創設し、通信製品の研究開発および販売に取り組んだ。その次に群衆電子商務有限公司を創設し、最高経営責任者として、モバイルインターネットとIPTVチャンネルの連携に成功した。王岳華氏は過去の数年間にIoT、無線センシングネットワーク、スマート節電などの市場成長および応用に注目している。2010年に、同氏はシリコンバレーの創業パートナーと Olea Networkを創設し、無線スマート心電図センサーを開発した。ドップラーレーダーの原理を利用し、人体の心電反射波を受信し、アルゴリズムにより、移動中の人の心電図を識別できる。病室内の無線心電図モニタリングシステムなど、幅広く応用できる。投資に参加したプロジェクトには易宝支付、微納科技、寰擎科技、艾普柯、無錫中感微、霊感家科技および好撲科技、Vechain、 Metaverse、RedPulse、 Chinapex、Alphacat、DAFなどのブロックチェーン会社がある。 現在、王岳華氏の関心分野はAIおよびブロックチェーン技術である。"],
        'link':['https://www.linkedin.com/in/richardwang/','https://www.linkedin.com/in/richardwang/',"https://www.linkedin.com/in/richardwang/"]
    },{
        'img':['Adrian Lam.jpg','mobile/AdrianLam.png'],
        'name':["蓝巨敏","Adrian Lam","藍巨敏"],
        'intro':['Founder of Workzspace.com','Founder of Workzspace.com',"workzspace.com の創始者"],
        'layertxt':[" Workzspace.com的创始人，该公司在亚洲拥有1000多个服务性办公室和同事空间。Gerson Lehrman Group(GLG)的独立理事会成员。现在澳大利亚证券交易所（ASX）上市的Sportshero前首席运营官 ","Founder of Workzspace.com which has listings of 1000+ Serviced Offices & Coworking space in Asia. Independent council member of the Gerson Lehrman Group(GLG).  Former Chief Operating Officer of Sportshero now listed on Australian Stock Exchange (ASX)","workzspace.comの創始者、同社はアジアで1000以上のサービス性オフィスおよび同僚空間を持っている。Gerson Lehrman Group(GLG)の社外理事会メンバー。現オーストラリア証券取引所（ASX）で上場したSportsheroの元最高執行責任者。"],
        'link':['https://www.linkedin.com/in/adrianlam/','https://www.linkedin.com/in/adrianlam/',"https://www.linkedin.com/in/adrianlam/"]
    },{
        'img':['David Wang.jpg','mobile/DavidWang.png'],
        'name':["王大伟","David Wang","王大偉"],
        'intro':['Founder of Datachain','Founder of Datachain',"Datachain の創始者"],
        'layertxt':["上海交通大学高级金融学院MBA，曾就职盛大，IBM，携程，具有多年互联网行业工作经验。2015年合伙创立国内最大的租约证券化平台魔方金服，2016年中旬创立信数链（datachain)，专注区块链技术创新和应用，曾带队获工信部举办首届全国区块链大赛二等奖。",
            "MBA of Shanghai Jiao Tong University. Has work experience in Shanda Group, IBM, Ctrip and years of work experience in the Internet Industry. In 2015, he founded the largest domestic rental securitization platform, Rubik's Cube Finance Service. In mid of 2016, founded datachain, which focuses on blockchain technology innovation and application. The second prize winner of the first national blockchain competition held by the Ministry of Industry and Commerce",
			"上海交通大学高級金融学院MBA，盛大、IBM、携程での職歴あり、多年間のインターネット業界経験あり。2015年に、パートナーと国内で最大の賃貸借契約証券化プラットフォームである魔方金服を創設し、2016年中旬に信数鏈（datachain)を創設し、ブロックチェーン技術のイノベーションおよび応用にこだわり、チームリーダーとして工信部主催の第一回全国ブロックチェーン大会二等賞を受賞した。"],
        'link':['','',""]
    },{
        'img':['roy-ma.jpg','mobile/RoyMa.png'],
        'name':['Roy Ma','Roy Ma',"Roy Ma"],
        'intro':['Business Development Director of CIF in Beijing','Business Development Director of CIF in Beijing',"CIF（北京）業務発展ディレクター"],
        'layertxt':['Mr. Roy Ma brings to CiF more than eight years of professional experience. A United States expatriate based in China, he focuses on establishing CiF’s relationships with key industry leaders in real estate development, financing and investments. He is leveraging CiF’s extensive core industry competence to create synergy and develop new cross- border investment opportunities. With extensive business development experiences in sales, investments, wealth management and cross-border transactions, Mr. Ma will play a major role in furthering CiF’s global presence. Prior to working with CiF, Mr. Ma led the international department of Mexgroup, a leading global forex broker, directly managing more than 25 sales and marketing profes- 18 sionals. Prior to that, he acted as managing director (China) of Great Texas regional center, an EB-5 regional center with a long-standing history of success founded by Neil Bush. He also worked with Kalik & Lewin in Washington, D.C., on international trade-relat- ed legal practices. Mr. Ma earned his bachelor’s degree in economics and nance from the University of Maryland.',
            'Mr. Roy Ma brings to CiF more than eight years of professional experience. A United States expatriate based in China, he focuses on establishing CiF’s relationships with key industry leaders in real estate development, financing and investments. He is leveraging CiF’s extensive core industry competence to create synergy and develop new cross- border investment opportunities. With extensive business development experiences in sales, investments, wealth management and cross-border transactions, Mr. Ma will play a major role in furthering CiF’s global presence. Prior to working with CiF, Mr. Ma led the international department of Mexgroup, a leading global forex broker, directly managing more than 25 sales and marketing profes- 18 sionals. Prior to that, he acted as managing director (China) of Great Texas regional center, an EB-5 regional center with a long-standing history of success founded by Neil Bush. He also worked with Kalik & Lewin in Washington, D.C., on international trade-relat- ed legal practices. Mr. Ma earned his bachelor’s degree in economics and nance from the University of Maryland.',
			'Roy MaさんはCiFに８年間以上の専門経験をもたらしてきました。在中国の米国移住者として、Roy MaさんはCiFと不動産、金融、投資分野の重要業界リーダーとの関連付けに取り組んでいます。彼はCiFの豊かな中核業界能力でシナジー効果を活かし、新しいクロスボーダー投資チャンスを開発しました。マーケティング、投資、資産管理及びクロスボーダー投資取引に関する豊かな業務開発経験によって、CiFのグローバルにおける業務展開に重要な役割を果たしています。CiFと提携する前に、Maさんはグローバルをリーディングした外国為替ブローカーであるMexgroup国際部に所属し、直接に25名以上の営業及びマーケティング専門人材を管理しました。これまでに、彼はグレートテキサス投資移民地域センターの総経理（中国）を務めました。これはNeil Bush氏に設立された長期的な成功歴史を持ったEB-5地域センターです。彼はワシントンD.C.のKalik & Lewinと提携し、国際貿易関係法律実務を展開する経験もあります。Maさんは米国メリーランド大学の経済・金融専攻の修士号を取得しました。'],
        'link':['https://www.linkedin.com/in/royma','https://www.linkedin.com/in/royma',"https://www.linkedin.com/in/royma"]
    },{
        'img':['zcw.jpg','mobile/zcw.png'],
        'name':["曾慈雯","Tzu Wen Maryann Tseng","曾慈雯"],
        'intro':["Former Executive Director of Morgan Stanley","Former Executive Director of Morgan Stanley","モルガン・スタンレー元執行役員、CLSA 社の現取締役社長"],
        'layertxt':["Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017).","Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017).",
            "Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017).","Tzu Wen Maryann Tseng, will serve as an advisor to IHT Coin. As of October 2017, Ms. Tseng joined CLSA Limited, a brokerage and investment group, as a Managing Director. Ms. Tseng has been an Executive Director with Morgan Stanley in the Institutional Equity Division since August 2010, servicing global financial managers. Prior to Morgan Stanley, from July 2006 to May 2010 Ms. Tseng was a Director at Deutsche Bank and BOCI, specializing in equity markets. Ms. Tsang graduated from the University of Calgary with a Bachelor of Arts in Economics, and earned a certificate from the Stanford Senior Executive Leadership Program (including the completion of the Stanford Directors' College in June 2017).",
			"Tzu Wen Maryann TsengさんはIHT Coinのアドバイザーを担任しています。2017年10月から、TsengさんはCLSA（仲介・投資銀行グループ）に加入し、社長を務めています。Tsengさんは2010年8月からモルガン・スタンレーの機関投資家部門の執行役員を担当し、グローバルの財務マネージャーを支えていました。2006年7月から2010年5月までの間に、Tsengさんはドイツ銀行と中銀国際の取締役として、株式市場に関する業務に取り組んでいました。Tsengさんはカルガリー大学で経済学文学士学位を取得し、スタンフォード エグゼクティブ・リーダーシップ・プログラム証書を取得しました（2017年6月に、スタンフォード取締役学院で修了）。"],
        'link':['','',""]
    },{
        'img':['lvy.jpg','mobile/lvy.png'],
        'name':["Ivy Hou","Ivy Hou","IVY HOU"],
        'intro':["Senior Manager Financial Engineering & Modeling Financial Advisory Deloitte Canada","Senior Manager Financial Engineering & Modeling Financial Advisory Deloitte Canada","シニア・マネージャー・ファイナンシャル・エンジニアリング・モデリング・ファイナンシャル・アドバイス，デロイト・カナダ"],
        'layertxt':["Ivy is a senior manager in Deloitte’s Financial Engineering and Modeling practice. She specializes in the development, implementation, validation, and review of valuation models of structured and complex financial instruments. Ivy has advised on the valuation model development and validation for the largest pension funds, financial institutions and banks in Canada.</br> Developed, validated and audited valuation models for loans, exotic options, structure products, financial instruments, employee compensations options, and credit derivatives held by major Canadian banks, pension funds, financial institutions and corporates </br> Issued independent valuation report for fair value estimation of financial derivatives for financial reporting purposes </br> Provided advisory services on structured financing, investment risk management and due diligence of structured products and financial derivatives for leading Canadian and US financial institutions </br> Assessed the conceptual soundness of the model methodology and assumptions, accuracy of model implementation, and completeness of the incorporation of contractual features for securitization pricing models </br> Provided advisory on investment performance benchmarking and reporting for Canadian leading pension and investment funds under GIPS </br> Developed and implemented mathematical models and simulation techniques to optimize the allocation of assets and hedging instruments for Canadian pension funds </br> Provided loan book valuation for audit-ready Purchase Price Allocation appraisal reports for M&A transaction of Canadian and US financial institutions </br> Provided advisory to design and structure debts, stock options, performance units for Canadian leading industries (Oil and gas, energy, pharmaceutical...etc) </br> Developed a strong knowledge base for the use of interest rate swaps, and FX swaps for hedging purposes from having worked in the Treasury function at a Major Canadian Bank </br> Implemented Monte Carlo methods to price derivatives for financial instruments with structured payoff by using SAS, Excel VBA and Oracle Crystal Ball </br> Ivy is a certified FRM. </br> Ivy has a Master of Finance in Financial Engineering from the University of Hong Kong. ","Ivy is a senior manager in Deloitte’s Financial Engineering and Modeling practice. She specializes in the development, implementation, validation, and review of valuation models of structured and complex financial instruments. Ivy has advised on the valuation model development and validation for the largest pension funds, financial institutions and banks in Canada.</br> Developed, validated and audited valuation models for loans, exotic options, structure products, financial instruments, employee compensations options, and credit derivatives held by major Canadian banks, pension funds, financial institutions and corporates </br> Issued independent valuation report for fair value estimation of financial derivatives for financial reporting purposes </br> Provided advisory services on structured financing, investment risk management and due diligence of structured products and financial derivatives for leading Canadian and US financial institutions </br> Assessed the conceptual soundness of the model methodology and assumptions, accuracy of model implementation, and completeness of the incorporation of contractual features for securitization pricing models </br> Provided advisory on investment performance benchmarking and reporting for Canadian leading pension and investment funds under GIPS </br> Developed and implemented mathematical models and simulation techniques to optimize the allocation of assets and hedging instruments for Canadian pension funds </br> Provided loan book valuation for audit-ready Purchase Price Allocation appraisal reports for M&A transaction of Canadian and US financial institutions </br> Provided advisory to design and structure debts, stock options, performance units for Canadian leading industries (Oil and gas, energy, pharmaceutical...etc) </br> Developed a strong knowledge base for the use of interest rate swaps, and FX swaps for hedging purposes from having worked in the Treasury function at a Major Canadian Bank </br> Implemented Monte Carlo methods to price derivatives for financial instruments with structured payoff by using SAS, Excel VBA and Oracle Crystal Ball </br> Ivy is a certified FRM. </br> Ivy has a Master of Finance in Financial Engineering from the University of Hong Kong. ",
            "Ivyさんはデロイトのファイナンシャル・エンジニアリング・モデリング実践のシニアマネージャーです。彼女は、構造化及び複雑な金融伝票の価値評価モデルの開発、実施、検証及び審査の研究にこだわっています。Ivyさんはカナダ最大の養老基金、金融機関及び銀行に価値評価モデルの開発及び検証に関するコンサルティングを提供しています。彼女はグローバル投資パフォーマンス基準（GIPS）に基づき、カナダの主な養老及び投資ファンドに対し、投資パフォーマンス基準及びレポートに関するコンサルティングを提供しています。数学モデル及びシミュレーション技術の開発及び実施により、カナダの養老基金の資産配分及びヘッジツールの最適化を図っています。審査済みの購入価格配分評価報告書に帳簿価値評価を行い、カナダの主な業界（石油、天然ガス、エネルギー、製薬など）に設計、構造債務、ストックオプション、パフォーマンスユニットに関するアドバイスを提供しています。金利スワップのために強大なナレッジベースを開発し、カナダのある基幹銀行の財政部門でヘッジ取引を行っています。モンテカルロ法を採用し、SAS、Excel VBA及びOracle Crystal Ballの運用により、構造性収益を持った金融商品の価格設定を行っています。Ivyさんは認証を取得した金融リスクマネージャーであり、香港大学ファイナンシャル・エンジニアリング修士号を取得しました。"],
        'link':['','',""]
    },{
        'img':['zjy.jpg','mobile/zjy.png'],
        'name':["周嘉源","Victor Zhou","周嘉源"],
        'intro':["Operation Director in Fosun Group Internet Finance Business","Operation Director in Fosun Group Internet Finance Business","復星グループのインターネット金融業務ディレクター"],
        'layertxt':["- Over 10 years of experience in the Financial industry.- Rich experience on Risk Control, Data Analysis, Strategy Planning in CMB Credit Card Center, BEA and Hang Seng Bank.- Rich experience on Marketing and Operation in LU.com and Fosun Group.- Operation Director in Fosun Group Internet Finance Business.",
            "- Over 10 years of experience in the Financial industry.- Rich experience on Risk Control, Data Analysis, Strategy Planning in CMB Credit Card Center, BEA and Hang Seng Bank.- Rich experience on Marketing and Operation in LU.com and Fosun Group.- Operation Director in Fosun Group Internet Finance Business.",
			"復星グループのインターネット金融業務ディレクター、金融業界経験は１０年以上。招商銀行クレジットカードセンター、東アジア銀行、恒生銀行を歴任し、リスクマネジメント、データ解析及び戦略企画に関する豊かな経験を持っています。 VictorはLU.comと復星グループに務め、マネージャー及び運営に関する豊かな経験も持っています。"],
		'link':['','',""]
    },{
        'img':['yph.jpg','mobile/yph.png'],
        'name':["余沛恒","Henry Yu","余沛恒"],
        'intro':["首席法律顾问","Chief Legal Advisor","上位法律アドバイザー"],
        'layertxt':["余律师是林余律师事务所的创始合伙人之一。他在英格兰获得法律学士学位，在英格兰和威尔斯以及香港都获得律师资格。余律师亦获特许管理会计师公会资格。曾任国际律师事务所以来，曾任重大投资银行法律顾问副主任。余律师在处理与商业法，企业和商业交易以及IPO，私募股权投资，兼并收购和融资等外商投资有关的法律事务方面有丰富的经验。多年来，余律师对法律事务的热忱和深刻的见解得到各专业机构的广泛肯定。余律师一直担任银行业各委员会，也是香港律师会技术委员会成员。余律师不时与立法会议员和香港金融管理局会面，代比分社区。",
            "Mr. Yu is one of the founding partners of L&Y LAW OFFICE. He obtained his law bachelor degree in England and is qualified as a solicitor in both England and Wales and Hong Kong. Mr. Yu has also obtained the qualification from the Chartered Institute of Management Accountants.Mr. Yu was the Deputy Head of Legal Counsel of a major investment bank after he had worked for various international and Magic Circle law firms. Mr. Yu has rich experience in handling legal matters relating to commercial law, corporate and commercial transactions, and foreign investment, including IPO, private equity investment, mergers and acquisitions, and financing.Over the years, Mr. Yu’s enthusiasm for legal matters and his insightful views have been affirmed widely by various professional bodies. Mr. Yu is a member of the Technology Committee of the Law Society of Hong Kong, and is also the Hon. Legal Advisor to The Hong Kong Federation of Innovation and Invention, Hon. Legal Advisor to the Institute of Financial Technologists of Asia and Hon. Legal Advisor to the Bitcoin Association of Hong Kong. From time to time, Henry represents the Bitcoin Community at meetings with the Legislative Council members, the HKMA and the FTSB.",
            "余弁護士は林余弁護士事務所の共同創始人の一人です。彼はイングランドで法律学士学位を取得し、イングランド、ウェルズおよび香港で弁護士資格を取得しました。余弁護士は特許管理会計士公会資格も取得しました。国際弁護士事務所を設立した以来、重大投资銀行法律アドバイザー副主任を担任しました。余弁護士は商業法、企業および商業取引、IPO、私募株式投資、買収、融資などの外商投資に関する法律事務の対応について豊かな経験を持っています。多年間以来、余弁護士の法律事務への情熱および知見は各専門機関に幅広く認められています。余弁護士はずっと銀行業各委員会で任職し、香港弁護士会技術委員会のメンバーでもあります。余弁護士は時々立法会議員、香港金融管理局と面会し。"],
        'link':['','',""]
    },{
        'img':['zhoupiao.jpg','mobile/zhoupiao-m.jpg'],
        'name':["周飘","Chris Zhou","周飄"],
        'intro':["BTC media中国区负责人  Po.et 亚太区负责人","BTC media China area leader,Po.et Head of the Asia Pacific Region","BTC media中国区責任者  Po.et アジア太平洋地域責任者"],
        'layertxt':["负责BTC Inc 旗下中国区媒体业务、公关业务、区块链项目孵化器中国区业务，曾任BitcoinMagazine专栏作家，关注中国地区区块链行业发展、政策方向，为英文世界传递最新的中国区块链动态。并胜任同声传译工作，专注于区块链行业。","Responsible for BTC Inc's China media business, public relations business, and blockchain project incubator business in China. Served as a BitcoinMagazine columnist, concerned about the development of blockchain industry in China, the policy direction, to deliver the latest Chinese blockchain dynamics for the English-speaking world.  competent simultaneous interpretation work, focusing on the blockchain industry.","BTC Inc 傘下中国区メディア業務、広報業務、ブロックチェーンプロジェクトインキュベーター中国区業務を担当。BitcoinMagazineコラムニストの職歴あり、中国地域のブロックチェーン業界発展、政策方向に感心を持ち、英語世界に中国のブロックチェーンに関する最新の動きを配信。同時通訳が可能、ブロックチェーンにこだわり。"],
        'link':['https://www.linkedin.com/in/%E9%A3%98-%E5%91%A8-617a1414b/','https://www.linkedin.com/in/%E9%A3%98-%E5%91%A8-617a1414b/',"https://www.linkedin.com/in/%E9%A3%98-%E5%91%A8-617a1414b/"]
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
        'q': ["1.什么是IHT?","1.What is the IHT?","1.IHTとは？"],
        'a':["IHT是i-house.com项下开发的专门用于拆分不动产的智能合约技术和分布式记账技术。它运用区块链不可篡改、信息透明、共监管和可追溯性等优势。",
        "IHT is a smart contract technology and distributed accounting technology developed for the purpose of splitting real estate under i-house.com which utilizes blockchain’s intrinsic advantages such as trustless mechanism, anti-tamper, co-supervision, traceability…",
		"IHTはi-house.comが開発した不動産を分解するスマート契約技術と分散式記帳技術である。それはブロックチェーンの改竄不可、情報が透明、共同管理と遡及可能性などの優勢を運用する。"]
    },{
        'q': ['2.为什么资产拥有方及金融机构需要用i-house.com？','2.Why do asset owners and financial institutions need to use I-house.com?',"2.なぜ資産の所有者及び金融機構がi-house.comの利用が必要なのか？"],
        'a':["IHT运用自身的智能合约和分布式记账技术连接资产端和金融机构端。大额资产可通过IHT智能合约拆分并分配给多个金融机构。用户可通过金融机构投资经IHT智能合约拆分的小额不动产。IHT作为连接两端的中心，在资产经过智能合约拆分并绑定后，任何个人或机构都不能进行更改，包括IHT本身。因此，通过IHT可以确保用户投资牢固的绑定其指向的资产，使投资更加安全，回报更加稳固。 ",
            "IHT uses its own smart contract and distributed accounting technology to connect the asset side and the financial institution side. Large assets can be split and distributed to multiple financial institutions through the IHT smart contract. Users, through financial institutions, can invest in small real estate split by IHT smart contract. IHT, as the center of the connection of two ends, cannot be changed by any individual or organization after the asset is split and bound, including the IHT itself. Therefore, through IHT, it can be ensured that users’ investment will be firmly bonded to the pointed assets, so that investment is more secured and returns are more stable.",
			"IHTは自身のスマート契約と分散式記帳技術を運用して資産端末と金融機構端末を繋ぐ。大口の資産はIHTスマート契約を通じて複数の金融機構に分解し、分配できる。ユーザーは金融機構を介してIHTスマート契約で分解した小口不動産に投資することが可能。IHTは両端末を繋ぐ中心として、資産がスマート契約を通じて分解、バインディングした後に、あらゆる個人或いは機構とも変更できない、IHT自身でも同様である。なので、IHTを通じてユーザーは確実にターゲットがバインディングされた資産に投資するように確保でき、投資がもっと安全で、リターンがもっと確実である。"]
    },{
        'q': ['3.IHT有哪些优点？','3.How many advantages IHT has?',"3.IHTのメリットは？"],
        'a':["1) 使房地产投资小额化、动产化、透明化。利用 IHT 的平台，大大降低了投资人对于标的的投资门槛。IHT 在这方面全面支持了房地产 归属权的数字化的过程。IHT 的交易平台及服务平台，提供了资产持有人及投资人所需要的 管理工具。 </br>2) 很高的交易便捷性。IHT 以资产数字化并利用区块链来体现这一便捷的交易过程。项目 在上市后，大大提高产品的流动性和变现能力。 </br>3) 信息透明。所有交易透过区块链详细记录，经授权可查阅的账本让整个交易链一目了然， 包括在资产运营中的细节也可以放到 IHT 平台里，信息透明。 </br>4) IHT 使得相对小的房屋产权也能碎片化，及缩短上市周期。IHT 使得房屋数字资产化更轻易简单。利用 IHT 平台的区块链技术，能快速把资产或某一部 分的资产变成数字资产。",
            "1) Make real estate investment downsizing, dynamic and transparent. IHT in this regard fully supports the process of digitization of real estate ownership. IHT's trading platform and service platform provide the management tools </br>2) High transaction convenience.</br>IHT by asset digitization uses blockchain to represent this convenient trading process. After the listing of the project, it will greatly improve product liquidity and cash-ability needed by asset holders and investors</br>3) Information transparency.</br>4) IHT can fragmentize relatively small property rights, and shorten the listing cycle.",
			"1) 不動産投資を小口化、動産化、透明化にする。IHTプラットフォームを利用して、投資者がターゲットに対する投資ハードルを低めた。IHTはこの面において不動産所有権のデジタル化のプロセスに全面的にサポートしている。IHTの取引プラットフォーム及びサービスプラットフォームは資産所有者及び投資者が必要とする管理ツールを提供している。 </br>2) 非常に高い取引の便利性。IHTは資産デジタル化を以って、且つブロックチェーンを利用してこの便利な取引プロセスを実現している。プロジェクトが発売後に、製品の流動性と現金化を大きく高める。</br>3) 情報が透明。全ての取引はブロックチェーンの詳細の記録を通じて、授権を経て査閲可能な帳面は全体の取引チェーンを一目瞭然にする、資産運営中の枝葉末節を含めて、IHTプラットフォームにインプットすることが可能で、情報が透明である。</br>4) IHTは比較的に小さい不動産所有権でも砕片化にし、発売のリードタイムを短縮することができる；IHTは不動産のデジタル資産化をもっと簡単で便利にした。IHTプラットフォームのブロックチェーン技術を利用して、快速に資産或いは一部の資産をデジタル資産に切り替えることができる。"]
    },{
        'q': ['4.资产拥有方及金融机构如何使用IHT代币？','4.How asset owners and financial institutions use the IHT tokens?',"4.資産所有者及び金融機構はいかにIHTトークンを使用するのか？"],
        'a':['1)	现金主要是通过充值ATO后的资金回笼获得。所有产权的交易和利润通过法币执行。</br> 2)	IHT用于发起ATO和支付服务费。IHT主要是通过ICO或者交易所购买。 ',
            'There are two main parts of the wallet: cash and IHT.</br>1)   Cash will be deposited and can be withdrawn after redemption from ATO. All purchases of ownership and profits will be conducted with fiat.</br>2)   IHT is used for ATO initialization and services fees, and will be obtained primarily through token sale or purchased afterwards from other users. ',
			'解答：.</br>1)	現金は主にATOへリチャージ後の資金回収を通じて獲得する。全ての不動産所有権の取引と利益はフィアットを通じて執行される。</br>2)	IHTはATOの発起とサービス料の支払いに使用する。IHTは主にICO或いは取引所を通じて購入する。']
    },{
        'q': ['5.i-house.com 及IHT时对普通用户有什么好处？','5.What are the benefits of i-house.com and IHT for regular users?',"5.i-house.com及びIHTは一般ユーザーに対してどんなメリットがあるのか？"],
        'a' : ['1)	投资人可以通过金融机构自有平台上的交易，获取到因房产产权溢价所产生的收益; </br>2)	投资人通过交易钱包中IHT, 获取因IHT的溢价所产生的收益;</br>3)	房产商在开启ATO时，会明确房产对应每年的年化收益，用户以法币的方式获得购买份额所对应的年化收益。具体的年化收益或利率的数额将根据每个项目的不同而确定。 ',
              '1)   Through transactions on the financial institution’s platform, users can obtain profits from the real estate premium.</br>2) Users can gain profits from the IHT premium by trading. </br>3) When real estate developer launches an ATO，the developer will confirm an annual yield of the corresponding property. The user will then receive the annualized profits of their purchased share in fiat. The annual yield or interest rate will vary on depending on the project.',
        	  '1)	投資者は金融機構の既存プラットフォーム上の取引を通じて、不動産所有権値上げにより発生する収益が獲得できる。</br>2)	投資者は取引ウォーレット中のIHTを通じて、IHTの値上げにより発生する収益を獲得する。</br>3)	不動産業者がATOをオープンする時に、不動産が対応する毎年の年間収益を明確にし、ユーザーはフィアットの方式で購入したシェアが対応する年間収益を獲得する。具体的な年間収益或いは利率の額はプロジェクトによって確定する。'
        ]
    },{
        'q': ['6.普通用户如何使用','6.How do ordinary users use it?',"6.一般ユーザーは如何に使用するのか？"],
        'a':['在金融机构在其自有平台发布子产品后，投资人用户可以通过金融机构的销售入口，进行购买;或者通过IHT平台，根据用户的个人兴趣和投资能力推荐相应的产品，跳转到金融机构的销售页面进行购买。 ',
            "After the financial institution released sub-product on its own platform, users can subscribe it through the sale portal, or subscribe on IHT platform which will skip to the sales page of financial institution. The sub-product displayed on IHT platform will be recommended according to user's personal interest and investment ability.",
			"解答：金融機構がそのプラットフォームでサブ製品を発表した後に、投資者ユーザーは金融機構の販売入口を通じて、購入を行うことができる；若しくは、IHTプラットフォームを通じて、ユーザーの個人興味と投資能力によって相応する製品を推薦し、金融機構の販売ページに遷移して購入を行う。"]
    },{
        'q': ['7.如何加快跟资产拥有方及金融机构的使用？','7.How to accelerate the use of asset owners and financial institutions?',"7.資産所有者及び金融機構との使用を如何に早めるのか？"],
        'a' : ['1)	房产商通过在IHT平台上的资格认证(相关的法律许可证，资产登记和产权证明等等)后，可以获得发布ATO的权限。房产商发布ATO时，需要明确房产的具体情况(如房产地址、面积、产权年限以及其他相关情况)、售房产的份额、是否在一定时间内回购、认购有效时长以及每年的年化收益。其中确定份额后，房产商需要使用钱包中的IHT支付份额对应的拆分手续费，才能够正式发布ATO。</br>2)	金融机构在IHT平台上注册后，在IHT的承销平台，通过筛选和查看分类，找到自己最合适 的资产，通过支付一定量的IHT作为发起费,可承销某个ATO的所有份额中的部分份额。发起费的具体IHT数量将根据ATO的具体情况和条件决定。在确认承销完成后，金融机构可以将其承销的份额打包成数个子产品，在其自有平台上发布，并在IHT平台上有展示入口可供各类用户查看。 ',
            '1) When the property developer issues ATO, it is necessary to make clear of the specific circumstances of the property (such as real estate address, area, property right period and other relevant conditions), the sale of real estate, whether share repurchase in a certain period of time, valid duration of the subscription and annual effective yield.</br>2)  After determining the share, before they can officially publish the ATO，the property developers need to use the IHT in the wallet to pay the corresponding segmentation fee. ',
            '1)	不動産業者はIHTプラットフォームでの資格認証（関連する法律許可証、資産登録と所有権証明書など）を所得したあとに、ATOを発表する権限が獲得できる。不動産業者がATOを発表する際に、不動産の詳細情報（例えば不動産の所在地、面積、所有権年限及びその他の関連情況）、不動産発売のシェア、一定の期間内で買い戻すするか否か、購入有効期間及び毎年の年間収益を明確にしなければならない。その内シェアが確定された後に、不動産業者はウォーレット中のIHTを利用してシェアが対応する分解手数料を支払ってからでしかATOを正式に発表することができない。</br>2)	金融機構はIHTプラットフォームで登録したATOに、IHTの引受プラットフォームで絞込みとカテゴリーの検索を通じて、自分に最適な資産が見つけられる、一定の量のIHTを発起費用として支払えば、某ATOの全てのシェアの一部のシェアを引受することができる。発起費用の詳細のIHT数量はATOの具体的な情況と条件によって決められる。引受の完成が確認された後に、金融機構はその引受したシェアを複数のサブ製品としてセットし、自身のプラットフォームで発表することができ、しかもIHTプラットフォームでも各種ユーザーがチェックできるように入口をディスプレーする。']
    },
//  {
//      'q': ["8.房地产及金融行业领导者，可以如何贡献这个社区?","8.How leaders of real estate and financial industries can contribute to this community?"],
//      'a' : ['答：IHT1.0 服务定位于PaaS，即Protocol-as-a-Service(协议即服务)，给资产方ATO(Asset Tokenize Offering)提供发布平台服务，给资产方和金融机构提供一个互相发现和交易的平台。同时IHT也会持续运营发展，向2.0 BaaS迈进，即Blockchain as a Service(区块链即服务), 为金融机构构建移动信息化应用的资产拆分及管理平台。最终形态3.0将进化为基于实体资产的金融化交易所，提高实体资产的流通性。 </br>从目前商业开展的形势来看，房产端和金融机构端都表现出很大的积极性。越来越多的房产商和金融机构表示愿意积极参与到i-house.com项目中来，并期待i-house.com的区块链项目IHT尽快上线。</br>在IHT未来发展蓝图中，除了全球不动产以外，所有有交换价值的资产也将会被纳入IHT区块链化的范围。例如：飞机租赁、艺术品、古董、有价债券等等。 ',
//      	  'IHT1.0 service is positioned as PaaS, Protocol-as-a-Service, which offers a standardized initialization and publication process for ATO ((Asset Tokenize Offering) to asset owners, acting as a neutral agent for asset owners and financial institutions so that both parties can search and make deals. Meanwhile, IHT will continue progressing to 2.0BaaS, Blockchain as a Service, and act as an asset segmentation and management platform for the construction of mobile information applications for financial institutions. Finally, IHT3.0 will evolve into a financial exchange based on physical assets to improve the liquidity of physical assets']
//  },
    {
        'q': ["8.怎么份额转移?","8.How to transfer the share?","8.持分移転方法は?"],
        'a' :['具体操作形式举例如下</br>角色为 : 资产方 A、金融机构 B、C、D、个人投资人 E、F、G</br>资产方 A 有 1 处房产，价值 1000w，通过 IHT 平台的 ATO，将该房产拆分成了 100 份，每 份价值为 10w，发起 ATO。设定了 1 年后回购，并且年收益为 10%。</br>金融机构在 IHT 平台上看到 ATO 项目后，B 承销了其中的 50 份，C 和 D 分别承销了其中的 25 份。B 在承销了 50 份之后，将其中的 25 份打包称为一个金融产品，叫 B 平台产品 1 号，总金 额为 250w 的金融产品，并在其自有平台上，售卖给会员 E、F、G。',
            'Examples of specific forms of operation are as follows</br>Roles: asset owner A financial institution B, C, D individual users, E, F, G</br>Asset owner A has 1 properties. The value is 1000W. Through releasing ATO on the IHT platform, the property is split into 100 shares and each value is 100K. Asset owner A sets up the repurchase period as 1 year and the annual return at 10%.</br>After the ATO is released on the IHT platform, financial institution B can underwrite 50 shares of it, and C and D can underwrite 25 shares of it respectively.</br>After B underwriting 50 shares, it can package 25 shares and generate a new financial product. This new financial product can be named #1 and its total value is 250w. it can be sold to member E, F, G, on its own platform.',
            "具体的な操作例は下記の通り</br>役柄 : 資産保有者 A、金融機関 B、C、D、個人投資家 E、F、G</br>資産保有者 A は 1 軒の不動産があり、価値は 1000wで、 IHT プラットフォームのATOにより、当該不動産を 100 部に分割し、一部当りの価値は 10wで、 ATOを発起します。 1 年後の買い戻しを設定し、且つ年間収益率を 10%とします。</br>金融機関は IHT プラットフォームで ATO 項目を見つけた後、B はその中の 50 部をアンダーライティングし、C と D はそれぞれ 25 部をアンダーライティングします。B は 50 部をアンダーライティングした後、その中の 25 部を名称がB プラットフォーム商品 1 号で、総金額が250Wの金融商品にパッケージングし、自分のプラットフォームで会員の E、F、Gに売出す。"]
    }],
    inputLabel={
        'inputName':['请输入姓名','Please enter your name',"お名前を入力してください"],
        'inputEmail':['请输入邮箱','Please enter your e-mail address',"メールアドレスを入力してください"],
        'inputReceive':['请输入邮箱','Please enter your e-mail address',"メールアドレスを入力してください"],
        'inputNationality':['请输入国籍','Please enter your nationality',"Please enter your nationality"],
        'inputInvestmentAmount':['请输入数字（最少50）','At least 50',"At least 50"],
		'mediacontact':['请输入账号','Please enter your account ',"Please enter your account "],
		'socialmediacontact':['请输入','Please explain',"Please explain"],
        'inputETH':['ETH','ETH',"EHT"],
        'ETHAddress' : ['请输入ETH钱包地址','Please enter ETH wallet address',"ETHウォレットアドレスを入力してください"]

    },
    investmentData={
        'BTC':['请输入数字（最少2.2）','At least 2.2',"数字を入力してください（少なくとも2.2）"],
        'ETH':['请输入数字（最少50）','At least 50',"At least 50"]
    };

	var sliderimg =
	[
		['money_chn.png','money_eng.png',"money_eng.png"],
		['yewu_chn.png','yewu_eng.png',"yewu_eng.png"],
		['chengxiaozichan_chn.png','chengxiaozichan_eng.png',"chengxiaozichan_eng.png"],
		['chanpingoumai_chn.png','chanpingoumai_eng.png',"chanpingoumai_eng.png"]
	];
	var bgImg = ['map_zh_in.jpg','map.jpg',"map_en_in.jpg"];
	//新添加kyc模块
	var kycData = {
		"协议" : ["协议","TERMS AND CONDITIONS","TERMS AND CONDITIONS"],
		"邮箱和付款信息" : ["邮箱和付款信息","E-MAIL AND PURCHASE INFORMATION","E-MAIL AND PURCHASE INFORMATION"],
		"在线KYC" : ["在线KYC","KYC","KYC"],
		"付款" : ["付款","PAYMENT","PAYMENT"],
		"在PDF中查看条款" : ["在PDF中查看条款","Open Terms as a PDF file","Open Terms as a PDF file"],
		"用户协议内容" : ["用户协议内容","用户协议内容","用户协议内容"],
		"我同意该协议与条款" : ["我同意该协议与条款","I hereby acknowledge that I have fully read, understood, and agree to the terms and conditions laid out for the IHT Token Sale","I hereby acknowledge that I have fully read, understood, and agree to the terms and conditions laid out for the IHT Token Sale"],
		"我不是中国或美国国籍用户" : ["我不是中国或美国国籍用户","My nationality is not China or USA","My nationality is not China or USA"],
		"上一步" : ["上一步","Back","Back"],
		"下一步" : ["下一步","Next","Next"],
		"钱包地址说明" : ["Tokens will be allocated onto the given wallet. Do not send funds from an exchange account. Send the ETH from an Ethereum wallet to which you hold the private key. Do not send any currency other than ETH.","Tokens will be allocated onto the given wallet. Do not send funds from an exchange account. Send the ETH from an Ethereum wallet to which you hold the private key. Do not send any currency other than ETH.","Tokens will be allocated onto the given wallet. Do not send funds from an exchange account. Send the ETH from an Ethereum wallet to which you hold the private key. Do not send any currency other than ETH."],
		"邮箱" : ["邮箱","E-mail Address","E-mail Address"],
		"选择投资币种" : ["选择投资币种","Pay With","Pay With"],
		"填写投资数额" : ["选择投资数额","Contribution Amount","Contribution Amount"],
		"ETH钱包地址" : ["ETH钱包地址","ETH Wallet Address","ETH Wallet Address"],
		"以太坊钱包地址" : ["以太坊钱包地址","ETH Wallet Address","ETH Wallet Address"],
		"姓名" : ["姓名","Name","Name"],
		"出生日期" : ["出生日期","Date of Birth","Date of Birth"],
		"国籍" : ["国籍","Nationality","Nationality"],
		"住址" : ["住址","Residence Address","Residence Address"],
		"请上传您的身份证明" : ["请上传您的身份证明（护照、身份证或驾照）","Please upload your proof of ID (Passport, ID Card or Driver’s License)","Please upload your proof of ID (Passport, ID Card or Driver’s License)"],
		"选择图片" : ["选择图片","Dpload Documents","Dpload Documents"],
	};
	var kycInput = {
		"请输入您的常用邮箱地址" : ["请输入您的常用邮箱地址","Please enter your E-mail Address","メールアドレスを入力してください"],
		"至少50ETH" : ["至少50ETH","Minimum contribution: 50 ETH for Private Pre-sale","Minimum contribution: 50 ETH for Private Pre-sale"],
		"请输入钱包地址"  : ["请输入钱包地址","Please enter your ETH wallet address","Please enter your ETH wallet address"],
		"请输入用于接收IHT代币的以太坊钱包地址" : ["请输入用于接收IHT代币的以太坊钱包地址","Please enter your ETH wallet address","Please enter your ETH wallet address"],
		"请输入您的姓名" : ["请输入您的姓名","Please enter your name","Please enter your name"],
		"请输入您的国籍" : ["请输入您的国籍","Please enter your nationality","Please enter your nationality"],
		"请输入您的住址" : ["请输入您的住址","Please enter your residence address","Please enter your residence address"]
	};

	//notice页面
	var noticeImg = {
		'notice1' : ['noticePc1-chn.jpg','noticePc1-chn.jpg',"noticePc1-chn.jpg"],
		'notice2' : ['noticePc2-chn.jpg','noticePc2-chn.jpg',"noticePc2-chn.jpg"],
		'notice3' : ['noticePc3-chn.jpg','noticePc3-chn.jpg',"noticePc3-chn.jpg"],
		'notice4' : ['noticePc4-chn.jpg','noticePc4-chn.jpg',"noticePc4-chn.jpg"],
		'notice5' : ['noticePc5-chn.jpg','noticePc5-chn.jpg',"noticePc5-chn.jpg"],
	}
	var noticeWebImg = {
		'notice1' : ['noticeWebImg-chn.jpg','noticeWebImg-chn.jpg',"noticeWebImg-chn.jpg"],
		'notice2' : ['noticeWebImg2-chn.jpg','noticeWebImg2-chn.jpg',"noticeWebImg2-chn.jpg"],
		'notice3' : ['noticeWebImg3-chn.jpg','noticeWebImg3-chn.jpg',"noticeWebImg3-chn.jpg"],
		'notice4' : ['noticeWebImg4-chn.jpg','noticeWebImg4-chn.jpg',"noticeWebImg4-chn.jpg"],
		'notice5' : ['noticeWebImg5-chn.jpg','noticeWebImg5-chn.jpg',"noticeWebImg5-chn.jpg"],
	}
    // 头部锁仓入口
    var lockImg = {
        'lockImg' : ['dist/images/topBannerBg.jpg','dist/images/topBannerBg2.jpg',"dist/images/topBannerBg3.jpg"],
    }
    var lockImgH5 = {
        'lockImgH5' : ['dist/images/topBannerBgH5cn.jpg','dist/images/topBannerBgH5en.jpg',"dist/images/topBannerBgH5jp.jpg"],
    }
    var lockUrl = {
        'lockUrl' : ['https://ltincentive.ihtcoin.com/#/cn/main/index/info','https://ltincentive.ihtcoin.com/#/en/main/index/info','https://ltincentive.ihtcoin.com/#/jp/main/index/info']
    }

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }
    lang=getQueryString('lang')?getQueryString('lang'):'eng';
    // langnum=(lang=='ch')?0:1;
    if(lang=='ch'){
        langnum = 0
    }else if(lang=="eng"){
        langnum = 1
    }else if(lang=="ja"){
        langnum = 2
    }else{
        langnum = 1
    }
    // 头部锁仓入口
    $('.lockUrl').attr('href',lockUrl.lockUrl[langnum])
    $('.lockImg').attr('src',lockImg.lockImg[langnum])
    $('.lockImgH5').attr('src',lockImgH5.lockImgH5[langnum])

	var bgimgurl = bgImg[langnum];
    $(".mapbox").css({'background':'url(dist/images/'+bgimgurl+') no-repeat center top'});
    $(".mapbox_mobile").css({'background':'url(dist/images/mobile/'+bgimgurl+') no-repeat center top','-webkit-background-size':'cover','background-size':'cover'});

	$('.swiper-slide').each(function (idx, ele) {
		var img = sliderimg[idx][langnum];
        $(ele).css({'background':'url(dist/images/introduce/'+img+') no-repeat center top','-webkit-background-size':'cover','background-size':'cover'});
    });
	var pathEnv = _config.url;

    $('.iht').each(function (idx, ele) {
        var ks=$(ele).data('main');
        if(ihtData[ks] !==undefined){
            $(ele).html(ihtData[ks][langnum]);
            if($(ele).data('main') =='whiteTitle'){
                $(ele).attr({'href': pathEnv + whiteurl['url'][langnum],'download':whiteurl['download'][langnum]})
            };
            if($(ele).data('main') =='legal'){
                $(ele).attr({'href': pathEnv + legalurl['url'][langnum],'download':legalurl['download'][langnum]})
            };
        }
    })
    $('.ihtinput').each(function (idx, ele) {
        var ks=$(ele).data('main');
        if(inputLabel[ks] !==undefined){
            $(ele).attr('placeholder',inputLabel[ks][langnum]);
        }
    });
    //新添加kyc流程
    $('.token').each(function(idx,ele){
    	var ks = $(ele).data('main');
    	if(kycData[ks] !==undefined){
            $(ele).html(kycData[ks][langnum]);
       };
       if(ks == 'whiteTitle'){
       	$(ele).attr({'href':whiteurl['url'][langnum],'download':whiteurl['download'][langnum]})
       }
    });
    $('.tokenInput').each(function (idx, ele) {
        var ks=$(ele).data('main');
        if(kycInput[ks] !==undefined){
            $(ele).attr('placeholder',kycInput[ks][langnum]);
        }
    });
    //notice页面
    $('.noticeImg').each(function(idx,ele){
    	var ks = $(ele).data('main');
    	if(noticeImg[ks] !==undefined){
            $(ele).attr('src','dist/images/notice/'+noticeImg[ks][langnum]);
        }
    });
    $('.noticeWebImg').each(function(idx,ele){
    	var ks = $(ele).data('main');
    	if(noticeWebImg[ks] !==undefined){
            $(ele).attr('src','dist/images/notice/'+noticeWebImg[ks][langnum]);
        }
    })


    if(isMobile()){
        $('.js-advisorylist').html(addTeam(advisoryData));
    }
    else{
        $('.js-advisorylist').html(addAdvisory(advisoryData));
    }
   function addTeam(data) {
       var teamStr='';
       $.each(data,function (k, v) {
           if(k%4==3){
               teamStr+='<li class="mr0">'
           }
           else{
               teamStr+='<li>';
           }
           teamStr+='<p class="teamimg"><img src="'+imgurl+'person/'+v['img'][imgChar]+'"/> </p><div class="teamtxt">' +'<div>'+v['name'][langnum]+'</div><p>'+v['intro'][langnum]+'</p></div>' +
               '<div class="layer"><div>'+v['layertxt'][langnum]+'</div>' +
               '<a href="'+v['link'][langnum]+'" class="linkin"><img src="'+imgurl+'/linkin.svg"/> </a></div></li>'
       })
       return teamStr;
   }
    function addAdvisory(data) {
        var teamStr='';
        $.each(data,function (k, v) {
            if(k%4==3){
                teamStr+='<li class="mr0">'
            }
            else{
                teamStr+='<li>';
            }
            teamStr+='<p class="teamimg"><img src="'+imgurl+'person/'+v['img'][imgChar]+'"/> </p><div class="teamtxt">' +'<div>'+v['name'][langnum]+'</div><p>'+v['intro'][langnum]+'</p></div>' +
                '<div class="layer"><div>'+v['layertxt'][langnum]+'</div>' +
                '<a href="'+v['link'][langnum]+'" class="linkin"><img src="'+imgurl+'/linkin.svg"/> </a></div></li>'
        })
        return teamStr;
    }

   function faqFunc(data) {
        var tempStr='';
        $.each(data,function (k, v) {
            tempStr+='<dl><dt class="ddCtrl" ><a href="javascript:;" class="hide"><span class="spanTag"></span></a> '+v['q'][langnum]+'</dt><dd class="showDD">'+v['a'][langnum]+'</dd></dl>'

        })
       return tempStr;
   }
    $('.js-teamlist').html(addTeam(teamData));


    //$('.js-presslist').html(pressFunc(pressData));
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
	$(document).on('scroll',function (e) {
	    if($(document).scrollTop()>40){
	        $('.js-navbar').addClass('min-nav');
        }else{
            $('.js-navbar').removeClass('min-nav');
        }
    })

    function isMobile() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        }
        else{
            return false
        }
    }

    $('.navbartoggle').click(function(){
        $('.navbarcollapse').toggle(300);
    });

	var _w,_h,l_h,_w,_top,_fz;
    function resizeLayout(){
      _w=$(window).width(),_h=$(window).height(),l_h=_h-100,
        _fz=parseInt($('html').css('font-size')),_top=30+141+_fz*1.2+1.5*_fz+30
      $('.layout').css({
        'height':l_h,
        'margin-top':-l_h/2
      });
      $('.layout .layer div').css({
        'height':l_h-_top
      })
    }
    resizeLayout();
    $(window).resize(function(){
      resizeLayout();
    })
    $('.js-mteamlist li').click(function(){
    $('.layout').html($(this).html())
    $('.layout .layer div').css({
      'height':l_h-_top
    })
      $('.layout').fadeIn();
      $('.gray').fadeIn();
    })
    $('.gray').click(function(){
      $('.layout').fadeOut();
      $('.gray').fadeOut();
    });
    $('.js-seleth').change(function () {
        $('.js-inputeth').attr('placeHolder',investmentData[$(this).children("option:selected").text()][langnum])
    })
})(window);
var AnchorClick = function (href) {
    var pos = $(href).offset().top - 20;
    $("html,body").animate({ scrollTop: pos }, 400);
    $('.navbarcollapse').hide();
};
