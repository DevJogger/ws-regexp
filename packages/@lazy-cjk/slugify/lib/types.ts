import { EnumPinyinMode, EnumPinyinType } from '@lazy-cjk/cns-11643/lib/types';

export interface IOptionsSlugify
{
	separatorRegexp?: RegExp,
	/**
	 * @default `-`
	 */
	separator?: string,

	deburr?: boolean,

	upperCaseExtra?: boolean,
	lowerCaseExtra?: boolean,
	lowerCase?: boolean,
	upperFirst?: boolean,
	upperCase?: boolean,

	trimRegexp?: RegExp,

	allowEmptyResult?: boolean,

	emoji?: boolean,
	/**
	 * @default true
	 */
	transliterate?: boolean,
	/**
	 * @default true
	 */
	cjk?: boolean,

	maxLength?: number,

	chineseOptions?: {
		useTransliteration?: boolean,
		pinyinMode?: EnumPinyinMode,
		pinyinType?: EnumPinyinType,
	},
}

