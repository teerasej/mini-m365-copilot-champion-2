import course from './course-navigation.json'

export const exercises = course

export function slugify(title: string): string {
  return title
    .replace(/[*_`~]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s_-]/gu, '')
    .replace(/ /g, '-')
}

const pageLink = (route: string) => `${route}.html`

export const exerciseMenu = [1, 2].map(day => ({
  text: `Day ${day}`,
  items: exercises.filter(exercise => exercise.day === day).map(exercise => ({
    text: exercise.text,
    link: pageLink(exercise.route)
  }))
}))

function sidebarFor(activeId?: string) {
  return [
    {
      text: 'เส้นทางการเรียน',
      items: [
        { text: 'ภาพรวมหลักสูตร', link: '/' },
        { text: 'Day 1 — Foundation + Copilot', link: '/exercises/day-1/' },
        { text: 'Day 2 — Copilot + Agents', link: '/exercises/day-2/' },
        { text: 'ไฟล์สำหรับฝึก', link: '/resources/downloads.html' }
      ]
    },
    ...exercises.map((exercise, index) => ({
      text: `${index + 1}. ${exercise.text}`,
      link: pageLink(exercise.route),
      collapsed: exercise.id !== activeId,
      items: exercise.practices.map((practice, practiceIndex) => ({
        text: practice.id.endsWith('-opt') ? practice.text : `${practiceIndex + 1}. ${practice.text}`,
        link: `${pageLink(exercise.route)}#${practice.anchor}`
      }))
    }))
  ]
}

export const sidebar = {
  '/': sidebarFor(),
  ...Object.fromEntries(exercises.map(exercise => [exercise.route, sidebarFor(exercise.id)]))
}
