<template>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            todos: []
        };
    },
    methods:
    {
        add_todo(item)
        {
            let chosen = false;
            let remantinting_object = { item, chosen };
            let todos = [...this.todos];
            todos.push(remantinting_object);
            this.todos = todos;
        }
    }
};
</script>
