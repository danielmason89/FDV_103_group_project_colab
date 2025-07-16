<template>
  <div class="subject-filter">
    <div
      v-for="subject in subjects"
      :key="subject.name"
      class="subject-option"
      :class="{ selected: subject.selected }"
      @click="toggleSubject(subject.name)"
    >
      <div class="checkbox">
        <svg
          v-if="subject.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="subject-name">{{ subject.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubjectAreaFilter',
  props: {
    grid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      subjects: [
        { name: 'English / Language Arts', selected: false },
        { name: 'Mathematics', selected: false },
        { name: 'Science', selected: false },
        { name: 'Social Studies', selected: false },
        { name: 'Foreign Languages', selected: false },
        { name: 'Special Education', selected: false },
        { name: 'Physical Education / Health', selected: false },
        { name: 'Arts (Visual, Music, Performing)', selected: false },
        { name: 'Technology / Computer Science', selected: false },
        { name: 'Library/Information Sciences', selected: false },
        { name: 'Counseling/Student Services', selected: false },
        { name: 'Administration/Leadership', selected: false },
        { name: 'Curriculum Development', selected: false },
        { name: 'Educational Technology/Instructional Design', selected: false },
        { name: 'Early Childhood Education', selected: false },
      ],
    }
  },
  methods: {
    toggleSubject(subjectName: string) {
      const subject = this.subjects.find((s) => s.name === subjectName)
      if (subject) {
        subject.selected = !subject.selected
        this.$emit('filter-changed', this.selectedSubjects)
      }
    },
  },
  computed: {
    selectedSubjects() {
      return this.subjects.filter((s) => s.selected).map((s) => s.name)
    },
  },
}
</script>

<template>
  <div :class="grid ? 'grid grid-cols-1 md:grid-cols-2 gap-2' : 'subject-filter'">
    <div
      v-for="subject in subjects"
      :key="subject.name"
      class="subject-option"
      :class="{ selected: subject.selected }"
      @click="toggleSubject(subject.name)"
    >
      <div class="checkbox">
        <svg
          v-if="subject.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="subject-name">{{ subject.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.subject-filter {
  width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.subject-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.subject-option:hover {
  background-color: #f0f0f0;
}

.subject-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.subject-option.selected:hover {
  background-color: #1e4545;
}

.checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #ccc;
  border-radius: 2px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.subject-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.subject-option:not(.selected) .checkbox {
  background-color: white;
  border-color: #ccc;
}

.checkmark {
  width: 10px;
  height: 10px;
}

.subject-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
