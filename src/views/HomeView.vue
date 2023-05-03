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
      this.playerStore.setPlayerName(userTextEntry.value);
    }
  }
}

</script>

<template>

  <div class="bannerDiv">
      <h1 class="title">TITLE</h1>
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
    background-color: #f1f1f1;
    text-align: center;
    padding: 50px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.title {
    font-size: 200px;
    text-align: center;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

label {
    text-align: center;
    font-size: 26px;
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

    margin: 15px auto 0px auto
}

.userSubmitButton {
    font-size: 26px;
    width: 18%;
    margin: 40px auto 0px auto
}

</style>
