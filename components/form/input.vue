<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

type InputTypes = Extract<
  InputHTMLAttributes["type"],
  "text" | "number" | "email" | "password" | "tel" | "url"
>;

interface InputProps {
  id?: string;
  label?: string;
  type?: InputTypes;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  error?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  label: "",
  type: "text",
  placeholder: "",
  error: "",
});

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const modelValue = defineModel<string | number>();

const labelIsFocused = ref(false);

const inputHasValue = computed(
  () => modelValue.value && modelValue.value.trim() !== ""
);
</script>

<template>
  <div class="flex flex-col gap-2 relative pt-2 w-full">
    <label
      :class="{
        'absolute left-3 text-gray-500 transition-all duration-200 transform origin-top-left pointer-events-none': true,
        'top-0 text-xs': labelIsFocused || inputHasValue,
        'top-2': !labelIsFocused && !inputHasValue,
      }"
      v-if="Boolean(label)"
      :for="id"
      >{{ label }}</label
    >
    <input
      :class="{
        'focus:outline-none flex h-10 w-full text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-b border-slate-200 dark:border-zinc-600 bg-transparent px-4': true,
      }"
      :type="type"
      v-model="modelValue"
      @focus="labelIsFocused = true"
      @blur="labelIsFocused = inputHasValue"
    />
  </div>
</template>
