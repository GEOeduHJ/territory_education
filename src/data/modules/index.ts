import { ModuleData, ModuleInfo } from '../../types';

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

// Load all modules for homepage display
const loadAllModules = async (): Promise<ModuleInfo[]> => {
  const modules = await Promise.all([
    import('./module6'),
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

  return moduleDataList.map((moduleData) => ({
    id: moduleData.id,
    // If topic is missing, fall back to title so UI shows something meaningful
    topic: (moduleData as any).topic ?? moduleData.title,
    title: moduleData.title,
    description: moduleData.description,
    imageUrl: (moduleData as any).imageUrl,
    stepCount: moduleData.steps.length
  }));
};

// Export keyword config for module 1
export { MODULE_1_KEYWORD_CONFIG } from './module1';

export { loadModule, loadAllModules };