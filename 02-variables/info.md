# var, let, const

In JavaScript, var, let, and const are used to declare variables, each with different behaviors and scopes. Here's a brief overview and examples of each:

## var
- Scope: Function scope.
- Can be redeclared and updated.
- Hoisted: Yes, to the top of their function scope.

# let
- Scope: Block scope (i.e., inside curly braces {}).
- Can be updated but not redeclared in the same scope.
- Hoisted: Yes, but not initialized.

# const
- Scope: Block scope.
- Cannot be updated or redeclared.
- Hoisted: Yes, but not initialized.
- Must be initialized at declaration.

Remember, var is the oldest keyword and can lead to issues due to its function scope and hoisting behavior. let and const were introduced in ES6 (ECMAScript 2015) and are generally preferred due to their block scope, which can help prevent common errors.