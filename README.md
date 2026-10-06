# InCIT Conference 2027

โครงสร้างพื้นฐานสำหรับโปรเจกต์ InCIT Conference 2027
มีหน้า Home, navigation และ footer แล้ว โดยหน้า Home ใช้ข้อมูลตัวอย่างใน About และ Important Dates ระหว่างรอข้อมูลจริง
ยังไม่มี API สำหรับระบบงาน หรือ database schema

## Technology stack

- Frontend: Next.js (App Router) + TypeScript + Tailwind CSS
- Backend: Fastify + TypeScript
- Database: MariaDB (ติดตั้ง driver แล้ว ยังไม่เชื่อมต่อ Server)
- Package management: npm workspaces พร้อม lockfile ที่ root

## โครงสร้าง

```text
frontend/       Next.js App Router, shared header/footer และหน้า Coming soon
backend/        Fastify server พื้นฐาน ยังไม่มี application routes
database/       ไฟล์ schema, migrations และ seed data ในขั้นถัดไป ไม่ใช่ที่เก็บตัวฐานข้อมูล
```

## เริ่มพัฒนา

ใช้ Node.js 24 LTS และ npm 11 ขึ้นไป แล้วติดตั้งจาก root:

```sh
npm ci
```

เปิดสอง terminal จาก root:

```sh
npm run dev:frontend
```

```sh
npm run dev:backend
```

Frontend ใช้ `http://localhost:3000`
กำหนดพอร์ต 3000 สำหรับ Next.js และ 8000 สำหรับ backend เพื่อให้รันพร้อมกันได้
Backend ใช้ `http://127.0.0.1:8000` และจะตอบ 404 ทุก path จนกว่าจะเพิ่ม routes
ทั้งสองส่วนยังไม่ได้เชื่อมต่อกัน

หากต้องการปรับ backend environment ให้คัดลอก `backend/.env.example` เป็น `backend/.env`
ตัวแปร DB เป็นเพียงค่าที่เตรียมไว้ ยังไม่มีโค้ดใช้งานหรือการเชื่อมต่อ MariaDB
ไฟล์ `.env` ถูกละเว้นจาก Git

## ฐานข้อมูลสำหรับพัฒนา

ทีมใช้ MariaDB Server สำหรับพัฒนาที่เตรียมไว้แล้วร่วมกัน เพื่อให้ทุกคนทำงานกับฐานข้อมูลก้อนเดียวกัน
Server นี้แยกจาก production และไม่ต้องติดตั้งหรือรัน MariaDB บนเครื่องของสมาชิกแต่ละคน
Frontend และ backend ยังรันบนเครื่องพัฒนาได้ โดย backend จะเชื่อมต่อไปยัง Server กลางเมื่อเพิ่มโค้ดเชื่อมต่อ

ให้สมาชิกคัดลอก `backend/.env.example` เป็น `backend/.env` และกรอก `DB_HOST`, `DB_PORT`,
`DB_NAME`, `DB_USER`, `DB_PASSWORD` ตามข้อมูลของฐานข้อมูลสำหรับพัฒนาที่ทีมได้รับ
ช่องว่างในไฟล์ตัวอย่างตั้งใจเว้นไว้เพื่อรอข้อมูลจริง และพอร์ต 3306 เป็นเพียงค่าเริ่มต้นของ MariaDB
เก็บข้อมูลเชื่อมต่อไว้ฝั่ง backend ไม่ใส่ใน frontend หรือ commit รหัสผ่านลง Git

โฟลเดอร์ `database/` มีไว้เก็บไฟล์โครงสร้างและประวัติการเปลี่ยนแปลงฐานข้อมูล (schema/migrations)
รวมถึง seed data ที่ทีมอาจเพิ่มภายหลัง ไม่ใช่ตัว MariaDB Server หรือโฟลเดอร์เก็บข้อมูลจริง
ไฟล์เหล่านี้ใช้จัดการฐานข้อมูลบน Server กลางได้เช่นกัน
เนื่องจากทีมใช้ฐานข้อมูลร่วมกัน ควรประสานงานก่อนรัน migrations หรือ seed ที่เปลี่ยนข้อมูลของสมาชิกคนอื่น

สถานะปัจจุบัน: ติดตั้ง driver แล้ว แต่ยังไม่มีโค้ดเชื่อมต่อ, schema, migrations หรือ seed และยังไม่ได้เชื่อมต่อ Server จริง

## ตรวจสอบและ build

```sh
npm run typecheck
npm run build
```

ผล build อยู่ใน `frontend/.next` และ `backend/dist`
หลัง build สามารถใช้ `npm start --workspace frontend` เพื่อรัน frontend
และ `npm start --workspace backend` เพื่อรัน backend

Frontend ใช้ App Router และกำหนดชื่อเว็บไซต์ผ่าน Metadata API ใน `frontend/src/app/layout.tsx`
เตรียมฐานสำหรับ SEO โดยยังรอเนื้อหาจริงและโดเมนก่อนเพิ่ม description, canonical, Open Graph และ sitemap
คำสั่ง typecheck จะสร้าง Next.js route types ก่อนตรวจ TypeScript จึงใช้ได้หลัง clone ใหม่

## ขั้นตอนถัดไป

โครงเว็บเน้นความเรียบง่ายและอ่านง่ายสำหรับงานวิชาการ ใช้ palette
`#EBF0F6`, `#98CCD3`, `#364E68`, `#132238`
Header ติดด้านบน มีชื่อ InCIT 2027 ทางซ้ายสุด ตามด้วยโลโก้ College of Computing และ navigation ทางขวา
บนจอเล็กใช้ปุ่ม Menu และกดขยาย dropdown ได้
Home มี hero ชื่อเต็มงานและปี 2027 พร้อมภาพประกอบทางขวาและคลื่น SVG ในชุดสีของเว็บ
About และ Important Dates เป็น section ใน Home พร้อม anchor links และสลับพื้นหลังขาวกับฟ้าเทาอ่อน
ข้อมูล About และกำหนดการทั้งหมดเป็น mockup ที่ระบุไว้บนหน้า ต้องเปลี่ยนเป็นข้อมูลที่อนุมัติก่อนใช้งานจริง
แนวทางการออกแบบและ prompt ภาพประกอบอยู่ใน `docs/home-design.md` โดยยังรอข้อมูลติดต่อจริง
หน้ารองทั้ง 19 หน้าแสดง Coming soon และตั้ง noindex ไว้จนกว่าจะมีเนื้อหาจริง
รายการเมนูกำหนดรวมไว้ใน `frontend/src/lib/navigation.ts`

`images_for_agents/` เป็นโฟลเดอร์รับรูปชั่วคราว เมื่อระบุว่าจะใช้รูปที่ไหน ให้ย้ายรูปไปยังตำแหน่งจริงของโปรเจกต์
รูป static สำหรับเว็บไซต์เก็บใน `frontend/public/images/` และอ้างอิงด้วย `/images/<ชื่อไฟล์>` เพื่อใช้ได้ตอน deploy
แสดงรูปด้วย `next/image` และกำหนด `sizes` ให้ตรงกับขนาดที่แสดง เพื่อให้ browser โหลดภาพที่ย่อและปรับรูปแบบแล้ว
รูปใต้ส่วนแรกของหน้าควรใช้ lazy loading ตามค่าเริ่มต้น ส่วนโลโก้ใน header โหลดทันที

รอตรวจโครงหน้าและทยอยเพิ่มรายละเอียดแต่ละส่วนตามข้อมูลจากเจ้าของโปรเจกต์
จากนั้นจึงพัฒนาระบบงาน และ schema ฐานข้อมูล
## UI tools และ Agent skills

เวลาพัฒนาหรือปรับ UI ให้ใช้ skill ทั้งสองตัวที่ติดตั้งไว้ในโปรเจกต์:

- [Impeccable](https://impeccable.style/): อ่าน `.agents/skills/impeccable/SKILL.md` เพื่อออกแบบ layout, typography, responsive และตรวจคุณภาพ UI
- [shadcn/ui skill](https://ui.shadcn.com/docs/skills): อ่าน `.agents/skills/shadcn/SKILL.md` เพื่อค้นหา เพิ่ม และประกอบ component ตาม API ทางการ

กติกาสำหรับ agent อยู่ใน `AGENTS.md` ที่ root และ `frontend/AGENTS.md`
คง palette ของงานและ Montserrat โดยปรับ component ผ่าน semantic tokens ใน `frontend/src/app/globals.css`
ตรวจ desktop/mobile และ typecheck ก่อนส่งงาน ไม่เพิ่ม component ทั้งชุดโดยไม่มีการใช้งาน
Skills พร้อมให้เรียกใน turn ถัดไป หากยังไม่ปรากฏ ให้เปิดแชตใหม่ในโปรเจกต์นี้

shadcn ตั้งค่าไว้ที่ `frontend/components.json` ใช้ Radix, Tailwind v4 และ alias `@/*` ไปยัง `frontend/src/*`
component เก็บเป็น source code ใน `frontend/src/components/ui/` และ helper `cn()` อยู่ใน `frontend/src/lib/utils.ts`
รันจากโฟลเดอร์ `frontend/`:

```sh
cd frontend
npx shadcn info --json
npx shadcn add @shadcn/button
```

ตัวอย่างการเรียก skill ใน Codex: `$impeccable polish หน้า Home` หรือขอให้ใช้ shadcn เพิ่ม component ที่ต้องการ
ตัว CLI ตรวจจับ Next.js รุ่นที่ใช้ไม่ผ่าน จึงตั้งค่าตาม [Manual Installation](https://ui.shadcn.com/docs/installation/manual)
คำสั่งเพิ่ม component ใช้ config ที่เตรียมไว้ได้
เพิ่ม `Button` จาก registry ทางการไว้เป็น component เริ่มต้นแล้ว

อัปเดต Impeccable ภายในโปรเจกต์:

```sh
npx impeccable update
```

ติดตั้งแบบ project-local โดยไม่มี automatic hooks; ใช้ skill ได้โดยตรง
Impeccable engine เป็นไฟล์เฉพาะระบบที่ไม่ commit ลง Git ตัว launcher จะดาวน์โหลดเมื่อใช้งานครั้งแรกหลัง clone
ไฟล์ skill และ reference ทั้งสองชุดเก็บใน Git เพื่อให้สมาชิกใช้ร่วมกันได้
ณ วันที่ติดตั้ง (6 ตุลาคม 2026) `npm audit --omit=dev` ไม่พบช่องโหว่
แต่ `npm audit` รายงาน high 7 รายการจาก dependency chain ของ shadcn CLI ฝั่ง dev
(ต้นเหตุ `braces` ไม่มีรุ่นแก้ไขใน registry ณ เวลาตรวจ) ให้ตรวจซ้ำเมื่ออัปเดต CLI
ไม่ใช้ `npm audit fix --force` เพราะคำแนะนำขณะนี้จะ downgrade CLI เป็นรุ่นเก่า

## เอกสารอ้างอิง

- [Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Fastify](https://fastify.dev/docs/latest/)
- [MariaDB Connector/Node.js](https://mariadb.com/docs/connectors/mariadb-connector-nodejs)
