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
    
Hello, {{ playerStore.username }}

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
