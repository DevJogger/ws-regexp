"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexp2_1 = require("regexp2");
const japanese = require("japanese");
const cjk_conv_1 = require("cjk-conv");
function replace_literal(r, cb) {
    let bool = (r instanceof RegExp);
    let rb = regexp2_1.parse(r);
    let str = toRegexp(rb, cb);
    if (bool) {
        return new RegExp(str, r.flags);
    }
    return str;
}
exports.replace_literal = replace_literal;
function toRegexp(res, cb) {
    if (res.body) {
        if (res.body.type == regexp2_1.types.ALTERNATE) {
            return toRegexp(res.body.left, cb) + '|' + toRegexp(res.body.right, cb);
        }
        else if (res.type == regexp2_1.types.MATCH) {
            return res.body.reduce(function (a, b) {
                a.push(_(b, cb));
                return a;
            }, []).join('');
        }
        else if (res.type == regexp2_1.types.QUANTIFIED) {
            return _(res.body, cb) + toRegexp(res.quantifier, cb);
        }
        return _(res.body, cb);
    }
    if (res.type == regexp2_1.types.ALTERNATE) {
        return toRegexp(res.left, cb) + '|' + toRegexp(res.right, cb);
    }
    else {
    }
    return res.text;
}
exports.local_range = [
    '〇一二三四五六七八九十'.split(''),
    '零一二三四五六七八九十'.split(''),
];
[
    ['common', '十'],
    ['formal', '十'],
    ['traditional', '拾'],
    ['traditionalOld', '拾'],
    ['simplified', '拾'],
    ['traditional', '什'],
    ['traditionalOld', '什'],
    ['simplified', '什'],
    ['chineseMilitary'],
].forEach(function (key) {
    let ls = japanese.predefineedTranscriptionConfigs.digits[key[0]];
    if (ls) {
        ls = Object.values(ls);
        if (key[1]) {
            ls.push(key[1]);
        }
        exports.local_range.push(ls);
    }
});
function _(b, cb) {
    switch (b.type) {
        case regexp2_1.types.CHARSET:
            {
                let text = '';
                if (b.invert) {
                    text += '^';
                }
                for (let a of b.body) {
                    if (a.type == regexp2_1.types.RANGE) {
                        let s = a.start.text;
                        let e = a.end.text;
                        let t;
                        for (let r of exports.local_range) {
                            let i = r.indexOf(s);
                            let j = r.indexOf(e, i);
                            if (i !== -1 && j !== -1) {
                                a.setBody(r.slice(i, j + 1));
                                t = a.toString();
                                break;
                            }
                        }
                        if (!t) {
                        }
                        text += t || a.text;
                    }
                    else {
                        text += a.text;
                    }
                }
                return `[${text}]`;
            }
        case regexp2_1.types.POSITIVE_LOOKAHEAD:
            return '(?=' + toRegexp(b, cb) + ')';
        case regexp2_1.types.NEGATIVE_LOOKAHEAD:
            return '(?!' + toRegexp(b, cb) + ')';
        case regexp2_1.types.CAPTURE_GROUP:
            return '(' + toRegexp(b, cb) + ')';
        case regexp2_1.types.NON_CAPTURE_GROUP:
            return '(?:' + toRegexp(b, cb) + ')';
        case regexp2_1.types.MATCH:
            return toRegexp(b, cb);
        case regexp2_1.types.QUANTIFIED:
            return _(b.body, cb) + toRegexp(b.quantifier, cb);
        case regexp2_1.types.LITERAL:
            let text = b.text;
            text = cb(text);
            return text;
        default:
            break;
    }
    return b.toString();
}
function array_unique(array) {
    return array.filter(function (el, index, arr) {
        return index == arr.indexOf(el);
    });
}
exports.array_unique = array_unique;
exports.matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
function regex_str(str) {
    return str
        .replace(/(\W)/g, '\\$1');
}
exports.regex_str = regex_str;
function _word_zh(search, ret, flags = 'ig', skip) {
    let s = replace_literal(search, function (text) {
        return _word_zh_core(text, skip);
    });
    flags = (s instanceof RegExp) ? s.flags : flags;
    return [s, ret, flags];
}
exports._word_zh = _word_zh;
function _word_zh_core(search, skip) {
    return search.replace(/[\u4E00-\u9FFFの]/g, function (char) {
        if (skip && skip.indexOf(char) != -1) {
            return char;
        }
        let a = cjk_conv_1.default.zhTable.auto(char);
        return a.length > 1 ? '[' + a.join('') + ']' : a[0];
    });
}
exports._word_zh_core = _word_zh_core;
const self = require("./lib");
exports.default = self;
