import { ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
  id: number;
  img: string;
  name: string;
  money: number;
  bonus: number;
  password: string;
}

export const useUsers = defineStore('users', () => {
  const activeUser = ref<User | null>({
    id: 1,
    img: "https://i.pinimg.com/564x/a6/f4/ca/a6f4ca53c8d505b3014256de67ccd547.jpg",
    name: 'mode:Ян Брагин',
    money: 2000,
    bonus: 0,
    password: "1",
  })
  const users = ref<User[]>([
    {
      id: 1,
      img: "https://i.pinimg.com/564x/a6/f4/ca/a6f4ca53c8d505b3014256de67ccd547.jpg",
      name: 'mode:Ян Брагин',
      money: 2000,
      bonus: 0,
      password: "1",
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/73/14/f5/7314f5f8754e5889681eaa2daf8eb7c4.jpg',
      name: 'DTLM',
      money: 2000,
      bonus: 0,
      password: "1",
    }
  ])

  const logIn = (user: User) => activeUser.value = user;
  const logOut = () => {

    activeUser.value = null;
    console.log(activeUser.value);

  }

  return { users, activeUser, logIn, logOut }
})
