<template>
    <div>
        <Head>
            <Title>Scripture Together</Title>
            <Meta name="theme-color" content="#151F32"></Meta>
            <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"></Link>
        </Head>
        <main>
            <div class="main__inner-container">   
                
                <header>
                    <button class="prev-btn" @click="prevWeek()"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
                    <div class="page-heading">
                        <h1>Week {{ currentWeek }}</h1>
                        <span class="today-date">{{ parseDate(first) + '–' + parseDate(last) }}</span>
                    </div>
                    <button class="next-btn" @click="nextWeek()"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </header>

                
                <div class="section-title">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    <div>{{ `${readings[currentWeek - 1].part}: ${readings[currentWeek - 1].title}` }}</div>
                </div>

                <div class="component-bg reading">
                    <h2>Reading</h2>
                    <TransitionGroup name="list" tag="ul">
                        <li v-for="(reading, index) in readings[currentWeek - 1].scripture" :key="reading.verses" :data-index="index">
                            <a :href="`https://www.biblegateway.com/passage/?search=${reading.verses}&version=ESV`" target="_blank">{{ reading.verses }}</a>
                        </li>
                    </TransitionGroup>
                </div>

                <div class="component-bg reflection">
                    <h2>Reflection</h2>
                    <TransitionGroup name="list" tag="ul">
                        <li v-for="(question, index) in readings[currentWeek - 1].questions" :key="question" :data-index="index">
                            {{ question }}
                        </li>
                    </TransitionGroup>
                </div>
                
            </div>
        </main>
    </div>
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