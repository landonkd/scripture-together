<template>
	<main class="page page--weekly">
		<article class="page__inner-container">   
				
			<!-- Controls -->
			<!-- @todo: Refactor -->
			<header class="header">
				<button class="prev-btn" @click="prevWeek()" ontouchstart>
					<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
				</button>
				<div class="header__main">
					<div class="header__title">WEEK {{ currentWeek }}</div>
					<span class="header__today">{{ parseDate(first) + '–' + parseDate(last) }}</span>
				</div>
				<button class="next-btn" @click="nextWeek()" ontouchstart>
					<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
				</button>
			</header>

			<!-- Header/Banner -->
			<!-- @todo: Refactor -->
			<header class="section-banner">
				<div>Part {{ `${readings[currentWeek - 1].part}: ${readings[currentWeek - 1].title}` }}</div>
			</header>

			<!-- READ -->
			<section class="section">
				<h2 class="section__heading">Read</h2>
				<ul class="section__list">
					<li v-for="(reading, i) in readings[currentWeek - 1].scripture" :key="reading.verses" :data-index="i">
						<a :href="`https://www.biblegateway.com/passage/?search=${reading.verses}&version=ESV`" target="_blank">{{ reading.verses }}</a>
					</li>
				</ul>
			</section>

			<!-- REMARKS -->
			<section class="section">
				<h2 class="section__heading">Remarks</h2>
				<div class="section__remarks" v-html="readings[currentWeek - 1].remarks" ></div>
			</section>

			<!-- RESPONSE -->
			<section class="section">
				<h2 class="section__heading">Response</h2>
				<ol class="section__list list--spacer">
					<li v-for="(response, i) in readings[currentWeek - 1].response" :key="question" :data-index="i">
						{{ response }}
					</li>
				</ol>
			</section>
				
		</article>
	</main>
</template>

<script setup>
	// Fetch Data
	const { data : readings } = await useFetch('/api/weekly')

	// Date Manipulations
	const today = new Date()
	const currentWeek = ref(getCurrentWeek())

	const week = 7 * 24 * 60 * 60 * 1000

	const first = ref(new Date())
	first.value.setDate(today.getDate() - today.getDay())

	const last = ref(new Date())
	last.value.setDate(first.value.getDate() + 6)


	function getCurrentWeek() {
		const oneJan = new Date(today.getFullYear(),0,1)
		const numberOfDays = Math.floor((today - oneJan) / (24 * 60 * 60 * 1000))
		return Math.ceil(numberOfDays / 7)
	}

	function nextWeek() {
		currentWeek.value++
		if (currentWeek.value > 52) {
			currentWeek.value = 1
		}
		first.value = new Date(first.value.valueOf() + week);
		last.value = new Date(last.value.valueOf() + week);
	}

	function prevWeek() {
		currentWeek.value--
		if (currentWeek.value < 1) {
			currentWeek.value = 52
		}
		first.value = new Date(first.value.valueOf() - week);
		last.value = new Date(last.value.valueOf() - week);
	}

	function parseDate(d) {
		return (d.getMonth() + 1) + '/' + d.getDate()
	}
</script>