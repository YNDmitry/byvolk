<template>
  <section v-editable="blok" class="section-b-sellers">
    <div class="container">
      <div class="b-sellers__wrapper">
        <div class="slider__head">
          <button
            v-if="products.length > slides"
            ref="leftArr"
            v-motion-up
            type="button"
            aria-label="Best sellers slider arrow prev"
            class="slider__nav-button is-prev"
          >
            <IconsArrowRight></IconsArrowRight>
          </button>
          <h2 v-if="blok.headline" v-motion-up>{{ blok.headline }}</h2>
          <button
            v-if="products.length > slides"
            ref="rightArr"
            v-motion-up
            type="button"
            aria-label="Best sellers slider arrow next"
            class="slider__nav-button is-next"
          >
            <IconsArrowRight></IconsArrowRight>
          </button>
        </div>

        <Swiper
          v-motion-up
          :modules="[SwiperNavigation]"
          :slides-per-view="slides"
          :space-between="35"
          :navigation="{
            nextEl: rightArr,
            prevEl: leftArr
          }"
          class="b-sellers__slider mt-medium"
        >
          <SwiperSlide v-for="product in products" :key="product.node.id" class="product-card">
            <ProductBlock
              :handle="product.node.handle"
              :images="product.node.images.edges"
              :title="product.node.title"
              :currency-code="product.node.priceRange.minVariantPrice.currencyCode"
              :min-price="product.node.priceRange.minVariantPrice.amount"
              :total-inventory="product.node.totalInventory"
            ></ProductBlock>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => {}
  }
})

const products = await useAsyncGql({
  operation: 'Collection',
  variables: {
    handle: 'best-sellers'
  }
}).then((res) => res.data.value.collection.products.edges)
const leftArr = ref(null)
const rightArr = ref(null)

const slides = ref(null)

const slidesPerView = () => {
  if (useMediaQuery('(max-width: 991px)').value !== useMediaQuery('(max-width: 700px)').value) {
    return (slides.value = 3)
  } else if (
    useMediaQuery('(max-width: 700px)').value !== useMediaQuery('(max-width: 479px)').value
  ) {
    return (slides.value = 2)
  } else if (useMediaQuery('(max-width: 479px)').value) {
    return (slides.value = 1)
  } else {
    return (slides.value = 5)
  }
}
slidesPerView()
</script>

<style lang="scss" src="assets/scss/components/_bestSellers.scss"></style>
