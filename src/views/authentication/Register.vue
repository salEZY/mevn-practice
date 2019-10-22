<template>
  <div>
    <h1>Register Route</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Name</label>
        <input v-model="name" type="text" class="form-control" id="name" placeholder="name" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from "../../services/AuthService";

export default {
  name: "register",
  data: function() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.name,
        password: this.password
      };
      const registerPromise = auth.registerUser(user);
      const loginPromise = auth.login(user);
      await Promise.all([registerPromise, loginPromise]);
      this.$router.push({ name: "home" });
    }
  }
};
</script>