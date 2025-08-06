# ts的infer介绍


在 TypeScript 中，`infer` 是条件类型（Conditional Types）中用于**声明一个待推断的类型变量**的关键字。它的核心作用是：在类型匹配过程中，让 TypeScript 自动推导并捕获某个位置的类型，从而简化复杂的类型提取、转换逻辑。

`infer` 只能在条件类型的 `extends` 子句中使用，语法通常为 `infer 类型变量名`，用于“占位”需要推断的类型。


### 核心应用场景
`infer` 的主要价值在于**从复杂类型中“提取”或“推导”出子类型**，常见场景包括：


#### 1. 提取函数的返回值类型
最经典的场景之一：从函数类型中提取其返回值类型。

TypeScript 内置的 `ReturnType<T>` 就是基于 `infer` 实现的：
```typescript
// 定义：从函数类型 T 中提取返回值类型
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

// 示例
function getUser() {
  return { name: "张三", age: 20 };
}

// 提取 getUser 函数的返回值类型 { name: string; age: number }
type User = MyReturnType<typeof getUser>; 
```

原理：当 `T` 匹配“函数类型”时，`infer R` 会自动捕获该函数的返回值类型，最终通过 `R` 返回。


#### 2. 提取函数的参数类型
类似地，可以提取函数的参数类型（或某个参数的类型）。

TypeScript 内置的 `Parameters<T>` 也基于 `infer` 实现：
```typescript
// 定义：从函数类型 T 中提取参数类型组成的元组
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

// 示例
function greet(name: string, age: number) {
  return `Hello, ${name}, age ${age}`;
}

// 提取参数类型 [string, number]
type GreetParams = MyParameters<typeof greet>; 

// 提取第一个参数的类型 string
type FirstParam = GreetParams[0]; 
```


#### 3. 提取数组/元组的元素类型
从数组或元组中提取元素类型，或特定位置的元素类型：
```typescript
// 提取数组的元素类型
type ArrayItem<T> = T extends Array<infer Item> ? Item : T;

// 示例
type NumberItem = ArrayItem<number[]>; // number
type StringItem = ArrayItem<string[]>; // string


// 提取元组的第一个元素类型
type FirstElement<T> = T extends [infer First, ...any[]] ? First : never;

// 示例
type T1 = FirstElement<[string, number, boolean]>; // string
type T2 = FirstElement<[]>; // never（空元组无第一个元素）
```


#### 4. 提取 Promise 包裹的类型
从 `Promise<T>` 中提取内部的 `T` 类型（即“解包”Promise）：
```typescript
// 定义：从 Promise<T> 中提取 T
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// 示例
type P1 = UnwrapPromise<Promise<string>>; // string
type P2 = UnwrapPromise<Promise<number[]>>; // number[]
type P3 = UnwrapPromise<string>; // string（非 Promise 类型直接返回自身）
```

甚至可以处理嵌套的 Promise（如 `Promise<Promise<T>>`）：
```typescript
// 递归解包嵌套 Promise
type DeepUnwrapPromise<T> = T extends Promise<infer U> 
  ? DeepUnwrapPromise<U> 
  : T;

type P4 = DeepUnwrapPromise<Promise<Promise<boolean>>>; // boolean
```


#### 5. 提取字符串字面量的部分内容
结合模板字符串类型，可以从字符串字面量中提取特定部分：
```typescript
// 从 "前缀:值" 格式的字符串中提取 "值"
type ExtractValue<T> = T extends `${string}:${infer Value}` ? Value : T;

// 示例
type V1 = ExtractValue<"user:123">; // "123"
type V2 = ExtractValue<"role:admin">; // "admin"
type V3 = ExtractValue<"nocolon">; // "nocolon"（不匹配格式则返回自身）
```


#### 6. 处理联合类型的推断
在联合类型中，`infer` 会遵循“ distributive conditional types”规则，对联合类型的每个成员单独推断：
```typescript
type UnwrapArray<T> = T extends Array<infer Item> ? Item : T;

// 对联合类型 (string[] | number[] | boolean) 推断
type Result = UnwrapArray<string[] | number[] | boolean>; 
// 等价于 UnwrapArray<string[]> | UnwrapArray<number[]> | UnwrapArray<boolean>
// 结果：string | number | boolean
```


### 核心价值
`infer` 的本质是**让 TypeScript 自动完成“类型提取”的脏活**，避免手动编写冗长的类型逻辑。它极大增强了 TypeScript 类型系统的灵活性，使得复杂的类型转换（如函数参数提取、Promise 解包、数组元素提取等）可以用简洁的方式实现。

在实际开发中，`infer` 常用于封装通用类型工具（如上述示例），或在库/框架中处理复杂的类型映射（如 React 中的 `React.ComponentProps` 就是通过 `infer` 提取组件的 props 类型）。