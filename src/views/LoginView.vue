<template>
  <div>
    <form @submit.prevent="log()">
      <h2>Вход</h2>

      <label for="loginUsername">Имя пользователя:</label>
      <input type="text" id="loginUsername" v-model="loginUser.name" required />
      <label for="loginPassword">Пароль:</label>
      <input type="password" id="loginPassword" v-model="loginUser.password" required />
      <button type="submit">Войти</button>
    </form>
    <router-link :to="{ name: 'sigin' }"></router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsers } from '@/stores/users'
const { users, activeUser, logIn } = useUsers()
const loginUser = ref<any>({
  name: '',
  password: ''
})
const log = () => {
  const foundUser = users.find((user: any) => {
    return user.name === loginUser.value.name && user.password == loginUser.value.password
  })
  if (foundUser) {
    console.log(foundUser)

    logIn(foundUser)
  } else {
    alert('Неверное имя пользователя или пароль')
  }
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
