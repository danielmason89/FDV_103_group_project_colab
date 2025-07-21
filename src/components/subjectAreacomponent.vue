<template>
  <div class="subject-badges">
    <span
      v-for="subject in subjects"
      :key="subject.name"
      class="badge"
      :class="{ selected: subject.selected }"
      @click="toggleSubject(subject.name)"
    >
      {{ subject.name }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubjectAreaFilter',
  props: {
    grid: {
      type: Boolean,
      default: false, // now unused, but kept for compatibility
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

<style scoped>
.subject-badges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 1200px) {
  .subject-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1180px) {
  .subject-badges {
    grid-template-columns: 1fr;
  }
}

.badge {
  padding: 5px 2px;
  border: 3px solid #000000;
  background-color: #dce4e4;
  border-radius: 6px;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap;
  color: #054851;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.badge.selected {
  background-color: #2c5f5f;
  color: white;
  border-color: #2c5f5f;
}

.badge:hover {
  background-color: #b7d5d5;
}
</style>
