interface Ctor<T> {
  new (): T;
}

class Foo {
  public bar: number | undefined;
}

const f: Ctor<Foo> = Foo;
