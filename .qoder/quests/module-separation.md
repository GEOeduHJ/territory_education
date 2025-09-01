# Module Separation Design Document

## 1. Overview

This document outlines the design for separating the current monolithic module structure into individual files for better maintainability and scalability. Currently, all 6 modules are defined in a single file (`src/data/modules.ts`). The goal is to separate Module 1 (which contains keyword functionality) into its own file while creating a scalable structure for Modules 2-6 to be developed independently in the future.

## 2. Current Architecture

### 2.1 Module Structure
Currently, all modules are defined in `src/data/modules.ts`:
- Module 1: 영토교육 캠페인 노래 만들기 (with keyword functionality)
- Modules 2-6: Placeholder modules with "여기를 수정하세요" markers

### 2.2 Dependencies
- Module 1 is the only module using keyword functionality
- All modules share the same data structure defined in `src/types/index.ts`
- Module loading is handled by `src/services/linkService.ts`

## 3. Proposed Architecture

### 3.1 Directory Structure
```
src/
├── data/
│   ├── modules/
│   │   ├── module1.ts          # Module 1 with keyword functionality
│   │   ├── module2.ts          # Module 2 (placeholder)
│   │   ├── module3.ts          # Module 3 (placeholder)
│   │   ├── module4.ts          # Module 4 (placeholder)
│   │   ├── module5.ts          # Module 5 (placeholder)
│   │   ├── module6.ts          # Module 6 (placeholder)
│   │   └── index.ts            # Module registry and loader
│   └── modules.ts              # Legacy file (to be deprecated)
```

### 3.2 Module Organization
Each module file will:
1. Export its module configuration as a constant
2. Maintain the same data structure as defined in `ModuleData` interface
3. Include all module-specific configurations (steps, content, etc.)

### 3.3 Module Registry
A new `index.ts` file in the modules directory will:
1. Import all individual module configurations
2. Provide a registry function to dynamically load modules
3. Handle module discovery and loading for the application

## 4. Implementation Plan

### 4.1 Phase 1: Create Individual Module Files
1. Extract Module 1 to `src/data/modules/module1.ts`
2. Create placeholder files for Modules 2-6
3. Maintain backward compatibility during transition

### 4.2 Phase 2: Create Module Registry
1. Create `src/data/modules/index.ts` to manage module loading
2. Update `linkService.ts` to use the new module registry
3. Implement dynamic module loading mechanism

### 4.3 Phase 3: Migration and Cleanup
1. Update all references to use the new module structure
2. Remove the legacy `modules.ts` file
3. Test all functionality to ensure no regressions

## 5. Detailed Design

### 5.1 Module 1 File (src/data/modules/module1.ts)
```typescript
import { ModuleData, ModuleKeywordConfig } from '../../types';

// Module 1 키워드 설정
export const MODULE_1_KEYWORD_CONFIG: ModuleKeywordConfig = {
  moduleId: "1",
  hasKeywordFeature: true,
  keywordInputStepId: "step-1",
  templateSteps: ["step-2", "step-3", "step-4", "step-5"],
  template: {
    template: "영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]",
    placeholders: ["[keyword1]", "[keyword2]", "[keyword3]", "[keyword4]"]
  }
};

// Module 1 데이터
export const MODULE_1_DATA: ModuleData = {
  id: "1",
  title: "영토교육 캠페인 노래 만들기",
  description: "영토 분쟁 사례를 바탕으로 캠페인 노래를 제작하는 모듈입니다",
  steps: [
    // ... (steps data)
  ]
};
```

### 5.2 Module Registry (src/data/modules/index.ts)
```typescript
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

export { loadModule, loadAllModules };
```

### 5.3 Updated Link Service (src/services/linkService.ts)
```typescript
// Update the StaticContentLoader class
export class StaticContentLoader {
  async loadModuleData(moduleId: string) {
    const { loadModule } = await import('../data/modules');
    return await loadModule(moduleId);
  }

  async loadAllModules() {
    const { loadAllModules } = await import('../data/modules');
    return await loadAllModules();
  }
}
```

## 6. Benefits of This Approach

### 6.1 Maintainability
- Each module is self-contained in its own file
- Easier to locate and modify specific module configurations
- Reduced risk of conflicts when multiple developers work on different modules

### 6.2 Scalability
- New modules can be added without modifying existing files
- Dynamic imports reduce initial bundle size
- Future modules can be loaded on-demand

### 6.3 Separation of Concerns
- Module 1's keyword functionality is contained within its own file
- Clear boundaries between different modules
- Simplified testing and debugging

## 7. Backward Compatibility

During the transition period:
1. The legacy `modules.ts` file will remain but marked as deprecated
2. Both old and new loading mechanisms will work in parallel
3. A migration script will help transition existing code
4. Proper error handling will ensure graceful degradation

## 8. Future Extensibility

The design allows for:
1. Easy addition of new modules by creating new files
2. Module-specific dependencies and configurations
3. Dynamic module loading based on user permissions or features
4. A/B testing of different module versions
5. Lazy loading of modules to improve performance

## 9. Testing Strategy

### 9.1 Unit Tests
- Test each module file independently
- Validate module data structure compliance
- Test keyword functionality in Module 1

### 9.2 Integration Tests
- Test module loading mechanism
- Validate module registry functionality
- Test backward compatibility

### 9.3 End-to-End Tests
- Verify module display on homepage
- Test navigation between modules
- Validate keyword functionality in Module 1

## 10. Deployment Considerations

1. The changes are backward compatible, allowing for gradual rollout
2. No database migrations required
3. Minimal impact on existing functionality
4. Performance improvements through dynamic imports