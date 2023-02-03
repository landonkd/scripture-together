<template>
    <div>
        <Head>
            <Title>Scripture Together</Title>
            <Meta name="theme-color" content="#151F32"></Meta>
            <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"></Link>
        </Head>
        <!-- TEST GIT COMMIT -->
        <main id="about-page">
            <div class="main__inner-container">
                <header>
                    <div class="page-heading">
                        <div class="emoji">📖</div>
                        <h1>Read scripture <span class="gradient-green">together.</span></h1>
                    </div>
                </header>

                <div class="color-mode-control" v-if="$colorMode.preference == 'light'">
                    <ButtonDark @click="$colorMode.preference = 'dark'"></ButtonDark>
                </div>
                <div class="color-mode-control" v-else>
                    <ButtonLight @click="$colorMode.preference = 'light'"></ButtonLight>
                </div>                

                <div class="component-bg">
                    <h2>Daily</h2>
                    <p>Read through the entire Bible with a 2 year plan (source: <a target="_blank" href="https://www.wearechurch.com/bible-reading-2021">We Are Church</a>). Each day you are given one New Testament and one Old Testament scripture to read.</p>
                    <p>The end of each month includes days to catch up on missed reading, mediate and study deeper on passages that impacted you, or prepare for and study the background for next month's reading.</p>
                    <p>Currently, only year 1 is available. Scripture references are in ESV.</p>
                    <p><a href="/wac-reading-plan-2022-year-1.pdf">Year 1 Reading Plan [PDF]</a></p>
                </div>
                
                <div class="component-bg">
                    <h2>Weekly</h2>
                    <p>A 52 week devotional designed to take you through the overarching story of the Bible while staying in sync with the traditional church calendar. This material has been taken from the book <a href="https://www.amazon.com/Make-Road-Walking-Reorientation-Activation/dp/1455514012/ref=sr_1_1?gclid=CjwKCAjwiJqWBhBdEiwAtESPaIWw4cM4FHDsnFlMVWOAw6LrwUIJJe5N4fct0xYKdJKSksrQlBASIxoCmCcQAvD_BwE&hvadid=409996860143&hvdev=c&hvlocphy=9008336&hvnetw=g&hvqmt=e&hvrand=9272172976646484643&hvtargid=kwd-434633975&hydadcr=24627_11409941&keywords=we+make+the+road+by+walking&qid=1657221974&sr=8-1"><em>We Make the Road by Walking</em></a>.</p>
                    <p>Only some of the content has been added so far. You can access it here: <NuxtLink to="/weekly">Weekly Plan</NuxtLink>.</p>
                </div>

                
            </div>
        </main>
    </div>
</template>