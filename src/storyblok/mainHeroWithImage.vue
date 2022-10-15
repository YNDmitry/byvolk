<template>
	<section class="section-hero-main" v-editable="blok">
		<div class="hero-main__img-wrapper">
			<NuxtPicture
				:src="blok.bgImage?.filename"
				v-if="blok.bgImage"
				provider="storyblok"
				quality="70"
				class="hero-main__img"
			></NuxtPicture>
		</div>
		<div class="container">
			<div class="hero-main__content">
				<div class="hero-main__info">
					<h1 v-if="blok.headline">{{ blok.headline }}</h1>
					<div class="hero-main__body">
						<p v-if="blok.description" class="hero-main__p">
							{{ blok.description }}
						</p>
						<div class="hero-main__footer">
							<div class="hero-main__info-buttons">
								<template v-if="blok.buttons.length > 0">
									<NuxtLink
										:class="`button-${button.buttonType}`"
										v-for="button in blok.buttons"
										:key="button"
										:to="button.link.cached_url"
									>
										{{ button.title }}
									</NuxtLink>
								</template>
							</div>
							<div class="hero-main__stars" v-if="blok.reviewsCount > 1">
								<NuxtImg src="stars.svg"></NuxtImg>
								<span>Rated Excellent ({{ blok.reviewsCount }}+ Reviews)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>

<style lang="scss">
	.section-hero-main {
		position: relative;
		display: flex;
		padding-bottom: 128px;
		padding-top: 8vh;

		& .hero-main {
			&__img-wrapper {
				position: absolute;
				z-index: 0;
				bottom: 0;
				top: 0;
				left: 0;
				right: 0;
				width: 50%;
				background-color: black;

				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					top: 0;
					left: 0;
					right: 0;
					background-color: #f8f8f8;
					opacity: 0.75;
				}

				& img {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}
			}

			&__body {
				max-width: 620px;
				margin-left: auto;
				display: flex;
				flex-direction: column;
			}

			&__footer {
				display: flex;
				flex-direction: column;
				margin-left: auto;
				margin-top: 10vh;
			}

			&__p {
				font-weight: 200;
				font-style: italic;
				margin-left: auto;
			}

			&__info {
				display: flex;
				align-items: flex-start;
				flex-direction: column;
				gap: 30px;
				max-width: 940px;
				margin-left: auto;

				& h1 {
					text-align: right;
				}

				&-buttons {
					margin-top: 24px;
				}
			}

			&__content {
				position: relative;
				display: flex;
				align-items: flex-end;
				z-index: 1;
			}

			&__stars {
				margin-left: auto;
				display: inline-block;
				text-align: end;

				& span {
					margin-top: -8px;
					display: block;
					font-size: 8px;
				}
			}
		}
	}
</style>
