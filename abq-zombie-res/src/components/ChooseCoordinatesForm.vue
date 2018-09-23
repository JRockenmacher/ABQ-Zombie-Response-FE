<template>
    <section>
        <b-form inline>
            <label class="sr-only" for="lat-input">Latitiude</label>
            <b-input class="mb-2 mr-sm-2 mb-sm-0" id="lat" placeholder="numberic lattitude" />
            
            <label class="sr-only" for="long-input">Username</label>
            <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input id="long-input" placeholder="numberic longitude" />
            </b-input-group>
            <b-button variant="primary">Save</b-button>
        </b-form>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
