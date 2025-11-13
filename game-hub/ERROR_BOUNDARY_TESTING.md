# Error Boundary Testing Guide

This guide shows you multiple ways to test the error boundaries in your application.

## Method 1: Using the ErrorTester Component (Recommended)

### Step 1: Add ErrorTester to App.tsx

Temporarily add the ErrorTester component to test different error boundaries:

```tsx
// In App.tsx, add this import
import ErrorTester from './components/Common/ErrorTester';

// Add inside the GridItem where you want to test (e.g., main area)
<GridItem area="main">
  <ErrorTester 
    onThrowError={(type) => {
      if (type === 'async') {
        setTimeout(() => {
          throw new Error('Async error test');
        }, 1000);
      }
    }} 
  />
  {/* ... rest of your content */}
</GridItem>
```

### Step 2: Test Different Boundaries

- **Root Boundary**: Click "Throw Render Error" - should show full-page ErrorFallback
- **Section Boundary**: Add ErrorTester inside GameGrid or GenreList ErrorBoundary - should show SectionErrorFallback

## Method 2: Temporarily Modify Existing Components

### Test Root Boundary (Full Page Error)

Add this to `App.tsx` at the top of the component:

```tsx
const App = () => {
  // TEMPORARY: Uncomment to test root error boundary
  // throw new Error('Root boundary test!');
  
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // ... rest of code
```

### Test GameGrid Section Boundary

Add this to `GameGrid.tsx`:

```tsx
const GameGrid = ({ gameQuery }: GameGridProps) => {
  // TEMPORARY: Uncomment to test GameGrid error boundary
  // throw new Error('GameGrid boundary test!');
  
  const { data, error, isLoading } = useGames(gameQuery);
  // ... rest of code
```

### Test GenreList Section Boundary

Add this to `GenreList.tsx`:

```tsx
const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  // TEMPORARY: Uncomment to test GenreList error boundary
  // throw new Error('GenreList boundary test!');
  
  const { data, error, isLoading } = useGenres();
  // ... rest of code
```

## Method 3: Browser Console Method

Open browser console and run:

```javascript
// Simulate an error in a component
throw new Error('Console test error');
```

Note: This won't trigger error boundaries directly, but you can use it to test error logging.

## Method 4: Create a Test Button Component

Add this component temporarily to trigger errors on demand:

```tsx
// TestErrorButton.tsx
import { Button } from '@chakra-ui/react';

const TestErrorButton = () => {
  const throwError = () => {
    throw new Error('Button-triggered error!');
  };
  
  return (
    <Button onClick={throwError} colorPalette="red">
      Test Error Boundary
    </Button>
  );
};
```

## Method 5: Simulate Null Reference Errors

Modify a component to access undefined properties:

```tsx
// In GameCard.tsx, temporarily add:
const GameCard = ({ game }: GameCardProps) => {
  // TEMPORARY: This will cause a runtime error
  const test = game.nonExistentProperty.deepProperty.value;
  
  return (
    // ... rest of component
  );
};
```

## What to Look For

### Root Error Boundary (main.tsx)
- ✅ Full-page error fallback appears
- ✅ Error details shown in development mode
- ✅ "Try Again" button reloads the page
- ✅ Error logged to console with "Root" boundary name

### Section Error Boundaries (App.tsx)
- ✅ Only the affected section shows error fallback
- ✅ Rest of the app continues to work
- ✅ "Retry" button resets the error boundary
- ✅ Error logged with specific boundary name ("GameGrid" or "GenreList")

## Testing Checklist

- [ ] Root boundary catches errors and shows ErrorFallback
- [ ] GameGrid boundary isolates errors (other sections work)
- [ ] GenreList boundary isolates errors (other sections work)
- [ ] Error logging appears in console
- [ ] "Try Again" / "Retry" buttons work
- [ ] Development mode shows error details
- [ ] Production mode hides error details

## Clean Up

Remember to remove test code before committing:
- Remove ErrorTester component usage
- Remove temporary throw statements
- Remove test buttons
- Restore original component code

