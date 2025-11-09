---
title: "TypeScript Best Practices for 2024"
date: "2024-10-05"
excerpt: "Essential TypeScript patterns and practices to write safer, more maintainable code in your projects."
tags: ["TypeScript", "Best Practices", "JavaScript"]
---

# TypeScript Best Practices for 2024

TypeScript has transformed how we write JavaScript. Here are the best practices I follow in production codebases.

## Type Safety First

### Avoid `any`

```typescript
// Bad
function processData(data: any) {
  return data.value;
}

// Good
interface Data {
  value: string;
}

function processData(data: Data) {
  return data.value;
}
```

### Use `unknown` for Uncertain Types

```typescript
function parseJSON(input: string): unknown {
  return JSON.parse(input);
}

const result = parseJSON('{"name": "John"}');

// Must type check before use
if (typeof result === 'object' && result !== null && 'name' in result) {
  console.log(result.name);
}
```

## Advanced Type Patterns

### Discriminated Unions

```typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    // TypeScript knows result.data exists
    console.log(result.data);
  } else {
    // TypeScript knows result.error exists
    console.error(result.error);
  }
}
```

### Generic Constraints

```typescript
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Usage
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const user = findById(users, 1); // Type: { id: number; name: string } | undefined
```

### Utility Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick only needed properties
type PublicUser = Pick<User, 'id' | 'name'>;

// Omit sensitive data
type UserWithoutPassword = Omit<User, 'password'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<Partial<User>>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;
```

## Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}

// Usage
function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string
    console.log(value.toUpperCase());
  }
}
```

## Function Types

```typescript
// Function type definition
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

// Generic function types
type Mapper<T, U> = (item: T) => U;

const stringToNumber: Mapper<string, number> = (str) => parseInt(str, 10);
const numberToString: Mapper<number, string> = (num) => num.toString();
```

## Const Assertions

```typescript
// Without const assertion
const config = {
  endpoint: 'https://api.example.com',
  timeout: 5000,
};
// Type: { endpoint: string; timeout: number }

// With const assertion
const config = {
  endpoint: 'https://api.example.com',
  timeout: 5000,
} as const;
// Type: { readonly endpoint: "https://api.example.com"; readonly timeout: 5000 }

// Array const assertion
const colors = ['red', 'green', 'blue'] as const;
// Type: readonly ["red", "green", "blue"]
type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
```

## Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type IsArray<T> = T extends any[] ? true : false;

type Flatten<T> = T extends Array<infer U> ? U : T;

// Usage
type A = Flatten<string[]>; // string
type B = Flatten<number>;   // number
```

## Template Literal Types

```typescript
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Endpoint = '/users' | '/posts' | '/comments';

type APIRoute = `${HTTPMethod} ${Endpoint}`;
// Result: 'GET /users' | 'GET /posts' | 'GET /comments' | 'POST /users' | ...

// Real-world example
type EventName = `on${Capitalize<'click' | 'hover' | 'focus'>}`;
// Result: 'onClick' | 'onHover' | 'onFocus'
```

## Strict Configuration

Always enable these in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## Common Pitfalls

### 1. Type Assertions

```typescript
// Avoid unnecessary assertions
const user = response.data as User; // Risky

// Better: Validate and type guard
function isValidUser(data: unknown): data is User {
  // Validation logic
  return true;
}

if (isValidUser(response.data)) {
  const user = response.data; // Safe
}
```

### 2. Index Signatures

```typescript
// Too permissive
interface Dictionary {
  [key: string]: any;
}

// Better: Be specific
interface StringDictionary {
  [key: string]: string;
}

// Even better: Use Record
type StringRecord = Record<string, string>;
```

## Testing with TypeScript

```typescript
import { describe, it, expect } from 'vitest';

describe('User Service', () => {
  it('should create a user', () => {
    const user: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashed',
    };

    expect(user.id).toBe(1);
  });
});
```

## Conclusion

TypeScript is most powerful when used correctly. These patterns have saved me countless hours of debugging and made my code more maintainable.

Start with strict mode, embrace type safety, and let TypeScript catch bugs before they reach production!
