import { expect, test } from '@salesforce/command/lib/test';

describe('prettier:format', () => {
  test
    .stderr()
    .command(['prettier:format'])
    .it('does not format in a non-project directory', ctx => {
      expect(ctx.stderr).to.contain(
        'ERROR running Format:  This command is required to run from within an SFDX project.'
      );
    });
});
