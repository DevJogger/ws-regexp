export declare class Reader {
    private _impl;
    private _s;
    private _i;
    private _end;
    private _cp1;
    private _w1;
    private _cp2;
    private _w2;
    private _cp3;
    private _w3;
    private _cp4;
    readonly source: string;
    readonly index: number;
    readonly currentCodePoint: number;
    readonly nextCodePoint: number;
    readonly nextCodePoint2: number;
    readonly nextCodePoint3: number;
    reset(source: string, start: number, end: number, uFlag: boolean): void;
    rewind(index: number): void;
    advance(): void;
    eat(cp: number): boolean;
    eat2(cp1: number, cp2: number): boolean;
    eat3(cp1: number, cp2: number, cp3: number): boolean;
}
