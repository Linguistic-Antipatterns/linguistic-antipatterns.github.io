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


## Discussion and Lessons

[TODO]

[TODO: Find another example. There was one about CSV or YAML parsing and safe/unsafe variants; must find it.]