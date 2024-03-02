<template>
  <div>
    <section class="division-title">
      <div class="left"></div>
      <h2>НОВЫЕ КЕЙСЫ</h2>
      <div class="right"></div>
    </section>
    <section class="box-container">
      <router-link
        v-for="box in cases"
        :key="box.id"
        :to="{ name: 'case', params: { id: box.id, name: box.title } }"
        class="box"
      >
        <img :src="box.img" alt="" />
        <p class="price">{{ box.price }}₸</p>
        <p class="title">{{ box.title }}</p>
      </router-link>
    </section>
   
  </div>
</template>

<script setup lang="ts">
import { useCases } from '@/stores/cases'
const cases = useCases().boxs
</script>

<style scoped>

.division-title {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  margin-top: 50px;
}
.left {
  width: 500px;
  height: 5px;
  border-radius: 20px;
  background: linear-gradient(10deg, hsl(269, 77%, 12%) 0%, rgba(228, 255, 0, 1) 100%);
}
.right {
  width: 500px;
  height: 5px;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(228, 255, 0, 1) 0%, hsl(269, 77%, 12%) 100%);
}
.division-title h2 {
  color: white;
}
.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1440px;
  margin: auto;
  gap: 5%;
  margin-top: 50px;
}
.box {
  width: 20%;
  padding: 20px;
  background: linear-gradient(180deg, #e06c00, #691093);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.box img {
  width: 100%;
  transition: transform 0.3s;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
}
.price {
  color: #ffe920;
  font-weight: 500;
  font-size: 20px;
}
.title {
  color: white;
  font-weight: 500;
  font-size: 26px;
}
.box:hover img {
  transform: scale(1.1) rotate(5deg);
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 34px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 34px 0px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 34px 0px rgba(255, 255, 255, 1);
}
</style>
