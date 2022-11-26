<template>
  <section v-editable="blok" class="rich">
    <div class="container">
      <div v-html="richtext" v-if="props.blok.richtext.content.length > 0"></div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const richtext = asyncComputed(() => renderRichText(props.blok.body))
</script>