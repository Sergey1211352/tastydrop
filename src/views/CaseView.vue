<template>
  <div class="container">
    <div class="app">
      <img class="pointer" src="/public/pointer.png" alt="" />
      <div class="scope">
        <ul class="list" ref="list">
          <li v-for="item in generatedItems" :key="item.id" class="list__item">
            <p>{{ item.price }}</p>
            <img :src="item.img" alt="" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <button @click="start" class="start">Generate Items</button>
    </div>

    <section class="ss">
      <div v-for="skin in skins" :key="skin.id">
        <p>{{ skin.price }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.title }}</p>
        <p>{{ calculateChance(skin) }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, nextTick } from 'vue'
import { useCases } from '@/stores/cases'

interface Props {
  id: number
  name: string
}

interface Skin {
  id: string
  title: string
  img: string
  price: number
}

const cases = useCases().boxs
const props = defineProps<Props>()
const skins = ref<Skin[]>([])
const generatedItems = ref<Skin[]>([])
const cells = 31
let isStarted = ref(false)
let isFirstStart = ref(true)
const list = ref<any>(null)

const calculateChance = (skin: Skin): number => {
  return Math.floor((cases[props.id - 1].price * 7 - skin.price * 3) / 15)
}

const generateItems = () => {
  generatedItems.value = []
  for (let i = 0; i < cells; i++) {
    const chance = Math.floor(Math.random() * skins.value.length)
    generatedItems.value.push(skins.value[chance])
  }
}
const start = () => {
  if (isStarted.value) return
  else isStarted.value = true

  if (!isFirstStart.value) {
    generateItems()
    isStarted.value = false
  } else isFirstStart.value = false

  if (list.value) {
    nextTick(() => {
      list.value.style.left = '50%'
      list.value.style.transform = 'translate3d(-50%, 0, 0)'
      const item = list.value.querySelectorAll('li')[15]
      list.value.addEventListener(
        'transitionend',
        () => {
          isStarted.value = false
          item.classList.add('active')
          console.log(item)
        },
        { once: true }
      )
    })
  }
}
const loadData = async () => {
  try {
    const data = await fetch('http://localhost:8081/')
    if (!data.ok) {
      throw new Error('Network response was not ok')
    }
    const res = await data.json()

    if (!Array.isArray(res.data)) {
      throw new Error('Data received is not an array')
    }

    skins.value = res.data.filter((skin: Skin) => {
      return cases[props.id - 1].filling.includes(skin.title)
    })

    generateItems()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(loadData)
</script>

<style scoped>
.ss {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.ss div {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.app {
  width: 650px;
  background: #1b1f24;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.app .pointer {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate3d(-50%, -25px, 0);
  height: 50px;
  filter: drop-shadow(0 0 20px rgba(230, 174, 174, 0.3));
}
.app .scope {
  overflow: hidden;
}
.app .scope .list {
  position: relative;
  display: inline-flex;
  left: 0;
  transform: translate3d(0, 0, 0);
  list-style: none;
  transition: 5s cubic-bezier(0.21, 0.53, 0.29, 0.99);
}
.app .scope .list__item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 160px;
  opacity: 0.5;
  transition: 0.3s ease;
}
.app .scope .list__item:nth-child(2n) {
  background: rgba(0, 0, 0, 0.1);
}
.app .scope .list__item.active {
  opacity: 1;
}
.app .scope .list__item.active img {
  transform: scale(1.05);
}
.app .scope .list__item img {
  width: 80%;
  height: 80%;
  -o-object-fit: contain;
  object-fit: contain;
  transition: 0.3s ease;
}
.app .start {
  padding: 8px 25px;
  border: none;
  border-radius: 5px;
  outline: none;
  background: #eb5146;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s ease;
  box-shadow: 0 0 30px 0 rgba(255, 118, 118, 0.2);
  cursor: pointer;
}
.app .start:hover {
  opacity: 0.8;
}
</style>
