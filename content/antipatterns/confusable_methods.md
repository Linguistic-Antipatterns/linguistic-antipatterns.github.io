# Multiple methods with confusably-similar names and effects

## Description

A class or namespace has two functions with similar names. A programmer who wants the functionality of the first function may mistakenly call the second. If the effects are similar, casual testing may mislead the programmer into thinking they had called the correct function, even if the two functions differ in some important way.

## Examples

The classic example of this is the confusion between `Thread.start()` and `Thread.run()` in Java. Python's standard thread package was based on Java's, and also has this problem. For example, consider these snippets:


```java
Thread myThread = new Thread(() => doSomethingExpensive());
myThread.run();
```

```python
class MyThread(thread):
  def run(self):
    doSomethingExpensive()

myThread = MyThread()
myThread.run()
```

In both of these, the programmer intended to call `myThread.start()`, which creates a new background thread and then runs `doSomethingExpensive` on that background thread. Instead, they have called `myThread.run()`, which runs `doSomethingExpensive()` in the current thread. This happened because `start` and `run` are confusingly similar names. Further, the application will appear to work, but it will be slower because something which should be done in the background is blocking important behavior. Because of that, this bug can go undetected in a codebase for a long time.


For another example, consider the battle between the various `load` functions in PyYAML. Originally, PyYAML had two functions called `load` and `safe_load`. There was then a debate to change `load` to a safer behavior, and use `danger_load` for the raw functionality. The story is chronicled in [this blog post](https://www.serendipidata.com/posts/safe-api-design-and-pyyaml).

Both pairs of functions raised issues of confusability. Users of a function called `load` will see YAML parse correctly and believe they have implemented this functionality correctly, but they have in fact introduced an arbitrary-code-execution vulnerability into their software. And when there is a function called `danger_load`, a programmer may be tempted to think that the `load` function implements the safer options, but in this library `load` was in some ways more dangerous than `danger_load`.


## Discussion and Lessons

[TODO]