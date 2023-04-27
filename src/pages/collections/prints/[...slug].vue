<template>
  <div>
    <section class="section-print">
      <div class="container">
        <div id="wrapper" class="print__wrapper">
          <div class="print__left">
            <ClientOnly>
              <div class="print__slider">
                <button
                  id="arrow-next"
                  ref="arrowNext"
                  type="button"
                  aria-label="Product slider arrow next"
                  class="slider__nav-button print__slider-arrow"
                >
                  <IconsArrowRight></IconsArrowRight>
                </button>
                <button
                  id="arrow-prev"
                  ref="arrowPrev"
                  type="button"
                  aria-label="Product slider arrow prev"
                  class="slider__nav-button print__slider-arrow"
                >
                  <IconsArrowRight></IconsArrowRight>
                </button>
                <Swiper
                  class="print__slider"
                  :modules="[SwiperNavigation, SwiperHashNavigation]"
                  :slides-per-view="1"
                  :navigation="{
                    nextEl: arrowNext,
                    prevEl: arrowPrev
                  }"
                >
                  <SwiperSlide class="print__slider-slide" :data-hash="'slide0'">
                    <div
                      v-if="product.images.edges[0].node.src"
                      class="product-card__frame"
                      :style="{
                        background: frameColors[frameColor],
                        transform: `scale(${sizes[frameSize].value})`
                      }"
                    >
                      <div
                        class="product-card__frame-texture"
                        :style="{ opacity: frameOpacity }"
                      ></div>
                      <div class="product-card__frame-img-wrapper">
                        <NuxtPicture
                          :src="product.images.edges[0].node.src"
                          loading="lazy"
                          class="product-card__img"
                          width="360"
                        ></NuxtPicture>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="print__slider-slide" :data-hash="'slide1'">
                    <div
                      v-if="product.images.edges[1].node.src"
                      class="product-card__frame product-card__frame--decor"
                      :style="{
                        background: frameColors[frameColor],
                        transform: `scale(${sizes[frameSize].value})`
                      }"
                    >
                      <div
                        class="product-card__frame-texture"
                        :style="{ opacity: frameOpacity }"
                      ></div>
                      <div class="product-card__frame-img-wrapper">
                        <NuxtPicture
                          :src="product.images.edges[0].node.src"
                          loading="lazy"
                          class="product-card__img"
                        ></NuxtPicture>
                      </div>
                    </div>
                    <NuxtPicture :src="product.images.edges[1].node.src"></NuxtPicture>
                  </SwiperSlide>
                </Swiper>
              </div>
            </ClientOnly>
            <div class="print__faq phone-hide">
              <Dropdown>
                <template #head>
                  <h5>Printing & Framing</h5>
                </template>
                <template #body>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                    dignissimos.Lorem, ipsum dolor
                  </p>
                </template>
              </Dropdown>
              <Dropdown>
                <template #head>
                  <h5>Shipping & returns</h5>
                </template>
                <template #body>
                  <p>Body</p>
                </template>
              </Dropdown>
            </div>
          </div>
          <div class="print__info">
            <div class="print__info-head">
              <h2 v-if="product.title">
                {{ product.title }}
              </h2>
              <p v-if="product.description" class="mt-small">
                {{ product.description }}
              </p>
            </div>

            <div class="print__info-body">
              <div>
                <div>Chose {{ product.options[0].name }}</div>
                <div class="print__info-body-buttons">
                  <label
                    v-for="item in product.options[0].values"
                    :key="item"
                    class="radio-button"
                    :class="{ 'is-active': frameColor === item }"
                  >
                    <input
                      v-model="frameColor"
                      type="radio"
                      :name="product.options[0].name"
                      :value="item"
                    />
                    <span>{{ item }}</span>
                  </label>
                </div>
              </div>
              <div class="mt-medium">
                <div>Chose {{ product.options[1].name }}</div>
                <div class="print__info-body-buttons">
                  <label
                    v-for="item in product.options[1].values"
                    :key="item"
                    class="radio-button"
                    :class="{ 'is-active': frameSize === item }"
                  >
                    <input
                      v-model="frameSize"
                      type="radio"
                      :name="product.options[1].name"
                      :value="item"
                    />
                    <span>{{ item }}</span>
                    <span class="radio-button__tooltip">{{ sizes[item].size }} in</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="print__info-footer">
              <div class="print__info-footer-col-1">
                <span class="print__info-price">
                  Price:
                  <strong>{{
                    usePrice(
                      currentProductVariant.price.amount,
                      currentProductVariant.price.currencyCode
                    )
                  }}</strong>
                </span>
                <ClientOnly>
                  <div>
                    <IconsShare v-if="isSupported" @click="startShare()"></IconsShare>
                  </div>
                </ClientOnly>
              </div>

              <div class="print__info-footer-buttons">
                <button
                  type="button"
                  class="button-primary w-full"
                  :disabled="!currentProductVariant.availableForSale"
                  @click="
                    addToCart({
                      ...currentProductVariant,
                      title: product.title,
                      description: product.description,
                      image: product.images.edges[0].node.src,
                      price: currentProductVariant.price.amount,
                      currencyCode: currentProductVariant.price.currencyCode,
                      variant: {
                        frame: frameColor,
                        size: frameSize
                      }
                    })
                  "
                >
                  {{ currentProductVariant.availableForSale ? 'Add to cart' : 'Sold out' }}
                </button>
                <NuxtLink
                  to="https://wa.me/message/FB7YI2TL5L6WC1"
                  target="_blank"
                  class="print__info-footer-a m-auto mt-small"
                >
                  Ask a question
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="print__faq hide">
            <Dropdown>
              <template #head>
                <h5>Printing & Framing</h5>
              </template>
              <template #body>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                  dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                  dignissimos.Lorem, ipsum dolor
                </p>
              </template>
            </Dropdown>
            <Dropdown>
              <template #head>
                <h5>Shipping & returns</h5>
              </template>
              <template #body>
                <p>Body</p>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
    </section>
    <sectionPrints :handle="product.id"></sectionPrints>
  </div>
</template>

<script setup>
import { useCartStore } from '../../../store/cart'

const { slug } = useRoute().params

const product = await useAsyncGql({
  operation: 'ProductByHandle',
  variables: {
    handle: slug[0]
  }
})
  .then((res) => res.data.value.productByHandle)
  .catch(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found or something went wrong'
    })
  })

await useStoryblokHead(product)

const { share, isSupported } = useShare()

const frameColor = ref(product.options[0].values[0])
const frameColors = ref({
  Black: '#000000',
  White: '#ffffff',
  Natural: 'rgb(192, 178, 157, 0.6)',
  'No Frame': 'none'
})
const frameOpacity = ref(0)

asyncComputed(() => {
  if (frameColor.value === 'Black') {
    return (frameOpacity.value = 0.5)
  } else if (frameColor.value === 'White') {
    return (frameOpacity.value = 0.3)
  } else if (frameColor.value === 'Natural') {
    return (frameOpacity.value = 0.7)
  } else {
    return (frameOpacity.value = 0)
  }
})

const frameSize = ref(product.options[1].values[0])
const sizes = ref({
  A1: { value: '1', size: '28x40' },
  A2: { value: '0.8', size: '20x28' },
  A3: { value: '0.6', size: '16x20' }
})

const currentProductVariant = ref(null)

asyncComputed(() => {
  const variant = product.variants.edges.find(
    (el) =>
      el.node.selectedOptions[0].value === frameColor.value &&
      el.node.selectedOptions[1].value === frameSize.value
  )
  currentProductVariant.value = variant.node
  return variant
})

function startShare() {
  share({
    title: product.title,
    text: product.description,
    url: product.href
  })
}

const addToCart = (item) => useCartStore().addToCart(item)

const arrowPrev = ref(null)
const arrowNext = ref(null)
</script>

<style lang="scss" src="assets/scss/pages/_prints.scss"></style>
