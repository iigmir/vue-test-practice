# test-pract

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## What is it?

A small project to practice my unit test skill.

### So how to test?

You need to know what variable/function do you want to test?

#### About Wrapper
Assume that `wrapper` means `mount(VueInstance)`:

* `wrapper.vm` means component.
* Use `wrapper.setData()` to change variables in `data` instance, object should include any variables you need for test.
* Use `wrapper.setProps()` to change variables in `props` instance, as well as `wrapper.setData()` for `data` instance.
* Test variables in `computed` instance just like what how you test variables in `data` instance: `expect( wrapper.vm.tested_variables ).to.equal( tested_cases )`.
* How to run methods? Just like this: `wrapper.vm.method_need_to_test()`.