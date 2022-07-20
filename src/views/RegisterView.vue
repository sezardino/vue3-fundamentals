<template>
  <div>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input type="text" name="name" />

      <label for="email"> Email: </label>
      <input type="email" name="email" />

      <label for="password"> Password: </label>
      <input type="password" name="password" />

      <button type="submit" name="button">Register</button>

      <ul>
        <!-- <li v-for="(error, index) in errors" :key="index"> -->
        <!-- {{ error }} -->
        <!-- </li> -->
      </ul>

      <router-link to="/login"> Already have an account? Login. </router-link>
    </form>
  </div>
</template>
