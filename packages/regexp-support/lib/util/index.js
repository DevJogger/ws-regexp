"use strict";
/**
 * Created by user on 2018/5/6/006.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("../pattern");
const util = require("util");
//util.inspect.defaultOptions.colors = true;
function log_dir(...argv) {
    argv = argv.reduce(function (a, b) {
        let c = util.inspect(b, {
            colors: true,
        });
        a.push(c);
        return a;
    }, []);
    console.log(...argv);
}
exports.log_dir = log_dir;
function _createFnTestPattern(initTestPatterns) {
    return (name, 
    // @ts-ignore
    RegExpClass = RegExp, testPatterns = initTestPatterns) => {
        // @ts-ignore
        return pattern_1.testPattern(name, RegExpClass, testPatterns);
    };
}
exports._createFnTestPattern = _createFnTestPattern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsd0NBQXlDO0FBQ3pDLDZCQUE2QjtBQUU3Qiw0Q0FBNEM7QUFFNUMsU0FBZ0IsT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUU5QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFkRCwwQkFjQztBQVNELFNBQWdCLG9CQUFvQixDQUFJLGdCQUFtQjtJQU0xRCxPQUFPLENBQUksSUFBWTtJQUN0QixhQUFhO0lBQ2IsY0FBb0MsTUFBTSxFQUMxQyxZQUFZLEdBQUcsZ0JBQWdCLEVBQ3JCLEVBQUU7UUFFWixhQUFhO1FBQ2IsT0FBTyxxQkFBVyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQWZELG9EQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC81LzYvMDA2LlxuICovXG5cbmltcG9ydCB7IElDcmVhdGVSZWdFeHAsIElUeXBlQ3JlYXRlUmVnRXhwIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgdGVzdFBhdHRlcm4gfSBmcm9tICcuLi9wYXR0ZXJuJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XG5cbi8vdXRpbC5pbnNwZWN0LmRlZmF1bHRPcHRpb25zLmNvbG9ycyA9IHRydWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dfZGlyKC4uLmFyZ3YpXG57XG5cdGFyZ3YgPSBhcmd2LnJlZHVjZShmdW5jdGlvbiAoYSwgYilcblx0e1xuXHRcdGxldCBjID0gdXRpbC5pbnNwZWN0KGIsIHtcblx0XHRcdGNvbG9yczogdHJ1ZSxcblx0XHR9KTtcblxuXHRcdGEucHVzaChjKTtcblxuXHRcdHJldHVybiBhO1xuXHR9LCBbXSk7XG5cblx0Y29uc29sZS5sb2coLi4uYXJndik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZuVGVzdFBhdHRlcm48Uj5cbntcblx0KG5hbWU6IHN0cmluZywgUmVnRXhwQ2xhc3M/OiB0eXBlb2YgUmVnRXhwLCB0ZXN0UGF0dGVybnM/OiBSKTogYm9vbGVhblxuXHQobmFtZTogc3RyaW5nLCBSZWdFeHBDbGFzcz86IElDcmVhdGVSZWdFeHAsIHRlc3RQYXR0ZXJucz86IFIpOiBib29sZWFuXG5cdDxUPihuYW1lOiBzdHJpbmcsIFJlZ0V4cENsYXNzPzogSVR5cGVDcmVhdGVSZWdFeHA8VD4sIHRlc3RQYXR0ZXJucz86IFIpOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY3JlYXRlRm5UZXN0UGF0dGVybjxSPihpbml0VGVzdFBhdHRlcm5zOiBSKToge1xuXHQobmFtZTogc3RyaW5nLCBSZWdFeHBDbGFzcz86IHR5cGVvZiBSZWdFeHAsIHRlc3RQYXR0ZXJucz86IFIpOiBib29sZWFuXG5cdChuYW1lOiBzdHJpbmcsIFJlZ0V4cENsYXNzPzogSUNyZWF0ZVJlZ0V4cCwgdGVzdFBhdHRlcm5zPzogUik6IGJvb2xlYW5cblx0PFQ+KG5hbWU6IHN0cmluZywgUmVnRXhwQ2xhc3M/OiBJVHlwZUNyZWF0ZVJlZ0V4cDxUPiwgdGVzdFBhdHRlcm5zPzogUik6IGJvb2xlYW5cbn1cbntcblx0cmV0dXJuIDxUPihuYW1lOiBzdHJpbmcsXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFJlZ0V4cENsYXNzOiBJVHlwZUNyZWF0ZVJlZ0V4cDxUPiA9IFJlZ0V4cCxcblx0XHR0ZXN0UGF0dGVybnMgPSBpbml0VGVzdFBhdHRlcm5zXG5cdCk6IGJvb2xlYW4gPT5cblx0e1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gdGVzdFBhdHRlcm4obmFtZSwgUmVnRXhwQ2xhc3MsIHRlc3RQYXR0ZXJucyk7XG5cdH07XG59XG4iXX0=