"use strict";
/**
 * Created by user on 2018/7/29/029.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixOptions = exports.cn2tw_min = exports.tw2cn_min = exports.SAFE_MODE_CHAR = exports.SAFE_MODE_CHAR_MIN = exports.tableCn2TwDebug = exports.tableTw2CnDebug = void 0;
const tableTw2CnDebug = require("../../../build/zh/convert/table_tw2cn.debug.json");
exports.tableTw2CnDebug = tableTw2CnDebug;
const tableCn2TwDebug = require("../../../build/zh/convert/table_cn2tw.debug.json");
exports.tableCn2TwDebug = tableCn2TwDebug;
const core_1 = require("./core");
const index_1 = require("./index");
const array_hyper_unique_1 = require("array-hyper-unique");
exports.SAFE_MODE_CHAR_MIN = array_hyper_unique_1.array_unique(core_1.SAFE_MODE_CHAR
    .slice()
    .concat([
    //'忧',
    //'脏',
    '划',
    '准',
    '发',
    '処',
    //'处',
    '處',
    //'憂',
    //'優',
    '餵',
    '炮',
    '砲',
    '奸',
    '姦',
    '鱷',
    '滷',
    '鑑',
    '發',
]));
exports.SAFE_MODE_CHAR = exports.SAFE_MODE_CHAR_MIN;
/**
 * 以不造成歧異的字典表來取代
 */
function tw2cn_min(text, options = {}, ...argv) {
    options = fixOptions(options, tableTw2CnDebug.safe);
    return index_1.tw2cn(text, options, ...argv);
}
exports.tw2cn_min = tw2cn_min;
/**
 * 以不造成歧異的字典表來取代
 */
function cn2tw_min(text, options = {}, ...argv) {
    options = fixOptions(options, tableCn2TwDebug.safe);
    return index_1.cn2tw(text, options, ...argv);
}
exports.cn2tw_min = cn2tw_min;
function fixOptions(options = {}, table) {
    options = Object.assign({}, options);
    options.table = options.table || Object.create(table);
    options.tableOnly = options.tableOnly !== false;
    options = core_1.getOptions(options, core_1.defaultOptions, exports.SAFE_MODE_CHAR_MIN);
    return options;
}
exports.fixOptions = fixOptions;
/*
let msg = `并且之后在深海変異成亚种的半人鱼。顺便说一句，当时人鱼国的守护神《海之神》特里斯坦，发现在神代时代时被自己封印的宿敌复活了忧。`;

console.log(1, cn2tw(msg, {
    safe: false,
}));

console.log(2, cn2tw_min(msg, {
    //safe: false,
}));
*/
exports.default = exports;
//# sourceMappingURL=min.js.map