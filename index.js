'use strict';

var extend = require('extend');

var japanese = {};

japanese.katakanaRegex = new RegExp(
	'(' +
		'[' +
			'\\u30a1-\\u30f4' + // ァ～ヴ
			'\\u30f7-\\u30fa' + // ヷ～ヺ
			'\\u30fd-\\u30ff' + // ヽ～ヿ
		']' +
	'|' +
		'\\ud869\\udf08\\u3099' + // 𪜈゙
	'|' +
		'\\ud869\\udf08' + // 𪜈
	')',
'g');

japanese.hiraganaRegex = new RegExp(
	'[' +
		'\\u3041-\\u3094' + // ぁ～ゔ
		'\\u309d-\\u309f' + // ゝ～ゟ
	']',
'g');

japanese.specialHiraganizationTable = {
	'ヿ': 'こと',
	'𪜈': 'とも',
	'𪜈゙': 'ども',
	'ヷ': 'わ゙',
	'ヸ': 'ゐ゙',
	'ヹ': 'ゑ゙',
	'ヺ': 'を゙',
};

japanese.specialKatakanizationTable = {
	'ゟ': 'ヨリ',
};

japanese.romanizationTable = {
	'あ': 'a',
	'い': 'i',
	'う': 'u',
	'え': 'e',
	'お': 'o',
	'か': 'ka',
	'き': 'ki',
	'く': 'ku',
	'け': 'ke',
	'こ': 'ko',
	'さ': 'sa',
	'し': 'si',
	'す': 'su',
	'せ': 'se',
	'そ': 'so',
	'た': 'ta',
	'ち': 'ti',
	'つ': 'tu',
	'て': 'te',
	'と': 'to',
	'な': 'na',
	'に': 'ni',
	'ぬ': 'nu',
	'ね': 'ne',
	'の': 'no',
	'は': 'ha',
	'ひ': 'hi',
	'ふ': 'hu',
	'へ': 'he',
	'ほ': 'ho',
	'ま': 'ma',
	'み': 'mi',
	'む': 'mu',
	'め': 'me',
	'も': 'mo',
	'や': 'ya',
	'ゆ': 'yu',
	'よ': 'yo',
	'ら': 'ra',
	'り': 'ri',
	'る': 'ru',
	'れ': 're',
	'ろ': 'ro',
	'わ': 'wa',
	'ゐ': 'wi',
	'ゑ': 'we',
	'を': 'wo',
	'ん': 'n',
	'が': 'ga',
	'ぎ': 'gi',
	'ぐ': 'gu',
	'げ': 'ge',
	'ご': 'go',
	'ざ': 'za',
	'じ': 'zi',
	'ず': 'zu',
	'ぜ': 'ze',
	'ぞ': 'zo',
	'だ': 'da',
	'ぢ': 'di',
	'づ': 'du',
	'で': 'de',
	'ど': 'do',
	'ば': 'ba',
	'び': 'bi',
	'ぶ': 'bu',
	'べ': 'be',
	'ぼ': 'bo',
	'ゔ': 'vu',
	'ぱ': 'pa',
	'ぴ': 'pi',
	'ぷ': 'pu',
	'ぺ': 'pe',
	'ぽ': 'po',
	'きゃ': 'kya',
	'きゅ': 'kyu',
	'きぇ': 'kye',
	'きょ': 'kyo',
	'しゃ': 'sya',
	'しゅ': 'syu',
	'しぇ': 'sye',
	'しょ': 'syo',
	'ちゃ': 'tya',
	'ちゅ': 'tyu',
	'ちぇ': 'tye',
	'ちょ': 'tyo',
	'にゃ': 'nya',
	'にゅ': 'nyu',
	'にぇ': 'nye',
	'にょ': 'nyo',
	'ひゃ': 'hya',
	'ひゅ': 'hyu',
	'ひぇ': 'hye',
	'ひょ': 'hyo',
	'みゃ': 'mya',
	'みゅ': 'my',
	'みぇ': 'mye',
	'みょ': 'myo',
	'りゃ': 'rya',
	'りゅ': 'ryu',
	'りぇ': 'rye',
	'りょ': 'ryo',
	'ぎゃ': 'gya',
	'ぎゅ': 'gyu',
	'ぎぇ': 'gye',
	'ぎょ': 'gyo',
	'じゃ': 'zya',
	'じゅ': 'zyu',
	'じぇ': 'zye',
	'じょ': 'zyo',
	'ぢゃ': 'dya',
	'ぢゅ': 'dyu',
	'ぢぇ': 'dye',
	'ぢょ': 'dyo',
	'びゃ': 'bya',
	'びゅ': 'byu',
	'びぇ': 'bye',
	'びょ': 'byo',
	'ゔぁ': 'va',
	'ゔぃ': 'vi',
	'ゔぇ': 've',
	'ゔぉ': 'vo',
	'ぴゃ': 'pya',
	'ぴゅ': 'pyu',
	'ぴぇ': 'pye',
	'ぴょ': 'pyo',
	'てゃ': 'tea',
	'てぃ': 'tei',
	'てゅ': 'teu',
	'てぇ': 'tee',
	'てょ': 'teo',
	'つぁ': 'tua',
	'つぃ': 'tui',
	'つぇ': 'tue',
	'つぉ': 'tuo',
	'づぁ': 'dua',
	'づぃ': 'dui',
	'づぇ': 'due',
	'づぉ': 'duo',
	'ふぁ': 'hua',
	'ふぃ': 'hui',
	'ふぇ': 'hue',
	'ふぉ': 'huo',
	'いぇ': 'ye',
	'くゎ': 'kwa',
	'ぐゎ': 'gwa',
	'ー': '-',
	'ぁ': 'a',
	'ぃ': 'i',
	'ぅ': 'u',
	'ぇ': 'e',
	'ぉ': 'o',
	'ゃ': 'ya',
	'ゅ': 'yu',
	'ょ': 'yo',
	'っ': 'tu',
	'ゎ': 'wa',
	'ヵ': 'ka',
	'ヶ': 'ke',
};

japanese.defaultRomanizationConfig = {
	'し': 'shi',
	'ち': 'chi',
	'つ': 'tsu',
	'ふ': 'fu',
	'じ': 'ji',
	'ぢ': 'ji',
	'づ': 'zu',
	'おう': 'ō',
	'んあ': 'n\'a',
	'んば': 'nba',
	'っち': 'tchi',
	'ゐ': 'i',
	'を': 'o',
	diacritical: true,
	punctuation: true,
};

japanese.romanizationConfigs = {
	kunrei: {
		'し': 'si',
		'ち': 'ti',
		'つ': 'tu',
		'ふ': 'hu',
		'じ': 'zi',
		'ぢ': 'zi',
		'おう': 'ô',
		'っち': 'tti',
	},
	nihon: {
		'し': 'si',
		'ち': 'ti',
		'つ': 'tu',
		'ふ': 'hu',
		'じ': 'di',
		'ぢ': 'di',
		'おう': 'ô',
		'っち': 'tti',
		'ゐ': 'wi',
		'を': 'wo',
	},
};

var chr = String.fromCharCode;
var ord = function (char) {
	return char.charCodeAt(0);
};

japanese.hiraganize = function (string) {
	return string.replace(japanese.katakanaRegex, function (katakana) {
		if (katakana.match(/^[\u30a1-\u30f4\u30fd\u30fe]$/)) {
			return chr(ord(katakana) - ord('ァ') + ord('ぁ'));
		} else if (japanese.specialHiraganizationTable[katakana]) {
			return japanese.specialHiraganizationTable[katakana];
		}
	});
};

japanese.katakanize = function (string) {
	return string.replace(japanese.hiraganaRegex, function (hiragana) {
		if (hiragana.match(/^[\u3041-\u3094\u309d\u309e]$/)) {
			return chr(ord(hiragana) - ord('ぁ') + ord('ァ'));
		} else if (japanese.specialKatakanizationTable[hiragana]) {
			return japanese.specialKatakanizationTable[hiragana];
		}
	});
};

japanese.romanize = function (string, config) {
	if (typeof config === 'undefined') {
		config = 'hepburn';
	}

	if (typeof config === 'string') {
		config = japanese.romanizationConfigs[config];

		if (typeof config === 'undefined') {
			throw new ReferenceError('Romanization method "' + config + '" is undefined');
		}
	}

	if (typeof config === 'object') {
		config = extend({}, japanese.defaultRomanizationConfig, config);
	} else {
		throw new Error('You specified unknown config to japanese.romanize');
	}

	var table = extend({}, japanese.romanizationTable);

	if (config['し'] === 'shi') {
		extend(table, {
			'し': 'shi',
			'しゃ': 'sha',
			'しゅ': 'shu',
			'しぇ': 'she',
			'しょ': 'sho',
		});
	}

	if (config['ち'] === 'chi') {
		extend(table, {
			'ち': 'chi',
			'ちゃ': 'cha',
			'ちゅ': 'chu',
			'ちぇ': 'che',
			'ちょ': 'cho',
		});
	}

	if (config['つ'] === 'tsu') {
		extend(table, {
			'つ': 'tsu',
			'つぁ': 'tsa',
			'つぃ': 'tsi',
			'つぇ': 'tse',
			'つぉ': 'tso',
		});
	}

	if (config['ふ'] === 'fu') {
		extend(table, {
			'ふ': 'fu',
			'ふぁ': 'fa',
			'ふぃ': 'fi',
			'ふぇ': 'fe',
			'ふぉ': 'fo',
		});
	}

	if (config['じ'] === 'ji') {
		extend(table, {
			'じ': 'ji',
			'じゃ': 'ja',
			'じゅ': 'ju',
			'じぇ': 'je',
			'じょ': 'jo',
		});
	}

	if (config['ぢ'] === 'ji') {
		extend(table, {
			'ぢ': 'ji',
			'ぢゃ': 'ja',
			'ぢゅ': 'ju',
			'ぢぇ': 'je',
			'ぢょ': 'jo',
		});
	}

	if (config['ぢ'] === 'zi') {
		extend(table, {
			'ぢ': 'zi',
			'ぢゃ': 'zia',
			'ぢゅ': 'ziu',
			'ぢぇ': 'zie',
			'ぢょ': 'zio',
		});
	}

	if (config['づ'] === 'zu') {
		extend(table, {
			'づ': 'zu',
			'づぁ': 'zua',
			'づぃ': 'zui',
			'づぇ': 'zue',
			'づぉ': 'zuo',
		});
	}

	if (config['ゐ'] === 'i') {
		extend(table, {
			'ゐ': 'i',
			'ゑ': 'e',
		});
	}

	if (config['を'] === 'o') {
		extend(table, {
			'を': 'o',
		});
	}

	return config;
};

module.exports = japanese;
