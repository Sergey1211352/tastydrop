<template>
  <div>
    <div class="user">
      <img :src="activeUser?.img" alt="" class="avatar" />
      <div class="user">
        <div class="user-main">
          <router-link :to="{ name: 'profile' }" class="user-header">
            <div class="user-name">{{ activeUser?.name }}</div>
          </router-link>
          <div class="user-bottom">
            <div class="moneyy">
              <div class="cash">{{ activeUser?.money }}₸</div>
              <div class="bonus">
                {{ activeUser?.bonus }} <img src="/public/header/egida.png" alt="" />
              </div>
              <div class="user-input">
                <label class="trade" for="trade">
                  <input
                    id="trade"
                    class="input"
                    type="text"
                    placeholder="Введите сюда ссылку на обмен"
                    v-model="writs"
                  />
                  <a href="https://steamcommunity.com/profiles/76561199482206514/tradeoffers/privacy/#trade_offer_access_url" v-if="writs.length ==   0">Узнать </a>
                </label>
                <label class="login" for="login">
                <input 
                id="login"
                class="input" 
                type="text" 
                placeholder="Введите сюда логин Steam"
                v-model="writs" 
                />
                <a href="https://store.steamphttps://store.steampowered.com/account/owered.com/account/" v-if="writs.length ==   0">Узнать </a>
              </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '@/stores/users'
const activeUser = useUsers().activeUser
const writs = ref('')
</script>

<style scoped>
.input {
  background-color: #15072b;
  color:#703dd1 ;
  border: 2px solid #703dd1;
  padding: 10px;
  width: 300px;
}

.user-input {
  width: 335px;
  height: 200px;
  display: flex;
  padding: 10px;
  margin: auto;
  margin-left: 145px;
  margin-top: -115px;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  background-color: rgb(72, 18, 122);
}

.moneyy {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: rgb(72, 18, 122);
}
.user {
  height: 100px;
  width: 300px;
  display: flex;
  background-color: rgb(72, 18, 122);
}
.avatar {
  padding: 2px;
  border: 3px solid gray;
  border-radius: 5px;
  height: 100px;
}
.user-main {
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.user img {
  width: 100px;
}
.user-name {
  color: white;
  padding-left: 10px;
}
.user-header {
  padding-top: 5px;
}
.user-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
}
.money {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.cash {
  color: rgb(255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bonus img {
  width: 20px;
}
.bonus {
  color: rgb(238, 0, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.trade {
  position: relative;
  display: flex;
  align-items: center;
}

.login {
  position: relative;
  display: flex;
  align-items: center;
}
.login a {
  position: absolute;
  right: 10px;
  color: yellow;
}
.trade a {
  position: absolute;
  right: 10px;
  color: yellow;
}
</style>
