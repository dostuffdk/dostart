/*
 * A test suite that executes eslint against the test folder.
 *
 * Fails if there is output from eslint, and writes its output to console.
 *
 * Inspired by https://github.com/facebook/jest/issues/2721#issuecomment-304525972
 */
const path = require('path');
const { exec } = require('child_process');

/*
 * Custom matcher to have pretty output.
 * Name does not really correspond to what it matches against, but it looks pretty.
 */
expect.extend({
    toBeFreeFromEslintErrors(consoleOutput) {
        const eslintResult = consoleOutput.replace(/^\s+/mi, '');

        if (eslintResult.length > 0) {
            console.log(eslintResult); // eslint-disable-line no-console
            return {
                message: () => 'Linting of test files failed. Check the output from eslint.',
                pass: false
            };
        } else {
            return {
                pass: true
            };
        }
    }
});

describe('linter', () => {
    it('checks for eslint problems', (done) => {
        const testDir = path.resolve(__dirname); // eslint-disable-line no-undef
        exec(`eslint ${testDir}`, (err, stdout) => {
            expect(stdout).toBeFreeFromEslintErrors();
            done();
        });
    });
});
