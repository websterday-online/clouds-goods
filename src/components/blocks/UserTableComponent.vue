<template lang="pug">
  table.table
    thead.table__thead
      th.table__thead-th id
      th.table__thead-th nickname
      th.table__thead-th
    tbody(v-if="users.length").table__tbody
      tr(
        v-for="user in users"
        :key="user.id"
      ).table__tbody-tr
        td(v-html="user.id").table__tbody-td
        td(v-html="user.nickname").table__tbody-td
        td.table__tbody-td
          button(
            v-html="'remove'"
            @click="remove(user.id)"
          ).remove
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  users: {
    type: Array,
  },
});

const emits = defineEmits(["remove"]);

const remove = (id: string) => emits("remove", id);
</script>

<style lang="stylus">
.table
  min-width 300px
  border-collapse collapse

  &__thead
    &-th
      border-top 1px solid grey
      border-left 1px solid grey
      border-right 1px solid grey
      background-color grey
      color white

  &__tbody
    border-left 1px solid grey
    border-right 1px solid grey

  & td, & th
    height 40px
    padding-left 16px
    padding-right 16px
    text-align center
    white-space nowrap
    vertical-align middle
    border-top 1px solid grey
    border-bottom 1px solid grey
</style>
