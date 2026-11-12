---
prev: {"text": "Communication and Presentation", "link": "/exercises/day-2/01-communication-and-presentation.html"}
next: {"text": "Analyst", "link": "/exercises/day-2/03-analyst.html"}
---

# Section 2 — Researcher and Analyst · Researcher

## Exercise Overview

เวลา 10:45–11:25 รวม 40 นาที พวกเราจะใช้ Researcher ค้นคว้าทางเลือกลดระยะเวลางานสินเชื่อจากรายงาน Branch Operations สมมติและแหล่งสาธารณะ แล้วตรวจแหล่งอ้างอิงก่อนเลือกแนวทางทดลอง ใช้ 5 นาทีเปิด Agent Store, 25 นาทีค้นคว้า และ 10 นาทีตรวจ citations

## Prerequisites

- บัญชี Microsoft 365 Copilot ที่เข้าถึง Researcher ได้ตาม license และนโยบายองค์กร ให้ตรวจการเข้าถึงก่อนเรียน
- ดาวน์โหลด <DownloadLink href="/files/day-2/morning/Krungsri_BranchOps_Report_Source.docx">Krungsri_BranchOps_Report_Source.docx</DownloadLink>
- เปิด Microsoft 365 Copilot ด้วยบัญชีอบรม เตรียม Word หรือแอปบันทึกข้อความเพื่อเก็บ Decision Memo

## Scenario 1 — ค้นคว้าทางเลือกสำหรับ Branch Operations

### Practice 1 — ค้นหา Researcher ใน Agent Store · 5 นาที

<PracticeIllustration id="d2-e02-p01" eager />


เลือก Agent ที่ตรงกับงานค้นคว้าหลายแหล่งข้อมูล

#### Steps

1. เปิด `Agents` หรือ `All agents` ใน Microsoft 365 Copilot แล้วเปิดรายการ Agent Store ตามเมนูที่บัญชีแสดง
2. ค้นหาและเปิด `Researcher` ตรวจชื่อ Agent ก่อนเริ่มบทสนทนา หากไม่พบ ให้แจ้งผู้สอนเพื่อตรวจสิทธิ์และบันทึกว่าเส้นทาง Researcher ยังใช้ไม่ได้

#### Checkpoint

คุณเปิดบทสนทนาของ Researcher ได้ และแยกออกจาก Copilot Chat ทั่วไปได้

### Practice 2 — สร้าง Decision Memo จากหลาย source · 25 นาที

<PracticeIllustration id="d2-e02-p02" />


สร้างรายงานที่แยกข้อมูลกรณีศึกษาจากแนวปฏิบัติสาธารณะ

#### Steps

1. แนบ `Krungsri_BranchOps_Report_Source.docx` ในบทสนทนา Researcher แล้วตรวจชื่อไฟล์
2. ส่ง prompt ต่อไปนี้

   ```text
   จัดทำ Decision Memo สำหรับผู้บริหารเรื่อง
   แนวทางลด loan approval turnaround time โดยรักษาคุณภาพการตรวจสอบ

   ใช้รายงาน Branch Operations สมมติที่แนบเป็น current situation และใช้ public sources สำหรับแนวปฏิบัติ
   ให้มี Current situation, Options อย่างน้อย 3 ทาง, Pros, cons, risks และ KPI
   เสนอ Recommended pilot 2 สัปดาห์ พร้อมสิ่งที่ต้องตรวจสอบเพิ่ม
   แสดง citations และแยกข้อเท็จจริงจากไฟล์แนบออกจากข้อมูลสาธารณะ
   ```

3. ตอบคำถามของ Researcher โดยยึดขอบเขตไฟล์สมมติและเป้าหมายสองสัปดาห์ รอให้รายงานพร้อม
4. อ่านทางเลือกทั้งสาม แล้วทำเครื่องหมายทางเลือกที่คุณต้องการตรวจเพิ่ม พร้อมเหตุผลหนึ่งข้อ

#### Checkpoint

รายงานมีอย่างน้อยสามทางเลือกพร้อมข้อดี ข้อจำกัด ความเสี่ยง และ KPI โดยระบุแหล่งข้อมูลที่ใช้ [Microsoft Researcher guidance](https://support.microsoft.com/en-gb/microsoft-365-copilot/get-started-with-researcher-in-microsoft-365-copilot?nochrome=true)

### Practice 3 — ตรวจ citations ก่อนเสนอ pilot · 10 นาที

<PracticeIllustration id="d2-e02-p03" />


ยืนยันว่าข้อเสนอที่เลือกมีหลักฐานที่รองรับและระบุข้อจำกัดได้

#### Steps

1. เปิด citations อย่างน้อยสามรายการ อ่านชื่อแหล่งข้อมูล วันที่ และข้อความที่รองรับข้อเสนอ ถ้าลิงก์เปิดไม่ได้หรือเนื้อหาไม่รองรับ ให้ทำเครื่องหมายว่าต้องตรวจเพิ่ม
2. เทียบ current situation กับไฟล์ Word ต้นทางอย่างน้อยหนึ่งจุด แยกข้อเท็จจริงของกรณีศึกษาออกจากข้อเสนอการทดลอง
3. เก็บ Decision Memo และบันทึกการตรวจ citations ในเอกสารด้วยชื่อนี้

   ```text
   BranchOps_Researcher_DecisionMemo.docx
   ```

#### Checkpoint

บันทึกได้ว่า citations สามรายการรองรับข้อความไหน และมีสิ่งที่ต้องยืนยันก่อนนำ pilot ไปใช้

## Checkpoint

Decision Memo ระบุทางเลือกอย่างน้อยสามทาง เปิดตรวจ citations อย่างน้อยสามรายการ และแยกข้อมูลกรณีศึกษาจากข้อมูลสาธารณะ

## Expected Output

`BranchOps_Researcher_DecisionMemo.docx` พร้อมข้อเสนอ pilot และบันทึกแหล่งอ้างอิงที่ตรวจแล้ว

## Optional Extension

<PracticeIllustration id="d2-e02-opt" />


ถาม Copilot Chat ด้วยโจทย์เดียวกัน แล้วจดหนึ่งความต่างด้านรายละเอียดหรือการอ้างอิงที่คุณต้องตรวจ

## ไปต่อ

[← Communication and Presentation](/exercises/day-2/01-communication-and-presentation.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [Analyst →](/exercises/day-2/03-analyst.md)
