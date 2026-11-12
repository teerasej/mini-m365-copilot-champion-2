---
prev: {"text": "Copilot in Excel", "link": "/exercises/day-1/05-excel.html"}
next: {"text": "Researcher", "link": "/exercises/day-2/02-researcher.html"}
---

# Section 1 — Communication and Presentation

## Exercise Overview

เวลา 09:00–10:30 รวม 90 นาที พวกเราจะสรุปอีเมล ร่างข้อความตอบกลับ เก็บงานจากการประชุม และสร้าง Presentation จากเอกสารอ้างอิง ใช้ 10 นาทีแรกทบทวนการให้บริบทและตรวจผลจาก Day 1 จากนั้นฝึก Outlook 25 นาที Teams 25 นาที และ PowerPoint 30 นาที

## Prerequisites

- บัญชีองค์กรที่มี Microsoft 365 Copilot license และเปิด Copilot ใน Outlook, Teams และ PowerPoint ได้
- ผู้สอนเตรียม email thread สมมติไว้ในกล่องจดหมายอบรม โดยใช้ <DownloadLink href="/files/day-2/morning/outlook-training-thread.txt">ข้อความอีเมลตัวอย่าง</DownloadLink> เป็นเนื้อหาเตรียมล่วงหน้า
- มีการประชุมอบรมที่บันทึก transcript แล้วและบัญชีของคุณมีสิทธิ์เปิด `Recap` พร้อม Copilot หรือเตรียม <DownloadLink href="/files/day-2/morning/branch-operations-review-15min.vtt">transcript ตัวอย่าง 15 นาที</DownloadLink> สำหรับเส้นทางฝึกจากไฟล์
- ดาวน์โหลด <DownloadLink href="/files/day-2/morning/Business%20Idea.docx">Business Idea.docx</DownloadLink> แล้วอัปโหลด OneDrive ด้วยบัญชีที่ใช้ PowerPoint ใช้ไฟล์ต้นทางนี้สำหรับการสร้าง Presentation
- เก็บผลงานในโฟลเดอร์งานฝึกของคุณเอง

## Scenario 1 — สื่อสารงาน Branch Operations

### Practice 1 — สรุป email thread {#practice-1--สรุป-email-thread--10-นาที}

<PracticeIllustration id="d2-e01-p01" eager />


ใช้ Copilot in Outlook ดึงประเด็นและงานค้างจากอีเมลที่เตรียมไว้

#### Steps

1. เปิด Outlook ด้วยบัญชีอบรม แล้วเปิด email thread ตัวอย่างของ Branch Operations
2. เลือก `Summary by Copilot` หรือ `Summarize` ที่ด้านบนของ thread แล้วอ่านสรุป
3. เปิดข้อความต้นทางเทียบตัวเลข ประเด็นที่ต้องติดตาม และผู้รับผิดชอบ จดหนึ่งจุดที่สรุปได้ครบหรือควรแก้

#### Checkpoint

สรุปตรงกับข้อความต้นทาง และคุณชี้อีเมลที่รองรับประเด็นสำคัญได้ [Microsoft Outlook summary guidance](https://support.microsoft.com/en-us/outlook/copilot-pages/summarize-an-email-thread-with-copilot-in-outlook)

### Practice 2 — ร่างข้อความตอบกลับใน Outlook {#practice-2--ร่างข้อความตอบกลับใน-outlook--15-นาที}

<PracticeIllustration id="d2-e01-p02" />


สร้างร่างตอบกลับที่มีงานถัดไปและรายการที่ต้องขอข้อมูลเพิ่ม

#### Steps

1. ใน thread เดิมเลือก `Reply` แล้วเปิด `Draft with Copilot` จากเมนู Copilot ในหน้าร่างข้อความ

   ![เปิด Draft with Copilot ในหน้าร่างข้อความ](/images/screenshots/day-2/01-communication-and-presentation/images/outlook-draft-with-copilot.png)

2. วาง prompt ต่อไปนี้แล้วสร้างร่าง

   ```text
   ร่างข้อความตอบกลับภาษาไทยถึงทีม Branch Operations จาก email thread นี้
   สรุปปัญหาเรื่องเอกสารประกอบคำขอสินเชื่อไม่ครบ
   ขอให้ทีมจัดทำ checklist เอกสารก่อนยื่น และระบุข้อมูลที่ยังต้องยืนยัน
   แยกงานถัดไป ผู้รับผิดชอบ และกำหนดเวลาที่พบในอีเมล
   หากข้อมูลส่วนใดไม่มี ให้ระบุว่าต้องยืนยันเพิ่ม ใช้โทนสุภาพและกระชับ
   ```

3. ตรวจตัวเลข ชื่อบทบาท และกำหนดเวลากับ thread แล้วปรับหนึ่งจุดให้ชัดเจน หากต้องการใช้ข้อความให้เลือก `Keep it` หรือแทรกร่างตามเมนูที่ปรากฏ
4. เก็บเป็นร่างใน Outlook และคัดลอกข้อความที่ตรวจแล้วไปเก็บกับผลงานของคุณ

#### Checkpoint

ร่างมีงานถัดไปที่อ้างอิงอีเมลได้ และแยกรายการที่ยังต้องถามให้ชัดเจน [Microsoft Outlook drafting guidance](https://support.microsoft.com/en-us/outlook/frequently-asked-questions-about-copilot-in-outlook)

### Practice 3 — สรุป meeting เป็น Action items {#practice-3--สรุป-meeting-เป็น-action-items--25-นาที}

<PracticeIllustration id="d2-e01-p03" />


แปลงข้อความจากการประชุมเป็น Decisions, Action items และ Risks/Dependencies ที่ตรวจย้อนกลับได้

#### Steps

1. ใน Teams เปิดการประชุมอบรมที่ผู้สอนเตรียมไว้ เลือก `Recap` แล้วเปิด Copilot
2. ถ้าใช้เส้นทางไฟล์ ให้เปิด Microsoft 365 Copilot Chat แนบ `branch-operations-review-15min.vtt` และระบุในบันทึกผลงานว่าใช้ transcript ตัวอย่าง เส้นทางนี้เป็นการฝึกอ่านไฟล์ใน Copilot Chat ส่วนการทดสอบ Teams ให้บันทึกตามหน้าจอที่ใช้จริง
3. ส่ง prompt นี้ในเส้นทางที่คุณใช้

   ```text
   สรุปประเด็นสำคัญจากการประชุมนี้ โดยแยกเป็น
   - Decisions การตัดสินใจที่เกิดขึ้น
   - Action items สิ่งที่ต้องทำ พร้อม Owner และ Due date
   - Risks/Dependencies ความเสี่ยงและสิ่งที่ต้องขึ้นต่อกัน
   อ้างเวลาใน transcript หรือข้อความที่รองรับแต่ละรายการ
   หากไม่พบ Owner หรือ Due date ให้ระบุว่าต้องยืนยัน
   ```

4. เทียบ Action items อย่างน้อยสองรายการกับ transcript ตรวจผู้รับผิดชอบและกำหนดเวลา แล้วเก็บสรุปพร้อมบอกเส้นทางที่ใช้

#### Checkpoint

สรุปแยกครบทั้งสามกลุ่ม และมีหลักฐานรองรับ Action items อย่างน้อยสองรายการ การใช้ Copilot หลังประชุมขึ้นอยู่กับ transcript และสิทธิ์ของบัญชี [Microsoft Teams meeting guidance](https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams)

## Scenario 2 — สร้าง Presentation จากเอกสารอ้างอิง

### Practice 4 — สร้างและตรวจ Presentation {#practice-4--สร้างและตรวจ-presentation--30-นาที}

<PracticeIllustration id="d2-e01-p04" />


ใช้ Copilot in PowerPoint เปลี่ยน `Business Idea.docx` เป็นร่าง Presentation ที่ตรวจเทียบแหล่งข้อมูลได้

#### Steps

1. เปิด PowerPoint บนเว็บด้วยบัญชีอบรมและเริ่ม Presentation ใหม่ เปิด Copilot แล้วเลือกการสร้างจากไฟล์ เช่น `Create with Copilot` และ `Reference file` ตามหน้าจอของบัญชีคุณ
2. เลือก `Business Idea.docx` จาก OneDrive ถ้าหน้าจอเป็น Copilot Chat ให้แนบหรืออ้างไฟล์เดียวกันผ่านตัวเลือกไฟล์ที่แสดง

   ![ตัวอย่างการสร้าง Presentation จากไฟล์ใน PowerPoint](/images/screenshots/day-2/01-communication-and-presentation/images/powerpoint-create-from-file.png)

3. ส่ง prompt ต่อไปนี้

   ```text
   สร้าง Presentation ภาษาไทยสำหรับนำเสนอแนวคิดธุรกิจจาก Business Idea.docx ที่แนบ
   กลุ่มผู้ฟังคือผู้บริหารที่พิจารณาการสนับสนุนโครงการ
   โครงสร้างต้องมี ปัญหา โอกาสทางธุรกิจ แนวทางดำเนินงาน ประโยชน์ ความเสี่ยง และขั้นตอนถัดไป
   รวมทั้งหมด 6 สไลด์ โดยให้แต่ละสไลด์มีหัวข้อและเนื้อหาที่ชัดเจน
   ใช้ข้อความสั้น กระชับ และใช้ข้อเท็จจริงจากไฟล์อ้างอิง
   ```

4. ตอบคำถามเพื่อระบุรายละเอียด ตรวจโครงร่าง แล้วสร้างสไลด์ตามหน้าจอที่ปรากฏ
5. ตรวจข้อเท็จจริงอย่างน้อยสองจุดกับ Word ต้นทาง แก้เนื้อหาหรือรูปประกอบที่ไม่ตรง และบันทึกผลงานด้วยชื่อนี้

   ```text
   Business_Idea_DecisionBrief.pptx
   ```

#### Checkpoint

Presentation มีลำดับเรื่องครบตามโจทย์และคุณเปิดต้นทางยืนยันข้อเท็จจริงได้อย่างน้อยสองจุด ภาพตัวอย่างแสดงหน้าจอจากต้นฉบับ เมนูอาจต่างตามการอัปเดต [Microsoft PowerPoint source-file guidance](https://support.microsoft.com/en-us/microsoft-365-copilot/prepare-your-presentation-with-microsoft-365-copilot)

## Checkpoint

- สรุปและร่างอีเมลมีหลักฐานจาก thread
- บันทึกสรุป meeting ระบุเส้นทาง Teams หรือ transcript ตัวอย่างที่ใช้
- Presentation ใช้ Word ต้นทางและผ่านการตรวจข้อเท็จจริง

## Expected Output

- สรุป email thread และร่างข้อความตอบกลับหนึ่งฉบับ
- สรุป meeting พร้อม Action items และหลักฐานสองรายการ
- `Business_Idea_DecisionBrief.pptx` ที่ตรวจแล้ว

## Optional Extension

<PracticeIllustration id="d2-e01-opt" />


ให้ Copilot เสนอคำถามที่ผู้บริหารอาจถามหนึ่งข้อ แล้วตรวจว่ามีข้อมูลในเอกสารต้นทางเพียงพอตอบหรือควรขอข้อมูลเพิ่ม

## ไปต่อ

[← Day 1 Excel](/exercises/day-1/05-excel.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [Researcher →](/exercises/day-2/02-researcher.md)
