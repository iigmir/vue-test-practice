<template>
    <div>
        <span class="count">{{ count }}</span>
        <button v-on:click="increment">Increment</button>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            count: 0,
            squared: 5
        };
    },
    computed:
    {
        computed_counter()
        {
            return this.squared * this.squared;
        }
    },
    methods:
    {
        increment()
        {
            this.count = this.count + 1;
        }
    }
};
</script>