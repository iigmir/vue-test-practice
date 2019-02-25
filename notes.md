### What is test?

#### Unit test
Unit test, which **test** programs per *function*, the smallest **unit**.

#### TDD: Test-driven development
1. Write tests, make wishes to those non existed functions.
2. Run tests. Expect error occurs.
3. Write functions, to make wishes come true.
4. Run tests again. Expect tests passed.
5. After tests passed, try to refactor.

### So how to test?
You need to know what variable/function do you want to test?

#### About Wrapper
Assume that `wrapper` means `mount(VueInstance)`:
* `wrapper.vm` means component.
* Use `wrapper.setData()` to change variables in `data` instance, object should include any variables you need for test.
* Use `wrapper.setProps()` to change variables in `props` instance, as well as `wrapper.setData()` for `data` instance.
* Test variables in `computed` instance just like what how you test variables in `data` instance: `expect( wrapper.vm.tested_variables ).to.equal( tested_cases )`.
* How to run methods? Just like this: `wrapper.vm.method_need_to_test()`.

## Reference