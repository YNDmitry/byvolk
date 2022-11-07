<template>
  <div class="locations-select" @click="open()">
    <div class="locations-select__toggle">
      <component :is="currentFlag" class="locations-select__flag"></component>
      <IconsArrowDown></IconsArrowDown>
    </div>
    <Transition name="select">
      <ul class="locations-select__list list-unstyled" data-select-list="" v-if="isOpen">
        <li 
          class="locations-select__list-item" 
          v-for="language in data" 
          :key="language" 
          @click="selectOption(language)"
        >
          <component :is="resolveComponent(`iconsFlags${language.value.split('-')[1]}`)" class="locations-select__flag"></component>
          <span>{{ language.name }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Array
    }
  })

  const currentOption = ref(localStorage.getItem('lang')
    ? JSON.parse(localStorage.getItem('lang'))
    : props.data[14]
  )
  let currentFlag = resolveComponent(`iconsFlags${currentOption.value.value.split('-')[1]}`)
  const isOpen = ref(false)

  function open() {
    isOpen.value ? isOpen.value = false : isOpen.value = true  
  }

  function selectOption(lang) {
    localStorage.setItem('lang', JSON.stringify(lang))
    return window.location.reload()
  }
</script>
