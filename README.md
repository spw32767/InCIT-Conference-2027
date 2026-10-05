# InCIT Conference 2027

โครงสร้างพื้นฐานสำหรับโปรเจกต์ InCIT Conference 2027
ยังไม่มี UI template, หน้าเว็บไซต์, API สำหรับระบบงาน หรือ database schema

## Technology stack

- Frontend: Next.js (App Router) + TypeScript + Tailwind CSS
- Backend: Fastify + TypeScript
- Database: MariaDB (ติดตั้ง driver แล้ว ยังไม่เชื่อมต่อ Server)
- Package management: npm workspaces พร้อม lockfile ที่ root

## โครงสร้าง

```text
frontend/       Next.js App Router แบบหน้าว่าง และ Tailwind configuration
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

Frontend ใช้ `http://localhost:3000` และจะแสดงหน้าว่างโดยตั้งใจ
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

รอตรวจโครงสร้าง, ตัวอย่างดีไซน์ และรายการ AI Agent skills จากเจ้าของโปรเจกต์
จากนั้นจึงเริ่มพัฒนาหน้าเว็บ ระบบงาน และ schema ฐานข้อมูล
ยังไม่มีการติดตั้ง AI Agent skills ในขั้นตอนนี้

## เอกสารอ้างอิง

- [Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Fastify](https://fastify.dev/docs/latest/)
- [MariaDB Connector/Node.js](https://mariadb.com/docs/connectors/mariadb-connector-nodejs)
