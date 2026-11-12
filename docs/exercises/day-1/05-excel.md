---
prev: {"text": "Copilot in Word", "link": "/exercises/day-1/04-word.html"}
next: {"text": "Communication and Presentation", "link": "/exercises/day-2/01-communication-and-presentation.html"}
---

# Exercise — Copilot in Excel Fundamentals

## Exercise Overview

ใช้เวลา 75 นาทีสำรวจรายได้สินค้า สร้างกราฟ และเพิ่มสูตรจาก `sample_product_revenue.xlsx` ทุกผลลัพธ์ต้องตรวจกลับจากข้อมูลหรือช่วงเซลล์ก่อนบันทึก

## Prerequisites

- บัญชีที่ใช้ Microsoft 365 Copilot ใน Excel ได้
- <DownloadLink href="/files/day-1/sample_product_revenue.xlsx">sample_product_revenue.xlsx</DownloadLink> ใน OneDrive จาก [การเตรียมไฟล์](/exercises/day-1/03-copilot-chat.md)
- ใช้สำเนา workbook ของตนเองเพื่อเก็บการแก้ไข

## Scenario 1 — ตรวจรายได้สินค้าและสื่อสารด้วยกราฟ

### Practice 1 — Find and verify insights {#practice-1--find-and-verify-insights--25-นาที}

<PracticeIllustration id="d1-e05-p01" eager />


หาสินค้าที่มีรายได้สูงและตรวจตัวเลขกลับจาก workbook ได้

#### Steps

1. เปิด workbook ใน Excel บนเว็บและใช้ `Copy to` ใน OneDrive หรือบันทึกเป็นสำเนาของคุณเอง

   ```text
   sample_product_revenue-practice.xlsx
   ```

   ![สร้างสำเนา workbook ใน OneDrive](/images/screenshots/day-1/05-excel/images/copy-workbook.png)

2. เปิด `Copilot` ใน Excel ภาพจากชุดต้นฉบับแสดงปุ่มบน ribbon ส่วนตำแหน่งในบัญชีปัจจุบันอาจอยู่มุมเอกสารตามเวอร์ชันที่ได้รับ

   ![ตัวอย่างปุ่ม Copilot ใน Excel](/images/screenshots/day-1/05-excel/images/open-copilot.png)

3. ส่ง prompt จากแบบฝึกหัดต้นฉบับ

   ```text
   วิเคราะห์ workbook นี้และสรุป สินค้าที่มีรายได้รวมสูงสุด 3 อันดับ
   ```

4. ตรวจรายได้ของสินค้าอย่างน้อยสองรายการจากข้อมูล Q1–Q4 แล้วบันทึกช่วงเซลล์ที่ใช้ตรวจ หากอันดับหรือยอดต่างจากคำตอบ ให้ขอ Copilot ตรวจช่วงข้อมูลอีกครั้ง

#### Checkpoint

มีรายชื่อสามอันดับและหลักฐานตัวเลขที่ตรวจด้วยตนเองอย่างน้อยสองจุด

### Practice 2 — Create a comparison chart {#practice-2--create-a-comparison-chart--20-นาที}

<PracticeIllustration id="d1-e05-p02" />


สร้างกราฟที่ใช้ตัวเลขชุดเดียวกับ insight ที่ตรวจแล้ว

#### Steps

1. ส่ง prompt เพื่อขอ column chart

   ```text
   สร้าง column chart แสดงสินค้า 5 อันดับแรกตามรายได้รวม และตั้งชื่อกราฟให้สื่อความหมายชัดเจน โดยให้ใส่ chart ไว้ใน sheet ใหม่ที่ชื่อ "Top 5 Products"
   ```

2. ตรวจจำนวนสินค้า การเรียงอันดับ ชื่อแกน และช่วงข้อมูลของกราฟ หาก Copilot เสนอกราฟให้แทรก ให้ตรวจ preview แล้วเพิ่มลง workbook
3. เทียบสินค้าสามอันดับแรกในกราฟกับผลจาก Practice 1 แล้วแก้จุดที่ไม่ตรง

#### Checkpoint

กราฟมีห้าสินค้าและใช้รายได้รวมที่ตรวจเทียบได้จากข้อมูลต้นทาง

### Practice 3 — Add and verify formulas {#practice-3--add-and-verify-formulas--30-นาที}

<PracticeIllustration id="d1-e05-p03" />


เพิ่ม Revenue % ที่ใช้สูตรถูกช่วงและตรวจสัดส่วนรวมได้

#### Steps

1. ใช้ prompt เพื่อช่วยจัดสีและเพิ่มคอลัมน์คำนวณจากแบบฝึกหัดต้นฉบับ

   ```text
   กำหนดสีพื้นหลังของ column Q1-Q4 Revenue ตามช่วงออกเป็น 3 ช่วง โดยใช้ conditional formatting ที่ใช้เฉดสีเขียวที่เหมาะสม และสร้างคอลัมน์ใหม่ชื่อ "Revenue %" ที่คำนวณสัดส่วนรายได้ของสินค้าแต่ละรายการต่อรายได้รวมทั้งหมด
   ```

2. เปิดดูสูตรแถวแรก แถวกลาง และแถวสุดท้าย ตรวจว่าตัวหารคือรายได้รวมของสินค้าทั้งหมดและมีการตรึงช่วงอ้างอิงเหมาะสม
3. ตรวจผลรวม Revenue % ว่าใกล้ 100% ตามการปัดเศษที่แสดง และตรวจเซลล์ที่สูตรอ้างว่าครบทุกสินค้า
4. ตรวจ conditional formatting ว่าครอบคลุมคอลัมน์ Q1–Q4 ที่ต้องการ แล้วบันทึก workbook ของคุณเอง

#### Checkpoint

สูตรไม่มี error สัดส่วนคำนวณจากช่วงที่ถูกต้อง และผลงานยังมีกราฟที่ตรวจแล้ว [Microsoft Excel guidance](https://support.microsoft.com/en-us/excel/copilot/visualize-your-data-with-copilot-in-excel)

## Checkpoint

อธิบาย insight โดยชี้ข้อมูลที่ใช้ได้ กราฟตรงกับข้อมูล และสูตรผ่านการตรวจหลายแถว

## Expected Output

`sample_product_revenue-practice.xlsx` ที่มี insight สามอันดับ กราฟ Top 5 Products และ Revenue % พร้อมบันทึกช่วงเซลล์ที่ตรวจ

## Optional Extension

<PracticeIllustration id="d1-e05-opt" />


ขอให้ Copilot อธิบายกรณีที่สีเข้มทำให้ตีความผิด แล้วปรับชื่อกราฟหรือคำอธิบายให้คนอ่านเข้าใจง่ายขึ้น

[← Copilot in Word](/exercises/day-1/04-word.md) · [สารบัญ Day 1](/exercises/day-1/index.md) · [Day 2 Communication and Presentation →](/exercises/day-2/01-communication-and-presentation.md)
