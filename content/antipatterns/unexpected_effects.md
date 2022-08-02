# Unexpected Side Effects

## Description

The name of a function suggests that it is pure, but it actually has an effect such as modifying some shared state or raising an exception.

## Examples

Neither the name nor documentation of Django's public `get_wsgi_application` function suggests it does anything more than return a value, nor does a quick glance at its code:

```python
def get_wsgi_application():
    """
    The public interface to Django's WSGI support. Return a WSGI callable.
    Avoids making django.core.handlers.WSGIHandler a public API, in case the
    internal WSGI implementation changes or moves in the future.
    """
    django.setup(set_prefix=False)
    return WSGIHandler()
```

However, deeper inspection shows that it affects the global state, including calling a function called `load_middleware`. There are multiple example usages (taken from [here](https://python.hotexamples.com/examples/django.core.wsgi/-/get_wsgi_application/python-get_wsgi_application-function-examples.html)) of it being used purely for effects. For example:


```python
# Loads the django Models
get_wsgi_application()
# Once loaded we can reference them
from photologue.models import Photo
from photologue.models import Gallery
```
([source](https://github.com/buildcom/fabric-remote-dashboard/blob/d77ed1b313cc2faa5f4e4fd027847b6379ea14f7/fabfile.py#L254))



## Subtypes

Two of Arnaoudova's original examples overlap heavily with this antipattern:

* [A.1]: Methods of the form "getSomething" which have effects beyond returning an attribute
* [A.3]: Methods of the form "setSomething" which have effects other than setting an attribute.
    * Arnaoudova's formulation is a bit broader. Her primary example is actually a method called `setBreadth` which does not set anything but does construct a modified version of the original object. It would more properly be called `withBreadth`.

## Discussion and Lessons

In program verification, and more broadly in artificial intelligence and philosophy, the *frame* of an action is the set of things that may be reasonably modified by it. Giving functions a narrow frame is important so that, when there is a problem, the programmer needs only think about a few things that could cause the problem. In this antipattern, the name of the function suggests a narrow frame, but the function breaks out of the frame.

For a great discussion, see [this essay](https://folk.idi.ntnu.no/gamback/teaching/TDT4138/dennett84.pdf) by Daniel Dennett.

[TODO: Need a second example]
