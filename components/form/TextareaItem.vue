<script setup lang="ts">
const props = defineProps<{
  id: string;
  value: string;
}>();
const emit = defineEmits(["update:textareaValue"]);
</script>
<template>
  <textarea
    :id="props.id"
    :value="props.value"
    rows="4"
    class="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
    @input="emit('update:textareaValue', $event)"
  ></textarea>
</template>
