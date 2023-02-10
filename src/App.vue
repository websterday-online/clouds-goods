<template lang="pug">
  UserTableComponent(
    :users="users"
    @remove="removeUserById"
  )
</template>

<script lang="ts" setup>
import { store } from "@/store";
import UserTableComponent from "@/components/blocks/UserTableComponent.vue";
import { ComputedRef, computed, onMounted } from "vue";
import { UserInterface } from "@/interface/user.interface";
import UserService from "@/services/user.service";

onMounted(async() => {
  await UserService.getAllUsers();
});

const users: ComputedRef<UserInterface[]> = computed(() => store.state.users);

const removeUserById = async(id: string): Promise<void> => {
  await UserService.deleteUserById(id)
      .then(res => console.log(res));
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
