<template>
    <section class="container">
        <div class="top-nav">
            <nav-bar />
        </div>
            <choose-coordinates-form 
            />
        <section class="map-container-group">
            <b-button-group vertical size="lg">
                <b-button variant="success">Food</b-button>
                <b-button variant="warning">Landmarks</b-button>
                <b-button variant="danger">Medical</b-button>
            </b-button-group>
            <place-map 
            :places="places"/>
        </section>
    </section>
</template>

<script>
import ChooseCoordinatesForm from '@/components/ChooseCoordinatesForm.vue'
import NavBar from '@/components/NavBar.vue' 
import PlaceMap from '@/components/PlaceMap.vue'

export default {
    name: 'home',
    components: {
        ChooseCoordinatesForm,
        NavBar,
        PlaceMap

    },

    data: () => ({
            places: []        
    }),

    mounted() {
        const placeAPI = 'https://abq-zom-res.herokuapp.com/places'
        return fetch(placeAPI)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.places = data.places
        })
    },

    methods: {
        // getPlaces() {
        //     // const placeAPI = 'https://abq-zom-res.herokuapp.com/places'
        //     const placeAPI = 'http://localhost:3000/places'
        //     return fetch(placeAPI)
        //     // .then((res) => res.json())
        //     .then( (response) => response.json())
        //     .then( (data) => console.log(data))
        //     .then(console.log(this.places))
        //     // maybe set the point of origin based off of the input on the form
        // },
    }
}

</script>

<style>
    .map-container-group {
        display: flex;
        justify-content: space-between;
        align-items: flex-start
    }

    b-button {
        margin: 2px;
    }
</style>
