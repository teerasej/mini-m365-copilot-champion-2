import { defineConfig } from 'vitepress'
import { exerciseMenu, sidebar, slugify } from './navigation'

export default defineConfig({
  lang: 'th-TH',
  title: 'Mini M365 Copilot Champion',
  description: 'แบบฝึกหัดสองวันสำหรับพนักงาน Krungsri ฝึก Microsoft 365 Copilot และสร้างผู้ช่วยเตรียมแฟ้ม SME ด้วยข้อมูลสมมติ',
  base: '/mini-m365-copilot-champion-2/',
  cleanUrls: false,
  srcExclude: ['public/**'],
  lastUpdated: false,
  markdown: { anchor: { slugify }, lineNumbers: false },
  head: [
    ['meta', { name: 'theme-color', content: '#F4C400' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mini-m365-copilot-champion-2/favicon.svg' }]
  ],
  themeConfig: {
    siteTitle: 'Mini M365 Copilot Champion',
    nav: [
      { text: 'ภาพรวม', link: '/' },
      { text: 'แบบฝึกหัด', items: exerciseMenu },
      { text: 'ดาวน์โหลด', link: '/resources/downloads.html' }
    ],
    sidebar,
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'ในหน้านี้' },
    sidebarMenuLabel: 'แบบฝึกหัดและขั้นตอนฝึก',
    returnToTopLabel: 'กลับด้านบน',
    darkModeSwitchLabel: 'โหมดแสดงผล',
    docFooter: { prev: 'แบบฝึกหัดก่อนหน้า', next: 'แบบฝึกหัดถัดไป' },
    notFound: { title: 'ไม่พบหน้านี้', quote: 'กลับไปเลือกแบบฝึกหัดจากสารบัญหลัก', linkLabel: 'กลับภาพรวมหลักสูตร' }
  }
})
