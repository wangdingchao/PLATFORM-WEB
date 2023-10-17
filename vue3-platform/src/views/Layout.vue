<template>

    <div class ="layout-container">
        <SliderNavs />

        <div class="right-container" :style="{ marginLeft: menuStore.isCollapse ? '64px' : '210px' }">
            <TopNavs />
            <div class="content">
                <router-view></router-view>
            </div>
        </div>

    </div>

</template>

<script setup> 

import SliderNavs from "@/components/SliderNavs/index.vue"
import TopNavs from "@/components/TopNavs/index.vue"
import { useMenuStore } from "@/stores/menuStore.js"

const menuStore = useMenuStore()

</script>

<style scoped>
.right-container {
    margin-left: 210px;
    /** padding: 20px; */
    transition: 0.3s ease-in;

}

.content {
    padding: 10px;
}
</style>