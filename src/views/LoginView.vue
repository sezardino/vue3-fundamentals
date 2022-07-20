<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input type="email" name="email" />

      <label for="password"> Password: </label>
      <input type="password" name="password" />

      <button type="submit" name="button">Login</button>

      <!-- <p>{{ error }}</p> -->

      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>
