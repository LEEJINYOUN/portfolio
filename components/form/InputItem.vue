<script setup lang="ts">
const props = defineProps<{
  type: string;
  id: string;
  value: string;
}>();
const emit = defineEmits(["update:inputValue"]);
</script>
<template>
  <input
    :type="props.type"
    :id="props.id"
    :value="props.value"
    @input="emit('update:inputValue', $event)"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required
  />
</template>
