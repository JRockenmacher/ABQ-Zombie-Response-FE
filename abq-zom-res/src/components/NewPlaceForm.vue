<template>
    <section>
        <b-form @submit="onSubmit" @reset="" v-if="show">
            <!-- place name -->
            <b-form-group id="name"
                        label="Place Name: "
                        label-for="name-input"
                        description="What is this place?">
                <b-form-input id="name-input"
                            type="text"
                            placeholder="Place name here"
                            v-model="form.name">
                </b-form-input>
            </b-form-group>
            <!-- place type -->
            <b-form-group id="type"
                        label="Place Type: "
                        label-for="type-select">
                <b-form-select id="type-select"
                            :options="types"
                            v-model="form.type">
                </b-form-select>
            </b-form-group>
            <!-- latitude -->
            <b-form-group id="latitude"
                        label="Latitude: "
                        label-for="lat-input"
                        >
                <b-form-input id="lat-input"
                            type="text"
                            placeholder="latitude(numeric)">
                </b-form-input>
            </b-form-group>
            <!-- longitude -->
            <b-form-group id="longitude"
                        label="Longitude: "
                        label-for="long-input"
                        >
                <b-form-input id="long-input"
                            type="text"
                            placeholder="longitude(numeric)">
                </b-form-input>
            </b-form-group>
            <!-- description -->
            <b-form-group id="description"
                        label="Description: "
                        label-for="description-input"
                        >
                <b-form-input id="description-input"
                            type="text"
                            placeholder="Brief description of location">
                </b-form-input>
            </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </section>
</template>

<script>
export default {
    data () {
        return {
        form: {
            name: '',
            type: null,
        },
        types: [
            { text: 'Select One', value: null },
            'Food/grocery', 'Hospital/clinic', 'Landmark'
        ],
        show: true
        }
  },
    methods: {
        onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        },
        onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
        }
    } 
}
</script>

<style>

</style>
