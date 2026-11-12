# Mini Microsoft 365 Copilot Champion — Two-Day Learner Site

หลักสูตรสองวันสำหรับพนักงาน Krungsri เวลา 09:00–16:00 วันละ 330 นาที รวม 660 นาที ฝึก Microsoft 365 Copilot และสร้าง SME Loan File Handoff Assistant ด้วยข้อมูลสมมติ

[เปิดเว็บไซต์ผู้เรียน](https://teerasej.github.io/mini-m365-copilot-champion-2/) · [อ่านเนื้อหาต้นฉบับ](docs/index.md)

## ดูเว็บไซต์ในเครื่อง

ใช้ Node 24 ตาม `.nvmrc` และติดตั้งจาก lockfile

```sh
npm ci
npm run docs:dev
```

ทดสอบไฟล์ production ด้วยคำสั่งต่อไปนี้ แล้วเปิด URL ที่แสดงใน terminal

```sh
npm run docs:build
npm run docs:preview
```

## แก้ไขเนื้อหาและไฟล์ฝึก

- `docs/index.md` เป็นภาพรวมหลักสูตร
- `docs/exercises/day-1/` และ `docs/exercises/day-2/` เป็นเนื้อหาผู้เรียนที่ใช้เผยแพร่
- `docs/resources/` เป็นหน้าดาวน์โหลดและรายการไฟล์
- `docs/public/files/` เก็บไฟล์ฝึก ส่วน `docs/public/images/` เก็บ screenshots และภาพประกอบที่ผ่านการตรวจแล้ว
- `docs/.vitepress/course-navigation.json` กำหนดลำดับแบบฝึกหัดและ practice anchors สำหรับเมนูและ sidebar
- Footer และองค์ประกอบเว็บไซต์อยู่ใน `docs/.vitepress/theme/`

หลังแก้ไฟล์ฝึก ให้สร้าง ZIP ใหม่แล้วตรวจ build

```sh
npm run downloads:build
npm run docs:build
```

VitePress ถูกตรึงที่ 1.6.4 และใช้ Vite 6.4.6 ผ่าน scoped override เพื่อแก้ dependency audit ที่พบในสาย Vite เดิม ให้ทดสอบ build และ audit ทุกครั้งเมื่อเปลี่ยน dependency

## การเผยแพร่

Workflow `Deploy learner site` สร้างเว็บไซต์จาก `main` และส่งเฉพาะ `docs/.vitepress/dist` ไป GitHub Pages ใช้ base `/mini-m365-copilot-champion-2/` ตรวจ route, downloads และ mobile navigation ก่อน release

การตรวจ tenant และการซ้อมห้องเรียนเป็นบันทึกการส่งมอบแยกจากการ build และเผยแพร่เว็บไซต์

All rights reserved by [Amaround Co., Ltd.](https://www.nextflow.in.th/)

© 2026 Teerasej Jiraphatchandej. All rights reserved.

[Email me](mailto:teerasej@nextflow.in.th) · [Facebook](https://www.facebook.com/teerasej) · [YouTube](https://www.youtube.com/teerasej)
