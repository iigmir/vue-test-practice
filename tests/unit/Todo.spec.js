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
        let chosen_are_false = items => typeof(items.chosen) === "boolean";
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
    it("Should not edit un-chosed todo", () =>
    {
        wrapper.setData({ todos: [] });
        [ "foo", "bar", "baz" ].map( item => component.add_todo(item) );
        // Case 1: Direct edit is not allow.
        component.edit_todos({ index: 1, new_value: "Illegal input" });
        structure_okay();
        expect( component.todos[1].item ).to.not.equal("Illegal input");
        expect( component.todos[1].item ).to.equal("bar");
        // Case 2: Execute chose_todos() twice is not allow.
        component.chose_todos({ index: 2 });
        component.chose_todos({ index: 2 });
        component.edit_todos({ index: 2, new_value: "Illegal input" });
        structure_okay();
        expect( component.todos[2].item ).to.not.equal("Illegal input");
        expect( component.todos[2].item ).to.equal("baz");
    });
    it("Should edit chosed todo", () =>
    {
        wrapper.setData({ todos: [] });
        [ "Nico", "Rin", "Hana" ].map( item => component.add_todo(item) );
        component.chose_todos({ index: 0 });
        component.edit_todos({ index: 0, new_value: "Legal input" });
        structure_okay();
        expect( component.todos[0].item ).to.not.equal("Nico");
        expect( component.todos[0].item ).to.equal("Legal input");
    });
    it("Should not delete un-chosed todo", () =>
    {
        wrapper.setData({ todos: [] });
        [ "foo", "bar", "baz" ].map( item => component.add_todo(item) );
        // Case 1: Direct edit is not allow.
        component.delete_todos({ index: 1 });
        structure_okay();
        expect( component.todos.length ).to.equal(3);
        // Case 2: Execute chose_todos() twice is not allow.
        component.chose_todos({ index: 2 });
        component.chose_todos({ index: 2 });
        component.delete_todos({ index: 2 });
        structure_okay();
        expect( component.todos.length ).to.equal(3);
    });
    it("Should delete chosed todo", () =>
    {
        wrapper.setData({ todos: [] });
        [ "Nico", "Rin", "Hana" ].map( item => component.add_todo(item) );
        component.chose_todos({ index: 0 });
        component.delete_todos({ index: 0 });
        structure_okay();
        expect( component.todos.length ).to.equal(2);
        expect( component.todos[0].item ).to.equal("Rin");
    });
});
