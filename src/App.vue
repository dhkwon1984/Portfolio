<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>
    </header>
    <router-view />
    <footer>
      <p>이름: 권도형</p>
      <p>이메일: rnjsehgud84 @ gmail.com</p>
      <p>카카오톡 아이디: rnjsehgud84</p>
      <p>전화번호: 010 6449 2146</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
</style>
