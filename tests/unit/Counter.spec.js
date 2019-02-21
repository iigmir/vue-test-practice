import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => 
{
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(Counter);
    it("Renders the correct markup", () =>
    {
        expect(wrapper.html()).to.include('<span class="count">0</span>');
    });
    it("Has a button", () =>
    {
        expect(wrapper.contains("button")).to.be.true;
    });
    it("Button click should increment the count", () =>
    {
        const button = wrapper.find("button");
        expect(wrapper.vm.count).to.equal(0);
        button.trigger("click");
        expect(wrapper.vm.count).to.equal(1);
    });

    it("computed_counter should be square", () =>
    {
        [
            { squared: 3, equal: 9 },
            { squared: 5, equal: 25 },
            { squared: 10, equal: 100 },
            { squared: "10", equal: 100 },
            { squared: "Ninja", equal: null },
            { squared: false, equal: null },
            // { squared: 93, equal: 1924 } // wrong case
        ].map( el =>
        {
            wrapper.setData({ squared: el.squared });
            expect(wrapper.vm.computed_counter).to.equal(el.equal);
        });
    });
});