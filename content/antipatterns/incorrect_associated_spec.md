# Name is strongly associated with an inapplicable specification

## Description

A function has a name which strongly implies it has some property which the function does not.

## Examples

Certain names very strongly indicate common pre- and postconditions for a function. It is an antipattern to use those names for functions which lack those pre- and postconditions.

Examples of how a name implies a certain specification:

* A function called `init` will enable many other functions to be called, which otherwise could not be called.
* A function called `open` must be called before calling a `read` or `write` function, and is paired with a `close` function.
* A function called `validate` will raise an exception or return some kind of error value if its input is somehow invalid.


As an example of this antipattern, the name `connect` strongly implies that it creates a connection object which will be shared across future requests. However, this is not what `Database.connect` does in Ktorm, a Kotlin library for building typesafe SQL queries. While the [docs recommend](https://www.ktorm.org/en/connect-to-databases.html#Connect-with-a-URL) writing


```kotlin
val database = Database.connect(
    url = "jdbc:mysql://localhost:3306/ktorm",
    driver = "com.mysql.jdbc.Driver",
    user = "root",
    password = "***"
)
```

what this actually does is save credentials that will be used to create a new connection for every request thereafter. This is a performance bug. A more accurate name for the operation would be `Database.withCredentials`.

A similar example is found in the internal "service communication layer" of a major software company, which we will refer to by the pseudonym "Odrin." In Odrin, the function `createAsyncRequest` sounds like it creates a request. However, it instead creates a request template; the actual arguments should be passed to this template.

```typescript
    const odrinCall = deps.odrin.createAsyncRequest(requestDefinition);
    const result = await odrinCall() // wrong
    // should be:
    // const result = await odrinCall({data: data, request: requestBody}}) 
    cb(result);
```



As a result of this issue, one former Mirdin student reported spending an entire week trying to figure out why an RPC call was "failing silently," and had half the backend team look at it. A more accurate name for this operation would be `compileAsyncRequest`. Note that this problem was exacerbated by lack of strict typing, and by the philosophy that the incorrect calls to `createAsyncRequest` (erroneously passing in the request arguments) and `odrinCall()` (not passing in the request arguments) should nonetheless be made to succeed (an application of [Postel's law](https://en.wikipedia.org/wiki/Robustness_principle)).

### Subtypes

This anti-pattern has significant overlap with the anti-pattern of name/type mismatch. Further, at least of one the antipatterns catalogued by Arnaoudova arguably falls in this category:

* [B.2]: "Validation" methods with "check" or "validate" in their name that neither return a value nor raise an exception. Arnaoudova's example is `UMLComboBox.checkCollision` from ArgoUML, which has signature `public void checkCollision(String before, String after)` and does not raise any exception.

Additionally, the anti-pattern of "Unexpected Side Effects" could be considered a subtype of this antipattern, except that the discussion here focuses on expected-but-missing properties of what a function does, whereas "Unexpected Side Effects" is about expected-but-missing properties of what a function *doesn't* do.

## Discussion and Lessons

The discussion of "errors of modular reasoning" under "Unexpected Side Effects" applies here as well. If a function `foo` calls another function which suffers from this antipattern, then a programmer will need to read the callees to know that the function is correct, as opposed to only reading `foo` itself and the names/documentation of its callees.
