# What is Type Conversion and Type Coercion?

Type conversion and type coercion both refer to the process of changing a value from one data type to another in programming. However, the key difference between the two lies in how the conversion is initiated.

# Type Conversion

Type conversion, also known as explicit conversion or type casting, occurs when a programmer explicitly converts a value from one type to another using the syntax and rules defined by the programming language. This is a conscious decision by the programmer, where they use specific functions or constructs to perform the conversion. For example, in many languages, you might convert a string to an integer by using an int() function, like int("123"), which would explicitly convert the string "123" to the integer 123.


# Type Coercion

Type coercion, on the other hand, is implicit. It happens automatically by the programming language when an operation involves two or more values of different types. The language automatically converts one or more of the values to an appropriate type to complete the operation. This is often seen in languages with dynamic typing, like JavaScript. For example, when you attempt to add a number to a string in JavaScript ("The answer is: " + 42), the number is coerced into a string by the language, resulting in the concatenated string "The answer is: 42".

In summary, the difference between type conversion and type coercion lies in how the conversion is initiated and carried out: type conversion is explicitly performed by the programmer, while type coercion happens implicitly by the language during runtime.

# What is Coercion in JavaScript?

Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)