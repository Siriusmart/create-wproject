#!/usr/bin/env node

import { mkdirSync, cpSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const cwd = process.cwd();
const projectName = process.argv[2] || 'my-wproject';
const target = join(cwd, projectName);

mkdirSync(target, { recursive: true });

// locate the template directory inside your package
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const templateDir = join(__dirname, 'template');

cpSync(templateDir, target, { recursive: true });

console.log(`Created ${projectName}`);
