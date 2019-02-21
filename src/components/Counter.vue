<template>
    <div>
        <span class="count">{{ count }}</span>
        <button v-bind:click="increment">Increment</button>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            count: 0
        };
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