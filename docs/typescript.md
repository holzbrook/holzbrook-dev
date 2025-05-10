# TypeScript Configuration

## Path Aliases

The project uses TypeScript path aliases to improve code organization and maintainability. These aliases are configured in `tsconfig.json` and allow for cleaner imports throughout the codebase.

### Available Aliases

| Alias           | Path               | Description                         |
| --------------- | ------------------ | ----------------------------------- |
| `@/*`           | `src/*`            | Root source directory               |
| `@e2e/*`        | `e2e/*`            | End-to-end testing files            |
| `@lib/*`        | `src/lib/*`        | Utility functions and shared code   |
| `@styles/*`     | `src/styles/*`     | Global styles and CSS modules       |
| `@assets/*`     | `src/assets/*`     | Static assets (images, fonts, etc.) |
| `@components/*` | `src/components/*` | Reusable UI components              |
| `@pages/*`      | `src/pages/*`      | Page components and routes          |
| `@content/*`    | `src/content/*`    | Content collections and data        |

### Usage Example

Instead of using relative paths:

```typescript
import { Button } from '../../../components/Button';
import { theme } from '../../../../styles/theme';
```

You can use path aliases:

```typescript
import { Button } from '@components/Button';
import { theme } from '@styles/theme';
```

### Benefits

- Cleaner imports without complex relative paths
- Easier refactoring when moving files
- Better code organization
- Improved maintainability
- Consistent import patterns across the codebase

### IDE Support

Most modern IDEs (VS Code, WebStorm, etc.) support TypeScript path aliases out of the box. If you're experiencing any issues with path resolution in your IDE, ensure that:

1. The TypeScript language service is enabled
2. Your IDE is using the project's `tsconfig.json` for configuration
3. The IDE has reloaded the TypeScript configuration after changes
