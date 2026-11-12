---
prev: {"text": "Analyst", "link": "/exercises/day-2/03-analyst.html"}
next: {"text": "Handoff Review Skill", "link": "/exercises/day-2/05-handoff-review-skill.html"}
---

# Exercise — Build the SME Loan File Handoff Assistant

## Exercise Overview

คุณรับบท Relationship Manager เตรียมแฟ้มสินเชื่อเงินทุนหมุนเวียนของ Orchid Axle Components ผู้ผลิตชิ้นส่วนยานยนต์สมมติ เพื่อส่งให้ Credit Operations ตรวจต่อ ใช้เวลา 90 นาทีสร้าง Agent ตรวจรายการเอกสาร และเก็บร่าง handoff ก่อนเพิ่ม Skill

## Prerequisites

- ใช้บัญชีอบรมที่เปิด Agent Builder, Word และ Excel ได้ การใช้ Skill ต้องมี Microsoft 365 Copilot license ที่เข้าเงื่อนไขหรือสิทธิ์ผ่าน pay-as-you-go ให้ใช้เส้นทางที่ผู้สอนตรวจใน tenant แล้ว [Microsoft prerequisites](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills#prerequisites)
- เตรียม <DownloadLink href="/files/day-2/sme-handoff/workshop-document-checklist.txt">Document Checklist</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-case-notes.txt">Case Notes</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-handoff-template.txt">Handoff Template</DownloadLink> และ <DownloadLink href="/files/day-2/sme-handoff/sme-handoff-tracker.xlsx">Excel Tracker</DownloadLink> หรือแตก <DownloadLink href="/downloads/day-2-practice-files.zip">Day 2 practice files</DownloadLink>
- ทุกข้อมูลและกติกาการส่งต่อในแบบฝึกหัดนี้เป็นข้อมูลสมมติสำหรับการฝึก

## Scenario 1 — เตรียมแฟ้มก่อนส่งตรวจ

### Practice 1 — Map the handoff {#practice-1--map-the-handoff--15-นาที}

<PracticeIllustration id="d2-e04-p01" eager />


ระบุว่าใครเตรียมแฟ้ม ใครตรวจต่อ และแต่ละคนต้องเห็นหลักฐานอะไร

#### Steps

1. อ่าน `Workshop Document Checklist` และดูรายการเอกสารของ `SME-102` ใน `Workshop Case Notes`
2. วาดลำดับงานสั้น ๆ จาก Relationship Manager ไปยัง Credit Operations Reviewer แล้วทำเครื่องหมายจุดที่ควรหยุดเพื่อขอข้อมูลเพิ่ม
3. เทียบกับเพื่อนว่ากรณีไหนส่งให้ตรวจต่อได้ และกรณีไหน Relationship Manager ต้องติดตามหลักฐานก่อน

**Checkpoint:** ชี้ได้ว่าใครเป็นเจ้าของงานเมื่อเอกสารครบและเมื่อยังมีรายการค้าง

### Practice 2 — Configure the agent and its Knowledge {#practice-2--configure-the-agent-and-its-knowledge--35-นาที}

<PracticeIllustration id="d2-e04-p02" />


สร้าง Agent ที่ตอบคำถามจากแหล่งข้อมูลของแบบฝึกหัดได้

#### Steps

1. ใน Microsoft 365 Copilot เปิด `New agent` แล้วเลือก `Skip to configure` ถ้ามี จากนั้นตั้ง `Name` ตามนี้

   ```text
   SME Loan File Handoff Assistant
   ```

2. ใส่ `Description` และ `Instructions` ตามลำดับ

   - **Description**

     ```text
     Helps a relationship manager check a synthetic SME loan file and draft an internal handoff for employee review.
     ```

   - **Instructions**

     ```text
     Help staff review one synthetic workshop case at a time. Base document findings on the uploaded workshop checklist and case notes, and identify the record behind each finding. Ask for the case ID when it is unclear. Use the workshop handoff template for drafts. Refer lending decisions to the authorized Credit Approver. Keep all handoff text as a draft for employee review.
     ```

3. ใน `Configure` → `Knowledge` ใช้ `Upload` เพิ่มไฟล์ `.txt` ทั้งสามไฟล์ รอให้ไฟล์พร้อม แล้วเปิด `Try it` เพื่อทดสอบ หากมี `Only use specified sources` ให้เปิดเพื่อจัดลำดับความสำคัญให้ไฟล์ที่อัปโหลด

   ```text
   What does checklist item D03 require? Name the source file and item ID.
   ```

4. ตรวจคำตอบกับ checklist แล้วบันทึก Agent เป็นของคุณเอง

**Checkpoint:** Agent ตอบได้ว่า D03 คือ Cash flow summary โดยอ้าง checklist และ item ID ที่ถูกต้อง [Microsoft Agent Builder Knowledge](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge)

### Practice 3 — Record file evidence in Excel {#practice-3--record-file-evidence-in-excel--25-นาที}

<PracticeIllustration id="d2-e04-p03" />


ตรวจรายการเอกสารทีละข้อแล้วบันทึกสถานะพร้อมหลักฐานใน Excel

#### Steps

1. เปิด `sme-handoff-tracker.xlsx` แล้วบันทึกเป็นสำเนาของคุณเอง
2. ใช้ `Try it` ขอรายการหลักฐานตั้งต้น

   ```text
   For SME-102, compare the case inventory with checklist items D01–D04. For each item, report its status and the record ID that supports it. If records disagree, quote both values and record IDs.
   ```

3. เปิด Case Notes และ Checklist ตรวจทีละรายการ กรอก `Status`, `Evidence reference`, `Finding / next action` และ `Proposed owner` ของ `SME-102` ใน Excel ใช้รหัสอ้างอิงของทั้งสองรายการเมื่อข้อมูลขัดกัน
4. ตรวจแถวสรุปก่อนเก็บไฟล์ เมื่อกรอกครบทั้งสี่รายการแล้ว แถวสรุปควรแสดงงานที่ยังต้องติดตาม

**Checkpoint:** `SME-102` มีสถานะและแหล่งอ้างอิงครบสี่รายการ พร้อมคำอธิบายของข้อมูลที่ต้องติดตาม

### Practice 4 — Save a baseline handoff note {#practice-4--save-a-baseline-handoff-note--15-นาที}

<PracticeIllustration id="d2-e04-p04" />


เก็บร่างก่อนเพิ่ม Skill ไว้เป็นตัวเทียบสำหรับการทดสอบรอบถัดไป

#### Steps

1. ขอให้ Agent ร่าง brief ใน `Try it`

   ```text
   Review case SME-102 and draft the internal handoff brief for employee review.
   ```

2. เทียบร่างกับ case notes และ Excel Tracker ทำเครื่องหมายหนึ่งจุดที่ควรแก้ เช่น สถานะ รหัสหลักฐาน หรือเจ้าของงาน เก็บคำตอบเดิมใน Word เพื่อใช้เปรียบเทียบ

   ```text
   sme-102-handoff-baseline.docx
   ```

**Checkpoint:** มีร่างก่อนเพิ่ม Skill และระบุจุดที่ต้องตรวจหรือปรับได้หนึ่งจุด

## Checkpoint

Agent อ้าง checklist item ได้ และ tracker ของ SME-102 ระบุสถานะพร้อมหลักฐานของทั้งสี่รายการ ร่าง baseline เป็นข้อมูลก่อนเพิ่ม Skill ที่ใช้เปรียบเทียบในแบบฝึกหัดถัดไป

## Expected Output

- Agent ชื่อ `SME Loan File Handoff Assistant`
- สำเนา `sme-handoff-tracker.xlsx` ที่ตรวจ SME-102 แล้ว
- `sme-102-handoff-baseline.docx`

## Optional Extension

<PracticeIllustration id="d2-e04-opt" />


ลองถาม Agent ถึง case ID ที่ไม่มีใน Case Notes แล้วสังเกตว่า Agent ขอข้อมูลเพิ่มอย่างไร

[← Analyst](/exercises/day-2/03-analyst.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [Handoff Review Skill →](/exercises/day-2/05-handoff-review-skill.md)
