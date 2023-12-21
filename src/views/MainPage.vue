<template>
  <main>
    <section
      v-for="(skills, index) in skillsData"
      :key="index"
      class="skills"
      :class="`${skills.type}-skills`"
    >
      <h1>{{ skills.title }}</h1>
      <ul>
        <li v-for="(skill, idx) in skills.list" :key="idx">{{ skill }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      skillsData: [
        {
          type: "web",
          title: "Web Development Skills",
          list: [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "Vue",
            "Web Accessibility",
            "Responsive Design",
          ],
        },
        {
          type: "design",
          title: "Design Skills",
          list: ["Photoshop"],
        },
        {
          type: "video-editing",
          title: "Video Editing Skills",
          list: ["Premiere Pro", "After Effects"],
        },
        {
          type: "ai",
          title: "Artificial Intelligence Skills",
          list: [
            "Python", // 기본적인 프로그래밍 언어
            "Data Analysis", // 데이터를 이해하는 것이 먼저
            "Data Preprocessing", // 데이터를 처리하는 과정
            "Machine Learning", // 기본적인 AI 기술
            "Deep Learning", // 더 고급진 AI 기술
            "Web Scraping", // 데이터를 수집하는 방법
            "Image Generation with Generative AI", // 특정 AI 응용 분야
            "Voice Modulation", // 특정 AI 응용 분야
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";

main {
  @include flex-center;
  text-align: center;
  flex-direction: column;
  padding-top: 1em;
}

.skills {
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f2f2f2;
    }
  }
}
</style>
