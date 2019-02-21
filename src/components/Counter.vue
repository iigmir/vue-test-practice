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
            squared: 5,
            api: {}
        };
    },
    computed:
    {
        computed_squared()
        {
            let result = parseInt( this.squared, 10 ) * parseInt( this.squared, 10 );
            return isNaN(result) ? null : result;
        }
    },
    methods:
    {
        increment()
        {
            this.count = this.count + 1;
        },
        change_square(input)
        {
            let valid_number = isNaN( parseInt(input, 10) ) === false;
            if(valid_number)
            {
                this.squared = input;
            }
        }
    }
};
</script>