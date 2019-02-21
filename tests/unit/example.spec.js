import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => 
{
    it("Renders props.msg when passed", () => 
    {
        const msg_cases = ["Hello World","hi"];
        msg_cases.map( el =>
        {
            const wrapper = shallowMount(HelloWorld,
                {
                    propsData: { msg: el }
                });
            expect(wrapper.text()).to.include(el);
        });
    });
});
