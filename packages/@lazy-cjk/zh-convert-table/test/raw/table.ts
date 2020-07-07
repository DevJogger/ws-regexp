/**
 * Created by user on 2020/5/22.
 */

import _table_cn2tw from 'chinese_convert/cn2tw';
import _table_tw2cn from 'chinese_convert/tw2cn';

import { wiki_s2t_v2, wiki_t2s_v2 } from './wikipedia';
import { ITable } from '../../lib/types';
import table_same from '../../lib/table/table_same';

export let table_cn2tw: ITable = Object.assign(_table_cn2tw, wiki_s2t_v2);

export let table_tw2cn: ITable = Object.assign(_table_tw2cn, wiki_t2s_v2);

if (1)
{
	/**
	 * 以下用來 reset 排序用
	 */

	[
		// 從轉換表中刪除的字
		'像',
		'象',

		'剷',
		'鏟',
		'铲',
		'刬',
		'剗',

	].forEach(function (v)
	{
		delete table_tw2cn[v];
		delete table_cn2tw[v];
	});

	[
		// 從 簡體轉換表內刪除的字
	].forEach(function (v)
	{
		delete table_cn2tw[v];
	});

	[
		// 從繁體轉換表內刪除的字

		'煇',

	].forEach(function (v)
	{
		delete table_tw2cn[v];
	});
}

/**
 * 簡轉繁
 */
table_cn2tw = Object.assign(table_cn2tw, {
	'恶': '惡',
	'苏': '蘇',
	'壳': '殻',
	'馆': '館',
	'里': '裡',
	'后': '後',
	'当': '當',
	'锺': '鍾',
	'钟': '鐘',
	'凃': '塗',
	'涂': '涂',
	'㑩': '儸',
	'罗': '羅',
	'啰': '囉',
	'国': '國',
	'验': '驗',
	'准': '準',

	//'历': '曆',
	'历': '歷',

	'刹': '剎',
	'讬': '託',

	'纤': '纖',

	'𫔀': '鍊',
	'炼': '煉',

	'恒': '恆',

	'畲': '畲',

	'复': '復',

	'钜': '鉅',

	'谑': '謔',
	'谘': '諮',

	'干': '幹',

	'线': '線',
	'缐': '線',

	'尽': '盡',

	'处': '處',

	'面': '麵',

	'舍': '捨',

	'松': '鬆',

	'𫔮': '閒',

	//'象': '象',

	'啮': '齧',

	'赃': '贓',

	'咤': '吒',

	'痳': '痲',

	//'荡': '盪',
	'荡': '蕩',

	'墙': '牆',

	'占': '佔',

	'借': '藉',

	'制': '製',

	'征': '徵',

	'冲': '衝',

	'喂': '餵',

	'只': '隻',

	'炮': '砲',

	'奸': '姦',

	'困': '睏',

	'志': '誌',

	'布': '佈',

	'鳄': '鱷',

	'卤': '滷',

	'系': '繫',

	'分': '份',

	'梁': '樑',

	'鉴': '鑑',

	'䌽': '綵',

	'谷': '穀',

	'板': '闆',

	'注': '註',

	'克': '剋',

	'唇': '脣',

	'𪸩': '煇',

});

/**
 * 繁轉簡
 */
table_tw2cn = Object.assign(table_tw2cn, {
	'殻': '壳',
	'殼': '壳',
	'館': '馆',
	'後': '后',
	'儅': '儅',
	'噹': '当',
	'鍾': '锺',
	'鐘': '钟',
	'㑹': '会',
	'塗': '凃',
	'涂': '涂',
	'儸': '㑩',
	'羅': '罗',
	'囉': '啰',
	'國': '国',

	'剎': '刹',
	'託': '讬',

	'鍊': '炼',
	'錬': '炼',
	'煉': '炼',

	'壞': '坏',
	'壊': '坏',

	'佘': '佘',
	'畲': '畲',



	'丑': '丑',
	'么': '么',
	'几': '几',
	'后': '后',
	'斗': '斗',
	'艸': '艸',
	'干': '干',
	'虫': '虫',
	'岳': '岳',
	'卜': '卜',
	'于': '于',
	'里': '里',

	'鉅': '钜',

	'禦': '御',

	'謔': '谑',

	'餘': '馀',

	'范': '范',
	'朴': '朴',
	'咨': '咨',
	'諮': '谘',

	'齣': '齣',

	'線': '线',
	'綫': '线',

	'儘': '尽',
	'盡': '尽',

	'划': '划',

	'凈': '净',

	'杰': '杰',

	'余': '余',
	'面': '面',

	'舍': '舍',

	'松': '松',

	//'像': '象',
	//'象': '象',

	'云': '云',

	'嚙': '啮',
	'齧': '啮',

	'咸': '咸',

	'吒': '吒',

	'折': '折',

	'同': '同',
	'胡': '胡',

	'症': '症',

	'郁': '郁',

	'采': '采',
	'栖': '栖',

	'踪': '踪',

	'昵': '昵',

	'厘': '厘',

	'痲': '痳',
	'痳': '痳',

	'怜': '怜',

	'盪': '荡',
	'蕩': '荡',

	'悽': '悽',

	'牆': '墙',
	'墻': '墙',

	'佔': '占',
	'占': '占',

	'藉': '借',
	'借': '借',

	'噸': '噸',
	'吨': '吨',

	'製': '制',
	'制': '制',

	'徵': '征',
	'征': '征',

	'向': '向',

	'餵': '喂',
	'喂': '喂',

	'隻': '只',
	'只': '只',

	'困': '困',

	'志': '志',

	'佈': '布',
	'布': '布',

	'鱷': '鳄',
	'鰐': '鳄',

	'鹵': '卤',
	'滷': '卤',

	'系': '系',

	'份': '分',
	'分': '分',

	'梁': '梁',
	'樑': '梁',

	'綵': '䌽',

	'谷': '谷',
	'穀': '谷',

	'板': '板',

	'彙': '汇',
	'匯': '汇',

	'祢': '祢',

	'注': '注',

	'恒': '恒',
	'恆': '恒',

	'晒': '晒',
	'杆': '杆',

	'坂': '坂',

	'克': '克',

	'咏': '咏',

	'袜': '袜',

});

[
	// 從轉換表中刪除的字
	//'処',
	//'佘',
	'畲',
	'氹',
	'凼',
	'靣',

	'彪',
	'尨',
	'狵',
].forEach(function (v)
{
	delete table_tw2cn[v];
	delete table_cn2tw[v];
});

[
	// 從 簡體轉換表內刪除的字
	'鉅',
].forEach(function (v)
{
	delete table_cn2tw[v];
});

[
	// 從繁體轉換表內刪除的字
	'钜',
	// 加入 wikipedia.ts 後 產生的冷門字
	'党',
	'万',
	'与',
].forEach(function (v)
{
	delete table_tw2cn[v];
});

Object
	.entries({
		'餵': '𫗭',
		'餧': '𫗪',

		'淨': '净',

		'處': '处',

		'憂': '忧',
		'優': '优',

		'煙': '烟',

		'綫': '线',
		'線': '缐',

		'貳': '贰',

		// 以防萬一 因為 opencc 選用的字是 新字體 的 気
		'氣': '气',

		'咸': '鹹',

		'剗': '刬',
		'鏟': '铲',

		'盤': '盘',

		'採': '采',

		'棲': '栖',

		'暱': '昵',

		'繨': '𫄤',

		'剮': '剐',

		'劏': '㓥',

		'瀰': '㳽',

		'箋': '笺',

		'嫻': '娴',

	})
	.forEach(function (v)
	{
		let [t, s] = v;

		table_tw2cn[t] = s;
		table_cn2tw[s] = t;
	})
;

table_same.forEach(function (v)
{
	table_tw2cn[v] = v;
	table_cn2tw[v] = v;
});

