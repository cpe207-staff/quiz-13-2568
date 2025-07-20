# Quiz 01 : TypeScript Programming

ให้น.ศ.เขียนโปรแกรมโดยใช้ `Node.js + TypeScript` ตามคำสั่งของโจทย์ในข้อต่าง ๆ ตามรายละเอียดด้านล่างนี้

[คลิกเพื่อดูรายละเอียด](https://o365cmu-my.sharepoint.com/:b:/g/personal/dome_potikanond_cmu_ac_th/EUet1dLMMl5NqTZxwDzNENIBktSLo_SMoIcymQoq-cetbQ?e=DtcYnT)

### ป้อนข้อมูลนักศึกษา

รหัส นศ.:

ชื่อ-สกุล :

---

### คำเตือน

ไฟล์ที่อนุญาตให้ นศ. แก้ไขได้ คือ ไฟล์ `q*.ts` เท่านั้น นอกเหนือจากนี้ห้ามแก้ไขโดยเด็ดขาด

หากมีการแก้ไขไฟล์อื่นใดแล้วทำให้ระบบ autograde ไม่สามารถทำงานได้ นศ. อาจทำให้ นศ. ไม่ได้คะแนนจากการสอบครั้งนี้

### คำอธิบายเกี่ยวกับการใช้งาน TypeScript

หากโปรเจคมี `package.json` แล้วให้ติดตั้ง package ต่าง ๆ ที่เป็น `dependencies` ของโปรเจคด้วยคำสั่ง

```bash
$ pnpm install
```

เมื่อต้องการรัน `filename.ts` สามารถใช้คำสั่งต่อไปนี้

```bash
$ npx tsx <filename>
```

### ทดสอบการทำงาน

นศ. สามารถทำการทดสอบความถูกต้องของโปรแกรมภายในเครื่อง นศ. ได้ด้วยการรันคำสั่งต่อไปนี้

```base
$ npm test <filename>
```

### หมายเหตุ:

นศ. ไม่จำเป็นต้อง compile ไฟล์ TypeScript เป็น JavaScript ก่อนจะ push ส่งงาน
