---
prev: {"text": "Copilot Chat", "link": "/exercises/day-1/03-copilot-chat.html"}
next: {"text": "Copilot in Excel", "link": "/exercises/day-1/05-excel.html"}
---

# Exercise — Copilot in Word

## Exercise Overview

ใช้เวลา 30 นาทีสรุปเอกสารและเปลี่ยนข้อมูลเป็นตารางที่อ่านง่าย เราจะตรวจคำตอบกับต้นฉบับแล้วเก็บสำเนางานฝึกของตนเอง

## Prerequisites

- บัญชีที่ใช้ Copilot ใน Word ได้
- <DownloadLink href="/files/day-1/Business%20Idea.docx">Business Idea.docx</DownloadLink> ที่อัปโหลดใน OneDrive จาก [การเตรียมไฟล์](/exercises/day-1/03-copilot-chat.md)

## Scenario 1 — อ่านแนวคิดธุรกิจให้เห็นสาระสำคัญ

### Practice 1 — Summarize the document {#practice-1--summarize-the-document--15-นาที}

<PracticeIllustration id="d1-e04-p01" eager />


สร้างสรุปห้าหัวข้อที่เทียบกลับกับเอกสารต้นทางได้

#### Steps

1. ใน OneDrive เปิด `Business Idea.docx` ด้วย Word บนเว็บ แล้วสร้างสำเนาสำหรับฝึกตามชื่อด้านล่าง

   ```text
   Business Idea - Practice.docx
   ```

2. เปิด `Copilot` ในหน้าต่างเอกสาร ภาพตัวอย่างต่อไปนี้มาจากชุดต้นฉบับ ตำแหน่งปุ่มอาจต่างกันตามเวอร์ชันที่บัญชีอบรมได้รับ

   ![เปิด Copilot ใน Word](/images/screenshots/day-1/04-word/images/open-copilot.png)

3. วาง prompt ต่อไปนี้ใน Copilot

   ```text
   สรุปเนื้อหาสำคัญในเอกสารนี้เป็น 5 หัวข้อ
   ```

   ![ตัวอย่างการขอสรุปจากเอกสาร](/images/screenshots/day-1/04-word/images/document-summary.png)

4. เปิดตรวจข้อความต้นทางของทั้งห้าหัวข้อ แก้รายละเอียดที่คลาดเคลื่อน แล้วเพิ่มสรุปที่ตรวจแล้วไว้ท้ายสำเนาเอกสารด้วย `Add to Doc` ถ้ามี หรือคัดลอกไปวาง

#### Checkpoint

สรุปครบห้าหัวข้อและชี้ข้อความที่รองรับได้อย่างน้อยสองจุด

### Practice 2 — Structure the summary as a table {#practice-2--structure-the-summary-as-a-table--15-นาที}

<PracticeIllustration id="d1-e04-p02" />


จัดสรุปเป็นตารางที่หัวข้อและรายละเอียดสัมพันธ์กัน

#### Steps

1. เลือกข้อความสรุปห้าหัวข้อในสำเนาเอกสาร แล้วใช้ Copilot เพื่อจัดรูปแบบเป็นตาราง หากเมนูสำหรับข้อความที่เลือกไม่ปรากฏ ให้ขอรูปแบบตารางในแถบ Copilot แล้วคัดลอกผลลงเอกสาร

   ![เลือกข้อความเพื่อจัดเป็นตาราง](/images/screenshots/day-1/04-word/images/table-selection.png)

2. ใช้ prompt จากแบบฝึกหัดต้นฉบับ

   ```text
   จัดเรียงเนื้อหาเป็นตาราง โดยมีคอลัมน์ 2 คอลัมน์ คือ หัวข้อ และ รายละเอียด
   ```

3. ตรวจว่ารายละเอียดอยู่แถวเดียวกับหัวข้อที่ถูกต้อง หากต้องปรับให้อ่านง่าย ใช้ prompt นี้แล้วตรวจอีกครั้ง

   ```text
   รายการในตารางต้องเรียงเป็น bullet point
   ```

4. บันทึกสำเนาเอกสารและเปิดดูตารางอีกครั้ง

#### Checkpoint

ตารางมีสองคอลัมน์และรักษาสาระจากเอกสารต้นทางครบตามสรุปที่ตรวจแล้ว

## Checkpoint

สรุปกับตารางอธิบายเรื่องเดียวกัน และผู้เรียนตรวจแหล่งข้อมูลก่อนเก็บงาน [Microsoft Word guidance](https://support.microsoft.com/en-us/word/copilot/chat-with-copilot-about-your-word-document)

## Expected Output

`Business Idea - Practice.docx` ที่มีสรุปห้าหัวข้อและตารางสองคอลัมน์ เก็บไฟล์ต้นฉบับ `Business Idea.docx` ไว้สำหรับแบบฝึกหัด PowerPoint ใน Day 2

## Optional Extension

<PracticeIllustration id="d1-e04-opt" />


เพิ่มคำถามหนึ่งข้อที่เอกสารยังตอบไม่ได้ แล้วตรวจว่า Copilot แยกข้อมูลที่พบกับข้อมูลที่ต้องถามเพิ่มได้หรือไม่

[← Copilot Chat](/exercises/day-1/03-copilot-chat.md) · [สารบัญ Day 1](/exercises/day-1/index.md) · [Copilot in Excel →](/exercises/day-1/05-excel.md)
