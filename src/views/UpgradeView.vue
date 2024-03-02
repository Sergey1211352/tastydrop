<template>
  <div>
    <section class="rulet">
      <div>
        <div class="select-skin">
          <p>{{ select.price }}</p>
          <img :src="select.img" alt="" />
          <p>{{ select.title }}</p>
        </div>
      </div>
      <div>
        <div class="dram">
          <p>{{ (select.price / (change.price / 100)).toFixed(2) }}%</p>
        </div>
      </div>
      <div>
        <div class="change-skin">
          <p>{{ change.price }}</p>
          <img :src="change.img" alt="" />
          <p>{{ change.title }}</p>
        </div>
      </div>
    </section>
    <section class="action">
      <div class="select-skins">
        <div @click="selectSkin(skin)" class="select-skin" v-for="skin in skins" :key="skin.id">
          <p>{{ skin.price }}</p>
          <img :src="skin.img" alt="" />
          <p>{{ skin.title }}</p>
        </div>
      </div>
      <div class="change-skins">
        <div @click="changeSkins(skin)" class="change-skin" v-for="skin in skins" :key="skin.id">
          <p>{{ skin.price }}</p>
          <img :src="skin.img" alt="" />
          <p>{{ skin.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const skins = ref<any>([])

const select = ref<any>({
  price: undefined,
  img: undefined,
  title: undefined
})
const change = ref<any>({
  price: undefined,
  img: undefined,
  title: undefined
})

const selectSkin = (skin: any) => {
  select.value = skin
}
const changeSkins = (skin: any) => {
  change.value = skin
}
onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  const res = await data.json()
  skins.value = res.data
})
</script>

<style scoped>
.select-skins {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.select-skin {
  width: 150px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.change-skins {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.change-skin {
  width: 150px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.action {
  display: flex;
}
.rulet {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 1440px;
  height: 200px;
}
.dram {
  border: 10px solid slateblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
