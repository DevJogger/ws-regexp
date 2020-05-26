import { _greedyTableCacheRegexp } from './table/re';

export { _greedyTableCacheRegexp };

export const _greedyTableCacheTest = /[噁恶悪惡係系繋繫楜煳糊胡葫衚鬍儅噹当當复復複覆囌甦苏蘇䌽埰彩採睬綵踩采㑩儸啰囉罗羅刘劉浏瀏券劵卷巻捲蜷划劃画畫斗闘鬥鬪鬭乹乾亁干幹図图圖历暦曆歴歷面麪麵麺讃讚賛贊赞发發髪髮侭儘尽盡優忧憂俱倶具の之得的と与與他佗她它牠祂只支枝隻泡炮炰砲㊥中仲元原回廻迴辟避闢卤滷魯鲁鹵儓台檯臺颱宻密祕秘謎谜迷沙砂紗纱莎篇編编冶治炼煉練练錬鍊𫔀亚亜亞娅婭桠椏塞賽赛籐籘腾藤騰你妳祢禰⻞喰蚀蝕食飠飧玛瑪馬马餚餸果裸凯凱鎧铠帖貼贴什甚联聯连連像象借藉蕾雷定訂订釘钉向嚮丝糸糹絲桶筒兹滋玆茲吶呐訥讷穀糓谷両两俩倆兩帐帳賬账板版闆呆待溶熔融螎鎔镕匯彙汇仏佛彿啊阿傢家暴爆䋄䋞冈刚剛堈岗岡崗綱網纲缸网鋼钢注註潅灌貫贯倒到儭平秤称稱衬襯勋勛勲勳丽利莉麗己已巳呵嗬呦哊哟唷唹喲傑婕杰洁潔絜嘻嬉嘛痲痳麻犬狗拂亘亙恆恒付副附伽加枷珈迦福褔挨捱拚拼漂飃飄飘佔占沾气気氣汽滊炁撩辽遼作做捜搜蒐傁叟榭謝谢型形僱雇頋顧顾庐廬芦蘆眈耽躭傹竞竟競竸誩𥪰𧡟𧫘𧫙𧮣𨐼植殖佬姥老倖幸㠪巨炬矩鉅钜䃛鏈链𧹯㓥刴剁剐剮劏南枏楠璐路𡽘𨱴侂托拓拕拖杔託讬希悕睎稀囯国國帼幗反返佯扬揚旸暘杨楊炀烊煬阳陽來来莱萊保堡緥葆褓度渡剳扎札箚紮堤媞提湜禔緹缇隄腊臘蜡蠟郁鬱𨚼𨟝扞擀杆桿脼郎郞𥇑巴芭捏涅湼択择擇沢泽澤幵开開佩珮吁喩喻籲龥値值脏臓臟贓赃髒㊤上㊦下呼唿祥詳详妮尼泥克剋尅拨撥播挿插揷丁汀娜那拉菈林淋玲琳鈴铃名銘铭出齣唉欸誒诶呣哞㖿吔耶媚魅匪扉斐緋绯翡菲蜚誹诽霏非叉衩釵钗其淇琪祺坛壇談譚谈谭才材柴唸念指趾仕士娘嬢孃哑唖啞痖瘂仂働动動察查査鉃鉄銕鐡鐵铁𨫓帰归歸皈创創疮瘡拷烤考入込仑伦侖倫仔子弯彎湾灣熒荧萤蛍螢争挣掙爭涨漲胀脹冇无沒没無吨噸訰勾鈎鉤钩沈沉叠畳疊迭僵殭疆繮缰韁揹背团団團糰榚糕需須须鬚抒紆紓纡纾州洲厂厰场場廠筱筿篠根跟曝㬅嫚曼漫熳蔓升昇陞獃烟煙腌菸醃录錄録陆陸掳擄虏虜翘翹跷蹺脚腳角直詞词辞辭义意義哏梗呎咫尺伶怜憐委荽萎岭岺嶺阾領领决決絕絶绝訣诀岳嶽𡶦受授綫線线缐腺一壱壹慌荒庭廷喧宣暄諠掠略畧䇳牋笺签箋簽籖籤么幺庅麼麽杧芒茫趯跃躍㳽弥彌瀰抹袜襪䆫囪囱窓窗窻函凾涵悚耸聳洛落标標鏢鑣镖镳怪恠並併倂并幷竝𠀤鶇鶫鸫𪂝鐳镭靁白鉑铂吊弔戒誡诫𢌵侯候𠊱𠋫訓训馴驯姆母堀窟]/u;

export const _greedyTableCacheMap = new Map<string, readonly string[]>([
	["噁", ["噁","恶","悪","惡"]],
	["恶", ["噁","恶","悪","惡"]],
	["悪", ["噁","恶","悪","惡"]],
	["惡", ["噁","恶","悪","惡"]],
	["係", ["係","系","繋","繫"]],
	["系", ["係","系","繋","繫"]],
	["繋", ["係","系","繋","繫"]],
	["繫", ["係","系","繋","繫"]],
	["楜", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["煳", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["糊", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["胡", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["葫", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["衚", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["鬍", ["楜","煳","糊","胡","葫","衚","鬍"]],
	["儅", ["儅","噹","当","當"]],
	["噹", ["儅","噹","当","當"]],
	["当", ["儅","噹","当","當"]],
	["當", ["儅","噹","当","當"]],
	["复", ["复","復","複","覆"]],
	["復", ["复","復","複","覆"]],
	["複", ["复","復","複","覆"]],
	["覆", ["复","復","複","覆"]],
	["囌", ["囌","甦","苏","蘇"]],
	["甦", ["囌","甦","苏","蘇"]],
	["苏", ["囌","甦","苏","蘇"]],
	["蘇", ["囌","甦","苏","蘇"]],
	["䌽", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["埰", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["彩", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["採", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["睬", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["綵", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["踩", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["采", ["䌽","埰","彩","採","睬","綵","踩","采"]],
	["㑩", ["㑩","儸","啰","囉","罗","羅"]],
	["儸", ["㑩","儸","啰","囉","罗","羅"]],
	["啰", ["㑩","儸","啰","囉","罗","羅"]],
	["囉", ["㑩","儸","啰","囉","罗","羅"]],
	["罗", ["㑩","儸","啰","囉","罗","羅"]],
	["羅", ["㑩","儸","啰","囉","罗","羅"]],
	["刘", ["刘","劉","浏","瀏"]],
	["劉", ["刘","劉","浏","瀏"]],
	["浏", ["刘","劉","浏","瀏"]],
	["瀏", ["刘","劉","浏","瀏"]],
	["券", ["券","劵","卷","巻","捲","蜷"]],
	["劵", ["券","劵","卷","巻","捲","蜷"]],
	["卷", ["券","劵","卷","巻","捲","蜷"]],
	["巻", ["券","劵","卷","巻","捲","蜷"]],
	["捲", ["券","劵","卷","巻","捲","蜷"]],
	["蜷", ["券","劵","卷","巻","捲","蜷"]],
	["划", ["划","劃","画","畫"]],
	["劃", ["划","劃","画","畫"]],
	["画", ["划","劃","画","畫"]],
	["畫", ["划","劃","画","畫"]],
	["斗", ["斗","闘","鬥","鬪","鬭"]],
	["闘", ["斗","闘","鬥","鬪","鬭"]],
	["鬥", ["斗","闘","鬥","鬪","鬭"]],
	["鬪", ["斗","闘","鬥","鬪","鬭"]],
	["鬭", ["斗","闘","鬥","鬪","鬭"]],
	["乹", ["乹","乾","亁","干","幹"]],
	["乾", ["乹","乾","亁","干","幹"]],
	["亁", ["乹","乾","亁","干","幹"]],
	["干", ["乹","乾","亁","干","幹"]],
	["幹", ["乹","乾","亁","干","幹"]],
	["図", ["図","图","圖"]],
	["图", ["図","图","圖"]],
	["圖", ["図","图","圖"]],
	["历", ["历","暦","曆","歴","歷"]],
	["暦", ["历","暦","曆","歴","歷"]],
	["曆", ["历","暦","曆","歴","歷"]],
	["歴", ["历","暦","曆","歴","歷"]],
	["歷", ["历","暦","曆","歴","歷"]],
	["面", ["面","麪","麵","麺"]],
	["麪", ["面","麪","麵","麺"]],
	["麵", ["面","麪","麵","麺"]],
	["麺", ["面","麪","麵","麺"]],
	["讃", ["讃","讚","賛","贊","赞","赞"]],
	["讚", ["讃","讚","賛","贊","赞","赞"]],
	["賛", ["讃","讚","賛","贊","赞","赞"]],
	["贊", ["讃","讚","賛","贊","赞","赞"]],
	["赞", ["讃","讚","賛","贊","赞","赞"]],
	["发", ["发","發","髪","髮"]],
	["發", ["发","發","髪","髮"]],
	["髪", ["发","發","髪","髮"]],
	["髮", ["发","發","髪","髮"]],
	["侭", ["侭","儘","尽","盡"]],
	["儘", ["侭","儘","尽","盡"]],
	["尽", ["侭","儘","尽","盡"]],
	["盡", ["侭","儘","尽","盡"]],
	["優", ["優","忧","忧","憂"]],
	["忧", ["優","忧","忧","憂"]],
	["憂", ["優","忧","忧","憂"]],
	["俱", ["俱","倶","具"]],
	["倶", ["俱","倶","具"]],
	["具", ["俱","倶","具"]],
	["の", ["の","之","得","的"]],
	["之", ["の","之","得","的"]],
	["得", ["の","之","得","的"]],
	["的", ["の","之","得","的"]],
	["と", ["と","与","與"]],
	["与", ["と","与","與"]],
	["與", ["と","与","與"]],
	["他", ["他","佗","她","它","牠","祂"]],
	["佗", ["他","佗","她","它","牠","祂"]],
	["她", ["他","佗","她","它","牠","祂"]],
	["它", ["他","佗","她","它","牠","祂"]],
	["牠", ["他","佗","她","它","牠","祂"]],
	["祂", ["他","佗","她","它","牠","祂"]],
	["只", ["只","支","枝","隻"]],
	["支", ["只","支","枝","隻"]],
	["枝", ["只","支","枝","隻"]],
	["隻", ["只","支","枝","隻"]],
	["泡", ["泡","炮","炰","砲"]],
	["炮", ["泡","炮","炰","砲"]],
	["炰", ["泡","炮","炰","砲"]],
	["砲", ["泡","炮","炰","砲"]],
	["㊥", ["㊥","中","仲"]],
	["中", ["㊥","中","仲"]],
	["仲", ["㊥","中","仲"]],
	["元", ["元","原"]],
	["原", ["元","原"]],
	["回", ["回","廻","迴"]],
	["廻", ["回","廻","迴"]],
	["迴", ["回","廻","迴"]],
	["辟", ["辟","避","闢"]],
	["避", ["辟","避","闢"]],
	["闢", ["辟","避","闢"]],
	["卤", ["卤","滷","魯","鲁","鹵"]],
	["滷", ["卤","滷","魯","鲁","鹵"]],
	["魯", ["卤","滷","魯","鲁","鹵"]],
	["鲁", ["卤","滷","魯","鲁","鹵"]],
	["鹵", ["卤","滷","魯","鲁","鹵"]],
	["儓", ["儓","台","檯","臺","颱"]],
	["台", ["儓","台","檯","臺","颱"]],
	["檯", ["儓","台","檯","臺","颱"]],
	["臺", ["儓","台","檯","臺","颱"]],
	["颱", ["儓","台","檯","臺","颱"]],
	["宻", ["宻","密","祕","秘"]],
	["密", ["宻","密","祕","秘"]],
	["祕", ["宻","密","祕","秘"]],
	["秘", ["宻","密","祕","秘"]],
	["謎", ["謎","谜","迷"]],
	["谜", ["謎","谜","迷"]],
	["迷", ["謎","谜","迷"]],
	["沙", ["沙","砂","紗","纱","莎"]],
	["砂", ["沙","砂","紗","纱","莎"]],
	["紗", ["沙","砂","紗","纱","莎"]],
	["纱", ["沙","砂","紗","纱","莎"]],
	["莎", ["沙","砂","紗","纱","莎"]],
	["篇", ["篇","篇","編","编"]],
	["編", ["篇","篇","編","编"]],
	["编", ["篇","篇","編","编"]],
	["冶", ["冶","治"]],
	["治", ["冶","治"]],
	["炼", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["煉", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["練", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["练", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["錬", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["鍊", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["𫔀", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["亚", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["亜", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["亞", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["娅", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["婭", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["桠", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["椏", ["亚","亚","亜","亞","娅","婭","桠","椏"]],
	["塞", ["塞","賽","赛"]],
	["賽", ["塞","賽","赛"]],
	["赛", ["塞","賽","赛"]],
	["籐", ["籐","籘","腾","藤","騰"]],
	["籘", ["籐","籘","腾","藤","騰"]],
	["腾", ["籐","籘","腾","藤","騰"]],
	["藤", ["籐","籘","腾","藤","騰"]],
	["騰", ["籐","籘","腾","藤","騰"]],
	["你", ["你","妳","祢","禰"]],
	["妳", ["你","妳","祢","禰"]],
	["祢", ["你","妳","祢","禰"]],
	["禰", ["你","妳","祢","禰"]],
	["⻞", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["喰", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["蚀", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["蝕", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["食", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["飠", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["飧", ["⻞","喰","蚀","蝕","食","飠","飧"]],
	["玛", ["玛","瑪","馬","马","马"]],
	["瑪", ["玛","瑪","馬","马","马"]],
	["馬", ["玛","瑪","馬","马","马"]],
	["马", ["玛","瑪","馬","马","马"]],
	["餚", ["餚","餚","餸"]],
	["餸", ["餚","餚","餸"]],
	["果", ["果","裸"]],
	["裸", ["果","裸"]],
	["凯", ["凯","凱","凱","鎧","铠"]],
	["凱", ["凯","凱","凱","鎧","铠"]],
	["鎧", ["凯","凱","凱","鎧","铠"]],
	["铠", ["凯","凱","凱","鎧","铠"]],
	["帖", ["帖","貼","贴"]],
	["貼", ["帖","貼","贴"]],
	["贴", ["帖","貼","贴"]],
	["什", ["什","甚"]],
	["甚", ["什","甚"]],
	["联", ["联","聯","连","連","連"]],
	["聯", ["联","聯","连","連","連"]],
	["连", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["連", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["像", ["像","象"]],
	["象", ["像","象"]],
	["借", ["借","藉"]],
	["藉", ["借","藉"]],
	["蕾", ["蕾","雷"]],
	["雷", ["鐳","镭","雷","靁"]],
	["定", ["定","訂","订","釘","钉"]],
	["訂", ["定","訂","订","釘","钉"]],
	["订", ["定","訂","订","釘","钉"]],
	["釘", ["定","訂","订","釘","钉"]],
	["钉", ["定","訂","订","釘","钉"]],
	["向", ["向","嚮"]],
	["嚮", ["向","嚮"]],
	["丝", ["丝","糸","糹","絲"]],
	["糸", ["丝","糸","糹","絲"]],
	["糹", ["丝","糸","糹","絲"]],
	["絲", ["丝","糸","糹","絲"]],
	["桶", ["桶","筒"]],
	["筒", ["桶","筒"]],
	["兹", ["兹","滋","玆","茲"]],
	["滋", ["兹","滋","玆","茲"]],
	["玆", ["兹","滋","玆","茲"]],
	["茲", ["兹","滋","玆","茲"]],
	["吶", ["吶","呐","訥","讷"]],
	["呐", ["吶","呐","訥","讷"]],
	["訥", ["吶","呐","訥","讷"]],
	["讷", ["吶","呐","訥","讷"]],
	["穀", ["穀","糓","谷"]],
	["糓", ["穀","糓","谷"]],
	["谷", ["穀","糓","谷"]],
	["両", ["両","两","俩","倆","兩"]],
	["两", ["両","两","俩","倆","兩"]],
	["俩", ["両","两","俩","倆","兩"]],
	["倆", ["両","两","俩","倆","兩"]],
	["兩", ["両","两","俩","倆","兩"]],
	["帐", ["帐","帳","賬","账"]],
	["帳", ["帐","帳","賬","账"]],
	["賬", ["帐","帳","賬","账"]],
	["账", ["帐","帳","賬","账"]],
	["板", ["板","版","闆"]],
	["版", ["板","版","闆"]],
	["闆", ["板","版","闆"]],
	["呆", ["呆","待","獃"]],
	["待", ["呆","待","獃"]],
	["溶", ["溶","熔","融","螎","鎔","镕"]],
	["熔", ["溶","熔","融","螎","鎔","镕"]],
	["融", ["溶","熔","融","螎","鎔","镕"]],
	["螎", ["溶","熔","融","螎","鎔","镕"]],
	["鎔", ["溶","熔","融","螎","鎔","镕"]],
	["镕", ["溶","熔","融","螎","鎔","镕"]],
	["匯", ["匯","彙","汇"]],
	["彙", ["匯","彙","汇"]],
	["汇", ["匯","彙","汇"]],
	["仏", ["仏","佛","彿"]],
	["佛", ["佛","彿","拂"]],
	["彿", ["佛","彿","拂"]],
	["啊", ["啊","阿"]],
	["阿", ["啊","阿"]],
	["傢", ["傢","家"]],
	["家", ["傢","家"]],
	["暴", ["暴","曝","爆"]],
	["爆", ["暴","曝","爆"]],
	["䋄", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["䋞", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["冈", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["刚", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["剛", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["堈", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["岗", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["岡", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["崗", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["綱", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["網", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["纲", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["缸", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["网", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["鋼", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["钢", ["䋄","䋞","冈","刚","剛","堈","岗","岡","崗","綱","網","纲","缸","网","鋼","钢"]],
	["注", ["注","註"]],
	["註", ["注","註"]],
	["潅", ["潅","灌","貫","贯"]],
	["灌", ["潅","灌","貫","贯"]],
	["貫", ["潅","灌","貫","贯"]],
	["贯", ["潅","灌","貫","贯"]],
	["倒", ["倒","到"]],
	["到", ["倒","到"]],
	["儭", ["儭","平","秤","称","稱","衬","襯"]],
	["平", ["儭","平","秤","称","稱","衬","襯"]],
	["秤", ["儭","平","秤","称","稱","衬","襯"]],
	["称", ["儭","平","秤","称","稱","衬","襯"]],
	["稱", ["儭","平","秤","称","稱","衬","襯"]],
	["衬", ["儭","平","秤","称","稱","衬","襯"]],
	["襯", ["儭","平","秤","称","稱","衬","襯"]],
	["勋", ["勋","勛","勲","勳"]],
	["勛", ["勋","勛","勲","勳"]],
	["勲", ["勋","勛","勲","勳"]],
	["勳", ["勋","勛","勲","勳"]],
	["丽", ["丽","利","莉","麗"]],
	["利", ["丽","利","莉","麗"]],
	["莉", ["丽","利","莉","麗"]],
	["麗", ["丽","利","莉","麗"]],
	["己", ["己","已","巳"]],
	["已", ["己","已","巳"]],
	["巳", ["己","已","巳"]],
	["呵", ["呵","嗬"]],
	["嗬", ["呵","嗬"]],
	["呦", ["呦","哊","哟","唷","唹","喲"]],
	["哊", ["呦","哊","哟","唷","唹","喲"]],
	["哟", ["呦","哊","哟","唷","唹","喲"]],
	["唷", ["呦","哊","哟","唷","唹","喲"]],
	["唹", ["呦","哊","哟","唷","唹","喲"]],
	["喲", ["呦","哊","哟","唷","唹","喲"]],
	["傑", ["傑","婕","杰","洁","潔","絜"]],
	["婕", ["傑","婕","杰","洁","潔","絜"]],
	["杰", ["傑","婕","杰","洁","潔","絜"]],
	["洁", ["傑","婕","杰","洁","潔","絜"]],
	["潔", ["傑","婕","杰","洁","潔","絜"]],
	["絜", ["傑","婕","杰","洁","潔","絜"]],
	["嘻", ["嘻","嬉"]],
	["嬉", ["嘻","嬉"]],
	["嘛", ["嘛","痲","痳","麻"]],
	["痲", ["嘛","痲","痳","麻"]],
	["痳", ["嘛","痲","痳","麻"]],
	["麻", ["嘛","痲","痳","麻"]],
	["犬", ["犬","狗"]],
	["狗", ["犬","狗"]],
	["拂", ["佛","彿","拂"]],
	["亘", ["亘","亙","恆","恒"]],
	["亙", ["亘","亙","恆","恒"]],
	["恆", ["亘","亙","恆","恒"]],
	["恒", ["亘","亙","恆","恒"]],
	["付", ["付","副","附"]],
	["副", ["付","副","附"]],
	["附", ["付","副","附"]],
	["伽", ["伽","加","枷","珈","迦"]],
	["加", ["伽","加","枷","珈","迦"]],
	["枷", ["伽","加","枷","珈","迦"]],
	["珈", ["伽","加","枷","珈","迦"]],
	["迦", ["伽","加","枷","珈","迦"]],
	["福", ["福","褔"]],
	["褔", ["福","褔"]],
	["挨", ["挨","捱"]],
	["捱", ["挨","捱"]],
	["拚", ["拚","拼"]],
	["拼", ["拚","拼"]],
	["漂", ["漂","飃","飄","飘"]],
	["飃", ["漂","飃","飄","飘"]],
	["飄", ["漂","飃","飄","飘"]],
	["飘", ["漂","飃","飄","飘"]],
	["佔", ["佔","占","沾"]],
	["占", ["佔","占","沾"]],
	["沾", ["佔","占","沾"]],
	["气", ["气","気","氣","汽","滊","炁"]],
	["気", ["气","気","氣","汽","滊","炁"]],
	["氣", ["气","気","氣","汽","滊","炁"]],
	["汽", ["气","気","氣","汽","滊","炁"]],
	["滊", ["气","気","氣","汽","滊","炁"]],
	["炁", ["气","気","氣","汽","滊","炁"]],
	["撩", ["撩","辽","遼"]],
	["辽", ["撩","辽","遼"]],
	["遼", ["撩","辽","遼"]],
	["作", ["作","做"]],
	["做", ["作","做"]],
	["捜", ["捜","搜","蒐"]],
	["搜", ["捜","搜","蒐"]],
	["蒐", ["捜","搜","蒐"]],
	["傁", ["傁","叟","叟"]],
	["叟", ["傁","叟","叟"]],
	["榭", ["榭","謝","谢"]],
	["謝", ["榭","謝","谢"]],
	["谢", ["榭","謝","谢"]],
	["型", ["型","形"]],
	["形", ["型","形"]],
	["僱", ["僱","雇","頋","顧","顾"]],
	["雇", ["僱","雇","頋","顧","顾"]],
	["頋", ["僱","雇","頋","顧","顾"]],
	["顧", ["僱","雇","頋","顧","顾"]],
	["顾", ["僱","雇","頋","顧","顾"]],
	["庐", ["庐","廬","芦","蘆"]],
	["廬", ["庐","廬","芦","蘆"]],
	["芦", ["庐","廬","芦","蘆"]],
	["蘆", ["庐","廬","芦","蘆"]],
	["眈", ["眈","耽","躭"]],
	["耽", ["眈","耽","躭"]],
	["躭", ["眈","耽","躭"]],
	["傹", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["竞", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["竟", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["競", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["竸", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["誩", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𥪰", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𧡟", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𧫘", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𧫙", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𧮣", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["𨐼", ["傹","竞","竟","競","竸","誩","𥪰","𧡟","𧫘","𧫙","𧮣","𨐼"]],
	["植", ["植","殖"]],
	["殖", ["植","殖"]],
	["佬", ["佬","姥","老"]],
	["姥", ["佬","姥","老"]],
	["老", ["佬","姥","老"]],
	["倖", ["倖","幸"]],
	["幸", ["倖","幸"]],
	["㠪", ["㠪","巨","炬","矩","鉅","钜"]],
	["巨", ["㠪","巨","炬","矩","鉅","钜"]],
	["炬", ["㠪","巨","炬","矩","鉅","钜"]],
	["矩", ["㠪","巨","炬","矩","鉅","钜"]],
	["鉅", ["㠪","巨","炬","矩","鉅","钜"]],
	["钜", ["㠪","巨","炬","矩","鉅","钜"]],
	["䃛", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["鏈", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["链", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["𧹯", ["䃛","炼","煉","練","练","连","連","錬","鍊","鏈","链","𧹯","𫔀"]],
	["㓥", ["㓥","刴","剁","剐","剮","劏"]],
	["刴", ["㓥","刴","剁","剐","剮","劏"]],
	["剁", ["㓥","刴","剁","剐","剮","劏"]],
	["剐", ["㓥","刴","剁","剐","剮","劏"]],
	["剮", ["㓥","刴","剁","剐","剮","劏"]],
	["劏", ["㓥","刴","剁","剐","剮","劏"]],
	["南", ["南","枏","楠"]],
	["枏", ["南","枏","楠"]],
	["楠", ["南","枏","楠"]],
	["璐", ["璐","路","𡽘","𨱴"]],
	["路", ["璐","路","𡽘","𨱴"]],
	["𡽘", ["璐","路","𡽘","𨱴"]],
	["𨱴", ["璐","路","𡽘","𨱴"]],
	["侂", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["托", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["拓", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["拕", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["拖", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["杔", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["託", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["讬", ["侂","托","拓","拕","拖","杔","託","讬"]],
	["希", ["希","悕","睎","稀"]],
	["悕", ["希","悕","睎","稀"]],
	["睎", ["希","悕","睎","稀"]],
	["稀", ["希","悕","睎","稀"]],
	["囯", ["囯","国","國","帼","幗"]],
	["国", ["囯","国","國","帼","幗"]],
	["國", ["囯","国","國","帼","幗"]],
	["帼", ["囯","国","國","帼","幗"]],
	["幗", ["囯","国","國","帼","幗"]],
	["反", ["反","返"]],
	["返", ["反","返"]],
	["佯", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["扬", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["揚", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["旸", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["暘", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["杨", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["楊", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["炀", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["烊", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["煬", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["阳", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["陽", ["佯","扬","揚","旸","暘","杨","楊","炀","烊","煬","阳","陽"]],
	["來", ["來","来","莱","萊"]],
	["来", ["來","来","莱","萊"]],
	["莱", ["來","来","莱","萊"]],
	["萊", ["來","来","莱","萊"]],
	["保", ["保","堡","緥","葆","褓"]],
	["堡", ["保","堡","緥","葆","褓"]],
	["緥", ["保","堡","緥","葆","褓"]],
	["葆", ["保","堡","緥","葆","褓"]],
	["褓", ["保","堡","緥","葆","褓"]],
	["度", ["度","渡"]],
	["渡", ["度","渡"]],
	["剳", ["剳","扎","札","箚","紮"]],
	["扎", ["剳","扎","札","箚","紮"]],
	["札", ["剳","扎","札","箚","紮"]],
	["箚", ["剳","扎","札","箚","紮"]],
	["紮", ["剳","扎","札","箚","紮"]],
	["堤", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["媞", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["提", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["湜", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["禔", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["緹", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["缇", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["隄", ["堤","媞","提","湜","禔","緹","缇","隄"]],
	["腊", ["腊","臘","蜡","蠟"]],
	["臘", ["腊","臘","蜡","蠟"]],
	["蜡", ["腊","臘","蜡","蠟"]],
	["蠟", ["腊","臘","蜡","蠟"]],
	["郁", ["郁","鬱","𨚼","𨟝"]],
	["鬱", ["郁","鬱","𨚼","𨟝"]],
	["𨚼", ["郁","鬱","𨚼","𨟝"]],
	["𨟝", ["郁","鬱","𨚼","𨟝"]],
	["扞", ["扞","擀","杆","桿"]],
	["擀", ["扞","擀","杆","桿"]],
	["杆", ["扞","擀","杆","桿"]],
	["桿", ["扞","擀","杆","桿"]],
	["脼", ["脼","郎","郞","𥇑"]],
	["郎", ["脼","郎","郞","𥇑"]],
	["郞", ["脼","郎","郞","𥇑"]],
	["𥇑", ["脼","郎","郞","𥇑"]],
	["巴", ["巴","芭"]],
	["芭", ["巴","芭"]],
	["捏", ["捏","涅","湼"]],
	["涅", ["捏","涅","湼"]],
	["湼", ["捏","涅","湼"]],
	["択", ["択","择","擇","沢","泽","澤"]],
	["择", ["択","择","擇","沢","泽","澤"]],
	["擇", ["択","择","擇","沢","泽","澤"]],
	["沢", ["択","择","擇","沢","泽","澤"]],
	["泽", ["択","择","擇","沢","泽","澤"]],
	["澤", ["択","择","擇","沢","泽","澤"]],
	["幵", ["幵","开","開"]],
	["开", ["幵","开","開"]],
	["開", ["幵","开","開"]],
	["佩", ["佩","珮"]],
	["珮", ["佩","珮"]],
	["吁", ["吁","喩","喻","籲","龥"]],
	["喩", ["吁","喩","喻","籲","龥"]],
	["喻", ["吁","喩","喻","籲","龥"]],
	["籲", ["吁","喩","喻","籲","龥"]],
	["龥", ["吁","喩","喻","籲","龥"]],
	["値", ["値","值","直"]],
	["值", ["値","值","直"]],
	["脏", ["脏","臓","臟","贓","赃","髒"]],
	["臓", ["脏","臓","臟","贓","赃","髒"]],
	["臟", ["脏","臓","臟","贓","赃","髒"]],
	["贓", ["脏","臓","臟","贓","赃","髒"]],
	["赃", ["脏","臓","臟","贓","赃","髒"]],
	["髒", ["脏","臓","臟","贓","赃","髒"]],
	["㊤", ["㊤","上"]],
	["上", ["㊤","上"]],
	["㊦", ["㊦","下"]],
	["下", ["㊦","下"]],
	["呼", ["呼","唿"]],
	["唿", ["呼","唿"]],
	["祥", ["祥","詳","详"]],
	["詳", ["祥","詳","详"]],
	["详", ["祥","詳","详"]],
	["妮", ["妮","尼","泥"]],
	["尼", ["妮","尼","泥"]],
	["泥", ["妮","尼","泥"]],
	["克", ["克","剋","尅"]],
	["剋", ["克","剋","尅"]],
	["尅", ["克","剋","尅"]],
	["拨", ["拨","撥","播"]],
	["撥", ["拨","撥","播"]],
	["播", ["拨","撥","播"]],
	["挿", ["挿","插","揷"]],
	["插", ["挿","插","揷"]],
	["揷", ["挿","插","揷"]],
	["丁", ["丁","汀"]],
	["汀", ["丁","汀"]],
	["娜", ["娜","那"]],
	["那", ["娜","那"]],
	["拉", ["拉","菈"]],
	["菈", ["拉","菈"]],
	["林", ["林","淋","玲","琳","鈴","铃"]],
	["淋", ["林","淋","玲","琳","鈴","铃"]],
	["玲", ["林","淋","玲","琳","鈴","铃"]],
	["琳", ["林","淋","玲","琳","鈴","铃"]],
	["鈴", ["林","淋","玲","琳","鈴","铃"]],
	["铃", ["林","淋","玲","琳","鈴","铃"]],
	["名", ["名","銘","铭"]],
	["銘", ["名","銘","铭"]],
	["铭", ["名","銘","铭"]],
	["出", ["出","齣"]],
	["齣", ["出","齣"]],
	["唉", ["唉","欸","誒","诶"]],
	["欸", ["唉","欸","誒","诶"]],
	["誒", ["唉","欸","誒","诶"]],
	["诶", ["唉","欸","誒","诶"]],
	["呣", ["呣","哞"]],
	["哞", ["呣","哞"]],
	["㖿", ["㖿","吔","耶"]],
	["吔", ["㖿","吔","耶"]],
	["耶", ["㖿","吔","耶"]],
	["媚", ["媚","魅"]],
	["魅", ["媚","魅"]],
	["匪", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["扉", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["斐", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["緋", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["绯", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["翡", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["菲", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["蜚", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["誹", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["诽", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["霏", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["非", ["匪","扉","斐","緋","绯","翡","菲","蜚","誹","诽","霏","非"]],
	["叉", ["叉","衩","釵","钗"]],
	["衩", ["叉","衩","釵","钗"]],
	["釵", ["叉","衩","釵","钗"]],
	["钗", ["叉","衩","釵","钗"]],
	["其", ["其","淇","琪","祺"]],
	["淇", ["其","淇","琪","祺"]],
	["琪", ["其","淇","琪","祺"]],
	["祺", ["其","淇","琪","祺"]],
	["坛", ["坛","壇","談","譚","谈","谭"]],
	["壇", ["坛","壇","談","譚","谈","谭"]],
	["談", ["坛","壇","談","譚","谈","谭"]],
	["譚", ["坛","壇","談","譚","谈","谭"]],
	["谈", ["坛","壇","談","譚","谈","谭"]],
	["谭", ["坛","壇","談","譚","谈","谭"]],
	["才", ["才","材","柴"]],
	["材", ["才","材","柴"]],
	["柴", ["才","材","柴"]],
	["唸", ["唸","念"]],
	["念", ["唸","念"]],
	["指", ["指","趾"]],
	["趾", ["指","趾"]],
	["仕", ["仕","士"]],
	["士", ["仕","士"]],
	["娘", ["娘","嬢","孃"]],
	["嬢", ["娘","嬢","孃"]],
	["孃", ["娘","嬢","孃"]],
	["哑", ["哑","唖","啞","痖","瘂"]],
	["唖", ["哑","唖","啞","痖","瘂"]],
	["啞", ["哑","唖","啞","痖","瘂"]],
	["痖", ["哑","唖","啞","痖","瘂"]],
	["瘂", ["哑","唖","啞","痖","瘂"]],
	["仂", ["仂","働","动","動"]],
	["働", ["仂","働","动","動"]],
	["动", ["仂","働","动","動"]],
	["動", ["仂","働","动","動"]],
	["察", ["察","查","査"]],
	["查", ["察","查","査"]],
	["査", ["察","查","査"]],
	["鉃", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["鉄", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["銕", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["鐡", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["鐵", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["铁", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["𨫓", ["鉃","鉄","銕","鐡","鐵","铁","𨫓"]],
	["帰", ["帰","归","歸","皈"]],
	["归", ["帰","归","歸","皈"]],
	["歸", ["帰","归","歸","皈"]],
	["皈", ["帰","归","歸","皈"]],
	["创", ["创","創","疮","瘡"]],
	["創", ["创","創","疮","瘡"]],
	["疮", ["创","創","疮","瘡"]],
	["瘡", ["创","創","疮","瘡"]],
	["拷", ["拷","烤","考"]],
	["烤", ["拷","烤","考"]],
	["考", ["拷","烤","考"]],
	["入", ["入","込"]],
	["込", ["入","込"]],
	["仑", ["仑","伦","侖","倫"]],
	["伦", ["仑","伦","侖","倫"]],
	["侖", ["仑","伦","侖","倫"]],
	["倫", ["仑","伦","侖","倫"]],
	["仔", ["仔","子"]],
	["子", ["仔","子"]],
	["弯", ["弯","彎","湾","灣"]],
	["彎", ["弯","彎","湾","灣"]],
	["湾", ["弯","彎","湾","灣"]],
	["灣", ["弯","彎","湾","灣"]],
	["熒", ["熒","荧","萤","蛍","螢"]],
	["荧", ["熒","荧","萤","蛍","螢"]],
	["萤", ["熒","荧","萤","蛍","螢"]],
	["蛍", ["熒","荧","萤","蛍","螢"]],
	["螢", ["熒","荧","萤","蛍","螢"]],
	["争", ["争","挣","掙","爭"]],
	["挣", ["争","挣","掙","爭"]],
	["掙", ["争","挣","掙","爭"]],
	["爭", ["争","挣","掙","爭"]],
	["涨", ["涨","漲","胀","脹"]],
	["漲", ["涨","漲","胀","脹"]],
	["胀", ["涨","漲","胀","脹"]],
	["脹", ["涨","漲","胀","脹"]],
	["冇", ["冇","无","沒","没","無"]],
	["无", ["冇","无","沒","没","無"]],
	["沒", ["冇","无","沒","没","無"]],
	["没", ["冇","无","沒","没","無"]],
	["無", ["冇","无","沒","没","無"]],
	["吨", ["吨","噸","訰"]],
	["噸", ["吨","噸","訰"]],
	["訰", ["吨","噸","訰"]],
	["勾", ["勾","鈎","鉤","钩"]],
	["鈎", ["勾","鈎","鉤","钩"]],
	["鉤", ["勾","鈎","鉤","钩"]],
	["钩", ["勾","鈎","鉤","钩"]],
	["沈", ["沈","沉"]],
	["沉", ["沈","沉"]],
	["叠", ["叠","畳","疊","迭"]],
	["畳", ["叠","畳","疊","迭"]],
	["疊", ["叠","畳","疊","迭"]],
	["迭", ["叠","畳","疊","迭"]],
	["僵", ["僵","殭","疆","繮","缰","韁"]],
	["殭", ["僵","殭","疆","繮","缰","韁"]],
	["疆", ["僵","殭","疆","繮","缰","韁"]],
	["繮", ["僵","殭","疆","繮","缰","韁"]],
	["缰", ["僵","殭","疆","繮","缰","韁"]],
	["韁", ["僵","殭","疆","繮","缰","韁"]],
	["揹", ["揹","背"]],
	["背", ["揹","背"]],
	["团", ["团","団","團","糰"]],
	["団", ["团","団","團","糰"]],
	["團", ["团","団","團","糰"]],
	["糰", ["团","団","團","糰"]],
	["榚", ["榚","糕"]],
	["糕", ["榚","糕"]],
	["需", ["需","須","须","鬚"]],
	["須", ["需","須","须","鬚"]],
	["须", ["需","須","须","鬚"]],
	["鬚", ["需","須","须","鬚"]],
	["抒", ["抒","紆","紓","纡","纾"]],
	["紆", ["抒","紆","紓","纡","纾"]],
	["紓", ["抒","紆","紓","纡","纾"]],
	["纡", ["抒","紆","紓","纡","纾"]],
	["纾", ["抒","紆","紓","纡","纾"]],
	["州", ["州","洲"]],
	["洲", ["州","洲"]],
	["厂", ["厂","厰","场","場","廠"]],
	["厰", ["厂","厰","场","場","廠"]],
	["场", ["厂","厰","场","場","廠"]],
	["場", ["厂","厰","场","場","廠"]],
	["廠", ["厂","厰","场","場","廠"]],
	["筱", ["筱","筿","篠"]],
	["筿", ["筱","筿","篠"]],
	["篠", ["筱","筿","篠"]],
	["根", ["根","跟"]],
	["跟", ["根","跟"]],
	["曝", ["暴","曝","爆"]],
	["㬅", ["㬅","嫚","曼","漫","熳","蔓"]],
	["嫚", ["㬅","嫚","曼","漫","熳","蔓"]],
	["曼", ["㬅","嫚","曼","漫","熳","蔓"]],
	["漫", ["㬅","嫚","曼","漫","熳","蔓"]],
	["熳", ["㬅","嫚","曼","漫","熳","蔓"]],
	["蔓", ["㬅","嫚","曼","漫","熳","蔓"]],
	["升", ["升","昇","陞"]],
	["昇", ["升","昇","陞"]],
	["陞", ["升","昇","陞"]],
	["獃", ["呆","待","獃"]],
	["烟", ["烟","煙","腌","菸","醃"]],
	["煙", ["烟","煙","腌","菸","醃"]],
	["腌", ["烟","煙","腌","菸","醃"]],
	["菸", ["烟","煙","腌","菸","醃"]],
	["醃", ["烟","煙","腌","菸","醃"]],
	["录", ["录","錄","録","陆","陸"]],
	["錄", ["录","錄","録","陆","陸"]],
	["録", ["录","錄","録","陆","陸"]],
	["陆", ["录","錄","録","陆","陸"]],
	["陸", ["录","錄","録","陆","陸"]],
	["掳", ["掳","擄","虏","虜"]],
	["擄", ["掳","擄","虏","虜"]],
	["虏", ["掳","擄","虏","虜"]],
	["虜", ["掳","擄","虏","虜"]],
	["翘", ["翘","翹","跷","蹺"]],
	["翹", ["翘","翹","跷","蹺"]],
	["跷", ["翘","翹","跷","蹺"]],
	["蹺", ["翘","翹","跷","蹺"]],
	["脚", ["脚","腳","角"]],
	["腳", ["脚","腳","角"]],
	["角", ["脚","腳","角"]],
	["直", ["値","值","直"]],
	["詞", ["詞","词","辞","辭"]],
	["词", ["詞","词","辞","辭"]],
	["辞", ["詞","词","辞","辭"]],
	["辭", ["詞","词","辞","辭"]],
	["义", ["义","意","義"]],
	["意", ["义","意","義"]],
	["義", ["义","意","義"]],
	["哏", ["哏","梗"]],
	["梗", ["哏","梗"]],
	["呎", ["呎","咫","尺"]],
	["咫", ["呎","咫","尺"]],
	["尺", ["呎","咫","尺"]],
	["伶", ["伶","怜","憐"]],
	["怜", ["伶","怜","憐"]],
	["憐", ["伶","怜","憐"]],
	["委", ["委","荽","萎"]],
	["荽", ["委","荽","萎"]],
	["萎", ["委","荽","萎"]],
	["岭", ["岭","岺","嶺","阾","領","领"]],
	["岺", ["岭","岺","嶺","阾","領","领"]],
	["嶺", ["岭","岺","嶺","阾","領","领"]],
	["阾", ["岭","岺","嶺","阾","領","领"]],
	["領", ["岭","岺","嶺","阾","領","领"]],
	["领", ["岭","岺","嶺","阾","領","领"]],
	["决", ["决","決","絕","絶","绝","訣","诀"]],
	["決", ["决","決","絕","絶","绝","訣","诀"]],
	["絕", ["决","決","絕","絶","绝","訣","诀"]],
	["絶", ["决","決","絕","絶","绝","訣","诀"]],
	["绝", ["决","決","絕","絶","绝","訣","诀"]],
	["訣", ["决","決","絕","絶","绝","訣","诀"]],
	["诀", ["决","決","絕","絶","绝","訣","诀"]],
	["岳", ["岳","嶽","𡶦"]],
	["嶽", ["岳","嶽","𡶦"]],
	["𡶦", ["岳","嶽","𡶦"]],
	["受", ["受","授"]],
	["授", ["受","授"]],
	["綫", ["綫","線","线","缐","腺"]],
	["線", ["綫","線","线","缐","腺"]],
	["线", ["綫","線","线","缐","腺"]],
	["缐", ["綫","線","线","缐","腺"]],
	["腺", ["綫","線","线","缐","腺"]],
	["一", ["一","壱","壹"]],
	["壱", ["一","壱","壹"]],
	["壹", ["一","壱","壹"]],
	["慌", ["慌","荒"]],
	["荒", ["慌","荒"]],
	["庭", ["庭","廷"]],
	["廷", ["庭","廷"]],
	["喧", ["喧","宣","暄","諠"]],
	["宣", ["喧","宣","暄","諠"]],
	["暄", ["喧","宣","暄","諠"]],
	["諠", ["喧","宣","暄","諠"]],
	["掠", ["掠","略","畧"]],
	["略", ["掠","略","畧"]],
	["畧", ["掠","略","畧"]],
	["䇳", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["牋", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["笺", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["签", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["箋", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["簽", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["籖", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["籤", ["䇳","牋","笺","签","箋","簽","籖","籤"]],
	["么", ["么","幺","庅","麼","麽"]],
	["幺", ["么","幺","庅","麼","麽"]],
	["庅", ["么","幺","庅","麼","麽"]],
	["麼", ["么","幺","庅","麼","麽"]],
	["麽", ["么","幺","庅","麼","麽"]],
	["杧", ["杧","芒","茫"]],
	["芒", ["杧","芒","茫"]],
	["茫", ["杧","芒","茫"]],
	["趯", ["趯","跃","躍"]],
	["跃", ["趯","跃","躍"]],
	["躍", ["趯","跃","躍"]],
	["㳽", ["㳽","弥","彌","瀰"]],
	["弥", ["㳽","弥","彌","瀰"]],
	["彌", ["㳽","弥","彌","瀰"]],
	["瀰", ["㳽","弥","彌","瀰"]],
	["抹", ["抹","袜","襪"]],
	["袜", ["抹","袜","襪"]],
	["襪", ["抹","袜","襪"]],
	["䆫", ["䆫","囪","囱","窓","窗","窻"]],
	["囪", ["䆫","囪","囱","窓","窗","窻"]],
	["囱", ["䆫","囪","囱","窓","窗","窻"]],
	["窓", ["䆫","囪","囱","窓","窗","窻"]],
	["窗", ["䆫","囪","囱","窓","窗","窻"]],
	["窻", ["䆫","囪","囱","窓","窗","窻"]],
	["函", ["函","凾","涵"]],
	["凾", ["函","凾","涵"]],
	["涵", ["函","凾","涵"]],
	["悚", ["悚","耸","聳"]],
	["耸", ["悚","耸","聳"]],
	["聳", ["悚","耸","聳"]],
	["洛", ["洛","落"]],
	["落", ["洛","落"]],
	["标", ["标","標","鏢","鑣","镖","镳"]],
	["標", ["标","標","鏢","鑣","镖","镳"]],
	["鏢", ["标","標","鏢","鑣","镖","镳"]],
	["鑣", ["标","標","鏢","鑣","镖","镳"]],
	["镖", ["标","標","鏢","鑣","镖","镳"]],
	["镳", ["标","標","鏢","鑣","镖","镳"]],
	["怪", ["怪","恠"]],
	["恠", ["怪","恠"]],
	["並", ["並","併","倂","并","幷","竝","𠀤"]],
	["併", ["並","併","倂","并","幷","竝","𠀤"]],
	["倂", ["並","併","倂","并","幷","竝","𠀤"]],
	["并", ["並","併","倂","并","幷","竝","𠀤"]],
	["幷", ["並","併","倂","并","幷","竝","𠀤"]],
	["竝", ["並","併","倂","并","幷","竝","𠀤"]],
	["𠀤", ["並","併","倂","并","幷","竝","𠀤"]],
	["鶇", ["鶇","鶫","鸫","𪂝"]],
	["鶫", ["鶇","鶫","鸫","𪂝"]],
	["鸫", ["鶇","鶫","鸫","𪂝"]],
	["𪂝", ["鶇","鶫","鸫","𪂝"]],
	["鐳", ["鐳","镭","雷","靁"]],
	["镭", ["鐳","镭","雷","靁"]],
	["靁", ["鐳","镭","雷","靁"]],
	["白", ["白","鉑","铂"]],
	["鉑", ["白","鉑","铂"]],
	["铂", ["白","鉑","铂"]],
	["吊", ["吊","弔"]],
	["弔", ["吊","弔"]],
	["戒", ["戒","誡","诫","𢌵"]],
	["誡", ["戒","誡","诫","𢌵"]],
	["诫", ["戒","誡","诫","𢌵"]],
	["𢌵", ["戒","誡","诫","𢌵"]],
	["侯", ["侯","候","𠊱","𠋫"]],
	["候", ["侯","候","𠊱","𠋫"]],
	["𠊱", ["侯","候","𠊱","𠋫"]],
	["𠋫", ["侯","候","𠊱","𠋫"]],
	["訓", ["訓","训","馴","驯"]],
	["训", ["訓","训","馴","驯"]],
	["馴", ["訓","训","馴","驯"]],
	["驯", ["訓","训","馴","驯"]],
	["姆", ["姆","母"]],
	["母", ["姆","母"]],
	["堀", ["堀","窟"]],
	["窟", ["堀","窟"]],
]);

