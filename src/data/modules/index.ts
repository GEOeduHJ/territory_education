import { ModuleData, ModuleInfo } from '../../types';

const toModuleInfo = (moduleData: ModuleData): ModuleInfo => ({
  id: moduleData.id,
  topic: moduleData.topic,
  title: moduleData.title,
  description: moduleData.description,
  stepCount: moduleData.steps.length
});

// Dynamically import modules to reduce initial bundle size
const loadModule = async (moduleId: string): Promise<ModuleData> => {
  switch (moduleId) {
    case '0':
      const { MODULE_0_DATA } = await import('./module6');
      return MODULE_0_DATA;
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
    
    default:
      throw new Error(`Module ${moduleId} not found`);
  }
};

// Load the five actual learning modules for homepage display.
const loadLearningModules = async (): Promise<ModuleInfo[]> => {
  const modules = await Promise.all([
    import('./module1'),
    import('./module2'),
    import('./module3'),
    import('./module4'),
    import('./module5')
  ]);

  const moduleDataList: ModuleData[] = modules.map((module, idx) => {
    const found = Object.values(module).find(
      (value) => value && typeof (value as ModuleData).id === 'string' && Array.isArray((value as ModuleData).steps)
    ) as ModuleData | undefined;

    if (found) return found;

    throw new Error(`Unable to extract ModuleData from module namespace ${idx}`);
  });

  return moduleDataList.map(toModuleInfo);
};

// Backward-compatible alias for callers that still use the previous name.
const loadAllModules = loadLearningModules;

// Load the separate curriculum overview card without mixing it into the five modules.
const loadModuleInfo = async (moduleId: string): Promise<ModuleInfo> => {
  const moduleData = await loadModule(moduleId);
  return toModuleInfo(moduleData);
};

// Export keyword config for module 1
export { MODULE_1_KEYWORD_CONFIG } from './module1';

export { loadModule, loadLearningModules, loadAllModules, loadModuleInfo };
