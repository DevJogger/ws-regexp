"use strict";
/**
 * Created by user on 2018/7/24/024.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const PackageJson = require("../package.json");
const cross_spawn_extra_1 = require("cross-spawn-extra");
(async () => {
    const project_root = path.join(__dirname, '..');
    let gitroot;
    // @ts-ignore
    gitroot = await Promise.resolve().then(() => require('git-root2'));
    // @ts-ignore
    gitroot = gitroot(__dirname);
    if (!gitroot || path.relative(gitroot, project_root)) {
        console.warn(`no git exists`);
        return;
    }
    let options = {
        cwd: project_root,
        stdio: 'inherit',
    };
    let msg = `npm publish ${PackageJson.version}`;
    await cross_spawn_extra_1.async('git', [
        'commit',
        '-a',
        '-m',
        msg,
    ], options);
    await new Promise(function (done) {
        setTimeout(done, 500);
    });
    await cross_spawn_extra_1.async('git', [
        'tag',
        '-a',
        PackageJson.version,
        '-m',
        msg,
    ], options);
})().catch(e => console.error(e));
