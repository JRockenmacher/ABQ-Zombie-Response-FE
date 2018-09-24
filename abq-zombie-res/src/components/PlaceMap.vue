<template>
    <section class="google-map">
        <GmapMap
        :center="center"
        :zoom="13"
        map-type-id="terrain"
        style="width: 70vw; height: 42vh; max-width: 900px"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
        </GmapMap>
    </section>
</template>

<script>
export default {
  name: 'place-map',
  props: ['places'],
    data: function () {
        return {
            center: {lat:35.106766, lng:-106.629181},
            markers: [
                {
                    position: {lat: 35.0883, lng: -106.617},
                    infoText: "University Hospital",
                }
            ],
            infoContent: '',
            infoWindowPos: {
                lat: 0,
                lng: 0
            },
            infoWinOpen: false,
            currentMidx: null,
            //optional: offset infowindow so it visually sits nicely on top of our marker
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },

        }
    }
};
</script>

<style>
    
</style>
