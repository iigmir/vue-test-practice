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
* [PHP與撰寫測試入門](http://blog.turn.tw/?p=2741)
* [先寫單元測試的12個好處！](http://blog.turn.tw/?p=2821)
* [Vue Test Utils](https://vue-test-utils.vuejs.org)
* [大家寫JavaScript時會寫測試嗎？什麼樣的情況下應該要寫測試？](https://ithelp.ithome.com.tw/questions/10095443)
* [怎么写好Javascript单元测试？](https://segmentfault.com/q/1010000000302939)
* [对 JavaScript 进行单元测试的工具](https://www.ibm.com/developerworks/cn/web/wa-tools/)