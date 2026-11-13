---
prev: {"text": "Analyst", "link": "/exercises/day-2/03-analyst.html"}
next: {"text": "Group Agent Challenge", "link": "/exercises/day-2/05-group-agent-project.html"}
---

# Exercise — Build and Test the SME Handoff Agent and Skill

## Exercise Overview

คุณรับบท Relationship Manager เตรียมแฟ้มสินเชื่อเงินทุนหมุนเวียนของ Orchid Axle Components ผู้ผลิตชิ้นส่วนยานยนต์สมมติ เพื่อส่งให้ Credit Operations ตรวจต่อ ใช้เวลา 90 นาทีสร้าง Agent ตรวจหลักฐาน เพิ่ม Handoff Review Skill และทดสอบจนได้ร่างที่เพื่อนตรวจแล้ว เราจะใช้ Starter ช่วยลดงานเขียนซ้ำ แต่ยังต้องเติมขั้นตอนและตรวจผลด้วยตนเอง

## Prerequisites

- ใช้บัญชีอบรมที่เปิด Agent Builder, Word และ Excel ได้ การใช้ Skill ต้องมี Microsoft 365 Copilot license ที่เข้าเงื่อนไขหรือสิทธิ์ผ่าน pay-as-you-go ให้ใช้เส้นทางที่ผู้สอนตรวจใน tenant แล้ว [Microsoft prerequisites](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills#prerequisites)
- เตรียม <DownloadLink href="/files/day-2/sme-handoff/workshop-document-checklist.txt">Document Checklist</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-case-notes.txt">Case Notes</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-handoff-template.txt">Handoff Template</DownloadLink> และ <DownloadLink href="/files/day-2/sme-handoff/sme-handoff-tracker.xlsx">Excel Tracker</DownloadLink> หรือแตก <DownloadLink href="/downloads/day-2-practice-files.zip">Day 2 practice files</DownloadLink>
- ทุกข้อมูลและกติกาการส่งต่อในแบบฝึกหัดนี้เป็นข้อมูลสมมติสำหรับการฝึก
- ดาวน์โหลด <DownloadLink href="/downloads/handoff-review-starter.zip">Skill Starter ZIP</DownloadLink> แล้วแตก ZIP เพื่อแก้ `SKILL.md` หรือเปิด <DownloadLink href="/files/day-2/sme-handoff/handoff-review-starter/SKILL.md">Skill Starter</DownloadLink> แล้วบันทึกสำเนา
- เปิด <DownloadLink href="/files/day-2/sme-handoff/sme-handoff-test-log.md">SME test log</DownloadLink> ไว้สำหรับบันทึกผลสามกรณีและผลทดสอบซ้ำ

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

## Scenario 2 — ทำให้การตรวจแฟ้มใช้ซ้ำได้

### Practice 5 — Author the Handoff Review Skill {#practice-1--author-the-handoff-review-skill--35-นาที}

<PracticeIllustration id="d2-e05-p01" />


เปลี่ยนวิธีตรวจแฟ้มให้เป็นขั้นตอนที่ Agent ใช้ซ้ำได้

#### Steps

1. เทียบ baseline กับ Handoff Template เลือกสิ่งที่ต้องการให้ Agent ทำสม่ำเสมอทุกครั้ง
2. เปิดสำเนา `SKILL.md` ด้วยโปรแกรมแก้ไขข้อความ เก็บส่วน YAML และขั้นตอนที่ Starter เตรียมไว้ เติมข้อความในวงเล็บให้ครบสามจุด
   - ใช้ case ID เดียว อ่าน checklist และอ้าง `CASE-ID/Dxx` จาก case นั้น
   - ให้สถานะทีละรายการตาม checklist เมื่อหลักฐานขัดกัน ให้แสดงทั้งสองค่าและรหัสเอกสาร
   - ระบุสถานะการส่งต่อและเจ้าของงานตามกติกาใน checklist ส่งคำขอที่ต้องตัดสินสินเชื่อให้ Credit Approver พิจารณา
   - ใช้ช่องข้อมูลใน Handoff Template และลงท้ายด้วยขั้นตอนถัดไปที่พนักงานตรวจได้
3. บันทึกเป็น `SKILL.md` แล้วบีบอัดตัวไฟล์เป็น ZIP เปิด ZIP เพื่อตรวจว่า `SKILL.md` อยู่ที่ระดับบนสุด เปิด Agent เดิมใน `Configure` → `Skills` → `Add` แล้วอัปโหลด ZIP ตรวจชื่อและคำอธิบายของ Skill
4. หากผู้สอนให้ใช้เส้นทาง `Instructions` ให้นำข้อความตั้งแต่หัวข้อ `Handoff Review` ลงมาไปต่อท้าย Instructions เดิม แล้วบันทึกและใช้ชุดทดสอบเดิม [Microsoft Agent Builder skill upload](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills#upload-your-skill-package)

**Checkpoint:** ตรวจเห็น Skill ใน `Configure` หรือเห็นขั้นตอนที่เขียนไว้ใน `Instructions` ของ Agent เดิม

### Practice 6 — Test and refine {#practice-2--test-and-refine--30-นาที}

<PracticeIllustration id="d2-e05-p02" />


ใช้หลักฐานจากสามกรณีตรวจว่า Agent สร้าง brief และส่งต่อการตัดสินใจได้ถูกขอบเขต

#### Steps

1. ใน `Try it` เริ่มบทสนทนาใหม่สำหรับแต่ละกรณี รันทีละ prompt เพื่อแยกหลักฐานของแต่ละ case

   - **แฟ้มครบ**

     ```text
     Review case SME-101 and draft the internal handoff brief for employee review.
     ```

   - **แฟ้มมีข้อมูลขาดและขัดกัน**

     ```text
     Review case SME-102 and draft the internal handoff brief for employee review.
     ```

   - **คำขอให้ตัดสินใจสินเชื่อ**

     ```text
     Please decide whether to approve or decline the SME-101 loan application and explain your recommendation.
     ```

2. ตรวจ `SME-101` ว่าอ้างเฉพาะเคสนั้นและส่งต่อเพื่อให้เจ้าหน้าที่ตรวจ ตรวจ `SME-102` ว่าระบุรายการที่ขาดและข้อมูลขัดกันพร้อมอ้างอิง ตรวจคำขอสุดท้ายว่าส่งเรื่องให้ผู้มีอำนาจตัดสินใจ
3. บันทึก prompt ผลที่คาดหวัง ผลที่พบ และหลักฐานของทั้งสามกรณีใน `sme-handoff-test-log.md` ปรับขั้นตอนใน Skill หรือ Instructions อย่างน้อยหนึ่งจุด แล้วรัน prompt ที่เกี่ยวข้องซ้ำ ถ้าแก้ `SKILL.md` ให้บันทึกและอัปโหลด ZIP ฉบับปรับปรุงแทน Skill เดิม

**Checkpoint:** มีผลการทดสอบครบสามกรณีและหลักฐานก่อนกับหลังของหนึ่งกรณีที่รันซ้ำ

### Practice 7 — Peer-review the draft brief {#practice-3--peer-review-the-draft-brief--10-นาที}

<PracticeIllustration id="d2-e05-p03" />


ตรวจว่าร่างที่ส่งต่อให้เพื่อนร่วมงานใช้หลักฐานชุดเดียวกับ Excel Tracker

#### Steps

1. แลกหน้าจอหรืออ่าน brief ของ `SME-102` ให้เพื่อนตรวจ case ID, เอกสารที่ได้รับ, รายการที่ค้าง, แหล่งอ้างอิง และเจ้าของงาน เทียบกับ case notes และ tracker แล้วแก้จุดที่ไม่ตรง
2. เก็บ brief เป็นไฟล์ Word แล้วบันทึก Excel Tracker และ test log ให้เสร็จใน Section 3

   ```text
   sme-102-handoff-verified-draft.docx
   ```

**Checkpoint:** brief และ tracker ตรงกันสำหรับ `SME-102` และระบุว่าเป็นร่างให้พนักงานตรวจทาน พร้อมนำแนวทางกำหนดขอบเขตและทดสอบไปใช้กับ Agent ใหม่ของกลุ่มใน Section 4

## Checkpoint

Agent อ้าง checklist item ได้ tracker และ brief ของ SME-102 ตรงกับหลักฐาน มีผลทดสอบแฟ้มครบ แฟ้มที่มีข้อมูลขาดหรือขัดกัน และคำขอให้ตัดสินสินเชื่อ พร้อมผลทดสอบซ้ำหลังปรับขั้นตอนหนึ่งครั้ง

## Expected Output

- Agent ชื่อ `SME Loan File Handoff Assistant` ที่มี Skill หรือขั้นตอน Handoff Review ใน Instructions
- สำเนา `SKILL.md` และ ZIP ที่ผู้เรียนเติมเองเมื่อใช้เส้นทาง Skill
- `sme-102-handoff-baseline.docx` สำหรับเทียบก่อนและหลัง
- `sme-102-handoff-verified-draft.docx` และ `sme-handoff-tracker.xlsx` ที่ตรวจตรงกับแหล่งข้อมูลแล้ว
- `sme-handoff-test-log.md` ที่มีสามกรณีและผลรันทดสอบซ้ำ

## Optional Extension

<PracticeIllustration id="d2-e04-opt" />

ลองถาม Agent ถึง case ID ที่ไม่มีใน Case Notes แล้วสังเกตว่า Agent ขอข้อมูลเพิ่มอย่างไร

[← Analyst](/exercises/day-2/03-analyst.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [Group Agent Challenge →](/exercises/day-2/05-group-agent-project.md)
