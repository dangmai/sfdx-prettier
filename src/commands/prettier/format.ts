import { spawnSync } from 'child_process';
import { resolve } from 'path';

import { core, SfdxCommand } from '@salesforce/command';
import { SfdxProject, SfdxProjectJson } from '@salesforce/core';
import { AnyJson, asJsonArray, asJsonMap } from '@salesforce/ts-types';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('sfdx-prettier', 'org');

export default class Format extends SfdxCommand {
  public static description = messages.getMessage(
    'prettierRunCommandDescription'
  );

  public static examples = [
    `$ sfdx prettier:format
  `
  ];

  public static args = [];

  protected static flagsConfig = {};

  // Comment this out if your command does not require an org username
  protected static requiresUsername = false;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = false;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = true;

  public async run(): Promise<AnyJson> {
    const binLocation = resolve(__dirname, '../../../node_modules/.bin');
    const project: SfdxProject = await SfdxProject.resolve(process.cwd());
    const sfdxProject: SfdxProjectJson = await project.retrieveSfdxProjectJson();

    const packageDirectories = asJsonArray(
      sfdxProject.getContents().packageDirectories,
      []
    );
    let directories = [];
    if (packageDirectories) {
      directories = packageDirectories.map(p => asJsonMap(p).path);
    }

    const prettierCommand = resolve(
      binLocation,
      `prettier${process.platform === 'win32' ? '.cmd' : ''}`
    );
    let locationCommand;
    if (directories.length > 1) {
      locationCommand = `{"${directories.join(', ')}}/**/*.{cls,trigger}"`;
    } else if (directories.length === 1) {
      locationCommand = `"${directories.join(', ')}/**/*.{cls,trigger}"`;
    }

    const result = spawnSync(prettierCommand, ['--write', locationCommand], {
      cwd: process.cwd(),
      env: process.env,
      shell: true,
      encoding: 'utf-8'
    });
    if (result.stdout) {
      this.ux.log(result.stdout.toString());
    }
    if (result.stderr) {
      this.ux.log(result.stderr.toString());
    }

    // Return an object to be displayed with --json
    return {};
  }
}
