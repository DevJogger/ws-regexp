/**
 * Created by user on 2019/7/26.
 */

import { array_unique_overwrite } from 'array-hyper-unique';
import { KEY_JP, KEY_ZHT, KEY_ZHS, IKEY_FROM_TO } from '@lazy-cjk/jp-table-convert/lib/types';
import { TABLE, TABLE_SAFE } from '@lazy-cjk/jp-table-convert/lib/table';

export interface IOptions
{
	safe?: boolean,
	includeSelf?: boolean,
}

export function _fromA2B(char: string, from: IKEY_FROM_TO, to: IKEY_FROM_TO, options: IOptions = {})
{
	const _table = options && options.safe ? TABLE_SAFE : TABLE;

	if (_table[from] && _table[to])
	{
		let list: string[] = [];

		if (_table[from][char])
		{
			if (_table[from][char][to])
			{
				list.push(_table[from][char][to]);
			}

			Object.values(_table[to])
				.forEach(row => {

					if (row[from] === char && row[to])
					{
						list.push(row[to]);
					}

				})
			;

			if (options && options.includeSelf)
			{
				list.push(char);
			}

			list = array_unique_overwrite(list);
		}

		return list
	}

	throw new RangeError(`${from}, ${to} is not exists in TABLE`)
}

export function jp2zht(char: string, options?: IOptions)
{
	return _fromA2B(char, KEY_JP, KEY_ZHT, options)
}

export function jp2zhs(char: string, options?: IOptions)
{
	return _fromA2B(char, KEY_JP, KEY_ZHS, options)
}

export function zht2jp(char: string, options?: IOptions)
{
	return _fromA2B(char, KEY_ZHT, KEY_JP, options)
}

export function zhs2jp(char: string, options?: IOptions)
{
	return _fromA2B(char, KEY_ZHS, KEY_JP, options)
}

export function zh2jp(char: string, options?: IOptions)
{
	let arr = zht2jp(char, options)
		.concat(zhs2jp(char, options));

	return array_unique_overwrite(arr)
}

export function jp2zh(char: string, options?: IOptions)
{
	let arr = jp2zht(char, options)
		.concat(jp2zhs(char, options));

	return array_unique_overwrite(arr)
}

export function lazyAll(char: string, options?: IOptions)
{
	let arr = zh2jp(char, options)
		.reduce((a, b) => {

			a.push(b, ...jp2zh(b, options));

			return a;
		}, [] as string[])
		.concat(jp2zh(char, options)
			.reduce((a, b) => {

				a.push(b, ...zh2jp(b, options));

				return a;
			}, [] as string[]))
	;

	return array_unique_overwrite(arr)
}

export default exports as typeof import('./index');
