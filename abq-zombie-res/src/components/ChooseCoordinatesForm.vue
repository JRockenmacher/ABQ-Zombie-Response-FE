<template>
    <section>
        <h3>Your Coordinates</h3>
        <b-form 
        @submit.prevent="onSaveCoorinates">
            <label class="sr-only" for="lat-input">Latitiude</label>
            <b-input class="mb-2 mr-sm-2 mb-sm-0" 
            id="lat"
            type="number"
            step="any" 
            placeholder="numberic lattitude"
            v-model="user.lat" />
            
            <label class="sr-only" for="long-input">Longitude</label>
            <!-- <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0"> -->
                <b-input 
                id="long-input"
                type="number"
                step="any" 
                placeholder="numberic longitude"
                v-model="user.long" />
            <!-- </b-input-group> -->
            <b-button variant="primary">Save Coordinates</b-button>
        </b-form>
    </section>
</template>

<script>
function getEmptyForm() {
    return{
        // lat/long for central ABQ
        lat: 35.106766,
        long: -106.629181,
    }
}
export default {
    
    props:
        ['saveCoordinates'],
    data: () => ({
        user: getEmptyForm(),
    }),
    methods: {
        onSaveCoorinates() {
            console.log(this.user)
            this.saveCoordinates(this.user)
            this.user = getEmptyForm()
            getEmptyForm()
        }
    }
}
</script>

<style scoped>
    input {
        margin-right: 1vw;
    }
</style>
