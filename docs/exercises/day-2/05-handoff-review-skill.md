---
prev: {"text": "SME Handoff Assistant", "link": "/exercises/day-2/04-sme-handoff.html"}
next: false
---

# Exercise — Create and Test the Handoff Review Skill

## Exercise Overview

ใช้ Agent เดิมและ baseline จากช่วงก่อนเพื่อเขียนวิธีตรวจแฟ้มที่ใช้ซ้ำได้ เปรียบเหมือนมี checklist งานประจำให้ผู้ช่วยหยิบทำตามทุกครั้ง ใช้เวลา 75 นาทีสำหรับการเขียน ทดสอบ ปรับปรุง และตรวจ brief กับเพื่อน

## Prerequisites

- ใช้บัญชีอบรมที่เปิด Agent Builder, Word และ Excel ได้ การใช้ Skill ต้องมี Microsoft 365 Copilot license ที่เข้าเงื่อนไขหรือสิทธิ์ผ่าน pay-as-you-go ให้ใช้เส้นทางที่ผู้สอนตรวจใน tenant แล้ว [Microsoft prerequisites](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills#prerequisites)
- เตรียม <DownloadLink href="/files/day-2/sme-handoff/workshop-document-checklist.txt">Document Checklist</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-case-notes.txt">Case Notes</DownloadLink>, <DownloadLink href="/files/day-2/sme-handoff/workshop-handoff-template.txt">Handoff Template</DownloadLink> และ <DownloadLink href="/files/day-2/sme-handoff/sme-handoff-tracker.xlsx">Excel Tracker</DownloadLink> หรือแตก <DownloadLink href="/downloads/day-2-practice-files.zip">Day 2 practice files</DownloadLink>
- ทุกข้อมูลและกติกาการส่งต่อในแบบฝึกหัดนี้เป็นข้อมูลสมมติสำหรับการฝึก

- ทำ [แบบฝึกหัด SME Assistant](/exercises/day-2/04-sme-handoff.md) แล้ว และเตรียม Agent, baseline Word note และ tracker ของคุณ
- ดาวน์โหลด <DownloadLink href="/downloads/handoff-review-starter.zip">Skill Starter ZIP</DownloadLink> แล้วแตก ZIP เพื่อแก้ `SKILL.md` หรือเปิด <DownloadLink href="/files/day-2/sme-handoff/handoff-review-starter/SKILL.md">Skill Starter</DownloadLink> แล้วบันทึกสำเนา

## Scenario 1 — ทำให้การตรวจแฟ้มใช้ซ้ำได้

### Practice 1 — Author the Handoff Review Skill · 35 นาที

<PracticeIllustration id="d2-e05-p01" eager />


เปลี่ยนวิธีตรวจแฟ้มให้เป็นขั้นตอนที่ Agent ใช้ซ้ำได้

#### Steps

1. ใช้ 10 นาทีแรกเทียบ baseline กับ Handoff Template เลือกสิ่งที่ต้องการให้ Agent ทำสม่ำเสมอทุกครั้ง
2. เปิดสำเนา `SKILL.md` ด้วยโปรแกรมแก้ไขข้อความ เก็บส่วน YAML ด้านบนไว้ เขียนแทนข้อความในวงเล็บให้ครบทุกหัวข้อ
   - ใช้ case ID เดียว อ่าน checklist และอ้าง `CASE-ID/Dxx` จาก case นั้น
   - ให้สถานะทีละรายการตาม checklist เมื่อหลักฐานขัดกัน ให้แสดงทั้งสองค่าและรหัสเอกสาร
   - ระบุสถานะการส่งต่อและเจ้าของงานตามกติกาใน checklist ส่งคำขอที่ต้องตัดสินสินเชื่อให้ Credit Approver พิจารณา
   - ใช้ช่องข้อมูลใน Handoff Template และลงท้ายด้วยขั้นตอนถัดไปที่พนักงานตรวจได้
3. บันทึกเป็น `SKILL.md` แล้วบีบอัดตัวไฟล์เป็น ZIP เปิด ZIP เพื่อตรวจว่า `SKILL.md` อยู่ที่ระดับบนสุด เปิด Agent เดิมใน `Configure` → `Skills` → `Add` แล้วอัปโหลด ZIP ตรวจชื่อและคำอธิบายของ Skill
4. หากผู้สอนให้ใช้เส้นทาง `Instructions` ให้นำข้อความตั้งแต่หัวข้อ `Handoff Review` ลงมาไปต่อท้าย Instructions เดิม แล้วบันทึกและใช้ชุดทดสอบเดิม [Microsoft Agent Builder skill upload](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills#upload-your-skill-package)

**Checkpoint:** ตรวจเห็น Skill ใน `Configure` หรือเห็นขั้นตอนที่เขียนไว้ใน `Instructions` ของ Agent เดิม

### Practice 2 — Test and refine · 30 นาที

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
3. บันทึกผลสั้น ๆ ของทั้งสามกรณี ปรับขั้นตอนใน Skill หรือ Instructions อย่างน้อยหนึ่งจุด แล้วรัน prompt ที่เกี่ยวข้องซ้ำ ถ้าแก้ `SKILL.md` ให้บันทึกและอัปโหลด ZIP ฉบับปรับปรุงแทน Skill เดิม

**Checkpoint:** มีผลการทดสอบครบสามกรณีและหลักฐานก่อนกับหลังของหนึ่งกรณีที่รันซ้ำ

### Practice 3 — Peer-review the draft brief · 10 นาที

<PracticeIllustration id="d2-e05-p03" />


ตรวจว่าร่างที่ส่งต่อให้เพื่อนร่วมงานใช้หลักฐานชุดเดียวกับ Excel Tracker

#### Steps

1. แลกหน้าจอหรืออ่าน brief ของ `SME-102` ให้เพื่อนตรวจ case ID, เอกสารที่ได้รับ, รายการที่ค้าง, แหล่งอ้างอิง และเจ้าของงาน เทียบกับ case notes และ tracker แล้วแก้จุดที่ไม่ตรง
2. เก็บ brief เป็นไฟล์ Word และบันทึก Excel Tracker ของคุณเป็นผลงานจบหลักสูตร

   ```text
   sme-102-handoff-verified-draft.docx
   ```

**Checkpoint:** brief และ tracker ตรงกันสำหรับ `SME-102` และระบุว่าเป็นร่างให้พนักงานตรวจทาน ใช้ช่วงท้ายแบ่งปันหนึ่งสิ่งที่จะนำไปทดลองในงานประจำและจุดที่คนต้องตรวจผล

## Checkpoint

บันทึกผลทดสอบแฟ้มครบ แฟ้มที่มีข้อมูลขาดหรือขัดกัน และคำขอให้ตัดสินสินเชื่อ พร้อมผลรันทดสอบซ้ำหลังปรับขั้นตอนหนึ่งครั้ง

## Expected Output

- Agent เดิมที่มี Skill หรือขั้นตอน Handoff Review ใน Instructions
- สำเนา `SKILL.md` และ ZIP ที่ผู้เรียนเขียนเองเมื่อใช้เส้นทาง Skill
- `sme-102-handoff-verified-draft.docx` และ `sme-handoff-tracker.xlsx` ที่ตรวจตรงกับแหล่งข้อมูลแล้ว

## Optional Extension

<PracticeIllustration id="d2-e05-opt" />


1. ให้เพื่อนแก้หนึ่งรายการในสำเนา Case Notes จากข้อมูลที่เคยขาดเป็นข้อมูลที่ได้รับแล้ว โดยเพิ่มรหัสเอกสารและรายละเอียดที่ checklist ต้องการ เก็บไฟล์ในโฟลเดอร์ทดลองแยกจากต้นฉบับและใช้ชื่อไฟล์เดิม
2. เปิด Agent เดิมใน `Configure` → `Knowledge` นำ Case Notes ฉบับก่อนออก แล้วอัปโหลดฉบับแก้ไขแทน รอให้ไฟล์พร้อมก่อนบันทึก Agent
3. เริ่มบทสนทนาใหม่ใน `Try it` แล้วขอ review เคสเดิม ตรวจว่า Agent เปลี่ยนเฉพาะ finding ที่หลักฐานฉบับใหม่รองรับ และเก็บรายการที่ยังค้างไว้

[← SME Assistant](/exercises/day-2/04-sme-handoff.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [เก็บผลงานหลังจบหลักสูตร](/index.md#เก็บผลงานหลังจบหลักสูตร)
