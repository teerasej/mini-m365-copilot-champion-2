---
prev: {"text": "Researcher", "link": "/exercises/day-2/02-researcher.html"}
next: {"text": "SME Handoff Assistant", "link": "/exercises/day-2/04-sme-handoff.html"}
---

# Section 2 — Researcher and Analyst · Analyst

## Exercise Overview

เวลา 11:25–12:00 รวม 35 นาที พวกเราจะให้ Analyst วิเคราะห์ KPI ของงานสาขาและทีมบริการจากไฟล์สมมติ แล้วตรวจตัวเลขและการตีความกับ Excel ใช้ 5 นาทีสำรวจไฟล์, 15 นาทีวิเคราะห์ และ 15 นาทีตรวจผล

## Prerequisites

- บัญชี Microsoft 365 Copilot ที่เปิด Analyst ได้ตาม license และนโยบายองค์กร ให้ตรวจการเข้าถึงก่อนเรียน
- ดาวน์โหลด <DownloadLink href="/files/day-2/morning/Krungsri_BranchKPI_28days.xlsx">Krungsri_BranchKPI_28days.xlsx</DownloadLink> และเปิดดูใน Excel ได้
- ไฟล์มี sheet `Summary` และ `KPI_Raw` ใช้เป็นกรณีศึกษาสมมติสำหรับฝึกวิเคราะห์

## Scenario 1 — ตรวจความสัมพันธ์ของ complaint กับระยะเวลางาน

### Practice 1 — สำรวจข้อมูลก่อนวิเคราะห์ {#practice-1--สำรวจข้อมูลก่อนวิเคราะห์--5-นาที}

<PracticeIllustration id="d2-e03-p01" eager />


ระบุโครงสร้างและขอบเขตข้อมูลที่จะใช้วิเคราะห์

#### Steps

1. เปิด workbook ใน Excel ดู `Summary` แล้วเปิด `KPI_Raw`
2. จดช่วงวันที่ จำนวนแถวข้อมูล และชื่อคอลัมน์ที่แสดง complaint กับ loan approval turnaround time ตรวจว่ามีช่องว่างหรือหน่วยที่ต้องระวังหรือไม่

#### Checkpoint

คุณบอกช่วงข้อมูลและคอลัมน์ที่เกี่ยวข้องได้จาก workbook จริง

### Practice 2 — ให้ Analyst วิเคราะห์สมมติฐาน {#practice-2--ให้-analyst-วิเคราะห์สมมติฐาน--15-นาที}

<PracticeIllustration id="d2-e03-p02" />


ใช้ Analyst สร้างข้อค้นพบที่อธิบายวิธีวิเคราะห์และข้อจำกัด

#### Steps

1. ใน Microsoft 365 Copilot เปิด `Agents` หรือ `All agents` ค้นหา `Analyst` แล้วแนบ `Krungsri_BranchKPI_28days.xlsx` ตรวจชื่อไฟล์ก่อนส่ง
2. ส่ง prompt ต่อไปนี้

   ```text
   วิเคราะห์ KPI ใน workbook นี้เพื่อทดสอบสมมติฐาน
   จำนวน complaint ที่เพิ่มขึ้นสัมพันธ์กับ loan approval turnaround time ที่สูงขึ้น

   1. ตรวจโครงสร้างและคุณภาพข้อมูล ระบุ sheet, คอลัมน์, จำนวนแถว และช่วงวันที่ที่ใช้
   2. อธิบายวิธีวิเคราะห์ รวมถึงวิธีจัดการข้อมูลต่างช่องทางหรือค่าที่ขาด
   3. แสดงตารางหรือ visualization ที่เหมาะสม
   4. สรุปว่าข้อมูลสนับสนุนสมมติฐานหรือไม่
   5. ระบุข้อจำกัดและข้อมูลที่ยังขาด

   อย่าสรุปว่าเป็นเหตุและผลจาก correlation เพียงอย่างเดียว
   ```

3. อ่านวิธีวิเคราะห์ ถ้าขอบเขตข้อมูลหรือหน่วยไม่ตรงกับ workbook ให้ถามเพื่อให้ Analyst ชี้ช่วงที่ใช้และคำนวณใหม่

#### Checkpoint

ข้อค้นพบมีวิธีวิเคราะห์ ตารางหรือภาพประกอบ และข้อจำกัดที่เชื่อมกับข้อมูลที่แนบ [Microsoft Analyst guidance](https://support.microsoft.com/en-au/microsoft-365-copilot/get-started-with-analyst-in-microsoft-365-copilot)

### Practice 3 — ตรวจข้อค้นพบกับ workbook {#practice-3--ตรวจข้อค้นพบกับ-workbook--15-นาที}

<PracticeIllustration id="d2-e03-p03" />


ตรวจตัวเลขและวิธีตีความก่อนเก็บผลวิเคราะห์

#### Steps

1. เลือกตัวเลขอย่างน้อยสองจุดจากคำตอบ เปิด `KPI_Raw` หรือ `Summary` ตรวจค่ากับช่วงข้อมูลที่ Analyst ระบุ
2. ใช้ Filter หรือสูตรใน Excel ตามวิธีที่ Analyst อธิบายเพื่อตรวจซ้ำ หากวิธีนั้นตรวจเองไม่ได้ ให้ขอให้แสดงขั้นตอนหรือช่วงข้อมูลเพิ่มเติม
3. จดตัวเลขที่ตรงกันหรือจุดที่ต้องแก้ และเขียนข้อจำกัดหนึ่งข้อ เช่น ช่วงเวลาสั้น การรวมต่างช่องทาง หรือข้อมูลที่ยังไม่มี
4. เก็บข้อค้นพบกับหลักฐานใน Word หรือเอกสารบันทึกโดยใช้ชื่อนี้

   ```text
   BranchKPI_Analyst_Findings.docx
   ```

#### Checkpoint

คุณตรวจตัวเลขอย่างน้อยสองจุดย้อนกลับถึง workbook ได้ และระบุข้อจำกัดก่อนใช้ข้อค้นพบประกอบงาน

## Checkpoint

- คำตอบใช้ sheet และคอลัมน์ตาม workbook
- ตัวเลขอย่างน้อยสองจุดผ่านการตรวจซ้ำ
- สรุปความสัมพันธ์และข้อจำกัดแยกกันชัดเจน

## Expected Output

`BranchKPI_Analyst_Findings.docx` ที่มีข้อค้นพบ ตารางหรือภาพประกอบ หลักฐานสองจุด และข้อจำกัด

## Optional Extension

<PracticeIllustration id="d2-e03-opt" />


ใช้ Copilot ใน Excel ถามโจทย์เดียวกัน แล้วเปรียบเทียบว่าขั้นไหนตรวจหลักฐานหรือคำนวณซ้ำได้สะดวกกว่า

## ไปต่อ

[← Researcher](/exercises/day-2/02-researcher.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [SME Loan File Handoff Assistant หลังพักกลางวัน →](/exercises/day-2/04-sme-handoff.md)
