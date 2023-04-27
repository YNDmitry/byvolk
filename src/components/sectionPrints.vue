<template>
  <section class="section-prints">
    <div class="container">
      <div class="slider__head">
        <button
          v-if="products.length > slidesPerView"
          id="prints-prev"
          ref="leftArr"
          v-motion-up
          type="button"
          aria-label="You may also like slider arrow prev"
          class="slider__nav-button is-prev"
        >
          <IconsArrowRight></IconsArrowRight>
        </button>
        <h2 class="text-center">You May Also Like</h2>
        <button
          v-if="products.length > slidesPerView"
          id="prints-next"
          ref="rightArr"
          v-motion-up
          type="button"
          aria-label="You may also like slider arrow next"
          class="slider__nav-button is-next"
        >
          <IconsArrowRight></IconsArrowRight>
        </button>
      </div>

      <Swiper
        ref="swiper"
        :modules="[SwiperNavigation]"
        :navigation="{
          nextEl: rightArr,
          prevEl: leftArr
        }"
        :slides-per-view="slidesPerView"
        :space-between="35"
        class="b-sellers__slider mt-medium"
      >
        <SwiperSlide v-for="(product, idx) in products" :key="product" class="product-card">
          <ProductBlock
            v-motion-up="{
              transition: {
                delay: 100 * idx
              }
            }"
            :handle="product.handle"
            :images="product.images.edges"
            :title="product.title"
            :currency-code="product.priceRange.minVariantPrice.currencyCode"
            :min-price="product.priceRange.minVariantPrice.amount"
            :total-inventory="product.totalInventory"
          ></ProductBlock>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  handle: {
    type: String,
    default: ''
  }
})

const products = await useAsyncGql({
  operation: 'ProductRecommendations',
  variables: {
    productId: props.handle
  }
}).then((res) => res.data.value.productRecommendations)

const leftArr = ref(null)
const rightArr = ref(null)

const slidesPerView = asyncComputed(() => {
  if (useMediaQuery('(max-width: 991px)').value !== useMediaQuery('(max-width: 700px)').value) {
    return 3
  } else if (
    useMediaQuery('(max-width: 700px)').value !== useMediaQuery('(max-width: 479px)').value
  ) {
    return 2
  } else if (useMediaQuery('(max-width: 479px)').value) {
    return 'auto'
  } else {
    return products.length
  }
})
</script>
