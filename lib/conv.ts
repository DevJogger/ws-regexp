/**
 * Created by user on 2018/5/5/005.
 */

import { IOptions } from 'cjk-conv/lib/zh/table/index';
import zhTable = require('cjk-conv/lib/zh/table/index');
import { _re_cjk_conv } from './util';

//console.log(cjkConv.zhTable.auto('魯'));

export function zhTableAutoGreedyTable(s: string, options: IOptions = {})
{
	// @ts-ignore
	options.greedyTable = true;
	return zhTable.auto(s, options)
}

export function _word_zh_core(search: string, skip?: string, zhTableFn = zhTable.auto)
{
	return search.replace(_re_cjk_conv('ug'), function (char)
	{
		if (skip && skip.indexOf(char) != -1)
		{
			return char;
		}

		let a = zhTableFn(char);

		return a.length > 1 ? '[' + a.join('') + ']' : a[0];
	});
}

export function _word_zh_core2(search: string, skip?: string, zhTableFn = zhTable.auto)
{
	return search.replace(_re_cjk_conv('ug'), function (char)
	{
		if (skip && skip.indexOf(char) != -1)
		{
			return char;
		}

		let a = zhTableFn(char);

		return a.join('');
	});
}

export default exports as typeof import('./conv');
