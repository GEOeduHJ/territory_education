import { ModuleData, ModuleInfo } from '../../types';

// Dynamically import modules to reduce initial bundle size
const loadModule = async (moduleId: string): Promise<ModuleData> => {
  switch (moduleId) {
    case '1':
      const { MODULE_1_DATA } = await import('./module1');
      return MODULE_1_DATA;
    case '2':
      const { MODULE_2_DATA } = await import('./module2');
      return MODULE_2_DATA;
    case '3':
      const { MODULE_3_DATA } = await import('./module3');
      return MODULE_3_DATA;
    case '4':
      const { MODULE_4_DATA } = await import('./module4');
      return MODULE_4_DATA;
    case '5':
      const { MODULE_5_DATA } = await import('./module5');
      return MODULE_5_DATA;
    case '6':
      const { MODULE_6_DATA } = await import('./module6');
      return MODULE_6_DATA;
    default:
      throw new Error(`Module ${moduleId} not found`);
  }
};

// Load all modules for homepage display
const loadAllModules = async (): Promise<ModuleInfo[]> => {
  // For now, we'll still import all modules to get metadata
  // In the future, we could optimize this to only load metadata
  const modules = await Promise.all([
    import('./module1'),
    import('./module2'),
    import('./module3'),
    import('./module4'),
    import('./module5'),
    import('./module6')
  ]);

  return modules.map((module, index) => {
    const moduleData = Object.values(module)[0] as ModuleData;
    return {
      id: moduleData.id,
      title: moduleData.title,
      description: moduleData.description,
      stepCount: moduleData.steps.length
    };
  });
};

// Export keyword config for module 1
export { MODULE_1_KEYWORD_CONFIG } from './module1';

export { loadModule, loadAllModules };