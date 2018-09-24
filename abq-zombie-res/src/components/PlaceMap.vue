<template>
    <section class="google-map">
        <GmapMap
        :center="center"
        :zoom="13"
        map-type-id="terrain"
        style="width:1000px; height:600px"
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
//   props: ['name'],
    data: function () {
        return {
            center: {lat:35.106766, lng:-106.629181},
            markers: [
                {
                    position: {lat: 35.0883, lng: -106.617}
                }
            ]
        }
    }
};
</script>

<style>
    
</style>
