<template>
	<main class="page page--daily">
		<div class="page__inner-container">   
				
			<header class="header">

				<!-- CONTROLS -->
				<button class="prev-btn" @click="prevDay()" ontouchstart>
					<span class="sr-only">Previous Day</span>
					<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
				</button>

				<div class="header__main">
					<h1 class="header__title">Day {{ day }}</h1>
					<span class="header__today" :class="{ 'is-current-day': todayInYear === day }">{{ getDateDisplayFormatted() }}</span>
				</div>

				<button class="next-btn" @click="nextDay()" ontouchstart>
					<span class="sr-only">Next Day</span>
					<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
				</button>
				
			</header>

			<!-- READ -->
			<TransitionGroup v-if="plan[day].nt && plan[day].ot" name="list" tag="ul" class="scripture-list section__list">
				<li :key="plan[day].nt" class="scripture-list__item">
					<a target="_blank" :href="`https://www.esv.org/${plan[day].nt}`">
						{{ plan[day].nt }}
					</a>
				</li>
				<li :key="plan[day].ot" class="scripture-list__item">
					<a target="_blank" :href="`https://www.esv.org/${plan[day].ot}`">
						{{ plan[day].ot }}
					</a>
				</li>
			</TransitionGroup>

			<template v-else>
				<div class="section">
					<h2 class="section__heading">End of Month</h2>
					<ul class="section__list list--spacer">
						<li>Catch up on any missed reading.</li>
						<li>Meditate and study deeper on passages that have impacted you this month.</li>
						<li>Start to prepare for and study backgrounds for next month's reading.</li>
					</ul>
				</div>
			</template>
				
		</div>
	</main>
</template>

<script setup>
	// Fetch Data
	const { data : plan } = await useFetch('/api/wac-year-2')

	// Date Manipulations
	const today = new Date()
	const dateDisplay = ref(new Date())

	// Today's date in year x/365
	const todayInYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
	const day = ref(todayInYear)

	// Move forward 1 day
	function nextDay() {
		day.value++
		if (day.value > 365) {
				day.value = 1
		}
		dateDisplay.value.setDate(dateDisplay.value.getDate() + 1)
	}

  // Move back 1 day
	function prevDay() {
		day.value--
		if (day.value < 1) {
				day.value = 365
		}
		dateDisplay.value.setDate(dateDisplay.value.getDate() - 1)
	}

  // Get formatted date display
	function getDateDisplayFormatted() {
		let mm = dateDisplay.value.getMonth() + 1
		let dd = dateDisplay.value.getDate()
		return mm + '/' + dd
	}
</script>