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
                console.error("Illegal input");
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
        }
    }
};
</script>
