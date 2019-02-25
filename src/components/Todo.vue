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
            if( String(item) === "" )
            {
                console.error("Illegal input:", item);
                return;
            }
            let remantinting_object = {
                item: String(item),
                chosen: false
            };
            let todos = [...this.todos];
            todos.push(remantinting_object);
            this.todos = todos;
            return;
        },
        edit_todos({ index, new_value })
        {
            let chosen_item = this.todos[index];
            let todos = [...this.todos];
            if(chosen_item.chosen === true)
            {
                todos[index].item = new_value;
                this.todos = todos;
            }
        },
        chose_todos({ index })
        {
            let todos = [...this.todos];
            todos[index].chosen = !todos[index].chosen;
            this.todos = todos;
        }
    }
};
</script>
