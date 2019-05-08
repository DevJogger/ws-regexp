import assert = require("assert")
import { parseRegExpLiteral, RegExpParser } from "../src/index"
import { cloneWithoutCircular } from "../scripts/clone-without-circular"
import { Fixtures } from "./fixtures/parser/literal"

function generateAST(source: string, options: RegExpParser.Options): object {
    return JSON.parse(
        Buffer.from(
            JSON.stringify(
                cloneWithoutCircular(parseRegExpLiteral(source, options)),
            ),
        ).toString(),
    )
}

describe("parseRegExpLiteral function:", () => {
    for (const filename of Object.keys(Fixtures)) {
        const fixture = Fixtures[filename]
        const options = fixture.options

        describe(`${filename} (options=${JSON.stringify(options)})`, () => {
            if (filename.indexOf("-valid") !== -1) {
                it("should not contain any invalid test case", () => {
                    for (const source of Object.keys(fixture.patterns)) {
                        const result = fixture.patterns[source]
                        assert("ast" in result, `${source} is invalid`)
                    }
                })
            } else if (filename.indexOf("-invalid") !== -1) {
                it("should not contain any valid test case", () => {
                    for (const source of Object.keys(fixture.patterns)) {
                        const result = fixture.patterns[source]
                        assert("error" in result, `${source} is valid`)
                    }
                })
            }

            for (const source of Object.keys(fixture.patterns)) {
                const result = fixture.patterns[source]
                if ("ast" in result) {
                    it(`${source} should succeed to parse.`, () => {
                        const expected = result.ast
                        const actual = generateAST(source, options)
                        assert.deepStrictEqual(actual, expected)
                    })
                } else {
                    it(`${source} should throw syntax error.`, () => {
                        const expected = result.error
                        assert.strictEqual(
                            expected.message.slice(0, 27),
                            "Invalid regular expression:",
                            `The error message '${
                                expected.message
                            }' was not syntax error.`,
                        )
                        try {
                            parseRegExpLiteral(source, options)
                        } catch (err) {
                            assert.strictEqual(err.message, expected.message)
                            assert.strictEqual(err.index, expected.index)
                            return
                        }
                        assert.fail("Should fail, but succeeded.")
                    })
                }
            }
        })
    }

    it("should parse RegExp object", () => {
        const actual = cloneWithoutCircular(parseRegExpLiteral(/[A-Z]+/))
        const expected = cloneWithoutCircular(parseRegExpLiteral("/[A-Z]+/"))

        assert.deepStrictEqual(actual, expected)
    })
})

0 && describe("RegExpParser:", () => {
    describe("parsePattern function", () => {
        it("should throw syntax error on '\\'.", () => {
            assert.throws(
                () => new RegExpParser().parsePattern("\\"),
                /\\ at end of pattern/,
            )
        })
    })
})
