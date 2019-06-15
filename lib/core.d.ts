import { IAstToStringOptions } from 'regexp-parser-literal';
import { INodeInput, IParserEventEmitterListener, IParserEventEmitterListenerMap, ParserEventEmitter, ParserEventEmitterEvent } from 'regexp-parser-event';
import { IOptions as IOptionsZhTable } from 'cjk-conv/lib/zh/table/index';
export { ParserEventEmitterEvent, ParserEventEmitter, INodeInput, IParserEventEmitterListener, IAstToStringOptions };
export { IOptionsZhTable };
export declare const SymDefaults: unique symbol;
export declare type IOptionsCore = {
    skip?: string;
    disableZh?: boolean;
    /**
     * disableLocalRange only work when disableZh is true
     */
    disableLocalRange?: boolean;
    allowLocalRangeAutoZh?: boolean;
    flags?: string;
    /**
     * allow str is /a/g
     * @deprecated
     */
    parseRegularExpressionString?: boolean;
    /**
     * 讓 文字比對 更加寬鬆
     */
    greedyTable?: boolean | number;
    unsafe?: boolean;
    /**
     * allow set `CjkConv.zhTable.auto`
     */
    zhTable?(char: string, options?: IOptionsZhTable): string[];
} & IAstToStringOptions;
export declare type IOptions<T extends INodeInput = INodeInput> = IOptionsCore & {
    on?: IOptionsOn<T> | IOptionsOn<T>[];
};
export declare type IOptionsRuntime<T extends INodeInput = INodeInput> = IOptionsCore & {
    on?: IOptionsOn<T>[];
};
export declare type IOptionsInput<T extends INodeInput = INodeInput> = IOptions<T> | IOptionsRuntime<T>;
export interface ICoreHandlerReturn<T extends INodeInput = INodeInput> {
    source: string;
    flags: string;
    options: IOptionsRuntime<T>;
}
export interface IOptionsOn<T extends INodeInput = INodeInput> extends IParserEventEmitterListenerMap<T> {
}
export declare type IRegExpUserInput = string | RegExp;
export declare function coreHandler(str: IRegExpUserInput, flags?: string, options?: IOptionsInput | string, ...argv: any[]): ICoreHandlerReturn;
export declare function coreHandler(str: IRegExpUserInput, options?: IOptionsInput, ...argv: any[]): ICoreHandlerReturn;
export declare function setupParserEventEmitter(ev: ParserEventEmitter, options: IOptionsInput): ParserEventEmitter;
export default coreHandler;
