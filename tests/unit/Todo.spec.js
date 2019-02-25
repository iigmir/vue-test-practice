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
    let component = wrapper.vm;
    let todos = [
        basic_architecture,
        basic_architecture,
        basic_architecture
    ];
    
    let structure_okay = () =>
    {
        let inited_todos = component.todos;
        let items_are_string = items => typeof(items.item) === "string";
        let chosen_are_false = items => items.chosen === false;
        expect( inited_todos.every( items_are_string ) ).to.equal( true );
        expect( inited_todos.every( chosen_are_false ) ).to.equal( true );
    };
    it("Should have basic architecture", () =>
    {
        wrapper.setData({ todos });
        structure_okay();
    });
    it("Should add todo item", () =>
    {
        wrapper.setData({ todos: [] });
        [
            "Write tests", // should add
            "Watch anime", // should add
            "Read books",  // should add
            true,  // should add
            false, // should add
            "",    // should NOT add
            123,   // should add
            0      // should add
        ].map( item => component.add_todo(item) );
        structure_okay();
        expect(component.todos.length).to.equal(7);
    });
    it("Should edit", () =>
    {
        // let component = wrapper.vm;
        // component.add_todo("");
    });
    it("Should delete", () =>
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
