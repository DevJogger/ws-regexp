
export const katakanaRegex = new RegExp(
	'(' +
	'[' +
	'\\u30a1-\\u30f4' + // ァ～ヴ
	'\\u30f7-\\u30fa' + // ヷ～ヺ
	'\\u30fd-\\u30ff' + // ヽ～ヿ
	'\\u31f0-\\u31ff' + // ㇰ～ㇿ
	']' +
	'|' +
	'\\ud869\\udf08\\u3099' + // 𪜈゙
	'|' +
	'\\ud869\\udf08' + // 𪜈
	'|' +
	'\\ud82c\\udc00' + // 𛀀
	')',
	'g',
);

export const hiraganaRegex = new RegExp(
	'(' +
	'[' +
	'\\u3041-\\u3094' + // ぁ～ゔ
	'\\u309d-\\u309f' + // ゝ～ゟ
	']' +
	'|' +
	'\\ud82c\\udc01' + // 𛀁
	')',
	'g',
);

export const specialHiraganizationTable = {
	'ヿ': 'こと',
	'𪜈': 'とも',
	'𪜈゙': 'ども',
	'ヷ': 'わ゙',
	'ヸ': 'ゐ゙',
	'ヹ': 'ゑ゙',
	'ヺ': 'を゙',
	'𛀀': 'え',
	'ㇰ': 'く',
	'ㇱ': 'し',
	'ㇲ': 'す',
	'ㇳ': 'と',
	'ㇴ': 'ぬ',
	'ㇵ': 'は',
	'ㇶ': 'ひ',
	'ㇷ': 'ふ',
	'ㇸ': 'へ',
	'ㇹ': 'ほ',
	'ㇺ': 'む',
	'ㇻ': 'ら',
	'ㇼ': 'り',
	'ㇽ': 'る',
	'ㇾ': 'れ',
	'ㇿ': 'ろ',
};

export const specialKatakanizationTable = {
	'ゟ': 'ヨリ',
	'𛀁': 'エ',
};

const chr = String.fromCharCode;
const ord = function (char)
{
	return char.charCodeAt(0);
};

export function hiraganize(string: string)
{
	return string.replace(katakanaRegex, function (katakana)
	{
		if (katakana.match(/^[\u30a1-\u30f4\u30fd\u30fe]$/))
		{
			return chr(ord(katakana) - ord('ァ') + ord('ぁ'));
		}
		else if (specialHiraganizationTable[katakana])
		{
			return specialHiraganizationTable[katakana];
		}
	});
}

export function katakanize(string: string)
{
	return string.replace(hiraganaRegex, function (hiragana)
	{
		if (hiragana.match(/^[\u3041-\u3094\u309d\u309e]$/))
		{
			return chr(ord(hiragana) - ord('ぁ') + ord('ァ'));
		}
		else if (specialKatakanizationTable[hiragana])
		{
			return specialKatakanizationTable[hiragana];
		}
	});
}

