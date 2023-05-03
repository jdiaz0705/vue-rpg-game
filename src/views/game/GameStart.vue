<script lang="ts">

import { usePlayerStore } from '@/stores/player';

export default {
  setup() {
    const playerStore = usePlayerStore();

    return { playerStore }
  },
  methods: {
    submitUserName() {
      const userTextEntry = document.getElementById("userTextEntry") as HTMLInputElement;
      
      if (userTextEntry.value != "") {
        this.playerStore.setPlayerName(userTextEntry.value);
        this.$router.push('/game');
      } else {
        alert("Please enter a username");
        return;
      }
    }
  }
}

</script>

<template>

  <div class="bannerDiv">
      <h1 class="title">Vue RPG Game</h1>
  </div>
  
  <div class="userEnter">
      <label>Enter Username</label>

      <input type="text" class="userInput" id="userTextEntry" />

      <button class="userSubmitButton" @click="submitUserName()">Enter</button>
  </div>

</template>

<style scoped>

body {
    background-color: rgb(77, 77, 73);
}
.bannerDiv {
    display: flex;
    background-color: #f1f1f1;
    text-align: center;
    margin: 0;
    height: 400px;
    justify-content: center;
    align-content: center;
}

.title {
    font-size: 200px;
    text-align: center;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

label {
    text-align: center;
    font-size: 26px;
    margin-top: 10px;
    color: white;
}

.userEnter {
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.userInput {
    width: 40%;
    font-size: 28px;  
    text-align: center;
    margin: 5px auto 0px auto
}

.userSubmitButton {
    font-size: 26px;
    width: 18%;
    margin: 10px auto 0px auto
}

</style>
