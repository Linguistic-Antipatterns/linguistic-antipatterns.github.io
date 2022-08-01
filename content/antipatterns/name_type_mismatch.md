# Name/Type Mismatch

## Description

The name of a function strongly suggests a return type, but the function has a different type.

Alternatively, the name of a field strongly suggests its type, but the field has a different type.

## Examples

[TODO]

## Subtypes

This antipattern contains as special cases a majority of the antipatterns catalogued by Arnaoudova's original work. It includes:


* [A.2] Methods of the form "isSomething" whose return is not a boolean
* [A.3] Methods of the form "setSomething" with a non-void return type (not explained in documentation)
* [A.4] Methods whose name is singular, but which return a collection
* [B.3] Methods of the form "getSomething" which do not return a value
* [B.4] Methods whose name is a predicate (like "shouldFoo"), but whose return is not a boolean
* [B.5] Methods whose name suggests a transformation (like "javaToNative") which do not return a value (and where the documentation does not explain where the result is stored)
* [B.6] Methods whose name is plural, which which do not return a collection.
** A few exceptions have been noted, such as people expecting that the name `getBounds` returns a `Dimension`.
* [C.1] The method name contains an antonym of a word in its return type (e.g.: `ControlEnableState disable(...)`, example found in Eclipse 1.0).
* [D.1] Field name which is singular but which is actually a collection (e.g.: `Vector target`).
* [D.2] Field name suggests a boolean, but type is non-boolean (e.g.: `int[] reached`).
* [E.1] Field name is plural, but its type is not a collection (e.g.: `boolean _stats`, example found in ArgoUML 0.10.1).
* [F.1] Field name and type contain antonyms (such as the declaration `MAssociationEnd start`, example found in ArgoUML 0.10.1).

## Discussion and Lessons

[Say something here about the Embedded Design Principle]

[Consider splitting apart no-return-value case. What about B.2 and B.7?]