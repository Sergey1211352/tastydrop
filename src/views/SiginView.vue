<template>
  <div>
    <form @submit.prevent="reg()">
      <h2>Регистрация</h2>

      <label for="username">Имя пользователя:</label>
      <input type="text" id="username" v-model="newUser.name" required />
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="newUser.password" required />
      <button type="submit">Зарегистрироваться</button>
    </form>

    <router-link :to="{ name: 'login' }"></router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '@/stores/users'
const { users } = useUsers()

const newUser = <any>ref({
  id: users.length + 1,
  img: 'https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg',
  name: '',
  money: 2000,
  bonus: 0,
  password: ''
})

const reg = () => {
  users.push(newUser.value)
  console.log(users)
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: #fff;
  padding: 10px;
  border-bottom: 2px solid white;
  margin-bottom: 10px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: auto;
  background-color: hsl(271, 74%, 15%);
  padding: 50px 0;
  margin-top: 10px;
  border-radius: 10px;
}

label {
  margin-bottom: 5px;
  color: #fff;
}

input {
  padding: 5px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #000000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-size: 20px;
}

button:hover {
  transform: scale(1.1);
}
</style>
