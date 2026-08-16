# Papaya Bouy - Angular Frontend Project

## Project Overview

**Papaya Bouy** is an Angular 16 web application serving as a personal portfolio and interview preparation platform. The project showcases various Angular components, DSA (Data Structures & Algorithms) questions, interview questions, and custom UI components.

**Key Characteristics:**
- Angular 16.0.0 with TypeScript 4.9.5
- Material Design UI (Angular Material 16.1.5)
- Module-based architecture with lazy loading
- RESTful API integration with backend (localhost:8090)
- Firebase deployment ready
- Portfolio + Learning platform hybrid

---

## Tech Stack

### Core Framework
- **Angular**: 16.0.0
- **TypeScript**: 4.9.5
- **RxJS**: 7.8.1
- **Zone.js**: 0.13.0

### UI Library
- **Angular Material**: 16.1.5
- **Angular CDK**: 16.1.5
- Custom SCSS styling with Material theming

### Build & Development Tools
- **Angular CLI**: 16.0.0
- **Webpack**: (via Angular CLI)
- **Prettier**: 3.5.3 (code formatting)
- **TSLint**: 6.1.0 (deprecated but still in use)

### Testing
- **Karma**: 6.4.2
- **Jasmine**: 3.8.0
- **Protractor**: 7.0.0 (e2e - deprecated)

### Deployment
- **Firebase**: 7.0 || 8.0
- Firebase Tools: 13.0.2

---

## Project Structure

```
papaya-bouy/
├── src/
│   ├── app/
│   │   ├── components/          # Feature components
│   │   │   ├── about/
│   │   │   ├── article/
│   │   │   ├── blog/
│   │   │   ├── contact-form/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── home/
│   │   │   ├── post/
│   │   │   ├── test/
│   │   │   └── projects/        # Demo project components
│   │   │       ├── auto-complete-search-bar/
│   │   │       ├── folder-struture/
│   │   │       ├── pagination-example/
│   │   │       ├── progress-bar/
│   │   │       ├── star-rating/
│   │   │       └── tab-form/
│   │   │
│   │   ├── modules/            # Feature modules
│   │   │   ├── auth/           # Authentication module (lazy loaded)
│   │   │   │   ├── login/
│   │   │   │   └── signup/
│   │   │   ├── dsa/            # DSA questions module (lazy loaded)
│   │   │   │   ├── add-question/
│   │   │   │   ├── dsa-qs-list/
│   │   │   │   └── dsa-topic-list/
│   │   │   └── shared-module/  # Shared utilities
│   │   │       ├── components/
│   │   │       ├── interceptors/
│   │   │       ├── models/
│   │   │       └── services/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   │
│   ├── assets/
│   │   ├── files/
│   │   └── jsondata/           # Static JSON data files
│   ├── environments/           # Environment configs
│   ├── styles.scss            # Global styles
│   └── variables.scss         # SCSS variables
│
├── angular.json               # Angular workspace config
├── package.json              # Dependencies
├── tsconfig.json            # TypeScript config
├── tslint.json             # TSLint rules
├── karma.conf.js          # Test configuration
└── proxy.conf.js         # Proxy configuration for dev
```

---

## Architecture Patterns

### Module Architecture
1. **Core Module** (AppModule): Main application module with eagerly loaded components
2. **Feature Modules**: Lazy-loaded modules (auth, dsa)
3. **Shared Module**: Reusable components, services, and utilities

### Routing Strategy
- **Lazy Loading**: Auth and DSA modules are lazy loaded
- **Scroll Behavior**: Anchor scrolling and scroll position restoration enabled
- **Initial Navigation**: Blocking mode for SSR readiness

### Component Organization
- **Smart Components**: Container components with business logic
- **Dumb Components**: Presentation components (e.g., pagination, star-rating)
- **Material Components**: Heavy use of Angular Material components

### Service Layer
Located in `src/app/modules/shared-module/services/`:
- **HttpService**: Centralized HTTP client wrapper
- **UserService**: User state management
- **TokenService**: JWT token handling
- **FormValidatorService**: Form validation utilities

### Interceptors
- **TokenInterceptor**: Automatically attaches JWT tokens to API requests
- Located: `src/app/modules/shared-module/interceptors/`

---

## Key Features

### 1. Authentication System
- Login/Signup functionality
- JWT token-based authentication
- Token interceptor for API calls
- User session management

### 2. DSA Question Platform
- Browse questions by topic
- Add new questions
- Filter and search functionality
- Material Table with sorting and pagination

### 3. Project Showcase Components
- **Star Rating**: Custom star rating component
- **Progress Bar**: Animated progress indicator
- **Folder Structure**: Tree view file explorer
- **Auto-Complete Search**: Custom autocomplete implementation
- **Tab Form**: Multi-step form with tabs
- **Pagination**: Custom pagination component with product cards

### 4. Content Pages
- Blog posts
- Articles
- About page
- Contact form

---

## Development Guidelines

### Code Style
- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Always required
- **Max Line Length**: 140 characters
- **Component Selector**: `app-` prefix with kebab-case
- **Directive Selector**: `app` prefix with camelCase

### Formatting
- **Prettier** is configured for automatic formatting
- Run `npm run format` to format all files
- Run `npm run format:check` to verify formatting

### Component Naming Conventions
- Components: `<name>.component.ts`
- Templates: `<name>.component.html`
- Styles: `<name>.component.scss`
- Tests: `<name>.component.spec.ts`

### TypeScript Best Practices
- Use `public`/`private` access modifiers explicitly
- Type all function returns
- Avoid `any` type
- Use interfaces for data models

### Angular Best Practices
- Use OnPush change detection where possible
- Unsubscribe from observables in `ngOnDestroy`
- Use reactive forms over template-driven forms
- Keep components under 400 lines
- Keep methods under 75 lines

---

## API Integration

### Backend Configuration
**Base URL**: `http://localhost:8090/`

### API Endpoints (from environment.ts)
```typescript
{
  register: 'api/auth/signup',
  login: 'api/auth/login',
  generateOtp: 'api/v1/auth/generate/otp',
  deleteUser: 'api/v1/auth/delete/',
  addCar: 'api/v1/manufacturers/models/add',
  fetchManufacturers: 'api/v1/manufacturers',
  getAllQuestion: 'api/questions/all/',
  addQuestion: 'api/questions',
  getTopics: 'api/questions/topics',
  getAllStatus: 'api/questions/allstatus'
}
```

### HTTP Service Pattern
```typescript
// Use HttpService from shared module
this.httpService.getData(url).subscribe(response => {
  // handle response
});

this.httpService.postData(url, data).subscribe(response => {
  // handle response
});
```

---

## Available Scripts

### Development
```bash
npm start              # Dev server on http://0.0.0.0:4400 with proxy
npm run start.stage    # Staging server on port 4400
ng serve               # Standard Angular dev server
```

### Build
```bash
npm run build          # Production build
ng build --prod        # Production build with optimizations
```

### Testing
```bash
npm test               # Run unit tests with Karma
npm run e2e            # Run e2e tests with Protractor
```

### Linting & Formatting
```bash
npm run lint           # Run TSLint
npm run format         # Format code with Prettier
npm run format:check   # Check formatting
```

### Deployment
```bash
npm run df             # Deploy to Firebase
npm run bd             # Build and deploy
```

---

## Environment Configuration

### Development Environment
- **production**: `false`
- **baseUrl**: `http://localhost:8090/`
- **port**: `4400`
- Proxy configuration enabled (proxy.conf.json)

### Production Environment
- **production**: `true`
- Backend URL should be updated in `environment.prod.ts`
- File replacements configured in `angular.json`

---

## Material Design Components

### Modules in Use
- MatSnackBarModule (notifications)
- MatCardModule (card layouts)
- MatButtonModule (buttons)
- MatIconModule (icons)
- MatTooltipModule (tooltips)
- MatFormFieldModule (form inputs)
- MatInputModule (input fields)
- MatTableModule (data tables)
- MatPaginatorModule (pagination)
- MatSortModule (table sorting)
- MatCheckboxModule (checkboxes)
- MatSelectModule (dropdowns)
- MatDialogModule (modals)

### Theme
- **Development**: `deeppurple-amber` theme
- **Testing**: `pink-bluegrey` theme
- Location: Applied in `angular.json`

---

## Testing Strategy

### Unit Tests
- **Framework**: Jasmine + Karma
- **Location**: `*.spec.ts` files alongside components
- **Browser**: Chrome
- **Coverage**: Istanbul reporter
- **Coverage Output**: `./coverage/papaya-bouy`

### E2E Tests
- **Framework**: Protractor (deprecated - consider migration to Cypress/Playwright)
- **Location**: `/e2e` directory

---

## Build Configuration

### Development Build
- Source maps: enabled
- Optimization: disabled
- Vendor chunk: enabled
- Build optimizer: disabled

### Production Build
- Source maps: disabled
- Optimization: enabled
- Output hashing: all
- Vendor chunk: disabled
- Build optimizer: enabled
- AOT compilation: enabled

### Bundle Budgets
- **Initial**: Warning at 2MB, Error at 5MB
- **Component Styles**: Warning at 6KB, Error at 10KB

---

## Known Issues & Technical Debt

### 1. Deprecated Dependencies
- **TSLint**: Deprecated, should migrate to ESLint
- **Protractor**: Deprecated, should migrate to Cypress or Playwright
- **Angular 16**: Consider upgrading to Angular 17+ for latest features

### 2. Missing Features
- No state management library (NgRx/Akita)
- No comprehensive error handling strategy
- Limited accessibility features
- No PWA configuration
- No internationalization (i18n)

### 3. Code Quality Improvements Needed
- Add more unit tests (many specs are auto-generated but empty)
- Implement proper error boundaries
- Add loading states consistently
- Improve type safety (reduce implicit any)
- Add JSDoc comments to public APIs

### 4. Security Considerations
- Proxy configuration exposes backend (dev only)
- No Content Security Policy configured
- Consider adding security headers
- Review CORS settings

---

## Common Development Tasks

### Adding a New Component
```bash
ng generate component components/<component-name>
```

### Adding a New Service
```bash
ng generate service modules/shared-module/services/<service-name>
```

### Adding a New Module
```bash
ng generate module modules/<module-name> --routing
```

### Adding a New Material Component
1. Import the Material module in the relevant module
2. Add to `imports` array
3. Use in component template

### Making API Calls
1. Add endpoint to `environment.ts`
2. Use `HttpService` from shared module
3. Handle response with RxJS operators
4. Display errors using `MatSnackBar`

---

## Dependencies to Watch

### Critical Dependencies
- `@angular/*` packages should be kept in sync
- `typescript` version must match Angular compatibility
- `rxjs` version must match Angular compatibility

### Optional Upgrades
- Consider `ng-optmized-image` (already imported)
- Consider adding `@ngrx/store` for state management
- Consider adding `@angular/pwa` for offline support

---

## Deployment

### Firebase Deployment
1. Build the application: `npm run build`
2. Deploy to Firebase: `npm run df`
3. Combined: `npm run bd`

### Firebase Configuration
- Configured via Angular CLI
- Deploy builder: `@angular/fire:deploy`

---

## Debugging Tips

### Common Issues
1. **Port already in use**: Change port in `package.json` scripts
2. **Proxy errors**: Check backend is running on port 8090
3. **Material theme not applied**: Check imports in `angular.json`
4. **Lazy module not loading**: Check routing configuration

### Debug Tools
- Angular DevTools (browser extension)
- Redux DevTools (if NgRx is added)
- Chrome DevTools
- `ng.probe($0)` in console for component debugging

---

## Performance Optimization Tips

1. Use `OnPush` change detection strategy
2. Use `trackBy` in `*ngFor` loops
3. Lazy load routes where possible
4. Use `async` pipe instead of manual subscriptions
5. Optimize images (use WebP format)
6. Enable production mode for builds
7. Use Angular CLI's budgets feature
8. Consider code splitting for large modules

---

## Contributing Guidelines

### Git Workflow
1. Create feature branch from `master`
2. Make changes following code style guidelines
3. Run `npm run format` before committing
4. Run `npm run lint` to check for issues
5. Run `npm test` to ensure tests pass
6. Create pull request to `master`

### Commit Message Format
- Follow conventional commits format
- Examples:
  - `feat: add new DSA question component`
  - `fix: resolve pagination issue in product list`
  - `docs: update README with setup instructions`
  - `refactor: extract common form logic to service`

---

## Additional Notes

### Project Naming
The component naming has some inconsistencies:
- `FolderStrutureComponent` should be `FolderStructureComponent` (typo in "structure")
- `IntrestComponent` should be `InterestComponent` (typo in "interest")

### Future Enhancements
- Migrate to Angular 18+
- Add comprehensive test coverage
- Implement state management (NgRx)
- Add PWA support
- Add CI/CD pipeline
- Migrate from TSLint to ESLint
- Migrate from Protractor to modern e2e framework
- Add accessibility (a11y) improvements
- Add internationalization (i18n)
- Implement proper error tracking (Sentry/Bugsnag)

---

## Contact & Resources

- **Angular Documentation**: https://angular.io/docs
- **Material Design**: https://material.angular.io
- **RxJS Documentation**: https://rxjs.dev
- **Firebase Documentation**: https://firebase.google.com/docs

---

*Last Updated: 2026-05-10*
*Angular Version: 16.0.0*
*Node Version Requirement: 12.11.1+*