// DEPRECATED: This file is deprecated as of module separation.
// Please use the new module structure in src/data/modules/index.ts
// This file is kept for backward compatibility only.

import { MODULE_1_DATA } from './modules/module1';
import { MODULE_2_DATA } from './modules/module2';
import { MODULE_3_DATA } from './modules/module3';
import { MODULE_4_DATA } from './modules/module4';
import { MODULE_5_DATA } from './modules/module5';
import { MODULE_6_DATA } from './modules/module6';

// Re-export the modules data for backward compatibility
export const MODULES_DATA = {
  modules: {
    "1": MODULE_1_DATA,
    "2": MODULE_2_DATA,
    "3": MODULE_3_DATA,
    "4": MODULE_4_DATA,
    "5": MODULE_5_DATA,
    "6": MODULE_6_DATA
  }
};