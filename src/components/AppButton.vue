<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'ghost'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const variantClasses = computed(() => ({
  'btn-primary': props.variant === 'primary',
  'btn-outline': props.variant === 'outline',
  'btn-ghost': props.variant === 'ghost',
}))

const sizeClasses = computed(() => ({
  'btn-sm': props.size === 'sm',
  'btn-md': props.size === 'md',
  'btn-lg': props.size === 'lg',
}))
</script>

<template>
  <button
    :class="['app-button', variantClasses, sizeClasses]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.app-button {
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
}

.app-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.app-button.btn-primary {
  background: var(--vt-c-blue);
  border: 2px solid var(--vt-c-blue);
  color: white;
}

.app-button.btn-primary:hover:not(:disabled) {
  background: #2563eb;
  border-color: #2563eb;
}

.app-button.btn-outline {
  background: transparent;
  border: 2px solid var(--vt-c-blue);
  color: var(--vt-c-blue);
}

.app-button.btn-outline:hover:not(:disabled) {
  background: var(--vt-c-blue);
  color: white;
}

.app-button.btn-ghost {
  background: transparent;
  border: 2px solid transparent;
  color: var(--vt-c-blue);
}

.app-button.btn-ghost:hover:not(:disabled) {
  background: hsla(217, 91%, 60%, 0.1);
}

.app-button.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
}

.app-button.btn-md {
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
}

.app-button.btn-lg {
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
}
</style>
