<template>
    <div>
        <Head>
            <Title>Scripture Together</Title>
            <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"></Link>
        </Head>
        <main>
            <div class="main__inner-container">   
                
                <header>
                    <button class="prev-btn" @click="prevDay()"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
                    <div class="page-heading">
                        <h1>Day {{ day }}</h1>
                        <span class="today-date">{{ getDateDisplayFormatted() }}</span>
                    </div>
                    <button class="next-btn" @click="nextDay()"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </header>

                <div class="component-bg reading">
                    <h2>Reading</h2>

                    <ul>
                        <li>
                            <a :href="`https://www.biblegateway.com/passage/?search=${readings[day - 1].nt}&version=ESV`" :key="readings[day - 1].nt" target="_blank">{{ readings[day - 1].nt }}</a>
                        </li>
                        <li>
                            <a :href="`https://www.biblegateway.com/passage/?search=${readings[day - 1].ot}&version=ESV`" :key="readings[day - 1].ot" target="_blank">{{ readings[day - 1].ot }}</a>
                        </li>
                    </ul>
                </div>

                <div class="component-bg reflection">
                    <h2>Reflection</h2>
                    <p><strong class="sub-head">Pray for Insight</strong><br>What are the key truths God intends to communicate? Ask God to help you understand what this passage means.</p>
                    <p><strong class="sub-head">God Being Revealed</strong><br>What does this tell you about God and who He is? Spend time worshipping Him accordingly.</p>
                    <p><strong class="sub-head">Respond</strong><br>What does God want you to become, remember, share, or do differently in your life today? Ask God to help you grow.</p>
                </div>
                
            </div>
        </main>
    </div>
</template>

<script setup>

    // Fetch Data
    const { data : readings } = await useFetch('/api/wac')
    const testament = ['nt', 'ot']

    // Date Manipulations
    const today = new Date()
    const dateDisplay = ref(new Date())

    // Today's date in year x/365
    const todayInYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    const day = ref(todayInYear)

    function nextDay() {
        day.value++
        if (day.value > 365) {
            day.value = 1
        }
        dateDisplay.value.setDate(dateDisplay.value.getDate() + 1)
    }
    function prevDay() {
        day.value--
        if (day.value < 1) {
            day.value = 365
        }
        dateDisplay.value.setDate(dateDisplay.value.getDate() - 1)
    }

    function getDateDisplayFormatted() {
        let mm = dateDisplay.value.getMonth() + 1
        let dd = dateDisplay.value.getDate()
        return mm + '/' + dd
    }

</script>