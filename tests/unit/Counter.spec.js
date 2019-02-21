import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Count part for Counter.vue", () => 
{
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
});

describe("Square part for Counter.vue", () => 
{
    const wrapper = mount(Counter);
    it("computed_squared should be square", () =>
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
            expect(wrapper.vm.computed_squared).to.equal(el.equal);
        });
    });

    it("change_square should remain squared if input is not vaild number", () =>
    {
        ["Ninja", false].map( num =>
        {
            let component = wrapper.vm;
            let old_value = 3;
            wrapper.setData({ squared: old_value });
            component.change_square(num);
            expect(component.squared).to.equal(3);
            expect(component.computed_squared).to.equal(9);
        });
    });

    it("change_square should change squared if input is vaild number", () =>
    {
        [
            { input: 3, output: 9 },
            { input: 5, output: 25 },
            { input: 10, output: 100 },
            { input: "10", output: 100 },
        ].map( el =>
        {
            let component = wrapper.vm;
            component.change_square(el.input);
            expect(component.squared).to.equal(el.input);
            expect(component.computed_squared).to.equal(el.output);
        });
    });
});