import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Actions for Todo.vue", () => 
{
    const wrapper = mount(Todo);
    let basic_architecture = {
        item: "Do something",
        // chosen used for edit and delete
        chosen: false
    };
    it("Should have basic architecture", () =>
    {
        let component = wrapper.vm;
        let todos = [
            basic_architecture,
            basic_architecture,
            basic_architecture
        ];
        wrapper.setData({ todos });
        let inited_todos = component.todos;
        // Data type
        let items_are_string = items => typeof(items.item) === "string";
        
        let chosen_are_false = items => typeof(items.item) === "string";
        expect( inited_todos.every( items_are_string ) ).to.equal( true );
        expect( inited_todos.every( chosen_are_false ) ).to.equal( true );
    });
    it("Should add, edit, and delete", () =>
    {
        // let component = wrapper.vm;
        // component.add_todo("");
    });
    // it("Button click should increment the count", () =>
    // {
    //     const button = wrapper.find("button");
    //     expect(wrapper.vm.count).to.equal(0);
    //     button.trigger("click");
    //     expect(wrapper.vm.count).to.equal(1);
    // });
});
