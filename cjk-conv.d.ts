// Generated by dts-bundle v0.7.3

declare module 'cjk-conv' {
    /**
      * Created by user on 2018/2/17/017.
      */
    export * from 'cjk-conv/lib/index';
    import cjkConv from 'cjk-conv/lib/index';
    export { cjkConv };
    export default cjkConv;
}

declare module 'cjk-conv/lib/index' {
    /**
      * Created by user on 2018/2/17/017.
      */
    export { default as zhConvert, tw2cn, cn2tw } from 'cjk-conv/lib/zh/convert/index';
    export { default as zhTable, IOptions as IOptionsZhTable } from 'cjk-conv/lib/zh/table/index';
    export { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from 'cjk-conv/lib/jp/index';
    export { default as novelFilename } from 'cjk-conv/lib/novel/filename';
    import * as cjkConv from 'cjk-conv/lib/index';
    export default cjkConv;
}

declare module 'cjk-conv/lib/zh/convert/index' {
    /**
        * Created by user on 2018/2/15/015.
        *
        * same as chinese_convert, but a little bug fix
        */
    export interface IOptions {
            /**
                * 忽略的字 or 任何支援 indexOf 的 Object
                */
            skip?: any;
            table?: ITable | typeof _call;
            safe?: boolean;
    }
    export const defaultOptions: Readonly<{
            safe: boolean;
    }>;
    export function cn2tw(text: string, options?: IOptions, ...argv: any[]): string;
    export function tw2cn(text: string, options?: IOptions, ...argv: any[]): string;
    export let table_cn2tw: ITable;
    export let table_tw2cn: ITable;
    export const REGEXP_TEST: RegExp;
    export function _call(fn: any, text: string, options?: IOptions, ...argv: any[]): any;
    export interface ITable {
            [key: string]: string;
    }
    import * as zhConvert from 'cjk-conv/lib/zh/convert/index';
    export default zhConvert;
}

declare module 'cjk-conv/lib/zh/table/index' {
    /**
        * Created by user on 2018/2/17/017.
        */
    import libTable from 'cjk-conv/lib/zh/table/table';
    export { libTable };
    export type IOptions = {
            safe?: boolean;
            skip?: any;
    };
    export function _get(a: any, value: any, ...values: any[]): any;
    /**
        * 取出此漢字所對應的繁漢字
        * @type {(char: string, options?: IOptions) => string[]}
        */
    export const tw: (char: string, options?: IOptions) => string[];
    /**
        * 取出此漢字所對應的簡漢字
        * @type {(char: string, options?: IOptions) => string[]}
        */
    export const cn: (char: string, options?: IOptions) => string[];
    /**
        * 取出此漢字所對應的日漢字
        * @type {(char: string, options?: IOptions) => string[]}
        */
    export const jp: (char: string, options?: IOptions) => string[];
    /**
        * 自動取出此漢字所對應的簡繁日漢字
        *
        * @param {string} char
        * @param {IOptions} options
        * @returns {string[]}
        */
    export function auto(char: string, options?: IOptions): string[];
    import * as zhTable from 'cjk-conv/lib/zh/table/index';
    export default zhTable;
}

declare module 'cjk-conv/lib/jp/index' {
    /**
      * Created by user on 2018/2/17/017.
      */
    export { zh2jp, zht2jp, zhs2jp, zhs2zht, zht2zhs, cjk2zhs, jp2zhs, jp2zht, cjk2zht, cjk2jp, IOptions } from 'cjk-conv/lib/jp/core';
    import * as jpConvert from 'cjk-conv/lib/jp/index';
    export default jpConvert;
}

declare module 'cjk-conv/lib/novel/filename' {
    /**
      * Created by user on 2018/2/17/017.
      */
    export interface IOptions {
        skip?: string;
        safe?: boolean;
    }
    export function filename(name: string, options?: IOptions): string;
    export function word(name: string, options?: IOptions): string;
    export function jp(txt: string, options?: IOptions): string;
    export function zh(txt: string, options?: IOptions): string;
    import * as novelFilename from 'cjk-conv/lib/novel/filename';
    export default novelFilename;
}

declare module 'cjk-conv/lib/zh/table/table' {
    /**
        * Created by user on 2018/2/17/017.
        */
    import { IOptions } from 'cjk-conv/lib/zh/convert/index';
    export let _table_tw: {
            '罗': string;
            '恶': string;
            '苏': string;
            '馆': string;
    };
    /**
        * 此表內只有符合 KEY 值時才會觸發
        */
    export let table_jp: {
            'の': string[];
            'と': string[];
            '画': string[];
            '闘': string[];
            '鬥': string[];
            '鬭': string[];
            '鬪': string[];
            '闇': string[];
            '図': string[];
            '复': string[];
            '当': string[];
            '閤': string[];
            '阁': string[];
            '罗': string[];
            '乾': string[];
            '亁': string[];
            '乹': string[];
            '历': string[];
            '歴': string[];
            '歷': string[];
            '暦': string[];
            '曆': string[];
            '呻': string[];
            '覆': string[];
            '勉': string[];
            '勉': string[];
            '甦': string[];
            '忧': string[];
    };
    /**
        * 此表內符合以下任意值時會觸發
        */
    export let table_plus: {
            '劍': string[];
            '砲': string[];
            '偽': string[];
            '內': string[];
            '鬥': string[];
            '鶏': string[];
            '兎': string[];
            '坏': string[];
            '殻': string[];
            '像': string[];
            '蘇': string[];
            '館': string[];
            '鳥': string[];
            '視': string[];
            '険': string[];
            '絶': string[];
            '鉄': string[];
            '諸': string[];
            '尋': string[];
            '裡': string[];
            '鑑': string[];
            '麵': string[];
            '歲': string[];
            '鐘': string[];
            '會': string[];
            '塗': string[];
            '髮': string[];
            '話': string[];
            '閤': string[];
            '蔘': string[];
            '労': string[];
            '国': string[];
            '罵': string[];
            '対': string[];
            '鏽': string[];
            '駄': string[];
            '薩': string[];
            '単': string[];
            '継': string[];
            '驗': string[];
            '歴': string[];
            '暦': string[];
            '団': string[];
            '麼': string[];
            '戰': string[];
            '乡': string[];
            '勉': string[];
            '餘': string[];
            '網': string[];
            '託': string[];
            '纖': string[];
            '鍊': string[];
            '擊': string[];
            '實': string[];
            '於': string[];
            '證': string[];
            '據': string[];
            '處': string[];
            '瞪': string[];
            '肢': string[];
            '肉': string[];
            '憂': string[];
            '繫': string[];
            '廻': string[];
            '録': string[];
            '鎗': string[];
            '悠': string[];
            '壶': string[];
            '茲': string[];
            '蓋': string[];
            '蹟': string[];
            '癒': string[];
            '辺': string[];
            '準': string[];
            '衛': string[];
            '晚': string[];
            '裸': string[];
    };
    export interface ISimpleTable {
            [key: string]: string;
    }
    export let _table_cn: ISimpleTable;
    export function _update(target: ISimpleTable, source: ISimpleTable): ISimpleTable;
    export function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>): string[];
    export function jp(char: string, options?: IOptions): string[];
    export function tw(char: string, options?: IOptions): string[];
    export function cn(char: string, options?: IOptions): string[];
    import * as self from 'cjk-conv/lib/zh/table/table';
    export default self;
}

declare module 'cjk-conv/lib/jp/core' {
    /**
        * Created by user on 2017/12/24/024.
        *
        * this module only do the char is exists in jp, zht, zhs
        * so don't use this module when u wanna fully zht <=> zhs
        *
        * 目前只支援 簡繁日漢字 並非全 cjk 漢字支援
        */
    import ZHJP_TABLE, { TABLE_SAFE as ZHJP_TABLE_SAFE } from 'cjk-conv/lib/jp/table';
    export { ZHJP_TABLE, ZHJP_TABLE_SAFE };
    export const KEY_JP = "jp";
    export const KEY_ZHT = "zht";
    export const KEY_ZHS = "zhs";
    export let TABLE: {
            jp: ITABLE;
            zht: ITABLE;
            zhs: ITABLE;
    };
    export let TABLE_SAFE: {
            jp: ITABLE;
            zht: ITABLE;
            zhs: ITABLE;
    };
    export interface ITABLE {
            [key: string]: ITABLESUB;
    }
    export interface ITABLESUB {
            jp: string;
            zht: string;
            zhs: string;
    }
    export interface IOptions {
            /**
                * 忽略的字 or 任何支援 indexOf 的 Object
                */
            skip?: any;
            /**
                * safe mode
                */
            safe?: boolean;
    }
    export const defaultOptions: IOptions;
    /**
        * only 只將 日文漢字 => 轉為繁漢字
        * @type {IFrom2To}
        */
    export const jp2zht: IFrom2To;
    /**
        * only 只將 日文漢字 => 轉為簡漢字
        * @type {IFrom2To}
        */
    export const jp2zhs: IFrom2To;
    /**
        * only 簡漢字 => 轉為日漢字
        * @type {IFrom2To}
        */
    export const zhs2jp: IFrom2To;
    /**
        * only 只將 繁漢字 => 轉為日文漢字
        * @type {IFrom2To}
        */
    export const zht2jp: IFrom2To;
    /**
        * only 只將簡繁日 當中共通的 繁漢字 => 轉為簡漢字
        * 請勿作為簡繁轉換用
        * @type {IFrom2To}
        */
    export const zht2zhs: IFrom2To;
    /**
        * only 只將簡繁日 當中共通的 簡漢字 => 轉為繁漢字
        * 請勿作為簡繁轉換用
        * @type {IFrom2To}
        */
    export const zhs2zht: IFrom2To;
    /**
        * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
        *
        * @alias cjk2jp
        *
        * @param str
        * @param {IOptions} options
        * @returns {string}
        */
    export function zh2jp(str: any, options?: IOptions): string;
    /**
        * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
        *
        * @alias zh2jp
        *
        * @param str
        * @param {IOptions} options
        * @returns {string}
        */
    export const cjk2jp: typeof zh2jp;
    /**
        * only 只將簡繁日 當中共通的 漢字 => 轉為繁體漢字
        * 請勿作為簡繁轉換用
        *
        * @param str
        * @param {IOptions} options
        * @returns {string}
        */
    export function cjk2zht(str: any, options?: IOptions): string;
    /**
        * only 只將簡繁日 當中共通的 漢字 => 轉為簡體漢字
        * 請勿作為簡繁轉換用
        *
        * @param str
        * @param {IOptions} options
        * @returns {string}
        */
    export function cjk2zhs(str: any, options?: IOptions): string;
    export function init(overwrite?: boolean): {
            jp: ITABLE;
            zht: ITABLE;
            zhs: ITABLE;
    };
    export function _getdata(char: string, from: string, to: string, safe?: boolean): string;
    export interface IFrom2To extends Function {
            (str: any, options?: IOptions): string;
    }
    import * as jpConvert from 'cjk-conv/lib/jp/core';
    export default jpConvert;
}

declare module 'cjk-conv/lib/jp/table' {
    /**
      * Created by user on 2017/12/24/024.
      *
      * @see https://www.jcinfo.net/tw/tools/kanji
      * @see http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908
      * @see https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji
      * @see https://hanzi.unihan.com.cn/CJKCompare
      * @see http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html
      */
    export let TABLE: string[][];
    export let TABLE_SAFE: string[][];
    export function addNew(table: string[][], jp: any, zht: any, zhs: any): string[][];
    export default TABLE;
}

