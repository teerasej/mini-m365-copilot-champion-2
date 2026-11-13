---
prev: {"text": "SME Handoff Agent and Skill", "link": "/exercises/day-2/04-sme-handoff.html"}
next: false
---

# Exercise — Group Agent Challenge and Showcase

## Exercise Overview

รวมเป็น 5 กลุ่ม เลือกปัญหางานภายในของพนักงานที่เกี่ยวกับธุรกิจ Krungsri แล้วสร้าง Agent ใหม่ด้วย Agent Builder กลุ่มของคุณเป็นผู้ออกแบบ สาธิต และอธิบายว่าผลลัพธ์ตรวจสอบได้อย่างไร ใช้แนวทางต่อไปนี้ตามลำดับ แล้วรับ feedback เพื่อปรับผลงาน

## Prerequisites

- ทำ [SME Handoff Agent and Skill](/exercises/day-2/04-sme-handoff.md) แล้ว เพื่อใช้แนวทางกำหนดขอบเขต Knowledge และการทดสอบกับโจทย์ใหม่
- ใช้บัญชีอบรมที่เปิด Agent Builder ได้ ต้องตรวจสิทธิ์ Microsoft 365 Copilot และการเพิ่ม Knowledge ก่อนเริ่ม ตาม [Microsoft Agent Builder](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder)
- ดาวน์โหลด <DownloadLink href="/files/day-2/group-agent/group-project-brief.md">Project brief</DownloadLink>, <DownloadLink href="/files/day-2/group-agent/group-test-log.md">Test log</DownloadLink>, <DownloadLink href="/files/day-2/group-agent/group-presentation-outline.md">Presentation outline</DownloadLink> และ <DownloadLink href="/files/day-2/group-agent/group-peer-review.md">Peer review</DownloadLink> หรือแตก <DownloadLink href="/downloads/day-2-practice-files.zip">Day 2 practice files</DownloadLink>
- ใช้ข้อมูลสมมติหรือข้อมูลสาธารณะที่ระบุที่มา หลีกเลี่ยงข้อมูลลูกค้าจริง ข้อมูลส่วนบุคคล และเอกสารภายในที่ไม่ได้รับอนุญาต

## Scenario 1 — ผู้ช่วยสำหรับงานภายในของกลุ่ม

เลือกงานเล็กหนึ่งเรื่องที่ทำซ้ำและมีข้อมูลสำหรับตรวจผล เช่น เตรียมสรุปเรื่องส่งต่อระหว่างทีมงานสาขา รวบรวมคำถามจากพนักงานธุรกิจ SME หรือช่วยพนักงานตรวจรายการเตรียมประชุมกับธุรกิจในห่วงโซ่ยานยนต์ ตัวอย่างเหล่านี้เป็นแนวคิดให้เลือกขอบเขต ไม่ใช่กระบวนการจริงของ Krungsri

### Practice 1 — Define the group project {#practice-1--define-the-group-project}

<PracticeIllustration id="d2-group-p01" eager />

กำหนดโจทย์งานหนึ่งเรื่องให้ชัดพอที่จะสร้างและตรวจ Agent ได้

#### Steps

1. แบ่งเป็น 5 กลุ่ม และเลือกผู้บันทึก ผู้สร้าง Agent ผู้ทดสอบ และผู้นำเสนอ สมาชิกช่วยกันตรวจผลงานได้ทุกบทบาท
2. เปิด `group-project-brief.md` แล้วตกลงว่า Agent ช่วยพนักงานบทบาทใด งานเริ่มจากอะไร และต้องเตรียมผลลัพธ์แบบไหน เลือกความสามารถหลักเพียงหนึ่งเรื่องก่อน
3. ระบุแหล่งข้อมูลที่จะใช้และเจ้าของงานที่รับต่อ กำหนดสิ่งที่ Agent ไม่ควรทำ เช่น ตัดสินสินเชื่อ อนุมัติวงเงิน หรืออ้างว่าดำเนินการในระบบจริงแล้ว
4. เขียนเกณฑ์ตรวจผลที่สังเกตได้ เช่น อ้างรหัสข้อมูลครบ ไม่เติมข้อเท็จจริงที่ไม่มี และขอข้อมูลเพิ่มเมื่อคำขอไม่ชัด

**Checkpoint:** สมาชิกอธิบายโจทย์เดียวกันได้ด้วยผู้ใช้ งาน ข้อมูล ผลลัพธ์ และขอบเขต พร้อม project brief ที่ใช้สร้าง Agent ต่อได้

### Practice 2 — Build the group agent {#practice-2--build-the-group-agent}

<PracticeIllustration id="d2-group-p02" />

สร้าง Agent ที่ทำงานตาม project brief โดยใช้แหล่งข้อมูลที่กลุ่มตรวจได้

#### Steps

1. ใน project brief เติมส่วน Process note ด้วยขั้นตอนสมมติ ข้อเท็จจริง และกติกาการส่งต่อสั้น ๆ ให้แต่ละข้อมีรหัสอ้างอิง เช่น F01 หรือ R01 คัดลอกส่วนนี้ไปบันทึกเป็นไฟล์ `.txt` ของกลุ่ม หากใช้ข้อมูลสาธารณะ ให้บันทึก URL และแยกให้ชัดจากกติกาที่กลุ่มสมมติขึ้น
2. เปิด Microsoft 365 Copilot → `New agent` แล้วไปที่ `Configure` ตั้งชื่อและ Description ให้บอกงานของกลุ่ม ใส่ Instructions ของกลุ่มตามโครงต่อไปนี้ โดยแทนข้อความในวงเล็บก่อนบันทึก

   ```text
   Help [employee role] with [one internal work task].
   Use [the group's synthetic process-note filename] as the source for workshop process facts and routing rules.
   Produce [the agreed draft output] and cite the source record IDs behind factual statements.
   Ask for missing information rather than inventing it.
   Keep [out-of-scope actions] with [the responsible employee role].
   Label the result as a workshop draft for employee review.
   ```

3. ใน `Knowledge` เพิ่มไฟล์ `.txt` ที่กลุ่มสร้าง รอให้พร้อม แล้วเปิด `Try it` ถามถึงข้อเท็จจริงหนึ่งข้อในไฟล์ ตรวจว่าตอบพร้อมรหัสอ้างอิงถูกต้องก่อนใช้ทดสอบงานเต็มรูปแบบ
4. บันทึก Agent และกรอกชื่อ Agent กับแหล่งข้อมูลที่ใช้ใน project brief หากดึงข้อมูลไม่ได้ ให้แก้แหล่งข้อมูลหรือการตั้งค่าแล้วทดสอบอีกครั้ง

**Checkpoint:** Agent ตอบคำถามจาก Process note ของกลุ่มได้ และอ้างกลับไปยังข้อที่ตรวจได้ในไฟล์

### Practice 3 — Test and refine the group agent {#practice-3--test-and-refine-the-group-agent}

<PracticeIllustration id="d2-group-p03" />

ใช้ผลทดสอบตรวจว่า Agent ทำงานได้ตามโจทย์และหยุดเมื่อข้อมูลหรือขอบเขตไม่รองรับ

#### Steps

1. เปิด `group-test-log.md` เขียนคำขอของกลุ่มและผลที่คาดหวังก่อนรันให้ครบสามแบบ
   - **งานปกติ:** ข้อมูลครบ Agent ควรทำงานหลักและอ้างหลักฐานได้
   - **ข้อมูลไม่พอ:** ขาดข้อมูลสำคัญ Agent ควรระบุสิ่งที่ขาดหรือถามเพิ่ม
   - **คำขอนอกขอบเขต:** ขอสิ่งที่ Agent ไม่รับผิดชอบ Agent ควรอธิบายขอบเขตและส่งต่อให้พนักงานที่ระบุไว้
2. ใน `Try it` เริ่มบทสนทนาใหม่สำหรับแต่ละกรณี เก็บคำตอบหรือภาพหน้าจอ แล้วเทียบกับผลที่คาดหวังและ Process note
3. เลือกจุดที่ควรปรับหนึ่งเรื่อง แก้ Instructions หรือข้อมูลที่เกี่ยวข้อง บันทึก Agent แล้วรันกรณีเดิมซ้ำด้วยคำขอเดิม
4. บันทึกสิ่งที่เปลี่ยนและผลก่อน/หลัง หากยังไม่ผ่าน ให้ระบุข้อจำกัดไว้เพื่อนำเสนอพร้อมหลักฐาน

**Checkpoint:** มีผลทดสอบครบสามกรณี และหนึ่งกรณีที่รันซ้ำหลังปรับ พร้อมอธิบายสิ่งที่ดีขึ้นหรือยังติดขัดได้

### Practice 4 — Present and save the group project {#practice-4--present-and-save-the-group-project}

<PracticeIllustration id="d2-group-p04" />

นำเสนอผลงานให้เพื่อนตรวจคุณค่าของ Agent จากโจทย์และหลักฐานที่กลุ่มเก็บไว้

#### Steps

1. เติม `group-presentation-outline.md` ให้จบในหนึ่งหน้า ครอบคลุมปัญหา ผู้ใช้ ความสามารถ แหล่งข้อมูล ตัวอย่างผลทดสอบ และจุดที่คนต้องตรวจ
2. ทุกกลุ่มนำเสนอและสาธิต Agent จากกรณีงานปกติ พร้อมชี้ผลของกรณีข้อมูลไม่พอและนอกขอบเขตจาก test log หากเปิด Agent ไม่ได้ ให้ใช้คำตอบหรือภาพที่เก็บไว้และบอกสถานะตามจริง
3. กลุ่มผู้ฟังใช้ `group-peer-review.md` ให้ feedback โดยระบุหนึ่งจุดที่มีหลักฐานรองรับและหนึ่งจุดที่ควรปรับ
4. กลุ่มบันทึก feedback และขั้นตอนที่จะปรับต่อ บันทึก Agent ใน Agent Builder แล้วจดชื่อและหลักฐานการเปิด Agent ไว้ใน project brief หากบัญชีอนุญาตให้ใช้ลิงก์จึงบันทึกลิงก์นั้นด้วย เก็บ Process note และสำเนาใบงานทั้งสี่ไฟล์ในโฟลเดอร์หมายเลขกลุ่มของตนเอง

**Checkpoint:** ทั้ง 5 กลุ่มได้เสนอผลงาน แต่ละกลุ่มมีหลักฐานทดสอบ ขอบเขตให้คนตรวจ และ feedback ที่นำไปปรับต่อได้

## Checkpoint

กลุ่มสร้าง Agent ใหม่ตามโจทย์งานภายในที่เลือก ทดสอบสามสถานการณ์ ปรับและทดสอบซ้ำหนึ่งกรณี แล้วนำเสนอโดยอ้างหลักฐานและระบุข้อจำกัดได้

## Expected Output

- Agent ใหม่ของกลุ่มที่บันทึกใน Agent Builder พร้อมชื่อและหลักฐานใน project brief
- Process note ที่เป็นข้อมูลสมมติหรือข้อมูลสาธารณะพร้อมที่มา เก็บในโฟลเดอร์งานของกลุ่ม
- `group-project-brief.md` ที่ระบุผู้ใช้ งาน ข้อมูล ผลลัพธ์ และขอบเขต
- `group-test-log.md` พร้อมสามกรณีและผลทดสอบซ้ำ
- `group-presentation-outline.md` หนึ่งหน้า และ `group-peer-review.md` ที่บันทึก feedback แล้ว

## Optional Extension

<PracticeIllustration id="d2-group-opt" />

ถ้า Agent มีกระบวนการที่ต้องทำซ้ำ ให้ลองแยกเป็น Skill โดยใช้แนวทางจาก [SME Handoff Agent and Skill](/exercises/day-2/04-sme-handoff.md#practice-1--author-the-handoff-review-skill--35-นาที) แล้วทดสอบกับโจทย์ของกลุ่ม หากบัญชีใช้ Skill ไม่ได้ ให้เก็บขั้นตอนเดียวกันใน Instructions การเพิ่ม Skill ไม่ใช่เงื่อนไขส่งงานกลุ่ม

[← SME Handoff Agent and Skill](/exercises/day-2/04-sme-handoff.md) · [สารบัญ Day 2](/exercises/day-2/index.md) · [เก็บผลงานหลังจบหลักสูตร](/index.md#เก็บผลงานหลังจบหลักสูตร)
