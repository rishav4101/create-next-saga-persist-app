#! /usr/bin/env node

"use strict";

import { execSync } from "child_process";
import { join } from "path";
import { mkdirSync, rmdirSync } from "fs";

if (process.argv.length < 3) {
  console.log("\x1b[31m", "You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx next-saga-persist-boilerplate my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = join(currentPath, projectName);
const git_repo =
  "https://github.com/rishav4101/next-saga-persist-boilerplate.git";

try {
  mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("npm install");

    console.log("Removing useless files");
    execSync("npx rimraf ./.git");
    rmdirSync(join(projectPath, "bin"), { recursive: true });

    console.log("The installation is done, this is ready to use !");
  } catch (error) {
    console.log(error);
  }
}
main();
